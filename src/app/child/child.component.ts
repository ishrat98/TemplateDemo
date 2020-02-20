import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  constructor(private interactionService: InteractionService) { }

  ngOnInit() {
    this.interactionService.teacherGreeted$.subscribe(
      message => {
        if (message === 'Good Morning') {
          alert('Good Morning Teacher!');
        } else if (message === 'Well Done') {
          alert('Thank you Teacher!');
        }
      }
    );
  }


}
