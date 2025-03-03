
 
<script setup>       
import HeaderThree from "~/layouts/headers/HeaderThree.vue";
import FooterOne from "~/layouts/footers/FooterOne.vue";  

useHead({
  title: "Gardnma Blog Details || Responsive Nuxt js Template",
});

</script>


<template>
  <div>
    <HeaderThree />
    <CommonBreadcrumb title="Blog Details" subtitle="Blog Details" />
    <BlogDetailsArea />
    <FooterOne />
    <CommonScrollToTop />
  </div>
</template>

 
