<template>
  <div id="home">
    <div id="main">
      <div class="head">
        <div class="nav">
          <div class="navText">
            <img src="@/assets/home/hb.png" />
            <span class>签到</span>
          </div>
          <span style="font-size:16px;font-weight:700;color:white">推荐</span>
          <div class="navText" style="width:60px">
            <img src="@/assets/home/hb.png" />
            <span >会员码</span>
          </div>
        </div>
        <div class="searchBox">
          <i class="iconfont icon-saomiaoshibie" style="color:Orange"></i>
          <span style="border:1px solid	Gainsboro;  height: 22px; margin-top: 1px;"></span>
          <input type="text" placeholder="请输入搜索关键词" />
          <i class="iconfont icon-zhaopian"></i>
          <button>搜索</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
#home {
  height: 100%;
  #main {
    .head {
      width: 100%;
      background: rgb(190, 74, 74);
      padding:5% 5% 1% 5%; 
      .nav {
        width: 90%;
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
        width: 89%;
        padding: 2px 2px;
        margin:6px 0;
        border: 2px solid DarkOrange;
        border-radius: 22px;
        display: flex;
        background: white;
        input {
          border: none;
          width: 54%;
          margin-left: 4px;
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
  }
}
</style>
