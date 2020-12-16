<template>
    <section class="jd_SpecialOffer">
        <h1 class="title">
            <span class="icon"></span>
            <span class="recommend">今日推荐</span>
        </h1>
        <section class="order-list">
            <section class="order-item" v-for="(item,index) in recommendList" :key="index" @click.stop="goDetail(item)">
                <figure class="logo" :style="{background:`url('${item.recommendCover}') no-repeat center/cover`}"></figure>
                <h2 class="order-title" v-text="item.recommendName">
                    测试标题测试标题测
                </h2>
            </section>
            <!--<section class="order-item">
                <figure class="logo" style="background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595586434305&di=117447f4f41cc5ba95d0c5fb3babbfe2&imgtype=0&src=http%3A%2F%2Fpic.jjkk.org%2Fuploads%2Fuserup%2Fjyimg%2F7ed603fe08a485df.jpg') no-repeat center/cover"></figure>
                <h2 class="order-title">
                    测试标题测试标题测
                </h2>
            </section>
            <section class="order-item">
                <figure class="logo" style="background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595586434305&di=117447f4f41cc5ba95d0c5fb3babbfe2&imgtype=0&src=http%3A%2F%2Fpic.jjkk.org%2Fuploads%2Fuserup%2Fjyimg%2F7ed603fe08a485df.jpg') no-repeat center/cover"></figure>
                <h2 class="order-title">
                    测试标题测试标题测
                </h2>
            </section>
            <section class="order-item">
                <figure class="logo" style="background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595586434305&di=117447f4f41cc5ba95d0c5fb3babbfe2&imgtype=0&src=http%3A%2F%2Fpic.jjkk.org%2Fuploads%2Fuserup%2Fjyimg%2F7ed603fe08a485df.jpg') no-repeat center/cover"></figure>
                <h2 class="order-title">
                    测试标题测试标题测
                </h2>
            </section>-->
        </section>
    </section>
</template>
<script>
import { testLink } from '@/libs/regularTest'

export default {
  props: {
    recommendList: {
      default () {
        return []
      },
      type: Array
    }
  },
  methods: {
    goDetail (item) {
      const _this = this
      if (!testLink(item.recommendLink)) {
        location.href = item.recommendLink
      } else {
        _this.$router.push({
          path: 'search',
          query: {
            title: item.recommendName
          }
        })
      }
    }
  },
  name: 'SpecialOffer'
}
</script>
<style lang="scss" scoped>
    .jd_SpecialOffer{
        width: 100%;
        height:347px;
        background: #fff;
        .title{
            height: 78px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            margin-bottom: 19px;
            .icon{
                margin-left: 28px;
                width: 31px;
                height: 33px;
                margin-right: 20px;
                background: url("~img/recommend/praise.png") no-repeat center/cover;
            }
            .recommend{
                font-size:32px;
                font-family:SourceHanSansCN;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height:32px;
            }
        }
        .order-list{
            width: 100%;
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            .order-item{
                width: 159px;
                margin-left: 19px;
                .logo{
                    width: 159px;
                    height: 159px;
                    margin-bottom: 19px;
                }
                .order-title{
                    font-size:24px;
                    font-family:PingFang;
                    font-weight:500;
                    line-height: 32px;
                    color:rgba(51,51,51,1);
                }
                &:nth-of-type(1){
                    margin-left: 30px;
                }
            }
        }
    }
</style>
