import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Models/User';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  myForm: FormGroup;
  successMessage: String = '';
  constructor(private _myservice: AuthService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute) {
    this.myForm = new FormGroup({

     
      email: new FormControl(null, Validators.email),
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      dateOfBirth: new FormControl(null, Validators.required),
      tel: new FormControl(null, Validators.required),

      password: new FormControl(null, Validators.required),
      cnfpass: new FormControl(null, this.passValidator)
    });
    this.myForm.controls['password'].valueChanges.subscribe(
        x => this.myForm.controls['cnfpass'].updateValueAndValidity()
      );
  }

  ngOnInit() {
  }

  isValid(controlName:any) {
  
    this.myForm.controls[controlName].invalid &&  this.myForm.controls[controlName].touched ;

    
  }

  passValidator(control: AbstractControl) {
    if (control && (control.value !== null || control.value !== undefined)) {
      const cnfpassValue = control.value;

      const passControl = control.root.get('password');
      if (passControl) {
        const passValue = passControl.value;
        if (passValue !== cnfpassValue || passValue === '') {
          return {
            isError: true
          };
        }
      }
    }

    return null;
  }

  register() {
    console.log(this.myForm.value);

    if (this.myForm.valid) {
      let x = {
        firstName:this.myForm.value.firstName,
        lastName:this.myForm.value.lastName,
        dateOfBirth:this.myForm.value.dateOfBirth,
        email:this.myForm.value.email,
        password:this.myForm.value.password,
        tel:this.myForm.value.tel
    
      }
      console.log(x)
    
      this._myservice.submitRegister(x)
        .subscribe(
          data => this.successMessage = 'Registration Success',
          error => this.successMessage = 'Verify Content'
        );
    }
  }

  movetologin() {
    this._router.navigate(['../login'], { relativeTo: this._activatedRoute });
  }
}

