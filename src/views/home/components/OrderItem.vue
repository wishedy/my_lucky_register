<template>
    <section class="jd_order_item" @click="goToDetail">
        <figure class="logo" :style="{background:`url('${config.primaryPicUrl}') no-repeat center/cover`}"></figure>
        <h1 class="title" v-text="config.name">测试标题测试标题测试标题测试标题测试标题</h1>
        <h1 class="price">￥{{config.counterPrice}}</h1>
    </section>
</template>
<script>
export default {
  name: 'orderItem',
  props: {
    config: {
      default () {
        return {}
      },
      type: Object
    }
  },
  methods: {
    goToDetail () {
      const _this = this
      _this.$router.push({
        path: 'commodity',
        query: {
          id: _this.config.id
        }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
    .jd_order_item{
        height: 500px;
        border-radius: 11px;
        margin-top: 21px;
        margin-right: 20px;
        background: #fff;
        width:339px;
        &:nth-of-type(2n){
            margin-right: 0;
        }
        .logo{
            width:339px;
            height:339px;
            border-radius:11px 11px 0px 0px;
        }
        .price,.title{
            width:315px;
            min-height:28px;
            height: auto;
            font-size:30px;
            font-family:SourceHanSansCN;
            font-weight:400;
            text-align: center;
            color:rgba(51,51,51,1);
            line-height:45px;
            margin-top: 6px;
        }
        .price{
            font-size:32px;
            font-family:SourceHanSansCN;
            font-weight:bold;
            color:rgba(227,28,121,1);
            line-height:32px;
            text-align: left;
        }
    }
</style>
