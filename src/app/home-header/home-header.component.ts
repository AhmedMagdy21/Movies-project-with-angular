import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
setTimeout
declare let $:any;
@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

@Input() parentData:any[] = [];

  imgPrefix:string = `http://image.tmdb.org/t/p/w500/`
  customOptions: OwlOptions = {
    loop: true,
    margin:10,
    smartSpeed:500,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items:7
      }
    },
    nav: true
  }


  

  ngOnInit(): void {
    $(()=>{
     setTimeout (function(){
      $('.text-animation').removeClass('hidden');
     },1000)
    })
  }

}
