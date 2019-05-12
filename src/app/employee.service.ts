import { Injectable } from '@angular/core';
import { HttpClient,  HttpHeaders} from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';


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
    console.log('addEmployee');
    return this.httpClient.post(`${this.apiURL}/Employee/`, employee).subscribe(
      res => {
          const response = res;
      }
    );
   }

   public viewEmployees(): Observable<any> {
      return this.httpClient.get(`${this.apiURL}/Employee/`);
}

}
