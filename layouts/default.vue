<template>
  <v-app>
    <v-main>
      <Menu />
      <v-container>
        <Alert />
        <Nuxt />
      </v-container>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Menu from "@/components/common/Menu.vue";
import Alert from "@/components/common/Alert.vue";
import Footer from "@/components/common/Footer.vue";
export default {
  name: "DefaultLayout",
  components: { Menu, Alert, Footer },
};
</script>
