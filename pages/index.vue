<template>
  <div></div>
</template>

<script>
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

