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
    <v-select
      v-model="location"
      label="Location"
    ></v-select>
    <VMenu :location="location">
      <template #activator="{ props }">
        <VBtn
          block
          variant="outlined"
          color="#FFBF36"
          v-bind="props"
        >
          <VIcon
            icon="mdi-menu"
            color="#FFBF36"
          />
        </VBtn>
      </template>

      <VList>
        <VListItem
          v-for="(item, index) in items"
          :key="index"
        >
          <VListItemTitle>{{ item.title }}</VListItemTitle>
        </VListItem>
      </VList>
    </VMenu>

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
const items = [
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me' },
  { title: 'Click Me 2' },
]
const location = 'bottom'
</script>
