<template>
  <div>
    <head-nave class="navhead">
      <md-icon
        slot="left"
        name="arrow-left"
        class="left"
        @click="returnHome"
      ></md-icon>
      <span slot="center">家园e贷</span>
    </head-nave>
    <div class="msgcontrol">
      <ul class="msgone">
        <li v-for="(item, index) in msgone" :key="index">
          <div class="imgc">
            <img :src="item.src" />
          </div>
          <span>{{ item.title }}</span>
        </li>
      </ul>
      <ul class="msgtwo">
        <li v-for="(item, index) in msgtwo" :key="index">
          <div class="imgc">
            <img :src="item.src" />
          </div>
          <span>{{ item.title }}</span>
        </li>
      </ul>
    </div>
    <div class="progress">
      <head-nave>
        <span slot="left">进度查询</span>
        <md-icon
          slot="right"
          name="arrow-right"
          @click="detailsBoard"
        ></md-icon>
      </head-nave>
      <md-field>
        <md-field-item solid v-for="(item, index) in fielditems" :key="index">
          <div slot="left">
            <md-progress
              transition
              :size="50"
              :value="item.value"
              :width="2"
              :rotate="item.rotate"
              border-color="#fff"
              :color="item.color"
            >
              <span class="progress-value">{{ item.progressValue }}</span>
            </md-progress>
          </div>
          <div slot="default" class="default">
            <p>{{ item.defaultP }}</p>
            <md-steps
              direction="vertical"
              :steps="steps"
              :current="0.6"
              vertical-adaptive
            >
            </md-steps>
          </div>
          <div slot="right" class="right">
            <md-button type="primary" size="small" @click="checkquickly(index)"
              >立即查看</md-button
            >
          </div>
        </md-field-item>
      </md-field>
    </div>
  </div>
</template>

<script>
import headNave from "components/content/headNave";
import { Icon, Field, FieldItem, Progress, Steps, Button } from "mand-mobile";
export default {
  name: "homeLande",
  components: {
    headNave,
    [Icon.name]: Icon,
    [Field.name]: Field,
    [FieldItem.name]: FieldItem,
    [Progress.name]: Progress,
    [Steps.name]: Steps,
    [Button.name]: Button,
  },
  data() {
    return {
      msgone: [
        {
          src: require("assets/img/msgboard/homeLande1.jpg"),
          title: "抢单",
        },
        {
          src: require("assets/img/msgboard/homeLande2.jpg"),
          title: "贷前代办",
        },
        {
          src: require("assets/img/msgboard/homeLande3.jpg"),
          title: "超时任务",
        },
        {
          src: require("assets/img/msgboard/homeLande4.jpg"),
          title: "贷中代办",
        },
      ],
      msgtwo: [
        {
          src: require("assets/img/msgboard/homeLande5.jpg"),
          title: "贷后管理",
        },
        {
          src: require("assets/img/msgboard/homeLande6.jpg"),
          title: "查询统计",
        },
        {
          src: require("assets/img/msgboard/homeLande7.jpg"),
          title: "离线箱",
        },
      ],
      steps: [
        {
          name: "面核面签",
        },
        {
          name: "终审通过",
        },
      ],
      fielditems: [
        {
          value: 0.6,
          rotate: -130,
          color: "grey",
          progressValue: "60%",
          defaultP: "万科红郡南区B14楼1单元1201室",
        },
        {
          value: 0.8,
          rotate: -20,
          color: "green",
          progressValue: "80%",
          defaultP: "万科红郡南区C03楼2单元3258室",
        },
        {
          value: 1,
          rotate: -60,
          color: "blue",
          progressValue: "100%",
          defaultP: "万科红郡南区B01楼3单元5268室",
        },
      ],
    };
  },
  methods: {
    returnHome() {
      this.$router.push("/home");
    },
    // 进度progress事件
    checkquickly(index) {
      if (index == 0) {
        //do...
      } else if (index == 1) {
        //do...
      } else {
        //do...
      }
    },
    // 公告详情
    detailsBoard() {
      this.$router.push("/particularsBoard");
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
.msgcontrol {
  height: 500px;
  background-color: #fff;
  margin-bottom: 40px;
  .msgone {
    display: flex;
    height: 50%;
    align-items: center;
    li {
      height: 80%;
      width: 130px;
      margin-left: 40px;
      .imgc {
        width: 130px;
        height: 130px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      span {
        font-size: 30px;
        display: block;
        margin-top: 12px;
      }
    }
  }
  .msgtwo {
    display: flex;
    height: 50%;
    align-items: center;
    li {
      height: 80%;
      width: 130px;
      margin-left: 40px;
      .imgc {
        width: 130px;
        height: 130px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      span {
        font-size: 30px;
        display: block;
        margin-top: 12px;
      }
    }
  }
}
.progress {
  height: 600px;
  background-color: #fff;
  // border: 1px solid red;
  .nav {
    height: 80px;
    line-height: 80px;
    border-bottom: 1px solid #e0e0e0;
    span {
      font-size: 30px;
      display: block;
      font-weight: bolder;
    }
    i {
      display: block;
      font-size: 40px;
    }
  }
  .md-field {
    padding: 0;
    // fielditem
    .md-field-item {
      height: 170px;
      border-bottom: 2px solid #e0e0e0;
      .progress-value {
        font-size: 24px;
        font-family: DINPro-Medium;
      }
      .default {
        p {
          text-align: left;
        }
        .md-steps {
          padding: 0;
          margin-top: 6px;
        }
      }
      .right {
        position: absolute;
        top: 0;
        right: 36px;
        .md-button {
          border-radius: 20px;
        }
        .md-button.primary:after {
          border: none;
        }
      }
    }
  }
}
</style>