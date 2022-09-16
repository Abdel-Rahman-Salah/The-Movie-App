import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieCatalogComponent } from './Movies/movie-catalog/movie-catalog.component';
import { MovieDetailComponent } from './Movies/movie-details/movie-details.component';
import { MovieItemComponent } from './Movies/movie-catalog/movie-item/movie-item.component';
import { MoviesComponent } from './Movies/movies.component';
import { MovieService } from './Services/movie.service';
import { AuthenticationService } from './Services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import { FormsModule }   from '@angular/forms';
import { SafePipe } from './Pipes/safeurl.pipe';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './Navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './auth/carousel/carousel.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { authInterceptorProviders, JwtInterceptor } from './helpers/JwtInterceptor';




@NgModule({
  declarations: [
    AppComponent,
    MovieCatalogComponent,
    MovieDetailComponent,
    MovieItemComponent,
    MoviesComponent,
    SafePipe,
    AuthComponent,
    NavbarComponent,
    CarouselComponent,
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    FormsModule,
    NgbModule,
    NgxPaginationModule,
    MatChipsModule,
    MatFormFieldModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [AuthenticationService, MovieService,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
