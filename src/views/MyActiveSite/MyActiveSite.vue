<template>
  <section class="p-4 md:ml-64 h-auto pt-20 min-h-screen">
    <div class="rounded-lg mb-4">
      <div v-if="!isEditMode">
        <div class="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
          Active Site
        </div>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Following is you active portfolio, this is visible to the world
        </p>
        <template v-if="loadingData">
          <SpinnerVue />
        </template>
        <template v-else>
          <template v-if="initialFetch && !dataExists">
            <NoResults />
          </template>
          <template v-else
            ><div class="flex justify-between items-center mb-4 mt-4">
              <button
                @click="showDeleteConfirmation"
                class="inline-flex items-center px-3 py-2 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Delete

                <svg
                  fill="currentColor"
                  class="w-4 ml-1 -mr-1"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                  ></path>
                </svg>
              </button>

              <div class="flex gap-4">
                <button
                  @click="openSite"
                  class="inline-flex items-center px-3 py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  View
                  <svg
                    fill="currentColor"
                    class="w-4 h-4 ml-2 -mr-1"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      clip-rule="evenodd"
                      fill-rule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    ></path>
                  </svg>
                </button>
                <button
                  @click="showToggleActivationConfirmation"
                  class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  {{ isActiveSite ? 'Deactivate' : 'Activate' }}
                </button>
                <button
                  @click="toggleEditMode"
                  class="inline-flex items-center px-3 py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                >
                  Edit Site Settings
                  <svg
                    fill="currentColor"
                    class="w-4 ml-1 -mr-1"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="grid grid-cols-1 mb-4 mt-4">
              <PortfolioViewerVue :src="portfolioLink" /></div
          ></template>
        </template>
      </div>
      <div v-else>
        <template v-if="loadingData">
          <SpinnerVue />
        </template>
        <template v-else>
          <div class="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
            Edit Active Protfolio
          </div>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Following is you active portfolio, you can make changes using the site builder given
            below, and see the preview, once your happy hit the <b>save</b> button and let the world
            see the changes.
          </p>
          <div class="flex justify-between mb-4 mt-4">
            <button
              @click="toggleEditMode"
              class="inline-flex items-center px-3 py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
            >
              <svg
                fill="currentColor"
                class="w-4 mr-1"
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
              Cancel
            </button>
            <button
              @click="saveChanges"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Save Changes
              <svg
                v-if="!saveInProgress"
                fill="currentColor"
                class="w-4 ml-1 -mr-1"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                  d="M10 2c-1.716 0-3.408.106-5.07.31C3.806 2.45 3 3.414 3 4.517V17.25a.75.75 0 001.075.676L10 15.082l5.925 2.844A.75.75 0 0017 17.25V4.517c0-1.103-.806-2.068-1.93-2.207A41.403 41.403 0 0010 2z"
                ></path>
              </svg>
              <span v-else>
                <SpinnerVue />
              </span>
            </button>
          </div>
          <div class="grid grid-cols-1 mb-4 mt-4">
            <PortfolioViewerVue :src="templateLink" />
          </div>
          <div>
            <Accordion v-model="data" />
          </div>
        </template>
      </div>
    </div>
  </section>

  <Modal :id="modalId">
    <div
      class="py-6 leading-tight tracking-tight text-gray-800 text-xl font-medium dark:text-white text-center"
    >
      <div v-if="showModalSpinner">
        <SpinnerVue />
      </div>
      <div v-else>
        {{ modalText }}
      </div>
    </div>
    <div class="flex gap-4 justify-center items-center">
      <a
        @click="hideModal"
        class="inline-flex items-center px-3 py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
      >
        No
      </a>
      <a
        @click="modalConfirmation"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {{ modalAffirmText }}
      </a>
    </div>
  </Modal>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'
