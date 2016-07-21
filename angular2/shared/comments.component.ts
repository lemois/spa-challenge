import { Component, Input } from '@angular/core';
import { CounterService } from './counter.service';
import {BehaviorSubject} from 'rxjs/Rx';
@Component({
  selector: 'my-comments',
  template: `
    <h2>Comments component: {{ identifier }}</h2>
    <div>Count: {{ stream | async }}</div>
    <button (click)="clicked()">Count Up</button>
  `
})
export class CommentsComponent {
  @Input() identifier: String;
  private stream: BehaviorSubject<number>;

  constructor(private counterService: CounterService) {
    this.stream = counterService.stream;
  }

  clicked() {
    this.counterService.countUp();
  }
}
