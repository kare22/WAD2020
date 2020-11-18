<template>
  <div class="container">
    {{ posts }}
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({posts: 'posts/getPosts'}),
  },
  mounted() {
    this.$store.dispatch('posts/fetchPosts');
  },
}
</script>

