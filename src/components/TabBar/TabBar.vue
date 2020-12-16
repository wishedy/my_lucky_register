<template>
    <section class="jd_tab" v-if="showTabbar">
        <router-link class="jd_tab_item" tag="section" to="home" active-class="active" >
            <div class="icon index"></div>
            <div class="title">首页</div>
        </router-link>
        <router-link class="jd_tab_item" tag="section" to="classify" active-class="active" >
            <div class="icon more"></div>
            <div class="title">分类</div>
        </router-link>
        <router-link class="jd_tab_item" tag="section" to="recommend" active-class="active" >
            <div class="icon discover"></div>
            <div class="title">发现</div>
        </router-link>
        <router-link class="jd_tab_item" tag="section" to="shopping" active-class="active" >
            <div class="icon shop"></div>
            <div class="title">购物车</div>
        </router-link>
        <router-link class="jd_tab_item" tag="section" to="personal" active-class="active" >
        <div class="icon me"></div>
            <div class="title">我的</div>
        </router-link>
    </section>
</template>
<script>
export default {
  name: 'tab',
  computed: {
    showTabbar () {
      const path = ['/home', '/recommend', '/personal', '/classify', '/shopping']
      if (path.includes(this.$route.path) || this.$route.path.indexOf('/publicClassroom') >= 0) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    .jd_tab{
        width: 100vw;
        height:99px;
        box-shadow:0px -1px 1px 0px rgba(204,204,204,0.5);
        display: flex;
        flex-direction: row;
        align-items: center;
        position: fixed;
        bottom:0;
        left: 0;
        right: 0;
        background: #fff;
        justify-content: space-around;
            .jd_tab_item{
                width: 120px;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            .icon{
                margin-bottom: 7px;
                &.index{
                    width: 51px;
                    height: 45px;
                    background: url("~img/tab/home.png") center/cover;
                }
                &.me{
                    width: 51px;
                    height: 45px;
                    background: url("~img/tab/personal.png") center/cover;
                }
                &.recommend{
                    width: 51px;
                    height: 45px;
                    background: url("~img/tab/recommend.png") center/cover;
                }
                &.discover{
                    width: 51px;
                    height: 45px;
                    background: url("~img/tab/discover.png") center/cover;
                }
                &.poster{
                    width: 45px;
                    height: 45px;
                    background: url("~img/tab/poster.png") center/cover;
                }
                &.shop{
                    width: 45px;
                    height: 45px;
                    background: url("~img/tab/shop.png") center/cover;
                }
                &.more{
                    width: 45px;
                    height: 45px;
                    background: url("~img/tab/more-default.png") center/cover;
                }
            }
            .title{
                text-align: center;
                height:20px;
                font-size:20px;
                font-family:SourceHanSansCN;
                font-weight:bold;
                color:rgba(153,153,153,1);
            }
                &.active{
                    .icon{
                        &.index{
                            width: 51px;
                            height: 45px;
                            background: url("~img/tab/home-active.png") center/cover;
                        }
                        &.me{
                            width: 51px;
                            height: 45px;
                            background: url("~img/tab/personal-active.png") center/cover;
                        }
                        &.recommend{
                            width: 51px;
                            height: 45px;
                            background: url("~img/tab/recommend-active.png") center/cover;
                        }
                        &.shop{
                            width: 51px;
                            height: 45px;
                            background: url("~img/tab/shop-active.png") center/cover;
                        }
                        &.poster{
                            width: 45px;
                            height: 45px;
                            background: url("~img/tab/poster-active.png") center/cover;
                        }
                        &.discover{
                            width: 45px;
                            height: 45px;
                            background: url("~img/tab/discover-active.png") center/cover;
                        }
                        &.more{
                            width: 45px;
                            height: 45px;
                            background: url("~img/tab/More.png") center/cover;
                        }
                    }
                    .title{
                        color:#12C98A;
                    }
                }
        }
    }
</style>
