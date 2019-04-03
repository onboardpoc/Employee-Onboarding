import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { RestService } from '../rest.service';

interface myData{
  obj: Object
}


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  env = environment;
  rest=[]
  constructor(private myFirstService: RestService) { }

  ngOnInit() {
    this.myFirstService.getData().subscribe(data=>{
      console.log("we got", data)
    })
  }
  onSubmit() {
    alert('SUCCESS!! :-)\n\n')
   
  }
}
