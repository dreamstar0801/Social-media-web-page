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
        <br><br>
        <div class="align-center">
          <h1
            class="mb-3"
            style="color: #ffe9bb;
              text-align: center; font-family: Anton;
              font-size: 80px;
              font-style: normal;
              font-weight: 400;
              line-height: 90px;
              letter-spacing: 10px;"
          >
            Reset your password
          </h1>
          <br>
          <br>
          <VTextField
            style="color: white"
            bg-color="#8C54D0"
            color="white"
            label="New password"
          />
          <VDivider
            color="#FFFFFFFF"
            class="ma-3"
          />
          <VTextField
            style="color: white"
            bg-color="#FFBF36"
            color="white"
            label="Confirm Password"
          />
          <VCardActions class="justify-center">
            <VRow>
              <VCol
                cols="12"
                class="justify-center"
              >
                <br>
                <h3 style="font-size: 25px;">
                  ※ Password has to be minimum 12 characters include 
                  <br> 
                  at least one UPPER case, Number, Symbol
                </h3>
                <br>
                <VCardActions class="justify-center">
                  <VBtn
                    class="ma-10"
                    variant="flat"
                    color="#8C54D0"
                    rounded="lg"
                    style="color: white;"
                    to="/login"
                  >
                    Reset
                  </VBtn>
                </VCardActions>
              </VCol>
              <VCol
                cols="12"
                class="justify-center"
              />
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
  h3{
    text-align: center;
    color: #ff7676;
    font-family: cabin;
  }
  </style>
  
  <route lang="yaml">
  meta:
    layout: blank
  </route>
  