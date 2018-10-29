import {Book} from './book.model';

export class AddBookModel {
  constructor(book: Book) {
    this.book = book;
  }
  book:Book;
}
