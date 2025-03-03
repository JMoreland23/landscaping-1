
<template>
  <section class="contact-one">
    <div class="contact-one__img wow slideInRight" data-wow-delay="500ms" data-wow-duration="2500ms">
      <img class="float-bob-y" src="assets/images/resources/content-v1-img1.png" alt="#" />
    </div>
    <div class="shape1"><img src="assets/images/shapes/contact-v1-shape1.png" alt="#" /></div>
    <div class="shape2"><img src="assets/images/shapes/contact-v1-shape2.png" alt="#" /></div>
    <div class="container">
      <div class="row">
        <!-- Start Contact One Form -->
        <div class="col-xl-8">
          <div class="contact-one__form">
            <div class="sec-title">
              <div class="sec-title__tagline">
                <h6>Contact Us</h6>
                <span class="right"></span>
              </div>
              <h2 class="sec-title__title">You Can Easily Book Our <br /> Appointment</h2>
            </div>

            <form id="contact-form" name="contact_form" class="default-form2" @submit.prevent="submitHandler">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="input-box">
                    <input type="text" v-model="formName" placeholder="Your Name" required />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="input-box">
                    <input type="email" v-model="formEmail" placeholder="Email Address" required />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="input-box">
                    <input type="text" v-model="formSubject" placeholder="Select Date" id="datepicker" />
                  </div>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="input-box">
                    <input type="text" v-model="formTime" placeholder="Select time" />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="input-box">
                    <div class="select-box"> 

                      <NiceSelect  :options="categories" :defaultCurrent="0" name="Choose Your Topic" @onChange="changeHandler"
                          placeholder="Choose Your Topic" className="selectmenu wide d-flex align-items-center" />
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
        <!-- End Contact One Form -->
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import NiceSelect from '@/ui/NiceSelect'

const formName = ref('')
const formEmail = ref('')
const formSubject = ref('')
const formTime = ref('')

const categories = [
  { value: "00", text: "Select Categories" },
  { value: "01", text: "Categories 01" },
  { value: "02", text: "Categories 02" },
  { value: "04", text: "Categories 03" },
]

 
const changeHandler = (value) => { };


const submitHandler = (e) => {
  // Handle form submission
  e.preventDefault()
}
</script>

<style scoped>
/* Add your custom styles here */
</style>