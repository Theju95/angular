import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, Validators, FormControl, FormBuilder} from '@angular/forms';

import {MyserviceService} from '../myservice.service';




@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  

  signUpForm: FormGroup;
  submitted = false;
  @Input() password='';
  @Input() confirmPassword='';
  
  constructor(private fb: FormBuilder,private service: MyserviceService) { }

  ngOnInit() {

    this.signUpForm = this.fb.group(
      {
     
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            confirmPassword: ['', Validators.required]},
            {validator: this.service.MustMatch('password', 'confirmPassword')
          
            
      });
  }

  get f() { return this.signUpForm.controls; }

  validate(signUpForm) 
  {
    if (this.signUpForm.valid) 
    {
      alert ('Registered Successfully')
    }

    else if (this.signUpForm.invalid) {
      alert ('not registered correctly')
  }

  }

  
}

 



  




