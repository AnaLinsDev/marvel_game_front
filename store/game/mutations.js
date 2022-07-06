export default {
    createGame(state, cards) {
      state.cards = cards.gameCards
      state.game.total = cards.gameCards.length
      state.game.difficulty = cards.difficulty
    },
  };
  