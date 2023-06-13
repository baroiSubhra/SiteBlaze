<template>
  <button class="relative flex" @click="triggerFileUpload">
    <input :id="id" class="invisible w-1 inline" type="file" @change.prevent="uploadFile" />
    <span
      ><svg
        fill="currentColor"
        class="w-5 inline pr-1"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M9.25 13.25a.75.75 0 001.5 0V4.636l2.955 3.129a.75.75 0 001.09-1.03l-4.25-4.5a.75.75 0 00-1.09 0l-4.25 4.5a.75.75 0 101.09 1.03L9.25 4.636v8.614z"
        ></path>
        <path
          d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"
        ></path></svg
    ></span>
  </button>
</template>

<script>
import { getFileUrlPostUpload } from '@/api/apis'
export default {
  emits: ['update:fileUploading', 'update:filePublicUrl'],
  props: {
    id: {
      type: String,
      require: true
    },
    fileUploading: null,
    filePublicUrl: null
  },
  computed: {
    fileUploadingBind: {
      get() {
        return this.fileUploading
      },
      set(val) {
        this.$emit('update:fileUploading', val)
      }
    },
    filePublicUrlBind: {
      get() {
        return this.filePublicUrl
      },
      set(val) {
        this.$emit('update:filePublicUrl', val)
      }
    }
  },
  methods: {
    triggerFileUpload() {
      document.getElementById(this.id).click()
    },
    async uploadFile(event) {
      this.fileUploadingBind = true
      const file = event.target.files[0]
      const resp = await getFileUrlPostUpload(file)
      if (resp.success) {
        this.filePublicUrlBind = resp.data.href
      }
      this.fileUploadingBind = false
    }
  }
}
</script>
