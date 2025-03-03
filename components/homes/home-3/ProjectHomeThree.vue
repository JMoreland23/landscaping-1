
<template>  
  <section class="projects-three">
    <div
      class="projects-three__bg" :style="{ backgroundImage: `url(${bg_img_1})`, backgroundSize: 'cover', backgroundPosition: 'center' }"></div>
    <div
      class="projects-three__bg-two"
      :style="{ backgroundImage: `url(${bg_img_2})`, backgroundSize: 'cover', backgroundPosition: 'center' }"
    >
      <ul class="projects-three__bg-two-content">
        <li class="text-center">
          <div class="icon-box">
            <span class="icon-watering-plants"></span>
          </div>
          <div class="title-box">
            <h2><nuxt-link to="#">Take Care <br /> More</nuxt-link></h2>
          </div>
        </li>
        <li class="text-center">
          <div class="icon-box">
            <span class="icon-pruning-shears"></span>
          </div>
          <div class="title-box">
            <h2><nuxt-link to="#">Take Care <br /> More</nuxt-link></h2>
          </div>
        </li>
      </ul>
    </div>
    <div class="container">
      <div class="row filter-layout masonary-layout">
        <div class="col-xl-12">
          <div class="projects-three__inner">
            <div class="sec-title-three">
              <div class="sec-title-three__tagline">
                <h6>Our Portfolio</h6>
              </div>
              <h2 class="sec-title-three__title" style="color: #ffffff ">Our latest projects</h2>
            </div>
            <Swiper
              class="owl-carousel owl-theme thm-owl__carousel projects-three__carousel"
              :loop="true"
              :autoplay="{ delay: 10000, disableOnInteraction: false }"
              :navigation="{
                nextEl: '.projects-three__carousel .owl-next',
                prevEl: '.projects-three__carousel .owl-prev',
              }"
              :slides-per-view="4"
              :space-between="30"
              :breakpoints="{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }"
            >
              <SwiperSlide 
              v-for="(project, index) in projects" 
              :key="index" 
              class="projects-three__single"
              :class="index % 2 !== 0 ? 'mt45' : ''"
              >
                <div class="projects-three__single-img">
                  <img :src="project.img" alt="#" />
                  <div class="overlay-content">
                    <h2><nuxt-link to="#">{{ project.title }}</nuxt-link></h2>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
    <div class="projects-three-brand">
      <div class="auto-container">
        <Swiper
          class="thm-swiper__slider swiper-container"
          :space-between="100"
          :slides-per-view="5"
          :autoplay="{ delay: 5000, disableOnInteraction: false }"
          :breakpoints="{
            0: { spaceBetween: 30, slidesPerView: 1 },
            375: { spaceBetween: 30, slidesPerView: 1 },
            575: { spaceBetween: 30, slidesPerView: 2 },
            768: { spaceBetween: 30, slidesPerView: 3 },
            992: { spaceBetween: 30, slidesPerView: 4 },
            1200: { spaceBetween: 30, slidesPerView: 5 },
          }"
        >
          <SwiperSlide v-for="(brand, index) in brands" :key="index" class="swiper-slide">
            <img :src="brand.img" alt="#" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section> 
</template>

<script setup>

import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue'; 

import bg_img_1 from "~/assets/images/backgrounds/projects-v3-bg.jpg"
import bg_img_2 from "~/assets/images/project/projects-v3-img5.jpg"

import project_img_1 from "~/assets/images/project/projects-v3-img1.jpg"
import project_img_2 from "~/assets/images/project/projects-v3-img2.jpg"
import project_img_3 from "~/assets/images/project/projects-v3-img3.jpg"
import project_img_4 from "~/assets/images/project/projects-v3-img4.jpg"


import project_2_img_1 from "~/assets/images/brand/brand-v2-img1.png"
import project_2_img_2 from "~/assets/images/brand/brand-v2-img2.png"
import project_2_img_3 from "~/assets/images/brand/brand-v2-img3.png"
import project_2_img_4 from "~/assets/images/brand/brand-v2-img4.png"
import project_2_img_5 from "~/assets/images/brand/brand-v2-img5.png"

const projects = ref([
  { img: project_img_1, title: 'Landscaping' },
  { img: project_img_2, title: 'Landscaping' },
  { img: project_img_3, title: 'Landscaping' },
  { img: project_img_4, title: 'Landscaping' },
  { img: project_img_1, title: 'Landscaping' },
  { img: project_img_2, title: 'Landscaping' },
  { img: project_img_3, title: 'Landscaping' },
  { img: project_img_4, title: 'Landscaping' },
]);

const brands = ref([
  { img: project_2_img_1 },
  { img: project_2_img_2 },
  { img: project_2_img_3 },
  { img: project_2_img_4 },
  { img: project_2_img_5 },   
  { img: project_2_img_1 },
  { img: project_2_img_2 },
  { img: project_2_img_3 },
]);
</script>
 