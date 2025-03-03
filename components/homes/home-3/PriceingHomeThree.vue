
<template>
  <div>
    <section class="pricing-table-two">
      <div class="container">
        <div class="sec-title-three text-center">
          <div class="sec-title-three__tagline">
            <h6>Pricing table</h6>
          </div>
          <h2 class="sec-title-three__title">We offer best price</h2>
        </div>
        <div class="row">
          <div
            class="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
            v-for="(plan, index) in pricingPlans"
            :key="index"
            :data-wow-delay="plan.delay"
          >
            <div class="pricing-table-two__single">
              <div class="icon-box">
                <img :src="plan.icon" alt="#" />
              </div>
  
              <div class="pricing-table-two__single-inner text-center">
                <div class="top-content">
                  <h2>{{ plan.price }}</h2>
                  <h3><nuxt-link :to="plan.link">{{ plan.title }}</nuxt-link></h3>
                  <p>{{ plan.employees }}</p>
                </div>
  
                <div class="bottom-content">
                  <p>Effective & Affordable Tree</p>
                  <p>In-Depth HR Audit</p>
                  <p>Plus One-Time Bambee</p>
                </div>
              </div>
  
              <div class="btn-box">
                <nuxt-link :to="plan.link">Get It Now</nuxt-link>
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
import icon from "~/assets/images/icon/pricing-table-v2-icon1.png";

const pricingPlans = ref([
  {
    price: '$199',
    title: 'New Business',
    employees: '3-18 Employees',
    icon: icon,
    link: '#',
    delay: '0.1s',
  },
  {
    price: '$399',
    title: 'Small Business',
    employees: '5-17 Employees',
    icon: icon,
    link: '#',
    delay: '0.2s',
  },
  {
    price: '$699',
    title: 'Large Business',
    employees: 'Unlimited Employees',
    icon: icon,
    link: '#',
    delay: '0.3s',
  },
  {
    price: '$999',
    title: 'Growing Business',
    employees: '7-21 Employees',
    icon: icon,
    link: '#',
    delay: '0.4s',
  },
]);
</script>

<style scoped>
/* Add your styles here */
</style>