<template>
  <section class="projects-one projects-one--portfolio">
    <div class="container">
      <ul class="row filter-layout masonary-layout">
        <li
          v-for="(item, index) in portfolioData"
          :key="item.id"
          class="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp"
          :data-wow-delay="getDelay(index)"
        >
          <div class="projects-one__single">
            <div class="projects-one__single-img">
              <img :src="item.img" alt="#" />
              <div class="btn-box">
                <a href="#"><span class="icon-right-arrow-1"></span></a>
              </div>
              <div class="overlay-content">
                <span>{{ item.category }}</span>
                <h2>
                  <a href="#">
                    {{ item.title.split(' ')[0] }} <br />
                    {{ item.title.split(' ')[1] }}
                  </a>
                </h2>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import portfolio1 from '~//assets/images/project/projects-v1-img7.jpg';
import portfolio2 from '~//assets/images/project/projects-v1-img8.jpg';
import portfolio3 from '~//assets/images/project/projects-v1-img9.jpg';
import portfolio4 from '~//assets/images/project/projects-v1-img10.jpg';
import portfolio5 from '~//assets/images/project/projects-v1-img11.jpg';
import portfolio6 from '~//assets/images/project/projects-v1-img12.jpg';
import portfolio7 from '~//assets/images/project/projects-v1-img13.jpg';
import portfolio8 from '~//assets/images/project/projects-v1-img14.jpg';
import portfolio9 from '~//assets/images/project/projects-v1-img15.jpg';

const portfolioData = ref([
  { id: 1, title: 'Harvest Innovations', category: 'farming', img: portfolio1 },
  { id: 2, title: 'Harvest Innovations', category: 'farming', img: portfolio2 },
  { id: 3, title: 'Harvest Innovations', category: 'farming', img: portfolio3 },
  { id: 4, title: 'Harvest Innovations', category: 'farming', img: portfolio4 },
  { id: 5, title: 'Harvest Innovations', category: 'farming', img: portfolio5 },
  { id: 6, title: 'Harvest Innovations', category: 'farming', img: portfolio6 },
  { id: 7, title: 'Harvest Innovations', category: 'farming', img: portfolio7 },
  { id: 8, title: 'Harvest Innovations', category: 'farming', img: portfolio8 },
  { id: 9, title: 'Harvest Innovations', category: 'farming', img: portfolio9 },
]);

const getDelay = (index) => {
  const delays = ['0.1s', '0.3s', '0.5s'];
  return delays[index % delays.length];
};
</script>
 