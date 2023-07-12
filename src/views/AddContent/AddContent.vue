<template>
  <section class="p-4 rounded-lg md:ml-64 h-auto pt-20 min-h-screen">
    <div v-if="stage == 1" class="flex flex-col items-center justify-center gap-8">
      <div class="grid grid-cols-4 w-4/5">
        <div class="col-span-full pb-8">
          <div class="space-y-4 md:space-y-6">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center"
            >
              Please Enter {{ isProject ? 'Project' : 'Blog' }} Details
            </h1>
            <div class="space-y-4 md:space-y-6">
              <div>
                <InputWithFileUploader v-model="img" id="add-content" label="Choose File" />
              </div>
              <div>
                <label
                  for="project-title"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >{{ isProject ? 'Project' : 'Blog' }} Title</label
                >
                <input
                  type="text"
                  name="project-title"
                  id="project-title"
                  v-model="title"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Noteworthy technology acquisitions 2021"
                />
              </div>
              <div>
                <label
                  for="project-abstract"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >{{ isProject ? 'Project' : 'Blog' }} Abstract</label
                >
                <textarea
                  name="project-abstract"
                  id="project-abstract"
                  v-model="abstract"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-full pb-8">
          <label
            for="project-details"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >{{ isProject ? 'Project' : 'Blog' }} Content</label
          >
          <Editor v-model="content" />
        </div>
        <div class="col-span-full lg:col-span-4 flex justify-between pb-4">
          <div>
            <a
              @click="goBackToCms"
              type="button"
              class="inline-flex text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                fill="currentColor"
                class="w-4 h-4 mr-2 -ml-1"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                ></path>
              </svg>
              Back
            </a>
          </div>
          <div>
            <button
              @click="submitDetails"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-blue-300"
              :disabled="!validStage()"
            >
              Next
              <svg
                fill="currentColor"
                class="w-4 h-4 ml-2 rotate-180"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="stage == 2">
      <div>
        <CardView :img="img" :title="title" :abstract="abstract" />
        <div class="col-span-full lg:col-span-4 flex justify-between pb-4">
          <div>
            <a
              @click="moveToPreviousStage"
              type="button"
              class="inline-flex text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-3 py-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                fill="currentColor"
                class="w-4 h-4 mr-2 -ml-1"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                ></path>
              </svg>
              Back
            </a>
          </div>
          <div>
            <button
              @click="submitDetails"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-blue-300"
              :disabled="!validStage()"
            >
              Next
              <svg
                fill="currentColor"
                class="w-4 h-4 ml-2 rotate-180"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Preview
        @goback="moveToPreviousStage"
        :img="img"
        :title="title"
        :abstract="abstract"
        :content="content"
        :isEditMode="isEditMode"
        :documentId="storeDocumentId"
        :previousStatus="storeStatus"
      />
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { PROJECT_CONTENT_ADD } from '@/utils/constants'
import Card from '@/components/CmsCard.vue'
import Editor from '@/components/Editor/Editor.vue'
import Preview from './ContentPreview.vue'
import InputWithFileUploader from '../../components/FileUploader/InputWithFileUploader.vue'
import CardView from './CardView.vue'
export default {
  components: {
    Card,
    Editor,
    Preview,
    InputWithFileUploader,
    CardView
  },
  data() {
    return {
      stage: 1,
      img: '',
      title: '',
      abstract: '',
      content: '',
      isProject: this.$route.name == PROJECT_CONTENT_ADD
    }
  },
  computed: {
    ...mapGetters({
      isEditMode: 'addContent/getIsEditMode',
      storeImage: 'addContent/getImg',
      storeTitle: 'addContent/getTitle',
      storeAbstract: 'addContent/getAbstract',
      storeContent: 'addContent/getContent',
      storeDocumentId: 'addContent/getDocumentId',
      storeStatus: 'addContent/getStatus'
    })
  },
  methods: {
    submitDetails() {
      this.moveToNextStage()
    },
    moveToNextStage() {
      this.stage++
    },
    moveToPreviousStage() {
      this.stage--
    },
    validStage() {
      return this.title.length > 0 && this.content.length > 0 && this.abstract.length > 0
    },
    goBackToCms() {
      let finalRoute = this.$route.fullPath.split('/')
      finalRoute.pop()
      finalRoute = finalRoute.join('/')
      this.$router.push(finalRoute)
    },
    generateData() {
      return {
        img: this.img,
        title: this.title,
        abstract: this.abstract,
        details: this.details
      }
    },
    initializeWithStoreStatesInEditMode() {
      if (this.isEditMode) {
        this.img = this.storeImage
        this.title = this.storeTitle
        this.abstract = this.storeAbstract
        this.content = this.storeContent
      }
    }
  },
  mounted() {
    this.initializeWithStoreStatesInEditMode()
  },
  beforeUnmount() {
    this.$store.dispatch('addContent/resetAllData')
  }
}
</script>
