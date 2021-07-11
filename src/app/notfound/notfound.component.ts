import { fade } from 'src/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss'],
  animations:[fade]
})
export class NotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
