<template>
<span>
  <WarningPassword />
    <v-card
    light
    max-width="500px"
    elevation="10px"
    rounded
    class="card-user-login pa-6"
  >
    <span v-if="isLogin">
      <Login />
      <a @click="toRegister">Don't have an account yet ?? Go to Register</a>
    </span>
    <span v-else>
      <Register />
      <a @click="toLogin">Already have an account ?? Go to Login</a>
    </span>
  </v-card>
</span>
</template>

<script>
import Login from "@/components/user/Login.vue";
import Register from "@/components/user/Register.vue";
import WarningPassword from "@/components/user/WarningPassword.vue";

import { mapState, mapActions } from "vuex";
export default {
  name: "IndexPage",
  components: { Login, Register, WarningPassword },
  data() {
    return {
      current_page: 0,
      page_type: {
        LOGIN: 0,
        REGISTER: 1,
      },
    };
  },
  computed: {
    ...mapState("user", {
      loggedIn: (state) => state.loggedIn,
    }),
    isLogin() {
      return this.current_page === this.page_type.LOGIN;
    },
  },
  watch: {
    loggedIn(n) {
      if (n) {
        this.$router.push({ path: "game/config" });
      }
    },
  },
  mounted() {
    this.getCurrentUser();
  },
  methods: {
    ...mapActions("user", ["getCurrentUser"]),
    toRegister() {
      this.current_page = this.page_type.REGISTER;
    },
    toLogin() {
      this.current_page = this.page_type.LOGIN;
    },
  },
};
</script>

<style>
.card-user-login {
  margin: 2vh auto;
}
a {
  color: gray !important;
}
</style>
