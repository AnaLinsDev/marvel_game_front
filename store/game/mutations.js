export default {
    createGame(state, cards) {
      state.cards = cards
      state.game.total = cards.length
    },
  };
  