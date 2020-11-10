import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  //step 1
  employee = {
    name: 'priyanka',
    salary: 2000,
    gender: 'female',
    designation: 'software Engineer'
  }
  company;
  dataFromChild
  constructor(private service: DataService) {
    service.CompanyName;
 
  }
  

  ngOnInit() {
this.service.work;
console.log( this.service.CompanyName);
  }

}
