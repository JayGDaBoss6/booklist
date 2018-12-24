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
    const list = document.getElementById('book-list');
    const row = document.createElement('tr');
    // insert columns
    row.innerHTML = `
   <td>${book.title}</td>
   <td>${book.author}</td>
   <td>${book.isbn}</td>
   <td><a class="delete" href="#">X</a></td>`;
   
    list.appendChild(row);
   };
   
   
   document.querySelector("table").addEventListener("click", function(e){
   const ui = new UI();
   ui.deleteBook(e.target);
    e.preventDefault();
     })
   
   UI.prototype.deleteBook = function(target) {
    if (target.className === "delete") {
     target.parentElement.parentElement.remove();
     this.showAlert("Book removed","success")
    }
   };
   
   UI.prototype.clearFields = function() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
   };
   
   //show alert
   UI.prototype.showAlert = function(message, className) {
    //create div
    const div = document.createElement("div");
    //add classes
    div.className = `alert ${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent
    const container = document.querySelector(".container");
    //get form
    const form = document.querySelector("#book-form");
    //insert before
    container.insertBefore(div, form);
    //timeout after 3 seconds
    setTimeout(function() {
     document.querySelector(".alert").remove();
    }, 3000);
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
   
    //validate
    if (title === "" || author === "" || isbn === "") {
     //error alert
     ui.showAlert("Please fill in all fields", "error");
    } else {
     // Add book to book list
     ui.addBookToList(book);
     ui.showAlert("book added", "success");
     //clear fields
     ui.clearFields();
    }
   
    e.preventDefault();
   });
