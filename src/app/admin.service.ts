import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
        private url = '/admin/';
       
  constructor(private httpClient: HttpClient) {}

  testSerivice(): string {
    return 'Service Working';
  }
}