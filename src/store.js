import { createStore } from "vuex";

export default createStore({

  state: {
    message: 'どの牛丼屋が１番かって？'
  },
  getters:{
    message(state) {
      return state.message
    }
  },
  mutations: {
    setMessage(state,payload){
      state.message = payload.message
    }
  },
  actions: {
    doUpdate({commit}, message){
      commit('setMessage',{message})
    }
  }
})