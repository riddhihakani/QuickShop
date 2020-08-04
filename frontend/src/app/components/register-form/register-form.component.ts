import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validators, NgForm } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';

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
  // confirmPassword : String ='';
  showSucessMessage: boolean;
  serverErrorMessages: string;
  // terms : boolean ;

  constructor(private fb : FormBuilder,
             private regService: RegisterService,
             private router: Router) { 
    this.registerForm = fb.group({
      fname : ['',Validators.required,Validators.maxLength(30)],
      mnumber : ['',[Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      mail : ['',Validators.required,Validators.email],
      pswrd : ['',Validators.required,Validators.minLength(6)],
      // repswrd : ['',Validators.required,Validators.minLength(6)]
      // tnc : ['',Validators.required]
    });
  }

  ngOnInit(): void {
  }

  get f(){
    return this.registerForm.controls;
  }
  authorizeData(registerForm:any){

    console.log('form submitted');
    this.regService.postUser(registerForm.value).subscribe(
      res => {
        this.showSucessMessage = true;
        setTimeout(() => this.showSucessMessage = false, 4000);
        this.resetForm(registerForm);
        this.router.navigate(['/loginForm']);
      },
      err => {
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      }
    );

  }

  resetForm(registerForm: NgForm ) {
    this.regService.selectedUser = {
      fullName: '',
      email: '',
      password: '',
      repassword:'',
      number:''
    };
    registerForm.resetForm();
    this.serverErrorMessages = '';
  }

}
