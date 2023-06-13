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
            Sign up to create your account
          </h1>

          <form class="space-y-4 md:space-y-6" v-if="stage == 1" @submit.prevent="moveToNextStage">
            <div>
              <label
                for="username"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Enter Your UserName
              </label>
              <input
                type="text"
                name="username"
                id="username"
                v-model="userName"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="baroiTushar"
              />
              <div class="pb-1 pt-1 text-sm text-gray-500">
                username will be used to identify your website
              </div>
              <div class="pb-1" v-if="userName.length > 0">
                <div v-if="checkingUserNameStatus" class="text-sm text-gray-500">
                  checking username ...
                </div>
                <div
                  class="text-sm"
                  :class="[
                    { 'text-green-600': userNameIsValid },
                    { 'text-red-500': !userNameIsValid }
                  ]"
                  v-else
                >
                  {{ userNameIsValid ? 'username is valid' : 'username already exists' }}
                </div>
              </div>
            </div>
            <div>
              <label
                for="fullname"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Enter You Name</label
              >
              <input
                type="text"
                name="fullname"
                id="fullname"
                v-model="fullName"
                class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Tushar Baroi"
              />
            </div>
            <button
              type="submit"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-blue-300 dark:disabled:bg-blue-300"
              :disabled="!nextStageEnabled()"
            >
              Next
              <svg
                fill="currentColor"
                class="w-5 ml-1 rotate-180 inline dark:text-white"
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
            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
              Have an account yet?
              <router-link
                class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                to="/login"
                >Login</router-link
              >
            </p>
          </form>
          <form class="space-y-4 md:space-y-6" v-else @submit.prevent="signupTheUser">
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
                    class="absolute top-0 right-0 p-2.5 text-sm font-medium text-gray-500 bg-gray-50 rounded-r-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    <svg
                      v-if="confirmPasswordVisibility"
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
            <div v-if="showErrorMessage" class="text-sm text-red-600 dark:text-red-500">
              {{ errorMessage }}
            </div>
            <div class="flex items-center justify-between">
              <div class="flex items-start">
                <div class="flex items-center h-5">
                  <input
                    id="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    :checked="agreeToTerms"
                    @click="toggleSelect"
                    class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div class="ml-3 text-sm">
                  <label for="remember" class="text-gray-500 dark:text-gray-300"
                    >I agree to terms and conditions</label
                  >
                </div>
              </div>
            </div>
            <button
              type="submit"
              :disabled="!signupEnabled()"
              class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-blue-300 dark:disabled:bg-blue-300"
            >
              Sign up
            </button>
            <div>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Have an account yet?
                <router-link
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  to="/login"
                  >Login</router-link
                >
              </p>
              <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                Click on the link to read about our
                <router-link
                  class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  to="/terms-and-conditions"
                  >Terms and Conditions</router-link
                >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { debounce } from '@/utils/helpers'
import { LOGGED_IN_KEY } from '@/utils/constants'
import { setCookie } from '@/utils/cookieHelper'
import {
  login,
  signup,
  sendVerificationEmail,
  checkUserNameExsists,
  createUserDetailsLink,
  createTotalItemContentCountDocumentForNewUser
} from '@/api/apis'
export default {
  data() {
    return {
      fullName: '',
      userName: '',
      userNameIsValid: false,
      checkingUserNameStatus: false,
      stage: 1,
      passwordVisibility: false,
      confirmPasswordVisibility: false,
      email: '',
      password: '',
      confirmPassword: '',
      showErrorMessage: false,
      errorMessage: '',
      agreeToTerms: false
    }
  },
  methods: {
    moveToNextStage() {
      if (this.nextStageEnabled) {
        this.stage++
      }
    },
    toggleSelect(event) {
      this.agreeToTerms = event.target.checked
    },
    async isValidateUserName(userName) {
      let resp = await checkUserNameExsists(userName)
      if (resp.success) {
        this.userNameIsValid = false
      } else {
        this.userNameIsValid = true
      }
      this.checkingUserNameStatus = false
    },
    nextStageEnabled() {
      return this.fullName.length > 0 && this.userName.length > 0 && this.userNameIsValid
    },
    togglePasswordVisibility() {
      this.passwordVisibility = !this.passwordVisibility
    },
    toggleConfirmPasswordVisibility() {
      this.confirmPasswordVisibility = !this.confirmPasswordVisibility
    },
    signupEnabled() {
      return this.email.length > 0 && this.password.length > 7 && this.agreeToTerms
    },
    async signupTheUser() {
      if (this.password == this.confirmPassword && this.signupEnabled()) {
        let resp = await this.signupUser()
        if (resp.success) {
          resp = await this.loginUser()
        }
        if (resp.success) {
          resp = await this.createUserName()
        }
        if (resp.success) {
          this.createContentCountsDocuments()
          this.$router.push('/dashboard')
        } else {
          this.errorMessage = resp.error.message
          this.showErrorMessage = true
        }
      } else {
        this.errorMessage = 'Passwords Must Match'
        this.showErrorMessage = true
      }
    },
    async loginUser() {
      let resp = await login(this.email, this.password)
      if (resp.success) {
        const res = resp.data
        this.$store.dispatch('auth/saveUserId', res.userId)
        setCookie(LOGGED_IN_KEY, 1, res.expire)
      }
      return resp
    },
    async signupUser() {
      let resp = await signup(this.email, this.password, this.fullName)
      if (resp.success) {
        const res = resp.data
        this.$store.dispatch('auth/saveSingupData', {
          email: this.user,
          uid: res.$id,
          isVerified: res.emailVerification
        })
      }
      return resp
    },
    async verifyEmail() {
      let resp = await sendVerificationEmail('http://localhost:5173/verify-email')
      if (resp.success) {
        this.$router.push('/verification-link-sent')
      }
    },
    async createUserName() {
      let resp = await createUserDetailsLink(this.userName)
      if (resp.success) {
        this.$store.dispatch('auth/saveUserName', this.userName)
      }
      return resp
    },
    createContentCountsDocuments() {
      createTotalItemContentCountDocumentForNewUser()
    }
  },
  created() {
    this.validateUserName = debounce(function (userName) {
      return this.isValidateUserName(userName)
    })
  },
  watch: {
    userName: function (new_value, old_value) {
      this.checkingUserNameStatus = true
      this.validateUserName(new_value)
    }
  }
}
</script>
