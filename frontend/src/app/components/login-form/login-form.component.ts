import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators, NgForm } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
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
              private regService: RegisterService,
              private router: Router) {
    this.loginForm = fb.group({
      mail : ['',Validators.required,Validators.email],
      pswrd : ['',Validators.required,Validators.minLength(6)] 
    });
   }

  ngOnInit(): void {
  }

  authorizeData(loginForm:any){
    this.regService.login(loginForm.value).subscribe(
      res => {
        this.regService.setToken(res['token']);
        this.router.navigateByUrl('/');
      },
      err => {
        this.serverErrorMessages = err.error.message;
        
      }
    );

  }

}
