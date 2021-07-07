 <template>
  <div id="cart">
    <div id="nav">
      <span style="font-size: 20px; font-weight: 700">购物车</span>
      <span style="font-size: 16px">({{ newList.length }})</span>
      <span style="margin-left: 64%"  v-if="!manager" @click="managers">管理</span>
      <span style="margin-left: 64%;border：1px soild white"  v-if="manager" @click="managers">管理</span>
      <div id="main">
        <div class="everyshop" v-for="(item, index) in newList" :key="index">  
          <van-checkbox  v-model="item.checked" style="margin-left:14px"  :name="index">{{
            item.text
          }}</van-checkbox>
        </div>
      </div>
    </div>
    <div class="footer">
      <van-checkbox v-model="checkedAll" style="display:inline-flex;width:64px;font-size:14px" @click="chooseAll">全选</van-checkbox>
      <span class="total" v-if="!manager">合计</span>
      <van-button type="warning" class="account" v-if="!manager">结算</van-button>
      <span v-if="manager" class="deldete" >删除</span>
    </div>
  </div>
</template>

<script>
import { store } from "../storedata.js";
export default {
  data() {
    return {
      newList: [],
      checkedAll: false,
      manager:false
    };
  },
  mounted() {
    this.newList = [...store];
    this.newList.map(item=>{
      this.$set(item, 'checked', false);//直接赋值就不能双向绑定
    })
  },
  methods: {
    chooseAll(){
       this.newList.map(item=>{
         item.checked=this.checkedAll
      })
    },
    managers(){
     this.manager=!this.manager
    }
  }
};
</script>

<style lang="less" scoped>
#cart {
  width: 100%;
  height: 98%;
  background-color: WhiteSmoke;
  position: relative;
  #nav {
    width: 100%;
    height: 22%;
    background-image: linear-gradient(Tomato, white);
    color: white;
  }
  #main {
    position: absolute;
    width: 98%;
    left: 1%;
    top: 20%;
    background-color: WhiteSmoke;
    .everyshop {
      width: 100%;
      height: 100px;
      border-radius: 20px;
      background-color: white;
      margin-bottom: 10px;
      padding-top:5px;
    }
  }
  .footer {
    position: fixed;
    bottom: 46px;
    width:100%;
    height:30px;
    padding:8px 6px;
    background-color: white;
    .total{
      font-size:16px;
      margin-left:54%;
      vertical-align: middle;
    }
    .account{
      height:36px;
      border-radius: 10px;
      padding:0 10px;
      margin-left:5px;
    }
    .deldete{
      font-size:16px;
      margin-left:68%;
    }
  }
}
</style>