<template>
  <div>
    <head>
      <link
        rel="stylesheet"
        href="first-page.css"
      >
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      >
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossorigin
      >
      <link
        href="https://fonts.googleapis.com/css2?family=Bungee&display=swap"
        rel="stylesheet"
      >
    </head>
    <body>
      <div class="main-title">
        <h1 class="title">
          JOIN US <Font color="#8C54D0">
            NOW !
          </Font>
        </h1>
      </div>
      <div class="block">
        <div class="main">
          <div class="door-picture">
            <VImg
              :src="require('../assets/door-picture.png')"
              contain
            />
          </div>
          <div class="main-text">
            <div class="text">
              WE ARE HERE<br>
              FOR YOU
            </div>
            <div class="btn-box">
              <VBtn
                width="15vw"
                height="5vw"
                color="#FFBF36"
                text-color="#fff"
                rounded="XL"
                class="sign-in"
                style="
                  line-height: 0;
                  font-size: 2vw;
                  color: #fff;
                  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000,
                    1px -1px 0 #000, 0px 1px 0 #000, 0-1px 0 #000, -1px 0 0 #000,
                    1px 0 0 #000;
                "
              >
                SIGN-UP
              </VBtn>
            </div>
            <div class="pic-box">
              <VImg
                :src="require('../assets/sign-up.png')"
                contain
                style="height: 8vw; text-align: left"
              />
            </div>
            <div class="btn-box">
              <VBtn
                width="15vw"
                height="5vw"
                color="#8C54D0"
                text-color="#fff"
                rounded="XL"
                class="sign-in"
                style="
                  line-height: 0;
                  font-size: 2vw;
                  color: #fff;
                  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000,
                    1px -1px 0 #000, 0px 1px 0 #000, 0-1px 0 #000, -1px 0 0 #000,
                    1px 0 0 #000;
                "
              >
                LOG-IN
              </VBtn>
            </div>
            <div class="pic-box">
              <VImg
                :src="require('../assets/log-in.png')"
                contain
                style="height: 8vw; text-align: left"
              />
            </div>
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<script>
export default {
  name: "FirstPage",

  data: () => ({
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader/tree/next",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify/tree/next",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Roadmap",
        href: "https://vuetifyjs.com/introduction/roadmap/",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
  }),
}
</script>

<style scoped>
.main {
  text-align: center;
  width: 80vw;
  height: 35vw;
  margin: 0 auto;
}

.block {
  text-align: center;
}

.main-text {
  float: right;
  width: 50%;
  height: auto;
  text-align: center;
}

.door-picture {
  float: left;
  width: 50%;
  height: 90%;
  text-align: right;
  margin-left: auto;
}

div.main-title {
  text-align: center;
  height: 20%;
}

.title {
  letter-spacing: 0.8vw;
  height: 6vw;
  text-align: center;
  font-family: bungee;
  font-size: 5vw;
  color: #ffbf36;
  display: inline-block;
  border-bottom: solid 0.8vw;
  border-color: #ffffff;
  margin: 10vh 0 2vw 0;
  text-shadow: 3px 3px 0 #000, -3px -3px 0 #000, -3px 3px 0 #000,
    3px -3px 0 #000, 0px 3px 0 #000, 0 -3px 0 #000, -3px 0 0 #000, 3px 0 0 #000;
}

body {
  background-color: black;
}

.text {
  height: 35%;
  text-align: center;
  color: #fff;
  font-family: bungee;
  font-size: 3vw;
  text-decoration: underline;
  text-decoration-color: #ffbf36;
  text-underline-offset: 0.1vw;
  text-decoration-thickness: 0.5vw;
  text-shadow: 1px 1px 0 #000, -1px -1px 0 #000, -1px 1px 0 #000,
    1px -1px 0 #000, 0px 1px 0 #000, 0-1px 0 #000, -1px 0 0 #000, 1px 0 0 #000;
  margin: 5% 0 10% 0;
  animation: blinking 0.8s ease-in-out infinite alternate;
}

@keyframes blinking {
  82% {
    opacity: 0.8;
  }
  75% {
    opacity: 1;
  }
}

.sign-in {
  font-family: bungee;
  color: #ffffff;
}

.btn-box {
  margin: 1vw 0 2vw 0;
  float: left;
  width: 50%;
  text-align: right;
}

.pic-box {
  float: right;
  width: 50%;
  text-align: left;
}
</style>

<route lang="yaml">
meta:
  layout: _blank
</route>
