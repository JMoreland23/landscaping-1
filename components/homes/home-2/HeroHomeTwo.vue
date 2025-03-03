
<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules'
import bg_img_1 from "~/assets/images/slides/slider-v2-img1.jpg"
import bg_img_2 from "~/assets/images/slides/slider-v2-img2.jpg"
 


</script>


<template>
  <section class="main-slider main-slider-two">
    <Swiper
      class="swiper-container thm-swiper__slider"
      :slides-per-view="1"
      loop="true"
      effect="fade"
      :pagination="{
        el: '#main-slider-pagination',
        type: 'bullets',
        clickable: true
      }"
      :navigation="{
        nextEl: '.main-slider__swiper-button-next',
        prevEl: '.main-slider__swiper-button-prev',
      }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false
      }"
      :modules="[Autoplay, Pagination, Navigation, EffectFade]"
    >
      <!-- Start Main Slider Two -->
      <SwiperSlide class="swiper-slide">
        <div
          class="image-layer"
          :style="{ backgroundImage: `url(${bg_img_1})` }"
        ></div>
        <div class="shape1"></div>
        <div class="container">
          <div class="main-slider-two__content">
            <div class="tagline">
              <p>Welcome to COMPANY</p>
            </div>
            <div class="title">
              <h2>
                Consulting <br /> Market Leader <br /> Expert
              </h2>
            </div>
            <div class="btn-box">
              <NuxtLink class="thm-btn" to="/contact">
                <span class="txt">Book Appointment</span>
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
        <div class="shape1"></div>
        <div class="container">
          <div class="main-slider-two__content">
            <div class="tagline">
              <p>Welcome to COMPANY</p>
            </div>
            <div class="title">
              <h2>
                Consulting <br /> Market Leader <br /> Expert
              </h2>
            </div>
            <div class="btn-box">
              <NuxtLink class="thm-btn" to="/contact">
                <span class="txt">Book Appointment</span>
                <i class="fa fa-angle-double-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <div
          class="image-layer"
          :style="{ backgroundImage: `url(${bg_img_1})` }"
        ></div>
        <div class="shape1"></div>
        <div class="container">
          <div class="main-slider-two__content">
            <div class="tagline">
              <p>Welcome to COMPANY</p>
            </div>
            <div class="title">
              <h2>
                Consulting <br /> Market Leader <br /> Expert
              </h2>
            </div>
            <div class="btn-box">
              <NuxtLink class="thm-btn" to="/contact">
                <span class="txt">Book Appointment</span>
                <i class="fa fa-angle-double-right"></i>
              </NuxtLink>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <!-- End Main Slider Two -->

      <div class="main-slider__nav">
        <div
          class="swiper-button-prev main-slider__swiper-button-next"
          id="main-slider__swiper-button-next"
        >
          <i class="icon-left-arrow"></i>
        </div>
        <div
          class="swiper-button-next main-slider__swiper-button-prev"
          id="main-slider__swiper-button-prev"
        >
          <i class="icon-right-arrow"></i>
        </div>
      </div>
    </Swiper>
  </section>
</template>



 