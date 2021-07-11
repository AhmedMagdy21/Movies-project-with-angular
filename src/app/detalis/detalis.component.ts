import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

declare let $:any;
@Component({
  selector: 'app-detalis',
  templateUrl: './detalis.component.html',
  styleUrls: ['./detalis.component.scss'],
  

})
export class DetalisComponent implements OnInit {
  id:string='';
  movieDetalis:any={};
  imgPrefix:string = `http://image.tmdb.org/t/p/w500/`;
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) { 
   this.id= _ActivatedRoute.snapshot.params.id;
   _MoviesService.getMovieDetalis(this.id).subscribe((response)=>{
    this.movieDetalis=response;
   })
   }

  ngOnInit(): void {
    
  }

}
