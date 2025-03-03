
<template>
  <div> 
    <section class="counter-one">
      <div class="auto-container">
        <div class="counter-one__inner">
          <div class="container">
            <ul class="counter-one__box">
              <li class="counter-one__single" v-for="(counter, index) in counters" :key="index">
                <div class="counter-one__single-inner">
                  <div class="icon-box">
                    <span :class="'icon-' + counter.icon"></span>
                  </div>
  
                  <div class="content-box">
                    <h2>
                      <span class="odometer" :data-count="counter.number">
                        <!-- <Count :number="counter.number" :text="counter.suffix" /> --> {{ counter.number }}{{ counter.suffix }}
                      </span>
                    </h2>
                    <h3>{{ counter.title }}</h3>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
// import Count from '@/components/common/count';

const counters = [
  { icon: 'shovels', number: 191, suffix: '+', title: 'Project Done' },
  { icon: 'agriculture', number: 2, suffix: 'k', title: 'Global Reach' },
  { icon: 'gardener-1', number: 37, suffix: '+', title: 'User Active' },
  { icon: 'gardener-1', number: 9, suffix: '+', title: 'Awards Win' },
];
</script>

<style scoped>
/* Add your styles here */
</style>