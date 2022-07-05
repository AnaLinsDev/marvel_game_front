<template>
  <v-card elevation="10px" rounded class="card-user-login pa-6">
    <ModalLoseOrWon :dialog="dialog" :isWinner="isWinner" />
    <h1 class="text-center">Memory Game</h1>
    <h2 class="text-center mt-10">Remaining  attempts: {{this.attempts}} / {{ this.totalAttempts }} </h2>
    {{ matches }}
    <span class="d-flex flex-wrap">
      <v-card
        v-for="(card, key) of cardsToPlay"
        :key="key"
        elevation="10"
        width="200px"
        height="200px"
        class="ma-10"
        color="black"
        @click="select(card)"
      >
        <v-icon class="pa-16" size="70" :color="isSelected(card)">{{
          card.icon
        }}</v-icon>
      </v-card>
    </span>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import ModalLoseOrWon from '@/components/game/ModalLoseOrWon.vue'
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
      isWinner: false
    };
  },

  watch: {
    attempts(n) {
      if (n === this.totalAttempts) {
        this.openModalLoseOrWon()
      }
    },
    matches(n) {
      if (this.matches.length === this.cardsToPlay.length) {
        this.isWinner = true
        this.openModalLoseOrWon()
      }
    }
  },

  computed: {
    ...mapState("game", {
      cards: (state) => state.cards,
    }),

    totalAttempts() {
      return this.cardsToPlay.length
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
    select(card) {
      this.selected.id
        ? [(this.selected_match = card), this.match()]
        : (this.selected = card);
    },

    openModalLoseOrWon() {
      this.dialog = true
    },

    match() {
      this.attempts = this.attempts + 1
      var id01 = this.selected.id;
      var id02 = this.selected_match.id;
      if (typeof id01 === "string") {
        id01 = id01.split("_")[0];
      } else if (typeof id02 === "string") {
        id02 = id02.split("_")[0];
      } else {
        this.cleanSelected()
        return;
      }
      if (id01 == id02) {
        this.matches.push(this.selected.id);
        this.matches.push(this.selected_match.id);
      }
      this.cleanSelected()
    },

    cleanSelected() {
      setTimeout(() => {
        this.selected = {};
        this.selected_match = {};
      }, 1000);
    },

    isSelected(item) {
      if (this.isMatched(item)) {
        return "blue";
      } else if (
        item.id === this.selected.id ||
        item.id === this.selected_match.id
      ) {
        return "pink";
      } else {
        return "black";
      }
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
</style>
