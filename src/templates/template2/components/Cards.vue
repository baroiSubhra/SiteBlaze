<template>
  <div class="about-us-card">
    <div>
      <img v-if="cardType == 'blog'" :src="getImageLink()" alt="" />
      <img v-else :src="getImageLink()" alt="" />
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
import defaultImage from '@/assets/images/card.jpg'
export default {
  props: {
    cardType: {
      type: String,
      default: 'services'
    },
    img: {
      type: String,
      default: defaultImage
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
      defaultImage: defaultImage
    }
  },
  methods: {
    goToIndividualPost() {
      const noOfPopsToBasePath = this.$route.meta.noOfPopsToBasePath
      const routeTo = this.cardType && this.cardType == 'blog' ? '/blogs' : '/projects'
      const finalRoute =
        noOfPopsToBasePath == 0
          ? this.$route.path + routeTo + '/' + this.docId
          : this.$route.path + '/' + this.docId
      this.$router.push(finalRoute)
    },
    getImageLink() {
      return this.img && this.img.length > 0 ? this.img : this.defaultImage
    }
  }
}
</script>
