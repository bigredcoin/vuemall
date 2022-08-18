<template>
  <div id="home">
    <navi-bar class="home-navi"><div slot="center">购物街</div></navi-bar>
    <home-swiper :banners="banners"/>
    <Home-Recommend :recommends="recommends"/>
  </div>
</template>

<script>
  import NaviBar from 'components/common/navibar/NaviBar'
  import HomeSwiper from './childComps/HomeSwiper'
  import HomeRecommend from "./childComps/HomeRecommend"

  import {getHomeMultidata} from "network/home"

  export default {
    name: 'HomeCom',
    components: {
    NaviBar,
    HomeSwiper,
    HomeRecommend
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
