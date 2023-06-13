<template>
  <Nav />
  <Hero />
  <About />
  <Tempaltes />
  <Cms />
  <Conclusion />
  <Footer />
</template>

<script>
import Nav from './Navbar.vue'
import Hero from './Hero.vue'
import Footer from './Footer.vue'
import About from './About.vue'
import Tempaltes from './Templates.vue'
import Cms from './CMS.vue'
import Conclusion from './CTA.vue'
export default {
  components: {
    Nav,
    Hero,
    About,
    Footer,
    Tempaltes,
    Cms,
    Conclusion
  }
}
</script>
