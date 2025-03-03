




<script setup>       
import HeaderThree from "~/layouts/headers/HeaderThree.vue";
import FooterOne from "~/layouts/footers/FooterOne.vue";  

useHead({
  title: "Gardnma Nursery || Responsive Nuxt js Template",
});

</script>


<template>
  <div>
    <HeaderThree />
    <CommonBreadcrumb title="Nursery/Tree Farm" subtitle="Nursery/Tree Farm" />
    <ArborManagementArea :nursery="true" />   
    <FooterOne />
    <CommonScrollToTop />
  </div>
</template>

 