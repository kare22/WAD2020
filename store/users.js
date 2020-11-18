function state() {
  return {
    profiles: [],
    user: {},
  };
}

const mutations = {
  setProfiles(state, data) {
    state.profiles = data;
  },
  setUser(state, data) {
    state.user = data;
  },
};

const actions = {
  fetchProfiles({ commit }) {
    this.$axios.get('profiles').then(({data}) => {
      commit('setProfiles', data)
    })
  },
  fetchCurrentUser({ commit }, {id}) {
    this.$axios.get(`users/${id}`).then(({data}) => {
      commit('setUser', data)
    })
  }
};

const getters = {
  getCurrentUser: (state) => { return state.user },
  getProfiles: (state) => { return state.profiles },
};

export default {
  state,
  getters,
  mutations,
  actions,
  namespaced: true,
};
