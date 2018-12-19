import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    funds: 10
  },
  getters: {
    current_funds: state => {
      return state.funds
    }
  }
})
