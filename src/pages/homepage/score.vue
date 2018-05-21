<template>
  <div class="score-pages">
    <div class="score-contant">
      <div class="score-result">{{score}}</div>
      <div class="score-tips">{{scoreTipsArr[score/20-1]}}</div>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import {mapState} from 'vuex'
  export default{
    name:'score',
    data(){
      return {
        score:0,
        scoreTips:'',
        rightAnswer:[2,7,12,13,18],
        scoreTipsArr:['哎，奈何小学老师死得早~','将就着吧~','别嘚瑟，也就这样~','智商差点超群','oh my god, 你真聪明']
      }
    },
    computed:mapState(['answerid']),
    created(){
      console.log(this.answerid);
      this.computedScore();
    },
    methods:{
      computedScore(){
        this.answerid.forEach((item,index)=>{
          if(item== this.rightAnswer[index]){
            this.score+=20;
          }
        })
      },
    }
  }
</script>
<style lang="less" scoped>
  .score-pages{
    width:100%;
    height:100%;
    background:burlywood;
    background-size:cover;
    display: flex;
    align-items: center;
    justify-content: center;
    .score-result{
      width: 100px;
      height:100px;
      border-radius:50%;
      color:red;
      font-size: 30px;
      background:#fff;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .score-tips{
      font-size: 20px;
      color:blue;
      text-align: center;
      margin-top:20px;
    }
    .score-contant{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
</style>
