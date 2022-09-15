import { sanitizeIdentifier } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';
import { Cast } from 'src/app/Models/cast.model';
import { Movie } from 'src/app/Models/movie.model';
import { MovieService } from 'src/app/Services/movie.service';
@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie_id!: number;
  movie?: Movie;
  cast?:Cast;
  movie_trailer! : string;
  trusted_url : any;
  trailer_found=false;

  constructor(private movieService: MovieService , private route:ActivatedRoute,private santitizer:DomSanitizer){}
  ngOnInit(){

        this.route.params.subscribe( params =>
        this.movie_id=params['id']);
        
        this.movieService.loadDetails(this.movie_id).subscribe((response => {
        console.log(response);
        this.movie=response;
        }))
        this.movieService.loadTrailer(this.movie_id).subscribe((response => {
          if(response.results.length>0)
          {
            console.log(response);
            this.trailer_found=true;
            this.movie_trailer=response.results[0].key;
            this.movie_trailer='https://www.youtube.com/embed/'+this.movie_trailer;
          }

        }))
        this.movieService.loadCast(this.movie_id).subscribe((response => {
          console.log(response);
          this.cast=response;
          }))
    }
}
