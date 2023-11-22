<script>
import { ref , defineComponent } from 'vue'
import SeachBar from '@/components/homepage/SearchBar.vue'
import Posts from '@/components/homepage/Posts.vue'
import ShortCutBtns from '@/components/homepage/ShortCutBtns.vue'
import Blank from '@/layouts/blank.vue'

export default defineComponent({
  components: { Blank, ShortCutBtns, Posts, SeachBar },
})

const test_show = ref(true)
</script>

<template>
  <VCol
    cols="12"
    style="background-color: black; height: 100vh"
  >
    <VRow
      class="de-flex justify-center align-center"
    >
      <SeachBar />
      <VCol cols="10">
        <VCol cols="12">
          <VIcon
            icon="mdi-medal"
            color="#FFBF36"
          />
          <!-- add divider -->
        </VCol>
        <Posts
          v-for="n in 4"
          :key="n"
        />
      </VCol>
      <VCol cols="2">
        <ShortCutBtns />
      </VCol>
    </VRow>
  </VCol>
</template>

<route lang="yaml">
meta:
  layout: _blank
</route>
