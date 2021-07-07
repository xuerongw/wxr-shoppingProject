<template>
  <div id="footnav">
    <van-icon
      :name="this.$route.path == '/' ? 'wap-home' : 'wap-home-o'"
      size="30"
      @click="goToMy('/')"
    />
    <van-icon
      :name="this.$route.path == '/message' ? 'chat' : 'chat-o'"
      badge="9"
      size="30"
      @click="goToMy('/message')"
    />

    <van-icon
      :name="this.$route.path == '/cart' ? 'cart' : 'cart-o'"
      size="30"
      @click="goToMy('/cart')"
    />
    <van-icon
      :name="this.$route.path == '/my' ? 'manager' : 'manager-o'"
      size="30"
      @click="goToMy('/my')"
    />
  </div>
</template>

<script>
export default {
  methods: {
    goToMy(arrive) {
      this.$router.push(arrive);
    },
  },
};
</script>

<style>
#footnav {
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  background-color: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>