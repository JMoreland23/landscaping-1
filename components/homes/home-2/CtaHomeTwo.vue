
<template>
  <div>
    <section class="slogan-one">
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="slogan-one__inner">
            <div class="shape1">
              <img src="assets/images/shapes/slogan-v1-shape1.png" alt="#" />
            </div>
            <div class="slogan-one__bg" :style="{ backgroundImage: `url(${bg_img_1})` }">
            </div>
            <div class="content-box">
              <h2><span>Provides</span> hassle-free backyard <br /> transformations</h2>
            </div>
            <div class="btn-box">
              <NuxtLink class="thm-btn" to="/contact">
                <span class="txt">Get A Quote</span>
                <i class="fa fa-angle-double-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>

<script setup>
import bg_img_1 from "~/assets/images/backgrounds/slogan-v1-bg.png"

</script>

<style scoped>
/* Add your custom styles here */
</style>