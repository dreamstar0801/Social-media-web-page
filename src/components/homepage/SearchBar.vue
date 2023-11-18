<template>
  <VCol
    cols="10"
  >
    <VTextField
      style="color: white"
      bg-color="#FFBF36"
      color="white"
      label="Search"
    />
  </VCol>
  <VCol
    cols="1"
  >
    <VBtn
      block
      variant="outlined"
      color="#FFBF36"
    >
      <VIcon
        icon="mdi-menu"
        color="#FFBF36"
      />
    </VBtn>
  </VCol>
  <VCol
    cols="1"
  >
    <VBtn
      block
      variant="outlined"
      color="#FFBF36"
    >
      <VImg :src="chatpic" />           <!-- Image not showing -->
    </VBtn>
  </VCol>
</template>

<script setup>
import chatpic from '@/assets/chat.png'
</script>
