import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template:`
  <div><h1>{{pageTitle}}</h1>
    <app-products></app-products>
  </div>`
})
export class AppComponent {
  title = 'testAngular';
  name = "bruce"
  getName() {
    return this.name
  }
  obj= {
    name: 'kelly',
    age: 20
  }
  arr = ['bruce','tommy','peter']
  siteURL = window.location.href

  pageTitle: string = "Acne Product Management"
}
