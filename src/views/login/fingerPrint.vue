<template>
  <div>
    <div class="info">
      <div class="img">
        <img src="~assets/img/login/user.jpg" alt="" />
      </div>
      <p>{{ phone }}</p>
    </div>
    <div class="finger">
      <div class="img">
        <img src="~assets/img/login/finger.jpg" alt="">
      </div>
      <p>点击进行指纹登录</p>
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
import {ActionSheet} from 'mand-mobile'
export default {
  name:'Home',
  components:{
    [ActionSheet.name]: ActionSheet,
  },
  data() {
    return {
      phone: "182****9729",
      value: false,
      title: "切换登录方式",
      invalidIndex: 2,
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
    }
  },
  methods: {
    $_showActionSheet() {
      this.value = true;
    },
    $_selected(item) {
      if (item.value == 0) {
        this.$router.push("/pwdLogin");
      } else if (item.value == 1) {
        this.$router.push("/gestureUnlock");
      }
    },
  },
}
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
.finger{
  width: 600px;
  height: 300px;
  margin:150px auto;
  .img{
    width: 200px;
    height: 200px;
    margin:0 auto 30px;
    border-radius: 50%;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
  }
  p{
    font-size: 32px;
    font-weight: 600;
  }
}
a {
  font-size: 32px;
  color: black;
}
</style>