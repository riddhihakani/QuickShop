import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  loginForm : FormGroup;
  email : String ='';
  password : String = '';
  serverErrorMessages: string;
  constructor(private fb : FormBuilder,
              private router: Router) {
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
