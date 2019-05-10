import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/internal/operators';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private url = '/login/';
    constructor(private router: Router) {     }

    login(data): boolean {
      if (data.password === '123456789') {
        this.save_token({success : true , loggedInUserName : data.username , token : 'f51db1ff18fd8935b2df544805a2dd1e'});
        return true;
      } else {
        return false;
      }
    }

    private save_token(data) {
        if (data.success) {
            localStorage.setItem('token', data.token);
            localStorage.setItem('LoggedInUserName', data.loggedInUserName);
            return;
        }
    }
    canActivate(): boolean {
      const token = localStorage.getItem('token');
      if (token == null)   {
              this.router.navigate(['login']);
              return false;
          }
      return true;
      }
}
