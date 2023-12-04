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
            style="color: #FFBF36;
            text-align: center; font-family: Bungee,serif;
            font-size: 100px;
            font-style: normal;
            font-weight: 400 ;
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

          <br> 
          <VCardActions class="justify-center">
            <VBtn
              onclick="location.href='/'"
              variant="flat"
              color="#8C54D0"
              rounded="lg"
              style="color: white;"
            >
              Next
            </VBtn>
          </VCardActions>
          <VCardActions>
            <VRow>
              <VCol
                cols="12"
                class="d-flex align-center justify-center"
              >
                <VBtn
                  to="/register"
                  variant="text"
                  color="#8C54D0"
                  style="color: #FFBF36;"
                >
                  Sign-up
                </VBtn>
              </VCol>
              <VCol
                cols="12"
                class="d-flex align-center justify-center"
              >
                <VBtn
                  variant="text"
                  color="#8C54D0"
                  style="color: white"
                  to="/account_recovery"
                >
                  Forgot your account?
                </VBtn>
              </VCol>
            </VRow>
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
