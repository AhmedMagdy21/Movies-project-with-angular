import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxTypedJsComponent } from 'ngx-typed-js';
import { fade } from 'src/animations';
import { MoviesService } from '../movies.service';



declare let $:any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [fade]
})

export class HomeComponent implements OnInit {
  trendingMovies:any[] = [];
  trendingTv:any[] = [];
  trendingPeople:any[] = [];
  imgPrefix:string = `http://image.tmdb.org/t/p/w500/`
  
  constructor(private _MoviesService:MoviesService)
  {
    _MoviesService.getTrending('movie').subscribe ((data)=>
    {
      this.trendingMovies = data.results.slice(0,10);
    });
    _MoviesService.getTrending('tv').subscribe ((id)=>
    {
      this.trendingTv = id.results.slice(0,10);
    });
    _MoviesService.getTrending('person').subscribe ((id)=>
    {
      this.trendingPeople = id.results.slice(0,10);
    });
  }

  ngOnInit(): void {
    let homeDiv = $('#hi')
    $('#btn').on('click', () => {
     
      homeDiv.fadeOut(2000)
    })
  }
}
