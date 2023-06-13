<template>
  <section class="p-4 md:ml-64 h-auto pt-20 min-h-screen">
    <div
      class="flex flex-col items-center justify-center gap-8"
      style="height: calc(100vh - 200px)"
    >
      <h1
        class="text-xl font-medium leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white"
      >
        Account Details
      </h1>
      <div class="pb-8">
        <img
          class="rounded-full w-40 h-40 border"
          :src="storeImageLink ? storeImageLink : imageLink"
          alt="image description"
        />
      </div>
      <form @submit.prevent>
        <div class="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              for="user_name"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >UserName</label
            >
            <input
              type="text"
              name="user_name"
              id="user_name"
              v-model="userName"
              :disabled="!editMode"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="John"
              required
            />
            <div class="text-sm pt-1" v-if="chageLog.get('userName') != userName">
              <div v-if="checkingUserNameStatus" class="text-sm text-gray-500">
                checking username ....
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
            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Name</label
            >
            <input
              type="text"
              name="name"
              id="name"
              v-model="name"
              :disabled="!editMode"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Doe"
              required
            />
          </div>
        </div>
        <div class="mb-6">
          <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >Email</label
          >
          <input
            type="email"
            id="email"
            name="email"
            v-model="email"
            :disabled="!editMode"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="john.doe@company.com"
          />
        </div>
        <div class="pb-4" v-if="editMode && chageLog.get('email') != email">
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
        <div class="flex justify-center items-center" v-if="!editMode">
          <button
            @click="toggleEditMode"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Edit Details
          </button>
        </div>
        <div class="flex justify-between items-center" v-else>
          <button
            @click="toggleEditMode"
            class="inline-flex items-center px-3 py-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Cancel
          </button>
          <button
            @click="submitChange"
            :disabled="!enableSubmit()"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:bg-blue-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import { debounce } from '@/utils/helpers'
import { updateUserSettings, checkUserNameExsists } from '@/api/apis'
import defaultImage from '@/assets/images/avatar.jpg'
export default {
  data() {
    return {
      editMode: false,
      userName: this.uName,
      name: '',
      email: '',
      password: '',
      passwordVisibility: false,
      chageLog: new Map(),
      checkingUserNameStatus: false,
      userNameIsValid: true,
      imageLink: defaultImage
    }
  },
  computed: {
    ...mapGetters({
      storeUserName: 'auth/getUserName',
      storeEmail: 'auth/getEmail',
      storeName: 'auth/getName',
      storeImageLink: 'auth/getAvatar'
    })
  },
  methods: {
    enableSubmit() {
      const payload = this.generatePayload()
      let result = true
      if (payload.userName) {
        result = result && this.userNameIsValid
      }
      if (payload.name) {
        result = result && true
      }
      if (payload.email) {
        result = result && this.password.length > 7
      }
      return result
    },
    generatePayload() {
      return {
        userName: this.chageLog.get('userName') == this.userName ? undefined : this.userName,
        name: this.chageLog.get('name') == this.name ? undefined : this.name,
        email: this.chageLog.get('email') == this.email ? undefined : this.email,
        password: this.chageLog.get('email') == this.email ? undefined : this.password
      }
    },
    toggleEditMode() {
      this.editMode = !this.editMode
    },
    togglePasswordVisibility() {
      this.passwordVisibility = !this.passwordVisibility
    },
    setChangeLog() {
      this.chageLog.set('userName', this.userName)
      this.chageLog.set('name', this.name)
      this.chageLog.set('email', this.email)
    },
    initialize() {
      this.userName = this.storeUserName
      this.name = this.storeName
      this.email = this.storeEmail
      this.setChangeLog()
    },
    async submitChange() {
      const payload = this.generatePayload()
      let resp = await updateUserSettings(payload)
      if (resp.success) {
        this.toggleEditMode()
      }
    },
    async isValidateUserName(userName) {
      // validation logic goes here
      let resp = await checkUserNameExsists(userName)
      if (resp.success) {
        this.userNameIsValid = false
      } else {
        this.userNameIsValid = true
      }
      if (this.storeUserName == this.userName) {
        this.userNameIsValid = true
      }
      this.checkingUserNameStatus = false
    }
  },
  mounted() {
    this.initialize()
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
