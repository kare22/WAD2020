<template>
  <div class="container">
    <div class="row">
      <div class="col-3"></div>
      <div class="col-6 postsPanel">
        <Post v-for="(post, postIndex) in posts" :key="postIndex" :post="post"/>
      </div>
      <div class="col-3"></div>
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
      profiles: 'users/getProfiles',
      currentUser: 'users/getCurrentUser',
    }),
  },
  mounted() {
    this.$store.dispatch('posts/fetchPosts');
    this.$store.dispatch('users/fetchProfiles');
  }
}
</script>

<style scoped>
.postsPanel {
  background-color: white;
}
</style>
