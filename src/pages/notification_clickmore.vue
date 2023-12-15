<script>
import { ref , defineComponent } from 'vue'
import SeachBar from '@/components/homepage/SearchBar.vue'
import Posts from '@/components/homepage/NotificationPosts.vue'
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
            style="font-size: 40px; position: relative; bottom: 10px"
            icon="mdi-bell-ring-outline"
            color="#8c54d0"
            class="bell"
          />
          <span
            style="color: #FFBF36;
            font-size: 30px"
          >
            Notification
          </span>

          <span>   
            <VBtn 
              to="/"
              style="font-size: 30px; position: relative; bottom: 2px;"
              icon="mdi-alpha-x-box"
              variant="text"
              color="#ff4040"
            />
          </span>
          <hr style="border:solid 1px #FFBF36">

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
