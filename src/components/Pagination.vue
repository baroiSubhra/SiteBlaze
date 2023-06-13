<template>
  <nav aria-label="Page navigation example" v-if="totalPages && !loading">
    <ul class="inline-flex items-center -space-x-px">
      <li>
        <a
          @click="decrementPageNo"
          class="block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="sr-only">Previous</span>
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </li>
      <li v-for="index in totalPages" :key="index">
        <a
          @click="pageNoClicked(index)"
          class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          :class="{ 'active-pagination': pageNo == index }"
          >{{ index }}</a
        >
      </li>
      <li>
        <a
          @click="incrementPageNo"
          class="block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <span class="sr-only">Next</span>
          <svg
            aria-hidden="true"
            class="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    modelValue: null,
    totalPages: {
      type: Number,
      default: 1
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    pageNo: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      }
    }
  },
  methods: {
    incrementPageNo() {
      if (this.pageNo < this.totalPages) this.pageNo++
    },
    decrementPageNo() {
      if (this.pageNo > 1) this.pageNo--
    },
    pageNoClicked(index) {
      this.pageNo = index
    }
  }
}
</script>

<style>
.active-pagination {
  @apply text-blue-600 !border !border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700;
}
</style>
