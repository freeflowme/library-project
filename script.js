class Library {
    constructor() {
        this.books = []
    }
}

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    console.log(`${this.title}` + ` by ${this.author},` + ` ${this.pages} pages,` + ` ${this.read}`)
}

const Hobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '295', 'read');
const Fellowship = new Book('The Fellowship of the Ring', 'J.R.R. Tolkein', '423', 'read');
const Towers = new Book('The Two Towers', 'J.R.R. Tolkein', '352', 'read');
const King = new Book('The Return of the King', 'J.R.R. Tolkein', '416', 'read');

function addBookToLibrary(newBook) {
    if (library.includes(newBook) === false) {
        library.push(newBook);
    }
}

addBookToLibrary(Book);
console.log(library);

function displayBook() {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
}

function displayLibrary() {
    for (let Book of library) {
        displayBook(Book);
    }
}