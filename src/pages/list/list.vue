<template>
  <div class="list-pages">
    <navHeader :title="list"></navHeader>
    <div class="list-content">
      <ul>
        <li class="list-user"
            v-for="(item,index) in listData"
            :key="index">
          <div class="list-user-img">
            <img v-lazy="item.pic">
          </div>
          <div class="list-user-info">
            <p class="list-title">{{ item.title }}</p>
            <p class="list-author">{{ item.authorName }}</p>
            <p class="list-date">{{ item.date }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { XHeader } from 'vux'
import Vue from 'vue'
import navHeader from '../components/nav-header.vue'
import defaultIcon from '../../assets/images/timg4.jpeg'

export default {
    components:{
        XHeader,
        navHeader
    },
    data(){
        return {
          list:'title',
          listData:[],
          defaultIcon
        }
    },
    mounted(){
        this.$axios.post('/api/list').then(res=>{
            console.log(res);
            if (res.status==200){
                this.listData=res.data.articles;
            }
            console.log(this.listData,122222);
        }).catch(res=>{

        })
    }
}
</script>
<style lang="less">
  .list-pages{
    width: 100%;
    .list-content{
      padding:0 20px;
      ul{
        list-style:none;
        li{
          list-style: none;
          position: relative;
          align-items: center;
          padding:30px 0;
          display: flex;
          .list-user-img{
            img{
              width: 100px;
              height: 100px;
              border-radius: 50%;
            }
          }
          .list-user-info{
            display: flex;
            flex-direction: column;
            overflow: hidden;
            margin-left:20px;
            p{
              font-size: 25px;
              display: inline-block;
            }
            .list-title{
              line-height: 40px;
              margin-bottom:15px;
            }
            .list-author{
              margin-bottom:15px;
            }
          }
          &:after{
            display: block;
            content: '';
            width: 100%;
            border-top:2px solid #e8e8e8;
            position: absolute;
            bottom: 0;
            left:0;
          }
        }
      }
    }
  }
</style>
