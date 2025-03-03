
<template>
  <section class="page-header">
    <div 
      class="page-header__bg" 
      :style="{ backgroundImage: `url(${bg_img_1})` }"
    ></div>
    <div class="shape1">
      <img src="assets/images/shapes/page-header-shape1.png" alt="#" />
    </div>

    <div class="container">
      <div class="page-header__inner">
        <h2>{{ title }}</h2>
        <ul class="thm-breadcrumb">
          <li><NuxtLink to="/"> Home </NuxtLink></li>
          <li><span>-</span></li>
          <li>{{ subtitle }}</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
});

import bg_img_1 from "~/assets/images/backgrounds/page-header-bg.jpg";

</script>
 