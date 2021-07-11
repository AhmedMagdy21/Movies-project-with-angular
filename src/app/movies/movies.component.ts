import { Component, OnInit } from '@angular/core';
import { fade } from 'src/animations';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  animations: [fade]
})
export class MoviesComponent implements OnInit {

  trendingMovies:any[] = [];
  imgPrefix:string = `http://image.tmdb.org/t/p/w500/`
  constructor(private _MoviesService:MoviesService) 
  {
    _MoviesService.getTrending('movie').subscribe ((data)=>
    {
      this.trendingMovies = data.results;
    })
  }

  ngOnInit(): void {
  }

}
