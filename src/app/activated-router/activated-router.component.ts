import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activated-router',
  templateUrl: './activated-router.component.html',
  styleUrls: ['./activated-router.component.css']
})
export class ActivatedRouterComponent implements OnInit {

  id;
  user
  constructor(private activated: ActivatedRoute) {
    this.activated.params.subscribe(data => {
      this.id = data;
      console.log(this.id);
    });
    this.activated.queryParams.subscribe(data => {
      this.user = data;
      console.log(this.user);
    })
  }

  ngOnInit() {

  }

}
