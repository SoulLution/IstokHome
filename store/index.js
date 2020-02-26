const state = () => ({
  profile: {},
});

const getters = {
  PROFILE: state => {
    return {
      profile: state.profile,
    }
  },
};

const mutations = {
  SET_PROFILE: (state, payload) => {
    state.profile = payload;
  },
};

import axios from 'axios'
const actions = {
  GET_PROFILE: async (context, options) => {
      axios.get('http://185.146.3.49:8000/api/users/profile/',{
        headers: { Authorization: 'Token ' +  localStorage.getItem('token') }
      })
      .then( res => {
        context.commit('SET_PROFILE', res.data)
        if(options.path) options.router.push(options.path)
      })
      .catch(err => options.router.push('/'))

    },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};