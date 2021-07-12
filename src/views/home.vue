<template>
  <div id="home">
    <div id="main">
      <div class="head">
        <div class="nav">
          <div class="navText">
            <img src="@/assets/home/hb.png" />
            <span class>签到</span>
          </div>
          <span style="font-size: 16px; font-weight: 700; color: white"
            >推荐</span
          >
          <div class="navText" style="width: 60px">
            <img src="@/assets/home/hb.png" />
            <span>会员码</span>
          </div>
        </div>
        <div class="searchBox">
          <i class="iconfont icon-saomiaoshibie" style="color: Orange"></i>
          <span
            style="border: 1px solid Gainsboro; height: 22px; margin-top: 1px"
          ></span>
          <input type="text" placeholder="请输入搜索关键词" />
          <i class="iconfont icon-zhaopian"></i>
          <button>搜索</button>
        </div>
      </div>
      <div class="navBar">
        <div class="navchild">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tianmao" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-juhuasuan" />
          </svg>
          <i class="iconfont icon-notdef1"></i>
          <i class="iconfont icon-huochejipiao"></i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tianmaochaoshi" />
          </svg>
        </div>
        <div class="navchild">
          <i class="iconfont icon-icon"></i>
          <i class="iconfont icon-xiaoshida1"></i>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-taojinbi" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-tubiaozhizuomoban" />
          </svg>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-category" />
          </svg>
        </div>
      </div>
      <div class="navBarTow">
        <div class="common juhuasuan">
          <div>
            <span>聚划算</span>
            <img src="@/assets/home/lyq1.png" alt="" />
            <img src="@/assets/home/lyq2.jpg" alt="" />
          </div>
        </div>
        <div class="common zhibo">
          <div>
            <span>淘宝直播</span>
            <img src="@/assets/home/mz1.jpg" alt="" />
            <img src="@/assets/home/rcg.jpg" alt="" />
          </div>
        </div>
        <div class="common temai">
          <div>
            <span>天天特卖</span>
            <img src="@/assets/home/mz1.jpg" alt="" />
            <img src="@/assets/home/rcg.jpg" alt="" />
          </div>
        </div>
        <div class="common maicai">
          <div>
            <span>淘宝买菜</span>
            <img src="@/assets/home/dg.png" alt="" />
            <img src="@/assets/home/xigua.jpg" alt="" />
          </div>
        </div>
      </div>
      <!-- 瀑布流式布局 -->
      <div class="body">
        <div class="lunbo">
          <van-swipe
            class="my-swipe"
            :autoplay="2000"
            indicator-color="white"
            :width="200"
          >
            <van-swipe-item v-for="(url, index) in images" :key="index">
              <img :src="url" alt="" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="everycard" v-for="(item, index) in data" :key="index">
          <img :src="item.image" alt="" />
          <div class="shopDate">
            <span class="shopName">
              {{ item.shopName }}
            </span>
            <div style="display: inline-block">
              <span class="unit">￥</span>
              <span class="price">
                {{ item.price }}
              </span>
              <span class="buyNumber">
                {{ item.buyNumber }}
              </span>
            </div>
            <i class="iconfont icon-shenglvehao"></i>
          </div>
          <div v-show="showMore" class="mask">
            <div class="operation">
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-xinsui" />
                </svg>
                <span> 商品不感兴趣 </span>
              </div>
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-blacklist" />
                </svg>
                <span> 屏蔽更多同类 </span>
              </div>
              <div>
                <svg class="icon" aria-hidden="true">
                  <use xlink:href="#icon-biaoqing" />
                </svg>
                <span> 图片引起不适 </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { homeDate } from "@/store/homeDate.js";
