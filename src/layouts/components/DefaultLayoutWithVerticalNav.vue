<script setup>
import { VerticalNavLayout } from '@layouts'

// Components
import Footer from '@/layouts/components/Footer.vue'
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
</script>

<template>
  <VerticalNavLayout>
    <!-- 👉 Pages -->
    <div class="layout-page-content">
      <RouterView />
    </div>
  </VerticalNavLayout>
</template>
