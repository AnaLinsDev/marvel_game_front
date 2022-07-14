<template>
    <v-alert
      v-if="alert.open"
      :type="alert.type"
      max-width="500px"
      width="500px"
      prominent
      dismissible
      class="alert"
      @click.close="closeAlert"
    >
      {{ alert.message }}
    </v-alert>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Alert",
  methods: {
    ...mapMutations("alert", ["closeAlert"]),
  },
  computed: {
    ...mapState("alert", ["alert"]),
  },
  watch: {
    'alert.open'(n) {
      if (n) {
        setTimeout(() => this.closeAlert(), 4000);
      }
    }
  }
};
</script>

<style scoped>
.alert {
  position: fixed;
  text-align: center;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
}
</style>
