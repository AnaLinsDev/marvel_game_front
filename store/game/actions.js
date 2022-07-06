export default {
  async getGame({ commit }, difficulty) {
    let gameCards = [];
    let count = countCards(difficulty);
    await this.$axios.$get("/cards/").then((resp) => (gameCards = resp));
    gameCards = gameCards.slice(0, count);
    commit("createGame", { gameCards, difficulty });
  },

  async addGameToUser({ commit }, game) {
    var fullDate = currentDate()
    var auth = localStorage.getItem("auth");
    auth = JSON.parse(auth);
    game.userId = auth.id;
    game.date = fullDate.date
    game.time = fullDate.time
    return await this.$axios.$post("/games", game);
  },

  async getGamesByUser({ commit }) {
    var games = [];
    var idUser = 3;
    await this.$axios.$get("/games/").then((resp) => (games = resp));
    games = games.filter(isUsers);

    if (games.length === 0) {
      throw Error("History is empty, play some game first !");
    }

    return games;
  },
};

function isUsers(value) {
  var auth = localStorage.getItem("auth");
  auth = JSON.parse(auth);
  return value.userId == auth.id;
}

function currentDate() {
  var fullDate = new Date()
  var date = fullDate.toLocaleDateString()
  var time = fullDate.toLocaleTimeString()
  return { date, time};
}

function countCards(difficulty) {
  switch (difficulty) {
    case "Easy":
      return 4;
    case "Normal":
      return 8;
    case "Hard":
      return 10;
  }
}
