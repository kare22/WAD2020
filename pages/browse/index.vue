<template>
  <div class="text-center bg-white">
    <div class="usersPanel text-center mx-auto py-4">
      <UserFrame v-for="user in profiles" :user="user" :key="user.id"/>
    </div>
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
  width: 20rem;
  place-content: center;
}
</style>
