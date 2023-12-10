<script setup>
import { ref } from 'vue'

// This ref will keep track of the active button
const activeButton = ref(false)

const setActiveButton = buttonName => {
  activeButton.value = activeButton.value === buttonName ? '' : buttonName
}

const isButtonActive = buttonName => {
  return activeButton.value === buttonName
}
</script>

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
            class="mb-7"
            style="color: #FFBF36;
            text-align: center; font-family: Anton;
            font-size: 90px;
            font-style: normal;
            font-weight: 400;
            line-height: 100px;
            letter-spacing: 18px;"
          >
            Enter your email<br>
            address
          </h1>
          <h1
            class="my-4"
            style="color: #ffffff;
            text-align: center;
            font-weight: 400;"
          >
            Please enter your email when you used to sign up.
          </h1>
          <VTextField
            bg-color="#8C54D0"
            color="white"
            label="Email Address"
            style="color: white; font-weight: 700;"
          />
          
          <h1
            class="my-4"
            style="color: #ffffff;
            text-align: center;
            font-size: 20px;
            font-weight: 400;"
          >
            We will send you a link to reset your password through your email.
          </h1>

        

          <VCardActions class="justify-center mt-7">
            <VBtn
              variant="flat"
              color="#FFBF36"
              rounded="lg"
              style="color: white"
              onclick="location.href='/account_recovery/pw_sent'"
            >
              Next
            </VBtn>
          </VCardActions>
        </div>
      </VCol>
    </VRow>
  </VCol>
</template>

<route lang="yaml">
meta:
  layout: blank
</route>
