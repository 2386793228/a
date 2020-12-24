<template>
  <div class="main">
    <div class="headnav">
      <div class="info">
        <div><img src="~assets/img/home/userinfo.jpg" alt="" /></div>
        <div>
          <span><b>张先生&nbsp;:</b></span
          ><span>&nbsp;下午好</span>
          <p>上次登录{{ lastTime }}</p>
        </div>
      </div>
      <div class="swiper">
        <md-swiper :autoplay="0" ref="swiper" :is-prevent="false">
          <md-swiper-item :key="$index" v-for="(item, $index) in swiperitem">
            <ul class="swiperul">
              <li
                class="swiperli"
                :key="$index1"
                v-for="(sub, $index1) in item"
              >
                <i
                  :class="sub.class"
                  @click="personcenter($index, $index1)"
                ></i>
                <span>{{ sub.text }}</span>
              </li>
            </ul>
          </md-swiper-item>
        </md-swiper>
      </div>
    </div>
    <div class="inform">
      <md-notice-bar scrollable>
        <span slot="left" class="iconfont icon-weibiaoti1"></span>
        <span class="content"
          >央行2601号文件，关于征信制度改革的。。。。。。。。。。。。</span
        >
        <span slot="right" class="iconfont icon-jiantou"></span>
      </md-notice-bar>
    </div>
    <div class="location">
      <div
        class="location-to"
        :style="{ 'background-image': 'url(' + item.url + ')' }"
        :key="index"
        @click="ax(index)"
        v-for="(item, index) in location"
      >
        <div class="zz">
          <span>{{ item.title }}</span>
          <p>{{ item.brief }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { NoticeBar, Icon, Swiper, SwiperItem } from "mand-mobile";
export default {
  name: "Home",
  components: {
    [NoticeBar.name]: NoticeBar,
    [Icon.name]: Icon,
    [Swiper.name]: Swiper,
    [SwiperItem.name]: SwiperItem,
  },
  data() {
    return {
      kj:'a',
      a: "我是home组件",
      lastTime: "2018-07-15 17:33:41",
      swiperitem: [
        [
          {
            class: "iconfont icon-xiaojisuanqi",
            text: "贷款计算器",
          },
          {
            class: "iconfont icon-riliriqi",
            text: "金融日历",
          },
          {
            class: "iconfont icon-wp-sj",
            text: "学习园地",
          },
          {
            class: "iconfont icon-shezhi-",
            text: "我的设置",
          },
        ],
        [
          {
            class: "iconfont icon-xiaojisuanqi",
            text: "贷款计算器",
          },
          {
            class: "iconfont icon-riliriqi",
            text: "金融日历",
          },
          {
            class: "iconfont icon-wp-sj",
            text: "学习园地",
          },
          {
            class: "iconfont icon-shezhi-",
            text: "我的设置",
          },
        ],
        [
          {
            class: "iconfont icon-xiaojisuanqi",
            text: "贷款计算器",
          },
          {
            class: "iconfont icon-riliriqi",
            text: "金融日历",
          },
          {
            class: "iconfont icon-wp-sj",
            text: "学习园地",
          },
          {
            class: "iconfont icon-shezhi-",
            text: "我的设置",
          },
        ],
      ],
      location: [
        {
          url: require("assets/img/home/banklink1.jpg"),
          title: "家园e贷",
          brief: "无抵押、免材料、放款快",
        },
        {
          url: require("assets/img/home/userinfo.jpg"),
          title: "一手房按揭",
          brief: "无抵押、免材料、放款快",
        },
        {
          url: require("assets/img/home/banklink1.jpg"),
          title: "二手房按揭",
          brief: "无抵押、免材料、放款快",
        },
        {
          url: require("assets/img/home/banklink1.jpg"),
          title: "秒秒贷",
          brief: "无抵押、免材料、放款快",
        },
      ],
    };
  },
  methods: {
    ax(index) {
      if (index == 0) {
        this.$router.push("/homeLande");
      } else if (index == 1) {
        this.$router.push("/firstHome");
      } else if (index == 2) {
        this.$router.push("/secondHome");
      } else if (index == 3) {
        this.$router.push("/secsLoans");
      }
    },
    personcenter($index, $index1) {
      // console.log(`第${$index+1}页，第${$index1+1}个`);
      //根据不同的$index，$index1来做不同的跳转
      if($index==0 && $index1==3){
        this.$router.push('/mySettings')
      }
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  margin: auto;
  .headnav {
    height: 580px;
    width: 100%;
    background-color: #fff;
    .info {
      width: 100%;
      height: 260px;
      text-align: left;
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-bottom: 2px solid #e0e0e0;
      div:nth-of-type(1) {
        width: 30%;
        height: 83%;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      div:nth-of-type(2) {
        width: 60%;
        height: 83%;
        span {
          font-size: 38px;
        }
        p {
          font-size: 30px;
          margin-top: 60px;
        }
      }
    }
    .swiper {
      width: 100%;
      height: 320px;
    }
  }
  .inform {
    margin: 30px auto;
    border-radius: 20px;
    background-color: white;
    span.content {
      color: black;
      font-size: 36px;
    }
    .iconfont {
      font-size: 60px;
      color: #666;
    }
  }
  .location {
    width: 100%;
    height: 600px;
    background-color: #fff;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-content: space-around;
    .location-to {
      width: 45%;
      height: 45%;
      // background-image: url('~assets/img/home/banklink1.jpg');
      background-size: 100% 100%;
      color: white;
      position: relative;
      .zz {
        padding-top: 20px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        span {
          font-size: 40px;
        }
        p {
          font-size: 26px;
        }
      }
    }
  }
}
// 轮播
.swiperul {
  display: flex;
  justify-content: space-around;
  .swiperli {
    width: 23%;
    height: 250px;
    margin-top: 30px;
    i {
      font-size: 132px;
      display: block;
      margin-bottom: -40px;
    }
    span {
      font-size: 30px;
    }
  }
}
</style>