export default {
  data() {
    return {
      images: [
        "assets/home/lunbo1.jpeg",
        "assets/home/lunbo2.jpeg",
        "assets/home/lunbo3.jpeg",
        "assets/home/lunbo4.jpeg",
      ],
      data: [],
      showMore: true,
    };
  },
  created() {
    this.images = this.images.map((item) => {
      return require("@/" + item);
    });
  },
  mounted() {
    this.data = homeDate.map((item) => {
      item.image = require("@/" + item.image);
      item.buyNumber = item.buyNumber + "人付款";
      return item;
    });
  },
};
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  // height: auto;

  #main {
    .head {
      padding: 5% 5% 2px 5%;
      background: white;
      .nav {
        width: 100%;
        display: flex;
        justify-content: space-between;
        .navText {
          background: FloralWhite;
          color: OrangeRed;
          width: 48px;
          border-radius: 18px;
          padding: 2px 3px;
          display: flex;
          img {
            width: 20px;
            border-radius: 50%;
          }
          span {
            font-size: 12px;
            padding: 2px;
          }
        }
      }
      .searchBox {
        width: 99%;
        padding: 2px 2px;
        margin: 6px 0;
        border: 2px solid DarkOrange;
        border-radius: 22px;
        display: flex;
        background: white;
        input {
          border: none;
          width: 60%;
          margin-left: 4px;
        }
        input::-webkit-input-placeholder {
          color: LightGrey;
          font-size: 14px;
        }
        i {
          margin: 2px 8px;
          font-size: 22px;
        }
        button {
          background-image: linear-gradient(90deg, Orange, DarkOrange);
          border: none;
          color: white;
          font-size: 12px;
          width: 45px;
          border-radius: 18px;
          padding: 5px 0;
        }
      }
    }
    .navBar {
      margin: 0 5px;
      padding: 6px 6px;
      background: white;
      border: 1px solid WhiteSmoke;
      border-radius: 18px;
      box-shadow: 1px white;
      .navchild {
        display: flex;
        justify-content: space-around;
        .icon {
          width: 14%;
          height: 3em;
          vertical-align: -0.15em;
          fill: currentColor;
          overflow: hidden;
        }
        .iconfont {
          font-size: 3em;
        }
      }
    }
    .navBarTow {
      border-radius: 18px;
      margin: 5px 5px;
      overflow: hidden;
      background: white;
      .common {
        width: 50%;
        height: 50%;
        display: inline-block;
        img {
          width: 50%;
          height: 100%;
        }
        span {
          position: absolute;
        }
      }
      .juhuasuan {
        background-image: linear-gradient(to right bottom, pink, white, white);
      }
      .zhibo {
        background-image: linear-gradient(to left bottom, pink, white, white);
      }
      .temai {
        background: white;
      }
      .maicai {
        background: white;
      }
    }
    .body {
      column-count: 2;
      column-gap: 10px;
      padding: 5px 5px;
      background: Gainsboro;
      .lunbo {
        width: 100%;
        border-radius: 12px;
        overflow: hidden;
        .my-swipe {
          width: 100%;
          overflow: hidden;
          .van-swipe-item {
            width: 100%;
          }
          img {
            width: 200px;
            height: 100%;
          }
        }
      }
      .everycard {
        border-radius: 12px;
        background: white;
        border: 1px solid WhiteSmoke;
        margin: 5px 0;
        height: 20%;
        overflow: auto;
        position: relative;
        img {
          width: 100%;
          height: 220px;
        }
        .shopDate {
          padding: 5px 5px;
          vertical-align: middle;
          .shopName {
            overflow: hidden;
            display: -webkit-box;
            /*! autoprefixer: off */
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            font-size: 14px;
            letter-spacing: 1px;
          }
          .unit {
            font-size: 12px;
            color: OrangeRed;
          }
          .price {
            color: OrangeRed;
            font-size: 1em;
          }
          .buyNumber {
            font-size: 8px;
            color: Silver;
          }
          i {
            font-size: 28px;
            color: Silver;
            float: right;
            line-height: 28px;
          }
        }
        .mask {
          background: rgba(0, 0, 0, 0.7);
          position: absolute;
          width: 100%;
          height: 100%;
          z-index: 100;
          left: 0;
          top: 0;
          .operation {
            div {
              width:80%;
              background: white;
              svg {
                width: 15%;
                height: 3em;
              }
            }
          }
        }
      }
    }
  }
}
</style>
