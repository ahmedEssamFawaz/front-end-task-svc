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
                <img
                  alt="coverImg"
                  :src="require('@/assets/home-imgs/Saly-25.svg')"
                  :class="isMobile ? '' : 'cover-img'"
                  class="animator"
                />
              </v-card>
            </v-col>
            <v-col cols="12" md="6">
              <v-row justify="center">
                <v-col
                  cols="12"
                  md="10"
                  class="px-0"
                  :class="isMobile ? 'pt-5' : 'pt-10'"
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
                      we designed perfect app <span>for you</span>
                    </h3>
                    <v-card-title
                      class="pa-0 pt-5"
                      :class="
                        isMobile ? 'cover-desc-mob text-center' : 'cover-desc'
                      "
                    >
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Pariatur in est maxime debitis perspiciatis, quis tempora
                      consectetur doloribus dolorem assumenda fugiat eveniet
                      iure! Sunt, incidunt quidem accusamus excepturi rem
                      tempore.
                    </v-card-title>
                    <v-list-item class="px-0">
                      <v-list-item-icon class="mr-2">
                        <v-img
                          max-width="15px"
                          height="15px"
                          width="100%"
                          alt="coverImg"
                          :src="require('@/assets/home-imgs/dot-list.png')"
                          class="align-self-center"
                        ></v-img>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title class="feature-list"
                          >Lorem Ipsum is simply dummy text
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item class="px-0">
                      <v-list-item-icon class="mr-2">
                        <v-img
                          max-width="15px"
                          height="15px"
                          width="100%"
                          alt="coverImg"
                          :src="require('@/assets/home-imgs/dot-list.png')"
                          class="align-self-center"
                        ></v-img>
                      </v-list-item-icon>
                      <v-list-item-content>
                        <v-list-item-title class="feature-list"
                          >Lorem Ipsum is simply dummy text
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>

                    <div class="pt-4">
                      <v-btn
                        class="get-started-btn"
                        elevation="0"
                        x-large
                        rounded
                      >
                        learn more
                      </v-btn>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
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
.feature-list {
  font-size: 1.1em;
}
.cover-desc {
  font-size: 1.1em;
  word-break: keep-all;
  color: #666666;
}
.svg-img {
  margin: 20px auto 0 auto;
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
.animator {
  -webkit-animation: MoveUpDown 3s linear infinite;
  animation: MoveUpDown 3s linear infinite;
  position: relative;
  max-width: 100%;
}
.animator:hover {
  /* Start the shake animation and make the animation last for 0.5 seconds */
  animation: shake 0.5s;

  /* When the animation is finished, start again */
  animation-iteration-count: infinite;
}
@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
@keyframes MoveUpDown {
  0%,
  100% {
    top: 0;
  }
  50% {
    top: 100px;
  }
}
</style>
