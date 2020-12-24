<template>
  <div>
    <head-nave class="navhead">
      <md-icon
        slot="left"
        name="arrow-left"
        class="left"
        @click="returnHome"
      ></md-icon>
      <span slot="center">个人中心</span>
    </head-nave>
    <md-field>
      <md-cell-item>
        <div slot="left" class="cleft">修改密码</div>
        <div slot="right" class="cright">
          <md-icon name="arrow-right" @click="changepwd"></md-icon>
        </div>
      </md-cell-item>
      <md-cell-item>
        <div slot="left" class="cleft">退出登录</div>
        <div slot="right" class="cright">
          <md-icon name="arrow-right" @click="logout"></md-icon>
        </div>
      </md-cell-item>
    </md-field>
  </div>
</template>
<script>
import { Field, CellItem, Dialog, Icon } from "mand-mobile";
import headNave from "components/content/headNave";
export default {
  name: "mySettings",
  components: {
    headNave,
    [Field.name]: Field,
    [CellItem.name]: CellItem,
    [Icon.name]: Icon,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    returnHome() {
      this.$router.push("/home");
    },
    changepwd() {
      this.$router.push("/changePwd");
    },
    logout() {
      Dialog.confirm({
        title: "确认",
        content: "请确认是否注销账号",
        confirmText: "确定",
        onConfirm: () => this.$router.push("/pwdLogin"),
      });
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
  text-align: left;
  .md-cell-item {
    .cleft {
      font-size: 40px;
    }
    .cright {
      .md-icon {
        font-size: 60px;
      }
    }
  }
}
</style>