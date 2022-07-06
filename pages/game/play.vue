<template>
  <v-card
    elevation="10px"
    rounded
    max-width="100vw"
    width="100%"
    class="pa-6 memory-container"
    light
  >
    <ModalLoseOrWon :dialog="dialog" :isWinner="isWinner" />
    <h1 class="text-center">Memory Game</h1>
    <h2 class="text-center my-10">
      Remaining attempts: {{ this.attempts }} / {{ this.maxAttempts }}
    </h2>
    <span class="d-flex flex-wrap">
      <v-card
        v-for="(card, key) of cardsToPlay"
        :key="key"
        elevation="10"
        width="200px"
        height="200px"
        class="ma-4 memory-card"
        :color="isMatched(card) ? 'pink' : 'black'"
        @click="select(card)"
      >
        <v-icon
          class="pa-16 memory-icon"
          size="70"
          :color="isSelected(card) ? 'pink' : 'black'"
          >{{ card.icon }}</v-icon
        >
      </v-card>
    </span>
  </v-card>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ModalLoseOrWon from "@/components/game/ModalLoseOrWon.vue";
export default {
  name: "PlayPage",
  components: { ModalLoseOrWon },

  data() {
    return {
      dialog: false,
      selected: {},
      selected_match: {},
      matches: [],
      attempts: 0,
      isWinner: false,
    };
  },

  watch: {
    attempts(n) {
      if (n === this.maxAttempts) {
        this.openModalLoseOrWon();
      }
    },
    matches(n) {
      if (this.matches.length === this.cardsToPlay.length) {
        this.isWinner = true;
        this.openModalLoseOrWon();
      }
    },
  },

  computed: {
    ...mapState("game", {
      cards: (state) => state.cards,
      difficulty: (state) => state.game.difficulty,
    }),

    maxAttempts() {
      return this.cardsToPlay.length * 2;
    },

    cardsToPlay() {
      var newCards = [];
      var newCard = {};
      this.cards.forEach((card) => {
        newCard = Object.assign({}, card);
        (newCard.id = card.id + "_match"), newCards.push(card);
        newCards.push(newCard);
      });
      newCards = newCards.sort((a, b) => 0.5 - Math.random());
      return newCards;
    },
  },

  methods: {
    ...mapActions("game", ["addGameToUser"]),
    select(card) {
      if (
        (this.selected.id && this.selected.id === card.id) ||
        this.selected_match.id
      ) {
        return;
      }
      this.selected.id
        ? [(this.selected_match = card), this.match()]
        : (this.selected = card);
    },

    openModalLoseOrWon() {
      this.dialog = true;
      this.addGameToUser({
        maxAttempts: this.maxAttempts,
        attempts: this.attempts,
        isWinner: this.isWinner,
        difficulty: this.difficulty,
      });
    },

    match() {
      this.attempts = this.attempts + 1;
      var id01 = this.selected.id;
      var id02 = this.selected_match.id;
      if (typeof id01 === typeof id02) {
        this.cleanSelected();
        return;
      } else if (typeof id01 === "string") {
        id01 = id01.split("_")[0];
      } else if (typeof id02 === "string") {
        id02 = id02.split("_")[0];
      }

      if (id01 == id02) {
        this.matches.push(this.selected.id);
        this.matches.push(this.selected_match.id);
      }
      this.cleanSelected();
    },

    cleanSelected() {
      setTimeout(() => {
        this.selected = {};
        this.selected_match = {};
      }, 1000);
    },

    isSelected(item) {
      var isSelected = false;
      if (
        (item.id === this.selected.id || item.id === this.selected_match.id) &&
        !this.isMatched(item)
      ) {
        isSelected = true;
      }
      return isSelected;
    },

    isMatched(card) {
      var isAMatch = false;
      this.matches.forEach((id) => {
        if (id === card.id) {
          isAMatch = true;
        }
      });
      return isAMatch;
    },
  },
};
</script>

<style scoped>
.black {
  background-color: black;
}
@media only screen and (max-width: 1000px) {
  .memory-card {
    margin: 5px !important;
    width: 150px !important;
    height: 150px !important;
  }
  .memory-icon {
    padding: 40px !important;
  }
}

@media only screen and (max-width: 500px) {
  .memory-card {
    margin: 5px !important;
    width: 80px !important;
    height: 80px !important;
  }
  .memory-icon {
    padding: 22px !important;
    font-size: 35px !important;
  }
}

@media only screen and (max-width: 300px) {
  .memory-card {
    margin: 5px !important;
    width: 70px !important;
    height: 70px !important;
  }
  .memory-icon {
    padding: 20px !important;
    font-size: 30px !important;
  }
  .memory-container {
    padding: 5px !important;
  }
}
</style>
