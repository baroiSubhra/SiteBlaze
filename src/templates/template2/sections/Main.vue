<template>
  <main class="main">
    <div class="home mt-16" id="home">
      <div class="home-left" :class="{ 'col-span-full text-center': !data.image.show }">
        <h4 class="color-primary mb-4" v-if="data.topHeading.show">{{ data.topHeading.value }}</h4>
        <h1 class="mb-4" v-if="data.title.show">{{ data.title.value }}</h1>
        <h4 class="mb-4 color-secondary" v-if="data.deatils.show">
          {{ data.deatils.value }}
        </h4>
        <Button v-if="data.ctaButton.show" :label="data.ctaButton.value" />
      </div>
      <div class="home-right" v-if="data.image.show">
        <img :src="data.image.value" :alt="data.topHeading.value" />
      </div>
    </div>
  </main>
</template>

<script>
import Button from '../components/Button.vue'
export default {
  components: {
    Button
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped></style>
