<template>
  <label for="file" class="mb-2 text-sm font-medium text-gray-900 dark:text-white">{{
    label
  }}</label>
  <div class="flex">
    <div class="relative w-full">
      <input
        type="search"
        name="file"
        class="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
        placeholder="Search"
        v-model="bindValue"
        :disabled="fileUploading"
      />
      <div
        class="absolute top-0 right-0 p-2 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 custom-padding"
      >
        <FileUploadVue
          :id="id"
          v-model:filePublicUrl="filePublicUrl"
          v-model:fileUploading="fileUploading"
        />
      </div>
    </div>
  </div>
</template>

<script>
import FileUploadVue from './FileUpload.vue'
export default {
  components: {
    FileUploadVue
  },
  props: {
    modelValue: null,
    label: {
      type: String
    },
    id: {
      type: String
    }
  },
  computed: {
    bindValue: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      }
    }
  },
  data() {
    return {
      filePublicUrl: '',
      fileUploading: false
    }
  },
  watch: {
    filePublicUrl: function (new_value, old_value) {
      this.bindValue = new_value
    }
  }
}
</script>

<style scoped>
.custom-padding {
  padding-top: 7px;
  padding-bottom: 7px;
}
</style>
