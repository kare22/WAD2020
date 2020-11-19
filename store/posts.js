
function state() {
  return {
    posts: [],
  };
}

const mutations = {
  setPosts(state, data) {
    state.posts = data;
  },
};

const actions = {
  fetchPosts({ commit }) {
    this.$axios.get('posts').then(({data}) => {
      commit('setPosts', data)
    })
  }
};

const getters = {
  getPosts: (state) => { return state.posts },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
