

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
  <header class="main-header main-header-three">
    <div class="main-header-three__inner">
      <nav class="main-menu main-menu-one">
        <div class="main-menu__wrapper clearfix">
          <div class="container-fluid">
            <div class="main-menu__wrapper-inner">
              <div class="main-header-three__left">
                <div class="main-menu-box">
                  <a @click="toggleOffCanvas" style="cursor: pointer" class="mobile-nav__toggler">
                    <i class="fa fa-bars"></i>
                  </a>
                  <NavMenu />
                </div>
              </div>

              <div class="main-header-three__middle">
                <div class="logo-box-one">
                  <NuxtLink to="/">
                    <img src="assets/images/resources/logo-3.png" alt="Awesome Logo" title="" />
                  </NuxtLink>
                </div>
              </div>

              <div class="main-header-three__right">
                <div class="main-header-three__right-contact">
                  <div class="icon-box">
                    <span class="icon-phone"></span>
                  </div>

                  <div class="content-box">
                    <p>Call In Anytime</p>
                    <a href="tel:9288006780">+92 ( 8800 ) - 6780</a>
                  </div>
                </div>

                <div class="header-search-box">
                  <a @click="toggleSearch" style="cursor: pointer" class="main-menu__search search-toggler icon-magnifying-glass"></a>
                </div>

                <div class="right-box">
                  <div class="top-box">
                    <div class="icon-box">
                      <span class="icon-dollar"></span>
                    </div>
                    <div class="text-box">
                      <p>
                        We do not received <br /> extra charges
                      </p>
                    </div>
                  </div>

                  <div class="btn-box">
                    <NuxtLink to="/contact">Book Appointment</NuxtLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <div :class="['stricky-header stricky-header--three stricked-menu main-menu', { 'stricky-fixed': sticky }]">
    <div class="sticky-header__content">
      <div class="main-menu__wrapper clearfix">
        <div class="container-fluid">
          <div class="main-menu__wrapper-inner">
            <div class="main-header-three__left">
              <div class="main-menu-box">
                <a @click="toggleOffCanvas" style="cursor: pointer" class="mobile-nav__toggler">
                  <i class="fa fa-bars"></i>
                </a>
                <NavMenu />
              </div>
            </div>

            <div class="main-header-three__middle">
              <div class="logo-box-one">
                <nuxt-link to="/">
                  <img src="assets/images/resources/logo-3.png" alt="Awesome Logo" title="" />
                </nuxt-link>
              </div>
            </div>

            <div class="main-header-three__right">
              <div class="main-header-three__right-contact">
                <div class="icon-box">
                  <span class="icon-phone"></span>
                </div>

                <div class="content-box">
                  <p>Call In Anytime</p>
                  <a href="tel:9288006780">+92 ( 8800 ) - 6780</a>
                </div>
              </div>

              <div class="header-search-box">
                <a @click="toggleSearch" style="cursor: pointer" class="main-menu__search search-toggler icon-magnifying-glass"></a>
              </div>

              <div class="right-box">
                <div class="top-box">
                  <div class="icon-box">
                    <span class="icon-dollar"></span>
                  </div>
                  <div class="text-box">
                    <p>
                      We do not received <br /> extra charges
                    </p>
                  </div>
                </div>

                <div class="btn-box">
                  <nuxt-link to="/contact">Book Appointment</nuxt-link>
                </div>
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
 