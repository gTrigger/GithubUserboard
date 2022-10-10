import axios from 'axios';

const getInitialState = () => {
  return {
    user: null,
    repos: [],
    isUserInfoLoading: false
  };
};

const state = getInitialState();

const mutations = {
  setUser(state, user) {
    state.user = user;
  },
  setRepos(state, repos) {
    state.repos = repos;
  },
  setLoading(state, isUserInfoLoading) {
    state.isUserInfoLoading = isUserInfoLoading;
  },
  resetState(state) {
    Object.assign(state, getInitialState());
  }
};

const actions = {
  async getUserInfo({ state, commit, dispatch }, login) {
    commit('setLoading', true);

    const { data } = await axios.get(`https://api.github.com/users/${login}`);

    commit('setUser', data);
    commit('setLoading', false);
  },
  async getUserRepos({ state, commit, dispatch }, login) {
    commit('setLoading', true);

    const { data } = await axios.get(`https://api.github.com/users/${login}/repos`);

    commit('setRepos', data);
    commit('setLoading', false);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
