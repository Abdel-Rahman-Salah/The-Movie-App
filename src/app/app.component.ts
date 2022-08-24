import { Component, ViewEncapsulation} from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Router, NavigationEnd} from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'The-Movie-App';
  constructor(private authService: AuthService,private router: Router) {

  }
  ngOnInit() {
    this.authService.autoLogin();
  }
}
