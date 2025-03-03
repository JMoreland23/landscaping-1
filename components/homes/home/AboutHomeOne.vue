
<template>
  <section class="about-one">
    <div class="shape1 float-bob-y">
      <img src="assets/images/shapes/about-v1-shape1.png" alt="#" />
    </div>
    <div class="shape2 float-bob-y">
      <img src="assets/images/shapes/about-v1-shape2.png" alt="#" />
    </div>
    <div class="shape3"></div>
    <div class="about-one__bg"  :style="{ backgroundImage: `url(${bg_img_1})` }">
      <div class="about-one__bg-content">
        <div class="img-box">
          <div class="inner">
            <img src="assets/images/about/about-v1-img3.jpg" alt="#" />
          </div>
          <div class="content-box">
            <div class="icon-box">
              <span class="icon-butterflies"></span>
            </div>
            <div class="text-box">
              <h2>Cash flow <br /> management</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-6"></div>
        <div class="col-xl-6">
          <div class="about-one__content">
            <div class="sec-title">
              <div class="sec-title__tagline">
                <h6>About Us </h6>
                <span class="right"></span>
              </div>
              <h2 class="sec-title__title">Grow Your Garden And <br /> Your Health</h2>
            </div>
            <div class="about-one__content-text1">
              <p class="text1">Ut enim ad minim veniam, quis nostrud exercitation ullamla ut aliquip ex ea commodo consequat</p>
              <p class="text2">Sapien nunced amet sit ipsum velit purus aliq massa fringilla leo. Lorem ipsum is simply free text dolor sit am adipi we help you ensure everyTincidunt elit magnis nulla facilisis sagittis maecenas. </p>
            </div>
            <div class="about-one__content-text2">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="about-one__content-text2-single">
                    <h3><span class="icon-confirmation"></span> Pruning Plants</h3>
                    <p>Lorem ipsum dolor sit ame sedme consectetur nod.</p>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="about-one__content-text2-single">
                    <h3><span class="icon-confirmation"></span> Lawn Maintenance</h3>
                    <p>Lorem ipsum dolor sit ame sedme consectetur nod.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="about-one__content-bottom">
              <div class="btn-box">
                <NuxtLink class="thm-btn" to="/about">
                  <span class="txt">Discover more</span>
                  <i class="fa fa-angle-double-right"></i>
                </NuxtLink>
              </div>
              <div class="client-info">
                <div class="img-box">
                  <img src="assets/images/about/about-v1-img2.jpg" alt="#" />
                </div>
                <div class="text-box">
                  <h3>Mike Hardson</h3>
                  <p>CEO of Garden</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import bg_img_1 from "~/assets/images/about/about-v1-img1.png"

</script>

<style scoped>
/* Add your CSS styling here */
</style>
