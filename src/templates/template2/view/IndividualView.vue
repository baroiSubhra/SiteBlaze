<template>
  <template v-if="loading">
    <div class="w-full h-full felx justify-center items-center">
      <Spinner />
    </div>
  </template>
  <template v-else>
    <Nav :data="templateData.navigation" />

    <div class="container vh100">
      <section class="template-section individual-blog" id="blog">
        <template v-if="isTemplate">
          <h1 class="pb-1">Search Engine Optimization</h1>
          <h4 class="pb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </h4>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            <br />
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat

            <br />
            <br />

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
          </div></template
        >
        <template v-else>
          <div v-if="loadingPostData">
            <Spinner />
          </div>
          <div class="mt-4" v-else>
            <h1 class="pb-1">{{ postData.title }}</h1>
            <h4 class="pb-4">{{ postData.abstract }}</h4>
            <div v-html="postData.content"></div>
          </div>
        </template>
      </section>
      <Footer :data="templateData.footer" />
    </div>
  </template>
</template>

<script>
import '../assets/style.css'
import { getBlog, getProject } from '@/api/apis'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import AboutUsCards from '../components/Cards.vue'
import Button from '../components/Button.vue'
import Spinner from '../../../components/Spinner.vue'
import { templateDetails } from '@/utils/templateUtil'
import { CONTENT_TYPE_ENUM } from '@/utils/constants'

const tid = 1

export default {
  props: {
    pageData: {
      type: Object
    }
  },
  data() {
    return {
      loading: true,
      isTemplate: this.$route.meta.isTemplate,
      data: templateDetails.find((el) => el.tid == tid).content,
      templateData: {},
      docId: this.$route.params.doc,
      loadingPostData: true,
      postData: {},
      isBlog: this.$route.meta.contentType == CONTENT_TYPE_ENUM.BLOG
    }
  },
  components: {
    Nav,
    Footer,
    AboutUsCards,
    Button,
    Spinner
  },
  methods: {
    async getPost() {
      this.loadingPostData = true
      let resp
      if (this.isBlog) {
        resp = await getBlog(this.docId)
      } else {
        resp = await getProject(this.docId)
      }
      if (resp.success) {
        this.postData = resp.data
      }
      this.loadingPostData = false
    },
    intialize() {
      this.loading = true
      if (this.isTemplate) {
        this.templateData = this.data
      } else {
        this.templateData = this.pageData
        this.getPost()
      }
      this.loading = false
    }
  },
  mounted() {
    this.intialize()
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }
}
</script>
