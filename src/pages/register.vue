<template>
  <VCol
    cols="12"
    style="background-color: black; height: 100vh"
  >
    <VRow
      class="de-flex justify-center align-center"
    >
      <VCol
        cols="12"
        sm="8"
        md="6"
      >
        <div class="align-center">
          <h1
            class="mb-3"
            style="color: #FFBF36;
            text-align: center; font-family: Bungee,serif;
            font-size: 100px;
            font-style: normal;
            font-weight: 400;
            line-height: 90px;
            letter-spacing: 10px;"
          >
            create your new account
          </h1>
          <VTextField
            style="color: white"
            bg-color="#8C54D0"
            color="white"
            label="Username"
          />
          <VDivider
            color="#FFFFFFFF"
            class="ma-3"
          />
          <VTextField
            style="color: white"
            bg-color="#FFBF36"
            color="white"
            label="Password"
          />
          <VCardActions class="justify-center">
            <VRow>
              <VCol
                cols="12"
                class="justify-center"
              >
                <h3 style="font-size: 40px;">
                  ※ Please include at least one UPPER case and
                </h3>
                <h3 style="font-size: 40px;">
                  one Number in your password
                </h3>
              </VCol>
              <VCol
                cols="12"
                class="d-flex justify-center"
              >
                <VBtn
                  class="ma-10"
                  variant="flat"
                  color="#8C54D0"
                  rounded="lg"
                  style="color: white;"
                >
                  Create
                </VBtn>
              </VCol>
            </VRow>
          </VCardActions>
        </div>
      </VCol>
    </VRow>
  </VCol>
</template>

<script setup lang='ts'>
</script>

<style scoped>
h1{
  text-align: center;
  color: #fbd990;
  font-family: bungee;
  letter-spacing: 0.1em;
}

h2{
  text-align: center;
  color: white;
  font-family: bungee;
  text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
  transform:translate(0,-100px);
}

h3{
  text-align: center;
  color: #ff7676;
  font-family: cabin;
}

.idbox{
  text-align: center;
  transform:translate(0,-100px);
}

.verifybutton{
  border-radius: 20px;
  width: 170px;
  height: 66px;
}
</style>

<route lang="yaml">
meta:
  layout: blank
</route>
