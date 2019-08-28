import { Component, OnInit } from '@angular/core';
import { EmployeeDetailsGuardService } from 'src/app/services/employee-details-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(private employeeDetailsGuardService: EmployeeDetailsGuardService,
              private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.employeeDetailsGuardService.removeToken();
    this.router.navigate(['login']);
  }

}
