<template>
  <div class="blacklist-pages">
    <div v-if="blackData.length>0"
         class="blacklist-content-page">
      <qxm-loadmore ref="loadmore"
                    :condition="condition"
                    @on-pulldown-loading="pulldown"
                    @on-pullup-loading="loadMore">
        <ul>
          <li v-for="(item,index) in blackData"
              :key="index">
            <div class="list-header-img">
              <img v-lazy="pickImg(item.avatar)"
                   @click="goUserDetails(item.userId)">
            </div>
            <div class="list-info">
              <div class="list-user-name">{{ item.nickName }}</div>
              <div class="list-user-level">
                <img :src="sexCheck(item.sex)">
                <span class="level-info level-live">{{ item.liveUserLevel }}</span>
                <span class="level-info level-user">{{ item.level }}</span>
              </div>
            </div>
            <div class="blacklist-remove"
                 @click="removeBlacklist(index,item.id,item.blackUserId)">移除</div>
          </li>
        </ul>
      </qxm-loadmore>
    </div>
    <div v-if="blackData.length==0"
         class="blacklist-none-pages">
      <img src="../../assets/images/img_bear_empty@2x.png">
      <p class="none-list">您还没有拉黑他人</p>
      <p class="black-tips">被你拉黑的人，将无法向你发送私信</p>
    </div>
  </div>
</template>
<script>
  import Vue from 'vue'
  import { ToastPlugin } from 'vux'
  import defaultHeaderIcon from '../../assets/images/timg.jpeg'
  Vue.use(ToastPlugin, { position: 'middle', type: 'text', width: '6rem' })
  import girlImg from '../../assets/images/icon_girl@2x.png'
  import boyImg from '../../assets/images/icon_boy@2x.png'
  import QxmLoadmore from '../components/loadmore.vue'

  export default {
    components:{
      QxmLoadmore,
    },
    data() {
      return {
        condition:{
          pageNum: 1,
          pageSize: 10,
        },
        defaultHeaderIcon,
        girlImg,
        boyImg,
        blackData:[],
        token:'',
        userId:''
      }
    },
    mounted(){
      this.getBlockList(this.condition).then(res=>{
        this.blackData=this.blackData.concat(res.list)
      });
    },
    methods:{
      removeBlacklist(index,id, blackUserId){
        Vue.axios.defaults.headers['Content-Type'] = 'application/json';
        //Vue.axios.defaults.headers['token']=this.token;
        //Vue.axios.defaults.headers['userId']=this.userId;
        Vue.axios.defaults.headers['token']='e2f6690b53eb1066ee897d6f1a53d336';
        Vue.axios.defaults.headers['userId']='75';
        Vue.axios.post('/user/unBlackList',{id:id,blackUserId:blackUserId}).then(res=>{
          this.$vux.toast.show({
            text:'删除成功'
          });
          this.blackData=this.blackData.slice(0,index).concat(this.blackData.slice(index+1));
        }).catch((res)=>{
          this.$vux.toast.show({
            text:'删除失败'
          })
        })
      },
      getBlockList(condition){
        return new Promise(resolve =>{
          Vue.axios.defaults.headers['token']='e2f6690b53eb1066ee897d6f1a53d336';
          Vue.axios.defaults.headers['userId']='75';
          //Vue.axios.defaults.headers['token']=this.token;
          //Vue.axios.defaults.headers['userId']=this.userId;
          Vue.axios.get(`/user/get_black_list?pageNum=${condition.pageNum}&pageSize=${condition.pageSize}`).then(res=>{
            resolve(res)
          }).catch(()=>{})
        })
      },
      pickImg(url){
        if(url&&url.indexOf('?')==0){
          return url+'?x-oss-process=image/resize,w_200,h_200/format,jpg';
        }else{
          return url || this.defaultHeaderIcon;
        }
      },
      sexCheck(sex){
        if(sex==0){
          return this.boyImg
        }else {
          return this.girlImg
        }
      },
      goUserDetails(userId) {
        global.qxmNative.gotoPersonalPage(userId)
      },
      loadMore(condition){
        this.getBlockList(condition).then(res=>{
          if(res.list.length < 10){
            this.$refs.loadmore.setNoMoreState(true)
          }
          this.blackData=this.blackData.concat(res.list)
          this.$nextTick(()=>{
            this.$refs.loadmore.$refs.scroller.donePullup()
          })
        })
      },
      pulldown(condition){
        this.getBlockList(condition).then(res=>{
          this.blackData=this.blackData.concat(res.list)
        })
      }
    }
  }
</script>
<style lang="less">
  .blacklist-pages{
    height:100%;
  }
  .blacklist-content-page{
    ul{
      padding:0 30px;
    }
    li{
      border-bottom: 1px solid #ececec;
      height:120px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .list-header-img{
        width: 80px;
        height: 80px;
        margin-right:14px;
        img{
          width: 100%;
          height:100%;
          border-radius: 50%;
        }
      }
      .list-info{
        flex-grow: 2;
        .list-user-name{
          font-size: 26px;
        }
        .list-user-level{
          display: flex;
          align-items: center;
          margin-top:12px;
          img{
            height: 28px;
            border-radius: 50%;
            margin-right:10px;
          }
          .level-info{
            display: flex;
            align-items: center;
            justify-content: flex-end;
            -webkit-text-size-adjust: auto;
            font-size: 26px;
            color:#fff;
            height:28px;
            padding:0 10px;
            min-width:62px;
          }
          .level-live{
            background:url('../../assets/images/icon_grade_red@2x.png') no-repeat;
            background-size: cover;
          }
          .level-user{
            margin-left:10px;
            background:url('../../assets/images/icon_grade_yellow@2x.png') no-repeat;
            background-size: cover;
          }
        }
      }
      .blacklist-remove{
        color: #ff3c28;
        height: 48px;
        width: 100px;
        border-radius: 30px;
        display: flex;
        font-size: 22px;
        align-items: center;
        justify-content: center;
        border:1px solid #ff3c28;
      }
    }
  }
  .blacklist-none-pages{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
    img{
      width: 356px;
      height: 208px;
      border-radius: 50%;
      margin-bottom:40px;
    }
    .none-list{
      font-size: 30px;
      color:#333;
      margin-bottom: 32px;
    }
    .black-tips{
      color:#999;
      font-size: 26px;
    }
  }
</style>