import {
  getActivePortfolio,
  getProtfolioDocument,
  deletePortfolio,
  toggleSiteActiveStatus,
  updatePortfolio
} from '@/api/apis'
import { openModal, closeModal } from '@/utils/modalFunctions'
import { templateDetails } from '@/utils/templateUtil'
import { LOCALSTORAGE_KEY, EDITMODE_LOCALSTORAGE_KEY } from '@/utils/constants'
import ToggleVue from '@/components/Toggle.vue'
import Accordion from '@/components/EditAccordion.vue'
import PortfolioViewerVue from '@/components/PortfolioViewer.vue'
import Tab from '@/components/Tab.vue'
import SpinnerVue from '@/components/Spinner.vue'
import Modal from '@/components/Modal.vue'
export default {
  components: {
    ToggleVue,
    Accordion,
    PortfolioViewerVue,
    Tab,
    SpinnerVue,
    Modal,
    NoResults: defineAsyncComponent(() => import('@/components/NoResults.vue'))
  },
  data() {
    return {
      loadingData: false,
      isEditMode: false,
      templateLink: '',
      data: {},
      managePortfolio: this.$route.name == 'manage-portfolio',
      docId: this.$route.params.id,
      portfolioLink: '',
      isActiveSite: false,
      modalId: 'manage-portfolio-modal',
      modalText: '',
      showModalSpinner: false,
      saveInProgress: false,
      modalAffirmText: 'Yes',
      DELETE_MODAL_TEXT: 'Are you sure you want to delete this template?',
      ACTIVATE_MODAL_TEXT: 'Are you sure you want to ACTIVATE this template?',
      DEACTIVATE_MODAL_TEXT: 'Are you sure you want to DEACTIVATE this template?',
      SAVING_FAILED: 'Sorry we could not save your changes, please try again later',
      initialFetch: false,
      dataExists: false
    }
  },
  computed: {
    ...mapGetters({
      userName: 'auth/getUserName'
    }),
    activePortfolioLink() {
      return '/portfolio/' + this.userName
    }
  },
  methods: {
    toggleEditMode() {
      this.isEditMode = !this.isEditMode
      window.localStorage.setItem(EDITMODE_LOCALSTORAGE_KEY, this.isEditMode)
      if (this.isEditMode) {
        this.setLocalStorage()
      }
    },
    setLocalStorage() {
      window.localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(this.data))
    },
    showDeleteConfirmation() {
      this.modalText = this.DELETE_MODAL_TEXT
      this.modalAffirmText = 'YES'
      openModal(this.modalId)
    },
    showToggleActivationConfirmation() {
      this.modalText = this.isActiveSite ? this.DEACTIVATE_MODAL_TEXT : this.ACTIVATE_MODAL_TEXT
      this.modalAffirmText = 'YES'
      openModal(this.modalId)
    },
    hideModal() {
      closeModal(this.modalId)
    },
    modalConfirmation() {
      if (this.modalText == this.DELETE_MODAL_TEXT) {
        this.deleteCurrentPortfolio()
      } else if (this.modalText == this.SAVING_FAILED) {
        this.hideModal()
      } else {
        this.toggleActiveSite()
      }
    },
    async deleteCurrentPortfolio() {
      this.showModalSpinner = true
      const resp = await deletePortfolio(this.docId)
      if (resp.success) {
        this.$router.replace('/dashboard')
      }
      this.showModalSpinner = false
    },
    async toggleActiveSite() {
      this.showModalSpinner = true
      const resp = await toggleSiteActiveStatus(this.docId, this.isActiveSite)
      if (resp.success) {
        this.isActiveSite = !this.isActiveSite
        this.hideModal()
      }
      this.showModalSpinner = false
    },
    initialize() {
      if (this.managePortfolio && this.docId) {
        this.getPortfolioBasedOnId()
      } else {
        this.getAndSetActivePortFolioData()
      }
    },
    async getPortfolioBasedOnId() {
      this.loadingData = true
      let resp = await getProtfolioDocument(this.docId)
      if (resp.success) {
        resp = resp.data
        const tid = resp.tid
        this.isActiveSite = resp.active
        const content = JSON.parse(resp.content)
        this.templateLink = templateDetails.find((el) => el.tid == tid).templateLink
        this.data = content
        this.dataExists = true
      } else {
        this.dataExists = false
      }
      const historyUrl = '/history/' + this.userName + '/' + this.docId
      this.portfolioLink = historyUrl
      if (!this.initialFetch) {
        this.initialFetch = true
      }
      this.loadingData = false
    },
    async getAndSetActivePortFolioData() {
      this.loadingData = true
      let resp = await getActivePortfolio()
      if (resp.success && resp.data.total > 0) {
        resp = resp.data.documents.shift()
        this.docId = resp.$id
        this.isActiveSite = resp.active
        const tid = resp.tid
        const content = JSON.parse(resp.content)
        this.templateLink = templateDetails.find((el) => el.tid == tid).templateLink
        this.data = content
        this.dataExists = true
      } else {
        this.dataExists = false
      }
      this.portfolioLink = this.activePortfolioLink
      if (!this.initialFetch) {
        this.initialFetch = true
      }
      this.loadingData = false
    },
    showSaveUnsuccesfulModal() {
      this.modalText = this.SAVING_FAILED
      this.modalAffirmText = 'Ok'
      openModal(this.modalId)
    },
    generateSavePortfolioPayload() {
      return {
        tid: this.tid,
        content: window.localStorage.getItem(LOCALSTORAGE_KEY)
      }
    },
    async saveChanges() {
      const payload = this.generateSavePortfolioPayload()
      this.saveInProgress = true
      let resp = await updatePortfolio(this.docId, payload)
      if (resp.success) {
        this.toggleEditMode()
      } else {
        this.showSaveUnsuccesfulModal()
      }
      this.saveInProgress = false
    },
    openSite() {
      const link = this.isActiveSite ? this.activePortfolioLink : this.portfolioLink
      window.open(link, '_blank')
    }
  },
  watch: {
    data: {
      handler: function (new_value, old_value) {
        this.setLocalStorage()
      },
      deep: true
    }
  },
  mounted() {
    window.localStorage.setItem(EDITMODE_LOCALSTORAGE_KEY, 'false')
    this.initialize()
  },
  beforeUnmount() {
    window.localStorage.setItem(EDITMODE_LOCALSTORAGE_KEY, 'false')
  }
}
</script>
