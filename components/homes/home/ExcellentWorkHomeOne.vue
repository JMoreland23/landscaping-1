
<template>
  <section class="excellent-work-one">
    <div class="shape1 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
      <img class="float-bob-y" src="assets/images/shapes/excellent-work-v1-shape1.png" alt="#" />
    </div>
    <div class="excellent-work-one__bg" :style="{ backgroundImage: `url(${bg_img_1})` }">
      <div class="content-box">
        <div class="img-box">
          <img src="assets/images/resources/excellent-work-v1-img2.png" alt="#" />
        </div>
        <div class="text-box">
          <h2>We Have Solution For Your Garden</h2>
        </div>
        <div class="btn-box">
          <NuxtLink class="thm-btn" to="/contact">
            <span class="txt">Contact Now</span>
            <i class="fa fa-angle-double-right"></i>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-6"></div>
        <div class="col-xl-6">
          <div class="excellent-work-one__content">
            <div class="sec-title">
              <div class="sec-title__tagline">
                <h6>Excellent Work</h6>
                <span class="right"></span>
              </div>
              <h2 class="sec-title__title">
                We Work at a Landscape <br /> Company Process
              </h2>
            </div>
            <div class="text-box">
              <p>
                There cursus massa at urnaaculis estie. Sed aliquamellus vitae ultrs condmentum leo massa mollis
                estiegittis massa at urnaaculis estie. miristum nulla sed medy fringilla vitae.
              </p>
            </div>
            <div class="excellent-work-one__progress">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="excellent-work-one__progress-single">
                    <div class="progress-box">
                      <div class="graph-outer"> 
                        <circle-progress 
                            :size="100"
                            :percent="90" 
                            :border-width="6"
                            :border-bg-width="6" 
                            :viewport="90"  
                            :fill-color="'#4caf50'" 
                            :show-percent="true"                            
                        /> 
                      </div>
                    </div>
                    <div class="title-box">
                      <h2>Agriculture <br /> Projects</h2>
                    </div>
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="excellent-work-one__progress-single">
                    <div class="progress-box">
                      <div class="graph-outer">
                        <!-- <CircularProgress :progress="percentage2" :size="100" :stroke="10" :color="'#4caf50'" /> -->
                        <circle-progress 
                            :size="100"
                            :percent="66" 
                            :border-width="6"
                            :border-bg-width="6" 
                            :viewport="66"  
                            :fill-color="'#4caf50'" 
                            :show-percent="true"                            
                        /> 
                      </div>
                    </div>
                    <div class="title-box">
                      <h2>Quality <br /> products</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <ul class="excellent-work-one__content-list">
              <li>
                <p>
                  <span class="icon-tick"></span> There are many variations of passage of lorem.
                </p>
              </li>
              <li>
                <p>
                  <span class="icon-tick"></span> Available but the majority alteration.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>  

import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from "vue3-circle-progress";
 

import bg_img_1 from "~/assets/images/backgrounds/excellent-work-v1-bg.jpg"



</script>

 