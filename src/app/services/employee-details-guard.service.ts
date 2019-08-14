import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { EmployeeService } from './employee.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsGuardService implements CanActivate {

  constructor(private employeeService: EmployeeService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const employeeExists = true;
    if (employeeExists) {
      // localStorage.setItem();
      return true;
    } else {
      this.router.navigate(['login']);
      return false;
    }
  }

}
