<template>
    <section class="form-page">
        <section id="form-container">
            <div>
                <h1>Welcome to postIt!</h1>
            </div>
            <div>
                <h4>
                    <RouterLink :to="{ name: 'sign-up'}">Create an Account</RouterLink>
                </h4>
            </div>
            <div>
                <h4>Or</h4>
            </div>
            <div>
                <h3>Log In</h3>
                <div class="form">
                    <div>
                        <input type="text" v-model="email" placeholder="Email">
                    </div>
                    <div>
                        <input type="password" v-model="password" placeholder="Password">
                    </div>
                    <div class="error" v-if="error">{{error}}</div>
                    <div>
                        <button class="button" @click="login">Log In</button>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'Login',
        data: function() {
            return {
                email: null,
                password: null,
                error: null,
            }
        },
        methods: {
            login: function() {
                let data = {
                    email: this.email,
                    password: this.password
                };

                this.error = null;

                axios.post('users/login', data)
                    .then((response) => {
                        this.$store.dispatch('SET_USER', response.data);
                        this.$router.push({name: 'posts'})
                    })
                    .catch((error) => {
                        this.error = error.response.data.message
                    })
            }
        }
    }
</script>
