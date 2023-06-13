<template>
  <button class="d-button">{{ label }}</button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    }
  }
}
</script>
