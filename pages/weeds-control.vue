





<script setup>       
import HeaderThree from "~/layouts/headers/HeaderThree.vue";
import FooterOne from "~/layouts/footers/FooterOne.vue";  

useHead({
  title: "Gardnma Pests & Weeds Control || Responsive Nuxt js Template",
});

</script>


<template>
  <div>
    <HeaderThree />
    <CommonBreadcrumb title="Pests & Weeds Control" subtitle="Pests & Weeds Control" />
    <ArborManagementArea :weeds="true" />   
    <FooterOne />
    <CommonScrollToTop />
  </div>
</template>

 
