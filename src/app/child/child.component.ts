import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { DataService } from '../data.service';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy{

  @Input() dataFromParent;
  // step 1 for child to parent
  student = {
    name: 'swarna',
    course: 'angular',
    gender: 'female',
    marks: 20
  };
  // step2
  @Output() childEvent = new EventEmitter();


  constructor(private priya:DataService) {
    console.log('child component constructor');
  }

  ngOnChanges() {
    console.log('child component ng ONchanges');
  }


  ngOnInit() {
    // step3 emit the event using emit()
    this.childEvent.emit(this.student);
    console.log('this is companyName'+this.priya.CompanyName);
    console.log('child of ngOn Init is executed');

  }
  ngDoCheck() {
    console.log('child of ng Do check is executed');
  }

// tslint:disable-next-line: one-line
ngAfterContentInit(){
  console.log('child of ng Ater content Init');
}
ngAfterContentChecked(){
  console.log('child of ng after content checked');
}
ngAfterViewInit(){
  console.log('child of ngAfter ViewInit');
}
ngAfterViewChecked(){
  console.log('child of ngAfter view cheked')
}
ngOnDestroy(){
  console.log('child of Destroy is executed')
}
}
