<template>
  <v-col cols="12" class="bg-cover ma-0">
    <v-container
      fluid
      :class="isMobile ? 'container-padding-mob' : 'container-padding'"
    >
      <v-row justify="center">
        <v-col cols="9" class="">
          <v-row justify="center" align="center">
            <v-col md="6" cols="12" class="d-flex align-center pa-0">
              <v-card elevation="0" color="transparent">
                <h1
                  class="white--text"
                  :class="
                    isTablet || isMobile ? 'title-cover-mob' : 'title-cover'
                  "
                >
                  download our app and enjoy
                </h1>
                <v-card-title
                  class="px-0 white--text"
                  :class="
                    isTablet || isMobile ? 'cover-desc-mob' : 'cover-desc'
                  "
                >
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley
                </v-card-title>
                <div :class="isMobile ? 'mt-6 mb-6' : 'mt-5'">
                  <v-btn
                    class="download-app-btn"
                    elevation="0"
                    x-large
                    outlined
                    rounded
                  >
                    download app
                  </v-btn>
                  <v-btn
                    class="watch-video-btn"
                    elevation="0"
                    x-large
                    outlined
                    :class="isLaptop ? 'pa-0' : ''"
                  >
                    <v-icon>mdi-play</v-icon>
                    Watch Video
                  </v-btn>
                </div>
              </v-card>
            </v-col>
            <v-col md="6" cols="12">
              <v-card
                elevation="0"
                color="transparent"
                class="hidden-sm-and-down"
              >
                <v-img
                  alt="coverImg"
                  :src="require('@/assets/home-imgs/Mask Group 2.png')"
                  class="animator"
                ></v-img>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-col>
</template>

<script>
export default {
  name: "CoverSection",
};
</script>

<style scoped>
.container-padding {
  padding-top: 9em;
}
.container-padding-mob {
  padding-top: 5em;
}
.title-cover {
  text-transform: capitalize;
  font-size: 5em;
  font-weight: 700;
}
.title-cover-mob {
  text-transform: capitalize;
  font-size: 3.5em;
}
.cover-img {
  position: relative;
  left: 5em;
  transform: rotate(-3deg);
}
.cover-img-mob {
  display: none;
}
.display-custom {
  font-size: 4.75rem !important;
  font-weight: 300;
  line-height: 6rem;
  letter-spacing: -0.0083333333em !important;
  font-family: Helvetica, sans-serif !important;
  word-break: keep-all;
}
.custom-break {
  word-break: keep-all;
}
@media screen and (max-device-width: 700px) {
  .bg-cover {
    background-image: url("@/assets/home-imgs/BG.png");
    /* background-image: url('@/assets/img/cover/BG.svg'); */
    /* background-color: var(--v-primary-base); */
    background-position: 100%;
    width: 100%;
    height: 700px;
    background-size: cover;
  }
}
@media screen and (min-device-width: 701px) {
  .bg-cover {
    background-image: url("@/assets/home-imgs/BG.png");
    /* background-image: url("@/assets/cover-section/Group 889.png"); */
    background-position: 100%;
    width: 100%;
    height: 1052px;
    background-size: cover;
  }
}
.pt-128 {
  padding-top: 170px;
}

.order-flex {
  order: -1;
}
.card-col {
  flex-direction: column;
}
.download-app-btn {
  color: var(--v-primary-base) !important;
  background-color: #fff;
  font-weight: 500;
  text-transform: capitalize;
  font-size: 1.2em !important;
}
.watch-video-btn {
  color: #fff !important;
  background-color: transparent;
  font-weight: 500;
  text-transform: capitalize;
  font-size: 1.2em !important;
  margin-left: 17px;
  border: none;
}
.bg-cover a {
  text-decoration: none;
  color: #d1d1d1;
}
.white-space-pre {
  white-space: pre;
}
.cover-desc {
  font-size: 1.4em;
  word-break: keep-all;
  line-height: 1.6;
}
.cover-desc-mob {
  /* line-height: 1.5rem; */
  font-size: 1.4em;
  word-break: keep-all;
}
.animator {
  position: relative;
  animation: linear infinite;
  animation-name: run;
  animation-duration: 3s;
  transition: all 0.3s;
  max-width: 100%;
  max-height: 100%;
}
.animator:hover {
  transform: scale(1.2);
  transition: all 0.3s;
}
@keyframes run {
  0% {
    left: 0;
  }
  50% {
    left: 10%;
  }
  100% {
    left: 0;
  }
}
</style>
