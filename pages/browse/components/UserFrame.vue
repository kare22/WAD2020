<template>
  <div class="subscription mb-1" align="center">
    <img v-if="authorAvatar" :src="authorAvatar" class="subscription-avatar" alt="Me">
    <p class="subscription-name">{{ authorFirstname }} {{ authorLastname }}</p>
    <button @click="followButtonPress"
            type="button"
            name="follow"
            :class="`follow-button btn btn-${pressed ? 'follow-button followed' : 'dark'}`"
            class="mb-2"
    >{{text}}</button>
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

.subscription {
  border: #4d4d4d 0.1rem solid;
  border-radius: 15px;
  width: 100% !important;
  padding-top: 1rem;
  margin-top: 1rem;
}

.subscription-avatar{
  width: 8rem !important;
  height: 8rem !important;
  object-fit: cover;
  object-position: 50% 0%;
  border-radius: 50%;
}

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
