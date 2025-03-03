 
<script setup>       
import HeaderThree from "~/layouts/headers/HeaderThree.vue";
import FooterOne from "~/layouts/footers/FooterOne.vue"; 

useHead({
  title: "Gardnma Blog Grid || Responsive Nuxt js Template",
});

</script>


<template>
  <div>
    <HeaderThree />
    <CommonBreadcrumb title="Blog Grid" subtitle="Blog Grid" />
    <BlogGridArea />
    <FooterOne />
    <CommonScrollToTop />
  </div>
</template>

 
