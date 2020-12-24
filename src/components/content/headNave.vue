<template>
  <div class="nav">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  name: "headNave",
};
</script>
<style lang="less" scoped>
.nav {
  width: 100%;
  // height: 130px;
  display: flex;
  align-content: center;
  div:nth-of-type(1) {
    flex: 1;
  }
  div:nth-of-type(2) {
    flex: 2;
    // line-height: 64px;
  }
  div:nth-of-type(3) {
    flex: 1;
    text-align: right;
    align-self: center;
    margin-top: 10px;
  }
}
</style>