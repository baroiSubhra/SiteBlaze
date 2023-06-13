<template>
  <div class="pt-8 pb-8 flex flex-col justify-center items-center">
    <img src="@/assets/images/siteblaze.jpg" class="animate rounded" alt="" />
    <div class="text-2xl font-semibold pt-8 dark:text-white">{{ label }}</div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: 'No Results Found'
    }
  }
}
</script>

<style scoped>
.animate {
  -webkit-animation: mover 1s infinite alternate ease-in-out;
  animation: mover 1s infinite alternate ease-in-out;
}
@-webkit-keyframes move-up {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-20px);
  }
}
</style>
