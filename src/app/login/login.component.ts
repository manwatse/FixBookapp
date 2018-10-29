import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {first} from "rxjs/operators";
import {AuthenticationService} from '../service/auth.service';
import {BookService} from "../service/Book.service";
import {User} from "../model/user.model";
import {loginComplete} from '../model/loginComplete';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email=new FormControl();
  password=new FormControl();
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService,private httpClient:HttpClient,private userService:BookService) { }
  onSubmit() {

    var temp:loginComplete;
    console.log("pressed")
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    //fix login request
    if (this.userService.login(new User(this.email.value,this.password.value))) {
        this.router.navigate(['list-book']);
    } else {
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



}
