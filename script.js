let myLibrary = [];

function Book(title, author, pages, read = ''){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
        if(read) {
            return `${title} written by: ${author}. ${pages} long. I've read it.`
        }
        else{
            return `${title} written by: ${author}. ${pages} long. Haven't read yet.`
        }
    }
}

const book1 = new Book('Titleee', 'Authorr', 7, true);


function addBookToLibrary() {
    myLibrary.push(book1);
    displyBooks();
  }

const list = document.querySelector('#booklist');

function displyBooks(){
    const bookTitle = document.createElement('td');
    bookTitle.textContent = myLibrary[myLibrary.length - 1].title;
    list.appendChild(bookTitle);
    const bookAuthor = document.createElement('td');
    bookAuthor.textContent = myLibrary[myLibrary.length - 1].author;
    list.appendChild(bookAuthor);
    const bookPages = document.createElement('td');
    bookPages.textContent = myLibrary[myLibrary.length - 1].pages;
    list.appendChild(bookPages);
    const bookRead = document.createElement('td');
    bookRead.textContent = myLibrary[myLibrary.length - 1].read;
    list.appendChild(bookRead);
}