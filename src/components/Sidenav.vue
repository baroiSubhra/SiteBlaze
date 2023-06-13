<template>
  <aside
    class="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
    id="drawer-navigation"
  >
    <div class="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
      <ul class="space-y-2">
        <li @click="routeTo(routes.get(ALL_PORTFOLIO))">
          <a
            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            :class="{
              'active-side-nav-link': this.$route.fullPath == routes.get(ALL_PORTFOLIO)
            }"
          >
            <svg
              class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              :class="{
                'text-gray-900 dark:text-white': this.$route.fullPath == routes.get(ALL_PORTFOLIO)
              }"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z"
              ></path>
              <path
                d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z"
              ></path>
            </svg>
            <span class="ml-3">My Templates</span>
          </a>
        </li>
        <li @click="routeTo(routes.get(ACTIVE_PORTFOLIO))">
          <button
            type="button"
            class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            :class="{
              'active-side-nav-link': this.$route.fullPath == routes.get(ACTIVE_PORTFOLIO)
            }"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              :class="{
                'text-gray-900 dark:text-white':
                  this.$route.fullPath == routes.get(ACTIVE_PORTFOLIO)
              }"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="flex-1 ml-3 text-left whitespace-nowrap">My Active Site</span>
          </button>
        </li>
        <li @click="routeTo(routes.get(TEMPLATE))">
          <a
            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            :class="{
              'active-side-nav-link': this.$route.fullPath == routes.get(TEMPLATE)
            }"
          >
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              :class="{
                'text-gray-900 dark:text-white': this.$route.fullPath == routes.get(TEMPLATE)
              }"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span class="flex-1 ml-3 text-left whitespace-nowrap">Template Store</span>
          </a>
        </li>
        <li @click="routeTo(routes.get(PROJECTS))">
          <button
            type="button"
            class="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            :class="{
              'active-side-nav-link': this.$route.fullPath == routes.get(PROJECTS)
            }"
          >
            <svg
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
              :class="{
                'text-gray-900 dark:text-white': this.$route.fullPath == routes.get(PROJECTS)
              }"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M3 3.5A1.5 1.5 0 014.5 2h6.879a1.5 1.5 0 011.06.44l4.122 4.12A1.5 1.5 0 0117 7.622V16.5a1.5 1.5 0 01-1.5 1.5h-11A1.5 1.5 0 013 16.5v-13zM13.25 9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75zm-6.5 4a.75.75 0 01.75.75v.5a.75.75 0 01-1.5 0v-.5a.75.75 0 01.75-.75zm4-1.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z"
              ></path>
            </svg>
            <span class="flex-1 ml-3 text-left whitespace-nowrap">Projects</span>
          </button>
        </li>
        <li @click="routeTo(routes.get(BLOGS))">
          <a
            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            :class="{
              'active-side-nav-link': this.$route.fullPath == routes.get(BLOGS)
            }"
          >
            <svg
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              :class="{
                'text-gray-900 dark:text-white': this.$route.fullPath == routes.get(BLOGS)
              }"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M2 3.5A1.5 1.5 0 013.5 2h9A1.5 1.5 0 0114 3.5v11.75A2.75 2.75 0 0016.75 18h-12A2.75 2.75 0 012 15.25V3.5zm3.75 7a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zm0 3a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-4.5zM5 5.75A.75.75 0 015.75 5h4.5a.75.75 0 01.75.75v2.5a.75.75 0 01-.75.75h-4.5A.75.75 0 015 8.25v-2.5z"
              ></path>
              <path d="M16.5 6.5h-1v8.75a1.25 1.25 0 102.5 0V8a1.5 1.5 0 00-1.5-1.5z"></path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Blogs</span>
          </a>
        </li>
        <li @click="routeTo(routes.get(CTA))">
          <a
            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
            :class="{
              'active-side-nav-link': this.$route.fullPath == routes.get(CTA)
            }"
          >
            <svg
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              :class="{
                'text-gray-900 dark:text-white': this.$route.fullPath == routes.get(CTA)
              }"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M6.111 11.89A5.5 5.5 0 1115.501 8 .75.75 0 1017 8a7 7 0 10-11.95 4.95.75.75 0 001.06-1.06zm2.121-5.658a2.5 2.5 0 000 3.536.75.75 0 11-1.06 1.06A4 4 0 1114 8a.75.75 0 01-1.5 0 2.5 2.5 0 00-4.268-1.768zm2.534 1.279a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z"
              ></path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">CTA Querries</span>
          </a>
        </li>
      </ul>
      <ul class="pt-5 mt-5 space-y-2 border-t border-gray-200 dark:border-gray-700">
        <li @click="routeTo(routes.get(SETTINGS))">
          <a
            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            :class="{
              'active-side-nav-link': this.$route.fullPath == routes.get(SETTINGS)
            }"
          >
            <svg
              fill="currentColor"
              :class="{
                'text-gray-900 dark:text-white': this.$route.fullPath == routes.get(SETTINGS)
              }"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
              ></path>
            </svg>
            <span class="ml-3">Account Details</span>
          </a>
        </li>
        <li @click="routeTo(routes.get(CHANGE_PASSWORD))">
          <a
            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group"
            :class="{
              'active-side-nav-link': this.$route.fullPath == routes.get(CHANGE_PASSWORD)
            }"
          >
            <svg
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              :class="{
                'text-gray-900 dark:text-white': this.$route.fullPath == routes.get(CHANGE_PASSWORD)
              }"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M8 7a5 5 0 113.61 4.804l-1.903 1.903A1 1 0 019 14H8v1a1 1 0 01-1 1H6v1a1 1 0 01-1 1H3a1 1 0 01-1-1v-2a1 1 0 01.293-.707L8.196 8.39A5.002 5.002 0 018 7zm5-3a.75.75 0 000 1.5A1.5 1.5 0 0114.5 7 .75.75 0 0016 7a3 3 0 00-3-3z"
              ></path>
            </svg>
            <span class="ml-3">Change Password</span>
          </a>
        </li>
        <li @click="logoutUser">
          <a
            class="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg transition duration-75 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white group cursor-pointer"
          >
            <svg
              fill="currentColor"
              class="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                clip-rule="evenodd"
                fill-rule="evenodd"
                d="M10 2a.75.75 0 01.75.75v7.5a.75.75 0 01-1.5 0v-7.5A.75.75 0 0110 2zM5.404 4.343a.75.75 0 010 1.06 6.5 6.5 0 109.192 0 .75.75 0 111.06-1.06 8 8 0 11-11.313 0 .75.75 0 011.06 0z"
              ></path>
            </svg>
            <span class="ml-3">Logout</span>
          </a>
        </li>
      </ul>
    </div>
    <div
      class="hidden absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20"
    ></div>
  </aside>
