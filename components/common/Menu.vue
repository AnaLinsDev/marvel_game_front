<template>
  <v-app-bar :clipped-left="clipped" fixed app>
    <span v-if="showMobileVersion && loggedIn">
      <div class="text-center">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon @click="showMobileMenu()" v-bind="attrs" v-on="on"
              ><v-icon>mdi-menu</v-icon></v-btn
            >
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in items" :key="index">
              <v-list-item-title>
                <v-btn elevation="0" color="transparent" :to="item.path">
                  <v-icon class="mr-2">{{ item.icon }}</v-icon>
                  {{ item.title }}
                </v-btn>
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </span>
    <span v-else>
      <img src="../../static/favicon.png" alt="Logo" width="40px" />
    </span>
    <v-spacer />

    <span v-if="loggedIn" class="d-flex">
      <span v-if="!showMobileVersion">
        <v-btn to="/game/rank" elevation="0" class="mt-2">
          <span class="d-flex">
            <v-icon>mdi-chevron-triple-up</v-icon>
            <p class="ma-0 mt-1">Ranking</p>
          </span>
        </v-btn>
        <v-btn to="/game/config" elevation="0" class="mt-2">
          <span class="d-flex">
            <v-icon>mdi-cards</v-icon>
            <p class="ma-0 mt-1">Play</p>
          </span>
        </v-btn>
        <v-btn to="/user/profile" elevation="0" class="mt-2">
          <span class="d-flex">
            <v-icon>mdi-account</v-icon>
            <p class="ma-0 mt-1">Profile</p>
          </span>
        </v-btn>
      </span>
      <span>
        <v-btn icon @click="logout" class="d-flex d-sm-flex">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </span>
    </span>
    <span v-else> </span>
  </v-app-bar>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  name: "Menu",
  data() {
    return {
      clipped: false,
      mobileVersion: false,
      items: [
        {
          id: 0,
          icon: "mdi-chevron-triple-up",
          title: "Ranking",
          path: "/game/rank",
        },
        {
          id: 1,
          icon: "mdi-cards",
          title: "Play",
          path: "/game/config",
        },
        {
          id: 2,
          icon: "mdi-account",
          title: "Profile",
          path: "/user/profile",
        },
      ],
    };
  },
  computed: {
    ...mapState("user", {
      loggedIn: (state) => state.loggedIn,
    }),
    showMobileVersion() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return true;
        case "sm":
          return true;
        default:
          return false;
      }
    },
  },
  methods: {
    ...mapActions("user", ["getCurrentUser", "logoutUser"]),
    logout() {
      this.logoutUser();
    },

    showMobileMenu() {
      this.mobileVersion = true;
    },
  },
  watch: {
    loggedIn(n) {
      if (!n) {
        this.$router.push({ path: "/" });
      }
    },
  },
  mounted() {
    this.getCurrentUser();
  },
};
</script>
