
 
<script setup>       
import HeaderThree from "~/layouts/headers/HeaderThree.vue";
import FooterOne from "~/layouts/footers/FooterOne.vue";   

useHead({
  title: "Gardnma Contact || Responsive Nuxt js Template",
});

</script>


<template>
  <div>
    <HeaderThree />
    <CommonBreadcrumb title="Contact" subtitle="Contact" />
    <ContactArea />
    <ContactGoogleMap />
    <FooterOne />
    <CommonScrollToTop />
  </div>
</template>

 

