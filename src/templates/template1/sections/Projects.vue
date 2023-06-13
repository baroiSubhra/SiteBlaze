<template>
  <section class="center template-section" id="project" v-if="data.show">
    <div class="about">
      <div class="about-top">
        <div>
          <h4 class="color-primary mb-4" v-if="data.topHeading.show">
            {{ data.topHeading.value }}
          </h4>
          <h1 class="mb-4" v-if="data.title.show">{{ data.title.value }}</h1>
        </div>
        <div>
          <h4 class="mt-10 mb-4 color-secondary" v-if="data.deatils.show">
            {{ data.deatils.value }}
          </h4>
        </div>
      </div>
      <div class="about-bottom mt-16">
        <template v-if="isTemplate">
          <AboutUsCards
            v-for="index in 3"
            :key="index"
            :img="defaultProjectImages"
            :docId="`${index}`"
            :title="`This is Project no -${index}`"
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
        <Button @click="showProjectsView" :label="data.ctaButton.value" />
      </div>
    </div>
  </section>
</template>

<script>
import template1DefaultImage from '@/assets/images/meetup-3.jpg'
import { getProjects } from '@/api/apis'
import AboutUsCards from '../components/Cards.vue'
import Button from '../components/Button.vue'
import Spinner from '../../../components/Spinner.vue'
import { STATUS_ENUM } from '@/utils/constants'
export default {
  components: {
    AboutUsCards,
    Button,
    Spinner
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
      defaultProjectImages: template1DefaultImage
    }
  },
  methods: {
    showProjectsView() {
      this.$router.push(this.$route.fullPath + '/projects')
    },
    async fetchData() {
      this.loading = true
      let resp = await getProjects(STATUS_ENUM.ONLINE, this.pageNo, this.pageLimit)
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
