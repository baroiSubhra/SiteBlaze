<template>
  <section class="p-4 rounded-lg md:ml-64 h-auto pt-20 min-h-screen">
    <div class="flex flex-col items-center justify-center gap-8">
      <div class="grid grid-cols-4 w-4/5">
        <div class="col-span-full pb-8">
          <div class="space-y-4 md:space-y-6">
            <h1
              class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center"
            >
              Please Enter CTA Details
            </h1>
            <div class="space-y-4 md:space-y-6">
              <div>
                <label
                  for="input1"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Enter Input 1</label
                >
                <input
                  type="text"
                  name="input1"
                  id="input1"
                  v-model="input1"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Noteworthy technology acquisitions 2021"
                />
              </div>
              <div>
                <label
                  for="input2"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Enter Input 2</label
                >
                <input
                  type="text"
                  name="input2"
                  id="input2"
                  v-model="input2"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Noteworthy technology acquisitions 2021"
                />
              </div>
              <div>
                <label
                  for="input3"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Enter Input 3
                </label>
                <textarea
                  name="input3"
                  id="input3"
                  v-model="input3"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Write your thoughts here..."
                ></textarea>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-full lg:col-span-4 flex justify-between pb-4">
          <div>
            <router-link
              to="/dashboard/cms/cta"
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
            </router-link>
          </div>
          <div>
            <button
              @click="submitData"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-blue-300"
            >
              Save
              <svg
                v-if="!submiting"
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
              <Spinner v-else />
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { editCTAQuerry } from '@/api/apis'
import Spinner from '@/components/Spinner.vue'
export default {
  components: {
    Spinner
  },
  data() {
    return {
      input1: '',
      input2: '',
      input3: '',
      submiting: false
    }
  },
  computed: {
    ...mapGetters({
      isEditMode: 'ctaQuerry/getIsEditMode',
      storeInput1: 'ctaQuerry/getInput1',
      storeInput2: 'ctaQuerry/getInput2',
      storeInput3: 'ctaQuerry/getInput3',
      storeDocumentId: 'ctaQuerry/getDocumentId'
    })
  },
  methods: {
    generatePayload() {
      return {
        input1: this.input1,
        input2: this.input2,
        input3: this.input3
      }
    },
    async submitData() {
      const payload = this.generatePayload()
      this.submiting = true
      const resp = await editCTAQuerry(this.storeDocumentId, payload)
      if (resp.success) {
        this.$router.push('/dashboard/cms/cta')
      }
      this.submiting = false
    },
    initializeWithStoreStatesInEditMode() {
      if (this.isEditMode) {
        this.input1 = this.storeInput1
        this.input2 = this.storeInput2
        this.input3 = this.storeInput3
      }
    }
  },
  mounted() {
    this.initializeWithStoreStatesInEditMode()
  },
  beforeUnmount() {
    this.$store.dispatch('ctaQuerry/resetAllData')
  }
}
</script>
