import createBook from '../book/book';
import { addBook, getLibrary, removeBook } from './library-service';

const clearLibrary = function clearLibrary() {
  const libraryEl = document.getElementById('library');
  libraryEl.innerHTML = ``;
};

const addListenersToBook = function addListenersToBookButtons(bookEl, book) {
  const readBtnEl = bookEl.querySelector('.change-read-btn');
  const removeBtnEl = bookEl.querySelector('.remove-book-btn');

  readBtnEl.addEventListener('click', () => {
    book.toggleRead();
    refreshLibrary();
  });

  removeBtnEl.addEventListener('click', () => {
    removeBook(book.getId());
    refreshLibrary();
  });
};

const createBookElement = function createBookElement(book) {
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

  addListenersToBook(bookEl, book);

  return bookEl;
};

const displayBooks = function displayBooksToPage() {
  const myLibrary = getLibrary();

  const libraryEl = document.getElementById('library');
  myLibrary.forEach((book, index) => {
    const bookEl = createBookElement(book, index);
    libraryEl.appendChild(bookEl);
  });
};

const refreshLibrary = function refreshLibrary() {
  clearLibrary();
  displayBooks();
};

const removeFormDisplay = function removeFormDisplay() {
  const formDisplay = document.getElementById('book-form-container');
  formDisplay.remove();
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

    const book = createBook(bookName.value, bookAuthor.value, bookPages.value, bookRead.checked);
    addBook(book);

    refreshLibrary();
    removeFormDisplay();
  });

  cancelBtnEl.addEventListener('click', () => {
    removeFormDisplay();
  });
};

const checkFormValidity = function checkFormValidity(inputName, inputAuthor, inputPages) {
  return (inputName !== '' && inputAuthor !== '' && inputPages !== '');
};

const displayBookForm = function displayBookForm() {
  const formContainer = document.createElement('div');
  formContainer.id = 'book-form-container';

  formContainer.innerHTML = `
  <form id="book-form">
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
        <button type="submit" id="addBtn" disabled>Add Book</button>
        <button type="button" id="cancelBtn">Cancel</button>
    </div>
  </form>`;

  document.body.appendChild(formContainer);

  const addBtnEl = document.getElementById('addBtn');
  const bookName = document.querySelector('.form-group #name');
  const bookAuthor = document.querySelector('.form-group #author');
  const bookPages = document.querySelector('.form-group #pages');

  formContainer.addEventListener('keyup', () => {
    addBtnEl.disabled = !checkFormValidity(bookName.value, bookAuthor.value, bookPages.value);
  });

  createFormListeners();
};

const initializeLibrary = function initializeLibrary() {
  addBook(createBook('book1', 'author1', '100', true));
  addBook(createBook('book2', 'author2', '105', true));
  addBook(createBook('book3', 'author3', '130', false));
  addBook(createBook('book4', 'author4', '120', false));
  addBook(createBook('book5', 'author5', '130', true));

  const addBookBtn = document.getElementById('add-btn');
  addBookBtn.addEventListener('click', () => {
    displayBookForm();
  });
  refreshLibrary();
};

export default initializeLibrary;
