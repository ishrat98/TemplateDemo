import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private teacherGreetedSource = new Subject<string>();

  teacherGreeted$ = this.teacherGreetedSource.asObservable();
  constructor() { }

  sendMessage( msg: string)  {
    this.teacherGreetedSource.next(msg);
  }
}
