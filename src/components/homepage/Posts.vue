<template>
  <VCard
    class="mb-9"
    style="background-color: black; border-color: #8C54D0; border-width: 1px"
  >
    <VCardTitle class="d-flex justify-space-between">
      <span>
        Post Title
      </span>
      <span>
        Date/Time
      </span>
    </VCardTitle>
    <VDivider />
    <VCardSubtitle class="d-flex justify-space-between">
      <span>
        Author
      </span>
      <span>
        Location
      </span>
    </VCardSubtitle>
    <VCardActions class="d-flex justify-space-between">
      <div>
        <VIcon
          icon="mdi-medal"
          color="#FFBF36"
        />
        <span style="color: #FFBF36">
          Helpful
        </span>
        <VIcon
          class="ml-3"
          icon="mdi-comment-text-multiple"
          color="#8C54D0"
        />
        <span style="color: #8C54D0">
          Comment
        </span>
      </div>
      <div>
        <VBtn
          height="40"
          variant="text"
          width="40"
          @click="shareclicked!==shareclicked"
        >
          <VIcon
            icon="mdi-share"
            color="#FFBF36"
          />
        </VBtn>
        <VBtn
          height="40"
          variant="text"
          width="40"
          @click="saveclicked!=saveclicked"
        >
          <VIcon
            :icon="saveclicked?'mdi-bookmark-outline':'mdi-bookmark'"
            color="#8C54D0"
          />
        </VBtn>
      </div>
    </VCardActions>
  </VCard>
</template>

<script setup>
const shareclicked = ref(false)
const saveclicked = ref(false)
</script>

<style scoped>

</style>
