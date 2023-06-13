<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <div class="flex justify-center items-center" v-if="loading">
      <Spinner />
    </div>
    <template v-else>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 pt-4" v-if="!loading">
        <thead
          class="text-xs text-gray-700 capitalize bg-primary-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <!-- <th scope="col" class="p-4">
            <div class="flex items-center">
              <input
                @click="selectAll"
                :checked="tableData.length > 0 && localMap.size == tableData.length"
                id="checkbox-all-search"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th> -->
            <th scope="col" class="px-6 py-3 text-md" v-for="(item, index) in headers" :key="index">
              {{ item }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            v-for="(item, index) in tableData"
            :key="index"
          >
            <!-- <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                @click="(event) => toggleSelect(event, index)"
                :checked="localMap.has(index)"
                id="checkbox-table-search-1"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
            </div>
          </td> -->
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              v-for="(label, idx) in tableKeys"
              :key="idx"
            >
              <template v-if="label == 'published_on'">
                {{ dateTransformer(item[label]) }}
              </template>
              <template v-else>
                {{ item[label] }}
              </template>
            </th>
            <td class="px-6 py-4 flex gap-8">
              <a
                @click="emitEditAction(index)"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Edit</a
              >

              <a
                @click="emitDeleteAction(index)"
                class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                >Delete</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </template>
  </div>
</template>

<script>
import { MONTH_MAP } from '../utils/constants'
import Spinner from './Spinner.vue'
export default {
  components: {
    Spinner
  },
  props: {
    modelValue: null,
    headers: null,
    tableData: null,
    tableKeys: null,
    loading: { type: Boolean, default: false }
  },
  data() {
    return {
      localMap: new Map()
    }
  },
  computed: {
    selected: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      }
    }
  },
  methods: {
    selectAll(event) {
      if (event.target.checked) {
        for (let i = 0; i < this.tableData.length; i++) {
          if (!this.localMap.has(i)) {
            this.localMap.set(i, this.tableData[i])
          }
        }
        this.selected = [...this.localMap.values()]
      } else {
        for (let i = 0; i < this.tableData.length; i++) {
          if (this.localMap.has(i)) {
            this.localMap.delete(i)
          }
        }
        this.selected = []
      }
    },
    toggleSelect(event, index) {
      if (event.target.checked) {
        this.localMap.set(index, this.tableData[index])
        this.selected = [...this.localMap.values()]
      } else {
        this.localMap.delete(index)
        this.selected = [...this.localMap.values()]
      }
    },
    emitEditAction(index) {
      this.$emit('edit', this.tableData[index])
    },
    emitDeleteAction(index) {
      this.$emit('delete', this.tableData[index])
    },
    dateTransformer(timestamp) {
      const date = new Date(timestamp)
      return date.getDate() + ' ' + MONTH_MAP.get(date.getMonth() + 1) + ' ' + date.getFullYear()
    }
  }
}
</script>
