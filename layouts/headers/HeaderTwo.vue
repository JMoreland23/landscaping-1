
<script setup>
import { ref } from 'vue'; 
import NavMenu from './NavMenu.vue';
import Search from '@/components/common/Search.vue';
import OffCanvas from '@/components/common/OffCanvas.vue';
 
const open = ref(false);
const search = ref(false);

// Toggles for search and off-canvas
const toggleSearch = () => (search.value = !search.value);
const toggleOffCanvas = () => (open.value = !open.value);

// menu sticky 
const sticky = ref(false);
const stickyHeader = ()  => {
  if (window.scrollY > 200) {
    sticky.value = true;
  } else {
    sticky.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', stickyHeader);
});

onUnmounted(() => {
  window.removeEventListener('scroll', stickyHeader);
});


 


</script>

<template>
 <div>
  <header class="main-header main-header-one main-header-two">
    <!-- Start Main Header Two Top -->
    <div class="main-header-two__top">
      <div class="auto-container">
        <div class="main-header-two__top-inner">
          <div class="main-header-two__top-left">
            <ul class="main-header-two__top-contact-info">
              <li>
                <div class="inner">
                  <div class="icon-box">
                    <span class="icon-back-in-time"></span>
                  </div>
                  <div class="text-box">
                    <p>Opening time</p>
                    <h6>Mon-Fri:9.00-19:00</h6>
                  </div>
                </div>
              </li>
              <li>
                <div class="inner">
                  <div class="icon-box">
                    <span class="icon-phone-call-1"></span>
                  </div>
                  <div class="text-box">
                    <p>Call anytime </p>
                    <h6>
                      <a href="tel:980009630">+ 98 (000) - 9630</a>
                    </h6>
                  </div>
                </div>
              </li>
              <li>
                <div class="inner">
                  <div class="icon-box">
                    <span class="icon-message"></span>
                  </div>
                  <div class="text-box">
                    <p>Send email </p>
                    <h6>
                      <a href="mailto:yourmail@email.com">info@company.com</a>
                    </h6>
                  </div>
                </div>
              </li>
              <li>
                <div class="inner">
                  <div class="icon-box">
                    <span class="icon-placeholder"></span>
                  </div>
                  <div class="text-box">
                    <p>380 St Kilda Road</p>
                    <h6>Melbourne, Australia</h6>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="main-header-two__top-social-links">
            <div class="title-box">
              <h4>Follow Now</h4>
            </div>
            <ul class="social-links">
              <li>
                <a href="#"><span class="icon-twitter"></span></a>
              </li>
              <li>
                <a href="#"><span class="icon-facebook"></span></a>
              </li>
              <li>
                <a href="#"><span class="icon-pinterest"></span></a>
              </li>
              <li>
                <a href="#"><span class="icon-instagram"></span></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <!-- End Main Header Two Top -->

    <!-- Start Main Header One Bottom -->
    <div class="main-header-one__bottom">
      <div
        class="main-header-two__bottom-bg"
        :style="{ backgroundImage: 'url(/assets/images/shapes/main-header-v2-bg.png)' }"
      ></div>
      <div class="main-header-one__bottom-inner">
        <nav class="main-menu main-menu-one">
          <div class="main-menu__wrapper clearfix">
            <div class="auto-container">
              <div class="main-menu__wrapper-inner">
                <div class="main-header-one__bottom-left">
                  <div class="logo-box-one">
                    <NuxtLink to="/">
                      <img src="assets/images/resources/logo-2.png" alt="Awesome Logo" title="" />
                    </NuxtLink>
                  </div>
                </div>
                <div class="main-header-one__bottom-middle">
                  <div class="main-menu-box">
                    <a @click="toggleOffCanvas" style="cursor: pointer" class="mobile-nav__toggler">
                      <i class="fa fa-bars"></i>
                    </a>
                    <NavMenu />
                  </div>
                </div>
                <div class="main-header-one__bottom-right">
                  <div class="header-search-box">
                    <a @click="toggleSearch" style="cursor: pointer" class="main-menu__search search-toggler icon-magnifying-glass"></a>
                  </div>
                  <div class="main-header-one__bottom-right-btn">
                    <NuxtLink to="/contact">Book Appointment</NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- End Main Header Two Bottom -->
  </header>

  <div :class="['stricky-header stricky-header--two stricked-menu main-menu', { 'stricky-fixed': sticky }]">
    <div class="sticky-header__content">
      <div class="main-menu__wrapper clearfix">
        <div class="auto-container">
          <div class="main-menu__wrapper-inner">
            <div class="main-header-one__bottom-left">
              <div class="logo-box-one">
                <NuxtLink to="/">
                  <img src="assets/images/resources/logo-2.png" alt="Awesome Logo" title="" />
                </NuxtLink>
              </div>
            </div>
            <div class="main-header-one__bottom-middle">
              <div class="main-menu-box">
                <a href="#" class="mobile-nav__toggler">
                  <i class="fa fa-bars"></i>
                </a>
                <NavMenu />
              </div>
            </div>
            <div class="main-header-one__bottom-right">
              <div class="header-search-box">
                <a @click="toggleSearch" style="cursor: pointer" class="main-menu__search search-toggler icon-magnifying-glass"></a>
              </div>
              <div class="main-header-one__bottom-right-btn">
                <NuxtLink to="/contact">Book Appointment</NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <Search :search="search" :toggleSearch="toggleSearch" />
  <OffCanvas :open="open" :toggleOffCanvas="toggleOffCanvas" />

 </div>
   
</template>

 