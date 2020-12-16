<template>
    <section class="entrance-module jd_entrance_container">
        <div class="swiper-container swiper-entrance">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <Entrance :entranceData="entranceList"></Entrance>
                </div>
                <div class="swiper-slide">
                    <Entrance></Entrance>
                </div>
                <div class="swiper-slide">
                    <Entrance></Entrance>
                </div>
            </div>
            <div class="swiper-pagination entrance-pagination"></div><!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
        </div>
    </section>
</template>
<script>
import Entrance from 'components/Entrance/Entrance'
import Swiper from 'swiper'

export default {
  name: 'entranceModule',
  props: {
    entranceList: {
      default () {
        return []
      },
      type: Array
    }
  },
  components: {
    Entrance
  },
  methods: {
    initSwiper () {
      /*eslint-disable*/
      const _this = this
      _this.$nextTick(()=>{
        new Swiper('.swiper-entrance', {
          autoplay:false,
          pagination: {
            el: '.swiper-pagination',
          },
        })
      })
    }
  },
  mounted(){
    const _this = this
    _this.initSwiper()
  }
}
</script>
<style lang="scss" scoped>
    .jd_entrance_container{
        margin: 0 auto;
        padding: 20px 0;
        height: 382px;
        width: 100%;
        background: #fff;
    }
</style>
<style lang="scss">
    .jd_entrance_container{
        .swiper-entrance{
            .entrance-pagination {
                .swiper-pagination-bullet{
                    width:36px;
                    height:8px;
                    margin: 0;
                    border-radius:4px;
                    background:#ccc;
                    &-active {
                        background: #333;
                        background:rgba(20,17,23,1);
                    }
                }
            }
        }
    }
</style>
