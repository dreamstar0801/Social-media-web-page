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
            text-align: center; font-family: Bungee,serif;
            font-size: 90px;
            font-style: normal;
            font-weight: 400;
            line-height: 100px;
            letter-spacing: 18px;"
          >
            WHAT DID YOU<br>
            FORGET?
          </h1>

          <VBtn
            block=""
            bg-color="#8C54D0"
            color="#8C54D0"
            :variant="activeButton ? 'flat' : 'outlined'"
            @click="activeButton = !activeButton"
          >
            Username
          </VBtn>
          <VDivider
            color="#FFFFFFFF"
            class="ma-3"
          />
          <VBtn
            block=""
            bg-color="#FFBF36"
            color="#FFBF36"
            :variant="activeButton ? 'outlined' : 'flat'"
            @click="activeButton = !activeButton"
          >
            Password
          </VBtn>
          <VCardActions class="justify-center mt-7">
            <VBtn
              default
              color="#8C54D0"
              rounded="lg"
              @click="test = !test"
              onclick="location.href='/account_recovery/recover_email'"
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
