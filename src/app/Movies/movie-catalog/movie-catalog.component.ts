import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movie.model';
import { MoviePage } from 'src/app/Models/moviePage.model';
import { MovieService } from 'src/app/Services/movie.service';
@Component({
  selector: 'app-movie-catalog',
  templateUrl: './movie-catalog.component.html',
  styleUrls: ['./movie-catalog.component.css']
})
export class MovieCatalogComponent implements OnInit {
  moviepage?: MoviePage;
  //movies: any[] = [];
  page_count = 0;
  constructor(private movieService: MovieService) { }

  ngOnInit(){
    this.movieService.loadTopRated(this.page_count).subscribe((response => {
    this.page_count+=1;
    this.moviepage=response;

    }))
  
}

  loadMore() {
    
    if (this.page_count <this.moviepage!.totalPages) {
      this.movieService.loadTopRated(this.page_count).subscribe((response => {
      this.page_count += 1;
      this.moviepage!.content = this.moviepage!.content.concat(response.content);
      }))
    }
  }
  
}
