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
    console.log(myLibrary);
}

const initializeScript = function initializeScript() {
    const addBookBtn = document.getElementById('add-btn');
    addBookBtn.addEventListener('click', () => {
        addBook();
    });
}

initializeScript();