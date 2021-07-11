import { Component, OnInit } from '@angular/core';
import { fade } from 'src/animations';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss'],
  animations: [fade]

})
export class TvComponent implements OnInit {

  trendingTv:any[] = [];
  imgPrefix:string = `http://image.tmdb.org/t/p/w500/`
  constructor(private _MoviesService:MoviesService) 
  {
    _MoviesService.getTrending('tv').subscribe ((data)=>
    {
      this.trendingTv = data.results;
    })
  }

  ngOnInit(): void {
  }

}
