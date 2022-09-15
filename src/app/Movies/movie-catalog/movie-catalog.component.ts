import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/Models/movie.model';
import { MovieService } from 'src/app/Services/movie.service';
@Component({
  selector: 'app-movie-catalog',
  templateUrl: './movie-catalog.component.html',
  styleUrls: ['./movie-catalog.component.css']
})
export class MovieCatalogComponent implements OnInit {
  movies: any[] = [];
  //movies: Movie[] = [];
  page_count = 0;
  total_pages!: number;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.loadTopRated(this.page_count).subscribe((response => {
      console.log(response);
      this.page_count += 1;
      //this.movies = response.results;
      this.movies = response.content;
      this.total_pages = response.totalPages;
    }))
  }

  loadMore() {
    
    if (this.page_count <this.total_pages) {
      console.log(this.page_count);
      this.movieService.loadTopRated(this.page_count).subscribe((response => {
      this.page_count += 1;
      console.log(response);
      this.movies = this.movies.concat(response.content);
      }))
    }
  }
}
