import axios from 'axios';

const getInitialState = () => {
  return {
    users: [],
    isUserListLoading: false,
    usersPerPage: 24,
    page: 1,
    searchString: '',
    isClientSearch: true
  };
};

const state = getInitialState();

const getters = {
  users: (state) => {
    return state.users;
  }
};

const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
  setPage(state, page) {
    state.page = page;
  },
  setSearchString(state, searchString) {
    state.searchString = searchString;
  },
  setLoading(state, isUserListLoading) {
    state.isUserListLoading = isUserListLoading;
  },
  resetState(state) {
    Object.assign(state, getInitialState());
  }
};

const actions = {
  getUserList({ state, dispatch }) {
    state.searchString.length ? dispatch('searchUsers') : dispatch('getUsers');
  },
  async getUsers({ state, commit }) {
    commit('setLoading', true);

    try {
      const { data } = await axios.get('https://api.github.com/users', {
        params: {
          per_page: state.usersPerPage
        }
      });

      commit('setUsers', data);
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      commit('setLoading', false);
    }
  },
  async searchUsers({ state, commit }) {
    commit('setLoading', true);

    try {
      if (state.isClientSearch) {
        const filteredUsers = state.users.filter((user) => user.login.includes(state.searchString));

        commit('setUsers', filteredUsers);

        return;
      }

      const { data } = await axios.get('https://api.github.com/search/users', {
        params: {
          per_page: state.usersPerPage,
          q: state.searchString
        }
      });

      commit('setUsers', data.items);
      // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      commit('setLoading', false);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};
