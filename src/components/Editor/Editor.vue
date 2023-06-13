<template>
  <QuillEditor
    style="height: 300px; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px"
    :modules="modules"
    theme="snow"
    toolbar="full"
    contentType="html"
    v-model:content="bindValue"
  />
</template>

<script>
import { getFileUrlPostUpload } from '@/api/apis'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import ImageUploader from 'quill-image-uploader'
export default {
  components: {
    QuillEditor
  },
  props: { modelValue: null },
  data() {
    return {
      modules: {
        name: 'imageUploader',
        module: ImageUploader,
        options: {
          upload: async (file) => {
            let response = await getFileUrlPostUpload(file)
            const apiResult = response.success
            return new Promise((resolve, reject) => {
              if (apiResult) {
                const url = response.data.href
                resolve(url)
              } else {
                reject('Error in uploading file')
              }
            })
          }
        }
      }
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
  }
}
</script>
