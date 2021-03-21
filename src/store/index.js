import { createStore } from 'vuex'

export default createStore({
  state: {
    articles: [],
  },
  mutations: {
    ADD_ARTICLE(state, description) {
      let NewPage = { 'description': description}
      state.articles.push(NewPage);
    },
  },
  actions: {
    addArticle(context, description) {
      context.commit('ADD_Article', description)
    },
  },
  modules: {
  }
})
