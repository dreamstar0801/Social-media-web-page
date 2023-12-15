<template>
  <VCard
    class="mb-9"
    style="background-color: black; border-color: #8C54D0; border-width: 1px"
  >
    <VCardTitle class="d-flex justify-space-between">
      <span
        style="color: #FFBF36"
      >
        <VIcon
          icon="mdi-account-circle"
          color="#d3aeff"
        />
        Username | Forum's name
      </span>
    </VCardTitle>
    <VDivider />
    <VCardTitle class="d-flex justify-space-between">
      <span style="color: #ffffff">
        You helped a student ~
      </span>
      <span style="color: #d3aeff">
        Date/Time
      </span>
    </VCardTitle>
  </VCard>
</template>


<script setup>
const shareclicked = ref(false)
const saveclicked = ref(false)
</script>

<style scoped>

</style>
