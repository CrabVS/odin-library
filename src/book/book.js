import { createNewId } from '../library/library-service';

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = createNewId();
  }

  toggleRead() {
    this.read = !this.read;
  }

  getId() {
    return this.id;
  }
}

const createBook = function createNewBook(title, author, pages, read) {
  const book = new Book(title, author, pages, read);

  return book;
};

export default createBook;
