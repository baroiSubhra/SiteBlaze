<template>
  <ul
    class="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400"
  >
    <li class="mr-2" v-for="(item, index) in data" :key="index">
      <a
        aria-current="page"
        class="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
        >{{ item }}</a
      >
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    data: null
  }
}
</script>
