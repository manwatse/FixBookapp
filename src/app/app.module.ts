import {BrowserModule } from '@angular/platform-browser';
import {NgModule } from '@angular/core';
import {AppComponent } from './app.component';
import {LoginComponent } from './login/login.component';
import {routing} from './app.routing';
import {AuthenticationService} from './service/auth.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AddBookComponent } from './add-book/add-book.component';
import {EditBookComponent } from './edit-book/edit-book.component';
import {ListBookComponent} from './list-book/list-book.component';
import {BookService} from './service/Book.service';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CustomMaterialModule} from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListBookComponent,
    AddBookComponent,
    EditBookComponent
  ],
  imports: [
    BrowserModule,
    routing,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FormsModule
  ],
  providers: [AuthenticationService, BookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
