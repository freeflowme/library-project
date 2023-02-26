let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    console.log(`${this.title}` + ` by ${this.author},` + ` ${this.pages} pages,` + ` ${this.read}`);
}

const newBookInfo = document.querySelector('#submit');
    submit.addEventListener('click', () => {
        const newBook = new Book();
        newBook.title = document.querySelector('#title').value;
        newBook.author = document.querySelector('#author').value;
        newBook.pages = document.querySelector('#pages').value;
        newBook.read = document.querySelector('#read').value; 
        console.log(newBook);
        if (library.includes(newBook) === false) {
            library.push(newBook);
            console.log(library);
        }
    }
)

function displayBook() {
    for (let Book of library) {
        const card = document.createElement('div');
        const title = document.createElement('p');
            title.textContent = Book.title;
        const author = document.createElement('p');
            author.textContent = Book.author;
        const pages = document.createElement('p');
            pages.textContent = Book.pages;
        const read = document.createElement('p');
            read.textContent = Book.read; 
    }
}


const Hobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '295', 'read');
const Fellowship = new Book('The Fellowship of the Ring', 'J.R.R. Tolkein', '423', 'read');
const Towers = new Book('The Two Towers', 'J.R.R. Tolkein', '352', 'read');
const King = new Book('The Return of the King', 'J.R.R. Tolkein', '416', 'read');