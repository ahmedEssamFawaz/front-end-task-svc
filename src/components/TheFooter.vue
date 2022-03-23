<template>
  <v-footer padless>
    <v-card class="flex" flat tile>
      <v-card-title class="bg-color">
        <div class="d-flex align-center justify-center logo-wrapper">
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
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<style scoped>
.bg-color {
  background-color: #000;
}
.logo-wrapper {
  width: 100%;
}
</style>
