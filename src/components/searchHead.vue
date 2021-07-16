 <template>
  <div class="searchHead">
    <i class="iconfont icon-fanhui" style="font-size:18px;" @click="goBack"></i>
    <div class="searchBox">
      <input type="text" ref="input" placeholder="请输入要搜索的内容"/>
      <i class="iconfont icon-zhaopian"></i>
    </div>
    <i class="iconfont icon-shenglvehao" style="font-size:2em;font-weight:700"></i>
  </div>
</template>

<script>
export default {
  methods:{
    goBack(){
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="less">
.searchHead {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .searchBox {
    display: inline-block;
    width: 78%;
    padding: 2px 8px;
    margin: 6px 0;
    border: 2px solid DarkOrange;
    border-radius: 22px;
    background: white;
    input {
      border: none;
      width: 60%;
      margin-left: 4px;
      margin-top:2px ;
    }
    ::-webkit-input-placeholder{
        font-size:14px;
        color:Silver;
    }
    i {
      color: DarkOrange;
      font-size: 20px;
      float: right;
    }
  }
}
</style>