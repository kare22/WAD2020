<template>
  <div>
    <Navbar v-if="$route.name !== 'login'" />
    <div name="defaultBody" class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('posts/fetchPosts');
    this.$store.dispatch('users/fetchProfiles');
    this.$store.dispatch('users/fetchCurrentUser', {id: 1});
  }
}
</script>

<style>

button:hover {
  box-shadow: 0 0 5px rgba(38, 50, 56, 0.7);
  cursor: pointer;
}

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

body {
  background-color: #0277bd;
  color: #263238;
}

html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
<script>
import Navbar from '@/layouts/Navbar';
export default {
  components: { Navbar },
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  }
}
</script>
