// Local Storage Class
class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
             books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));

        }
        return books;

    }
    static displayBooks(){

    }
    static addBook(book){
        let books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books))
    }

    static removeBook(){

    }
};
class Book{
    constructor(title, author, isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI{
addBookToList(book){
    
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    // insert columns
    row.innerHTML = `
   <td>${book.title}</td>
   <td>${book.author}</td>
   <td>${book.isbn}</td>
   <td><a class="delete" href="#">X</a></td>`;
   
    list.appendChild(row);
}

showAlert(message, className){
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
}

deleteBook(target){
    if (target.className === "delete") {
        target.parentElement.parentElement.remove();
        this.showAlert("Book removed","success")
       }

}
clearFields(){
    
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
}
}


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
     // Add to local storage
     Store.addBook(book);

     ui.showAlert("book added", "success");
     //clear fields
     ui.clearFields();
    }
   
    e.preventDefault();
   });

      
   document.querySelector("table").addEventListener("click", function(e){
    const ui = new UI();
    ui.deleteBook(e.target);
     e.preventDefault();
      })