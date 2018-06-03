import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() data = [{
    name: 'Vitaly',
    phone: 4159927028,
    friends: [{
      name: 'Test2',
      phone: 6507712795,
    }, {
      name: 'Test3',
      phone: 6507712795,
      friends: [{
        name: 'Test2',
        phone: 6507712795,
      }]
    }]
  }, {
    name: 'Test1',
    phone: 6507712795,
  }];

  checked = true;
}
