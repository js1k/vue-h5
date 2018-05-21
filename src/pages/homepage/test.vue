<template>
  <div class="test-pages">
    <div class="item-container">
      <div v-if="itemDetail.length>0"
           class="question-title">{{itemDetail[itemNum-1].topic_name}}</div>
      <ul>
        <li v-for="(item,index) in itemDetail[itemNum-1].topic_answer"
            :key="index"
            class="question-clumn"
            :class="choosedId===item.topic_answer_id?'choosed-class':''"
            @click="choseAnswer(index,item.topic_answer_id)">
          <span class="question-clumn-label">{{answerTable(index)}}</span>
          <span>{{item.answer_name}}</span>
        </li>
      </ul>
    </div>
    <div class="item-next"
         v-if="itemNum<itemDetail.length"
         @click="nextItem">
      <span>下一题</span>
    </div>
    <div class="item-next"
         v-else
         @click="submitAnswer">
      <span>提交</span>
    </div>
  </div>
</template>
<script>
  import { mapState, mapActions } from "vuex";
  export default {
    name: "test",
    data() {
      return {
        itemId: null,
        choosedNum: null,
        choosedId: null
      };
    },
    computed: mapState([
      'itemNum', //第几题
      'level', //第几周
      'itemDetail', //题目详情
      'timer', //计时器
    ]),
    mounted(){
    },
    created() {
      // this.get();
      // console.log(this.$route.params.id);
    },
    methods: {
      ...mapActions([
        'addNum','initializeData'
      ]),
      nextItem(){
        if(this.choosedNum !== null){
          this.choosedNum =null;
          this.addNum(this.choosedId)
        }else{
          alert('您还没有选择答案~')
        }
      },
      answerTable(val){
        switch(val){
          case 0:
            return 'A'
          case 1:
            return 'B'
          case 2:
            return 'C'
          case 3:
            return 'D'
        }
      },
      choseAnswer(index,answerId){
        this.choosedNum=index;
        this.choosedId=answerId
      },
      submitAnswer(){
        if(this.choosedNum!==null){
          this.addNum(this.choosedId)
          clearInterval();
          this.$router.push('score')
        }else{
          alert('您还没有选择答案哦~')
        }
      }
    }
  };
</script>
<style lang="less" scoped>
  .test-pages {
    width: 100%;
    height: 100%;
    background: gray;
    background-size: cover;
    .question-title{
      color:#fff;
      font-size: 30px;
      margin-bottom: 30px;
    }
    .question-clumn{
      color:#fff;
      width: 300px;
      font-size: 26px;
      margin-bottom:20px;
      display: flex;
      align-items: center;
      padding: 10px;
      border-radius: 30px;
      .question-clumn-label{
        display: flex;
        width: 35px;
        height: 35px;
        align-items: center;
        justify-content: center;
        border: 2px solid #fff;
        border-radius: 50%;
        margin-right: 8px;
        font-size: 26px;
      }
    }
    .choosed-class{
      color: chocolate;
      background:yellow;
      .question-clumn-label{
        border-color:chocolate;
      }
    }
    .item-next{
      text-align: center;
      margin-top:50px;
      span{
        font-size: 30px;
        color:red;
        background:lawngreen;
        padding: 10px 20px;
        border-radius: 8px;
      }
    }
    .item-container{
      padding-top:50px;
      padding-left:30px;
      box-sizing: border-box
    }
  }
</style>
