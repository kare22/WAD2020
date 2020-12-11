<template>
    <div class="add-post">
        <div class="add-post-label" v-if="!formOpen" @click="formOpen = !formOpen">
            Create a New Post
        </div>
        <div v-else>
            <div>
                <textarea v-model="post.text" placeholder="What do you want to share?"></textarea>
            </div>
            <div>
                <input type="text" v-model="post.media.url" placeholder="Media URL">
                <select v-model="post.media.type">
                    <option :value="null">Select Type</option>
                    <option value="image">Image</option>
                    <option value="video">Video</option>
                </select>

            </div>
            <div>
                <button class="cancel-button" @click="cancel">Cancel</button>
                <button class="add-button" @click="addPost">Post It!</button>
            </div>
        </div>
    </div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: 'Posts',
        data: function () {
            return {
                formOpen: false,
                post: {
                    text: null,
                    media: {
                        url: null,
                        type: null,
                    }
                }
            }
        },
        methods: {
            addPost: function () {
                axios.post('posts/', this.post)
                    .then(() => {
                        this.refresh();
                        this.cancel();
                    })
            },
            cancel: function () {
                this.post = {
                    text: null,
                        media: {
                        url: null,
                            type: null,
                    }
                };
                this.formOpen = false;
            }
        },
        props: {
            refresh: Function
        }
    }
</script>

<style scoped>
    .add-post::after {
        content: "";
        display: block;
        clear: both;
    }

    .add-post textarea {
        -webkit-border-radius: 4px;
        -moz-border-radius: 4px;
        border-radius: 4px;
        resize: none;
        width: 100%;
        padding: 15px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .add-post input {
        padding: 4px 8px;
        width: 70%;
        margin-top: 7px;
        box-sizing: border-box;
    }

    .add-post select {
        padding: 4px 8px;
        width: 30%;
        margin-top: 7px;
        box-sizing: border-box;
    }

    .add-post-label {
        text-align: center;
        cursor: pointer;
    }

    .cancel-button {
        background-color: #ffffff;
        color: #000000;
        float: left;
    }

    .add-button {
        float: right;
    }

</style>
