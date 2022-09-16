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
      this.page_count += 1;
      //this.movies = response.results;
      this.movies = response.content;
      this.total_pages = response.totalPages;
    }))
  }

  loadMore() {
    
    if (this.page_count <this.total_pages) {
      this.movieService.loadTopRated(this.page_count).subscribe((response => {
      this.page_count += 1;
      this.movies = this.movies.concat(response.content);
      }))
    }
  }
  
  popdb()
  {
    var arr: any[];
  arr=[1,2,3];
    var arr2:any[];
    arr2=[
      238,
      278,
      240,
      19404,
      424,
      129,
      667257,
      372058,
      389,
      496243,
      724089,
      696374,
      497,
      372754,
      155,
      730154,
      553512,
      680,
      429,
      122,
      13,
      761053,
      769,
      11216,
      346,
      637,
      311,
      14537,
      539,
      12477,
      652837,
      40096,
      550,
      510,
      704264,
      92321,
      598,
      324857,
      255709,
      568300,
      378064,
      4935,
      283566,
      18491,
      1891,
      120,
      20334,
      599,
      533514,
      795607,
      3782,
      423,
      762975,
      157336,
      244786,
      441130,
      361743,
      121,
      73,
      567
    ]
    for (let i of arr2 ) {
    this.movieService.populatedb(i).subscribe((response => {
      arr=arr.concat(response);
      console.log(arr);
      }))
    }

}
}
