import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { InteractionService } from './interaction.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor( private interactionService: InteractionService) {}

  greetStudent()  {
    this.interactionService.sendMessage('Good Afternoon and welcome');

  }

  appreciateStudent() {
    this.interactionService.sendMessage('well done');

  }
}
