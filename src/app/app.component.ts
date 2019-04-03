import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee-Onboarding';
  env = environment;
  searchValue = 'Clear Me';
}
