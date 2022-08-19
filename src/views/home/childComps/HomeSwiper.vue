<template>
  <swiper-main>
    <swiper-item v-for="item in banners" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper-main>
</template>

<script>
  import { SwiperMain, SwiperItem } from 'components/common/swiper'
  
  export default {
    name: 'HomeSwiper',
    components: {
      SwiperMain,
      SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default() {
          return []
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
