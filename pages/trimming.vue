




<script setup>       
import HeaderThree from "~/layouts/headers/HeaderThree.vue";
import FooterOne from "~/layouts/footers/FooterOne.vue";  

useHead({
  title: "Gardnma Trimming & Pruning || Responsive Nuxt js Template",
});

</script>


<template>
  <div>
    <HeaderThree />
    <CommonBreadcrumb title="Trimming & Pruning" subtitle="Trimming & Pruning" />
    <ArborManagementArea :trimming="true" />   
    <FooterOne />
    <CommonScrollToTop />
  </div>
</template>

 