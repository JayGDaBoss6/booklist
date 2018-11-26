// Book Constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
   }
   
   // UI Constructor
   
   function UI(){};
   
   UI.prototype.addBookToList
   
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
    
    console.log(book);
    e.preventDefault();
   });
   