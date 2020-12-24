<template>
  <div class="md-example-child md-example-child-input-item-4">
    <md-field>
      <div class="bankimg">
        <h5>中国大陆银行</h5>
      </div>
      <md-input-item
        title="账号"
        placeholder="请输入账号"
        style="border-radius: 10px 10px 0 0"
      >
        <md-icon name="info" slot="right"></md-icon>
      </md-input-item>
      <md-input-item
        title="密码"
        placeholder="请输入登录密码"
        style="border-radius: 0 0 10px 10px"
      >
        <md-icon name="visible" slot="right"></md-icon>
      </md-input-item>
    </md-field>
    <md-button type="default" @click="userLogin">登录</md-button>
    <md-field class="link">
      <a @click="$_showActionSheet">切换登录方式</a>
      <md-action-sheet
        v-model="value"
        :title="title"
        :options="options"
        :invalid-index="invalidIndex"
        @selected="$_selected"
      ></md-action-sheet>
    </md-field>
  </div>
</template>

<script>
import {
  Field,
  InputItem,
  Dialog,
  Icon,
  Button,
  ActionSheet,
} from "mand-mobile";

export default {
  name: "pwdlogin",

  components: {
    [Field.name]: Field,
    [InputItem.name]: InputItem,
    [Icon.name]: Icon,
    [Button.name]: Button,
    [ActionSheet.name]: ActionSheet,
  },

  data() {
    return {
      value: false,
      title: "切换登录方式",
      invalidIndex: 0,
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
      if (item.value == 1) {
        this.$router.push("/gestureUnlock");
      } else if (item.value == 2) {
        this.$router.push("/fingerPrint");
      }
    },
    // 用户登录
    userLogin() {
      Dialog.alert({
        content: "登录成功",
        onConfirm: () => {
          setTimeout(() => {
            this.$router.push("/home");
          }, 100);
        },
      });
    },
  },
};
</script>
<style lang="less" scoped>
.md-field {
  width: 720px;
  margin: auto;
  background-color: #f2f2f2;
  .bankimg {
    text-align: center;
    padding: 20px;
    margin-bottom: 20px;
  }
  .md-input-item {
    background-color: #fff;
    margin-left: 21px;
  }
}
.md-button.block {
  width: 85%;
  margin: 100px auto 0;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
}
.md-field.link {
  margin-top: 100px;
  a {
    font-size: 32px;
    color: black;
  }
}
</style>

