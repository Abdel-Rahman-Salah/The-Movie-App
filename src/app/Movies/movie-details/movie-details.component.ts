import { sanitizeIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import { Cast } from 'src/app/Models/cast.model';
import { Movie } from 'src/app/Models/movie.model';
import { MovieDetails } from 'src/app/Models/movieDetails.model';
import { Trailer } from 'src/app/Models/trailer.model';
import { MovieService } from 'src/app/Services/movie.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})

export class MovieDetailComponent implements OnInit {
  movie_id!: number;
  moviedetails?: MovieDetails;
  cast?:Cast;
  trailer?:Trailer;
  movie_trailer! : string;
  trusted_url : any;
  trailer_found=false;
  

  constructor(private movieService: MovieService , private route:ActivatedRoute,private santitizer:DomSanitizer){}
  ngOnInit(){

        this.route.params.subscribe( params =>
        this.movie_id=params['id']);
        
        this.movieService.loadDetails(this.movie_id).subscribe((response => {
        this.moviedetails=response;
        }))
        this.movieService.loadTrailer(this.movie_id).subscribe((response => {
          if(response.trailersList.length>0)
          {
            this.trailer_found=true;
            this.trailer=response;
            this.movie_trailer='https://www.youtube.com/embed/'+this.trailer.trailersList[0].key;
          }

        }))
        this.movieService.loadCast(this.movie_id).subscribe((response => {
          this.cast=response;
          }))
    }
}
