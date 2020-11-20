<template>
  <div>
    {{ user.firstname }} - {{ user.lastname }}
    <img :src="user.avatar" alt="profile">
  </div>
</template>

<script>
export default {
  name: 'UserFrame',
  props: {
    user: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>
<
