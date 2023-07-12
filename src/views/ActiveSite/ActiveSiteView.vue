<template>
  <template v-if="loadingTemplate">
    <div class="flex justify-center items-center w-screen h-screen">
      <SpinnerVue />
    </div>
  </template>
  <template v-else>
    <template v-if="dataLoadFailed">
      <div class="w-screen h-screen flex justify-center items-center text-xl font-bold">
        We couldn't load the data
      </div>
    </template>
    <template v-else>
      <template v-if="tid == 1">
        <template
          v-if="$route.name == 'blogs-portfolio-view' || $route.name == 'projects-portfolio-view'"
        >
          <Template1ListView :pageData="pageContent" />
        </template>
        <template
          v-else-if="
            $route.name == 'blog-portfolio-view' || $route.name == 'project-portfolio-view'
          "
        >
          <Template1IndividualView :pageData="pageContent" />
        </template>
        <template v-else> <Template1 :pageData="pageContent" /></template>
      </template>
      <template v-if="tid == 2">
        <template
          v-if="$route.name == 'blogs-portfolio-view' || $route.name == 'projects-portfolio-view'"
        >
          <Template2ListView :pageData="pageContent" />
        </template>
        <template
          v-else-if="
            $route.name == 'blog-portfolio-view' || $route.name == 'project-portfolio-view'
          "
        >
          <Template2IndividualView :pageData="pageContent" />
        </template>
        <template v-else> <Template2 :pageData="pageContent" /></template>
      </template>
    </template>
  </template>
</template>

<script>
import { getUserIdFromUserName, getActivePortfolio } from '@/api/apis'
import { defineAsyncComponent } from 'vue'
import SpinnerVue from '@/components/Spinner.vue'
export default {
  components: {
    SpinnerVue,
    Template1: defineAsyncComponent(() => import('@/templates/template1/view/Page.vue')),
    Template1ListView: defineAsyncComponent(() =>
      import('@/templates/template1/view/ListView.vue')
    ),
    Template1IndividualView: defineAsyncComponent(() =>
      import('@/templates/template1/view/IndividualView.vue')
    ),
    Template2: defineAsyncComponent(() => import('@/templates/template2/view/Page.vue')),
    Template2ListView: defineAsyncComponent(() =>
      import('@/templates/template2/view/ListView.vue')
    ),
    Template2IndividualView: defineAsyncComponent(() =>
      import('@/templates/template2/view/IndividualView.vue')
    )
  },
  data() {
    return {
      tid: -1,
      uid: -1,
      loadingTemplate: true,
      dataLoadFailed: false,
      pageContent: ''
    }
  },
  methods: {
    async fetchUserDetails() {
      this.loadingTemplate = true
      const userName = this.$route.params.id
      let resp = await getUserIdFromUserName(userName)
      if (resp.success) {
        resp = resp.data
        this.$store.dispatch('auth/saveUserId', resp.uid)
        resp = await getActivePortfolio()
        if (resp.success && resp.data.documents.length > 0) {
          resp = resp.data
          const concernedDoc = resp.documents.shift()
          this.pageContent = JSON.parse(concernedDoc.content)
          this.tid = concernedDoc.tid
        } else {
          this.dataLoadFailed = true
        }
      } else {
        this.dataLoadFailed = true
      }
      this.loadingTemplate = false
    }
  },
  beforeMount() {
    this.fetchUserDetails()
  }
}
</script>
