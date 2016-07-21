import { provideRouter, RouterConfig }  from '@angular/router';
import { TimelineComponent } from '../shared/timeline.component';
import { CommentsComponent } from '../shared/comments.component';

const routes: RouterConfig = [
  {
    path: '',
    component: TimelineComponent
  },
  {
    path: 'comments',
    component: CommentsComponent
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];
