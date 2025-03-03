<template>
  <section class="team-details">
    <div class="container">
      <div class="row">
        <div class="col-xl-8 col-lg-7">
          <div class="team-details__content">
            <div class="title-box">
              <h2>Rason Singh</h2>
              <p>Jr. Landscaper</p>
            </div>

            <div class="team-details__content-text1">
              <p>
                There are many variats of passages the majority lte pic alte in some formesrs
                have suffered a in some form by available companu juterwfe hgfter lkeiiyerr
                alte pic alte in some form by to at available toppicted to discuat thisledti
                misson to succtess busineg top higfhedfte lebels in the worlds.yewt
              </p>
            </div>

            <div class="team-details__content-text2">
              <p>
                There are many variats of passages the majority lte pic alte in some form ate
                have suffered a in some form by available companu juterwfe hgfterees.
              </p>
            </div>

            <div class="team-details__progress">
              <div class="team-details__progress-single">
                <h4 class="team-details__progress-title">Soil Re-bulding</h4>
                <div class="bar">
                  <div class="bar-inner count-bar" data-percent="90%" style="width: 90%;">
                    <div class="count-text">90%</div>
                  </div>
                </div>
              </div>

              <div class="team-details__progress-single">
                <h4 class="team-details__progress-title">Landscaping Ground</h4>
                <div class="bar">
                  <div class="bar-inner count-bar" data-percent="75%" style="width: 75%;">
                    <div class="count-text">75%</div>
                  </div>
                </div>
              </div>

              <div class="team-details__progress-single mb0">
                <h4 class="team-details__progress-title">Planting Plants</h4>
                <div class="bar">
                  <div class="bar-inner count-bar" data-percent="85%" style="width: 85%;">
                    <div class="count-text">85%</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="contact-one__form contact-one__form--team-details">
              <form @submit.prevent class="default-form2">
                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="input-box">
                      <input type="text" name="form_name" placeholder="Your Name" required />
                    </div>
                  </div>
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="input-box">
                      <input type="email" name="form_email" placeholder="Email Address" required />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="input-box">
                      <input type="text" name="form_subject" placeholder="Select Date" id="datepicker" />
                    </div>
                  </div>

                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="input-box">
                      <input type="text" name="time" placeholder="Select time" />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="input-box">
                      <div class="select-box">
                        <NiceSelect
                          class="selectmenu wide d-flex align-items-center"
                          :options="[
                            { value: '00', text: 'Select Categories' },
                            { value: '01', text: 'Categories 01' },
                            { value: '02', text: 'Categories 02' },
                            { value: '04', text: 'Categories 03' },
                          ]"
                          :defaultCurrent="0"
                          @change="selectHandler"
                          placeholder="Select an option"
                          name="myNiceSelect"
                        />
                      </div>
                    </div>
                  </div>

                  <div class="col-xl-6 col-lg-6 col-md-6">
                    <div class="contact-one__form-btn">
                      <button class="thm-btn" type="submit" data-loading-text="Please wait...">
                        <span class="txt">Book Now</span>
                        <i class="icon-double-chevron"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

        <div class="col-xl-4 col-lg-5">
          <div class="team-details__right">
            <div class="team-details__right-single mb40">
              <div class="team-details__right-single-img">
                <img src="assets/images/resources/team-details-img1.jpg" alt="#" />
              </div>
              <div class="contact-info">
                <ul>
                  <li>
                    <div class="inner">
                      <div class="icon-box">
                        <span class="icon-phone-call-1"></span>
                      </div>
                      <div class="content-box">
                        <p>Tel : <a href="tel:12345615523">+ 123-4561-5523</a></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="inner">
                      <div class="icon-box">
                        <span class="icon-message"></span>
                      </div>
                      <div class="content-box">
                        <p>Email : <a href="mailto:yourmail@email.com">needhelp@company.com</a></p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="inner">
                      <div class="icon-box">
                        <span class="icon-placeholder"></span>
                      </div>
                      <div class="content-box">
                        <p>Add : Flat 20, Reynolds Neck</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div class="team-details__right-single">
              <div class="team-details__right-single-img">
                <img src="assets/images/resources/team-details-img2.jpg" alt="#" />
              </div>
              <div class="team-details__right-single-content">
                <div class="title">
                  <p>Follow Me On :</p>
                </div>
                <ul class="social-links">
                  <li><a href="#"><span class="icon-twitter"></span></a></li>
                  <li><a href="#"><span class="icon-facebook"></span></a></li>
                  <li><a href="#"><span class="icon-pinterest"></span></a></li>
                  <li><a href="#"><span class="icon-instagram"></span></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import NiceSelect from '@/ui/NiceSelect.vue';

const selectHandler = (e) => { /* handle select change */ };
</script>

<style scoped>
/* Add your styles here */
</style>