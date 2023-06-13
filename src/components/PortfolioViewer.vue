<template>
  <div class="mt-8 code-example">
    <div
      class="w-full p-4 border border-gray-200 bg-gray-50 rounded-t-xl dark:border-gray-600 dark:bg-gray-700"
    >
      <div class="grid grid-cols-3">
        <div class="items-center justify-center hidden col-start-2 col-span-1 space-x-2 sm:flex">
          <button
            data-tooltip-target="default-table-example-full-screen-tooltip"
            class="flex items-center p-2 text-xs font-medium border border-gray-200 rounded-lg toggle-full-view hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            :class="[
              {
                'bg-gray-100 text-blue-700 dark:text-white dark:bg-gray-700': iframeWidth == FULL
              },
              {
                'text-gray-700 bg-white': iframeWidth != FULL
              }
            ]"
            @click="changeIframeWidth(FULL)"
          >
            <span class="sr-only">Toggle full view asdfas {{ FULL }}</span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
          </button>

          <div
            id="default-table-example-full-screen-tooltip"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            data-popper-placement="top"
            style="
              position: absolute;
              inset: auto auto 0px 0px;
              margin: 0px;
              transform: translate3d(350.5px, -239px, 0px);
            "
          >
            Toggle full screen
            <div
              class="tooltip-arrow"
              data-popper-arrow=""
              style="position: absolute; left: 0px; transform: translate3d(67.5px, 0px, 0px)"
            ></div>
          </div>

          <button
            data-tooltip-target="default-table-example-tablet-tooltip"
            class="flex items-center p-2 text-xs font-medium border border-gray-200 rounded-lg toggle-tablet-view hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            :class="[
              {
                'bg-gray-100 text-blue-700 dark:text-white dark:bg-gray-700': iframeWidth == TABLET
              },
              {
                'text-gray-700 bg-white': iframeWidth != TABLET
              }
            ]"
            @click="changeIframeWidth(TABLET)"
          >
            <span class="sr-only">Toggle tablet view</span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              ></path>
            </svg>
          </button>

          <div
            id="default-table-example-tablet-tooltip"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            data-popper-placement="top"
            style="
              position: absolute;
              inset: auto auto 0px 0px;
              margin: 0px;
              transform: translate3d(390.5px, -239px, 0px);
            "
          >
            Toggle tablet view
            <div
              class="tooltip-arrow"
              data-popper-arrow=""
              style="position: absolute; left: 0px; transform: translate3d(69.5px, 0px, 0px)"
            ></div>
          </div>

          <button
            data-tooltip-target="default-table-example-mobile-tooltip"
            class="flex items-center p-2 text-xs font-medium border border-gray-200 rounded-lg toggle-mobile-view hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-gray-300 dark:focus:ring-gray-500 dark:bg-gray-800 focus:outline-none dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            :class="[
              {
                'bg-gray-100 text-blue-700 dark:text-white dark:bg-gray-700': iframeWidth == MOBILE
              },
              {
                'text-gray-700 bg-white': iframeWidth != MOBILE
              }
            ]"
            @click="changeIframeWidth(MOBILE)"
          >
            <span class="sr-only">Toggle mobile view -- {{ iframeWidth == MOBILE }}</span
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              aria-hidden="true"
              class="w-4 h-4"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
              ></path>
            </svg>
          </button>

          <div
            id="default-table-example-mobile-tooltip"
            role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            data-popper-placement="top"
            style="
              position: absolute;
              inset: auto auto 0px 0px;
              margin: 0px;
              transform: translate3d(429.5px, -239px, 0px);
            "
          >
            Toggle mobile view
            <div
              class="tooltip-arrow"
              data-popper-arrow=""
              style="position: absolute; left: 0px; transform: translate3d(72.5px, 0px, 0px)"
            ></div>
          </div>
        </div>
        <div class="flex justify-end">
          <svg
            @click="tooglePreview"
            class="w-6 h-6 shrink-0"
            :class="{ 'rotate-180': showPreview }"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>

    <div class="code-preview-wrapper border-b rounded-b-xl border-gray-200">
      <div
        id="default-table-example"
        class="flex p-0 bg-white rounded-b-xl border-gray-200 bg-gradient-to-r code-preview dark:bg-gray-900 border-x border-b dark:border-gray-600"
      >
        <div class="w-full code-responsive-wrapper rounded-b-xl">
          <iframe
            title="default table example"
            class="w-full h-0 mx-auto bg-white rounded-b-xl dark:bg-gray-900 iframe-code"
            :src="src"
            :class="[iframeClass, { hidden: !showPreview }]"
            frameborder="0"
            style="height: 100vh"
          ></iframe>
          <div
            class="flex items-center justify-center w-full p-5 bg-white dark:bg-gray-900 hidden"
            data-component-loader=""
          >
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                ></path>
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String
    }
  },
  data() {
    return {
      showPreview: true,
      iframeWidth: 'FULL',
      iframeClass: '',
      FULL: 'FULL',
      TABLET: 'TABLET',
      MOBILE: 'MOBILE'
    }
  },
  methods: {
    changeIframeWidth(value) {
      switch (value) {
        case 'MOBILE': {
          this.iframeWidth = 'MOBILE'
          this.iframeClass = 'max-w-sm'
          break
        }
        case 'TABLET': {
          this.iframeWidth = 'TABLET'
          this.iframeClass = 'max-w-lg'
          break
        }
        default: {
          this.iframeWidth = 'FULL'
          this.iframeClass = ''
        }
      }
    },
    tooglePreview() {
      this.showPreview = !this.showPreview
    }
  }
}
</script>
