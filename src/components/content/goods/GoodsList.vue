<template>
  <div class="goods">
    <goods-item v-for="item in goods" :key="item.id" :goods-item="item"/>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  name: 'GoodsList',
  components: {
    GoodsItem
  },
  props: {
    goods: {
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
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 1%;
  }
</style>
