<template>
  <section class="p-4 rounded-lg md:ml-64 h-auto pt-20 min-h-screen">
    <div class="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">Blogs</div>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
      This is the list of all templates available for you to choose and customize,each template is
      completely responsive
    </p>
    <div>
      <div class="mb-8 mt-8 flex justify-between">
        <Dropdown :options="dpOptions" />

        <router-link
          to="/dashboard/cms/blogs/add"
          class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Add Blog
          <svg
            fill="currentColor"
            class="w-4 ml-1 -mr-1"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
            ></path>
          </svg>
        </router-link>
      </div>
      <template v-if="initialFetch && tableData.length == 0">
        <NoResults label="There Are No Blogs Please Create One By Clicking On Add Blog" />
      </template>
      <template v-else>
        <Table
          :tableData="tableData"
          :tableKeys="tableKeys"
          :headers="headers"
          :loading="loading"
          @edit="enterEditMode"
          @delete="removeBlog"
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
import Dropdown from '@/components/Dropdown.vue'
import { getBlogs, deleteBlog, getTotalItemContentCount } from '@/api/apis'
import { STATUS_ENUM, CONTENT_TYPE_ENUM } from '@/utils/constants'
import Pagination from '@/components/Pagination.vue'
export default {
  components: {
    Table,
    Dropdown,
    Pagination,
    NoResults: defineAsyncComponent(() => import('@/components/NoResults.vue')),
  },
  data() {
    return {
      headers: ['Title', 'Details', 'Publish Date', 'Status', 'Actions'],
      tableData: [],
      tableKeys: ['title', 'abstract', 'published_on', 'status'],
      status: STATUS_ENUM.ALL,
      initialFetch: false,
      loading: true,
      pageNo: 1,
      totalPages: 0,
      pageLimit: import.meta.env.VITE_PAGINATION_LIMIT,
      dpOptions: [
        {
          name: 'All',
          action: () => {
            this.status = STATUS_ENUM.ALL
            this.pageNo = 1
            this.getData(this.pageNo)
            this.getTotalPages()
          }
        },
        {
          name: 'Online',
          action: () => {
            this.status = STATUS_ENUM.ONLINE
            this.pageNo = 1
            this.getData(this.pageNo)
            this.getTotalPages()
          }
        },
        {
          name: 'Draft',
          action: () => {
            this.status = STATUS_ENUM.DRAFT
            this.pageNo = 1
            this.getData(this.pageNo)
            this.getTotalPages()
          }
        }
      ]
    }
  },
  methods: {
    async getData(pageNo) {
      const resp = await getBlogs(this.status, pageNo)
      this.tableData = resp.data.documents
    },
    async getTotalPages() {
      const resp = await getTotalItemContentCount(CONTENT_TYPE_ENUM.BLOG)
      if (resp.success) {
        this.totalPages = Math.ceil(Number(resp.data[this.status] / this.pageLimit))
      }
    },
    enterEditMode(data) {
      const payload = {
        img: data.img,
        title: data.title,
        abstract: data.abstract,
        content: data.content,
        documentId: data.$id,
        status: data.status
      }
      this.$store.dispatch('addContent/saveAllData', payload)
      this.$store.dispatch('addContent/updateEditMode', true)
      this.$router.push('/dashboard/cms/blogs/add')
    },
    async removeBlog(data) {
      const resp = await deleteBlog(data.$id, data.status)
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
