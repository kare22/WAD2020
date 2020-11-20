<template>
  <div>
    <div class="post">
      <div class="post-author">
        <span class="post-author-info">
          <img :src="authorAvatar" alt="Post author">
          <small style="margin-left: 1rem">{{ authorFirstname }} {{ authorLastname }}</small>
        </span>
        <small>{{ post.createTime || '' }}</small>
      </div>
      <div v-if="mediaType === 'image'" class="post-image">
        <img :src="url" alt="postImage">
      </div>
      <video v-else-if="mediaType === 'video'" controls>
        <source :src="url" type="video/mp4">
        <source :src="url" type="video/ogg">
        Your browser does not support video.
      </video>
      <h3>{{ post.text || '' }}</h3>
      <div class="post-actions">
        <button @click="likeButtonPress" type="button" name="like" :class="`like-button btn btn-${pressed ? 'primary' : 'dark'}`">{{ post.likes || '' }}</button>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Post',
  data() {
    return {
      pressed: false,
    };
  },
  computed: {
    authorFirstname() {
      return this.post?.author?.firstname || ''
    },
    authorLastname() {
      return this.post?.author?.lastname || ''
    },
    authorAvatar() {
      return this.post?.author?.avatar || ''
    },
    author() {
      return this.post?.author?.firstname || ''
    },
    url() {
      return this.post?.media?.url || null
    },
    mediaType() {
      return this.post?.media?.type || null
    },
  },
  methods: {
    likeButtonPress() {
      this.pressed = !this.pressed;
    },
  },
  props: {
    post: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

.post {
  width: 80%;
  margin: 15px auto;
  box-shadow: 0 0 15px rgba(38, 50, 56, 0.33);
  border-radius: 5px;
}

.post .post-author {
  padding: 10px;
}

.post .post-author::after {
  content: "";
  display: block;
  clear: both;
}

.post .post-author .post-author-info {
  float: left;
  position: relative;
  width: 50%;
}

.post .post-author .post-author-info img {
  width: 30px;
  height: 30px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  margin: 5px;
}

.post .post-author .post-author-info small {
  position: absolute;
  top: 10px;
  left: 35px;
}

.post .post-author .post-author-info + small {
  float: right;
  color: grey;
  padding: 10px;
}

.post .post-image img, video {
  width: 100%;
  min-height: 150px;
  max-height: 350px;
  object-fit: cover;
  object-position: top center;
}

.post .post-title {
  padding: 10px;
}

.post .post-title h3 {
  display: inline;
}

.post .post-title ~ .post-actions {
  padding: 10px;
}

.like-button {
  background-image: url(/like.png);
  background-size: 15px;
  background-repeat: no-repeat;
  background-position: 5px center;
  width: 60px;
  height: 25px;
  padding-left: 23px;
  line-height: 10px;
  text-align: left;
  border: none;
}

.like-button.liked {
  background-color: blue;
}
</style>
