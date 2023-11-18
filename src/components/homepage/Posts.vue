<template>
  <VCard style="background-color: black; border-color: #8C54D0; border-width: 3px">
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
          icon="mdi-comment-text-multiple"
          color="#8C54D0"
        />
        <span style="color: #8C54D0">
          Comment
        </span>
      </div>
      <div>
        <VIcon
          icon="mdi-share"
          color="#FFBF36"
        />
        <VIcon
          icon="mdi-bookmark-outline"
          color="#8C54D0"
        />
      </div>
    </VCardActions>
  </VCard>
</template>

<script>
export default {
  name: 'Posts',
}
</script>

<style scoped>

</style>
