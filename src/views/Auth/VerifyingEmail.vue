<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <a class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
        <img class="w-8 h-8 mr-2 rounded" src="@/assets/images/siteblaze.jpg" alt="logo" />
        SiteBlaze
      </a>
      <div
        class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center"
          >
            We are verifying your email.<br />Excited to see you onboard!
          </h1>
          <div>
            <Spinner />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Spinner from '../../components/Spinner.vue'
export default {
  components: {
    Spinner
  },
  data() {
    return {
      userId: this.$route.query.userId,
      secret: this.$route.query.secret,
      disableEmailInput: true
    }
  },
  computed: {
    isInVerificationMode() {
      return this.userId && this.userId.length > 0 && this.secret && this.secret.length > 0
    }
  },
  methods: {
    onSubmit() {}
  }
}
</script>
