<template>
  <div class="usersPanel">
    <UserFrame v-for="user in profiles" :user="user" :key="user.id" align="center"/>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import UserFrame from '@/pages/browse/components/UserFrame';

  export default {
    name: 'browse',
    components: {UserFrame},
    computed: {
      ...mapGetters({
        profiles: 'users/getProfiles'
      })
    },
    mounted() {
      this.$store.dispatch('users/fetchProfiles')
    }
  }
</script>

<style scoped>
  .usersPanel {
    background-color: white;
    width: 75%;
    min-height: 100%;
    margin: auto auto;
    padding: 30px 30px 15px 15px;
  }
</style>
