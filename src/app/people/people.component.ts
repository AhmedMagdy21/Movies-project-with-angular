import { fade } from 'src/animations';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],
  animations:[fade]
})
export class PeopleComponent implements OnInit {

  trendingPeople:any[] = [];
  imgPrefix:string = `http://image.tmdb.org/t/p/w500/`
  constructor(private _MoviesService:MoviesService) 
  {
    _MoviesService.getTrending('person').subscribe ((data)=>
    {
      this.trendingPeople = data.results;
    })
  }

  ngOnInit(): void {
  }

}
