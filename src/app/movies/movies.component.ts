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
  pages:number[]=[1,2,3,4,5,6];
  pageNumber:number[]=[];
  trendingMovies:any[] = [];
  imgPrefix:string = `http://image.tmdb.org/t/p/w500/`
  constructor(private _MoviesService:MoviesService) 
  {
    this.changePage(1);
  }
  changePage(pageNumber:number)
  {
    this._MoviesService.getMoviePigaion(pageNumber).subscribe ((data)=>
    {
      this.trendingMovies = data.results;
    })
  }

  ngOnInit(): void {
  }

}
