import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../Services/auth.service';



@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  error: string = "";
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const username=form.value.username;
    const password=form.value.password;
    this.authService.login(username, password).subscribe({
      next: data => {
        localStorage.setItem('currentUser', JSON.stringify(data));
        this.router.navigate(['/MoviesCatalog']);
      },
      error: err => {
        this.error = "Incorrect E-mail or Password";
      }
    });
    }
    resetError() {
      this.error = "";
    }
    
}


