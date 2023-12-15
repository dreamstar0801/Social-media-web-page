<template>
  <div>
    <VCard
      style="background-color: black; border-color: #ffbf36; border-width: 1px; margin-bottom: 10px; width: 300px; height: 40px; position: relative; margin-bottom: 0;"
    >
      <VCardTitle
        class="d-flex justify-space-between"
        style="height: 40px;"
      >
        <span style="color: #FFBF36; display: flex; align-items: center; font-size: 20px; margin-left: -10px;">
          <VIcon
            icon="mdi-bell-outline"
            color="#8C54D0"
          />
          <span style="margin-left: 5px;">Notification</span>
        </span>
        <span style=" margin-top: -14px; margin-left: 98px">  
          <VBtn
            style="font-size: 25px;"
            icon="mdi-alpha-x-box"
            variant="text"
            color="#ff4040"
          />
        </span>
      </VCardTitle>
      <VDivider />
    </VCard>

    <VCard
      v-for="index in 6"
      :key="index"
      style="background-color: black; border-color: #ffbf36; border-width: 1px; margin-bottom: 10px; width: 300px; height: 80px; position: relative; margin-bottom:0"
    >
      <VCardTitle
        class="d-flex justify-space-between"
        style="height: 30px; margin-left: -10px;"
      >
        <span style="color: #FFBF36; display: flex; align-items: center; font-size: 15px;">
          <VIcon
            icon="mdi-account-circle"
            color="#d3aeff"
          />
          <span style="margin-left: 5px;">Username | Forum's name</span>
        </span>
      </VCardTitle>
      <VDivider />
      <VCardTitle>
        <span style="color: #ffffff; display: flex; align-items: center; font-size: 12px;">
          You helped a student ~
        </span>
      </VCardTitle>
      <VCardTitle
        class="d-flex justify-space-between"
        style="height: 30px; position: absolute; bottom: 5px; right: 5px;"
      >
        <span style="color: #d3aeff; display: flex; align-items: center; font-size: 12px;">
          Date/Time
        </span>
      </VCardTitle>
    </VCard>
  </div>
  <br>
  <div style="display: flex; align-items: center;">
    <VBtn
      variant="text"
      color="#8C54D0"
      style="color: #ffffff;"
      to="/notification_clickmore"
    >
      more
    </VBtn>
  </div>
</template>

<script setup>
const shareclicked = ref(false)
const saveclicked = ref(false)
</script>

<style scoped>

</style>
