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
  page_count = 1;
  total_pages!: number;
  constructor(private movieService: MovieService) { }

  ngOnInit(): void {
    this.movieService.loadTopRated(1).subscribe((response => {
      this.movies = response.results;
      this.total_pages = response.total_pages;
    }))
  }

  loadMore() {
    if (this.page_count <=this.total_pages) {
      this.page_count += 1;
      this.movieService.loadTopRated(this.page_count).subscribe((response => {
      this.movies = this.movies.concat(response.results);
      }))
    }
  }
}
