<template>
  <section class="contact-page">
    <div class="container">
      <div class="row">
        <div class="col-xl-8">
          <div class="contact-one__form contact-one__form--contact">
            <div class="sec-title">
              <div class="sec-title__tagline">
                <h6>Call to Action</h6>
                <span class="right"></span>
              </div>
              <h2 class="sec-title__title">You Can Easily Book Our <br /> Appointment</h2>
            </div>

            <form @submit.prevent="handleSubmit" class="default-form2 contact-form-validated">
              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="input-box">
                    <input v-model="formData.name" type="text" name="name" placeholder="Your Name" required />
                  </div>
                </div>
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="input-box">
                    <input v-model="formData.email" type="email" name="email" placeholder="Email Address" required />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="input-box">
                    <input v-model="formData.phone" type="text" placeholder="Phone" name="phone" />
                  </div>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="input-box">
                    <input v-model="formData.subject" type="text" placeholder="Subject" name="subject" />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-xl-12">
                  <div class="input-box">
                    <textarea v-model="formData.message" name="message" placeholder="Write a Message"></textarea>
                  </div>
                </div>

                <div class="col-xl-6 col-lg-6 col-md-6">
                  <div class="contact-one__form-btn">
                    <button class="thm-btn" type="submit" :data-loading-text="'Please wait...'">
                      <span class="txt">Book Now</span>
                      <i class="fa fa-angle-double-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div class="col-xl-4">
          <div class="contact-page__img">
            <img src="assets/images/resources/contact-page-img.jpg" alt="#" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
});

const handleSubmit = () => {
  console.log('Form submitted:', formData.value);
  // Add your form submission logic here
};
</script>
 