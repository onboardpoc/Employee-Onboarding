import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  env = environment;
  selected = 'L1';
   employeeData: Employee = new Employee();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {

    console.log(this.employeeService.testSerivice());

  }
  onSubmit() {
    // fill employee data object from form
    this.employeeData.hmanager = 'Tripti';
    this.employeeData.smanager = 'abc';
    this.employeeData.firstName = 'singh';
    this.employeeData.middleName = 'abc';
    this.employeeData.lastName = 'dsds';
    this.employeeData.dm = 'dsds';
    this.employeeData.lob = 'dsds';
    this.employeeData.onshore = 'dsds';
    this.employeeData.location = 'dsds';
    this.employeeData.role = 'dsds';
    this.employeeData.expLevel = 'dsds';
    this.employeeData.employeeId = 856164;
    this.employeeData.notes = 'dsds';
    this.employeeData.ssn = 1234;

    // Call service to add employee data
    this.employeeService.addEmployee(this.employeeData);
    alert('SUCCESS!! :-)\n\n');
  }
}
