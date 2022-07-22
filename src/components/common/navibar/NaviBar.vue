<template>
  <div class="navi-bar">
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'NaviBar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .navi-bar {
    display: flex;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
  }

  .left, .right {
    width: 60px;
  }

  .center {
    flex: 1;
  }
</style>