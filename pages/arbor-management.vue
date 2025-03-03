




<script setup>       
import HeaderThree from "~/layouts/headers/HeaderThree.vue";
import FooterOne from "~/layouts/footers/FooterOne.vue";  

useHead({
  title: "Gardnma Arbor Management || Responsive Nuxt js Template",
});

</script>


<template>
  <div>
    <HeaderThree />
    <CommonBreadcrumb title="Arbor Management" subtitle="Arbor Management" />
    <ArborManagementArea :arbor="true" /> 
    <FooterOne />
    <CommonScrollToTop />
  </div>
</template>

 