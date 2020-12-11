<template>
    <div>
        <button v-if="profile.followed" class="follow-button followed" @click="unfollow">Unfollow</button>
        <button v-else class="follow-button" @click="follow">Follow</button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'FollowButton',
        props: {
            profile: Object
        }, methods: {
            follow: function () {
                axios.post('users/' + this.profile.id + '/follows')
                    .then(() => {
                        this.profile.followed = true
                    })
            },
            unfollow: function () {
                axios.delete('users/' + this.profile.id + '/follows')
                    .then(() => {
                        this.profile.followed = false
                    })
            }
        }
    }
</script>

<style scoped>

    .follow-button {
        background-color: #82008f;
    }

    .follow-button.followed {
        background-color: #ffffff;
        border: 1px solid #82008f;
        color: #82008f;
    }
</style>
