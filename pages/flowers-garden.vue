






<script setup>       
import HeaderThree from "~/layouts/headers/HeaderThree.vue";
import FooterOne from "~/layouts/footers/FooterOne.vue";  

useHead({
  title: "Gardnma Fruits & Flowers Garden || Responsive Nuxt js Template",
});

</script>


<template>
  <div>
    <HeaderThree />
    <CommonBreadcrumb title="Fruits & Flowers Garden" subtitle="Fruits & Flowers Garden" />
    <ArborManagementArea :fruit="true" />   
    <FooterOne />
    <CommonScrollToTop />
  </div>
</template>

 
