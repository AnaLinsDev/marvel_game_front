<template>
  <v-dialog v-model="dialog" max-width="500">
    <v-card class="pa-10">
      <span v-if="!isWinner">
        <h1>You Lost !</h1>
        <h2 class="my-10">Do you want to try again ?</h2>
      </span>
      <span v-else>
        <h1>You Won !</h1>
        <h2 class="my-10">Do you want to play again ?</h2>
      </span>
      <v-row>
        <v-spacer></v-spacer>
        <v-btn outlined class="py-6 px-10" @click="denyDialog"> No </v-btn>
        <v-btn class="py-6 px-10 ml-6" color="success" @click="confirmDialog">
          Yes
        </v-btn>
      </v-row>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "ModalLoseOrWon",
  props: {
    dialog: {
      type: Boolean,
      default: false,
    },
    isWinner: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    denyDialog() {
      this.$router.push({ path: "/user/profile" });
    },

    confirmDialog() {
      this.$router.push({ path: "/game/config" });
    },
  },
};
</script>

<style></style>
