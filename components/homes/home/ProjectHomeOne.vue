
<script setup> 
// import CountUp from 'vue-countup-v3'
import bg_img_1 from "~/assets/images/backgrounds/projects-v1-bg.jpg"

</script>


<template>
  <section class="projects-one">
    <div class="projects-one__bg" :style="{ backgroundImage: `url(${bg_img_1})` }"></div>
    <div class="container">
      <div class="sec-title">
        <div class="sec-title__tagline">
          <h6>Our Projects </h6>
          <span class="right"></span>
        </div>
        <h2 class="sec-title__title">
          We Have Successful  
          <span class="odometer" data-count="50">   50
            <!-- <count-up :end-val="50" class="d-inline"></count-up> -->
          </span> 
          <br /> More Projects
        </h2>
      </div>

      <div class="projects-one__inner">
        <ul class="row filter-layout masonary-layout">
          <li class="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
            <div class="projects-one__single mb60">
              <div class="projects-one__single-img">
                <img src="assets/images/project/projects-v1-img1.jpg" alt="#" />
                <div class="btn-box">
                  <a href="#"><span class="icon-right-arrow-1"></span></a>
                </div>
                <div class="overlay-content">
                  <span>farming</span>
                  <h2><a href="#">Harvest <br /> Innovations</a></h2>
                </div>
              </div>
            </div>
          </li>

          <li class="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
            <div class="projects-one__single mb30">
              <div class="projects-one__single-img">
                <img src="assets/images/project/projects-v1-img2.jpg" alt="#" />
                <div class="btn-box">
                  <a href="#"><span class="icon-right-arrow-1"></span></a>
                </div>
                <div class="overlay-content">
                  <span>farming</span>
                  <h2><a href="#">Harvest <br /> Innovations</a></h2>
                </div>
              </div>
            </div>
          </li>

          <li class="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.5s">
            <div class="projects-one__single">
              <div class="projects-one__single-img">
                <img src="assets/images/project/projects-v1-img3.jpg" alt="#" />
                <div class="btn-box">
                  <a href="#"><span class="icon-right-arrow-1"></span></a>
                </div>
                <div class="overlay-content">
                  <span>farming</span>
                  <h2><a href="#">Harvest <br /> Innovations</a></h2>
                </div>
              </div>
            </div>
          </li>

          <li class="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.1s">
            <div class="projects-one__single">
              <div class="projects-one__single-img">
                <img src="assets/images/project/projects-v1-img4.jpg" alt="#" />
                <div class="btn-box">
                  <a href="#"><span class="icon-right-arrow-1"></span></a>
                </div>
                <div class="overlay-content">
                  <span>farming</span>
                  <h2><a href="#">Harvest <br /> Innovations</a></h2>
                </div>
              </div>
            </div>
          </li>

          <li class="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.3s">
            <div class="projects-one__single">
              <div class="projects-one__single-img">
                <img src="assets/images/project/projects-v1-img5.jpg" alt="#" />
                <div class="btn-box">
                  <a href="#"><span class="icon-right-arrow-1"></span></a>
                </div>
                <div class="overlay-content">
                  <span>farming</span>
                  <h2><a href="#">Harvest <br /> Innovations</a></h2>
                </div>
              </div>
            </div>
          </li>

          <li class="col-xl-4 col-lg-4 col-md-6 wow animated fadeInUp" data-wow-delay="0.5s">
            <div class="projects-one__single mb0">
              <div class="projects-one__single-img">
                <img src="assets/images/project/projects-v1-img6.jpg" alt="#" />
                <div class="btn-box">
                  <a href="#"><span class="icon-right-arrow-1"></span></a>
                </div>
                <div class="overlay-content">
                  <span>farming</span>
                  <h2><a href="#">Harvest <br /> Innovations</a></h2>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>



 