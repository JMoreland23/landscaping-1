
<!-- loop="true"
        :slides-per-view="1"
        effect="fade"
        :autoplay="{ delay: 5000 }"
        :modules="[EffectFade, Pagination, Navigation]"
        :pagination="{
          el: '#main-slider-pagination',
          type: 'bullets',
          clickable: true
        }"
        :navigation="{
          nextEl: '#main-slider__swiper-button-next',
          prevEl: '#main-slider__swiper-button-prev'
        }" -->

<template>
  <div>
    <div class="stricky-header stricky-header--one stricked-menu main-menu">
      <div class="sticky-header__content"></div>
    </div>

    <section class="main-slider main-slider-one">
      <Swiper
        :slides-per-view="1"
        :effect="'fade'"
        :autoplay="{ delay: 5000 }"
        :modules="[EffectFade, Pagination, Navigation]"
        :pagination="{
          el: '#main-slider-pagination',
          type: 'bullets',
          clickable: true
        }"
        :navigation="{
          nextEl: '#main-slider__swiper-button-next',
          prevEl: '#main-slider__swiper-button-prev',
        }"    
         
        class="swiper-container thm-swiper__slider"> 
        
        <SwiperSlide class="swiper-slide">
          <div
            class="image-layer"  
            :style="{ backgroundImage: `url(${bg_img_1})` }"
          ></div>
          <div class="shape1">
            <img
              class="float-bob-y"
              src="/assets/images/shapes/slider-v1-shape1.png"
              alt="#" />
          </div>
          <div class="shape2">
            <img src="/assets/images/shapes/slider-v1-shape2.png" alt="#" />
          </div>

          <div class="main-slider-two__outer-content">
            <div class="social-links">
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Pinterest</a></li>
              </ul>
            </div>

            <div class="date-box">
              <p>
                mon - fri <span>9am - 7pm</span>
              </p>
            </div>
          </div>

          <div class="container">
            <div class="main-slider-one__content">
              <div class="title">
                <h2>Quality Sod <br /> & Landscape <br /> Solutions</h2>
              </div>
              <div class="btn-box">
                <NuxtLink class="thm-btn" to="/contact">
                  <span class="txt">Discover more</span>
                  <i class="fa fa-angle-double-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </SwiperSlide>
 
        <SwiperSlide class="swiper-slide">
          <div
            class="image-layer" 
            :style="{ backgroundImage: `url(${bg_img_2})` }"
          ></div>
          <div class="shape1">
            <img
              class="float-bob-y"
              src="/assets/images/shapes/slider-v1-shape1.png"
              alt="#" >
          </div>
          <div class="shape2">
            <img src="/assets/images/shapes/slider-v1-shape2.png" alt="#">
          </div>

          <div class="main-slider-two__outer-content">
            <div class="social-links">
              <ul>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Pinterest</a></li>
              </ul>
            </div>

            <div class="date-box">
              <p>
                mon - fri <span>9am - 7pm</span>
              </p>
            </div>
          </div>

          <div class="container">
            <div class="main-slider-one__content">
              <div class="title">
                <h2>Quality Sod <br /> & Landscape <br /> Solutions</h2>
              </div>
              <div class="btn-box">
                <NuxtLink class="thm-btn" to="/contact">
                  <span class="txt">Discover more</span>
                  <i class="fa fa-angle-double-right"></i>
                </NuxtLink>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <div class="main-slider__nav">
          <div
            class="swiper-button-prev"
            id="main-slider__swiper-button-next"
          >
            <i class="icon-left-arrow"></i>
          </div>
          <div
            class="swiper-button-next"
            id="main-slider__swiper-button-prev"
          >
            <i class="icon-right-arrow"></i>
          </div>
        </div>
      </Swiper>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade, Navigation, Pagination } from "swiper/modules";

import bg_img_1 from "~/assets/images/slides/slider-v1-img1.jpg";
import bg_img_2 from "~/assets/images/slides/slider-v1-img2.jpg";

// Import Swiper CSS
// import "swiper/swiper-bundle.css";
</script>

<style scoped>
/* Add component-specific styles here */
</style>
