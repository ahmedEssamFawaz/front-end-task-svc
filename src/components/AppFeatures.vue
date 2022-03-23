<template>
  <v-col cols="12" class="ma-0">
    <v-container
      fluid
      class="px-0"
      :class="isMobile ? 'container-padding-mob' : 'container-padding'"
    >
      <v-row justify="center">
        <v-col cols="9" class="px-0">
          <v-row justify="center" align="center">
            <v-col
              md="6"
              cols="12"
              class="d-flex align-center px-0"
              :class="isMobile ? 'text-center' : ''"
            >
              <v-card elevation="0" color="transparent">
                <v-img
                  max-width="120px"
                  height="120px"
                  width="100%"
                  alt="coverImg"
                  :src="require('@/assets/home-imgs/Icon.svg')"
                  class="align-self-center"
                ></v-img>
                <h3
                  class="black--text"
                  :class="isMobile ? 'title-cover-mob' : 'title-cover'"
                >
                  our app <span>features</span>
                </h3>
                <v-card-title
                  class="pa-0 pt-5"
                  :class="
                    isMobile ? 'cover-desc-mob text-center' : 'cover-desc'
                  "
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Pariatur in est maxime debitis perspiciatis, quis tempora
                </v-card-title>
                <v-list-item class="px-0">
                  <v-list-item-icon class="mr-2">
                    <div class="img-parent">
                      <v-img
                        max-width="70px"
                        height="70px"
                        width="100%"
                        alt="coverImg"
                        :src="require('@/assets/home-imgs/Ellipse 3.svg')"
                        class="align-self-center img-1"
                      ></v-img>

                      <v-img
                        max-width="26px"
                        height="30px"
                        width="100%"
                        alt="coverImg"
                        :src="
                          require('@/assets/home-imgs/Icon awesome-bell.svg')
                        "
                        class="align-self-center img-2"
                      ></v-img>
                    </div>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="feature-list"
                      >Instant Notifications
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-card-title
                  class="pa-0"
                  :class="
                    isMobile ? 'cover-desc-mob text-center' : 'cover-desc'
                  "
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Pariatur in est maxime debitis perspiciatis, quis tempora
                  consectetur doloribus dolorem assumenda fugiat eveniet iure!
                  Sunt, incidunt quidem accusamus excepturi rem tempore.
                </v-card-title>
                <v-list-item class="px-0">
                  <v-list-item-icon class="mr-2">
                    <div class="img-parent">
                      <v-img
                        max-width="70px"
                        height="70px"
                        width="100%"
                        alt="coverImg"
                        :src="require('@/assets/home-imgs/Ellipse 6.svg')"
                        class="align-self-center img-1"
                      ></v-img>

                      <v-img
                        max-width="26px"
                        height="30px"
                        width="100%"
                        alt="coverImg"
                        :src="
                          require('@/assets/home-imgs/Icon awesome-user-alt.svg')
                        "
                        class="align-self-center img-2"
                      ></v-img>
                    </div>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="feature-list"
                      >Instant Notifications
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-card-title
                  class="pa-0"
                  :class="
                    isMobile ? 'cover-desc-mob text-center' : 'cover-desc'
                  "
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Pariatur in est maxime debitis perspiciatis, quis tempora
                  consectetur doloribus dolorem assumenda fugiat eveniet iure!
                  Sunt, incidunt quidem accusamus excepturi rem tempore.
                </v-card-title>
                <v-list-item class="px-0">
                  <v-list-item-icon class="mr-2">
                    <div class="img-parent">
                      <v-img
                        max-width="70px"
                        height="70px"
                        width="100%"
                        alt="coverImg"
                        :src="require('@/assets/home-imgs/Ellipse 7.svg')"
                        class="align-self-center img-1"
                      ></v-img>

                      <v-img
                        max-width="26px"
                        height="30px"
                        width="100%"
                        alt="coverImg"
                        :src="
                          require('@/assets/home-imgs/Icon ionic-md-thumbs-up.svg')
                        "
                        class="align-self-center img-2"
                      ></v-img>
                    </div>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="feature-list"
                      >Instant Notifications
                    </v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-card-title
                  class="pa-0"
                  :class="
                    isMobile ? 'cover-desc-mob text-center' : 'cover-desc'
                  "
                >
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Pariatur in est maxime debitis perspiciatis, quis tempora
                  consectetur doloribus dolorem assumenda fugiat eveniet iure!
                  Sunt, incidunt quidem accusamus excepturi rem tempore.
                </v-card-title>
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-card elevation="0" color="transparent">
                <img
                  alt="coverImg"
                  :src="require('@/assets/home-imgs/Saly-12.svg')"
                  :class="isMobile ? '' : 'cover-img'"
                  class="animator"
                />
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
  name: "WhyWorkWithUs",
};
</script>

<style scoped>
.container-padding {
  padding-top: 9em;
}
.container-padding-mob {
  padding-top: 4em;
}
.title-cover {
  text-transform: capitalize;
  font-size: 60px;
  font-weight: 700;
}
.small-title {
  color: var(--v-primary-base);
  text-transform: capitalize;
  font-size: 20px;
}
.title-cover span,
.title-cover-mob span {
  color: var(--v-primary-base);
}
.get-started-btn {
  color: #fff;
  background-color: var(--v-primary-base) !important;
  font-weight: 500;
  text-transform: capitalize;
  font-size: 1.3em;
}
.cover-desc {
  font-size: 1.1em;
  word-break: keep-all;
  color: #666666;
}
.svg-img {
  margin: 20px auto 0 auto;
}
.feature-list {
  font-size: 1.5em;
  font-weight: 700;
}
.card-title {
  font-weight: 500;
}
.card-desc {
  font-weight: 400;
  font-size: 16px;
}
.moved-card {
  position: relative;
  bottom: 6em;
}

.title-cover:after,
.title-cover-mob::after {
  height: 8px;
  display: block;
  width: 95px;
  background: var(--v-primary-base);
  content: "";
}
.title-cover-mob::after {
  margin: 0 auto;
}
.title-cover-mob {
  text-transform: capitalize;
  font-size: 30px;
}

.cover-desc-mob {
  line-height: 1.5rem;
  font-size: 0.9em;
  word-break: keep-all;
  color: #666666;
}
.img-parent {
  position: relative;
}
.img-1 {
  position: relative;
}
.img-2 {
  position: absolute;
  top: 1.3em;
  left: 1.5em;
}
.animator {
  /* bottom: 15%; */
  position: relative;
  animation: linear infinite;
  animation-name: run;
  animation-duration: 3s;
  transition: all 0.3s;
  max-width: 100%;
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
