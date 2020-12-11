<template>
    <div>
        <button v-if="post.liked" class="like-button liked" @click="unlike">+ {{post.likes}}</button>
        <button v-else class="like-button" @click="like">+ {{post.likes}}</button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'LikeButton',
        props: {
            post: Object
        }, methods: {
            like: function () {
                axios.put('posts/' + this.post.id + '/likes')
                    .then(() => {
                        this.post.liked = true;
                        this.post.likes++
                    })
            },
            unlike: function () {
                axios.delete('posts/' + this.post.id + '/likes')
                    .then(() => {
                        this.post.liked = false;
                        this.post.likes--
                    })
            }
        }
    }
</script>

<style scoped>

    .like-button {
        background-size: 15px;
        background-repeat: no-repeat;
        background-position: 5px center;
        background-color: #ffffff;
        width: 60px;
        height: 25px;
        line-height: 10px;
        font-weight: bold;
        color: #01579b;
        border:1px solid #01579b;
    }

    .like-button.liked {
        background-color: #01579b;
        color: #ffffff;
    }
</style>
