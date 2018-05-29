<template>
  <div class="nav-bar">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <span :class="{'tab-actived':item.label==activeTab}"
              @click="navigate(item.label,item.val)">{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { mapState,mapActions } from 'vuex';

  export default{
      data(){
          return {
              list:[
                  {
                      label:'首页',
                      val:'/homepage'
                  },
                  {
                      label:'列表',
                      val:'/list'
                  },
                  {
                      label:'图片',
                      val:'/picture'
                  },
                  {
                      label:'更多',
                      val:'/more'
                  },
              ]
          }
      },
      mounted(){
          console.log(location.hash);
      },
      computed:{
          ...mapState([
              'activeTab'
          ]),

      },
      methods:{
          ...mapActions([
              'test'
          ]),
          navigate(label,url){
              this.test(label)
              this.$router.push(url)
          }
      }
  }
</script>
<style lang="less">
  .nav-bar{
    width: 100%;
    height:100%;
    background:#fff;
    position: relative;
    ul{
      width: 100%;
      height: 100%;
      overflow: hidden;
      padding:0;
      margin:0;
      li{
        float: left;
        width: 25%;
        height:100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        span{
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height:100%;
          font-size: 30px;
        }
      }
    }
    &:before{
      display: block;
      content: '';
      width: 100%;
      position: absolute;
      top:0;
      left: 0;
      border-top:1px solid #e8e8e8;
    }
  }
  .tab-actived{
    background:#F2F9EB;
  }
</style>
