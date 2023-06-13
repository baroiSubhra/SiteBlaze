<template>
  <template v-if="loading">
    <div class="w-full h-full felx justify-center items-center">
      <Spinner />
    </div>
  </template>

  <template v-else>
    <Nav :data="templateData.navigation" />
    <div class="container vh100">
      <Main :data="templateData.heroSection" />
      <Projects :data="templateData.projectSection" />
      <About :data="templateData.aboutSection" />
      <Mission :data="templateData.missionSection" />
      <Blog :data="templateData.blogSection" />
      <Footer :data="templateData.footer" />
    </div>
  </template>
</template>

<script>
import '../assets/style.css'
import { getActivePortfolio } from '@/api/apis'
import { LOCALSTORAGE_KEY, EDITMODE_LOCALSTORAGE_KEY } from '../../../utils/constants'
import { templateDetails } from '@/utils/templateUtil'
import Spinner from '../../../components/Spinner.vue'
import Main from '../sections/Main.vue'
import Nav from '../components/Nav.vue'
import Footer from '../components/Footer.vue'
import Projects from '../sections/Projects.vue'
import Blog from '../sections/Blog.vue'
import About from '../sections/About.vue'
import Mission from '../sections/Mission.vue'
import ListView from './ListView.vue'

const tid = 2

export default {
  components: {
    Spinner,
    Main,
    Nav,
    Footer,
    Projects,
    Blog,
    About,
    Mission,
    ListView
  },
  props: {
    pageData: {
      type: Object
    }
  },
  data() {
    return {
      view: 'LANDING',
      LANDING: 'LANDING',
      LIST_VIEW: '',
      loading: true,
      isEditMode: window.localStorage.getItem(EDITMODE_LOCALSTORAGE_KEY) == 'true' ? true : false,
      data: templateDetails.find((el) => el.tid == tid).content,
      templateData: {}
    }
  },
  methods: {
    async getTemplateData() {
      this.loading = true
      const isUserProtfolio = this.$route.name == 'portfolio-view'
      const isHistoryRoute = this.$route.name == 'history-view'
      if (isUserProtfolio || isHistoryRoute) {
        // populate from props
        this.templateData = this.pageData
      } else {
        if (this.isEditMode) {
          // read from localstorage
          this.templateData = JSON.parse(window.localStorage.getItem(LOCALSTORAGE_KEY))
          this.attachStorageListner()
        } else {
          // default read from template data
          this.templateData = this.data
        }
      }
      this.loading = false
    },
    attachStorageListner() {
      window.addEventListener('storage', () => {
        this.templateData = JSON.parse(window.localStorage.getItem(LOCALSTORAGE_KEY))
      })
    }
  },
  mounted() {
    this.getTemplateData()
  }
}
</script>
