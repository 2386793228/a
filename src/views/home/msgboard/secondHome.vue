<template>
  <div>
    <head-nave class="navhead">
      <md-icon
        slot="left"
        name="arrow-left"
        class="left"
        @click="returnHome"
      ></md-icon>
      <span slot="center">二手房按揭</span>
    </head-nave>
  </div>
</template>

<script>
import { Icon } from "mand-mobile";
import headNave from "components/content/headNave";
export default {
  name: "secondHome",
  components: {
    headNave,
    [Icon.name]: Icon,
  },
  methods: {
    returnHome() {
      this.$router.push("/home");
    },
  },
};
</script>
<style lang="less" scoped>
.md-icon.icon-font.md.left {
  font-size: 100px;
}
.navhead {
  line-height: 64px;
  span {
    font-size: 55px;
  }
}
</style>