import { Injectable } from "@angular/core";
import { Movie } from "../Models/movie.model";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cast } from "../Models/cast.model";
import { Trailer } from "../Models/trailer.model";
import { MovieDetails } from "../Models/movieDetails.model";
import { MoviePage } from "../Models/moviePage.model";

@Injectable()
export class MovieService
{
constructor(private httpClient: HttpClient) { }


loadTopRated(page_num:number)
{
  return this.httpClient.get<MoviePage>(
   "http://localhost:8989/api/movieslist/"+page_num
     );
}

loadDetails(movie_id:number)
{
  return this.httpClient.get<MovieDetails>(
   "http://localhost:8989/api/movies/"+movie_id
     );
}

loadCast(movie_id:number)
{
  return this.httpClient.get<Cast>(
    "http://localhost:8989/api/movies_cast/"+movie_id
    );
}
loadTrailer(movie_id:number)
{
  return this.httpClient.get<Trailer>(
    "http://localhost:8989/api/movies_trailers/"+movie_id
    );
}

}
