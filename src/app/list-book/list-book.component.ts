import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {BookService} from '../service/Book.service';
import {Book} from '../model/book.model';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {

  Books: Book[] = null;

  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBooks()
      .subscribe( data => {
        this.Books = data.books;
        console.log("response", data);
      });
  }

  deleteBook(book: Book): void {
    this.bookService.deleteBook(book)
      .subscribe( data => {
        this.Books = this.Books.filter(u => u !== book);

      });
  }

  editBook(Books: Book): void {
    localStorage.removeItem('editBookId');
    localStorage.setItem('editBookId', Books.id.toString());
    this.router.navigate(['edit-book']);
  }

  addBook(): void {
    this.router.navigate(['add-book']);
  }
}
