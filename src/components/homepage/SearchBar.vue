<template>
  <VCol
    cols="10"
  >
    <VTextField
      variant="outlined"
      style="color: #FFBF36"
      color="#FFBF36"
      label="Search"
      append-inner-icon="mdi-magnify"
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
    <VBtn
      block
      variant="outlined"
      color="#FFBF36"
    >
      <VImg :src="chatpic" />           <!-- Image not showing -->
    </VBtn>
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
