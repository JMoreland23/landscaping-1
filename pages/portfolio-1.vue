





<script setup>       
import HeaderThree from "~/layouts/headers/HeaderThree.vue";
import FooterOne from "~/layouts/footers/FooterOne.vue";  

useHead({
  title: "Gardnma Portfolio One || Responsive Nuxt js Template",
});

</script>


<template>
  <div>
    <HeaderThree />
    <CommonBreadcrumb title="Portfolio One" subtitle="Portfolio One" />
    <Portfolio1PortfolioOneArea />
    <FooterOne />
    <CommonScrollToTop />
  </div>
</template>

 