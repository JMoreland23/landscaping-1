

<script setup>
import { ref } from 'vue'; 
import bg_img_1 from "~/assets/images/services/services-details-img4.jpg" 


// Props
const props = defineProps({
  garden: Boolean,
  arbor: Boolean,
  nursery: Boolean,
  trimming: Boolean,
  weeds: Boolean,
  fruit: Boolean,
});

const faqData = ref([
  {
    id: 1,
    question: '1. How Does Gardening Make You Feel?',
    ans: 'Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.',
  },
  {
    id: 2,
    question: '2. What Does an Inch of water mean?',
    ans: 'Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.',
  },
  {
    id: 3,
    question: '3. How Does Gardening Make You Feel?',
    ans: 'Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.',
  },
]);

const active = ref(2);

const toggle = (id) => {
  active.value = active.value === id ? id : id;
};
</script>
 

<template>
  <section class="services-details">
    <div class="container">
      <div class="row">
        <div class="col-xl-8">
          <div class="services-details__content">
            <div class="services-details__content-img1">
              <img v-if="arbor" src="assets/images/services/services-details-img1.jpg" alt="#" />
              <img v-if="garden" src="assets/images/services/services-details-img6.jpg" alt="#" />
              <img v-if="nursery" src="assets/images/services/services-details-img7.jpg" alt="#" />
              <img v-if="trimming" src="assets/images/services/services-details-img8.jpg" alt="#" />
              <img v-if="weeds" src="assets/images/services/services-details-img9.jpg" alt="#" />
              <img v-if="fruit" src="assets/images/services/services-details-img5.jpg" alt="#" />
            </div>

            <div class="text-box1">
              <h2 v-if="arbor">Arbor Management</h2>
              <h2 v-if="garden">Garden Management</h2>
              <h2 v-if="nursery">Nursery/Tree Farm</h2>
              <h2 v-if="trimming">Trimming & Pruning</h2>
              <h2 v-if="weeds">Pests & Weeds Control</h2>
              <h2 v-if="fruit">Fruits & Flowers Garden</h2>
              <p class="text1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa</p>
              <p class="text2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
              <ul>
                <li>
                  <div class="icon">
                    <span class="icon-tick"></span>
                  </div>
                  <div class="text">
                    <p>Nostrud exercitation ullamco laboris consequat.reprehenderit in voluptate</p>
                  </div>
                </li>
                <li>
                  <div class="icon">
                    <span class="icon-tick"></span>
                  </div>
                  <div class="text">
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="text-box2">
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut consequun magni dolores eos qui ratione volsnesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, sed quia non numquam eius modi tempora incidunt ut labore et dolore</p>
              <ul>
                <li><p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p></li>
                <li><p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium</p></li>
                <li><p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,</p></li>
              </ul>
            </div>

            <div class="services-details__content-img2">
              <img src="assets/images/services/services-details-img2.jpg" alt="#" />
            </div>

            <div class="text-box3">
              <p class="text1">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam,</p>
              <p class="text2">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa quisit ,officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis is amet natus error sit voluptatem accusantium doloremque laudantium, totam reaperia eaque ipsa quae ab ilnventore veritatis et quasi architecto beatae vitae dicta sunt</p>
            </div>

            <div class="text-box4">
              <div class="img-box">
                <img src="assets/images/services/services-details-img3.jpg" alt="#" />
              </div>
              <div class="content-box">
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <ul>
                  <li>
                    <div class="icon">
                      <span class="icon-tick"></span>
                    </div>
                    <div class="text">
                      <p>Duis aute irure dolor in reprehenderit in</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <span class="icon-tick"></span>
                    </div>
                    <div class="text">
                      <p>voluptate velit esse cillum dolore eu fugiat</p>
                    </div>
                  </li>
                  <li>
                    <div class="icon">
                      <span class="icon-tick"></span>
                    </div>
                    <div class="text">
                      <p>Kuis nostr exercitation ullamco laboris</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="text-box5">
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollanim id est laborum. Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam,</p>
            </div>

            <div class="faq-two__accordion faq-two__accordion--services">
              <ul class="accordion-box">
                <li
                  v-for="item in faqData"
                  :key="item.id"
                  :class="['accordion block', { 'active-block': active === item.id }]"
                >
                  <div
                    :class="['acc-btn', { active: active === item.id }]"
                    @click="toggle(item.id)"
                  >
                    <div class="icon-outer">
                      <i class="icon-plus-1"></i>
                    </div>
                    <h3>{{ item.question }}</h3>
                  </div>
                  <div :class="['acc-content', { current: active === item.id }]">
                    <p>{{ item.ans }}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="col-xl-4">
          <div class="sidebar">
            <div class="sidebar__single sidebar__search wow animated fadeInUp" data-wow-delay="0.1s">
              <form @submit.prevent class="sidebar__search-form">
                <input type="search" placeholder="Search..." />
                <button type="submit"><i class="fa fa-search"></i></button>
              </form>
            </div>
            <div class="sidebar__single sidebar__category wow animated fadeInUp" data-wow-delay="0.2s">
              <h3 class="sidebar__title">Services</h3>
              <ul class="sidebar__category-list">
                <li class="active"><a href="#">Arbor Management <span>(12)</span></a></li>
                <li><nuxt-link to="/garden-management">Garden Management <span>(15)</span></nuxt-link></li>
                <li><nuxt-link to="/nursery">Nursery/Tree Farm <span>(08)</span></nuxt-link></li>
                <li><nuxt-link to="/trimming">Trimming & Pruning <span>(20)</span></nuxt-link></li>
                <li><nuxt-link to="/weeds-control">Pests & Weeds Control <span>(14)</span></nuxt-link></li>
                <li><nuxt-link to="/flowers-garden">Fruits & Flowers Garden <span>(05)</span></nuxt-link></li>
              </ul>
            </div>
            <div class="sidebar__single sidebar__single-button-box wow animated fadeInUp" data-wow-delay="0.3s">
              <div class="btn-one">
                <a href="#">Download Doc <span class="fa fa-download"></span></a>
              </div>
              <div class="btn-one btn-one--two">
                <a href="#">Download Pdf<span class="fa fa-file-pdf"></span></a>
              </div>
            </div>
            <div class="sidebar__single sidebar__tags wow animated fadeInUp" data-wow-delay="0.4s">
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
            <div class="sidebar__single sidebar__support wow animated fadeInUp" data-wow-delay="0.5s">
              <div class="sidebar__support-bg" :style="{ backgroundImage: `url(${bg_img_1})` }"></div>
              <h3 class="sidebar__suppot-title">Have Any Query?</h3>
              <p class="sidebar__suppot-text">Great fruit grass their are first over spirit good whose very subdue</p>
              <div class="sidebar__support-btn-box">
                <a class="thm-btn" href="#"><span class="txt">Send Message</span></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

