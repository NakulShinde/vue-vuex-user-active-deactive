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
    activateUser: function (state, payload) {
      //remove user from deactiveUsers
      state.deactiveUsers.splice(state.deactiveUsers.indexOf(payload.user), 1);

      let newUser = Object.assign({}, payload.user);

      //update activation state
      newUser.isActive = true;
      if (newUser.date) {
        delete newUser.date
      }

      state.userList.push(newUser);
    },
    deactivateUser: function (state, payload) {
      //remove user from userList
      state.userList.splice(state.userList.indexOf(payload.user), 1);

      let newUser = Object.assign({
        date: new Date()
      }, payload.user);

      //update activation state
      newUser.isActive = false;

      state.deactiveUsers.push(newUser);
    }
  },
  actions: {
    
    activateUser({ commit }, payload) {
      //1 sec delayed to call respective mutation 
      setTimeout(() => {
        commit('activateUser', payload);
      }, 1000);
      
    },

    deactivateUser({ commit }, payload) {
      //1 sec delayed to call respective mutation 
      setTimeout(() => {
        commit('deactivateUser', payload);
      }, 1000);

    }
  }
})