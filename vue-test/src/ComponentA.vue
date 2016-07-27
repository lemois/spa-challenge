<template>
  <div>
    <p>Component A</p>
    <p>prop-a: {{ propA }}</p>
    <p>count: {{ count }}</p>
    <button v-on:click="onClick">Count up</button>
  </div>
</template>

<script>
import StoreA from './StoreA.js';

export default {
  data() {
    return { store: StoreA };
  },
  computed: {
    count() {
      return this.store.count;
    }
  },
  methods: {
    onClick() {
      this.store.countUp();
    }
  },
  props: ['propA']
};
</script>
