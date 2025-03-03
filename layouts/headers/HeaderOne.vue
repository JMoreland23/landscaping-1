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
  <header class="main-header main-header-one">
    <div class="main-header-one__top">
      <div class="auto-container">
        <div class="main-header-one__top-inner">
          <div class="main-header-one__top-left">
            <ul class="main-header__contact-info">
              <li>
                <div class="inner">
                  <div class="icon-box">
                    <span class="icon-time"></span>
                  </div>
                  <div class="text-box">
                    <p>Mon to Sat: 09:00 am to 05:00 pm</p>
                  </div>
                </div>
              </li>

              <li>
                <div class="inner">
                  <div class="icon-box">
                    <span class="icon-email"></span>
                  </div>
                  <div class="text-box">
                    <p>
                      <a href="mailto:yourmail@email.com">
                        needhelp@company.com
                      </a>
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div class="main-header-one__top-right">
            <div class="main-header-one__top-menu">
              <ul class="main-header-one__top-menu-list">
                <li><a href="#">Our Faqs</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <ul class="main-header-one__top-social-links">
              <li><a href="#"><span class="icon-facebook"></span></a></li>
              <li><a href="#"><span class="icon-twitter"></span></a></li>
              <li><a href="#"><span class="icon-pinterest"></span></a></li>
              <li><a href="#"><span class="icon-instagram"></span></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="main-header-one__bottom">
      <div class="main-header-one__bottom-inner">
        <nav class="main-menu main-menu-one">
          <div class="main-menu__wrapper clearfix">
            <div class="auto-container">
              <div class="main-menu__wrapper-inner">
                <div class="main-header-one__bottom-left">
                  <div class="logo-box-one">
                    <NuxtLink to="/">
                      <img
                        src="/assets/images/resources/logo-1.png"
                        alt="Awesome Logo"
                        title="logo"
                      />
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
                    <a
                      @click="toggleSearch"
                      style="cursor: pointer"
                      class="main-menu__search search-toggler icon-magnifying-glass"
                    ></a>
                  </div>
                  <div class="main-header-one__bottom-right-btn">
                    <NuxtLink to="/contact">Get A Quote</NuxtLink>
                  </div>

                  <div class="contact-box">
                    <div class="icon">
                      <span class="icon-chatting"></span>
                    </div>
                    <div class="text">
                      <p>Call Anytime</p>
                      <a href="tel:926668880000">92 666 888 0000</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>

  <div
    class="stricky-header stricky-header--one stricked-menu main-menu"
    :class="{ 'stricky-fixed': sticky }"
  >
    <div class="sticky-header__content">
      <div class="main-menu__wrapper clearfix">
        <div class="auto-container">
          <div class="main-menu__wrapper-inner">
            <div class="main-header-one__bottom-left">
              <div class="logo-box-one">
                <NuxtLink to="/">
                  <img src="/assets/images/resources/logo-1.png" alt="Awesome Logo" title="" />
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
                <a
                  @click="toggleSearch"
                  style="cursor: pointer"
                  class="main-menu__search search-toggler icon-magnifying-glass"
                ></a>
              </div>
              <div class="main-header-one__bottom-right-btn">
                <NuxtLink to="/contact">Get A Quote</NuxtLink>
              </div>

              <div class="contact-box">
                <div class="icon">
                  <span class="icon-chatting"></span>
                </div>
                <div class="text">
                  <p>Call Anytime</p>
                  <a href="tel:926668880000">92 666 888 0000</a>
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


