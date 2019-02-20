import Vue from "vue";
import Vuex from "vuex";
import city from "./modules/city";

Vue.use(Vuex);

// 这里必须通过一个方法来返回
const store = () =>
  new Vuex.Store({
    modules: {
      city
    },
    actions: {
    }
  });
export default store;
