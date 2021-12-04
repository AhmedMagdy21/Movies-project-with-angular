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
  pages:number[]=[1,2,3,4,5,6];
  pageNumber:number[]=[];
  trendingTv:any[] = [];
  imgPrefix:string = `http://image.tmdb.org/t/p/w500/`
  constructor(private _MoviesService:MoviesService) 
  {
    this.changePage(1);
   
  }
  changePage(pageNumber:number)
  {
    this._MoviesService.getMoviePigaion(pageNumber).subscribe ((data)=>
    {
      this.trendingTv = data.results;
    })
  }
  ngOnInit(): void {
  }

}
