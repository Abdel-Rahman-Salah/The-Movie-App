import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { MovieCatalogComponent } from './Movies/movie-catalog/movie-catalog.component';
import { MovieDetailComponent } from './Movies/movie-details/movie-details.component';
import { AuthGuard } from './Services/auth.guard';

const routes: Routes = [ 
{path: '', component: AuthComponent},
{path: 'MoviesCatalog', component: MovieCatalogComponent,canActivate: [AuthGuard]},
{path: 'MovieDetail/:id', component: MovieDetailComponent,canActivate: [AuthGuard]},
{path: 'Login', component: AuthComponent },
{ path: '**', redirectTo: 'Login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule],
  providers:[AuthGuard]
})
export class AppRoutingModule { }
