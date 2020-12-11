<template>
    <div>
        <Header/>
        <section class="main-container">
            <div class="profile" v-for="profile in profiles" :key="profile.id">
                <img :src="profile.avatar" :alt="profile | profileName">
                <h2>{{profile | profileName}}</h2>
                <FollowButton :profile="profile"/>
            </div>
        </section>
    </div>
</template>

<script>
    import axios from 'axios'
    import Header from './Header'
    import FollowButton from './FollowButton'

    export default {
        name: 'Profiles',
        components: {
            Header,
            FollowButton
        },
        data: function () {
            return {
                profiles: []
            }
        },
        mounted() {
            axios.get('users/')
                .then((response) => {
                    this.profiles = response.data;
                })
                .catch(() => {
                    Header.methods.logout()
                })
        },
        filters: {
            profileName: function (profile) {
                return profile.firstname + ' ' + profile.lastname;
            }
        }
    }
</script>

<style scoped>
    .profile {
        width: 45%;
        display: inline-block;
        border: 1px solid #dedede;
        border-radius: 5px;
        text-align: center;
        margin: 1%;
    }
    .profile img{
        width: 75px;
        height: 75px;
        border-radius: 100%;
        object-fit: cover;
        object-position: top;
        margin: 5px;
    }

    .profile h2{
        font-size: 16px;
    }
</style>
