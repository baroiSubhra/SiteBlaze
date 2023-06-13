<template>
  <section class="center template-section" id="blog">
    <div>
      <div class="center">
        <h1 class="mb-4 text-center" v-if="data.title.show">{{ data.title.value }}</h1>
      </div>
      <div class="about-bottom mt-16">
        <template v-if="isTemplate">
          <AboutUsCards
            v-for="index in 3"
            cardType="blog"
            :key="index"
            :img="defaultBlogImages"
            :docId="`${index}`"
            :title="`This is blog no -${index}`"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatP"
          />
        </template>
        <template v-else>
          <template v-if="loading">
            <Spinner class="col-start-2" />
          </template>
          <template v-else>
            <AboutUsCards
              v-for="(el, index) in postData"
              cardType="blog"
              :img="el.img"
              :title="el.title"
              :details="el.abstract"
              :docId="el.$id"
              :key="index"
            />
          </template>
        </template>
      </div>
      <div class="mt-4 center" v-if="postData.length > 0">
        <Button @click="showBlogsView" label="Explore More Blogs" />
      </div>
    </div>
  </section>
</template>

<script>
import template1DefaultImage from '@/assets/images/restaurant.png'
import AboutUsCards from '../components/Cards.vue'
import { getBlogs } from '@/api/apis'
import Spinner from '../../../components/Spinner.vue'
import Button from '../components/Button.vue'
import { STATUS_ENUM } from '@/utils/constants'
export default {
  components: {
    AboutUsCards,
    Spinner,
    Button
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      loading: true,
      isTemplate: this.$route.meta.isTemplate,
      postData: [],
      pageNo: 1,
      pageLimit: 3,
      defaultBlogImages: template1DefaultImage
    }
  },
  methods: {
    showBlogsView() {
      this.$router.push(this.$route.fullPath + '/blogs')
    },
    async fetchData() {
      this.loading = true
      let resp = await getBlogs(STATUS_ENUM.ONLINE, this.pageNo, this.pageLimit)
      if (resp.success) {
        this.postData = resp.data.documents
      }
      this.loading = false
    },
    initialize() {
      if (!this.isTemplate) {
        this.fetchData()
      }
    }
  },
  mounted() {
    this.initialize()
  }
}
</script>
