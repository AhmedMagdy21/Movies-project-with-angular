import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private _AuthService:AuthService) { }

  firstName:string = "";
  lastName:string = ""
  showUserName(){
    this.firstName = this._AuthService.userName.first_name
    this.lastName = this._AuthService.userName.last_name
  }
  ngOnInit(): void {
    this.showUserName()
  }

}
