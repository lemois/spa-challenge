import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { TimelineComponent } from '../shared/timeline.component';
import { CommentsComponent } from '../shared/comments.component';
import { CounterService } from '../shared/counter.service';
@Component({
  selector: 'my-app',
  template: `
    <h2>SNS App</h2>
    <a [routerLink]="['']">Home</a>
    <a [routerLink]="['/comments']">Comments</a>
    <router-outlet></router-outlet>
  `,
  directives: [
    ROUTER_DIRECTIVES
  ],
  providers: [
    CounterService
  ],
  precompile: [
    TimelineComponent,
    CommentsComponent
  ]
})
export class AppComponent { }

