import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
const AUTH_API = 'http://localhost:8989/api/auth/';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient ,private router: Router) { }

    login(username: string, password: string): Observable<any> {
      return this.http.post(AUTH_API + 'signin', {
        username,
        password
      }, httpOptions);
    }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.router.navigate(['/Login']);
    }
}


