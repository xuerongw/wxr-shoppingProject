<template>
  <div id="search">
    <div id="main">
      <searchHead></searchHead>
      <div class="body">
        <div class="history">
          <p>
            历史搜索
            <i
              class="iconfont icon-shanchu-copy-copy-copy-copy-copy-copy"
              style="float: right; color:Silver;font-size:16px"
            ></i>
          </p>
          <div class="historySearch" ref="historySearch">
            <span
              v-for="(item, index) in history"
              :key="index"
              class="historyItem"
            >
              {{ item }}</span
            >
            <div class="showButton">
              <i
                class="iconfont icon-xiala1"
                @click="showMoreHistory"
                ref="showButton"
              ></i>
            </div>
          </div>
        </div>
        <div class="search">
          <p>
            搜索发现
            <i
              class="iconfont icon-chakan1"
              style="float: right; color: Silver;font-size:12px"
            ></i>
          </p>
          <div class="searchFind" ref="searchFind">
            <span
              v-for="(item, index) in searchFind"
              :key="index"
              class="findItem"
            >
              {{ item }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { store } from "../storedata.js";
import searchHead from "@/components/searchHead.vue";
export default {
  data() {
    return {
      //  option1: [
      //   { text: "全部商品", value: 0 },
      //   { text: "新款商品", value: 1 },
      //   { text: "活动商品", value: 2 },
      // ],
      // option2: [
      //   { text: "默认排序", value: "a" },
      //   { text: "好评排序", value: "b" },
      //   { text: "销量排序", value: "c" },
      // ],
      history: [
        "对",
        "连衣裙",
        "牛仔裙",
        "方领上衣",
        "牛排菲力",
        "垃圾袋",
        "化妆桌",
        "折叠镜子",
        "短裤夏天韩式2021",
        "a字半身裙",
        "指甲油不可撕拉胶甲油",
        "美甲套装新手",
        "小白鞋",
        "老爹鞋",
        "脱毛仪",
        "染发膏",
        "口红神仙色",
        "水乳套装",
        "面膜膜法世家",
        "唇釉日常妆容",
        "润唇膏",
        "粉底液混油皮",
        "遮瑕膏强力遮瑕",
        "佰草集",
        "雅诗兰黛",
        "AHC",
        "天猫U先",
        "气质连衣裙",
        "小黑裙",
        "娃娃领上衣",
        "百搭针织衫",
      ],
      searchFind: [
        "冬季情侣装",
        "新百伦mr530系列",
        "科沃斯540",
        "裴乐女鞋",
        "迪士尼手表女款",
      ],
      showMore: true,
    };
  },
  created() {},
  components: {
    searchHead,
  },
  methods: {
    // start(e) {
    //   this.startY = e.changedTouches[0].pageY;
    // },
    // end(e) {
    //   // 搞个防抖优化
    //   let moveY = 0;
    //   setTimeout(() => {
    //     moveY = e.changedTouches[0].pageY - this.startY;
    //     if (10 < moveY && moveY > 50) {
    //       this.showfilter = false;
    //       this.onRefresh();
    //     } else {
    //       this.showfilter = true;
    //     }
    //   }, 1000);
    // },
    // onRefresh() {
    //   this.$toast("刷新成功");
    //   this.isLoading = false;
    // },
    // order(array, rule) {
    //   return array.sort((a, b) => {
    //     return a[rule] - b[rule];
    //   });
    // },
    // goToDetail(item) {
    //   this.$router.push({path:'/storeDetail',query:{id:item.text}})
    // },
    showMoreHistory() {
      if (this.showMore) {
        this.$refs.historySearch.style.height = "auto";
        this.$refs.showButton.className = "iconfont icon-shanghuasanjiao";
      } else {
        this.$refs.historySearch.style.height = "";
        this.$refs.showButton.className = "iconfont icon-xiala1";
      }
      this.showMore = !this.showMore;
    },
  },
  computed: {
    newstore() {
      let newArr = [];
      let searchArr = [];
      var arr = [];
      let sortArr = [];
      if (this.searchinput) {
        searchArr =
          "(" +
          this.searchinput
            .split(" ")
            .filter((item) => item)
            .map((i) => "(" + i + ")")
            .join("|") +
          ")";
        let reg = new RegExp(searchArr);
        // 另建地址不会影响到this.store    检索的关键就是正则为((关键词1）|（关键词2))以及每次都用原始数据去做检索
        // 正则test方法，g全局匹配之后，可能会出现两次结果不一样的情况，去掉g或者是表达式设置lastindex为0。或者检索的时候表达式不加g，高亮的时候表达式加g
        arr = JSON.parse(
          JSON.stringify(
            store.filter((item) => {
              let testResult = reg.test(item.text);
              // reg.lastIndex=0
              return testResult;
            })
          )
        );
        // 没有另建地址会影响到this.store
        // this.store.map((item) => {
        //   if (reg.test(item.text)) {
        //     arr.push(item);
        //   }
        // });
        reg = new RegExp(searchArr, "gi");
        arr.map((item) => {
          item.text = item.text.replace(
            reg,
            '<span style="color:red">$&</span>'
          );
        });
      }
      if (this.value1 !== "" || this.value2 !== "") {
        sortArr = this.searchinput ? arr : store;
        if (this.value1 == 1) {
          newArr = sortArr.filter((item) => {
            return item.new == true;
          });
        } else if (this.value1 == 2) {
          newArr = sortArr.filter((item) => {
            return item.discount == true;
          });
        } else {
          newArr = sortArr;
        }
        if (this.value2 != "a") {
          let sortproxy = this.value2 == "b" ? "godd" : "sales";
          this.order(newArr, sortproxy);
        }
        return newArr;
      } else {
        sortArr = this.searchinput ? arr : store;
        return sortArr;
      }
    },
  },
};
</script>

<style lang="less" scoped>
#search {
  height: 100%;
  padding: 10px 10px;
  #main {
    height: 142%;
    .body {
      .history {
        background: white;
        overflow: hidden;
        .historySearch {
          height: 62px;
          overflow: hidden;
          position: relative;
          span {
            display: inline-block;
            background: WhiteSmoke;
            color: Gray;
            margin: 2px 5px;
            padding: 5px 5px;
            font-size: 12px;
            border-radius: 10px;
          }
          .showButton {
            position: absolute;
            right: 0;
            bottom: 0;
            border: 1px solid DarkGray;
            border-radius: 50%;
            padding: 3px 4px;
            i {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
      .search {
        background: white;
        overflow: hidden;
        .searchFind {
          height: 62px;
          overflow: hidden;
          position: relative;
          span {
            display: inline-block;
            background: WhiteSmoke;
            color: Gray;
            margin: 2px 5px;
            padding: 5px 5px;
            font-size: 12px;
            border-radius: 10px;
          }
        }
      }
    }
  }
}
</style>