<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const postId = route.params.postId

const data = {
  title:"Post title",
  author:"me",
  date:"now",
  content:"some content",
  location:"somewhere",
  comments:[
    {
      id:1,
      username:"somebody",
      Forum:"some forum",
      date:"some time",
      replies:[],
    },
    {
      id:2,
      username:"somebody",
      Forum:"some forum",
      date:"some time",
      replies:[],
    },
    {
      id:3,
      username:"somebody",
      Forum:"some forum",
      date:"some time",
      replies:[],
    },
    {
      id:4,
      username:"somebody",
      Forum:"some forum",
      date:"some time",
      replies:[],
    },
    {
      id:5,
      username:"somebody",
      Forum:"some forum",
      date:"some time",
      replies:[],
    },

  ],
}
</script>

<template>
  <VCard style="background-color: black; border-color: #8C54D0; border-width: 1px">
    <VCardTitle class="d-flex justify-space-between">
<div>{{postId}}</div>
      <span>
        {{data.title}}
      </span>
      <span>
        {{ data.date }}
      </span>
    </VCardTitle>
    <VDivider />
    <VCardSubtitle class="d-flex justify-space-between">
      <span>
        {{data.author}}
      </span>
      <span>
        {{data.location}}
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
    <VCardActions>
      <VCol cols='12'>
        <VBtn block>
          Reply
        </VBtn>
      </VCol>
      <VCol cols='12'>

      </VCol>
    </VCardActions>
  </VCard>
</template>

<style scoped>

</style>
