<template>
  <div class="flex w-full h-full justify-center items-center" v-if="loadingConfig">
    <SpinnerVue />
  </div>
  <div class="antialiased bg-gray-50 dark:bg-gray-900" v-else>
    <Nav />
    <Sidenav />
    <RouterView />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { getAccount, getUserNameFromUserId } from '@/api/apis'
import { EDITMODE_LOCALSTORAGE_KEY } from '@/utils/constants'
import Nav from '@/components/Nav.vue'
import Sidenav from '@/components/Sidenav.vue'
import { RouterView } from 'vue-router'
import SpinnerVue from '@/components/Spinner.vue'
export default {
  components: {
    Sidenav,
    Nav,
    SpinnerVue
  },
  data() {
    return {
      loadingConfig: true
    }
  },
  computed: {
    ...mapGetters({
      uid: 'auth/getUserId'
    })
  },
  methods: {
    async initalize() {
      this.loadingConfig = true
      await this.getUserIdAndDetails()
      if (this.uid) {
        await this.getUserName()
      }
      this.loadingConfig = false
    },
    async getUserIdAndDetails() {
      let resp = await getAccount()
      if (resp.success) {
        resp = resp.data
        const payload = {
          uid: resp.$id,
          email: resp.email,
          name: resp.name
        }
        this.$store.dispatch('auth/saveAccountData', payload)
      }
    },
    async getUserName() {
      let resp = await getUserNameFromUserId()
      if (resp.success) {
        resp = resp.data.documents.shift()
        this.$store.dispatch('auth/saveUserName', resp.$id)
      }
    }
  },
  mounted() {
    this.initalize()
    // indow.localStorage.setItem(EDITMODE_LOCALSTORAGE_KEY, 'false')
  }
}
</script>
