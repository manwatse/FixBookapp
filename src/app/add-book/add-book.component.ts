import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormControlDirective, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../service/Book.service';
import {first} from "rxjs/operators";
import {Router} from '@angular/router';
import {BookResponseModel} from '../model/book.response.model';
import {AddBookModel} from '../model/addBookModel';
import {Book} from '../model/book.model';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, private bookService: BookService) { }

  name=new FormControl();
  author=new FormControl();

  ngOnInit() {

  }

  onSubmit() {
    var addBookModel = new AddBookModel(new Book(this.name.value,this.author.value));
    this.bookService.createBook(addBookModel)
      .subscribe( data => {
        this.router.navigate(['list-book']);
      });
  }

}
