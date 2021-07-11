import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { MoviesService } from '../movies.service';
  
@Component({
  selector: 'app-tvdetalis',
  templateUrl: './tvdetalis.component.html',
  styleUrls: ['./tvdetalis.component.scss']
})
export class TvdetalisComponent implements OnInit {
  id:string=''; 
  tvDetalis:any={};
  imgPrefix:string = `http://image.tmdb.org/t/p/w500/`;
  constructor(private _ActivatedRoute:ActivatedRoute , private _MoviesService:MoviesService) { 
   this.id= _ActivatedRoute.snapshot.params.id;
   _MoviesService.getTvDetalis(this.id).subscribe((response)=>{
    this.tvDetalis = response;
   })
  }

  ngOnInit(): void {
  }

}
