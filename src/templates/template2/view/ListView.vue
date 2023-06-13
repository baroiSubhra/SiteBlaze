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
        <div class="mt-4">
          <div>
            <h1>
              {{
                isBlog
                  ? templateData.blogSection.title.value
                  : templateData.projectSection.title.value
              }}
            </h1>
          </div>
          <div>
            <template v-if="isTemplate">
              <div class="about-bottom mt-8">
                <AboutUsCards docId="3" />
                <AboutUsCards docId="1" />
                <AboutUsCards docId="2" />
              </div>
            </template>
            <template v-else>
              <div v-if="loadingListData">
                <Spinner />
              </div>
              <div class="about-bottom mt-8" v-else>
                <AboutUsCards
                  v-for="(el, index) in listData"
                  :img="el.img"
                  :title="el.title"
                  :details="el.abstract"
                  :docId="el.$id"
                  :key="index"
                />
              </div>
              <div class="mt-4 center" v-if="this.pageNo < this.totalPages">
                <Button @click="incrementPage" label="Load More" />
              </div>
            </template>
          </div>
        </div>
      </section>
      <Footer :data="templateData.footer" />
    </div>
  </template>
</template>

<script>
import '../assets/style.css'
import { getBlogs, getProjects } from '@/api/apis'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import AboutUsCards from '../components/Cards.vue'
import Button from '../components/Button.vue'
import Spinner from '../../../components/Spinner.vue'
import { templateDetails } from '@/utils/templateUtil'
import { CONTENT_TYPE_ENUM, STATUS_ENUM } from '@/utils/constants'

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
      loadingListData: true,
      listData: [],
      pageNo: 1,
      isBlog: this.$route.meta.contentType == CONTENT_TYPE_ENUM.BLOG,
      totalPages: 3
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
    async getListData() {
      this.loadingListData = true
      let resp
      if (this.isBlog) {
        resp = await getBlogs(STATUS_ENUM.ONLINE, this.pageNo)
      } else {
        resp = await getProjects(STATUS_ENUM.ONLINE, this.pageNo)
      }
      if (resp.success) {
        this.listData.push(...resp.data.documents)
      }
      this.loadingListData = false
    },
    incrementPage() {
      if (this.pageNo < this.totalPages) {
        this.pageNo++
        this.getListData()
      }
    },
    intialize() {
      this.loading = true
      if (this.isTemplate) {
        this.templateData = this.data
      } else {
        this.templateData = this.pageData
        this.getListData()
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
