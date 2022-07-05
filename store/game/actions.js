export default {
    async getGame({ commit }, count) {
      let gameCards = []
      await this.$axios.$get("/cards/").then((resp) => gameCards = resp);
      gameCards = gameCards.slice(0, count)
      commit("createGame", gameCards);
    },  
};