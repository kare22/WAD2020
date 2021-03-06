import {mount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Posts from "../../src/components/Posts.vue";
import moment from 'moment';

const localVue = createLocalVue();

localVue.use(Vuex);
localVue.use(VueRouter);

//Create dummy store
const store = new Vuex.Store({
    state: {
        user: {
            id: 1,
            firstname: 'test',
            lastname: 'test',
            email: 'test',
            avatar: 'test',
        }
    },
    getters: {
        user: (state) => state.user,
    }
});

//Create dummy routes
const routes = [
    {
        path: '/',
        name: 'posts',
    },
    {
        path: '/profiles',
        name: 'profiles'
    }
];

const router = new VueRouter({routes});

const testData = [
    {
        id: 1,
        text: "I think it's going to rain",
        createTime: "2020-12-05 13:53:23",
        likes: 0,
        liked: false,
        media: {
            url: "test-image.jpg",
            type: "image"
        },
        author: {
            id: 2,
            firstname: "Gordon",
            lastname: "Freeman",
            avatar: 'avatar.url'
        }
    },
    {
        id: 2,
        text: "Which weighs more, a pound of feathers or a pound of bricks?",
        createTime: "2020-12-05 13:53:23",
        likes: 1,
        liked: true,
        media: null,
        author: {
            id: 3,
            firstname: "Sarah",
            lastname: "Connor",
            avatar: 'avatar.url'
        }
    },
    {
        id: 4,
        text: null,
        createTime: "2020-12-05 13:53:23",
        likes: 3,
        liked: false,
        media: {
            url: "test-video.mp4",
            type: "video"
        },
        author: {
            id: 5,
            firstname: "Richard",
            lastname: "Stallman",
            avatar: 'avatar.url'
        }
    }
];

//Mock axios.get method that our Component calls in mounted event
jest.mock("axios", () => ({
    get: () => Promise.resolve({
        data: testData
    })
}));

describe('Posts', () => {

    const wrapper = mount(Posts, {router, store, localVue});

    it('1 == 1', function () {
        expect(true).toBe(true)
    });

    it('Check number of posts matches testData lenght', () => {
        const container = wrapper.find('.main-container')
        expect(container.findAll('.post').length).toBe(testData.length);
    });

    it('Check if post has media property that they are rendered correctly', () => {
        const posts = wrapper.findAll('.post')
        testData.forEach((t, i) => {
            if(t.media && t.media.type) {//post has media prop
                const media = posts.at(i).find('.post-image');
                if(t.media.type === 'video'){
                    expect(media.find('video').exists()).toBe(true);
                } else if(t.media.type === 'image') {
                    expect(media.find('img').exists()).toBe(true);
                }
            } else { //post does not have media prop
                const media = posts.at(i).find('.post-image');
                expect(media.exists()).toBe(false);
            }
        });
    });

    it('Test that post create time is displayed correctly -> December 5, 2020 1:53 PM', () => {
        const dates = wrapper.findAll('.post-create-time');
        for ( let i = 0; i < dates.length; i++ ) {
            const date = dates.at(i).text();
            const format = 'LLLL';
            expect(moment(date, format, true).isValid()).toBe(true);
        }
    })
});