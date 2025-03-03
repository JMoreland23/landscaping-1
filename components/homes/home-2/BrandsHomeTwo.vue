
<template>
  <div>
    <section class="brand-one brand-one--two">
      <div
        class="brand-one--two__bg"
        :style="{ backgroundImage: `url(${bg_img_1})` }"
      ></div>
      <div class="auto-container">
        <Swiper
          class="thm-swiper__slider swiper-container"
          :space-between="100"
          :slides-per-view="5"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :loop="true"
          :speed="1000"
          :modules="[Autoplay]"
          :breakpoints="{
            0: { spaceBetween: 30, slidesPerView: 1 },
            375: { spaceBetween: 30, slidesPerView: 1 },
            575: { spaceBetween: 30, slidesPerView: 2 },
            768: { spaceBetween: 30, slidesPerView: 3 },
            992: { spaceBetween: 30, slidesPerView: 4 },
            1200: { spaceBetween: 30, slidesPerView: 5 },
          }"
        >
          <SwiperSlide class="swiper-slide">
            <img src="assets/images/brand/brand-v2-img1.png" alt="#" />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img src="assets/images/brand/brand-v2-img2.png" alt="#" />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img src="assets/images/brand/brand-v2-img3.png" alt="#" />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img src="assets/images/brand/brand-v2-img4.png" alt="#" />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img src="assets/images/brand/brand-v2-img5.png" alt="#" />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img src="assets/images/brand/brand-v2-img1.png" alt="#" />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img src="assets/images/brand/brand-v2-img2.png" alt="#" />
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <img src="assets/images/brand/brand-v2-img3.png" alt="#" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";

import bg_img_1 from "~/assets/images/backgrounds/brand-v2-bg.jpg";
</script>