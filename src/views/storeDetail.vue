<template>
  <div id="store">
    <p>{{ storedata.text }}</p>
    <p>
      <van-icon
        name="good-job"
        color="#ee0a24"
        v-if="storedata.godd > 100"
      />  <span>好评{{ storedata.godd }}</span>   
    </p>
  </div>
</template>
<script>
import { store } from "../storedata.js";
export default {
  created() {
    store.map((item) => {
      if (item.text == this.$route.query.id) {
        this.storedata = item;
      }
    });
  },
  data() {
    return {
      storedata: {},
    };
  },
};
</script>
