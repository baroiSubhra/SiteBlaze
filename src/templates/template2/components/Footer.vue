<template>
  <footer class="footer mt-16">
    <div class="footer__container grid">
      <div class="footer__content" v-if="data.footerSection1.show">
        <a href="#" class="footer__logo"> {{ data.footerSection1.brandName.value }}</a>
        <span class="footer__description">{{ data.footerSection1.brandDetails.value }}</span>
        <div>
          <a href="#" class="footer__social">
            <i class="bx bxl-facebook"></i>
          </a>
          <a href="#" class="footer__social">
            <i class="bx bxl-instagram"></i>
          </a>
          <a href="#" class="footer__social">
            <i class="bx bxl-twitter"></i>
          </a>
        </div>
      </div>

      <div class="footer__content" v-if="data.footerSection2.show">
        <h3 class="footer__title">{{ data.footerSection2.title.value }}</h3>
        <ul v-if="data.footerSection2.child.show">
          <li v-for="(item, index) in data.footerSection2.child.value" :key="index">
            <a href="#" class="footer__link"> {{ item.value }} </a>
          </li>
        </ul>
      </div>

      <div class="footer__content" v-if="data.footerSection3.show">
        <h3 class="footer__title">{{ data.footerSection3.title.value }}</h3>
        <ul v-if="data.footerSection3.child.show">
          <li v-for="(item, index) in data.footerSection3.child.value" :key="index">
            <a href="#" class="footer__link"> {{ item.value }} </a>
          </li>
        </ul>
      </div>

      <div class="footer__content" v-if="data.footerSection4.show">
        <h3 class="footer__title">{{ data.footerSection4.title.value }}</h3>
        <ul v-if="data.footerSection4.child.show">
          <li v-for="(item, index) in data.footerSection4.child.value" :key="index">
            <a href="#" class="footer__link">{{ item.value }} </a>
          </li>
        </ul>
      </div>
    </div>

    <p class="text-align-center color-secondary mt-10 mb-4" v-if="data.footerSection5.show">
      &#169; {{ new Date().getFullYear() }}
      {{ data.footerSection5.copyRightBrand.show ? data.footerSection5.copyRightBrand.value : '' }},
      All rights reserved
    </p>
  </footer>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.grid {
  display: grid;
  gap: 1.5rem;
}
.footer__container {
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  row-gap: 2rem;
}

.footer__logo {
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: 700;
}
.footer__social {
  font-size: 1.5rem;
  color: black;
  margin-right: 1rem;
}
.footer__link {
  display: inline-block;
  color: var(--secondary-color);
  margin-bottom: 0.5rem;
  font-weight: 500;
}
.footer__link:hover {
  color: var(--primary-color);
}

.footer__description {
  display: block;
  margin: 1rem 0 1rem;
}
</style>
