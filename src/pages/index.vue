<script>
import { ref } from 'vue'
const test_show = ref(true)
</script>

<template>
  <VCol
    cols="12"
    style="background-color: black"
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
          />
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
            bg-color="#8C54D0"
            color="#8C54D0"
            label="Username"
          />
          <VDivider
            color="#FFFFFFFF"
            class="ma-3"
          />
          <VTextField
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

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
