
<template>
  <div class="mobile-nav__wrapper" :class="open ? 'expanded' : ''">
    <!-- Overlay -->
    <div class="mobile-nav__overlay mobile-nav__toggler"></div>

    <!-- Content -->
    <div class="mobile-nav__content">
      <!-- Close Button -->
      <span class="mobile-nav__close mobile-nav__toggler" @click="toggleOffCanvas(false)">
        <i class="icon-plus"></i>
      </span>

      <!-- Logo -->
      <div class="logo-box">
        <NuxtLink href="/" aria-label="logo image">
          <img src="assets/images/resources/mobile-nav-logo.png" alt="Logo" />
        </NuxtLink>
      </div>

      <!-- Mobile Menu -->
      <div class="mobile-nav__container">
        <MobileMenu />
      </div>

      <!-- Contact Info -->
      <ul class="mobile-nav__contact list-unstyled">
        <li>
          <i class="fa fa-envelope"></i>
          <a href="mailto:info@example.com">info@example.com</a>
        </li>
        <li>
          <i class="fa fa-phone-alt"></i>
          <a href="tel:123456789">444 000 777 66</a>
        </li>
      </ul>

      <!-- Social Links -->
      <div class="mobile-nav__social">
        <a href="#" class="fab fa-twitter"></a>
        <a href="#" class="fab fa-facebook-square"></a>
        <a href="#" class="fab fa-pinterest-p"></a>
        <a href="#" class="fab fa-instagram"></a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import MobileMenu from '@/layouts/headers/MobileMenu.vue';

defineProps({
  open: Boolean, // Boolean prop for toggle state
  toggleOffCanvas: Function, // Function prop to update the toggle state
});
</script>

 
