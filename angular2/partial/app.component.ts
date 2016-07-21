import { Component } from '@angular/core';
import { CommentsComponent } from '../shared/comments.component';
import { TimelineComponent } from '../shared/timeline.component';
import { CounterService } from '../shared/counter.service';
@Component({
  selector: 'my-app',
  template: document.querySelector('my-app').innerHTML,
  providers: [
    CounterService
  ],
  directives: [
    CommentsComponent,
    TimelineComponent
  ]
})
export class AppComponent { }
