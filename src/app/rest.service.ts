import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { 
    
  }

  getData(){
    return this.http.get('http://localhost:4200/file.json')
   
    }
}
