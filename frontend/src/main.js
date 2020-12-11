import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios'
import Login from './components/Login'
import Posts from './components/Posts'
import Profiles from './components/Profiles'
import SignUp from './components/SignUp'


Vue.use(VueRouter);
Vue.use(Vuex);

axios.defaults.baseURL = 'http://localhost:3000/';
axios.defaults.headers.common['Authorization'] = 'Bearer ';

const store = new Vuex.Store({
    state: {
        user: null
    },
    mutations: {
        setUser: (state, user) => {
            state.user = user;
        }
    },
    actions: {
        SET_USER: (state, user) => {
            state.commit('setUser', user);

            if (user) {
                localStorage.setItem('accessToken', user.accessToken);
            }

            axios
                .defaults
                .headers
                .common['Authorization'] = 'Bearer ' + localStorage.getItem('accessToken');
        }
    },
    getters: {
        user: (state) => state.user,
    }
});

const routes = [
    {
        path: '/',
        name: 'posts',
        component: Posts,
        meta: {requiresAuth: true}
    },
    {
        path: '/profiles',
        name: 'profiles',
        component: Profiles,
        meta: {requiresAuth: true}
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/sign-up',
        name: 'sign-up',
        component: SignUp
    },
];

const router = new VueRouter({routes});

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.getters.user || !localStorage.getItem('accessToken')) {
            next({name: 'login'});
            return;
        }
    }
    next();
});


Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
