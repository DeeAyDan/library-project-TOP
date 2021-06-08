function openForm() {
    document.getElementById("submitform").style.display = "block";
  }


let myLibrary = [];

function Book(title, author, pages, read = ''){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = 'Read';
    this.info = function(){
        if(read) {
            return `${title} written by: ${author}. ${pages} long. I've read it.`
        }
        else{
            return `${title} written by: ${author}. ${pages} long. Haven't read yet.`
        }
    }
}



document.getElementById('formsubmit').addEventListener('click', function(e){
    const title = document.getElementById('formtitle').value;
    const author = document.getElementById('formauthor').value;
    const pagenb = document.getElementById('formpages').value;
    let read = '';
    if (document.getElementById('formcheck').checked){
        read = 'Read.'
    }
    else{
        read = `Didn't read`;
    }
    const book1 = new Book(title, author, pagenb, read);
    addBookToLibrary(book1);
    document.getElementById("submitform").style.display = "none";
    document.getElementById('formtitle').value = '';
    document.getElementById('formauthor').value = '';
    document.getElementById('formpages').value = '';
    document.getElementById('formcheck').value = '';
    e.preventDefault();
})

function addBookToLibrary(book1) {
    myLibrary.push(book1);
    displyBooks();
  }

const list = document.querySelector('.booklist');

function displyBooks(){
    const row = document.createElement('tr');
    row.setAttribute("class", "grid");
    list.appendChild(row);
    const deleteCell = document.createElement('td');
    row.appendChild(deleteCell);
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('class', 'deletebutton');
    deleteButton.setAttribute('onclick', 'deleterow()');
    deleteButton.setAttribute('id', `${myLibrary.length - 1}`);
    deleteCell.appendChild(deleteButton);
    const bookTitle = document.createElement('td');
    bookTitle.textContent = myLibrary[myLibrary.length - 1].title;
    row.appendChild(bookTitle);
    const bookAuthor = document.createElement('td');
    bookAuthor.textContent = myLibrary[myLibrary.length - 1].author;
    row.appendChild(bookAuthor);
    const bookPages = document.createElement('td');
    bookPages.textContent = myLibrary[myLibrary.length - 1].pages;
    row.appendChild(bookPages);
    const bookRead = document.createElement('td');
    bookRead.textContent = myLibrary[myLibrary.length - 1].read;
    row.appendChild(bookRead);

}

function deleterow(){

}