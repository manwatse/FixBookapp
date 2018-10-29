import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Book} from '../model/book.model';
import {User} from "../model/user.model";
import {BookResponseModel} from "../model/book.response.model";
import {Observable} from "rxjs";
import {moveBookMessage} from '../model/moveBookMessage';
import {buildOptimizerLoader} from '@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs';
import {AddBookModel} from '../model/addBookModel';
import {loginComplete} from '../model/loginComplete';
import {editBookModel} from '../model/editBookModel';

@Injectable()
export class BookService {
  constructor(private http: HttpClient) { }
  baseUrl: string = 'http://localhost:8091/bookapp/';


  login(user:User):Observable<loginComplete>{
    console.log("login");
    return this.http.post<loginComplete>(this.baseUrl+"user/login", user);
  }

  getBooks():Observable<BookResponseModel> {
    /* let fakeBooks = [{id: 1, bookTitle: 'test',  authorsName: 'Test'},
     {id: 2, bookTitle: 'test2',  authorsName: 'Test2'},
     {id: 3, bookTitle: 'test3',  authorsName: 'Test3'},
     {id: 4, bookTitle: 'test4',  authorsName: 'Test4'},
   ];
   return Observable.of(fakeBooks).delay(5000);*/
    console.log("book");
    return this.http.get<BookResponseModel>(this.baseUrl+"action/loadbooks/");
  }

  getBookById(id: number) {
    return this.http.get<editBookModel>(this.baseUrl + '/' + id);
  }

  createBook(addBook:AddBookModel) {
   return this.http.post(this.baseUrl+"action/addbook", addBook);
  }

  updateBook(book: editBookModel) {
    return this.http.put(this.baseUrl + "action/editbook", book);
  }

  deleteBook(book:Book) {

    return this.http.delete(this.baseUrl + "action/removebook/"+ book.id);
  }
}
