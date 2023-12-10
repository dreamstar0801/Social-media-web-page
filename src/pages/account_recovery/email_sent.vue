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
            class="mb-7"
            style="color: #FFBF36;
            text-align: center; font-family: Anton;
            font-size: 90px;
            font-style: normal;
            font-weight: 400;
            line-height: 100px;
            letter-spacing: 18px;"
          >
            Email Sent!
          </h1>
          <h3 style="text-align: center; color: white">
            We send you a email to check your username. <br> Please check your email inbox or spam.
          </h3>
          <br><br><br><br>
          <h2 style="text-align: center; color: white">
            Still didn’t get it? <br> You can resend it (Max 3 times)
          </h2>
          <br>
          <VTextField
            bg-color="#8C54D0"
            color="white"
            label="Email Address"
            style="color: white; font-weight: 700;"
          />
          <br><br>
          <VCardActions class="justify-center mt-7">
            <VBtn
              style="color: white"
              variant="flat"
              color="#FFBF36"
              rounded="lg"
              to="/login"
            >
              Back to login
            </VBtn>            
            <VBtn
              style="color: white"
              variant="flat"
              color="#8C54D0"
              rounded="lg"
            >
              Resend
            </VBtn>
          </VCardActions>
        </div>
      </VCol>
    </VRow>
  </VCol>
</template>

<script setup>
</script>

<route lang="yaml">
meta:
  layout: blank
</route>
