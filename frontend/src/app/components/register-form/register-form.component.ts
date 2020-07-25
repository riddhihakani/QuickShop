import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators } from '@angular/forms';
import { ConfirmedValidator } from './confirmed.validator';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  registerForm : FormGroup;
  fullName : String = '';
  number : String = '';
  email : String = '';
  password : String = '';
  confirmPassword : String ='';
  // terms : boolean ;

  constructor(private fb : FormBuilder) { 
    this.registerForm = fb.group({
      fname : ['',Validators.required,Validators.maxLength(30)],
      mnumber : ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      mail : ['',Validators.required,Validators.email],
      pswrd : ['',Validators.required,Validators.minLength(6)],
      repswrd : ['',Validators.required,Validators.minLength(6)]
      // tnc : ['',Validators.required]
    },{
      validator: ConfirmedValidator('pswrd','repswrd')
    });
  }

  ngOnInit(): void {
  }

  get f(){
    return this.registerForm.controls;
  }
  authorizeData(registerForm:any){

  }

}
