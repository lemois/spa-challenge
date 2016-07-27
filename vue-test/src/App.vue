<template>
  <div>
    <a v-link="'a'">a</a>
    <a v-link="'b'">b</a>
    <router-view :prop-a="msg">
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello Child!'
    };
  }
};
</script>
