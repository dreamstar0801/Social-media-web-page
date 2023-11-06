<script>
import { ref } from 'vue'
const test_show = ref(true)
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
            color="#8C54D0"
            label="Username"
          />
          <VDivider
            color="#FFFFFFFF"
            class="ma-3"
          />
          <VTextField
            style="color: white"
            bg-color="#FFBF36"
            color="#FFBF36"
            label="Password"
          />
          <VCardActions class="justify-center">
            <VBtn
              default
              color="#8C54D0"
              rounded="lg"
              @click="test = !test"
            >
              Next
            </VBtn>
          </VCardActions>
          <VCardActions class="justify-center">
            <a
              href="#"
              style="color: white; text-decoration: underline; text-decoration-color: #FFBF36"
            >Forgot your account?</a>
          </VCardActions>
        </div>
      </VCol>
    </VRow>
  </VCol>
</template>

