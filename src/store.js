import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import * as APIActions from './APIActions';

APIActions.init(axios);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {

  },
  APIActions,
  mutations: {

  },
  actions: {

  },
});
