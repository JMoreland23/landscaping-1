
<template>
  <div>
    <section class="main-slider main-slider-three">
      <Swiper
        class="swiper-container thm-swiper__slider"
        :slides-per-view="1"
        :loop="true"
        effect="fade"
        :pagination="{
          el: '#main-slider-pagination',
          type: 'bullets',
          clickable: true,
        }"
        :navigation="{
          nextEl: '#main-slider__swiper-button-next',
          prevEl: '#main-slider__swiper-button-prev',
        }"
        :autoplay="{
          delay: 5000,
          disableOnInteraction: false,
        }"
        :modules="[Autoplay, Pagination, Navigation, EffectFade]"
      >
        <SwiperSlide class="swiper-slide" v-for="(slide, index) in slides" :key="index">
          <div
            class="image-layer"
            :style="{ background: `url(${slide.image}) no-repeat center center / cover` }"
          ></div>
          <div class="shape1">
            <img src="assets/images/shapes/slider-v3-shape1.png" alt="#" />
          </div>
          <div class="container">
            <div class="main-slider-three__content">
              <div class="title">
                <h2 v-html="slide.title"></h2>
              </div>
              <div class="text">
                <p v-html="slide.text"></p>
              </div>
              <div class="btn-box">
                <nuxt-link class="thm-btn" to="/contact">
                  <span class="txt">Book Appointment</span>
                  <i class="fa fa-angle-double-right"></i>
                </nuxt-link>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <div class="main-slider__nav">
          <div class="swiper-button-prev" id="main-slider__swiper-button-next">
            <i class="icon-left-arrow"></i>
          </div>
          <div class="swiper-button-next" id="main-slider__swiper-button-prev">
            <i class="icon-right-arrow"></i>
          </div>
        </div>
      </Swiper>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'; 
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import slider_img_1 from "~/assets/images/slides/slider-v3-img1.jpg";


const slides = [
  {
    image: slider_img_1,
    title: 'We Provide <br /> Gardening Best <br /> Service',
    text: 'There are many variations of passage available the major <br /> suffered alteration'
  },
  {
    image: slider_img_1,
    title: 'We Provide <br /> Gardening Best <br /> Service',
    text: 'There are many variations of passage available the major <br /> suffered alteration'
  },
  {
    image: slider_img_1,
    title: 'We Provide <br /> Gardening Best <br /> Service',
    text: 'There are many variations of passage available the major <br /> suffered alteration'
  }
]
</script>
 