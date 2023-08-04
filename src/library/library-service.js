const myLibrary = [];
let currentIdCount = 0;

const createNewId = function createNewId() {
  const newId = currentIdCount;
  currentIdCount += 1;
  return newId;
};

const getLibrary = function getLibrary() {
  return myLibrary.slice();
};

const addBook = function addBookToLibrary(book) {
  myLibrary.push(book);
};

const removeBook = function removeBookFromLibrary(bookId) {
  myLibrary.forEach((libraryBook, index) => {
    if (libraryBook.id === bookId) {
      myLibrary.splice(index, 1);
    }
  });
};

export {
  createNewId,
  getLibrary,
  addBook,
  removeBook,
};
