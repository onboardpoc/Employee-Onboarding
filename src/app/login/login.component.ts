import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import { environment } from '../../environments/environment';
import {MatSnackBar} from '@angular/material';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(public authService: AuthService, public router: Router, private snackBar: MatSnackBar) {
    }
env = environment;
username: string;
password: string;

    ngOnInit() {
    }

    goTo(path): void {
        this.router.navigateByUrl(path);
    }

    login(): void {
        if ( this.authService.login({ username : this.username , password : this.password}) ) {
           this.goTo('dashboard');
        } else  {
            this.snackBar.openFromComponent(IncorrectUsernamePasswordSnackComponent, { duration: 10 * 1000, });
        }
     }
}

@Component({
    selector: 'app-snack-bar-component-example-snack',
    template: '<span class="example-pizza-party">  Incorrect Username or Password, Please try again. </span>',
    styles: [`
      .example-pizza-party {
        color: white;
      }
    `],
  })
  export class IncorrectUsernamePasswordSnackComponent {}
