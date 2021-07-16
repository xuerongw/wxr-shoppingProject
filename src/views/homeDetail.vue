<template>
  <div class="homeDetail">
    <div class="main">
      <div class="header">
        <i
          class="iconfont icon-fanhui"
          style="font-size: 18px"
          @click="goBack"
        ></i>
        <i class="iconfont icon-shenglvehao">
        </i>
      </div>
      <div class="firstCard">
        <img :src="firstCard.image" alt="" class />
      </div>
    </div>
  </div>
</template>

<script>
import { homeDate } from "@/store/homeDate.js";

export default {
  created() {
    this.firstCard = JSON.parse(
      JSON.stringify(homeDate[this.$route.query.index])
    );
    this.firstCard.image = require("@/" + this.firstCard.image);
  },
  data() {
    return {
      firstCard: {},
    };
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less">
.main {
  .header {

  }
  .firstCard {
    width: 80%;
    height: 70%;
    img {
      width: 100%;
      height: 76%;
    }
  }
}
</style>