import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  Pagetitle = 'Angular Component Interaction';
  imgUrl = 'https://picsum.photos/200';
  count = 0;
  name: string;
  username: string;

  incrementCounter() {
    this.count += 1;
  }

  greetMe(updatedValue) {
    if (updatedValue === 'Emu') {
      alert('Welcome back Emu');
    }
    this.username = this.username;
  }
}
