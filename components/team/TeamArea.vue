
<template>
  <section class="team-one team-one--two">
    <div class="shape3 float-bob-y">
      <img src="assets/images/shapes/team-v2-shape3.png" alt="#" />
    </div>
    <div class="container">
      <div class="row">
        <div
          v-for="(member, index) in teamMembers"
          :key="index"
          class="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
          :data-wow-delay="member.delay"
        >
          <div class="team-one__single">
            <div class="shape1">
              <img src="assets/images/shapes/team-v1-shape2.png" alt="#" />
            </div>
            <div class="team-one__single-img">
              <div class="inner">
                <img :src="member.image" alt="#" />
                <ul class="social-links clearfix">
                  <li class="share">
                    <a href="#"><span class="icon-share"></span></a>
                    <ul class="social-links-inner">
                      <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                      <li><a href="#"><i class="icon-twitter"></i></a></li>
                      <li><a href="#"><i class="icon-facebook"></i></a></li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="text-box" :style="{ backgroundImage: `url(${bg_img_1})` }">
                <p>{{ member.role }}</p>
              </div>
            </div>
            <div class="team-one__single-content">
              <h3><nuxt-link :to="member.link">{{ member.name }}</nuxt-link></h3>
              <div class="rating-box">
                <ul>
                  <li v-for="star in 5" :key="star">
                    <span class="icon-pointed-star"></span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import bg_img_1 from "~//assets/images/shapes/team-v1-shape1.png";


import team_avatar_1 from "~/assets/images/team/team-v1-img1.jpg";
import team_avatar_2 from "~/assets/images/team/team-v1-img2.jpg";
import team_avatar_3 from "~/assets/images/team/team-v1-img3.jpg";
import team_avatar_4 from "~/assets/images/team/team-v1-img4.jpg";

const teamMembers = ref([
  {
    name: 'Amanda Tim',
    role: 'Founder',
    image: team_avatar_1,
    link: '/team-details',
    delay: '0.1s',
  },
  {
    name: 'David Coper',
    role: 'Gardenist',
    image: team_avatar_2,
    link: '/team-details',
    delay: '0.2s',
  },
  {
    name: 'Reshta Leo',
    role: 'Stocker',
    image: team_avatar_3,
    link: '/team-details',
    delay: '0.3s',
  },
  {
    name: 'Icrim Maha',
    role: 'Farmer',
    image: team_avatar_4,
    link: '/team-details',
    delay: '0.4s',
  },
  // Repeat members if needed
  {
    name: 'Amanda Tim',
    role: 'Founder',
    image: team_avatar_1,
    link: '/team-details',
    delay: '0.1s',
  },
  {
    name: 'David Coper',
    role: 'Gardenist',
    image: team_avatar_2,
    link: '/team-details',
    delay: '0.2s',
  },
  {
    name: 'Reshta Leo',
    role: 'Stocker',
    image: team_avatar_3,
    link: '/team-details',
    delay: '0.3s',
  },
  {
    name: 'Icrim Maha',
    role: 'Farmer',
    image: team_avatar_4,
    link: '/team-details',
    delay: '0.4s',
  },
]);
</script>

 