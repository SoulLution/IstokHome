const state = () => ({
  profile: {},
  performer: {}
});

const getters = {
  PROFILE: state => {
    return {
      profile: state.profile,
      performer: state.performer,
    }
  },
};

const mutations = {
  SET_PROFILE: (state, payload) => {
    state.profile = payload.profile;
    state.performer = payload.performer;
  },
};

import axios from 'axios'
const actions = {
  GET_PROFILE: async (context, options) => {
      axios.get('https://istokhome.com/api/users/profile/',{
        headers: { Authorization: 'Token ' +  localStorage.getItem('token') }
      })
      .then( res => {
        let data = {}
        data.profile = res.data
        if(data.profile.performer_id)
          axios.get(`https://istokhome.com/api/performer/${data.profile.performer_id}/`,{
            headers: { Authorization: 'Token ' +  localStorage.getItem('token') }
          })
          .then( res1 => {
            data.performer = res1.data
            context.commit('SET_PROFILE', data)
          })
        else
          context.commit('SET_PROFILE', data)
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