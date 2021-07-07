<template>
  <div id="search">  
    <div id="main" @touchstart="start" @touchmove="end">
      <van-search v-model="searchinput" placeholder="请输入搜索关键词" />
      <van-dropdown-menu v-if="showfilter">
        <van-dropdown-item v-model="value1" :options="option1" title="筛选" />
        <van-dropdown-item v-model="value2" :options="option2" title="排序" />
      </van-dropdown-menu>
      <van-pull-refresh v-model="isLoading"> </van-pull-refresh>
      <div v-for="(item, index) in newstore" :key="index" @click="goToDetail(item)">
        <p v-html="item.text">商品名称：</p>
        <p class="good">
          <span>好评：</span>
          <span v-html="item.godd"></span>
          <span>销量：</span>
          <span v-html="item.sales"></span>
        </p>
      </div>
      <van-empty description="暂无商品" v-if="newstore.length == 0" />
    </div>

  </div>
</template>
<script>
import { store } from "../storedata.js";

export default {
  data() {
    return {
      startX: "",
      startY: "",
      moveX: "",
      moveY: "",
      value1: "",
      value2: "",
      isLoading: false,
      showfilter: false,
      searchinput: "",
      option1: [
        { text: "全部商品", value: 0 },
        { text: "新款商品", value: 1 },
        { text: "活动商品", value: 2 },
      ],
      option2: [
        { text: "默认排序", value: "a" },
        { text: "好评排序", value: "b" },
        { text: "销量排序", value: "c" },
      ],
    };
  },
  methods: {
    start(e) {
      this.startY = e.changedTouches[0].pageY;
    },
    end(e) {
      // 搞个防抖优化
      let moveY = 0;
      setTimeout(() => {
        moveY = e.changedTouches[0].pageY - this.startY;
        if (10 < moveY && moveY > 50) {
          this.showfilter = false;
          this.onRefresh();
        } else {
          this.showfilter = true;
        }
      }, 1000);
    },
    onRefresh() {
      this.$toast("刷新成功");
      this.isLoading = false;
    },
    order(array, rule) {
      return array.sort((a, b) => {
        return a[rule] - b[rule];
      });
    },
    goToDetail(item) {
      this.$router.push({path:'/storeDetail',query:{id:item.text}})
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
        // 另建地址不会影响到this.store 检索的关键就是正则为（（关键词1）|（关键词2））以及每次都用原始数据去做检索
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
  #main {
    height: 142%;
    .good {
      margin-left: 60%;
      color: gray;
      font-size: 14px;
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>