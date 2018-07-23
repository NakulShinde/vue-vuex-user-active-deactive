import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    deactiveUsers: [],
    userList: [{
        id: 0,
        isActive: true,
        name: 'Nakul Shinde'
      },
      {
        id: 1,
        isActive: true,
        name: 'User 1'
      },
      {
        id: 2,
        isActive: true,
        name: 'User 2'
      },
      {
        id: 3,
        isActive: true,
        name: 'User 3'
      },
      {
        id: 4,
        isActive: true,
        name: 'User 4'
      },
      {
        id: 5,
        isActive: true,
        name: 'User 5'
      },
    ],
  },
  getters: {
    activeUsers: function (state) {
      return state.userList.filter(function (user) {
        return user.isActive == true;
      })
    },
    deactiveUsers: function (state) {
      return state.deactiveUsers;
    }
  },
  mutations: {

  },
  actions: {

  }
})