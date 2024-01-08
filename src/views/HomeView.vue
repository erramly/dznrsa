<template>
  <div class="hero-setcion">
    <headerDesktop />
    <headerMobile />
    <heroSection />
    <partnerSection />
    <aboutSection />
    <projectsSection />
    <priceSection />
    <differencesSection />
    <fooTer />
  </div>
</template>

<script>
import headerDesktop from "@/components/header/headerMobile.vue"; // @ is an alias to /src
import headerMobile from "@/components/header/headerDesktop.vue"; // @ is an alias to /src
import heroSection from "@/components/hero_section/heroSection.vue";
import partnerSection from "@/components/partner_section/partnerSection.vue";
import aboutSection from "@/components/about_section/aboutSection.vue";
import projectsSection from "@/components/projects_section/projectsSection.vue";
import priceSection from "@/components/price_section/priceSection.vue";
import differencesSection from "@/components/Differences_section/differencesSection.vue";
import fooTer from "@/components/footer/fooTer.vue";
export default {
  components: {
    headerMobile,
    headerDesktop,
    heroSection,
    partnerSection,
    aboutSection,
    projectsSection,
    priceSection,
    differencesSection,
    fooTer,
  },
};
</script>
<style lang="scss">
.hero-setcion {
  background-color: var(--bg-white);
}
</style>
