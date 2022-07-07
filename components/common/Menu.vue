<template>
  <v-app-bar :clipped-left="clipped" fixed app>
    <v-spacer />
    <span v-if="loggedIn">
      <v-btn icon to="/game/config">
        <v-icon>mdi-cards </v-icon>
      </v-btn>
      <v-btn icon to="/user/profile">
        <v-icon>mdi-account</v-icon>
      </v-btn>
      <v-btn icon @click="logout">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
    </span>
    <span v-else> </span>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Menu",
  data() {
    return {
      clipped: false,
    };
  },
  computed: {
    ...mapState("user", {
      loggedIn: (state) => state.loggedIn,
    }),
  },
  methods: {
    ...mapActions("user", ["getCurrentUser", "logoutUser"]),
    logout() {
      this.logoutUser();
    },
  },
  watch: {
    loggedIn(n) {
      if (!n) {
        this.$router.push({ path: "/" });
      }
    },
  },
  mounted() {
    this.getCurrentUser();
  },
};
</script>
