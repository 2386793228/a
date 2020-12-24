<template>
  <div class="main">
    <head-nave>
      <md-icon
        slot="left"
        name="arrow-left"
        class="left"
        @click="returnHomelande"
      ></md-icon>
      <span slot="center">公告详情</span>
    </head-nave>
    <div class="body">
      <div class="title">
        <p>南京会展中心融资大会将于2018年5月28日盛大开幕</p>
      </div>
      <div class="img"></div>
      <div class="content">
        <p>
          南京会展中心融资大会将于2018年5月28日盛大开幕，届时将有国内外180家融资企业前往现场参展
          ，5月29日，财务部领导也会亲自莅临现场参观。如有参会报名者请联系XXX，报名通过后，统一
          发放入场证。
        </p>
      </div>
      <div class="data">
        <head-nave>
          <div slot="right">
            <p>XXXXX</p>
            <p>2018.5.08</p>
          </div>
        </head-nave>
      </div>
    </div>
  </div>
</template>
<script>
import { Icon } from "mand-mobile";
import headNave from "components/content/headNave";
export default {
  name: "particularsBoard",
  components: {
    headNave,
    [Icon.name]: Icon,
  },
  methods: {
    returnHomelande() {
      this.$router.push("/homeLande");
    },
  },
};
</script>
<style lang="less" scoped>
.main {
  background-color: #e4e4e4;
  height: 100vh;
  .nav {
    background-color: #d7d7d7;
    line-height: 64px;
    .md-icon.icon-font.md.left {
      font-size: 100px;
    }
    span {
      font-size: 55px;
    }
  }
  .body {
    height: 1000px;
    margin-top: 32px;
    background-color: #fff;
    .title {
      height: 150px;
      padding: 40px 40px 0;
      p {
        font-size: 36px;
        font-weight: bolder;
      }
    }
    .img {
      width: 90%;
      height: 250px;
      margin: auto;
      background-image: url("~assets/img/msgboard/nanjing.jpg");
      background-size: cover;
    }
    .content {
      width: 90%;
      height: 200px;
      margin: auto;
      text-align: left;
      padding-top: 40px;
      text-indent: 30px;
      p {
        font-size: 26px;
      }
    }
    .data {
      height: 130px;
      .nav {
        background-color: #fff;
        height: 100%;
        font-size: 30px;
        font-weight: bolder;
        p {
          margin-top: 10px;
          margin-right: 20px;
        }
      }
    }
  }
}
</style>