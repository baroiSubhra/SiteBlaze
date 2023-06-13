<template>
  <section class="p-0">
    <div class="flex justify-center items-center h-full p-8">
      <Card :image="img ? img : defaultImage" :title="title" :details="abstract" />
    </div>
  </section>
</template>

<script>
import Card from '@/components/Card.vue'
import defaultImage from '@/assets/images/card.jpg'
export default {
  props: {
    img: {
      type: String,
      defaut: ''
    },
    title: {
      type: String,
      defaut: ''
    },
    abstract: {
      type: String,
      defaut: ''
    }
  },
  components: {
    Card
  },
  data() {
    return {
      defaultImage: defaultImage
    }
  }
}
</script>
