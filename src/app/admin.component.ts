import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { AdminService } from '../admin.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  env = environment;
  selected = 'L1';
 //  employeeData: Employee = new Employee();

  constructor(private adminService: AdminService) { }

  ngOnInit() {

    console.log(this.adminService.testSerivice());

  }
}