<template>
  <v-card max-width="1000px" class="ma-10" light id="profile-card">
    <Info />
  </v-card>
</template>

<script>
import Info from "@/components/user/Info.vue";
export default {
  name: "Profile",
  components: { Info },
};
</script>

<style>
@media only screen and (max-width: 400px) {
  #profile-card {
    margin: 40px 0px !important;
  }
}
</style>
