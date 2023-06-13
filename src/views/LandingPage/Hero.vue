<template>
  <section class="relative dark:bg-gray-900" id="home">
    <div class="max-w-6xl mx-auto px-4 sm:px-6">
      <div class="pt-32 pb-12 md:pt-40 md:pb-20">
        <div class="text-center pb-12 md:pb-16">
          <h1
            class="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 dark:text-white"
          >
            Captivate Your Audience with
            <br />
            <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"
              >Stunning website</span
            >
          </h1>
          <div class="max-w-3xl mx-auto">
            <p class="text-xl text-gray-600 mb-8 dark:text-gray-400">
              With SiteBlaze, you have everything you need to build a visually impressive and
              content-rich website. From customizable templates to content management system, and
              powerful calls-to-action, we've got you covered.
            </p>
            <div class="max-w-xs mx-auto sm:max-w-none sm:flex sm:gap-4 sm:justify-center">
              <router-link
                to="/login"
                type="submit"
                class="max-sm:mb-4 w-full md:w-auto text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:bg-blue-300"
              >
                Login
              </router-link>
              <router-link
                to="/signup"
                type="submit"
                class="max-sm:mb-4 w-full md:w-auto px-5 py-2.5 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                Signup
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
