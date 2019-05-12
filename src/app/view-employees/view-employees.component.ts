import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from '../../environments/environment';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { from } from 'rxjs';
import { MatTableDataSource,MatSort, MatPaginator } from '@angular/material';
import { sortAscendingPriority } from '@angular/flex-layout';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  displayedColumns: string[] = ['employeeId' , 'firstName', 'lastName', 'expLevel' , 'lob'];
  dataSource;
  @ViewChild(MatSort) sort:MatSort;
  @ViewChild(MatPaginator) paginator:MatPaginator;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {

    this.employeeService.viewEmployees().subscribe(
      data => {
        if(!data){
          return;
        }
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort=this.sort;
      this.dataSource.paginator=this.paginator;
    }
    
      );
  }

}
