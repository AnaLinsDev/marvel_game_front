<template>
  <v-card elevation="0">
    <v-card-title class="px-0">Register</v-card-title>

    <v-form ref="form" v-model="valid">
      <v-text-field
        v-model="name"
        :counter="10"
        :rules="[rules.required, rules.name_min_3, rules.name_max_10]"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="[rules.required, rules.email_valid]"
        label="E-mail"
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

      <v-text-field
        v-model="passwordConfirm"
        :append-icon="showPassConfirm ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.pass_min_6]"
        :type="showPassConfirm ? 'text' : 'password'"
        :error-messages="repeatPassErrorMessage"
        label="Confirm Password"
        @click:append="showPassConfirm = !showPassConfirm"
      ></v-text-field>
    </v-form>

    <v-card-actions>
      <v-btn
        class="mx-auto pa-4 ma-4"
        :disabled="!valid"
        color="success"
        @click="register"
      >
        Register
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import MixinRules from "@/mixins/MixinRules.vue";
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: 'Register',
  mixins: [MixinRules],
  data: () => ({
    valid: true,
    showPass: false,
    showPassConfirm: false,
    name: "ana",
    email: "ana@gmail.com",
    password: "123123",
    passwordConfirm: "123123",
  }),
  methods: {
    ...mapMutations("alert", ["openAlert", "closeAlert"]),
    ...mapActions("user", ["registerUser"]),
    async register() {
      let user = {
        username: this.name,
        email: this.email,
        password: this.password,
      };
      await this.registerUser(user)
        .then(() => this.closeAlert())
        .catch((err) =>
          this.openAlert({ message: err.message, type: this.types.ERROR })
        );
    },
  },
  computed: {
    ...mapState("alert", ["types"]),
    repeatPassErrorMessage() {
      return this.password === this.passwordConfirm
        ? ""
        : "Password must match";
    },
  },
};
</script>
