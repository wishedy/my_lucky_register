<template>
    <section class="jd-header">
        <span class="jd-header-item return-back" :class="{show:back}" @click.stop="returnBack">
            <i></i>
        </span>
        <span class="jd-header-item" v-text="title"></span>
        <span class="jd-header-item" v-text="subTitle" @click.stop="subTitleEvent"></span>
    </section>
</template>
<script>
// 推荐有奖页使用的头部组件
export default {
  props: {
    title: {
      default () {
        return ''
      },
      type: String
    },
    back: {
      default () {
        return false
      },
      type: Boolean
    },
    subTitle: {
      default () {
        return ''
      },
      type: String
    }
  },
  methods: {
    returnBack () {
      const _this = this
      _this.$emit('returnOriginal')
      _this.$router.back(-1)
    },
    subTitleEvent () {
      const _this = this
      _this.$emit('handleEvent')
    }
  }
}
</script>
<style lang="scss" scoped>
    .jd-header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 88px;
        padding: 0 33px 0 18px;
        background:linear-gradient(90deg,rgba(51,218,138,1),rgba(18,201,138,1));
        .jd-header-item{
            flex: 1;
            font-size:36px;
            font-family:PingFangSC-Regular,PingFang SC;
            font-weight:400;
            color:rgba(255,255,255,1);
            letter-spacing:1px;
            &.return-back{
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                visibility: hidden;
                &.show{
                    visibility: unset;
                }
                i{
                    width: 24px;
                    height: 40px;
                    background: url('~img/headerBar/back.png') no-repeat center/cover;
                }
            }
            &:nth-of-type(3){
                text-align: right;
                font-size: 30px;
            }
            &:nth-of-type(1){
                text-align: left;
            }
            &:nth-of-type(2){
                text-align: center;
                font-size: 36px;
            }
        }
    }
</style>
