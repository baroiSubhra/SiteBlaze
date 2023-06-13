<template>
  <section class="p-4 rounded-lg md:ml-64 h-auto pt-20 min-h-screen">
    <div class="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">CTA Data</div>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      This is the list of all templates available for you to choose and customize,each template is
      completely responsive
    </p>
    <div class="mt-16">
      <template v-if="initialFetch && tableData.length == 0">
        <NoResults label="There Are No CTA Queries" />
      </template>
      <template v-else>
        <Table
          :tableData="tableData"
          :tableKeys="tableKeys"
          :headers="headers"
          :loading="loading"
          @edit="enterEditMode"
          @delete="removeQuerry"
        />
        <div class="pt-8 flex justify-center items-center">
          <Pagination :loading="loading" v-model="pageNo" :totalPages="totalPages" />
        </div>
      </template>
    </div>
  </section>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import Table from '@/components/Table.vue'
import { getCTAQuerry, deleteCTAQuerry, getCTAQuerryCount } from '@/api/apis'
import Pagination from '@/components/Pagination.vue'
export default {
  components: {
    Table,
    Pagination,
    NoResults: defineAsyncComponent(() => import('@/components/NoResults.vue'))
  },
  data() {
    return {
      headers: ['Input1', 'Input2', 'Input3', 'Actions'],
      tableData: [],
      tableKeys: ['input1', 'input2', 'input3'],
      loading: true,
      initialFetch: false,
      pageNo: 1,
      totalPages: 0,
      pageLimit: import.meta.env.VITE_PAGINATION_LIMIT
    }
  },
  methods: {
    async getData(pageNo) {
      const resp = await getCTAQuerry(pageNo)
      this.tableData = resp.data.documents
    },
    async getTotalPages() {
      const resp = await getCTAQuerryCount()
      if (resp.success) {
        this.totalPages = Math.ceil(Number(resp.data.all / this.pageLimit))
      }
    },
    enterEditMode(data) {
      const payload = {
        input1: data.input1,
        input2: data.input2,
        input3: data.input3,
        documentId: data.$id
      }
      this.$store.dispatch('ctaQuerry/saveAllData', payload)
      this.$store.dispatch('ctaQuerry/updateEditMode', true)
      this.$router.push('/dashboard/cms/cta/edit')
    },
    async removeQuerry(data) {
      const resp = await deleteCTAQuerry(data.$id)
      if (resp.success) {
        this.getData(this.pageNo)
      }
    },
    initialize() {
      const data = this.getData(this.pageNo)
      const pages = this.getTotalPages()
      this.loading = true
      Promise.all([data, pages])
        .then(() => {
          this.loading = false
          this.initialFetch = true
        })
        .catch((el) => {
          this.loading = false
          this.initialFetch = true
        })
    }
  },
  mounted() {
    this.initialize()
  },
  watch: {
    pageNo: function (new_value, old_value) {
      this.getData(new_value)
    }
  }
}
</script>
