<template>
  <div class="nav-bar">
    <ul>
      <li >
        <span>首页</span>
      </li>
      <li>
        <span>列表</span>
      </li>
      <li>
        <span>图片</span>
      </li>
      <li>
        <span>更多</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default{
      data(){
          return {

          }
      }
  }
</script>
<style lang="less" scoped="">
  .nav-bar{
    width: 100%;
    height:100%;
    background:#fff;
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
  }
</style>
