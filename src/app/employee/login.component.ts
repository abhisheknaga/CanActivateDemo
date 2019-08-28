import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDetailsGuardService } from '../services/employee-details-guard.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  name = 'abhishek';
  loginForm: FormGroup;
  validationMessages = {
    loginId: {
      required: 'ID is required'
    },
    loginPassword: {
      required: 'Password is required'
    }
  };
  formErrors = {
    loginId: '',
    loginPassword: ''
  };
  constructor(private fb: FormBuilder, private router: Router,
              private employeeDetailsGuardService: EmployeeDetailsGuardService) { }

  ngOnInit() {
    this.loginForm = this.fb.group({
      loginId: ['', Validators.required],
      loginPassword: ['', Validators.required]
    });
    this.loginForm.valueChanges.subscribe(value => {
      this.validateLoginForm();
    });
  }

  validateLoginForm(group: FormGroup = this.loginForm) {
    Object.keys(group.controls).forEach((key: string) => {
      this.formErrors[key] = '';
      const abstractControl = group.controls[key];
      if (abstractControl instanceof FormControl) {
        if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
          const messages = this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] = messages[errorKey];
            }
          }
        }
      }
    });
  }

  saveEmployee() {
    console.log(this.loginForm);
    this.employeeDetailsGuardService.storeToken('abhi');
    this.router.navigate(['/welcome']);
  }

}
