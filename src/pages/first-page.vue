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
        href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
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
              :src="door"
              contain
            />
          </div>
          <VRow class="d-flex justify-center">
            <VCol
              class="pt-14"
              cols="12"
            >
              <br><br><br><br>
              <div class="signup">
                <VBtn
                  to="/register"
                  width="10vw"
                  height="3vw"
                  color="#FFBF36"
                  text-color="#fff"
                  rounded="XL"
                  class="sign-in"
                  style="
                  letter-spacing: 4px;
                  font-family: Anton;
                  line-height: 0;
                  font-size: 1.5vw;
                  color: #fff;
                  text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
                "
                >
                  SIGN-UP
                </VBtn>
              </div>
            </VCol>
            <VCol cols="12">
              <div class="signup">
                <VBtn
                  to="/login"
                  width="10vw"
                  height="3vw"
                  color="#8C54D0"
                  text-color="#fff"
                  rounded="XL"
                  class="sign-in"
                  style="
                  letter-spacing: 4px;
                  font-family: Anton;
                  line-height: 0;
                  font-size: 1.5vw;
                  color: #fff;
                  text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
                "
                >
                  LOG-IN
                </VBtn>
              </div>
              <br><br>
              <div class="signup">
                <VBtn
                  variant="text"
                  color="#8C54D0"
                  style="
                    letter-spacing: 4px;
                    font-family: Anton;
                    color: white;
                    font-size: 25px;"
                  to="/account_recovery"
                >
                  Forgot your account?
                </VBtn>
              </div>
            </VCol>
          </VRow>
        </div>
      </div>
    </body>
  </div>
</template>

<script setup>
import door from '@/assets/door.png'
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
  position: relative;
  left: 50px;
}

div.main-title {
  text-align: center;
  height: 20%;
}

.title {
  letter-spacing: 24px;
  height: 6vw;
  text-align: center;
  font-family: Anton;
  font-size: 5vw;
  color: #ffbf36;
  display: inline-block;
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

.pic-box {
  float: right;
  width: 50%;
  text-align: left;
}

.signup{
  position: relative;
  right: 100px;
}
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
