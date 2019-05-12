import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  env = environment;
  DefaultLevel = 'L1';

  form: FormGroup = new FormGroup({
    $key: new FormControl(null),
    hmanager: new FormControl('', Validators.required),
    smanager: new FormControl('', Validators.required),
    fname: new FormControl('', Validators.required),
    mname: new FormControl(''),
    lname: new FormControl('', Validators.required),
    city: new FormControl(''),
    state: new FormControl('', Validators.required),
    crole: new FormControl('', Validators.required),
    eid: new FormControl('', Validators.required),
    onshore: new FormControl(''),
    level: new FormControl('')
  });

   employeeData: Employee = new Employee();

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {

    console.log(this.employeeService.testSerivice());

  }


  onSubmit() {
    // fill employee data object from form
    // this.employeeData.hmanager = 'Tripti';
    // this.employeeData.smanager = 'abc';
    this.employeeData.firstName = this.form.get('fname').value;
    this.employeeData.middleName = this.form.get('mname').value;
    this.employeeData.lastName = this.form.get('lname').value;
    this.employeeData.dm = 'dummy Dm';
    this.employeeData.lob = 'dummmy lob';
    this.employeeData.onshore = this.form.get('onshore').value;
    this.employeeData.location = this.form.get('city').value + ', ' + this.form.get('state').value;
    this.employeeData.role = this.form.get('crole').value;
    this.employeeData.expLevel = this.form.get('level').value;
    this.employeeData.employeeId = +this.form.get('eid').value;
    this.employeeData.notes = 'notes';
    this.employeeData.ssn = 0;
    this.employeeData.startDate = new Date();
    this.employeeData.endDate = new Date();

    // Call service to add employee data
    this.employeeService.addEmployee(this.employeeData);
    alert('Employee added successfully.');
  }
}
