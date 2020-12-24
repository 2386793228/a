<template>
  <div>
    <div class="info">
      <div class="img">
        <img src="~assets/img/login/user.jpg" alt="" />
      </div>
      <p>{{ phone }}</p>
    </div>
    <div class="gesture">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <a @click="$_showActionSheet">切换登录方式</a>
    <md-action-sheet
      v-model="value"
      :title="title"
      :options="options"
      :invalid-index="invalidIndex"
      @selected="$_selected"
    ></md-action-sheet>
  </div>
</template>
<script>
import { ActionSheet } from "mand-mobile";
export default {
  name: "Home",
  components: {
    [ActionSheet.name]: ActionSheet,
  },
  data() {
    return {
      phone: "182****9729",
      value: false,
      title: "切换登录方式",
      invalidIndex: 1,
      options: [
        {
          label: "密码登录",
          value: 0,
        },
        {
          label: "手势解锁",
          value: 1,
        },
        {
          label: "指纹解锁",
          value: 2,
        },
      ],
    };
  },
  methods: {
    $_showActionSheet() {
      this.value = true;
    },
    $_selected(item) {
      if (item.value == 0) {
        this.$router.push("/pwdLogin");
      } else if (item.value == 2) {
        this.$router.push("/fingerPrint");
      }
    },
  },
};
</script>

<style lang="less" scoped>
.info {
  height: 450px;
  width: 600px;
  border: 1px solid #f2f2f2;
  margin: 120px auto 0;
  .img {
    width: 300px;
    height: 300px;
    margin: 20px auto;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }
  p {
    font-size: 40px;
  }
}

.gesture {
  width: 600px;
  height: 600px;
  margin: auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
  border: 1px solid #f2f2f2;
  div {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid;
    background-color: #fff;
  }
}
a {
  font-size: 32px;
  color: black;
}
</style>