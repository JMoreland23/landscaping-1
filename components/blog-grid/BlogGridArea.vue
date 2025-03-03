
<template>
  <section class="blog-grid-page">
    <div class="container">
      <div class="row">
        <div
          class="col-xl-4 col-lg-4 wow animated fadeInUp"
          v-for="(blog, index) in blogs"
          :key="index"
          :data-wow-delay="getDelay(index)"
        >
          <div class="blog-one__single">
            <div class="blog-one__single-content">
              <ul class="meta-box clearfix">
                <li>
                  <div class="icon">
                    <span class="icon-calendar"></span>
                  </div>
                  <div class="text">
                    <p><a href="#">{{ blog.date }}</a></p>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <span class="icon-user"></span>
                  </div>
                  <div class="text">
                    <p><a href="#">by {{ blog.author }}</a></p>
                  </div>
                </li>
              </ul>
              <div class="blog-one__single-content-inner">
                <h2><nuxt-link :to="blog.link">{{ blog.title }}</nuxt-link></h2>
                <p>{{ blog.description }}</p>
              </div>
              <div class="blog-one__single-content-bottom clearfix">
                <ul class="clearfix">
                  <li>
                    <div class="comment-box">
                      <a href="#"><span class="icon-conversation"></span> {{ blog.comments }} comments</a>
                    </div>
                  </li>
                  <li>
                    <div class="btn-box">
                      <a href="#">Read More <span class="icon-right-arrow-1"></span></a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div class="blog-one__single-img">
              <img :src="blog.img" alt="#" />
            </div>
          </div>
        </div>
      </div>
      <ul class="styled-pagination text-center clearfix">
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li class="arrow next active"><a href="#"><span class="icon-right-arrow"></span></a></li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import blog_img_1 from "~/assets/images/blog/blog-v1-img1.jpg";
import blog_img_2 from "~/assets/images/blog/blog-v1-img2.jpg";
import blog_img_3 from "~/assets/images/blog/blog-v1-img3.jpg";
import blog_img_4 from "~/assets/images/blog/blog-v1-img4.jpg";
import blog_img_5 from "~/assets/images/blog/blog-v1-img5.jpg";
import blog_img_6 from "~/assets/images/blog/blog-v1-img6.jpg";
import blog_img_7 from "~/assets/images/blog/blog-v1-img7.jpg";
import blog_img_8 from "~/assets/images/blog/blog-v1-img8.jpg";
import blog_img_9 from "~/assets/images/blog/blog-v1-img9.jpg";

const blogs = ref([
  {
    date: 'January 2, 2023',
    author: 'Admin',
    title: 'Ex-homeless shelter head agrees to settlement',
    description: 'Nulla commodo dolor massa, vel pellen esque nulla congue quis.',
    comments: 3,
    img: blog_img_1,
    link: '/blog-details',
  },
  {
    date: 'January 2, 2023',
    author: 'Admin',
    title: 'Complete solution for your land & garden design',
    description: 'Nulla commodo dolor massa, vel pellen esque nulla congue quis.',
    comments: 3,
    img: blog_img_2,
    link: '/blog-details',
  },
  {
    date: 'January 2, 2023',
    author: 'Admin',
    title: 'The environment benefits of tower gardens',
    description: 'Nulla commodo dolor massa, vel pellen esque nulla congue quis.',
    comments: 3,
    img: blog_img_3,
    link: '/blog-details',
  },
  {
    date: 'January 2, 2023',
    author: 'Admin',
    title: 'Ex-homeless shelter head agrees to settlement',
    description: 'Nulla commodo dolor massa, vel pellen esque nulla congue quis.',
    comments: 3,
    img: blog_img_4,
    link: '/blog-details',
  },
  {
    date: 'January 2, 2023',
    author: 'Admin',
    title: 'Complete solution for your land & garden design',
    description: 'Nulla commodo dolor massa, vel pellen esque nulla congue quis.',
    comments: 3,
    img: blog_img_5,
    link: '/blog-details',
  },
  {
    date: 'January 2, 2023',
    author: 'Admin',
    title: 'The environment benefits of tower gardens',
    description: 'Nulla commodo dolor massa, vel pellen esque nulla congue quis.',
    comments: 3,
    img: blog_img_6,
    link: '/blog-details',
  },
  {
    date: 'January 2, 2023',
    author: 'Admin',
    title: 'Ex-homeless shelter head agrees to settlement',
    description: 'Nulla commodo dolor massa, vel pellen esque nulla congue quis.',
    comments: 3,
    img: blog_img_7,
    link: '/blog-details',
  },
  {
    date: 'January 2, 2023',
    author: 'Admin',
    title: 'Complete solution for your land & garden design',
    description: 'Nulla commodo dolor massa, vel pellen esque nulla congue quis.',
    comments: 3,
    img: blog_img_8,
    link: '/blog-details',
  },
  {
    date: 'January 2, 2023',
    author: 'Admin',
    title: 'The environment benefits of tower gardens',
    description: 'Nulla commodo dolor massa, vel pellen esque nulla congue quis.',
    comments: 3,
    img: blog_img_9,
    link: '/blog-details',
  },
]);

const getDelay = (index) => {
  const delays = ['0.1s', '0.2s', '0.3s'];
  return delays[index % delays.length];
};
</script>

<style scoped>
/* Add your styles here */
</style>