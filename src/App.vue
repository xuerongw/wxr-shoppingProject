<template>
<div id="app">
  <router-view></router-view>
  <footnav class="footnav"></footnav>
  </div>
</template>
<script>
import footnav from './components/footnav'
export default {
  components:{
    footnav
  }
}
</script>
<style scoped lang="less">

#app{
  width:100%;
  height:100%;
  .footnav{
    position: fixed;
    bottom: 0;
  }
}
</style>