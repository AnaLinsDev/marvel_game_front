<template>
  <v-footer :absolute="!fixed" app>
    <v-spacer></v-spacer>
    <span>
      <v-icon dense class="mr-4">mdi-star</v-icon> Ana Júlia Lins
      {{ new Date().getFullYear() }}</span
    >
    <v-spacer></v-spacer>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      fixed: false,
    };
  },
};
</script>
