<!-- <template>
  <section class="why-choose-one">
    <div class="shape1"></div>
    <div class="shape2"><img src="/assets/images/shapes/why-choose-v1-shape1.png" alt="#" /></div>
    <div class="shape3"><img src="/assets/images/shapes/why-choose-v1-shape2.png" alt="#" /></div>
    <div class="why-choose-one__bg" :style="{ backgroundImage: `url(${bg_img_1})` }"></div>
    <div class="container">
      <div class="sec-title text-center">
        <div class="sec-title__tagline">
          <span class="left"></span>
          <h6>People love</h6>
          <span class="right"></span>
        </div>
        <h2 class="sec-title__title">Why Choose Us Our Garden</h2>
      </div>

      <div class="row">
        <div class="col-xl-12">
          <div class="why-choose-one__inner">
            <div class="why-choose-one__tab-box tabs-box">
              <div class="row filter-layout masonary-layout">
                <div class="col-xl-4">
                  <ul class="nav nav-tabs tab-buttons clearfix list-unstyled" id="myTab" role="tablist">
                    <li class="tab-btn wow fadeInLeft" role="presentation">
                      <button
                        class="nav-link"
                        id="home-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#home"
                        type="button"
                        role="tab"
                        aria-controls="home"
                        aria-selected="true"
                      >
                        Guarantee Services
                      </button>
                    </li>
                    <li class="tab-btn wow fadeInLeft" role="presentation">
                      <button
                        class="nav-link active"
                        id="profile-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#profile"
                        type="button"
                        role="tab"
                        aria-controls="profile"
                        aria-selected="false"
                      >
                        Environmental Friendly
                      </button>
                    </li>
                    <li class="tab-btn wow fadeInLeft" role="presentation">
                      <button
                        class="nav-link"
                        id="contact-tab"
                        data-bs-toggle="tab"
                        data-bs-target="#contact"
                        type="button"
                        role="tab"
                        aria-controls="contact"
                        aria-selected="false"
                      >
                        Support Team
                      </button>
                    </li>
                  </ul>
                </div>

                <div class="col-xl-8">
                  <div class="tab-content" id="myTabContent">

                    <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                          <div class="tabs-content__inner">
                            <div class="tabs-content__inner-bg"
                            :style="{ backgroundImage: `url(/assets/images/resources/why-choose-v1-img1.jpg)` }">
                            </div>
                            <div class="tabs-content__list clearfix">
                              <ul class="clearfix">
                                <li>
                                  <div class="inner text-center">
                                    <div class="icon-box">
                                      <span class="icon-gardening"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">1. Gardening <br />
                                      Design</Link></h4>
                                  </div>
                                </li>

                                <li class="mt30">
                                  <div class="inner text-center">
                                    <div class="icon-box">
                                      <span class="icon-farmer"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">Available <br />
                                      24/7</Link></h4>
                                  </div>
                                </li>

                                <li>
                                  <div class="inner text-center">
                                    <div class="icon-box">
                                      <span class="icon-shovels"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">Experience <br />
                                      of 20 year</Link></h4>
                                  </div>
                                </li>

                                <li class="mt30">
                                  <div class="inner text-center">
                                    <div class="icon-box">
                                      <span class="icon-pruning-shears"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">Experts <br />
                                      Worker</Link></h4>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                          <div class="tabs-content__inner">
                            <div class="tabs-content__inner-bg"
                            :style="{ backgroundImage: `url(/assets/images/resources/why-choose-v1-img1.jpg)` }">
                            </div>
                            <div class="tabs-content__list clearfix">
                              <ul class="clearfix">
                                <li>
                                  <div class="inner text-center">
                                    <div class="icon-box">
                                      <span class="icon-gardening"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">2. Gardening <br />
                                      Design</Link></h4>
                                  </div>
                                </li>

                                <li class="mt30">
                                  <div class="inner text-center">
                                    <div class="icon-box">
                                      <span class="icon-farmer"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">Available <br />
                                      24/7</Link></h4>
                                  </div>
                                </li>

                                <li>
                                  <div class="inner text-center">
                                    <div class="icon-box">
                                      <span class="icon-shovels"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">Experience <br />
                                      of 20 year</Link></h4>
                                  </div>
                                </li>

                                <li class="mt30">
                                  <div class="inner text-center">
                                    <div class="icon-box">
                                      <span class="icon-pruning-shears"></span>
                                    </div>
                                    <h4><Link href="/arbor-management">Experts <br />
                                      Worker</Link></h4>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                          <div class="tabs-content__inner">
                            <div class="tabs-content__inner-bg"
                               :style="{ backgroundImage: `url(/assets/images/resources/why-choose-v1-img1.jpg)` }">
                            </div>
                            <div class="tabs-content__list clearfix">
                              <ul class="clearfix">
                                <li>
                                  <div class="inner text-center">
                                    <div class="icon-box">
                                      <span class="icon-gardening"></span>
                                    </div>
                                    <h4><NuxtLink to="/arbor-management">3. Gardening <br />
                                      Design</NuxtLink></h4>
                                  </div>
                                </li>

                                <li class="mt30">
                                  <div class="inner text-center">
                                    <div class="icon-box">
                                      <span class="icon-farmer"></span>
                                    </div>
                                    <h4><NuxtLink to="/arbor-management">Available <br />
                                      24/7</NuxtLink></h4>
                                  </div>
                                </li>

                                <li>
                                  <div class="inner text-center">
                                    <div class="icon-box">
                                      <span class="icon-shovels"></span>
                                    </div>
                                    <h4><NuxtLink to="/arbor-management">Experience <br />
                                      of 20 year</NuxtLink></h4>
                                  </div>
                                </li>

                                <li class="mt30">
                                  <div class="inner text-center">
                                    <div class="icon-box">
                                      <span class="icon-pruning-shears"></span>
                                    </div>
                                    <h4><NuxtLink to="/arbor-management">Experts <br />
                                      Worker</NuxtLink></h4>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import bg_img_1 from "~/assets/images/pattern/why-choose-v1-pattern.png"

