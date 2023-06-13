<template>
  <section class="p-4 md:ml-64 h-auto pt-20 min-h-screen">
    <div v-if="loading" class="w-full h-full flex">
      <SpinnerVue />
    </div>
    <div class="rounded-lg mb-4" v-else>
      <div class="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
        All Of Your Customized Templates.
      </div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        This section contains all of your customizd template, click on edit button to edit further
        or activate and go live.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-4 mt-4">
        <template v-for="(item, index) in data" :key="index">
          <Card
            :image="item.img"
            :title="item.title"
            :details="item.details"
            leftButtonText="View"
            rightButtonText="Edit"
            :leftButtonAction="item.leftButtonAction"
            :rightButtonAction="item.rightButtonAction"
          />
        </template>
      </div>
      <template v-if="initialFetch && data.length == 0">
        <NoResults />
      </template>
    </div>
  </section>
</template>
<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'
import { templateDetails } from '@/utils/templateUtil'
import { getAllPortfolios } from '@/api/apis'
import { databases, ID } from '@/utils/appwrite'
import Card from '@/components/Card.vue'
import SpinnerVue from '@/components/Spinner.vue'

export default {
  components: {
    Card,
    SpinnerVue,
    NoResults: defineAsyncComponent(() => import('@/components/NoResults.vue'))
  },
  data() {
    return {
      data: [],
      loading: false,
      initialFetch: false,
      dbId: import.meta.env.VITE_DATABASE_ID,
      collectionId: import.meta.env.VITE_COLLECTION_PORTFOLIO
    }
  },
  computed: {
    ...mapGetters({
      userName: 'auth/getUserName'
    })
  },
  methods: {
    async createDbEmtry() {
      const tdata = templateDetails.find((template) => template.tid == 1)
      const promise = await databases.createDocument(this.dbId, this.collectionId, ID.unique(), {
        uid: '00',
        tid: '1',
        active: true,
        content: JSON.stringify(tdata.content)
      })
    },
    async getAllTemplates() {
      this.loading = true
      const result = await getAllPortfolios()
      if (result.success) {
        this.data = result.data.documents.map((el) => {
          const tdata = templateDetails.find((template) => template.tid == el.tid)
          const parsedData = JSON.parse(el.content)
          const historyUrl = '/history/' + this.userName + '/' + el.$id
          const obj = {
            img: tdata.img,
            title: parsedData.heroSection.title.value,
            details: parsedData.heroSection.deatils.value.slice(0, 150),
            name: tdata.name,
            content: el.content,
            leftButtonAction: () => {
              window.open(historyUrl, '_blank')
            },
            rightButtonAction: () => {
              // this.$store.dispatch('managePortfolio/saveDocumentId', el.$id)
              this.$router.push('/dashboard/manage-portfolio/' + el.$id)
            }
          }
          return obj
        })
      } else {
      }
      if (!this.initialFetch) {
        this.initialFetch = true
      }
      this.loading = false
    },
    initialize() {
      this.getAllTemplates()
    }
  },
  mounted() {
    this.initialize()
  }
}
</script>
