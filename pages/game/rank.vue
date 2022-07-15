<template>
  <v-card max-width="1000px" height="calc(100vh - 200px)" class="ma-10 pa-8" light id="ranking-card">
    <h1 class="text-center mb-5">Ranking</h1>
    <v-simple-table fixed-header height="calc(100vh - 300px)">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center">Userame</th>
            <th class="text-center">Victories</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in users" :key="item.id">
            <td class="text-center">{{ item.username }}</td>
            <td class="text-center">{{ item.victories }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-card>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
export default {
  name: "RankPage",
  data() {
    return {
      users: [],
      loading: false,
    };
  },
  async mounted() {
    await this.povoateUsers();
  },
  computed: {
    ...mapState("alert", ["types"]),
  },
  methods: {
    ...mapActions("user", ["getRank"]),
    ...mapMutations("alert", ["openAlert"]),

    povoateUsers() {
      this.getRank()
        .then((resp) => (this.users = resp))
        .catch((err) =>
          this.openAlert({
            message: err.response.data.message,
            type: this.types.ERROR,
            code: err.response.status,
          })
        );
    },
  },
};
</script>

<style>
@media only screen and (max-width: 400px) {
  #ranking-card {
    margin: 40px 0px !important;
  }
}
</style>
