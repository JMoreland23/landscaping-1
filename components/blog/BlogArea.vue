
<template>
  <section class="blog-page">
    <div class="container">
      <div class="row">
        <div class="col-xl-8">
          <div class="blog-page__content">
            <div v-for="(blog, index) in blogs" :key="index" class="blog-page__single">
              <div class="blog-page__single-img">
                <div class="inner">
                  <img :src="blog.img" alt="#" />
                </div>
                <div class="date-box">
                  <h4 v-html="blog.date"></h4>
                </div>
              </div>
              <div class="blog-page__single-content">
                <ul class="meta-box">
                  <li>
                    <a href="#"><i class="fa fa-user"></i>{{ blog.author }}</a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-comments"></i> {{ blog.comments }} Comment</a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-heart"></i> {{ blog.likes }} Like</a>
                  </li>
                </ul>
                <h2>
                  <nuxt-link :to="blog.link">{{ blog.title }}</nuxt-link>
                </h2>
                <p class="text1">{{ blog.text1 }}</p>
                <p class="text2">{{ blog.text2 }}</p>
                <div class="btn-box">
                  <nuxt-link :to="blog.link">Read more</nuxt-link>
                </div>
              </div>
            </div>
            <ul class="styled-pagination clearfix">
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li class="arrow next active"><a href="#"><span class="icon-right-arrow"></span></a></li>
            </ul>
          </div>
        </div>

        <div class="col-xl-4">
          <div class="sidebar">
            <div class="sidebar__single sidebar__search">
              <form @submit.prevent class="sidebar__search-form">
                <input type="search" placeholder="Search..." />
                <button type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div>

            <div class="sidebar__single sidebar__category">
              <h3 class="sidebar__title">Category</h3>
              <ul class="sidebar__category-list">
                <li><a href="#">Gardening <span>(12)</span></a></li>
                <li class="active"><a href="#">Lawn Care <span>(15)</span></a></li>
                <li><a href="#">Gutter Cleaning <span>(08)</span></a></li>
                <li><a href="#">Landscaping <span>(20)</span></a></li>
                <li><a href="#">Maintenance <span>(14)</span></a></li>
                <li><a href="#">Planting Trees <span>(05)</span></a></li>
              </ul>
            </div>

            <div class="sidebar__single sidebar__post">
              <h3 class="sidebar__title">Recent Post</h3>
              <div class="sidebar__post-box">
                <div v-for="(post, index) in recentPosts" :key="index" class="sidebar__post-single">
                  <div class="sidebar-post__img">
                    <img :src="post.img" alt="#" />
                  </div>
                  <div class="sidebar__post-content-box">
                    <h3><nuxt-link :to="post.link">{{ post.title }}</nuxt-link></h3>
                  </div>
                </div>
              </div>
            </div>

            <div class="sidebar__single sidebar__tags">
              <h3 class="sidebar__title">Tags Cloud</h3>
              <ul class="sidebar__tags-list clearfix">
                <li><a href="#">Carpet</a></li>
                <li><a href="#">Office</a></li>
                <li><a href="#">Agent</a></li>
                <li><a href="#">Business</a></li>
                <li><a href="#">Love</a></li>
                <li><a href="#">Room</a></li>
                <li><a href="#">Project</a></li>
                <li><a href="#">Corporate</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import blog_img1 from '~/assets/images/blog/blog-page-img1.jpg';
import blog_img2 from '~/assets/images/blog/blog-page-img2.jpg';
import blog_img3 from '~/assets/images/blog/blog-page-img3.jpg';
import blog_img4 from '~/assets/images/blog/blog-page-img4.jpg';
import blog_img5 from '~/assets/images/blog/blog-page-img5.jpg';
import blog_img6 from '~/assets/images/blog/blog-page-img6.jpg';

const blogs = ref([
  {
    img: blog_img1,
    date: '21<br /> May',
    author: 'Jason Smith',
    comments: 0,
    likes: 0,
    title: 'Complete solution for your land & garden design',
    text1: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam,',
    text2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
    link: '/blog-details',
  },
  {
    img: blog_img2,
    date: '17<br /> Aug',
    author: 'Jason Smith',
    comments: 0,
    likes: 0,
    title: 'Ex-homeless shelter head agrees to settlement',
    text1: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam,',
    text2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
    link: '/blog-details',
  },
  {
    img: blog_img3,
    date: '23<br /> Sep',
    author: 'Jason Smith',
    comments: 0,
    likes: 0,
    title: 'The environment benefits of tower gardens',
    text1: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam,',
    text2: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
    link: '/blog-details',
  },
]);

const recentPosts = ref([
  {
    img: blog_img4,
    title: '4 Steps to a Green Lawn in the Spring',
    link: '/blog-details',
  },
  {
    img: blog_img5,
    title: 'Uthan Lawn Care Will Make You Fall in Love',
    link: '/blog-details',
  },
  {
    img: blog_img6,
    title: '3 Mosquito Infestations for Warning Signs',
    link: '/blog-details',
  },
]);
</script>

<style scoped>
/* Add your styles here */
</style>