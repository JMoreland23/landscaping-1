
<template>
  <div>
    <section :class="['team-two', { 'team-two--about': style_2 }]">
      <template v-if="!style_2">
        <div class="shape1 float-bob-y">
          <img src="assets/images/shapes/team-v2-shape1.png" alt="#" />
        </div>
        <div class="shape2 float-bob-y">
          <img src="assets/images/shapes/team-v2-shape2.png" alt="#" />
        </div>
      </template>
      <div class="container">
        <div class="sec-title-three text-center">
          <div class="sec-title-three__tagline">
            <h6>Our Team</h6>
          </div>
          <h2 class="sec-title-three__title">Our expert members</h2>
        </div>
        <div class="row">
          <div
            class="col-xl-3 col-lg-6 col-md-6 wow fadeInLeft"
            v-for="(member, index) in teamMembers"
            :key="index"
            :data-wow-delay="member.delay"
            data-wow-duration="1000ms"
          >
            <div class="team-two__single">
              <div class="team-two__single-img">
                <img :src="member.image" alt="#" />
                <ul class="social-links clearfix">
                  <li class="share">
                    <a href="#"><span class="icon-share"></span></a>
                    <ul class="social-links-inner">
                      <li><a :href="member.instagram"><i class="fab fa-instagram"></i></a></li>
                      <li><a :href="member.twitter"><i class="icon-twitter"></i></a></li>
                      <li><a :href="member.facebook"><i class="icon-facebook"></i></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="team-two__single-content">
                <h2>
                  <nuxt-link :to="member.link">{{ member.name }}</nuxt-link>
                </h2>
                <p>{{ member.position }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>    
  </div>
</template>

<script setup>
import { ref } from 'vue';

// Props
const props = defineProps({
  style_2: Boolean,
});

import avatar_1 from "~/assets/images/team/team-v2-img1.jpg";
import avatar_2 from "~/assets/images/team/team-v2-img2.jpg";
import avatar_3 from "~/assets/images/team/team-v2-img3.jpg";
import avatar_4 from "~/assets/images/team/team-v2-img4.jpg";

// Team members data
const teamMembers = ref([
  {
    name: 'Amanda Tim',
    position: 'Stocker',
    image: avatar_1,
    link: '/team-details',
    instagram: '#',
    twitter: '#',
    facebook: '#',
    delay: '0ms',
  },
  {
    name: 'Humbled Dow',
    position: 'Gardenist',
    image: avatar_2,
    link: '/team-details',
    instagram: '#',
    twitter: '#',
    facebook: '#',
    delay: '100ms',
  },
  {
    name: 'Munia Anchor',
    position: 'Garden Experts',
    image: avatar_3,
    link: '/team-details',
    instagram: '#',
    twitter: '#',
    facebook: '#',
    delay: '0ms',
  },
  {
    name: 'Albert Hopper',
    position: 'Founder',
    image: avatar_4,
    link: '/team-details',
    instagram: '#',
    twitter: '#',
    facebook: '#',
    delay: '100ms',
  },
]);
</script>

<style scoped>
/* Add your styles here */
</style>