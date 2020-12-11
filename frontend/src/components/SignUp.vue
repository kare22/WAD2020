<template>
    <section class="form-page">
        <section id="form-container">
            <div class="success" v-if="success">
                Congratulations, your account has been created! You can <RouterLink :to="{name: 'login'}">log in</RouterLink> now.
            </div>
            <div v-else>
                <div>
                    <h4>
                        <span>
                            Already Registered?
                        </span>
                        <RouterLink :to="{ name: 'login'}">Log In</RouterLink>
                    </h4>
                </div>
                <div>
                    <div class="form">
                        <div>
                            <input type="text" v-model="email" placeholder="Email">
                        </div>
                        <div>
                            <input type="password" v-model="password" placeholder="Password">
                        </div>
                        <div>
                            <input type="text" v-model="firstname" placeholder="First Name">
                        </div>
                        <div>
                            <input type="text" v-model="lastname" placeholder="Last Name">
                        </div>
                        <div>
                            <input type="text" v-model="avatar" placeholder="Avatar URL">
                        </div>
                        <div class="error" v-if="error">{{error}}</div>
                        <div>
                            <button class="button" @click="signup">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
    import axios from 'axios'

    export default {
        name: 'SignUp',
        data: function() {
            return {
                email: null,
                password: null,
                firstname: null,
                lastname: null,
                avatar: null,
                error: null,
                success: false,
            }
        },
        methods: {
            signup: function() {
                let data = {
                    email: this.email,
                    password: this.password,
                    firstname: this.firstname,
                    lastname: this.lastname,
                    avatar: this.avatar,
                };

                this.error = null;
                this.succes = false;

                axios.post('users/', data)
                    .then(() => {
                        this.success = true
                    })
                    .catch((error) => {
                        this.error = error.response.data.message
                    })
            }
        }
    }
</script>
<style scoped>
    .success {
        margin-top: 50px;

    }
</style>
