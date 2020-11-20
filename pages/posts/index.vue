<template>
  <div>
    <div class="postsPanel py-3">
      <Post v-for="(post, postIndex) in posts" :key="postIndex" :post="post"/>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Post from './components/Post';

export default {
  name: 'posts',
  layout: 'default',
  components: {
    Post
  },
  computed: {
    ...mapGetters({
      posts: 'posts/getPosts',
    }),
  },
  mounted() {
    this.$store.dispatch('posts/fetchPosts');
  }
}
</script>

<style scoped>
.postsPanel {
  background-color: white;

}
</style>