// import TabContent from "./TabContent.vue";

const tabItems1 = [
  {
    icon: "icon-gardening",
    title: "1. Gardening Design",
    link: "/arbor-management",
  },
  {
    icon: "icon-farmer",
    title: "Available 24/7",
    link: "/arbor-management",
  },
  {
    icon: "icon-shovels",
    title: "Experience of 20 year",
    link: "/arbor-management",
  },
  {
    icon: "icon-pruning-shears",
    title: "Experts Worker",
    link: "/arbor-management",
  },
];

const tabItems2 = [
  {
    icon: "icon-gardening",
    title: "2. Gardening Design",
    link: "/arbor-management",
  },
  {
    icon: "icon-farmer",
    title: "Available 24/7",
    link: "/arbor-management",
  },
  {
    icon: "icon-shovels",
    title: "Experience of 20 year",
    link: "/arbor-management",
  },
  {
    icon: "icon-pruning-shears",
    title: "Experts Worker",
    link: "/arbor-management",
  },
];

const tabItems3 = [
  {
    icon: "icon-gardening",
    title: "3. Gardening Design",
    link: "/arbor-management",
  },
  {
    icon: "icon-farmer",
    title: "Available 24/7",
    link: "/arbor-management",
  },
  {
    icon: "icon-shovels",
    title: "Experience of 20 year",
    link: "/arbor-management",
  },
  {
    icon: "icon-pruning-shears",
    title: "Experts Worker",
    link: "/arbor-management",
  },
];


// if (typeof window !== 'undefined') {
//   import('bootstrap/dist/js/bootstrap')
// }

</script> -->

