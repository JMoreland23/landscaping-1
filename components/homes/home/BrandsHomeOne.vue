<template>
  <section class="brand-one">
    <div class="auto-container">
      <Swiper
        :loop="true"
        :spaceBetween="100"
        :slidesPerView="5"
        :speed="1400"
        :freeMode="true" 
        :watchSlidesProgress="true"
        :autoplay="{ delay: 5000 }"
        :breakpoints="breakpoints"
        class="thm-swiper__slider swiper-container"
      >
        <SwiperSlide class="swiper-slide">
          <img src="assets/images/brand/brand-v1-img1.png" alt="#" />
        </SwiperSlide>

        <SwiperSlide class="swiper-slide">
          <img src="assets/images/brand/brand-v1-img2.png" alt="#" />
        </SwiperSlide>

        <SwiperSlide class="swiper-slide">
          <img src="assets/images/brand/brand-v1-img3.png" alt="#" />
        </SwiperSlide>

        <SwiperSlide class="swiper-slide">
          <img src="assets/images/brand/brand-v1-img4.png" alt="#" />
        </SwiperSlide>

        <SwiperSlide class="swiper-slide">
          <img src="assets/images/brand/brand-v1-img5.png" alt="#" />
        </SwiperSlide>

        <SwiperSlide class="swiper-slide">
          <img src="assets/images/brand/brand-v1-img1.png" alt="#" />
        </SwiperSlide>

        <SwiperSlide class="swiper-slide">
          <img src="assets/images/brand/brand-v1-img2.png" alt="#" />
        </SwiperSlide>

        <SwiperSlide class="swiper-slide">
          <img src="assets/images/brand/brand-v1-img3.png" alt="#" />
        </SwiperSlide>
      </Swiper>
    </div>
  </section>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const breakpoints = {
  0: {
    spaceBetween: 30,
    slidesPerView: 1
  },
  375: {
    spaceBetween: 30,
    slidesPerView: 1
  },
  575: {
    spaceBetween: 30,
    slidesPerView: 2
  },
  767: {
    spaceBetween: 30,
    slidesPerView: 2
  },
  991: {
    spaceBetween: 30,
    slidesPerView: 3
  },
  1199: {
    spaceBetween: 30,
    slidesPerView: 5
  }
};
</script>

<style scoped>
/* Add your custom styles here */
</style>