<script setup>
import { ref } from 'vue'
const test_show = ref(true)
import logo from '@/assets/logo/logoicon.png'
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
            class="mb-3"
            style="color: #FFBF36; text-decoration: underline; text-decoration-color: white;
            text-align: center; font-family: Bungee,serif;
            font-size: 100px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            letter-spacing: 24px;"
          >
            WELCOME!
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
            <VBtn
              class="ma-10"
              variant="flat"
              color="#8C54D0"
              rounded="lg"
              style="color: white;"
            >
              Next
            </VBtn>
          </VCardActions>
          <VCardActions class="d-flex align-center justify-center">
            <VBtn
              variant="text"
              color="#8C54D0"
              style="color: white; text-decoration: underline; text-decoration-color: white; text-decoration-thickness: 3px"
            >
              Sign-up
              <template #append>
                <img
                  style="height: 23px"
                  :src="logo"
                  alt="logo"
                >
              </template>
            </VBtn>
            <VBtn
              variant="text"
              color="#8C54D0"
              style="color: white; text-decoration: underline; text-decoration-color: #FFBF36; text-decoration-thickness: 3px"
              to="/account_recovery"
            >
              Forgot your account?
            </VBtn>
          </VCardActions>
        </div>
      </VCol>
    </VRow>
  </VCol>
</template>

<route lang="yaml">
meta:
  layout: _blank
</route>
