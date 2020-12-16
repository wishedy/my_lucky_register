<template>
    <section class="jd_entrance">
        <section class="entrance-item" v-for="(item,index) in entranceData" :key="index" @click.stop="goDetail(item)">
            <figure class="icon">
                <i :style="{background:`url('${item.entranceCover}') no-repeat center/cover`}" ></i>
            </figure>
            <h1 class="title" v-text="item.entranceName"></h1>
        </section>
        <section class="entrance-item">
            <figure class="icon">
                <i></i>
            </figure>
            <h1 class="title">天麻</h1>
        </section>
        <section class="entrance-item">
            <figure class="icon">
                <i></i>
            </figure>
            <h1 class="title">人参</h1>
        </section>
        <section class="entrance-item">
            <figure class="icon">
                <i></i>
            </figure>
            <h1 class="title">人参</h1>
        </section>
        <section class="entrance-item">
            <figure class="icon">
                <i></i>
            </figure>
            <h1 class="title">天麻</h1>
        </section>
        <section class="entrance-item">
            <figure class="icon">
                <i></i>
            </figure>
            <h1 class="title">人参</h1>
        </section>
        <section class="entrance-item">
            <figure class="icon">
                <i></i>
            </figure>
            <h1 class="title">人参</h1>
        </section>
        <section class="entrance-item">
            <figure class="icon">
                <i></i>
            </figure>
            <h1 class="title">更多</h1>
        </section>
        <section class="entrance-item">
            <figure class="icon">
                <i></i>
            </figure>
            <h1 class="title">更多</h1>
        </section>
        <section class="entrance-item">
            <figure class="icon">
                <i></i>
            </figure>
            <h1 class="title">更多</h1>
        </section>
    </section>
</template>
<script>
import { testLink } from '@/libs/regularTest'

export default {
  props: {
    entranceData: {
      default () {
        return []
      },
      type: Array
    }
  },
  methods: {
    goDetail (item) {
      const _this = this
      if (!testLink(item.entranceLink)) {
        location.href = item.entranceLink
      } else {
        _this.$router.push({
          path: 'search',
          query: {
            title: item.entranceName
          }
        })
      }
    }
  },
  name: 'entrance'
}
</script>
<style lang="scss" scoped>
    .jd_entrance{
        min-height: 167px;
        height: auto;
       // width: 612px;
        background: #fff;
        display: flex;
        padding: 0 43px;
        box-sizing: unset;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-around;
        flex-wrap: wrap;
        .entrance-item{
            width: 91px;
            margin-bottom: 56px;
            margin-left: 20px;
            margin-right: 20px;
            .icon{
                //border-radius: 50%;
                width: 91px;
                border-radius:25px;
                height: 91px;
                margin-bottom: 19px;
                i{
                    border-radius:25px;
                    display: block;
                    width: 100%;
                    height: 100%;
                    background:linear-gradient(-45deg,rgba(246,72,59,1),rgba(255,133,120,1));
                }
            }
            .title{
                height:26px;
                font-size:28px;
                font-family:SourceHanSansCN;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height:32px;
                width: 100%;
                text-align: center;
            }
            &:nth-of-type(1){
                .icon{
                    background:linear-gradient(-45deg,rgba(241,221,80,1),rgba(255,160,37,1));
                    i{
                        background: url("~img/entrance/ginseng.png") no-repeat center/60% 60%;
                    }

                }
            }
            &:nth-of-type(2){
                .icon{
                    background:linear-gradient(-45deg,rgba(89,141,247,1),rgba(154,185,255,1));
                }
            }
            &:nth-of-type(3){
                .icon{
                    background:linear-gradient(-45deg,rgba(246,72,59,1),rgba(255,133,120,1));
                }
            }
            &:nth-of-type(4){
                .icon{
                    background:linear-gradient(-45deg,rgba(51,218,138,1),rgba(18,201,138,1));
                }
            }
            &:nth-of-type(5){
                .icon{
                    background:linear-gradient(-45deg,rgba(80,234,210,1),rgba(8,196,230,1));
                    i{
                        background: url("~img/entrance/more.png") no-repeat center/50% 50%;
                    }
                }
            }
        }
    }
</style>
