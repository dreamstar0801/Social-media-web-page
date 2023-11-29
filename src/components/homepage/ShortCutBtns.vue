<template>
  <VList style="background-color: black">
    <VListItem
      v-for="(item, index) in buttons"
      :key="index"
    >
      <VBtn
        variant="outlined"
        block
        class="justify-start"
        style="border-color: #FFBF36; border-width: 2px"
      >
        <template #prepend>
          <VIcon
            size="30"
            :icon="item.icon"
            color="#8C54D0"
          />
        </template>
        <span style="color: #FFBF36">
          {{ item.text }}
        </span>
      </VBtn>
    </VListItem>
  </VList>
</template>

<script setup>
const buttons = [
  {
    icon:"mdi-plus",
    text:"New Post",
  },
  {
    icon:"mdi-forum-outline",
    text:"Forums",
  },
  {
    icon:"mdi-bell-ring",
    text:"Notifications",
  },
  {
    icon:"mdi-earth",
    text:"New Forum",
  },
  {
    icon:"mdi-human-male-board",
    text:"Professor",
  },
  {
    icon:"mdi-cart-outline",
    text:"Market",
  },
]
</script>

<style scoped>

</style>
