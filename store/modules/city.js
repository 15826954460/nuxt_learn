const state = {
  list: ["beijing", "tianjin", "shanghai"]
};

const mutations = {
  mutations_add(state, text) {
    state.list.push(text);
  }
};

const actions = {
  add: ({ commit }, text) => {
    commit("mutations_add", text);
  }
};

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
