<template>
  <swiper :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide>
    <swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide>
    <swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide>
    <swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>
<script>
  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/navigation';


  // import required modules
  import { Navigation } from 'swiper/modules';
  import { reviews } from '@/utils/Reviews';

  export default {
    data: {
      reviewList: reviews
    },
    components: {
      Swiper,
      SwiperSlide,
    },
    method: {
      printList() {
        console.log(this.reviewList);
      }
    },
    setup() {
      printList()
      return {
        modules: [Navigation],
      };
    },
  };
</script>
