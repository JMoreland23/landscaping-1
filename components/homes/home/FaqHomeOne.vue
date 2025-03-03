
<template>
  <section class="faq-one">
    <div class="shape1"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-6 col-lg-6">
          <div class="faq-one__progress">
            <div class="sec-title">
              <div class="sec-title__tagline">
                <h6>Our Faq</h6>
                <span class="right"></span>
              </div>
              <h2 class="sec-title__title">
                Our Frequently Asked <br /> Some Question
              </h2>
            </div>

            <div class="faq-one__progress-single">
              <h4 class="faq-one__progress-title">Soil Re-bulding</h4>
              <div class="bar">
                <div class="bar-inner count-bar" data-percent="90%" style="width: 90%;">
                  <div class="count-text">90%</div>
                </div>
              </div>
            </div>

            <div class="faq-one__progress-single">
              <h4 class="faq-one__progress-title">Landscaping Ground</h4>
              <div class="bar">
                <div class="bar-inner count-bar" data-percent="80%" style="width: 80%;">
                  <div class="count-text">80%</div>
                </div>
              </div>
            </div>

            <div class="faq-one__progress-single mb0">
              <h4 class="faq-one__progress-title">Planting Plants</h4>
              <div class="bar">
                <div class="bar-inner count-bar" data-percent="70%" style="width: 70%;">
                  <div class="count-text">70%</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-6 col-lg-6">
          <div class="faq-one__accordion">
            <ul class="accordion-box">
              <li
                v-for="item in faqData"
                :key="item.id"
                :class="['accordion block', { 'active-block': active === item.id }]"
              >
                <div
                  :class="['acc-btn', { 'active': active === item.id }]"
                  @click="toggle(item.id)"
                >
                  <div class="icon-outer">
                    <i class="icon-up-arrow"></i>
                  </div>
                  <h3>{{ item.question }}</h3>
                </div>
                <div :class="['acc-content', { 'current': active === item.id }]">
                  <p>{{ item.ans }}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// Ensure Bootstrap JS is loaded only on client-side
onMounted(async () => {
  if (typeof window !== 'undefined') {
    await import('bootstrap/dist/js/bootstrap')
  }
})

const faqData = ref([
  {
    id: 1,
    question: 'How Does Gardening Make You Feel ?',
    ans: 'Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.',
  },
  {
    id: 2,
    question: 'Do Gardens Help The Environment ?',
    ans: 'Suspendisse finibus urna mauris, vitae consequat quam vel. Vestibulum leo ligula, vit commodo nisl Sed luctus venenatis pellentesque.',
  },
  // Add more FAQ data if needed
])

const active = ref(2)
const toggle = (id) => {
  if (active.value === id) {
    return active.value = id
  }
  active.value = id
}
</script>

<style scoped>
/* Add your custom styles here */
</style>