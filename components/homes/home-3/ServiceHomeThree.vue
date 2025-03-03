
<template>
  <div>
    <section class="services-three">
      <div
        class="shape2 wow slideInLeft"
        data-wow-delay="100ms"
        data-wow-duration="2500ms"
      >
        <img
          class="float-bob-y"
          src="assets/images/shapes/services-v3-shape1.png"
          alt="#"
        />
      </div>
      <div
        class="shape3 wow slideInRight"
        data-wow-delay="100ms"
        data-wow-duration="2500ms"
      >
        <img
          class="float-bob-y"
          src="assets/images/shapes/services-v3-shape2.png"
          alt="#"
        />
      </div>
      <div
        class="services-three__bg"
        :style="{ backgroundImage: `url(${bg_img_1})` }"
      ></div>
      <div class="container">
        <div class="services-three__top">
          <div class="sec-title-three">
            <div class="sec-title-three__tagline">
              <h6>What we do</h6>
            </div>
            <h2 class="sec-title-three__title">
              Get exceptional <br />
              service for growth
            </h2>
          </div>

          <div class="services-three__top-text">
            <p>
              There are many variats of passage Lorem Ipsum the majority have
              suffered alte in some form by available Companuy alte pic alte in
              some form by to at available.
            </p>
          </div>
        </div>

        <div class="row">
          <div
            class="col-xl-3 col-lg-6 col-md-6 wow animated fadeInUp"
            v-for="(service, index) in services"
            :key="index"
            :data-wow-delay="service.delay"
          >
            <div class="services-three__single">
              <div class="shape1"></div>
              <div class="services-three__single-icon">
                <div class="inner">
                  <span :class="'icon-' + service.icon"></span>
                </div>
                <div class="icon">
                  <span>+</span>
                </div>
              </div>

              <div class="services-three__single-content">
                <div class="title">
                  <h2>
                    <nuxt-link :to="service.link">{{
                      service.title
                    }}</nuxt-link>
                  </h2>
                </div>
                <p>{{ service.description }}</p>

                <div class="bottom-box">
                  <div class="btn-box">
                    <nuxt-link :to="service.link">Read More</nuxt-link>
                  </div>
                  <div class="count-box">
                    <span>{{ service.number }}</span>
                  </div>
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
import bg_img_1 from "~/assets/images/backgrounds/services-v3-bg.jpg"

const services = [
  {
    title: "Garden Landscaping",
    description:
      "The laying out andin in care of plot of ground devoted partally lokally or wholly avail Natural at element present garden...",
    link: "/arbor-management",
    icon: "gardener-1",
    number: "01",
    delay: "0.1s",
  },
  {
    title: "Soil Marking",
    description:
      "The laying out andin in care of plot of ground devoted partally lokally or wholly avail Natural at element present garden...",
    link: "/arbor-management",
    icon: "shovels",
    number: "02",
    delay: "0.2s",
  },
  {
    title: "Patios & Courtyards",
    description:
      "The laying out andin in care of plot of ground devoted partally lokally or wholly avail Natural at element present garden...",
    link: "/arbor-management",
    icon: "agriculture",
    number: "03",
    delay: "0.3s",
  },
  {
    title: "Commercial Planting",
    description:
      "The laying out andin in care of plot of ground devoted partally lokally or wholly avail Natural at element present garden...",
    link: "/arbor-management",
    icon: "gardening",
    number: "04",
    delay: "0.4s",
  },
];
</script>

<style scoped>
/* Add your styles here */
</style>