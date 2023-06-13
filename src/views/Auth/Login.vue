<template>
  <section class="bg-gray-50 dark:bg-gray-900 min-h-screen">
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
            class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
          >
            Login to your account
          </h1>
          <form class="space-y-4 md:space-y-6" @submit.prevent="login">
            <div>
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Your email</label
              >
              <input
                type="email"
                name="email"
                id="email"
                v-model="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@company.com"
              />
            </div>
            <div>
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Password</label
              >
              <div class="flex">
                <div class="relative w-full">
                  <input
                    :type="passwordVisibility ? 'text' : 'password'"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    v-model="password"
                    autocomplete="on"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                  <div
                    @click="togglePasswordVisibility"
                    class="absolute top-0 right-0 p-2.5 text-sm font-medium text-gray-500 bg-gray-50 rounded-r-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      v-if="passwordVisibility"
                      class="w-5 h-5 dark:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M3.28 2.22a.75.75 0 00-1.06 1.06l14.5 14.5a.75.75 0 101.06-1.06l-1.745-1.745a10.029 10.029 0 003.3-4.38 1.651 1.651 0 000-1.185A10.004 10.004 0 009.999 3a9.956 9.956 0 00-4.744 1.194L3.28 2.22zM7.752 6.69l1.092 1.092a2.5 2.5 0 013.374 3.373l1.091 1.092a4 4 0 00-5.557-5.557z"
                      ></path>
                      <path
                        d="M10.748 13.93l2.523 2.523a9.987 9.987 0 01-3.27.547c-4.258 0-7.894-2.66-9.337-6.41a1.651 1.651 0 010-1.186A10.007 10.007 0 012.839 6.02L6.07 9.252a4 4 0 004.678 4.678z"
                      ></path>
                    </svg>
                    <svg
                      v-else
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      class="w-5 h-5 dark:text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M10 12.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z"></path>
                      <path
                        clip-rule="evenodd"
                        fill-rule="evenodd"
                        d="M.664 10.59a1.651 1.651 0 010-1.186A10.004 10.004 0 0110 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0110 17c-4.257 0-7.893-2.66-9.336-6.41zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <button
              type="submit"
              class="pt-4 w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-blue-300 dark:disabled:bg-blue-300"
            >
              Login
            </button>
            <div v-if="failedToLogin" class="text-sm text-red-600 dark:text-red-500">
              Unable to login make sure your email and password combination is correct
            </div>

            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Don't have an account yet?
              <router-link
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                to="/signup"
                >Sign up</router-link
              >
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { LOGGED_IN_KEY } from '@/utils/constants'
import { setCookie } from '@/utils/cookieHelper'
import { login } from '@/api/apis'
export default {
  data() {
    return {
      email: '',
      password: '',
      failedToLogin: false,
      passwordVisibility: false
    }
  },
  methods: {
    async login() {
      let resp = await login(this.email, this.password)
      if (resp.success) {
        resp = resp.data
        this.$store.dispatch('auth/saveUserId', resp.userId)
        setCookie(LOGGED_IN_KEY, 1, resp.expire)
        this.$router.push('/dashboard')
      } else {
        this.failedToLogin = true
      }
    },
    togglePasswordVisibility() {
      this.passwordVisibility = !this.passwordVisibility
    }
  }
}
</script>
