
<template>
  <section class="blog-three">
    <div class="shape1">
      <img src="assets/images/shapes/blog-v3-shape1.png" alt="#" />
    </div>
    <div class="container">
      <div class="sec-title-three text-center">
        <div class="sec-title-three__tagline">
          <h6>Our Blog</h6>
        </div>
        <h2 class="sec-title-three__title">Our Latest Updates</h2>
      </div>
      <div class="row">
        <div
          class="col-xl-4 col-lg-4 wow fadeInUp"
          v-for="(blog, index) in blogs"
          :key="index"
          :data-wow-delay="index % 2 === 0 ? '.3s' : '.3s'"
        >
          <div class="blog-three__single">
            <div class="blog-three__single-img">
              <div class="inner">
                <img :src="blog.mainImg" alt="#" />
              </div>
            </div>

            <div class="blog-three__single-content">
              <div class="img-box">
                <img :src="blog.authorImg" alt="#" />
              </div>

              <div class="date-box">
                <p>{{ blog.date }}</p>
              </div>
              <div class="blog-three__single-content-inner">
                <h2>
                  <nuxt-link :to="blog.link">{{ blog.title }}</nuxt-link>
                </h2>
                <ul class="meta-box clearfix">
                  <li>
                    <div class="icon">
                      <span class="icon-save-instagram"></span>
                    </div>
                    <div class="text">
                      <p><a href="#">{{ blog.author }}</a></p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <span class="icon-conversation"></span>
                    </div>
                    <div class="text">
                      <p><a href="#">{{ blog.comments }}</a></p>
                    </div>
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

import blog_img_1 from "~/assets/images/blog/blog-v3-img1.jpg";
import blog_img_2 from "~/assets/images/blog/blog-v3-img2.jpg";
import blog_img_3 from "~/assets/images/blog/blog-v3-img3.jpg";

const blogs = ref([
  {
    mainImg: blog_img_1,
    authorImg: 'assets/images/blog/blog-v3-img4.jpg',
    date: '30 June, 2023',
    title: 'Things To Know Choose a Garden Services',
    author: 'Admin',
    comments: '02 Comment',
    link: '/blog-details',
  },
  {
    mainImg: blog_img_2,
    authorImg: 'assets/images/blog/blog-v3-img5.jpg',
    date: '19 May, 2023',
    title: 'Complete Solution For Your Land Design',
    author: 'Admin',
    comments: '02 Comment',
    link: '/blog-details',
  },
  {
    mainImg: blog_img_3,
    authorImg: 'assets/images/blog/blog-v3-img6.jpg',
    date: '29 July, 2023',
    title: 'Best Garden Edging & Border Ideas',
    author: 'Admin',
    comments: '02 Comment',
    link: '/blog-details',
  },
]);
</script>

<style scoped>
/* Add your styles here */
</style>