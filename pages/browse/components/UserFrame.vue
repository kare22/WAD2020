<template>
  <div>
    <div class="avatar-container">
      <img :src="authorAvatar" alt="profile" class="subscription-avatar">
      <p class="author-name"> {{ authorFirstname }} {{ authorLastname }}</p>
      <div class="post-actions">
        <button @click="followButtonPress" type="button" name="follow"
                :class="`follow-button btn btn-${pressed ? 'follow-button followed' : 'dark'}`">
          {{text}}
        </button>
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
  .avatar-container {
    border: #4d4d4d 0.1rem solid;
    border-radius: 15px;
    width: 75% !important;
    height: 20rem !important;
    padding-top: 1rem;
    margin-top: 1rem;
    text-align: center;
  }

  .subscription-avatar {
    width: 10rem !important;
    height: 10rem !important;
    object-fit: cover;
    object-position: 50% 0;
    border-radius: 50%;
  }

  .follow-button {
    background-color: #8a8a8a;
    width: 120px;
    height: 45px;
    border: none;
  }

  .follow-button.followed {
    background-color: blueviolet;
    color: white;
  }

  .author-name {
    font-size: larger;
    font-weight: bold;
    margin-top: 1rem;
    text-align: center;
  }

</style>
