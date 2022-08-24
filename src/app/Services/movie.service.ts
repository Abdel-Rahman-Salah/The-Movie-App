import { Injectable } from "@angular/core";
import { Movie } from "../Models/movie.model";
import { HttpClient, HttpParams } from '@angular/common/http';
import { Cast } from "../Models/cast.model";

@Injectable()
export class MovieService
{
constructor(private httpClient: HttpClient) { }
//private Movies: any[]=[];

loadTopRated(page_num:number)
{
  return this.httpClient.get<Movie>(
 "https://api.themoviedb.org/3/movie/top_rated?api_key=dc7aa974d986bf5845451288287de658&language=en-US&page="+page_num
  );
}

loadDetails(movie_id:number)
{
  return this.httpClient.get<Movie>(
     "https://api.themoviedb.org/3/movie/"+movie_id+"?api_key=dc7aa974d986bf5845451288287de658&language=en-US"
     );
}

loadCast(movie_id:number)
{
  return this.httpClient.get<Cast>(
    "https://api.themoviedb.org/3/movie/"+movie_id+"/credits?api_key=dc7aa974d986bf5845451288287de658&language=en-US"
    );
}
loadTrailer(movie_id:number)
{
  return this.httpClient.get<any>(
    "https://api.themoviedb.org/3/movie/"+movie_id+"/videos?api_key=dc7aa974d986bf5845451288287de658&language=en-US"
    );
}

}
