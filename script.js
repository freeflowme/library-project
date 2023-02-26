let library = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const newBookInfo = document.querySelector('#submit');
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const newBook = new Book();
        newBook.title = document.querySelector('#title').value;
        newBook.author = document.querySelector('#author').value;
        newBook.pages = document.querySelector('#pages').value;
        newBook.read = document.querySelector('#read').value; 
        console.log(newBook);
        if (library.includes(newBook) === false) {
            library.push(newBook);
            console.log(library);
            displayBook();
        }
    }
)

function displayBook() {
    for (let Book of library) {
        const card = document.createElement('div');
            card.className = 'card';
            document.querySelector('.display').appendChild(card);
        const title = document.createElement('p');
            title.textContent = Book.title;
            card.appendChild(title);
        const author = document.createElement('p');
            author.textContent = Book.author;
            card.appendChild(author);
        const pages = document.createElement('p');
            pages.textContent = Book.pages;
            card.appendChild(pages);
        const read = document.createElement('p');
            read.textContent = Book.read;
            card.appendChild(read);
        const removeBtn = document.createElement('button');
            removeBtn.className = 'removeBtn';
            removeBtn.textContent = 'Remove';
            card.appendChild(removeBtn);
            removeBtn.addEventListener('click', () => {
                library.splice(library.indexOf(Book), 1);
                document.querySelector('.display').removeChild(card);
                console.log(library);
            })
        const readBtn = document.createElement('button');
            readBtn.className = 'readBtn';
            readBtn.textContent = 'Read?';
            card.appendChild(readBtn);
            readBtn.addEventListener('click', () => {
                Book.read = !Book.read;
                console.log(Book);
                read.textContent = "No"
            })
    }
}

function removeBook() {
    library.splice(library.indexOf(Book), 1);
}

/*
console.log(`${this.title}` + ` by ${this.author},` + ` ${this.pages} pages,` + ` ${this.read}`);
const Hobbit = new Book('The Hobbit', 'J.R.R. Tolkein', '295', 'read');
const Fellowship = new Book('The Fellowship of the Ring', 'J.R.R. Tolkein', '423', 'read');
const Towers = new Book('The Two Towers', 'J.R.R. Tolkein', '352', 'read');
const King = new Book('The Return of the King', 'J.R.R. Tolkein', '416', 'read');
*/