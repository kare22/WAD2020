<template>
  <div></div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  beforeRouteEnter(to, from, next) {
    next({name: 'login'});
  },
  data() {
    return {
    }
  },
}
</script>

