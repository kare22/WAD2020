<template>
  <div class="usersPanel">
    <UserFrame v-for="user in profiles" :user="user" :key="user.id"/>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';
import UserFrame from '@/pages/browse/components/UserFrame';

export default {
  name: 'browse',
  components: { UserFrame },
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
  place-content: center;
}
</style>
