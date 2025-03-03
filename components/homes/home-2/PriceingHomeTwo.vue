
<template>
<div>
  <section class="pricing-table-one">
    <div class="shape1 float-bob-y">
      <img src="assets/images/shapes/pricing-table-v1-shape1.png" alt="#" />
    </div>
    <div class="shape2 float-bob-y">
      <img src="assets/images/shapes/pricing-table-v1-shape2.png" alt="#" />
    </div>
    <div class="pricing-table-one__bg" 
         :style="{background: 'url(/assets/images/backgrounds/pricing-v1-bg.jpg)', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}">
    </div>
    <div class="container">
      <div class="sec-title style2">
        <div class="sec-title__tagline">
          <div class="img-box">
            <img src="assets/images/resources/sec-title-img.png" alt="#" />
          </div>
          <h6>Pricing Table</h6>
        </div>
        <h2 class="sec-title__title">Our Latest Packages</h2>
      </div>
      <div class="row">
        <div class="col-xl-12">
          <div class="pricing-table-one__inner">
            <Swiper
              class="thm-swiper__slider swiper-container"
              :loop="true"
              :autoplay="{ delay: 10000, disableOnInteraction: false }"
              :slides-per-view="2"
              :space-between="30"
              :navigation="{ nextEl: '.owl-next', prevEl: '.owl-prev' }"
              :modules="[Navigation, Autoplay]"
              :breakpoints="{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 1 },
                992: { slidesPerView: 1 },
                1200: { slidesPerView: 2 }
              }"
            >
              <SwiperSlide class="d-flex pricing-table-one__single">
                <div class="pricing-table-one__single-left text-center">
                  <div class="top-content">
                    <div class="title">
                      <h3>Best Choice</h3>
                    </div>
                    <div class="text-box">
                      <h2>Growing Business</h2>
                      <p>2-6 Employes</p>
                    </div>
                  </div>
                  <div class="img-box">
                    <img src="assets/images/resources/pricing-table-v1-img1.png" alt="#" />
                  </div>
                  <div class="bottom-content">
                    <h2>$ <span>199</span> /Month</h2>
                  </div>
                </div>
                <div class="pricing-table-one__single-right">
                  <ul>
                    <li><p>Gardens Service</p></li>
                    <li><p>Forest Planning</p></li>
                    <li><p>Gardens Party</p></li>
                    <li><p>Exciting Feature</p></li>
                    <li><p>Exciting Feature</p></li>
                  </ul>
                  <div class="pricing-table-one__single-right-btn">
                    <a href="#">Get It Now</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="d-flex pricing-table-one__single">
                <div class="pricing-table-one__single-left text-center">
                  <div class="top-content">
                    <div class="title">
                      <h3>Best Choice</h3>
                    </div>
                    <div class="text-box">
                      <h2>Large Business</h2>
                      <p>8-19 Employes</p>
                    </div>
                  </div>
                  <div class="img-box">
                    <img src="assets/images/resources/pricing-table-v1-img1.png" alt="#" />
                  </div>
                  <div class="bottom-content">
                    <h2>$ <span>399</span> /Month</h2>
                  </div>
                </div>
                <div class="pricing-table-one__single-right">
                  <ul>
                    <li><p>Gardens Service</p></li>
                    <li><p>Forest Planning</p></li>
                    <li><p>Gardens Party</p></li>
                    <li><p>Exciting Feature</p></li>
                    <li><p>Exciting Feature</p></li>
                  </ul>
                  <div class="pricing-table-one__single-right-btn">
                    <a href="#">Get It Now</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="d-flex pricing-table-one__single">
                <div class="pricing-table-one__single-left text-center">
                  <div class="top-content">
                    <div class="title">
                      <h3>Best Choice</h3>
                    </div>
                    <div class="text-box">
                      <h2>Growing Business</h2>
                      <p>2-6 Employes</p>
                    </div>
                  </div>
                  <div class="img-box">
                    <img src="assets/images/resources/pricing-table-v1-img1.png" alt="#" />
                  </div>
                  <div class="bottom-content">
                    <h2>$ <span>199</span> /Month</h2>
                  </div>
                </div>
                <div class="pricing-table-one__single-right">
                  <ul>
                    <li><p>Gardens Service</p></li>
                    <li><p>Forest Planning</p></li>
                    <li><p>Gardens Party</p></li>
                    <li><p>Exciting Feature</p></li>
                    <li><p>Exciting Feature</p></li>
                  </ul>
                  <div class="pricing-table-one__single-right-btn">
                    <a href="#">Get It Now</a>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide class="d-flex pricing-table-one__single">
                <div class="pricing-table-one__single-left text-center">
                  <div class="top-content">
                    <div class="title">
                      <h3>Best Choice</h3>
                    </div>
                    <div class="text-box">
                      <h2>Large Business</h2>
                      <p>8-19 Employes</p>
                    </div>
                  </div>
                  <div class="img-box">
                    <img src="assets/images/resources/pricing-table-v1-img1.png" alt="#" />
                  </div>
                  <div class="bottom-content">
                    <h2>$ <span>399</span> /Month</h2>
                  </div>
                </div>
                <div class="pricing-table-one__single-right">
                  <ul>
                    <li><p>Gardens Service</p></li>
                    <li><p>Forest Planning</p></li>
                    <li><p>Gardens Party</p></li>
                    <li><p>Exciting Feature</p></li>
                    <li><p>Exciting Feature</p></li>
                  </ul>
                  <div class="pricing-table-one__single-right-btn">
                    <a href="#">Get It Now</a>
                  </div>
                </div>
              </SwiperSlide>
              <!-- <div class="owl-nav">
                <button type="button" class="owl-prev">
                  <span class="icon-left-arrow"></span>
                </button>
                <button type="button" class="owl-next">
                  <span class="icon-right-arrow"></span>
                </button>
              </div> -->
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>   
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Navigation } from 'swiper/modules'


</script>

 