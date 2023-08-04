import createBook from './book/book';
import './reset.css';
import './style.css';

const myLibrary = [];

// done
const clearLibrary = function clearLibrary() {
  const libraryEl = document.getElementById('library');
  libraryEl.innerHTML = ``;
};

const addListenersToBook = function addListenersToBookButtons(bookEl, bookId, book) {
  const readBtnEl = bookEl.querySelector('.change-read-btn');
  const removeBtnEl = bookEl.querySelector('.remove-book-btn');

  readBtnEl.addEventListener('click', () => {
    book.toggleRead();
    displayBooks();
  });

  removeBtnEl.addEventListener('click', () => {
    removeBook(bookId);
  });
};

const createBookElement = function createBookElement(book, id) {
  const bookId = id;
  const bookEl = document.createElement('div');
  bookEl.innerHTML = `<div class="book">
          <h2>Title</h2>
          <h3>Author</h3> 
          <h3>Pages</h3>
          <h3>Read</h3>
          <div class="book-buttons">
              <button class="change-read-btn">Read</button>
              <button class="remove-book-btn">Remove</button>
          </div>
      </div>`;

  const titleEl = bookEl.querySelector('h2');
  titleEl.textContent = book.title;

  const bookContent = bookEl.querySelectorAll('h3');
  bookContent[0].textContent = book.author;
  bookContent[1].textContent = book.pages;
  bookContent[2].textContent = book.read;

  addListenersToBook(bookEl, bookId, book);

  return bookEl;
};

// done
const displayBooks = function displayBooksToPage() {
  clearLibrary();
  const libraryEl = document.getElementById('library');
  myLibrary.forEach((book, index) => {
    const bookEl = createBookElement(book, index);
    libraryEl.appendChild(bookEl);
  });
};

const removeFormDisplay = function removeFormDisplay() {
  const formDisplay = document.getElementById('book-form-container');
  formDisplay.remove();
};

const addBook = function addBookToLibrary(bookName, bookAuthor, bookPages, bookRead) {
  const newBook = new Book(bookName, bookAuthor, bookPages, bookRead);

  myLibrary.push(newBook);
  displayBooks();
};

const createFormListeners = function createFormButtonListeners() {
  const addBtnEl = document.getElementById('addBtn');
  const cancelBtnEl = document.getElementById('cancelBtn');

  addBtnEl.addEventListener('click', (event) => {
    event.preventDefault();

    const bookName = document.querySelector('.form-group #name');
    const bookAuthor = document.querySelector('.form-group #author');
    const bookPages = document.querySelector('.form-group #pages');
    const bookRead = document.querySelector('.form-group #read');

    addBook(bookName.value, bookAuthor.value, bookPages.value, bookRead.checked);

    removeFormDisplay();
  });

  cancelBtnEl.addEventListener('click', () => {
    removeFormDisplay();
  });
};

const displayBookForm = function displayBookForm() {
  const formContainer = document.createElement('div');
  formContainer.id = 'book-form-container';

  formContainer.innerHTML = `<form id="book-form">
        <h3>Add Book</h3>
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" name="name" id="name">
        </div>
        <div class="form-group">
            <label for="author">Author</label>
            <input type="text" name="author" id="author">
        </div>
        <div class="form-group">
            <label for="pages">Pages</label>
            <input type="number" name="pages" id="pages" min="0">
        </div>
        <div class="form-group">
            <label for="read">Read</label>
            <input type="checkbox" name="read" id="read">
        </div>
        <div class="buttons-container">
            <button type="submit" id="addBtn">Add Book</button>
            <button type="button" id="cancelBtn">Cancel</button>
        </div>
    </form>`;

  document.body.appendChild(formContainer);

  createFormListeners();
};

const removeBook = function removeBookFromLibrary(bookIndex) {
  myLibrary.splice(bookIndex, 1);
  displayBooks();
};

const initializeScript = function initializeScript() {
  const addBookBtn = document.getElementById('add-btn');
  addBookBtn.addEventListener('click', () => {
    displayBookForm();
  });
  displayBooks();
};

myLibrary.push(createBook('book1', 'author1', '100', true));
myLibrary.push(createBook('book2', 'author2', '105', true));
myLibrary.push(createBook('book3', 'author3', '130', false));
myLibrary.push(createBook('book4', 'author4', '120', false));
myLibrary.push(createBook('book5', 'author5', '130', true));

const newbook = createBook('book1', 'author1', '1002', true);
newbook.toggleRead();

initializeScript();
