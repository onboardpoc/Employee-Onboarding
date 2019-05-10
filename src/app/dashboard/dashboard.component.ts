import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  LoggedInUserName: string;
  constructor() { }

  ngOnInit() {
    this.LoggedInUserName  = localStorage.getItem('LoggedInUserName');
  }

}
