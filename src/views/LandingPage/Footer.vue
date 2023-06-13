<template>
  <footer class="p-4 bg-white md:p-8 lg:p-10 dark:bg-gray-800">
    <div class="mx-auto max-w-screen-xl text-center">
      <a
        href="#"
        class="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          src="@/assets/images/siteblaze.jpg"
          class="mr-3 h-6 sm:h-9 rounded"
          alt="SiteBlaze Logo"
        />
        SiteBlaze
      </a>
      <p class="my-6 text-gray-500 dark:text-gray-400">
        Open-source project of for creating stunning website from customizable templates<br />
        and built in CMS to showcase your projects and publish blogs.
      </p>
      <ul class="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
        <li>
          <a href="#home" class="mr-4 hover:underline md:mr-6">Home</a>
        </li>
        <li>
          <a href="#about" class="mr-4 hover:underline md:mr-6">About</a>
        </li>
        <li>
          <a href="#templates" class="mr-4 hover:underline md:mr-6">Templates</a>
        </li>
        <li>
          <a href="#cms" class="mr-4 hover:underline md:mr-6">CMS</a>
        </li>
        <li>
          <a href="#cta" class="mr-4 hover:underline md:mr-6">CTA</a>
        </li>
        <li>
          <a href="/terms-and-conditions" class="mr-4 hover:underline md:mr-6"
            >Terms and conditions</a
          >
        </li>
      </ul>
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
        >&#169; 2023-{{ new Date().getFullYear() }}
        <a href="#" class="hover:underline">SiteBlaze™</a>. All Rights Reserved.</span
      >
    </div>
  </footer>
</template>
