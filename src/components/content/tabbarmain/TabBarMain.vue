<template>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="orange">
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-activated" src="~assets/img/tabbar/home_activated.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/Cart" activeColor="orange">
      <img slot="item-icon" src="~assets/img/tabbar/cart.png" alt="">
      <img slot="item-icon-activated" src="~assets/img/tabbar/cart_activated.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/Profile" activeColor="orange">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
      <img slot="item-icon-activated" src="~assets/img/tabbar/profile_activated.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from 'components/common/tabbar/TabBar.vue'
import TabBarItem from 'components/common/tabbar/TabBarItem.vue'

export default {
  name: 'TabBarMain',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
