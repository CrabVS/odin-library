let myLibrary = [];

const Book = function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const addBook = function addBookToLibrary() {
    let newBook = new Book(prompt('name'), prompt('author'), prompt('pages'), prompt('read'));

    myLibrary.push(newBook);
}

const createBookElement = function createBookElement(book) {
    const bookEl = document.createElement('div');
    bookEl.innerHTML = 
    `<div class="book">
        <h2>Title</h2>
        <h3>Author</h3> 
        <h3>Pages</h3>
        <h3>Read</h3>
    </div>`

    let titleEl = bookEl.querySelector('h2');
    titleEl.textContent = book.title;

    let bookContent = bookEl.querySelectorAll('h3');
    bookContent[0].textContent = book.author;
    bookContent[1].textContent = book.pages;
    bookContent[2].textContent = book.read;

    return bookEl;
}

const displayBooks = function displayBooksToPage() {
    const libraryEl = document.getElementById('library');
    myLibrary.forEach(book => {
        let bookEl = createBookElement(book);
        libraryEl.appendChild(bookEl);
    });
}

const initializeScript = function initializeScript() {
    const addBookBtn = document.getElementById('add-btn');
    addBookBtn.addEventListener('click', () => {
        addBook();
    });
    displayBooks();
}

myLibrary.push(new Book('book1', 'author1', '100', true));
myLibrary.push(new Book('book2', 'author2', '105', true));
myLibrary.push(new Book('book3', 'author3', '130', false));
myLibrary.push(new Book('book4', 'author4', '120', false));
myLibrary.push(new Book('book5', 'author5', '130', true));

initializeScript();