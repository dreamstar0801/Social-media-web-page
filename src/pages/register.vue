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
            style="color: #FFBF36;
            text-align: center; font-family: Anton;
            font-size: 80px;
            font-style: normal;
            font-weight: 400;
            line-height: 90px;
            letter-spacing: 10px;"
          >
            Create New Account
          </h1>
          <br>
          <br>
          <VTextField
            ref="usernameField"
            :rules="[rules.require, rules.usernameRules]"
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
            ref="passwordField"
            :type="isPasswordVisible ? 'text' : 'password'"
            :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
            :rules="[rules.require, rules.passwordRules]"
            style="color: white"
            bg-color="#FFBF36"
            color="white"
            label="Password"
            @click:append-inner="isPasswordVisible = !isPasswordVisible"
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
                    :disabled="!isFormValid"
                    class="ma-10"
                    variant="flat"
                    width='100'
                    color="#8C54D0"
                    rounded="lg"
                    style="color: white;"
                    to="/verify"
                  >
                    Next
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

<script setup>
import { ref, computed } from 'vue'

const isPasswordVisible = ref(false)

const usernameField = ref(null)
const passwordField = ref(null)

const rules = {
  require: value => !!value || 'Field is required',
}

const isFormValid = computed(() => {
  return (
    usernameField.value?.isValid &&
    passwordField.value?.isValid
  )
})
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
