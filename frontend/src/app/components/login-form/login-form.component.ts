import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm : FormGroup;
  email : String ='';
  password : String = '';
  constructor(private fb : FormBuilder) {
    this.loginForm = fb.group({
      mail : ['',Validators.required,Validators.email],
      pswrd : ['',Validators.required,Validators.minLength(6)] 
    });
   }

  ngOnInit(): void {
  }

  authorizeData(loginForm:any){

  }

}
