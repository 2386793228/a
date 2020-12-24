<template>
  <div>
    <head-nave class="navhead">
      <md-icon
        slot="left"
        name="arrow-left"
        class="left"
        @click="returnpersoncenter"
      ></md-icon>
      <span slot="center">强制密码修改</span>
    </head-nave>
    <md-field>
      <div class="inputitem">
        <md-input-item
          type="password"
          title="新密码"
          placeholder="请输入新密码"
        ></md-input-item>
      </div>
      <div class="inputitem">
        <md-input-item
          type="password"
          title="确认密码"
          placeholder="请输入确认密码"
        ></md-input-item>
      </div>
    </md-field>
    <div class="btn">
      <md-button type="default">确定</md-button>
    </div>
    <div class="brief">
      <p>温馨提示 :</p>
      <p>1、&nbsp;&nbsp;新密码不能与旧密码相同</p>
      <p>2、&nbsp;&nbsp;密码规则为6-15位</p>
      <p>3、&nbsp;&nbsp;密码必须为数字和字母的组合</p>
    </div>
  </div>
</template>
<script>
import { Icon, InputItem, Field, Button } from "mand-mobile";
import headNave from "components/content/headNave";
export default {
  name: "changePwd",
  components: {
    headNave,
    [Icon.name]: Icon,
    [InputItem.name]: InputItem,
    [Field.name]: Field,
    [Button.name]: Button,
  },
  data() {
    return {};
  },
  methods: {
    returnpersoncenter() {
      this.$router.push("/mySettings");
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
.md-field {
  padding: 0 30px;
}
.inputitem {
  border-bottom: 2px solid #e0e0e0;
  height: 130px;
  line-height: 130px;
}
.btn {
  width: 80%;
  height: 100px;
  margin: 100px auto;
  .md-button {
    border: 1px solid;
    border-radius: 20px;
  }
}
.brief {
  height: 230px;
  padding: 30px;
  font-size: 36px;
  color: grey;
  text-align: left;
  background-color: #fff;
}
</style>