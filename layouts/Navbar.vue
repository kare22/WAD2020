<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="row w-100">
      <div class="col-3">
        <img class="ml-2" src="/logo.png" alt="postIt">
      </div>
      <div class="col-6 text-center d-flex">
        <input type="text" class="form-control">
        <button class="btn btn-primary">Search</button>
      </div>
      <div class="col-3 text-right avatar-container">
        <img v-if="currentUser" id="post-author-img" @mouseover="hoverProfile"
             class="subscription-avatar ml-2" :src="currentUser.avatar" alt="postIt">
        <div ref="dropdown" class="profile-info-dropdown" >
          <div id="profile-name" class="my-2">{{currentUser.firstname + (currentUser.firstname && ' ')  + currentUser.lastname}}</div>
          <div id="profile-email" class="my-2">{{currentUser.email}}</div>
          <div class="profile-link mt-3 mb-2">
            <NuxtLink to="/browse">Browse</NuxtLink>
          </div>
          <div class="profile-link my-2">
            <NuxtLink to="/login">Log Out</NuxtLink>
          </div>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Navbar',
  computed: {
    ...mapGetters({
      currentUser: 'users/getCurrentUser',
    }),
  },
  methods: {
    hoverProfile() {
      this.$refs['dropdown'].style.display =  'block';
    },
    hoverProfileLeave() {
      this.$refs['dropdown'].style.display =  'none';
    },
  },
  created() {
    this.$store.dispatch('users/fetchCurrentUser', {id: 1});
  }
}
</script>

<style scoped>
img {
  width: 30px;
}

.subscription-avatar{
  width: 2.5rem !important;
  height: 2.5rem !important;
  object-fit: cover;
  object-position: 50% 0%;
  border-radius: 50%;
}

.profile-info-dropdown {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  background-color: white;
  box-shadow: 0 .5rem 1rem rgba(0,0,0,.35)!important;
  height: auto;
  display: none;
  position: absolute;
  margin-top: 0.4rem;
  text-align: left !important;
  right: 0.6rem;
}

.profile-info-dropdown:before, .profile-info-dropdown:after {
  content: '';
  display: block;
  position: absolute;
  bottom: 100%;
  width: 0;
  height: 0;
}

.profile-info-dropdown:after {
  right: 1rem;
  border: 10px solid transparent;
  border-bottom-color: #01579b;
}

.profile-link {
  border-top: 1px solid black;
}
</style>
