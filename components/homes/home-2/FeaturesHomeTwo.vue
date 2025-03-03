

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import bg_img_1 from "~/assets/images/backgrounds/features-v1-bg.png"

 

const features = [
  { icon: 'icon-lawn-mower', title: 'Maintenance', description: 'We’ve been using tech' },
  { icon: 'icon-shovels', title: 'URBAN', description: 'We’ve been using tech' },
  { icon: 'icon-agriculture', title: 'Landscaping', description: 'We’ve been using tech' },
  { icon: 'icon-gardening-1', title: 'Events', description: 'We’ve been using tech' },
  { icon: 'icon-lawn-mower', title: 'Maintenance', description: 'We’ve been using tech' },
  { icon: 'icon-shovels', title: 'URBAN', description: 'We’ve been using tech' },
  { icon: 'icon-agriculture', title: 'Landscaping', description: 'We’ve been using tech' },
  { icon: 'icon-gardening-1', title: 'Events', description: 'We’ve been using tech' },
]
</script>

<template>
  <div>
    <section class="features-one">
    <div class="features-one__bg" :style="{ backgroundImage: `url(${bg_img_1})` }"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-12">
          <div class="features-one__inner">
            <Swiper
              class="owl-carousel owl-theme thm-owl__carousel features-one__carousel"
              :loop="true"
              :autoplay="{ delay: 5000, disableOnInteraction: false }"
              :space-between="30"
              :modules="[Autoplay]"
              :breakpoints="{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                992: { slidesPerView: 3 },
                1200: { slidesPerView: 4 }
              }"
            >
              <SwiperSlide class="features-one__single text-center" v-for="(feature, index) in features" :key="index">
                <div class="features-one__single-inner">
                  <div class="icon-box">
                    <span :class="feature.icon"></span>
                  </div>
                  <div class="text-box">
                    <h2><a href="#">{{ feature.title }}</a></h2>
                    <p>{{ feature.description }}</p>
                  </div>
                </div>
                <div class="count-box"></div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>


