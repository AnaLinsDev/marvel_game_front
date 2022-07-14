export default {
  async getGame({ commit }, difficulty) {
    await this.$axios.$post(`/povoate_cards`)
    let gameCards = [];
    let difficultyLowerCased = difficulty.toLowerCase()
    await this.$axios.$get(`/game/${difficultyLowerCased}`).then((resp) => (gameCards = resp));
    commit("createGame", { gameCards, difficulty });
  },

  async addGameToUser({ commit }, game) {
    var fullDate = currentDate()
    var auth = localStorage.getItem("auth");
    auth = JSON.parse(auth);
    game.date = fullDate.date
    game.time = fullDate.time
    return await this.$axios.$post(`/games/${auth.id}`, game);
  },

  async getGamesByUser({ commit }) {
    var auth = localStorage.getItem("auth");
    auth = JSON.parse(auth);
    return await this.$axios.$get(`/games/${auth.id}`)
  },
};

function currentDate() {
  var fullDate = new Date()
  var date = fullDate.toLocaleDateString()
  var time = fullDate.toLocaleTimeString()
  return { date, time};
}