<template>
  <section class="why-choose-one">
    <div class="shape1"></div>
    <div class="shape2"><img src="assets/images/shapes/why-choose-v1-shape1.png" alt="#" /></div>
    <div class="shape3"><img src="assets/images/shapes/why-choose-v1-shape2.png" alt="#" /></div>
    <div class="why-choose-one__bg"
      :style="{ background: 'url(/assets/images/pattern/why-choose-v1-pattern.png)' }"></div>
    <div class="container">
      <div class="sec-title text-center">
        <div class="sec-title__tagline">
          <span class="left"></span>
          <h6>People love</h6>
          <span class="right"></span>
        </div>
        <h2 class="sec-title__title">Why Choose Us Our Garden</h2>
      </div>

      <div class="row">
        <div class="col-xl-12">
          <div class="why-choose-one__inner">
            <div class="why-choose-one__tab-box tabs-box">

              <div class="row filter-layout masonary-layout">

                <div class="col-xl-4">
                  <ul class="nav nav-tabs tab-buttons clearfix list-unstyled" id="myTab" role="tablist">
                    <li class="tab-btn wow fadeInLeft" role="presentation">
                      <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">
                        Guarantee Services
                      </button>
                    </li>
                    <li class="tab-btn wow fadeInLeft" role="presentation">
                      <button class="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">
                        Environmental Friendly
                      </button>
                    </li>
                    <li class="tab-btn wow fadeInLeft" role="presentation">
                      <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                        Support Team
                      </button>
                    </li>
                  </ul>
                </div>


                <div class="col-xl-8">
                  <div class="tab-content" id="myTabContent">

                    <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                      <div class="tabs-content__inner">
                        <div class="tabs-content__inner-bg"
                          :style="{ backgroundImage: `url(${bg_img_1})` }">
                        </div>
                        <div class="tabs-content__list clearfix">
                          <ul class="clearfix">
                            <li>
                              <div class="inner text-center">
                                <div class="icon-box">
                                  <span class="icon-gardening"></span>
                                </div>
                                <h4><nuxt-link to="/arbor-management">1. Gardening <br />
                                  Design</nuxt-link></h4>
                              </div>
                            </li>

                            <li class="mt30">
                              <div class="inner text-center">
                                <div class="icon-box">
                                  <span class="icon-farmer"></span>
                                </div>
                                <h4><nuxt-link to="/arbor-management">Available <br />
                                  24/7</nuxt-link></h4>
                              </div>
                            </li>

                            <li>
                              <div class="inner text-center">
                                <div class="icon-box">
                                  <span class="icon-shovels"></span>
                                </div>
                                <h4><nuxt-link to="/arbor-management">Experience <br />
                                  of 20 year</nuxt-link></h4>
                              </div>
                            </li>

                            <li class="mt30">
                              <div class="inner text-center">
                                <div class="icon-box">
                                  <span class="icon-pruning-shears"></span>
                                </div>
                                <h4><nuxt-link to="/arbor-management">Experts <br />
                                  Worker</nuxt-link></h4>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <div class="tabs-content__inner">
                        <div class="tabs-content__inner-bg"
                          :style="{ backgroundImage: `url(${bg_img_1})` }">
                        </div>
                        <div class="tabs-content__list clearfix">
                          <ul class="clearfix">
                            <li>
                              <div class="inner text-center">
                                <div class="icon-box">
                                  <span class="icon-gardening"></span>
                                </div>
                                <h4><nuxt-link to="/arbor-management">2. Gardening <br />
                                  Design</nuxt-link></h4>
                              </div>
                            </li>

                            <li class="mt30">
                              <div class="inner text-center">
                                <div class="icon-box">
                                  <span class="icon-farmer"></span>
                                </div>
                                <h4><nuxt-link to="/arbor-management">Available <br />
                                  24/7</nuxt-link></h4>
                              </div>
                            </li>

                            <li>
                              <div class="inner text-center">
                                <div class="icon-box">
                                  <span class="icon-shovels"></span>
                                </div>
                                <h4><nuxt-link to="/arbor-management">Experience <br />
                                  of 20 year</nuxt-link></h4>
                              </div>
                            </li>

                            <li class="mt30">
                              <div class="inner text-center">
                                <div class="icon-box">
                                  <span class="icon-pruning-shears"></span>
                                </div>
                                <h4><nuxt-link to="/arbor-management">Experts <br />
                                  Worker</nuxt-link></h4>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                      <div class="tabs-content__inner">
                        <div class="tabs-content__inner-bg"
                          :style="{ backgroundImage: `url(${bg_img_1})` }">
                        </div>
                        <div class="tabs-content__list clearfix">
                          <ul class="clearfix">
                            <li>
                              <div class="inner text-center">
                                <div class="icon-box">
                                  <span class="icon-gardening"></span>
                                </div>
                                <h4><nuxt-link to="/arbor-management">3. Gardening <br />
                                  Design</nuxt-link></h4>
                              </div>
                            </li>

                            <li class="mt30">
                              <div class="inner text-center">
                                <div class="icon-box">
                                  <span class="icon-farmer"></span>
                                </div>
                                <h4><nuxt-link to="/arbor-management">Available <br />
                                  24/7</nuxt-link></h4>
                              </div>
                            </li>

                            <li>
                              <div class="inner text-center">
                                <div class="icon-box">
                                  <span class="icon-shovels"></span>
                                </div>
                                <h4><nuxt-link to="/arbor-management">Experience <br />
                                  of 20 year</nuxt-link></h4>
                              </div>
                            </li>

                            <li class="mt30">
                              <div class="inner text-center">
                                <div class="icon-box">
                                  <span class="icon-pruning-shears"></span>
                                </div>
                                <h4><nuxt-link to="/arbor-management">Experts <br />
                                  Worker</nuxt-link></h4>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>


                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue' 
import bg_img_1 from "~/assets/images/resources/why-choose-v1-img1.jpg"


onMounted(async () => {
  if (typeof window !== 'undefined') {
    // Dynamically import Bootstrap JS
    await import('bootstrap/dist/js/bootstrap')
  }
})
 
</script>

 