<template>
  <v-card
    elevation="0"
    class="pa-6 overflow-y-auto"
    max-height="calc(100vh - 200px)"
  >
    <v-row>
      <v-spacer></v-spacer>
      <h1 class="text-center">History</h1>
      <v-spacer></v-spacer>
      <v-btn icon @click="closeHistory"><v-icon large>mdi-close</v-icon></v-btn>
    </v-row>
    <v-card
      v-for="(game, key) in userGames"
      class="pa-8 my-6 mx-10"
      :key="key"
      :color="game.isWinner ? 'green' : 'red'"
    >
      <v-row>
        <h2 v-if="game.isWinner">Won</h2>
        <h2 v-else>Lost</h2>
        <v-spacer></v-spacer>
        <h2>{{ game.difficulty }}</h2>
        <v-spacer></v-spacer>
        <h2>
          <v-btn icon @click="openDialog(game)"
            ><v-icon large>mdi-dots-horizontal</v-icon></v-btn
          >
        </h2>
      </v-row>
    </v-card>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card
        max-width="500px"
        class="pa-8 pt-6"
        :color="gameDialog.isWinner ? 'green' : 'red'"
        light
      >
        <v-row>
          <v-spacer></v-spacer>
          <h1 class="text-center">Details</h1>
          <v-spacer></v-spacer>
          <v-btn icon @click="closeDialog"
            ><v-icon large>mdi-close</v-icon></v-btn
          >
        </v-row>
        <v-divider class="my-4"></v-divider>
        <h2>
          Attempts: {{ gameDialog.attempts }} / {{ gameDialog.maxAttempts }}
        </h2>
        <h2>Date: {{ gameDialog.date }}</h2>
        <h2>Time: {{ gameDialog.time }}</h2>
        <h2>Difficulty: {{ gameDialog.difficulty }}</h2>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
export default {
  name: "History",
  data() {
    return {
      dialog: false,
      gameDialog: {},
    };
  },
  props: {
    userGames: {
      type: Array,
      default: [],
    },
  },
  methods: {
    closeHistory() {
      this.$emit("close");
    },
    openDialog(game) {
      this.dialog = true;
      this.gameDialog = game;
    },
    closeDialog() {
      this.dialog = false;
    },
  },
};
</script>

<style></style>
