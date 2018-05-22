<template>
  <div class="nav-bar">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <span @click="navigate(item.val)">{{ item.label }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  import Vue from 'vue'
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
    methods:{
      navigate(param){
          this.$router.push(param)
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
</style>
