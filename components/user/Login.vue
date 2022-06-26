<template>
  <v-card elevation="0">
    <v-card-title class="px-0">Login</v-card-title>

    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="[rules.required, rules.name_min_3, rules.name_max_10]"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="password"
        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.pass_min_6]"
        :type="showPass ? 'text' : 'password'"
        label="Password"
        @click:append="showPass = !showPass"
      ></v-text-field>
    </v-form>

    <v-card-actions>
      <v-btn
        class="mx-auto pa-4 ma-4"
        :disabled="!valid"
        color="success"
        @click="login"
      >
        Login
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import MixinRules from "@/mixins/MixinRules.vue";
import { mapActions } from "vuex";
export default {
  mixins: [MixinRules],
  data: () => ({
    valid: true,
    showPass: false,
    name: "ana",
    password: "123123",
  }),
  methods: {
    ...mapActions("user", ["loginUser"]),
    async login() {
      let user = {
        username: this.name,
        password: this.password,
      };
      await this.loginUser(user).then((resp) => console.log(resp));
    },
  },
};
</script>
