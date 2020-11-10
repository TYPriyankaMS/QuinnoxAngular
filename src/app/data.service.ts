import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  CompanyName = 'Quinox';
  constructor(private http: HttpClient) { }
  work() {
    console.log('hi hello i am done with work');
  }
  getDataFromAPI() {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
  postDataToAPI(){
    let student={
      name:'priya',
      course:'angular'
    }
   return this.http.post('https://reqres.in/api/users',student);

  }
}
