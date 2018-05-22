<template>
  <div id="app" style="height:100%">
    <div class="app-content">
      <router-view/>
    </div>
    <div class="app-nav">
      <navBars></navBars>
    </div>
  </div>
</template>

<script>
import navBars from './pages/components/nav.vue'
import nav from './pages/components/nav.vue'

export default {
  name: 'App',
  components:{
    navBars
  },
  data(){
      return{

      }
  },
}
</script>

<style lang="less">
  #app{
    display: flex;
    flex-direction: column;
    align-items: center;
    .app-content{
      width: 100%;
      height: 300px;
      flex-grow: 1;
    }
    .app-nav{
      width: 100%;
      height: 100px;
    }
  }
</style>
