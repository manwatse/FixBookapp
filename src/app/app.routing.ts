import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AddBookComponent} from './add-book/add-book.component';
import {ListBookComponent} from './list-book/list-book.component';
import {EditBookComponent} from './edit-book/edit-book.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'list-book', component: ListBookComponent },
  { path: 'edit-book', component: EditBookComponent },
  {path : '', component : ListBookComponent}
];

export const routing = RouterModule.forRoot(routes);
