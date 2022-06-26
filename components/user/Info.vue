<template>
  <v-card elevation="0" class="pa-6">
    <h2 class="title_profile" v-if="!isEdit">Profile</h2>
    <h2 class="title_profile" v-else>Edit User</h2>
    <v-form ref="form" v-model="valid" v-if="!isEdit">
      <v-text-field
        v-model="user.username"
        label="Name"
        readonly
      ></v-text-field>

      <v-text-field v-model="user.email" label="E-mail" readonly></v-text-field>
    </v-form>

    <v-form ref="form" v-model="valid" v-else>
      <v-text-field
        v-model="userEdit.username"
        :counter="10"
        :rules="[rules.required, rules.name_min_3, rules.name_max_10]"
        label="Name"
        required
      ></v-text-field>

      <v-text-field
        v-model="userEdit.email"
        :rules="[rules.required, rules.email_valid]"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
        v-model="userEdit.password"
        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required, rules.pass_min_6]"
        :type="showPass ? 'text' : 'password'"
        label="Password"
        @click:append="showPass = !showPass"
      ></v-text-field>
    </v-form>

    <span v-if="!isEdit" class="d-flex justify-space-between ma-6">
      <v-btn color="info" @click="setTypeProfile">Edit</v-btn>
      <v-btn color="error" @click="confirmDelete">Delete</v-btn>
      <v-btn color="success">History</v-btn>
    </span>
    <span v-else class="d-flex justify-space-between ma-6">
      <v-btn color="error" @click="setTypeProfile"> Cancel </v-btn>
      <v-btn color="success" :disabled="!valid" @click="confirmEdit">
        Confirm Edit
      </v-btn>
    </span>
  </v-card>
</template>

<script>
import MixinRules from "@/mixins/MixinRules.vue";
import { mapActions } from "vuex";
export default {
  name: "Info",
  mixins: [MixinRules],
  data: () => ({
    valid: true,
    isEdit: false,
    showPass: false,
    user: {
      username: "",
      email: "",
      id: -1,
    },
    userEdit: {
      username: "",
      password: "",
      email: "",
      id: -1,
    },
  }),
  methods: {
    ...mapActions("user", [
      "getCurrentUser",
      "updateUser",
      "deleteUser",
      "getUserById",
    ]),

    setTypeProfile() {
      this.isEdit = !this.isEdit;
      this.userEdit.username = this.user.username;
      this.userEdit.password = this.user.password;
      this.userEdit.email = this.user.email;
      this.userEdit.id = this.user.id;
    },

    async confirmEdit() {
      await this.updateUser(this.userEdit).then(() => this.updateCurrentUser());
      this.isEdit = false;
    },

    confirmDelete() {
      this.deleteUser(this.user.id);
    },

    updateCurrentUser() {
      this.getCurrentUser().then((resp) => {
        console.log(resp);
        this.user.id = resp.id || resp[0].id;
        this.user.password = resp.password || resp[0].password;
        this.user.username = resp.username || resp[0].username;
        this.user.email = resp.email || resp[0].email;
      });
    },
  },
  async mounted() {
    await this.updateCurrentUser();
  },
};
</script>

<style>
.title_profile {
  text-align: center;
}
</style>
