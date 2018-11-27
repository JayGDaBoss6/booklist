// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
   }
   
   // UI Constructor
   function UI() {}
   
   // add book to list
   UI.prototype.addBookToList = function(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
   
    UI.prototype.clearFields = function() {
     document.getElementById("title").value = "";
     document.getElementById("author").value = "";
     document.getElementById("isbn").value = "";
    };
    // insert columns
    row.innerHTML = `
   <td>${book.title}</td>
   <td>${book.author}</td>
   <td>${book.isbn}</td>
   <td><a class="delete" href="#">X</a></td>`;
   
    list.appendChild(row);
   };
   
   //Event Listeners
   document.getElementById("book-form").addEventListener("submit", function(e) {
    //Get form values
    const title = document.getElementById("title").value,
     author = document.getElementById("author").value,
     isbn = document.getElementById("isbn").value;
   
    //instantiating new book.
    const book = new Book(title, author, isbn);
   
    // instantiating UI
    const ui = new UI();
   
    // Add book to book list
    ui.addBookToList(book);
   
    //clear fields
    ui.clearFields();
   
    e.preventDefault();
   });
   