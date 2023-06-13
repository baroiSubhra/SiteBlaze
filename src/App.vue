<template>
  <RouterView />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import Sidenav from '@/components/Sidenav.vue'
import Nav from '@/components/Nav.vue'
export default {
  components: {
    Sidenav,
    Nav
  }
}
</script>
