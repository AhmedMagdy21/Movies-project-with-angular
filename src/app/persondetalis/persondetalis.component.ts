import { fade } from './../../animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-persondetalis',
  templateUrl: './persondetalis.component.html',
  styleUrls: ['./persondetalis.component.scss'],
  animations: [fade]
})
export class PersondetalisComponent implements OnInit {
  id:string='';
  personDetalis:any={};
  imgPrefix:string = `http://image.tmdb.org/t/p/w500/`;
  constructor(private _ActivatedRoute:ActivatedRoute,private _MoviesService:MoviesService) { 
    this.id= _ActivatedRoute.snapshot.params.id;
   _MoviesService.getpersonDetalis(this.id).subscribe((response)=>{
    this.personDetalis=response;
   })
  }

  ngOnInit(): void {
  }
}
