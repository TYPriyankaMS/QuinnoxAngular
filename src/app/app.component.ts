import { Component } from '@angular/core';

@Component({
  selector: 'app-priya',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Kavitha';
  valueDisabled = true;
  value = 200;
  flag = true;
  answer;
  gender;
  technology = ['angular', 'java', 'spring', 'hibernate', 'jdbc'];
  submit(a, b) {
  }
}
