// src/store/index.js
import Vue from "vue";
import Vuex from "vuex";

//安裝插件
Vue.use(Vuex); //是一個插件，所以使用Vue.use

//創建並導出物件
export default new Vuex.Store({
  state: {
    step: 1, //之後每個組件都可以用$store.state.counter拿到這個狀態！！
  },
  mutations: {
    prevStep(state) {
      state.step--;
      if (state.step <= 1) {
        state.step = 1;
      }
      //console.log(state.step);
    },
    nextStep(state) {
      state.step++;
      if (state.step > 4) {
        state.step = 4;
      }
      //console.log(state.step);
    },
  },
  actions: {},
  modules: {},
});
