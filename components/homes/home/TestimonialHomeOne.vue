

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'

import bg_img_1 from "~/assets/images/shapes/testimonial-v1-shape1.png"


</script>


<template>
  <section class="testimonial-one">
    <div class="shape2"></div>
    <div class="shape5"></div>
    <div class="container">
      <div class="row">
        <!-- Start Testimonial One Img -->
        <div class="col-xl-6">
          <div class="testimonial-one__img">
            <div class="shape1"></div>
            <div class="shape3"></div>
            <div class="shape4"></div>
            <div class="testimonial-one__img1">
              <img src="assets/images/testimonial/testimonial-v1-img1.png" alt="#" />
            </div>
            <div class="testimonial-one__img2">
              <img src="assets/images/testimonial/testimonial-v1-img2.png" alt="#" />
            </div>
            <div class="testimonial-one__img3">
              <img src="assets/images/testimonial/testimonial-v1-img3.png" alt="#" />
            </div>
            <div class="testimonial-one__img4">
              <img src="assets/images/testimonial/testimonial-v1-img4.png" alt="#" />
            </div>
            <div class="testimonial-one__img5">
              <img src="assets/images/testimonial/testimonial-v1-img5.png" alt="#" />
            </div>
            <div class="testimonial-one__img6">
              <img src="assets/images/testimonial/testimonial-v1-img1.png" alt="#" />
            </div>
            <div class="testimonial-one__img7">
              <div class="inner">
                <img src="assets/images/testimonial/testimonial-v1-img6.png" alt="#" />
              </div>
            </div>
          </div>
        </div>
        <!-- End Testimonial One Img -->

        <!-- Start Testimonial One Content -->
        <div class="col-xl-6">
          <div class="testimonial-one__content">
            <div class="sec-title">
              <div class="sec-title__tagline">
                <h6>Our Client</h6>
                <span class="right"></span>
              </div>
              <h2 class="sec-title__title">Our Sweet Client Say</h2>
            </div>

            <div class="testimonial-one__content-inner">
              <Swiper
                class="owl-carousel owl-theme thm-owl__carousel testimonial-one__carousel"
                :loop="true"
                :autoplay="{ delay: 10000, disableOnInteraction: false }"
                :speed="500"
                :spaceBetween="0"
                :navigation="false"
                :pagination="{ clickable: true }"
                :modules="[Autoplay]"
                :slidesPerView="1"
              >
                <!-- Start Testimonial One Single -->
                <SwiperSlide class="testimonial-one__single">
                  <div class="testimonial-one__single-bg" :style="{ backgroundImage: `url(${bg_img_1})` }"></div>
                  <div class="inner">
                    <div class="img-box">
                      <div class="inner-box">
                        <img src="assets/images/testimonial/testimonial-v1-img7.jpg" alt="#" />
                      </div>
                      <div class="icon-box">
                        <span class="icon-quote"></span>
                      </div>
                    </div>
                    <div class="content-box">
                      <p>There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.</p>
                      <div class="client-info">
                        <div class="text-box">
                          <h2>Bonnie tolbet</h2>
                          <p>Customer</p>
                        </div>
                        <div class="rating-box">
                          <ul>
                            <li><span class="icon-pointed-star"></span></li>
                            <li><span class="icon-pointed-star"></span></li>
                            <li><span class="icon-pointed-star"></span></li>
                            <li><span class="icon-pointed-star"></span></li>
                            <li><span class="icon-pointed-star"></span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <!-- End Testimonial One Single -->

                <!-- Start Testimonial One Single -->
                <SwiperSlide class="testimonial-one__single">
                  <div class="testimonial-one__single-bg" :style="{ backgroundImage: `url(${bg_img_1})` }"></div>
                  <div class="inner">
                    <div class="img-box">
                      <div class="inner-box">
                        <img src="assets/images/testimonial/testimonial-v1-img7.jpg" alt="#" />
                      </div>
                      <div class="icon-box">
                        <span class="icon-quote"></span>
                      </div>
                    </div>
                    <div class="content-box">
                      <p>There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.</p>
                      <div class="client-info">
                        <div class="text-box">
                          <h2>Bonnie tolbet</h2>
                          <p>Customer</p>
                        </div>
                        <div class="rating-box">
                          <ul>
                            <li><span class="icon-pointed-star"></span></li>
                            <li><span class="icon-pointed-star"></span></li>
                            <li><span class="icon-pointed-star"></span></li>
                            <li><span class="icon-pointed-star"></span></li>
                            <li><span class="icon-pointed-star"></span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <!-- End Testimonial One Single -->

                <!-- Start Testimonial One Single -->
                <SwiperSlide class="testimonial-one__single">
                  <div class="testimonial-one__single-bg" :style="{ backgroundImage: `url(${bg_img_1})` }"></div>
                  <div class="inner">
                    <div class="img-box">
                      <div class="inner-box">
                        <img src="assets/images/testimonial/testimonial-v1-img7.jpg" alt="#" />
                      </div>
                      <div class="icon-box">
                        <span class="icon-quote"></span>
                      </div>
                    </div>
                    <div class="content-box">
                      <p>There are many variations of passage of available but the majority have suffered alteration in some form by injected humor or randomed.</p>
                      <div class="client-info">
                        <div class="text-box">
                          <h2>Bonnie tolbet</h2>
                          <p>Customer</p>
                        </div>
                        <div class="rating-box">
                          <ul>
                            <li><span class="icon-pointed-star"></span></li>
                            <li><span class="icon-pointed-star"></span></li>
                            <li><span class="icon-pointed-star"></span></li>
                            <li><span class="icon-pointed-star"></span></li>
                            <li><span class="icon-pointed-star"></span></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <!-- End Testimonial One Single -->

              </Swiper>
            </div>
          </div>
        </div>
        <!-- End Testimonial One Content -->
      </div>
    </div>
  </section>
</template>


 