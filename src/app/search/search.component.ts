import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';


@Component({
  selector: 'app-saerch',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SaerchComponent implements OnInit {

  constructor(private _MoviesService:MoviesService) { 
    
  }

  ngOnInit(): void {
  }

}
