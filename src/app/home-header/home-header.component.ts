import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

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
    // var typed = new Typed("#typed", {
    //   stringsElement: '#typed-strings',
    //   typeSpeed: 0,
    //   backSpeed: 0,
    //   backDelay: 500,
    //   startDelay: 1000,
    //   loop: false,
    //   onBegin: function(self) { prettyLog('onBegin ' + self) },
    //   onComplete: function(self) { prettyLog('onCmplete ' + self) },
    //   preStringTyped: function(pos, self) { prettyLog('preStringTyped ' + pos + ' ' + self); },
    //   onStringTyped: function(pos, self) { prettyLog('onStringTyped ' + pos + ' ' + self) },
    //   onLastStringBackspaced: function(self) { prettyLog('onLastStringBackspaced ' + self) },
    //   onTypingPaused: function(pos, self) { prettyLog('onTypingPaused ' + pos + ' ' + self) },
    //   onTypingResumed: function(pos, self) { prettyLog('onTypingResumed ' + pos + ' ' + self) },
    //   onReset: function(self) { prettyLog('onReset ' + self) },
    //   onStop: function(pos, self) { prettyLog('onStop ' + pos + ' ' + self) },
    //   onStart: function(pos, self) { prettyLog('onStart ' + pos + ' ' + self) },
    //   onDestroy: function(self) { prettyLog('onDestroy ' + self) }
    // });
  }

}
