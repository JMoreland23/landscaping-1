
<template>
  <div>
    <section class="blog-two">
      <div class="container">
        <div class="sec-title style2 text-center">
          <div class="sec-title__tagline center">
            <div class="img-box">
              <img src="assets/images/resources/sec-title-img2.png" alt="#" />
            </div>
            <h6>Blog Post</h6>
          </div>
          <h2 class="sec-title__title">Latest News & Updates</h2>
        </div>
  
        <div class="row">
          <div
            class="col-xl-6 col-lg-6 col-md-6 wow fadeInLeft"
            data-wow-delay="100ms"
            data-wow-duration="1000ms"
          >
            <div class="blog-two__single">
              <div class="blog-two__single-img">
                <img src="assets/images/blog/blog-v2-img1.jpg" alt="#" />
              </div>
  
              <div class="blog-two__single-content">
                <div class="date-box">
                  <h3>
                    27 <br /> <span>Nov</span>
                  </h3>
                </div>
                <div class="inner">
                  <h2>
                    <nuxt-link to="/blog-details">
                      Here are the 3 advantages of <br />
                      landscape maintenance
                    </nuxt-link>
                  </h2>
                  <div class="tagline">
                    <span>Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div
            class="col-xl-6 col-lg-6 col-md-6 wow fadeInRight"
            data-wow-delay="0ms"
            data-wow-duration="1000ms"
          >
            <div class="blog-two__single">
              <div class="blog-two__single-img">
                <img src="assets/images/blog/blog-v2-img2.jpg" alt="#" />
              </div>
  
              <div class="blog-two__single-content">
                <div class="date-box">
                  <h3>
                    02 <br /> <span>Oct</span>
                  </h3>
                </div>
                <div class="inner">
                  <h2>
                    <nuxt-link to="/blog-details">
                      Complete solution for your land <br />
                      design and garden design
                    </nuxt-link>
                  </h2>
                  <div class="tagline">
                    <span>Branding</span>
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

 