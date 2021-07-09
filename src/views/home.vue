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
      <div class="body">
        <div class="lunbo">
          <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white" :width="200">
            <van-swipe-item v-for="(url, index) in images" :key="index">
              <img :src="url" alt="" />
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="everycard"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      images: [
        "assets/home/lunbo1.jpeg",
        "assets/home/lunbo2.jpeg",
        "assets/home/lunbo3.jpeg",
        "assets/home/lunbo4.jpeg",
      ],
    };
  },
  created() {
    this.images = this.images.map((item) => {
      return require("@/" + item);
    });
  },
};
</script>

<style lang="less" scoped>
#home {
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.8);
  #main {
    .head {
      padding: 5% 5% 2px 5%;
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
      margin: 5px 5px;
      .lunbo {
        width: 100%;
        border-radius:12px;
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
    }
  }
}
</style>
