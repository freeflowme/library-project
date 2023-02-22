let myLibrary = [];

function Book(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }

function addBookToLibrary(newBook) {
    myLibrary.push(newBook);
}

function displayBook() {
    const bookCard = document.createElement('div');
    const title = document.createElement('p');
    const author = document.createElement('p');
    const pages = document.createElement('p');
    const read = document.createElement('p');
}

function loopLibrary() {
    for (let Book of myLibrary) {
        displayBook(Book);
    }
}