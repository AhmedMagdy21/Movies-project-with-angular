import { fade } from 'src/animations';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormControl ,FormGroup,Validators } from '@angular/forms';

declare let $:any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations:[fade]
})
export class LoginComponent implements OnInit {
  error:string='';
  success:string=``;
  loginForm = new FormGroup ({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern('^[A-Z][a-z0-9]{3,8}$')])
  })
  hidePass() {
    $("#password").attr("type", "password")
  }
  constructor(private _AuthService:AuthService ,private _Router:Router ) { }
  submitloginForm(loginForm:FormGroup)
  {
    this._AuthService.Login(loginForm.value).subscribe((response)=>{
      if(response.message == 'success'){
        localStorage.setItem('userToken' , response.token)
        this.error = '',
        this.success = response.message,
        
        setTimeout(() => {
          this._Router.navigate(['/home'])
        },1000)
        this._AuthService.savecurrentUser()
        //Login Done
      }
      else
      {
        this.success = ''
        this.error = response.message ;
      }

    })
  }
  ngOnInit(): void {
    this.hidePass()
  }

}
