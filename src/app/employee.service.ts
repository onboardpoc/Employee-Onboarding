import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from './employee';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  apiURL = 'http://54.81.18.198:8081/api';

  constructor(private httpClient: HttpClient) {}

  testSerivice(): string {
    return 'Service Working';
  }

  public addEmployee(employee: Employee) {
    return this.httpClient.post(`${this.apiURL}/Employee/`, employee);
}

form: FormGroup = new FormGroup({
  $key: new FormControl(null),
  hmanager: new FormControl('',Validators.required),
  smanager: new FormControl('', Validators.required),
  fname: new FormControl('',Validators.required),
  mname:new FormControl(''),
  lname:new FormControl('',Validators.required),
  city:new FormControl(''),
  state:new FormControl('',Validators.required),
  crole:new FormControl('',Validators.required),
  eid:new FormControl('',[Validators.required,Validators.minLength(6)]),
  option:new FormControl('')
});

}
