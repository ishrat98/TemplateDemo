import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  private LoggedIn: boolean;
  message: string;

 get loggedIn(): boolean {
    return this.LoggedIn;
  }

  @Input()
  set loggedIn(value: boolean) {
    this.LoggedIn = value;
    if (value === true) {
      this.message = 'Welcome back Emu!';
    } else {
      this.message = 'Please log in';
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
