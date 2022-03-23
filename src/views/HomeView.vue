<template>
  <v-app>
    <v-app-bar
      color="transparent"
      app
      prominent
      absolute
      elevation="0"
      class="nav-color"
    >
      <v-col
        md="9"
        cols="12"
        class="d-flex justify-space-between align-center px-0 mx-auto"
      >
        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Name"
            class="shrink mt-1"
            contain
            min-width="100"
            :src="require('@/assets/home-imgs/LOGO.svg')"
            width="100"
          />
        </div>

        <v-spacer></v-spacer>

        <div class="d-flex align-center">
          <v-img
            alt="Vuetify Name"
            class="shrink mt-1"
            contain
            min-width="35"
            :src="require('@/assets/home-imgs/Icon open-menu.svg')"
            width="35"
          />
        </div>
      </v-col>
    </v-app-bar>
    <v-main class="pa-0">
      <v-container fluid class="pa-0 ma-0">
        <v-row justify="center" align="center" class="ma-0 pa-0">
          <v-col cols="12" sm="12" md="12" class="ma-0 pa-0">
            <CoverSection />
            <PerfectApp />
            <app-features />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <the-footer />
  </v-app>
</template>

<script>
import AppFeatures from "@/components/AppFeatures.vue";
import CoverSection from "../components/CoverSection.vue";
import PerfectApp from "../components/PerfectApp.vue";
import TheFooter from "@/components/TheFooter.vue";
export default {
  name: "Home-xd",

  components: {
    CoverSection,
    PerfectApp,
    AppFeatures,
    TheFooter,
  },
};
</script>
