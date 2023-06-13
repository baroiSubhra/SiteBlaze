<template>
  <section class="p-4 md:ml-64 h-auto pt-20 min-h-screen">
    <div class="rounded-lg mb-4">
      <div class="text-2xl font-medium tracking-tight text-gray-900 dark:text-white">
        Templates Store
      </div>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
        This is the list of all templates available for you to choose and customize,each template is
        completely responsive
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 mb-4 mt-4">
        <template v-for="(data, index) in templateData" :key="index">
          <Card
            :image="data.img"
            :title="data.title"
            :details="data.details"
            leftButtonText="View"
            rightButtonText="Customize"
            :leftButtonAction="data.leftButtonAction"
            :rightButtonAction="data.rightButtonAction"
          />
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
import { templateDetails } from '@/utils/templateUtil'
import Card from '@/components/Card.vue'
import Modal from '@/components/Modal.vue'
import { openModal, closeModal } from '@/utils/modalFunctions'
import { addTemplateToProfile } from '@/api/apis'
import SpinnerVue from '@/components/Spinner.vue'
export default {
  components: {
    Card,
    Modal,
    SpinnerVue
  },
  data() {
    return {
      selectedTid: '',
      modalId: 'add-to-portfolio',
      // templateExists: false,
      modalText: '',
      modalAffirmText: 'Yes',
      showModalSpinner: false,
      NEW_PORTFOLIO_ADD_TEXT:
        'Are you sure you want to add this to your portfolio for customization ?',
      LIMIT_REACHED:
        'You have reached the limit of 10 maximum portfolios, Please delete a few to add more',
      templateData: templateDetails.map((el) => {
        return {
          ...el,
          rightButtonAction: () => {
            this.showModal(el.tid)
          }
        }
      })
    }
  },
  methods: {
    routeToPage(route) {
      this.$router.push(route)
    },
    publishTemplate() {
      this.routeToPage('/dashboard')
    },
    showModal(tid) {
      console.log(tid)
      this.selectedTid = tid
      this.modalText = this.NEW_PORTFOLIO_ADD_TEXT
      this.modalAffirmText = 'Yes'
      openModal(this.modalId)
    },
    hideModal() {
      closeModal(this.modalId)
    },
    modalConfirmation() {
      if (this.modalText == this.LIMIT_REACHED) {
        this.hideModal()
      } else {
        this.addTemplateToPortfolios()
      }
    },
    showErrorModal() {
      this.modalText = this.LIMIT_REACHED
      this.modalAffirmText = 'OK'
      openModal(this.modalId)
    },
    generatePayload(tid) {
      let content = templateDetails.find((el) => el.tid == tid).content
      content = JSON.stringify(content)
      return {
        tid,
        content
      }
    },
    async addTemplateToPortfolios() {
      const paylaod = this.generatePayload(String(this.selectedTid))
      this.templateExists = true
      this.showModalSpinner = true
      let resp = await addTemplateToProfile(paylaod)
      this.hideModal()
      this.showModalSpinner = false
      if (resp.success) {
        this.$router.push('/dashboard')
      } else {
        this.showErrorModal()
      }
    }
  }
}
</script>
