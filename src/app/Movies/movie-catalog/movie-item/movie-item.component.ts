import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.css']
})
export class MovieItemComponent implements OnInit {
  @Input() movie: any;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  div_click(id:any)
  {
     this.router.navigate(['/MovieDetail/'+id]);
    //this.router.navigate(['/MovieDetail/'+id], {relativeTo:this.route});
  }
  
}
