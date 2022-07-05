<template>
  <div class="alert-container">
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
  </div>
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
};
</script>

<style scoped>
.alert {
  position: absolute;
  text-align: center;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 1;
}
.alert-container {
  position: relative;
}
</style>
