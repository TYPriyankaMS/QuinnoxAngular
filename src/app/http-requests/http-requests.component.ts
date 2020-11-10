import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-http-requests',
  templateUrl: './http-requests.component.html',
  styleUrls: ['./http-requests.component.css']
})
export class HttpRequestsComponent implements OnInit {
employee
  constructor(private service: DataService) { }

  ngOnInit() {
  }
  getDataFromService() {
    let observable=this.service.getDataFromAPI();
    observable.subscribe(response=>{
    this.employee= response['data'];
    })
  }
  postDataToService(){
    this.service.postDataToAPI().subscribe(data=>{
      console.log(data);
    })
  }
}
