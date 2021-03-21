import { createStore } from 'vuex'

export default createStore({
  state: {
    articles: [],
  },
  mutations: {
    ADD_ARTICLE(state, article) {
      let NewPage = article
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
