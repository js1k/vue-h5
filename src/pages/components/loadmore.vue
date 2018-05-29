<template>
  <div>
    <scroller ref="scroller"
              :height="height"
              :pulldown-config="pulldownConfig"
              :pullup-config="pullupConfig"
              lock-x
              scrollbar-y
              use-pulldown
              use-pullup
              @on-pulldown-loading="refresh"
              @on-pullup-loading="loadMore">
      <div>
        <slot />
        <divider v-show="isNoMore"
                 style="padding:60px 120px;">我是有底线的</divider>
      </div>
    </scroller>
  </div>
</template>
<script>
  import { Scroller, Divider } from 'vux'
  export default {
    components: {
      Scroller,
      Divider
    },
    props: {
      height: {
        type: String,
        default: () => {
          return ''
        }
      },
      condition: {
        type: Object,
        default: () => {
          return {
            pageNum: 1,
            pageSize: 10
          }
        }
      }
    },
    data() {
      return {
        pullupConfig: {
          content: '',
          downContent: '',
          upContent: '',
          loadingContent: '更多内容加载中...'
        },
        pulldownConfig: {
          content: '',
          downContent: '↓',
          upContent: '松开更新...',
          loadingContent: '正在更新...'
        },
        isNoMore: false
      }
    },
    methods: {
      refresh() {
        setTimeout(() => {
          this.$set(this.condition, 'pageNum', 1)
          this.$emit('on-pulldown-loading', this.condition)
          this.$nextTick(() => {
            setTimeout(() => {
              this.$refs.scroller.donePulldown()
              this.$refs.scroller.enablePullup()
              this.isNoMore = false
            }, 10)
          })
        }, 1000)
      },
      loadMore() {
        this.$set(this.condition, 'pageNum', this.condition.pageNum + 1)
        this.$emit('on-pullup-loading', this.condition)
      },
      setNoMoreState(value) {
        if (value === true) this.$refs.scroller.disablePullup()
        this.$set(this, 'isNoMore', value)
      }
    }
  }
</script>

<style lang="less">
  .xs-plugin-pulldown-loading,
  .xs-plugin-pulldown-down,
  .xs-plugin-pulldown-up,
  .xs-plugin-pullup-loading,
  .xs-plugin-pullup-down,
  .xs-plugin-pullup-up {
    font-size: 28px;
  }

  .xs-plugin-pullup-container.xs-plugin-pullup-default {
    display: none;
  }
</style>

