




<script setup>       
import HeaderThree from "~/layouts/headers/HeaderThree.vue";
import FooterOne from "~/layouts/footers/FooterOne.vue";  

useHead({
  title: "Gardnma Garden Management || Responsive Nuxt js Template",
});

</script>


<template>
  <div>
    <HeaderThree />
    <CommonBreadcrumb title="Garden Management" subtitle="Garden Management" />
    <ArborManagementArea :garden="true" /> 
    <FooterOne />
    <CommonScrollToTop />
  </div>
</template>

 