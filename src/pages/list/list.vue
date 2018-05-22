<template>
  <div class="list-pages">
    <navHeader :title="list"></navHeader>
    <div class="list-content">

    </div>
  </div>
</template>
<script>
import { XHeader } from 'vux'
import Vue from 'vue'
import navHeader from '../components/nav-header.vue'

export default {
    components:{
        XHeader,
        navHeader
    },
    data(){
          return {
            list:'title'
          }
    }
}
</script>
<style lang="less">
  .list-pages{
    width: 100%;
  }
</style>
