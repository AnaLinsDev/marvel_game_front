<template>
  <v-card max-width="500px" elevation="16px" rounded class="card-config pa-10">
    <h1 class="mb-4">
      <span>Difficulty</span>
      <v-icon :color="iconColor" large>mdi-star</v-icon>
      <v-icon
        v-if="selected === 'Normal' || selected === 'Hard'"
        :color="iconColor"
        large
        >mdi-star</v-icon
      >
      <v-icon v-if="selected === 'Hard'" :color="iconColor" large
        >mdi-star</v-icon
      >
    </h1>
    <v-select
      id="difficulty"
      v-model="selected"
      :items="items"
      outlined
    ></v-select>
    <v-row>
      <v-spacer></v-spacer>
      <v-btn color="success" @click="getGameByDifficulty">Let's Play</v-btn>
      <v-spacer></v-spacer>
    </v-row>
  </v-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ConfigPage",
  data() {
    return {
      selected: "Easy",
      items: ["Easy", "Normal", "Hard"],
    };
  },
  methods: {
    ...mapActions("game", ["getGame"]),
    
    getGameByDifficulty() {
      this.getGame(this.countCards).then(() => this.$router.push({ path: '/game/play'}))
    }
  },
  computed: {
    iconColor() {
      switch (this.selected) {
        case "Easy":
          return "green";
        case "Normal":
          return "blue";
        case "Hard":
          return "red";
      }
    },
    countCards() {
      switch (this.selected) {
        case "Easy":
          return 4;
        case "Normal":
          return 8;
        case "Hard":
          return 10;
      }
    },
  },
};
</script>

<style scoped>
.card-config {
  margin: 10vh auto;
}
</style>
