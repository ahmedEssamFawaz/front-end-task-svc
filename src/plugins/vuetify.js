import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    options: { customProperties: true },
    themes: {
      light: {
        primary: "#FF4363",
        // listActive: "#f1f1f1",
        // gradient1: "#793ece",
        // gradient2: "#8e24aa", //colors.red.darken1, // #E53935
        // colorBase: "#fff"
      },
      dark: {
        primary: "#FF4363",
        // listActive: "#f1f1f1",
        // gradient1: "#793ece",
        // gradient2: "#8e24aa", //colors.red.darken1, // #E53935
        // colorBase: "#fff"
      },
    },
  },
});
