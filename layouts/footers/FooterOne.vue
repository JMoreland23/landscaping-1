
<script setup>
import bg_img_1 from "~/assets/images/shapes/footer-v1-shape3.png"

</script>


<template>
  <footer class="footer-one">
    <div class="footer-one__bg" :style="{ backgroundImage: `url(${bg_img_1})` }"></div>
    <div class="shape1 float-bob-y"><img src="assets/images/shapes/footer-v1-shape1.png" alt="#" /></div>
    <div class="shape2 float-bob-y"><img src="assets/images/shapes/footer-v1-shape2.png" alt="#" /></div>
    <!-- Start Footer -->
    <div class="footer">
      <div class="container">
        <div class="row">
          <!-- Start Footer Widget Single -->
          <div class="col-xl-5 col-lg-5 wow animated fadeInUp" data-wow-delay="0.1s">
            <div class="footer-widget__single">
              <div class="footer-widget__single-about">
                <div class="logo-box">
                  <NuxtLink to="/"><img src="/assets/images/resources/footer-logo.png" alt="#" /></NuxtLink>
                </div>
                <form class="footer-widget__subscribe-box" @submit.prevent>
                  <div class="title-box">
                    <h5>Subscribe for Latest Articles and Resources</h5>
                  </div>
                  <div class="footer-widget__subscribe-input-box">
                    <input type="email" placeholder="Email Address" name="email" />
                    <button type="submit" class="footer-widget__subscribe-btn">
                      <span>Go</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <!-- End Footer Widget Single -->

          <!-- Start Footer One Right -->
          <div class="col-xl-7 col-lg-7">
            <div class="footer-one__right">
              <div class="row">
                <!-- Start Footer One Right Single -->
                <div class="col-xl-4 col-lg-4 wow animated fadeInUp" data-wow-delay="0.2s">
                  <div class="footer-one__right-single mb50">
                    <div class="title">
                      <h2>Our Services</h2>
                    </div>
                    <div class="footer-one__right-single-services">
                      <ul class="footer-one__right-single-list">
                        <li><NuxtLink to="/services">Lawn Mowing</NuxtLink></li>
                        <li><NuxtLink to="/services">Hedge Cutting</NuxtLink></li>
                        <li><NuxtLink to="/services">Flower Planting</NuxtLink></li>
                        <li><NuxtLink to="/services">Working Process</NuxtLink></li>
                        <li><NuxtLink to="/services">Garden Restoration</NuxtLink></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- End Footer One Right Single -->

                <!-- Start Footer One Right Single -->
                <div class="col-xl-3 col-lg-3 wow animated fadeInUp" data-wow-delay="0.3s">
                  <div class="footer-one__right-single mb50">
                    <div class="title">
                      <h2>Links</h2>
                    </div>
                    <div class="footer-one__right-single-links">
                      <ul class="footer-one__right-single-list">
                        <li><NuxtLink to="/about">About Us</NuxtLink></li>
                        <li><NuxtLink to="/team">Our Team</NuxtLink></li>
                        <li><NuxtLink to="/contact">Contact Us</NuxtLink></li>
                        <li><a href="#">Our History</a></li>
                        <li><a href="#">Testimonials</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <!-- End Footer One Right Single -->

                <!-- Start Footer One Right Single -->
                <div class="col-xl-5 col-lg-5 wow animated fadeInUp" data-wow-delay="0.4s">
                  <div class="footer-one__right-single">
                    <div class="title">
                      <h2>Contact</h2>
                    </div>
                    <div class="footer-one__right-single-contact">
                      <p>
                        <a href="mailto:yourmail@email.com">needhelp@company.com</a>
                        <br /> 80 Broklyn Road Street <br />
                        New York, USA
                      </p>
                      <a href="mailto:info@example.com">info@example.com</a>
                    </div>
                  </div>
                </div>
                <!-- End Footer One Right Single -->
              </div>

              <div class="footer-one__right-bottom wow animated fadeInUp" data-wow-delay="0.1s">
                <ul class="social-links">
                  <li><a href="#"><span class="icon-twitter"></span></a></li>
                  <li><a href="#"><span class="icon-facebook"></span></a></li>
                  <li><a href="#"><span class="icon-pinterest"></span></a></li>
                  <li><a href="#"><span class="icon-instagram"></span></a></li>
                </ul>

                <div class="footer-one__right-bottom-contact">
                  <div class="icon-box">
                    <span class="icon-phone-call"></span>
                  </div>
                  <div class="content-box">
                    <p>Call Anytime</p>
                    <h4><a href="tel:9288006780">+92 ( 8800 ) - 6780</a></h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End Footer One Right -->
        </div>
      </div>
    </div>
    <!-- End Footer -->

    <div class="footer-one__bottom">
      <div class="container">
        <div class="bottom-inner">
          <div class="copyright">
            <p>Copyright © {{ new Date().getFullYear() }} All Rights Reserved.</p>
          </div>
          <ul class="footer-one__bottom-menu">
            <li><NuxtLink to="/about">Terms & Condition</NuxtLink></li>
            <li><NuxtLink to="/about">Privacy </NuxtLink></li>
            <li><NuxtLink to="/about">Support</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>


 