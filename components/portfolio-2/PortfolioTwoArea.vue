
<template>
  <section class="projects-three projects-three--portfolio2">
    <div class="auto-container">
      <div class="row filter-layout masonary-layout">
        <div class="col-xl-12">
          <div class="projects-three__inner">
            <Swiper
              class="owl-carousel owl-theme thm-owl__carousel projects-three__carousel"
              :loop="true"
              :spaceBetween="30"
              :autoplay="{ delay: 10000, disableOnInteraction: false }"
              :navigation="{ nextEl: '.owl-next', prevEl: '.owl-prev' }"
              :modules="[Autoplay, Navigation]"
              :breakpoints="{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 },
              }"
            >
              <SwiperSlide v-for="(slide, index) in slides" :key="index" :class="index % 2 === 1 ? 'mt45' : ''">
                <div class="projects-three__single">
                  <div class="projects-three__single-img">
                    <img :src="slide.img" alt="#" />
                    <div class="overlay-content">
                      <h2><a href="#">{{ slide.title }}</a></h2>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              <div class="owl-nav disabled d-flex justify-content-center">
                <button type="button" role="presentation" class="owl-prev">
                  <span class="icon-left-arrow"></span>
                </button>
                <button type="button" role="presentation" class="owl-next">
                  <span class="icon-right-arrow"></span>
                </button>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Navigation } from 'swiper/modules';

import portfolio1 from '~/assets/images/project/projects-v3-img1.jpg';
import portfolio2 from '~/assets/images/project/projects-v3-img2.jpg';
import portfolio3 from '~/assets/images/project/projects-v3-img3.jpg';
import portfolio4 from '~/assets/images/project/projects-v3-img4.jpg';

const slides = ref([
  { img: portfolio1, title: 'Landscaping' },
  { img: portfolio2, title: 'Landscaping' },
  { img: portfolio3, title: 'Landscaping' },
  { img: portfolio4, title: 'Landscaping' },
  { img: portfolio1, title: 'Landscaping' },
  { img: portfolio2, title: 'Landscaping' },
  { img: portfolio3, title: 'Landscaping' },
  { img: portfolio4, title: 'Landscaping' },
]);
</script>

<style scoped>
/* Add your styles here */
.mt45 {
  margin-top: 45px;
}
</style>