

<script setup>
// import Count from '@/components/common/Count'
import bg_img_1 from "~/assets/images/backgrounds/about-v2-bg.png"

</script>


<template>
  <div>
    <section class="about-two">
    <div class="about-two__bg" :style="{ backgroundImage: `url(${bg_img_1})` }"></div>
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
          <div class="about-two__img">
            <div class="about-two__img1">
              <img src="assets/images/about/about-v2-img1.jpg" alt="#" />
            </div>
            <div class="about-two__img2 wow zoomIn" data-wow-delay="100ms" data-wow-duration="3500ms">
              <img src="assets/images/about/about-v2-img2.jpg" alt="#" />
            </div>
            <div class="counter-box">
              <h2>
                <!-- <Count :number="12" text="+" /> --> 12+
              </h2>
              <p>Years of <br /> Experience</p>
            </div>
          </div>
        </div>

        <div class="col-xl-6">
          <div class="about-two__content">
            <div class="sec-title style2">
              <div class="sec-title__tagline">
                <div class="img-box"><img src="assets/images/resources/sec-title-img2.png" alt="#" /></div>
                <h6>Welcome to our garden</h6>
              </div>
              <h2 class="sec-title__title">We Provide Gardening <br /> Best Services</h2>
            </div>

            <div class="about-two__content-text1">
              <p>
                There are many variations of passages of available, but the majority have suffered alteration in some
                form, by injected humour, or randomised words which don’t look even slightly believable.
              </p>
            </div>

            <div class="about-two__content-text2">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="single-box">
                    <div class="icon-box">
                      <span class="icon-planting"></span>
                    </div>
                    <div class="title-box">
                      <h3>Soil Marking & <br /> Carbo</h3>
                    </div>
                  </div>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="single-box">
                    <div class="icon-box">
                      <span class="icon-planting"></span>
                    </div>
                    <div class="title-box">
                      <h3>Commercial <br /> Planting</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="about-two__content-text3">
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                in some form, by injected humour, or randomised words which don't look even.
              </p>
            </div>

            <div class="about-two__progress">
              <div class="about-two__progress-single">
                <div class="title">
                  <h4>Landscaping Ground</h4>
                </div>
                <div class="bar">
                  <div class="bar-inner count-bar" data-percent="88%" :style="{ width: '88%' }">
                    <div class="count-text">88%</div>
                  </div>
                </div>
              </div>

              <div class="about-two__progress-single mb0">
                <div class="title">
                  <h4>Soil Re-building</h4>
                </div>
                <div class="bar">
                  <div class="bar-inner count-bar" data-percent="60%" :style="{ width: '60%' }">
                    <div class="count-text">60%</div>
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



 