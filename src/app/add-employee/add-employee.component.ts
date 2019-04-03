import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  env = environment;
  constructor() { }

  ngOnInit() {
  }
  onSubmit() {
    alert('SUCCESS!! :-)\n\n')
   
  }
}
