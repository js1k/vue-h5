<template>
  <div class="nav-header">
    <div class="nav-back">
      <i class="nav-back-snow"></i>
      <span class="nav-back-text">返回</span>
    </div>
    <div class="nav-title">{{title}}</div>
  </div>
</template>
<script>
  export default{
    props:{
      title:{
          type:String,
          default:''
      },
    },
      data(){
          return{

          }
      }
  }
</script>
<style lang="less">
  .nav-header{
    height:100px;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    &:after{
      display: block;
      content:'';
      width: 100%;
      position: absolute;
      bottom:0;
      left:0;
      border-top:1px solid #e8e8e8;
    }
    .nav-back{
      position: absolute;
      left:5px;
      .nav-back-snow{
        content: "";
        position: absolute;
        width: 20px;
        height: 20px;
        border: 1px solid #ccc;
        border-width: 1px 0 0 1px;
        -webkit-transform: rotate(315deg);
        transform: rotate(315deg);
        top: 8px;
        left: 7px;
      }
      .nav-back-text{
        margin-left:30px;
        font-size: 30px;
      }
    }
    .nav-title{
      font-size: 30px;
    }
  }
</style>
