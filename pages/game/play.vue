<template>
  <v-card
    elevation="10px"
    rounded
    class="card-user-login pa-6"
  >
    <h1 class="text-center">Memory Game</h1>
    <v-card v-for="(card, key) of cards" :key="key" elevation="10" width="200px" height="200px" class="ma-10">
      <v-icon class="pa-16" x-large color="pink">{{ card.icon }}</v-icon>
    </v-card>
  </v-card>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "PlayPage",

  computed: {
    ...mapState("game", {
      cards: (state) => state.cards,
    }),
  },
};
</script>
