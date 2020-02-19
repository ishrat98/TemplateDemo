import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit  {
  Pagetitle = 'Angular Component Interaction';
  imgUrl = 'https://picsum.photos/200';
  count = 0;
  name: string;
  username: string;
  private CustomerName: string;
  @ViewChild('nameRef') nameElementRef: ElementRef;

  incrementCounter() {
    this.count += 1;
  }

  get customerName(): string {
    return this.CustomerName;
  }

  set customerName(value: string) {
    if (value === 'Emu') {
      alert('Hello Emu!');
    }
    this.CustomerName = value;
  }
  greetMe(updatedValue) {
    if (updatedValue === 'Emu') {
      alert('Welcome back Emu');
    }
    this.username = this.username;
  }

  ngAfterViewInit(): void {
    this.nameElementRef.nativeElement.focus();
    console.log(this.nameElementRef);
  }
}
