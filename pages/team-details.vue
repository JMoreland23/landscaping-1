





<script setup>       
import HeaderThree from "~/layouts/headers/HeaderThree.vue";
import FooterOne from "~/layouts/footers/FooterOne.vue";  

useHead({
  title: "Gardnma Team Details || Responsive Nuxt js Template",
});

</script>


<template>
  <div>
    <HeaderThree />
    <CommonBreadcrumb title="Team Details" subtitle="Team Details" />
    <TeamDetailsArea />     
    <FooterOne />
    <CommonScrollToTop />
  </div>
</template>

 