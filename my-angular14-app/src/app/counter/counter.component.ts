import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {

  constructor() { }

  counter: number = 0;

  Increment(){
    this.counter += 1;
  }

  Decrement(){
    this.counter -= 1;
  }
}
