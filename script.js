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

const initializeScript = function initializeScript() {
    const addBookBtn = document.getElementById('add-btn');
    addBookBtn.addEventListener('click', () => {
        addBook();
    });
}

initializeScript();

myLibrary.push(new Book('book1', 'author1', '100', true));
myLibrary.push(new Book('book2', 'author2', '105', true));
myLibrary.push(new Book('book3', 'author3', '130', false));
myLibrary.push(new Book('book4', 'author4', '120', false));
myLibrary.push(new Book('book5', 'author5', '130', true));
