
<template>
  <section class="services-one">
    <div class="gradient-bg"></div>
    <div class="auto-container">
      <div class="sec-title text-center">
        <div class="sec-title__tagline">
          <span class="left"></span>
          <h6>Our Services</h6>
          <span class="right"></span>
        </div>
        <h2 class="sec-title__title">Professional Featured</h2>
      </div>

      <div class="row">
        <!-- Start Services One Single -->
        <div
          class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
          data-wow-delay="0ms"
          data-wow-duration="1000ms"
        >
          <div class="services-one__single">
            <div class="shape1">
              <img src="assets/images/shapes/services-v1-shape2.png" alt="#" />
            </div>
            <div class="shape2">
              <img src="assets/images/shapes/services-v1-shape3.png" alt="#" />
            </div>
            <div class="shape3">
              <img src="assets/images/shapes/services-v1-shape4.png" alt="#" />
            </div>
            <div class="services-one__single-img">
              <div
                class="services-one__single-img-bg"
                :style="{ backgroundImage: `url(${bg_img_1})` }"
              ></div>
              <div class="overlay-icon">
                <div class="icon-box">
                  <span class="icon-gardening-1"></span>
                </div>
              </div>
              <img src="assets/images/services/services-v1-img1.jpg" alt="#" />
            </div>

            <div class="services-one__single-content text-center">
              <h2><NuxtLink to="/arbor-management">Irrigation And <br /> Drainage </NuxtLink></h2>
              <p>I was impressed by the agrion services, not lorem ipsum is simply free text.</p>
            </div>
          </div>
        </div>
        <!-- End Services One Single -->

        <!-- Start Services One Single -->
        <div
          class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
          data-wow-delay="100ms"
          data-wow-duration="1000ms"
        >
          <div class="services-one__single">
            <div class="shape1">
              <img src="assets/images/shapes/services-v1-shape2.png" alt="#" />
            </div>
            <div class="shape2">
              <img src="assets/images/shapes/services-v1-shape3.png" alt="#" />
            </div>
            <div class="shape3">
              <img src="assets/images/shapes/services-v1-shape4.png" alt="#" />
            </div>
            <div class="services-one__single-img">
              <div
                class="services-one__single-img-bg"
                :style="{ backgroundImage: `url(${bg_img_1})` }"
              ></div>
              <div class="overlay-icon">
                <div class="icon-box">
                  <span class="icon-gardening-1"></span>
                </div>
              </div>
              <img src="assets/images/services/services-v1-img2.jpg" alt="#" />
            </div>

            <div class="services-one__single-content text-center">
              <h2><NuxtLink to="/arbor-management">Tree And Shrub <br /> Services </NuxtLink></h2>
              <p>I was impressed by the agrion services, not lorem ipsum is simply free text.</p>
            </div>
          </div>
        </div>
        <!-- End Services One Single -->

        <!-- Start Services One Single -->
        <div
          class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
          data-wow-delay="0ms"
          data-wow-duration="1000ms"
        >
          <div class="services-one__single">
            <div class="shape1">
              <img src="assets/images/shapes/services-v1-shape2.png" alt="#" />
            </div>
            <div class="shape2">
              <img src="assets/images/shapes/services-v1-shape3.png" alt="#" />
            </div>
            <div class="shape3">
              <img src="assets/images/shapes/services-v1-shape4.png" alt="#" />
            </div>
            <div class="services-one__single-img">
              <div
                class="services-one__single-img-bg"
                :style="{ backgroundImage: `url(${bg_img_1})` }"
              ></div>
              <div class="overlay-icon">
                <div class="icon-box">
                  <span class="icon-gardening-1"></span>
                </div>
              </div>
              <img src="assets/images/services/services-v1-img3.jpg" alt="#" />
            </div>

            <div class="services-one__single-content text-center">
              <h2><NuxtLink to="/arbor-management">Garden Commercial <br /> Landscaping </NuxtLink></h2>
              <p>I was impressed by the agrion services, not lorem ipsum is simply free text.</p>
            </div>
          </div>
        </div>
        <!-- End Services One Single -->

        <!-- Start Services One Single -->
        <div
          class="col-xl-3 col-lg-6 col-md-6 wow fadeInRight"
          data-wow-delay="100ms"
          data-wow-duration="1000ms"
        >
          <div class="services-one__single">
            <div class="shape1">
              <img src="assets/images/shapes/services-v1-shape2.png" alt="#" />
            </div>
            <div class="shape2">
              <img src="assets/images/shapes/services-v1-shape3.png" alt="#" />
            </div>
            <div class="shape3">
              <img src="assets/images/shapes/services-v1-shape4.png" alt="#" />
            </div>
            <div class="services-one__single-img">
              <div
                class="services-one__single-img-bg"
                :style="{ backgroundImage: `url(${bg_img_1})` }"
              ></div>
              <div class="overlay-icon">
                <div class="icon-box">
                  <span class="icon-gardening-1"></span>
                </div>
              </div>
              <img src="assets/images/services/services-v1-img4.jpg" alt="#" />
            </div>

            <div class="services-one__single-content text-center">
              <h2><NuxtLink to="/arbor-management">Lawn And Garden <br /> Care</NuxtLink></h2>
              <p>I was impressed by the agrion services, not lorem ipsum is simply free text.</p>
            </div>
          </div>
        </div>
        <!-- End Services One Single -->
      </div>
    </div>
  </section>
</template>

<script setup>
// import { NuxtLink } from 'vue-router'
import bg_img_1 from "~/assets/images/shapes/services-v1-shape1.png"

</script>

<style scoped>
/* Add your custom styles here */
</style>