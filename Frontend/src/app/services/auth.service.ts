import { Login } from './../models/login.model';
import { environment } from './../../environments/environment';
import { User } from './../models/user.model';
import { Invoice } from './../models/invoice.model'
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   BackendURL:String = "http://localhost:3000/api/";

  constructor(private http: HttpClient) { }

  signup(user: User) {
    return this.http.post(environment.baseUrl  + 'register', user);
  }
  signupClient(user: User) {
    console.log(user);
    return this.http.post(this.BackendURL +"clientRegister", user);
  }
  signupEmployee(user: User) {
    return this.http.post(this.BackendURL + "employeeRegister", user);
  }
  createInvoice(invoice: Invoice) {
    console.log(invoice);
    return this.http.post(this.BackendURL +"createInvoice", invoice);
  }

  signin(login: Login) {
    return this.http.post(environment.baseUrl + 'login', login)
      .pipe(map(response => {
        this.setSession(response);
        return response;
      }));
  }

  isAuthenticated() {
    const token = localStorage.getItem('user');
    if (token !== null) {
      return true;
    }
    return false;
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  signout() {
    this.removeSession();
  }

  private setSession(data) {
    localStorage.setItem('user', JSON.stringify(data));
  }

  private removeSession() {
    localStorage.removeItem('user');
  }
}
