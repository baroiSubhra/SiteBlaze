<template>
  <section class="p-4 md:ml-64 h-auto pt-20 min-h-screen">
    <div
      class="flex flex-col items-center justify-center gap-8"
      style="height: calc(100vh - 200px)"
    >
      <h1
        class="text-xl font-medium leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
      >
        Change Your Password
      </h1>
      <form class="w-full md:w-4/6 space-y-4 md:space-y-6" @submit.prevent="submitChange">
        <div>
          <label
            for="old-password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Password</label
          >
          <div class="flex">
            <div class="relative w-full">
              <input
                :type="oldPasswordVisibility ? 'text' : 'password'"
                name="old-password"
                id="old-password"
                placeholder="••••••••"
                v-model="oldPassword"
                autocomplete="on"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <div
                @click="toggleOldPasswordVisibility"
                class="absolute top-0 right-0 p-2.5 password-wrap text-sm font-medium text-gray-500 bg-gray-50 rounded-r-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  v-if="oldPasswordVisibility"
                  class="w-5 h-5"
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
                  class="w-5 h-5"
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
        <div>
          <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
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
                class="absolute top-0 right-0 p-2.5 password-wrap text-sm font-medium text-gray-500 bg-gray-50 rounded-r-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  v-if="passwordVisibility"
                  class="w-5 h-5"
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
                  class="w-5 h-5"
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
        <div>
          <label
            for="confrim-password"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Confirm Password</label
          >
          <div class="flex">
            <div class="relative w-full">
              <input
                :type="confirmPasswordVisibility ? 'text' : 'password'"
                name="confrim-password"
                id="confrim-password"
                v-model="confirmPassword"
                placeholder="••••••••"
                autocomplete="on"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
              <div
                @click="toggleConfirmPasswordVisibility"
                class="absolute top-0 right-0 password-wrap p-2.5 text-sm font-medium text-gray-500 bg-gray-50 rounded-r-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  v-if="confirmPasswordVisibility"
                  class="w-5 h-5"
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
                  class="w-5 h-5"
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
        <div v-if="showError" class="text-sm text-red-600 dark:text-red-500">
          {{ errorText }}
        </div>
        <div class="flex justify-center items-center pt-4">
          <button
            type="submit"
            :disabled="!inputsAreValid()"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-blue-300"
          >
            <span v-if="!changingPassword">Change Password</span>
            <Spinner v-else />
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import Spinner from '@/components/Spinner.vue'
import { changePassword } from '@/api/apis'
export default {
  components: {
    Spinner
  },
  data() {
    return {
      oldPassword: '',
      password: '',
      confirmPassword: '',
      oldPasswordVisibility: false,
      passwordVisibility: false,
      confirmPasswordVisibility: false,
      showError: false,
      errorText: '',
      changingPassword: false
    }
  },
  methods: {
    inputsAreValid() {
      return (
        this.oldPassword.length > 7 &&
        this.password.length > 7 &&
        this.confirmPassword.length > 7 &&
        this.password == this.confirmPassword
      )
    },
    resetData() {
      this.oldPassword = ''
      this.password = ''
      this.confirmPassword = ''
    },
    togglePasswordVisibility() {
      this.passwordVisibility = !this.passwordVisibility
    },
    toggleConfirmPasswordVisibility() {
      this.confirmPasswordVisibility = !this.confirmPasswordVisibility
    },
    toggleOldPasswordVisibility() {
      this.oldPasswordVisibility = !this.oldPasswordVisibility
    },
    async submitChange() {
      this.changingPassword = true
      let resp = await changePassword(this.oldPassword, this.password)
      if (resp.success) {
        this.resetData()
      } else {
        this.showError = true
        this.errorText = resp.error.message
      }
      this.changingPassword = false
    }
  }
}
</script>
