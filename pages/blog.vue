 
<script setup>       
import HeaderThree from "~/layouts/headers/HeaderThree.vue";
import FooterOne from "~/layouts/footers/FooterOne.vue";   

useHead({
  title: "Gardnma Blog || Responsive Nuxt js Template",
});

</script>


<template>
  <div>
    <HeaderThree />
    <CommonBreadcrumb title="Blog" subtitle="Blog" />
    <BlogArea />
    <FooterOne />
    <CommonScrollToTop />
  </div>
</template>

 
