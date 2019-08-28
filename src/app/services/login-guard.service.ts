import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { EmployeeDetailsGuardService } from './employee-details-guard.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  constructor(private employeeDetailsGuardService: EmployeeDetailsGuardService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.employeeDetailsGuardService.removeToken();
    return true;
  }

}
