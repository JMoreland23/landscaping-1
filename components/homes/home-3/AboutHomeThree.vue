
<template>
  <div>
    <section class="about-three">
      <div
        class="about-three__bg"
        :style="{ backgroundImage: `url(${bg_img_1})` }"
      ></div>
      <div class="container">
        <div class="row">
          <div class="col-xl-2 col-lg-3 col-md-4">
            <div class="about-three__counter">
              <ul>
                <li>
                  <h2>
                    <span class="odometer" data-count="85">
                      <!-- <Count :number="85" text="%" /> --> 85%
                    </span>
                  </h2>
                  <h3>Satisfied Customers.</h3>
                  <p>
                    Prevai tolerably discours <br /> estimable applaud.
                  </p>
                </li>
  
                <li>
                  <h2>
                    <span class="odometer" data-count="99">
                      <!-- <Count :number="99" text="%" /> --> 99%
                    </span>
                  </h2>
                  <h3>Claim Success </h3>
                  <p>
                    Prevai tolerably discours <br /> estimable applaud.
                  </p>
                </li>
              </ul>
            </div>
          </div>
  
          <div class="col-xl-4 col-lg-5 col-md-7">
            <div class="about-three__img">
              <div class="about-three__img-shape1">
                <img src="assets/images/shapes/about-v3-shape1.png" alt="#" />
              </div>
              <div class="inner">
                <img src="assets/images/about/about-v3-img1.jpg" alt="#" />
              </div>
            </div>
          </div>
  
          <div class="col-xl-6">
            <div class="about-three__content">
              <div class="sec-title-three">
                <div class="sec-title-three__tagline">
                  <h6>About company</h6>
                </div>
                <h2 class="sec-title-three__title">
                  We want help you <br /> to grow planting.
                </h2>
              </div>
  
              <div class="about-three__content-text1">
                <p>
                  There are many variats of passages the majority have
                  suffered a in some form by available companu alte pic alte
                  in some form by to at available.
                </p>
              </div>
  
              <div class="about-three__content-text2">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="single-box">
                      <ul>
                        <li>
                          <h4>
                            <span class="icon-tick"></span>Watering &
                            Irrigation
                          </h4>
                        </li>
  
                        <li>
                          <h4>
                            <span class="icon-tick"></span>Plant Stands &
                            Trays
                          </h4>
                        </li>
                      </ul>
                    </div>
                  </div>
  
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="single-box">
                      <ul>
                        <li>
                          <h4>
                            <span class="icon-tick"></span>Lawn
                            Maintenance
                          </h4>
                        </li>
  
                        <li>
                          <h4>
                            <span class="icon-tick"></span>Yard & Garden
                            Decor
                          </h4>
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
    </section>
  </div>
</template>

<script setup>
// import Count from '@/components/common/count';
import bg_img_1 from "~/assets/images/backgrounds/about-v3-bg.png"

</script>

<style scoped>
/* Add your styles here */
</style>