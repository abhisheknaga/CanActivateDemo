import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  checkEmployeeExists() {

  }
}
