
<template>
  <div>
    <section class="projects-two">
      <div class="shape1 rotate-me">
        <img src="assets/images/shapes/projects-v2-shape1.png" alt="#" />
      </div>
      <div class="shape2 float-bob-y">
        <img src="assets/images/shapes/projects-v2-shape2.png" alt="#" />
      </div>
      <div class="container">
        <div class="row">
          <div class="col-xl-6">
            <div class="projects-two__content">
              <div class="sec-title style2">
                <div class="sec-title__tagline">
                  <div class="img-box">
                    <img src="assets/images/resources/sec-title-img2.png" alt="#" />
                  </div>
                  <h6>Our Portfolio</h6>
                </div>
                <h2 class="sec-title__title">Our Latest Projects</h2>
              </div>
              <div class="projects-two__content-text1">
                <p>
                  There are many variations of passages of available, but the majority have suffered alteration in some form, by injected randomised words which don’t look even slightly believable.
                </p>
              </div>
              <div class="projects-two__content-tab tabs-box">
                <ul class="tab-buttons clearfix" id="myTab" role="tablist">
                  <li class="tab-btn" role="presentation">
                    <button class="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="false">
                      Investment
                    </button>
                  </li>
                  <li class="tab-btn active-btn" role="presentation">
                    <button class="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">
                      Financial
                    </button>
                  </li>
                  <li class="tab-btn" role="presentation">
                    <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">
                      Landscaping
                    </button>
                  </li>
                </ul>
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <div class="projects-two__tabs-content">
                      <div class="projects-two__tabs-content-img">
                        <div class="border-box"></div>
                        <img src="assets/images/project/projects-v2-img1.jpg" alt="#" />
                        <div class="overlay-content">
                          <ul>
                            <li>
                              <div class="inner">
                                <div class="text-box">
                                  <h4>1. Private Garden</h4>
                                  <p>Assistant</p>
                                </div>
                                <div class="number-box">
                                  <span>01</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="inner">
                                <div class="text-box">
                                  <h4>Private Garden</h4>
                                  <p>Assistant</p>
                                </div>
                                <div class="number-box">
                                  <span>02</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="inner">
                                <div class="text-box">
                                  <h4>Private Garden</h4>
                                  <p>Assistant</p>
                                </div>
                                <div class="number-box">
                                  <span>03</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="projects-two__tabs-content">
                      <div class="projects-two__tabs-content-img">
                        <div class="border-box"></div>
                        <img src="assets/images/project/projects-v2-img1.jpg" alt="#" />
                        <div class="overlay-content">
                          <ul>
                            <li>
                              <div class="inner">
                                <div class="text-box">
                                  <h4>2. Private Garden</h4>
                                  <p>Assistant</p>
                                </div>
                                <div class="number-box">
                                  <span>01</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="inner">
                                <div class="text-box">
                                  <h4>Private Garden</h4>
                                  <p>Assistant</p>
                                </div>
                                <div class="number-box">
                                  <span>02</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="inner">
                                <div class="text-box">
                                  <h4>Private Garden</h4>
                                  <p>Assistant</p>
                                </div>
                                <div class="number-box">
                                  <span>03</span>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                    <div class="projects-two__tabs-content">
                      <div class="projects-two__tabs-content-img">
                        <div class="border-box"></div>
                        <img src="assets/images/project/projects-v2-img1.jpg" alt="#" />
                        <div class="overlay-content">
                          <ul>
                            <li>
                              <div class="inner">
                                <div class="text-box">
                                  <h4>3. Private Garden</h4>
                                  <p>Assistant</p>
                                </div>
                                <div class="number-box">
                                  <span>01</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="inner">
                                <div class="text-box">
                                  <h4>Private Garden</h4>
                                  <p>Assistant</p>
                                </div>
                                <div class="number-box">
                                  <span>02</span>
                                </div>
                              </div>
                            </li>
                            <li>
                              <div class="inner">
                                <div class="text-box">
                                  <h4>Private Garden</h4>
                                  <p>Assistant</p>
                                </div>
                                <div class="number-box">
                                  <span>03</span>
                                </div>
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
          <div class="col-xl-6">
            <div class="projects-two__counter clearfix">
              <div class="projects-two__counter-img" :style="{ backgroundImage: `url(${bg_img_1})` }"></div>
              <div class="projects-two__counter-box">
                <ul>
                  <li>
                    <h2 class="d-flex">
                      <!-- <span class="odometer" data-count="87"><count-up :end-val="87"></count-up> </span>  -->
                      87+ </h2>
                    <p>Total apartments</p>
                    <div class="border-box"></div>
                  </li>
                  <li>
                    <h2 class="d-flex">
                      <!-- <span class="odometer" data-count="291"><count-up :end-val="291"></count-up> </span>  -->
                      291+ </h2>
                    <p>Quality features</p>
                    <div class="border-box"></div>
                  </li>
                  <li>
                    <h2 class="d-flex">
                      <!-- <span class="odometer" data-count="9"><count-up :end-val="9"></count-up> </span>  -->
                      9+ </h2>
                    <p>Award Wins</p>
                    <div class="border-box"></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>

</template>

<script setup>
// import CountUp from 'vue-countup-v3'

onMounted(async () => {
  if (typeof window !== 'undefined') {
    // Dynamically import Bootstrap JS
    await import('bootstrap/dist/js/bootstrap')
  }
})

import bg_img_1 from "~/assets/images/project/projects-v2-img2.jpg"

 

</script>

 