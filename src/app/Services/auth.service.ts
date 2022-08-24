import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { HttpClient } from '@angular/common/http';
import { User } from "../Models/user.model";
import { BehaviorSubject } from "rxjs/internal/BehaviorSubject";
import { Router } from "@angular/router";


@Injectable()
export class AuthService {
    users_list!: any[];
    private _jsonURL = 'assets/users.json';
    authenticated: boolean = false;
    user = new BehaviorSubject<User | null>(null);

    constructor(private http: HttpClient, private router: Router) {
        this.setUsers();
    }

    public setUsers() {
        this.readUsers().subscribe(data => {
            this.users_list = data;
        });
    }

    public readUsers(): Observable<any> {
        return this.http.get(this._jsonURL);
    }

    login(email: string, password: string) {
        this.authenticated = false;
        this.users_list.forEach((user_element) => {
            if (user_element.email == email && user_element.password == password) {
                this.authenticated = true;
                const user = new User(email, password);
                this.user.next(user);
                localStorage.setItem('userData', JSON.stringify(user));
            }

        });
        return this.authenticated;
    }
    autoLogin() {
        let result = localStorage.getItem('userData');
        if (result) {
            const userData: {
                email: string;
                password: string;
            } = JSON.parse(result);
            const loadedUser = new User(
                userData.email,
                userData.password,
            );

            this.user.next(loadedUser);
        }
        else return;
    }


    getAuthStatus() {
        return this.authenticated;
    }

    logout() {
        this.user.next(null);
        this.router.navigate(['/Login']);
        localStorage.removeItem('userData');
    }
}

