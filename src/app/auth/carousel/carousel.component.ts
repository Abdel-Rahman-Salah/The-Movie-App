import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  slider_photos: string[] = [
  'https://img.buzzfeed.com/buzzfeed-static/static/2020-10/27/19/asset/878207caa966/sub-buzz-2548-1603828455-55.jpg?crop=2000%3A3000%3B0%2C0&downsize=900:*&output-format=auto&output-quality=auto',
   'https://static-koimoi.akamaized.net/wp-content/new-galleries/2015/12/airlift-movie-poster-4.jpg',
   'https://www.metaflix.com/wp-content/uploads/2020/10/Free-Guy-Movie-Poster-scaled.jpg',
   'https://i.guim.co.uk/img/media/8fef96f9349676fea899cae266cf355796a85c25/0_0_1383_2052/master/1383.png?width=300&quality=85&auto=format&fit=max&s=1025b98bdec22825e78b4e3cbc35a587',
   'https://pointgreydesign.weebly.com/uploads/8/8/3/1/88312088/movie-poster-example_orig.jpg'
    

  ];

  constructor(config: NgbCarouselConfig) {
    config.interval = 2800;
    config.keyboard = true;
  }

  ngOnInit(): void {
  }

}
