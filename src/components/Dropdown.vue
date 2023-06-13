<template>
  <div>
    <div class="flex custom-dropdown">
      <button
        @click="primaryButtonClicked"
        id="dropdownHoverButton"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 pr-2 w-auto"
        type="button"
      >
        <slot>{{ dpOptions[selectedId].name }}</slot>
      </button>
      <button
        @click="toggleDropdown"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 pl-1"
      >
        <svg
          class="w-4 h-4 ml-2 font-medium"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
    </div>

    <!-- Dropdown menu -->
    <div
      id="dropdownHover"
      class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 absolute"
      :class="{ hidden: !showDropdown }"
    >
      <ul class="py-2 text-sm text-gray-700 dark:text-gray-200">
        <li v-for="(item, index) in dpOptions" :key="index">
          <div
            @click="executeSelectedAction(index)"
            class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            {{ item.name }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Button from '../templates/template1/components/Button.vue'
export default {
  components: { Button },
  props: {
    options: {
      type: Array,
      default: () => [],
      required: true
    }
  },
  data() {
    return {
      showDropdown: false,
      selectedId: 0
    }
  },
  computed: {
    dpOptions() {
      return this.options.map((el) => {
        return {
          name: el.name,
          action: () => {
            el.action(), this.toggleDropdown()
          }
        }
      })
    }
  },
  methods: {
    toggleDropdown() {
      this.showDropdown = !this.showDropdown
    },
    primaryButtonClicked() {
      if (this.showDropdown) {
        this.showDropdown = false
      }
      this.options[this.selectedId].action()
    },
    executeSelectedAction(id) {
      this.changeSelected(id)
      this.dpOptions[this.selectedId].action()
    },
    changeSelected(id) {
      this.selectedId = id
    }
  }
}
</script>
