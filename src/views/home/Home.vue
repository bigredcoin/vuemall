<template>
  <div id="home">
    <navi-bar class="home-navi"><div slot="center">购物街</div></navi-bar>
    <swiper-main>
      <swiper-item v-for="item in banners" :key="item">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper-main>
  </div>
</template>

<script>
  import NaviBar from 'components/common/navibar/NaviBar'
  import {getHomeMultidata} from "network/home"
  import { SwiperMain, SwiperItem } from 'components/common/swiper'
  
  export default {
    name: 'HomeCom',
    components: {
      NaviBar,
      SwiperMain,
      SwiperItem
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      getHomeMultidata().then(res => {
        this.banners = res.data.data.banner.list
        this.recommends = res.data.data.recommend.list
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home-navi {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>
