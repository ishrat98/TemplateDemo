import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnChanges {
  @Input() loggedIn: boolean;
  message: string;

//  get loggedIn(): boolean {
//     return this.LoggedIn;
//   }

//   @Input()
//   set loggedIn(value: boolean) {
//     this.LoggedIn = value;
//     if (value === true) {
//       this.message = 'Welcome back Emu!';
//     } else {
//       this.message = 'Please log in';
//     }
//   }


  constructor() { }

  ngOnChanges( changes: SimpleChanges) {
    console.log(changes);
    const loggedInValue = changes.loggedIn;
    if (loggedInValue.currentValue === true) {
      this.message = 'Welcome back Emu!!';
    } else {
      this.message = 'Please log in';
    }
  }

}
