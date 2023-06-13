<template>
  <button class="d-button">
    <span v-if="loading">
      <Spinner />
    </span>
    <span v-else>
      {{ label }}
    </span>
  </button>
</template>

<script>
import Spinner from '@/components/Spinner.vue'
export default {
  components: {
    Spinner
  },
  props: {
    label: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    }
  }
}
</script>
