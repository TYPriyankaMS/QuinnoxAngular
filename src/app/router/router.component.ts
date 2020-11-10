import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-router',
  templateUrl: './router.component.html',
  styleUrls: ['./router.component.css']
})
export class RouterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate(id, name, url) {
    console.log(id + name + url);
    this.router.navigate([`activated-router/${id}`], {
      queryParams: {
        username: name,
        imageUrl: url
      }
    });
  }

}
