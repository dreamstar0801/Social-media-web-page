<script setup>
import SeachBar from '@/components/homepage/SearchBar.vue'
import ShortCutBtns from '@/components/homepage/ShortCutBtns.vue'
</script>

<template>
  <div class="layout-page-content">
    <VCol
      cols="12"
      style="background-color: black; height: 100vh"
    >
      <VRow
        class="de-flex justify-center align-center"
      >
        <SeachBar />
        <VCol cols="10">
          <RouterView />
        </VCol>
        <VCol cols="2">
          <ShortCutBtns />
        </VCol>
      </VRow>
    </VCol>
  </div>
</template>

<style lang="scss">
@use "@layouts/styles/default-layout";
</style>
