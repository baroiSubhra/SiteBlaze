<template>
  <div class="about-us-card">
    <div>
      <img v-if="cardType == 'blog'" :src="img" alt="" />
      <img v-else :src="img" alt="" />
    </div>
    <h3 class="mb-4 pt-2">{{ title }}</h3>
    <h5 class="mb-4 color-secondary">
      {{ details }}
    </h5>
    <a @click="goToIndividualPost" class="explore-link">
      <span v-if="cardType == 'blog'">Read</span>
      <span v-else>Explore More</span>
      ->
    </a>
  </div>
</template>

<script>
import templateImage from '@/assets/images/meetup-1.jpg'
export default {
  props: {
    cardType: {
      type: String,
      default: 'services'
    },
    img: {
      type: String,
      default: templateImage
    },
    title: {
      type: String,
      default: 'Search Engine Optimization'
    },
    details: {
      type: String,
      default:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatP'
    },
    docId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      templateImage: templateImage
    }
  },
  methods: {
    goToIndividualPost() {
      const noOfPopsToBasePath = this.$route.meta.noOfPopsToBasePath
      const finalRoute =
        noOfPopsToBasePath == 0
          ? this.$route.path + '/blogs/' + this.docId
          : this.$route.path + '/' + this.docId
      this.$router.push(finalRoute)
    }
  }
}
</script>
