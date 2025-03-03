
<template>
  <div>
    <section class="faq-two">
      <div class="shape1 float-bob-y">
        <img src="assets/images/shapes/faq-v2-shape1.png" alt="#" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xl-5">
            <div class="faq-two__accordion">
              <div class="sec-title-three">
                <div class="sec-title-three__tagline">
                  <h6>faq</h6>
                </div>
                <h2 class="sec-title-three__title">Have you question?</h2>
              </div>
  
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
          <div class="col-xl-7">
            <div class="faq-two__content">
              <div class="faq-two__content-img">
                <img src="assets/images/resources/faq-v2-img1.jpg" alt="#" />
              </div>
  
              <div class="faq-two__content-bottom clearfix">
                <div class="experience-box text-center">
                  <div class="icon-box">
                    <span class="icon-gardener-1"></span>
                  </div>
  
                  <div class="text-box">
                    <h3>
                      <span class="odometer" data-count="12">
                        <!-- <Count :number="12" text="+" /> --> 12+
                      </span>
                      Years of <br /> experience
                    </h3>
                  </div>
                </div>
  
                <div class="faq-two__content-bottom-inner">
                  <ul class="faq-two__content-list">
                    <li v-for="(item, index) in contentList1" :key="index">
                      <div class="icon-box">
                        <span class="icon-tick"></span>
                      </div>
                      <div class="text-box">
                        <p v-html="item"></p>
                      </div>
                    </li>
                  </ul>
  
                  <ul class="faq-two__content-list style2">
                    <li v-for="(item, index) in contentList2" :key="index">
                      <div class="icon-box">
                        <span class="icon-tick"></span>
                      </div>
                      <div class="text-box">
                        <p v-html="item"></p>
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
    
  </div>
</template>

<script setup>
import { ref } from 'vue';
// import Count from '@/components/common/count';

// Define the FAQ data
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

// Define the active state
const active = ref(1);

// Toggle function to change the active FAQ
const toggle = (id) => {
  if (active.value === id) {
    active.value = id;
  } else {
    active.value = id;
  }
};

// Define content lists
const contentList1 = ref([
  'Entim estibulum dissim <br /> posuere discontent.',
  'Lorem Ispum on the tend <br /> to repeat constreat.',
]);

const contentList2 = ref([
  'If you are going to uses <br /> a passage in deves.',
  'Suspe ndisse suscipit leo <br /> sagittis veitam atam.',
]);
</script>

<style scoped>
/* Add your styles here */
</style>