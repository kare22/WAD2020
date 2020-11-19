<template>
  <div class="container">
    {{ posts }}<br><br><br>
    {{ profiles }}<br><br><br>
    {{ currentUser }}<br>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  // beforeRouteEnter(to, from, next) {
  //   next({name: 'login'});
  // },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters({
      posts: 'posts/getPosts',
      profiles: 'users/getProfiles',
      currentUser: 'users/getCurrentUser',
    }),
  },
  mounted() {
    console.log('aaa');
    this.$store.dispatch('posts/fetchPosts');
    this.$store.dispatch('users/fetchProfiles');
    this.$store.dispatch('users/fetchCurrentUser', {id: 1});
  },
}
</script>

