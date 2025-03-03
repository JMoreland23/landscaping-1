


<script setup>       
import HeaderThree from "~/layouts/headers/HeaderThree.vue";
import FooterOne from "~/layouts/footers/FooterOne.vue";  

useHead({
  title: "Gardnma About || Responsive Nuxt js Template",
});

</script>


<template>
  <div>
    <HeaderThree />
    <CommonBreadcrumb title="About Us" subtitle="About Us" />
    <HomesHome3FeaturesHomeThree />
    <HomesHome3AboutHomeThree />
    <HomesHome3CounterHomeThree />
    <HomesHome2TestimonialHomeTwo />
    <HomesHome3TeamHomeThree :style_2="true" /> 
    <FooterOne />
    <CommonScrollToTop />
  </div>
</template>

 