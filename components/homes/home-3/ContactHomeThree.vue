


<script setup>
import { ref } from 'vue'; 
import NiceSelect from '@/ui/NiceSelect.vue';



// // video popup
import { useVideoModal } from "~/components/composables/useVideoModal";
const { playVideo } = useVideoModal();
const videoUrl = 'https://www.youtube.com/embed/GcMiYI1gWD4?si=Fj5qd8xfgXyl1v8J';

const form = ref({
  name: '',
  email: '',
  category: '',
});

const isVideoOpen = ref(false);

const selectOptions = ref([
  { value: '00', text: 'Select Categories' },
  { value: '01', text: 'Categories 01' },
  { value: '02', text: 'Categories 02' },
  { value: '04', text: 'Categories 03' },
]);

const selectHandler = (e) => {
  form.value.category = e.target.value;
};

const handleSubmit = () => {
  console.log('Form submitted:', form.value);
};

const setIsVideoOpen = (value) => {
  isVideoOpen.value = value;
};
</script>

 

<template>
  <section class="free-quote-one">
    <div class="shape1">
      <img src="assets/images/shapes/free-quote-v1-shape1.png" alt="#" />
    </div>
    <div class="shape2 wow slideInRight" data-wow-delay="100ms" data-wow-duration="2500ms">
      <img class="float-bob-y" src="assets/images/shapes/free-quote-v1-shape2.png" alt="#" />
    </div>
    <div class="container">
      <div class="row">
        <div class="col-xl-5">
          <div class="free-quote-one__img">
            <div class="free-quote-one__img1">
              <div class="free-quote-one__img-content">
                <h2>Get <br /> A <br /> Quote</h2>
              </div>
              <img src="assets/images/resources/free-quote-v1-img1.png" alt="#" />
            </div>

            <div class="free-quote-one__img2">
              <img src="assets/images/resources/free-quote-v1-img2.png" alt="#" />
              <div class="video-box">
                <a @click="playVideo(videoUrl)" :style="{ cursor: 'pointer' }" style="cursor: pointer" class="video-popup">
                  <div class="free-quote-one__video">
                    <span class="icon-play-button"></span>
                    <i class="ripple"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-7">
          <div class="free-quote-one__content">
            <div class="sec-title-three">
              <div class="sec-title-three__tagline">
                <h6>free quote</h6>
              </div>
              <h2 class="sec-title-three__title">Get an insurance quote <br /> to get started!</h2>
            </div>

            <div class="free-quote-one__content-text">
              <p>There are many variats of passages the majority available <br />
                have suffered a in some form by available companu <br />
                alte pic alte in some form by to at available.</p>
            </div>

            <div class="free-quote-one__content-form">
              <form @submit.prevent="handleSubmit" class="default-form2">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="input-box">
                      <input type="text" v-model="form.name" placeholder="Full name" required />
                    </div>
                  </div>
                  <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="input-box">
                      <input type="email" v-model="form.email" placeholder="Email address" required />
                    </div>
                  </div>
                </div>

                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12">
                    <div class="input-box"> 
                      <NiceSelect  :options="selectOptions" :defaultCurrent="0" name="Choose Your Topic" @onChange="changeHandler"
                          placeholder="Choose Your Topic" className="selectmenu wide d-flex align-items-center" />
                    </div>
                  </div>
                </div>

                <div class="row mt-3">
                  <div class="col-xl-6">
                    <div class="free-quote-one__content-form-btn">
                      <button class="thm-btn" type="submit">
                        <span class="txt">Send</span>
                        <i class="icon-double-chevron"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- video modal start -->
    <!-- <VideoPopup :isVideoOpen="isVideoOpen" @close="setIsVideoOpen(false)" videoId="8Oa21aCw8nU" /> -->
        <CommonVideoModal ref="video_modal" video-url="https://www.youtube.com/embed/7e90gBu4pas" />

    <!-- video modal end -->
  </section>
</template>
