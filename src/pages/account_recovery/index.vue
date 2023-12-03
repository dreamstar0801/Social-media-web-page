<script setup>
import { ref } from 'vue'

// This ref will keep track of the active button
const activeButton = ref(false)

const init = ref(false)
const buttonVariant = computed(() => {
  return activeButton.value || !init.value ? 'outlined' : `flat`
})

const click = () =>{
  activeButton.value = !activeButton.value
  init.value = true
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
            to="/account_recovery/recover_username"
            block=""
            bg-color="#8C54D0"
            color="#8C54D0"
            :variant="activeButton ? 'flat' : 'outlined'"
            @click="click"
          >
            Username
          </VBtn>
          <VDivider
            color="#FFFFFFFF"
            class="ma-3"
          />
          <VBtn
            to="/account_recovery/recover_password"
            block=""
            bg-color="#FFBF36"
            color="#FFBF36"
            :variant="buttonVariant"
            @click="click"
          >
            Password
          </VBtn>
        </div>
      </VCol>
    </VRow>
  </VCol>
</template>

<route lang="yaml">
meta:
  layout: blank
</route>
