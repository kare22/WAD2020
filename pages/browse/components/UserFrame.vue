<template>
  <div>
    <div class="avatar-container">
      <img :src="authorAvatar" alt="profile">
      <div style="margin-left: 1rem">{{ authorFirstname }} {{ authorLastname }}</div>
      <div class="post-actions pl-3">
        <button @click="followButtonPress" type="button" name="follow" :class="`follow-button btn btn-${pressed ? 'follow-button followed' : 'dark'}`">
          {{text}}</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserFrame',
  data() {
    return {
      text: "Follow",
      pressed: false,
    };
  },
  computed: {
    authorFirstname() {
      return this.user?.firstname || ''
    },
    authorLastname() {
      return this.user?.lastname || ''
    },
    authorAvatar() {
      return this.user?.avatar || ''
    },
  },
  methods: {
    followButtonPress() {
      this.pressed = !this.pressed;
      if (this.pressed) {
        this.text = "Followed"
      } else {
        this.text = "Follow"
      }
    },
  },
  props: {
    user: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

.follow-button {
  background-color: #8a8a8a;
  width: 80px;
  height: 25px;
  line-height: 10px;
  text-align: left;
  border: none;
}

.follow-button.followed {
  background-color: blueviolet;
  color: white;
}

</style>
