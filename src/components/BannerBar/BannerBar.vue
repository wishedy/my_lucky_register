<template>
    <section class="jd_banner" v-if="bannerList.length">
        <div class="swiper-container jd_banner_container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in bannerList" :style="{background:`url('${item.bannerCover}') no-repeat center/cover`}" @click.stop="goDetail(item)" :key="index"></div>
            </div>
        </div>
    </section>
</template>
<script>
import { testLink } from '@/libs/regularTest'

import Swiper from 'swiper'
export default {
  props: {
    bannerList: {
      default () {
        return []
      },
      type: Array
    }
  },
  name: 'banner',
  mounted () {
    const _this = this
    _this.initSwiper()
  },
  methods: {
    goDetail (item) {
      const _this = this
      if (item.bannerLink) {
        if (!testLink(item.bannerLink)) {
          _this.$router.push({
            path: 'search',
            query: {
              title: item.bannerName
            }
          })
        } else {
          location.href = item.bannerLink
        }
      }
    },
    initSwiper () {
      /*eslint-disable*/
      const _this = this
      setTimeout(()=>{
        _this.$nextTick(()=>{
          new Swiper('.jd_banner_container', {
            autoplay: {
              delay: 2000
            }
          })
        })
      },1000)
    }
  }
}
</script>
<style lang="scss" scoped>
    .jd_banner{
        width:698px;
        height:297px;
        background: #fff;
        border-radius:16px;
        padding: 10px 26px 30px 26px;
        box-sizing: unset;
        margin-top: -250px;
        overflow: hidden;
        z-index: 3;
        .swiper-container{
            width: 100%;
            height: 100%;
            //background: aqua;
            border-radius:16px;
            box-shadow:0px 6px 16px rgba(51, 51, 51, 0.59);
        }
    }
</style>
