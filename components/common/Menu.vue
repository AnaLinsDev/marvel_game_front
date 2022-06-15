<template>
  <v-app-bar :clipped-left="clipped" fixed app>
    <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
    <v-spacer />
    <v-btn icon>
      <v-icon>mdi-cards </v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-clipboard-text-clock </v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "DefaultLayout",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
