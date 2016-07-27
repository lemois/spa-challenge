import Vue from 'vue';
import Router from 'vue-router';

import App from './App.vue';
import ComponentA from './ComponentA.vue';
import ComponentB from './ComponentB.vue';

new Vue({
  el: 'body',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB
  }
});

Vue.use(Router);

const router = new Router();

router.map({
  '/a': {
    component: ComponentA
  },
  '/b': {
    component: ComponentB
  }
});

router.start(App, '#app');

router.redirect({
  '*': '/a'
});
