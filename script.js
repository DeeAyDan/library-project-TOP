class Book {
    constructor(_title, _author, _pages, _read){
        this.title = _title;
        this.author = _author;
        this.pages = _pages;
        this.read = _read;
    }

    displayBook(){
        const boxDiv = document.createElement('div');
        boxDiv.classList.add('book-box');
        display.appendChild(boxDiv);
        const titleDiv = document.createElement('div');
        titleDiv.textContent = this.title;
        boxDiv.appendChild(titleDiv);
        const authorDiv = document.createElement('div');
        authorDiv.textContent = `By: ${this.author}`;
        boxDiv.appendChild(authorDiv);
        const pagesDiv = document.createElement('div');
        pagesDiv.textContent = `${this.pages} Pages`;
        boxDiv.appendChild(pagesDiv);
        const read = document.createElement("button");
        if(this.read){
            read.textContent = "Read";
            read.classList.add('read-box');
        }
        else{
            read.textContent = "Not read";
            read.classList.add('not-read-box');
        }
        boxDiv.appendChild(read);
        
        read.addEventListener('click', function(e){
            if(read.classList.contains('not-read-box')){
                read.textContent = "Read";
                read.classList.add('read-box');
                read.classList.remove('not-read-box');
            }
            else if (read.textContent = "Read"){
                read.textContent = "Not read";
                read.classList.add('not-read-box');
                read.classList.remove('read-box');
            }
        })
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'DELETE';
        deleteButton.classList.add('delete-box');
        boxDiv.appendChild(deleteButton);
        deleteButton.addEventListener('click', function(e){
            let confirm = prompt('Type "DELETE to confirm."', '');
            if (confirm === 'DELETE'){
                boxDiv.setAttribute('style', 'display:none;');
            }
        })
    }
}

const title = document.querySelector('#title-input');
const author = document.querySelector('#author-input');
const pages = document.querySelector('#pages-input');
const read = document.querySelector('#read');
const addButton = document.querySelector('#add-button');
const reload = document.querySelector('#empty-button');

reload.addEventListener('click', function(e){
    location.reload()
})

const display = document.querySelector('#display');

addButton.addEventListener('click', function(e){
    const book = new Book(title.value, author.value, pages.value, read.checked)
    book.displayBook();
});