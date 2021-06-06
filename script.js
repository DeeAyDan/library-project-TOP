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
myLibrary.push(book1);

function addBookToLibrary() {

  }

function displyBooks(){
    for (let i = 0; i < myLibrary.length; i++){
        console.table(myLibrary);
    }
}