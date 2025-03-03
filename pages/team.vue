
<script setup>       
import HeaderThree from "~/layouts/headers/HeaderThree.vue";
import FooterOne from "~/layouts/footers/FooterOne.vue";  

useHead({
  title: "Gardnma Team || Responsive Nuxt js Template",
});

</script>


<template>
  <div>
    <HeaderThree />
    <CommonBreadcrumb title="Team" subtitle="Team" />
    <TeamArea />
    <HomesHomeExcellentWorkHomeOne />
    <HomesHome2TestimonialHomeTwo />      
    <FooterOne />
    <CommonScrollToTop />
  </div>
</template>

 