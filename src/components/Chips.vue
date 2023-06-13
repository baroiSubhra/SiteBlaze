<template>
  <div class="flex gap-4 p-4" v-for="(element, index) in bindValue" :key="index">
    <input
      type="text"
      :name="`child-${index}`"
      :id="`child-${index}`"
      v-model="element.value"
      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :placeholder="`Please enter name`"
    />

    <input
      type="text"
      :name="`child-link-${index}`"
      :id="`child-link-${index}`"
      v-model="element.link"
      class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :placeholder="`Please enter relative link`"
    />
    <div class="self-center">
      <svg
        @click="removeEntry(index)"
        fill="currentColor"
        class="w-6 ml-1 -mr-1 rotate-45"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
        ></path>
      </svg>
    </div>
  </div>
  <div class="flex justify-center items-center">
    <button
      to="/dashboard/cms/projects/add"
      @click="addArrayEntry"
      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Add Entry
      <svg
        fill="currentColor"
        class="w-6 ml-1 -mr-1"
        d
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  props: { modelValue: null },
  computed: {
    bindValue: {
      get() {
        return this.modelValue
      },
      set(val) {
        this.$emit('update:modelValue', val)
      }
    }
  },
  methods: {
    addArrayEntry() {
      this.bindValue.push({ value: '', link: '' })
    },
    removeEntry(index) {
      this.bindValue.splice(index, 1)
    }
  }
}
</script>
