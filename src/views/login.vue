<template>
  <div class="login">
    <div class="head" @click="goback">返回</div>
    <div class="main">
      <div class="form">
        <van-form @submit="onSubmit">
          <van-field v-model="username" name="用户名" label="用户名" placeholder="用户名" />
          <!-- :rules="[{ required: true, message: '请填写用户名' }]" -->
          <van-field v-model="password" type="password" name="密码" label="密码" placeholder="密码" />
          <!-- :rules="[{ required: true, message: '请填写密码' }]" -->
          <div style="margin: 16px;">
            <van-button round block type="info" native-type="submit">提交</van-button>
          </div>
        </van-form>
      </div>
    </div>

    <!-- <van-overlay :show="slideshow" @click="slideshow = false">
    <div class="slide" @click.stop>-->
    <slide-verify
      :l="42"
      :r="10"
      :w="310"
      :h="155"
      slider-text="向右滑动"
      @success="onSuccess"
      @fail="onFail"
      @refresh="onRefresh"
      v-show="slideshow"
    ></slide-verify>
    <!-- </div>
    -->
    <!-- </van-overlay> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      slideshow: false,
    };
  },
  methods: {
    goback() {
      this.$router.go(-1);
    },
    onSubmit(values) {
      this.slideshow = true;
      console.log("submit", values);
    },
    onSuccess() {
      this.$toast("验证成功");
    },
    onFail() {
      this.$toast("验证失败");
    },
    onRefresh() {
      this.$toast("刷新成功");
    },
  },
};
</script>

<style lang="less">
.login {
  width: 100%;
  height: 100%;
  .main {
    height: 80%;
    display: flex;
    align-items: center;
  
  }
  .slide {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>