</template>

<script>
import { LOGGED_IN_KEY } from '@/utils/constants'
import { deleteCookie } from '@/utils/cookieHelper'
import { logout } from '@/api/apis'
import {
  OVERVIEW,
  TEMPLATE,
  SETTINGS,
  PROJECTS,
  BLOGS,
  CHANGE_PASSWORD,
  ALL_PORTFOLIO,
  ACTIVE_PORTFOLIO,
  CTA,
  ROUTE_MAP
} from '../utils/constants'
export default {
  data() {
    return {
      routes: ROUTE_MAP,
      OVERVIEW: OVERVIEW,
      TEMPLATE: TEMPLATE,
      SETTINGS: SETTINGS,
      PROJECTS: PROJECTS,
      BLOGS: BLOGS,
      CHANGE_PASSWORD: CHANGE_PASSWORD,
      ALL_PORTFOLIO: ALL_PORTFOLIO,
      ACTIVE_PORTFOLIO: ACTIVE_PORTFOLIO,
      CTA: CTA
    }
  },
  methods: {
    routeTo(route) {
      this.$router.push(route)
    },
    async logoutUser() {
      const resp = await logout()
      if (resp.success) {
        deleteCookie(LOGGED_IN_KEY)
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style scoped>
.active-side-nav-link {
  @apply bg-gray-100 dark:bg-gray-700;
}
</style>
