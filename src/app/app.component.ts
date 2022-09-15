import { Component, ViewEncapsulation} from '@angular/core';
import { AuthenticationService } from './Services/auth.service';
import { Router, NavigationEnd} from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'The-Movie-App';
  constructor(private authenticationService: AuthenticationService,private router: Router) {

  }
  ngOnInit() {
  }
}
