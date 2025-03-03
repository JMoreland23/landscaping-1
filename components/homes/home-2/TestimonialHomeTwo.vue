
<template>
  <div>
    <section class="testimonilas-two">
      <div
        class="testimonilas-two__pattern"
        :style="{ backgroundImage: `url(${bg_img_1})`}"
      ></div>
      <div
        class="testimonilas-two__bg"
        :style="{ backgroundImage: `url(${bg_img_2})`}"
      ></div>
      <div class="shape1 float-bob-y">
        <img src="assets/images/shapes/testimonilas-v2-shape1.png" alt="#" />
      </div>
      <div class="container">
        <div class="sec-title style2">
          <div class="sec-title__tagline">
            <div class="img-box">
              <img src="assets/images/resources/sec-title-img2.png" alt="#" />
            </div>
            <h6>Our Testimonilas</h6>
          </div>
          <h2 class="sec-title__title">People Say About Us</h2>
          <p class="text">
            There are many variations of passages of available, but the majority
            <br />
            have suffered alteration in some form by injected randomised.
          </p>
        </div>
        <div class="row">
          <div class="col-xl-12">
            <div class="testimonilas-two__inner">
              <swiper
                class="owl-carousel owl-theme thm-owl__carousel testimonial-two__carousel"
                :loop="true"
                :autoplay="{ delay: 5000, disableOnInteraction: false }"
                :navigation="{
                  nextEl: '.testimonial-two__carousel .owl-nav .owl-next',
                  prevEl: '.testimonial-two__carousel .owl-nav .owl-prev',
                }"
                :pagination="{
                  el: '.testimonial-two__carousel .owl-dots',
                  type: 'bullets',
                  clickable: true,
                }"
                :breakpoints="{
                  0: { slidesPerView: 1, spaceBetween: 30 },
                  768: { slidesPerView: 1, spaceBetween: 30 },
                  992: { slidesPerView: 2, spaceBetween: 30 },
                  1200: { slidesPerView: 2, spaceBetween: 30 },
                }"
              >
                <swiper-slide class="testimonilas-two__single" v-for="(testimonial, index) in testimonials" :key="index">
                  <div class="testimonilas-two__single-top">
                    <p>{{ testimonial.text }}</p>
                  </div>
                  <div class="testimonilas-two__single-bottom">
                    <div class="left-box">
                      <div class="img-box">
                        <div class="inner">
                          <img :src="testimonial?.img" alt="#" />
                        </div>
                        <div class="icon-box">
                          <span class="icon-quote-1"></span>
                        </div>
                      </div>
                      <div class="text-box">
                        <h3>{{ testimonial.name }}</h3>
                        <p>{{ testimonial.position }}</p>
                      </div>
                    </div>
                    <div class="right-box">
                      <div class="rating-box">
                        <ul>
                          <li v-for="star in 5" :key="star">
                            <span class="icon-pointed-star"></span>
                          </li>
                        </ul>
                      </div>
                      <p>5.0 Out of 3</p>
                    </div>
                  </div>
                </swiper-slide>
              </swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
// import 'swiper/swiper-bundle.css';
import bg_img_1 from "~/assets/images/pattern/testimonilas-v2-pattern.png"
import bg_img_2 from "~/assets/images/backgrounds/testimonilas-v2-bg.jpg"
import slider_img_1 from "~/assets/images/testimonial/testimonial-v2-img1.jpg"
import slider_img_2 from "~/assets/images/testimonial/testimonial-v2-img2.jpg"


const testimonials = [
  {
    text: "“ There are many variations of passages of available at but the majority have suffered alteration in some atlok form, by injected randomised words which koiu layio don’t look even slightly believable avialabalo ore a do psum is a simply to free dumy to text the pricing.”",
    img: slider_img_1,
    name: "Robert Smith",
    position: "Ceo & Founder",
  },
  {
    text: "“ There are many variations of passages of available at but the majority have suffered alteration in some atlok form, by injected randomised words which koiu layio don’t look even slightly believable avialabalo ore a do psum is a simply to free dumy to text the pricing.”",
    img: slider_img_2,
    name: "Robert Smith",
    position: "Ceo & Founder",
  },
  {
    text: "“ There are many variations of passages of available at but the majority have suffered alteration in some atlok form, by injected randomised words which koiu layio don’t look even slightly believable avialabalo ore a do psum is a simply to free dumy to text the pricing.”",
    img: slider_img_1,
    name: "Robert Smith",
    position: "Ceo & Founder",
  },
  {
    text: "“ There are many variations of passages of available at but the majority have suffered alteration in some atlok form, by injected randomised words which koiu layio don’t look even slightly believable avialabalo ore a do psum is a simply to free dumy to text the pricing.”",
    img: slider_img_2,
    name: "Robert Smith",
    position: "Ceo & Founder",
  }, 
];
</script>
 