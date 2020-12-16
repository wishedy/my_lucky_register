<template>
    <section class="jd_tab_out">
        <section class="jd_tab">
            <section class="jd_tab_wrapper">
                <span class="tab-item" v-for="(item,index) in tabData" v-text="item.name" :class="{active:index===tabIndex}"  :key="item.id" @click="changeTab(index)"></span>
            </section>
        </section>
    </section>
</template>
<script>
import $ from 'jquery'
export default {
  name: 'tab',
  props: {
    tabData: {
      default () {
        return []
      },
      type: Array
    }
  },
  data () {
    return {
      tabIndex: 0
    }
  },
  mounted () {
    const _this = this
    _this.calculateWidth()
  },
  watch: {
    tabIndex (n) {
      const _this = this
      _this.$emit('handleTabChange', _this.tabData[n])
    }
  },
  methods: {
    calculateWidth () {
      const elementList = document.getElementsByClassName('tab-item')
      let widthNum = 0
      for (let num = 0; num < elementList.length; num++) {
        const item = elementList[num]
        console.log(item.offsetWidth)
        widthNum += item.offsetWidth
      }
      const wrapperElement = document.getElementsByClassName('jd_tab_wrapper')
      wrapperElement[0].style.width = widthNum + 50 + 'px'
      console.log(widthNum)
    },
    changeTab (index) {
      const _this = this
      const elementList = document.getElementsByClassName('tab-item')
      const aim = elementList[index].offsetLeft + elementList[index].offsetWidth / 2
      $('.jd_tab').animate({
        scrollLeft: aim - document.documentElement.clientWidth / 2
      }, 500)
      if (_this.tabIndex !== index) {
        _this.tabIndex = index
      }
    }
  }
}
</script>
<style lang="scss" scoped>
    .jd_tab_out{
        width: 100%;
        height: 80px;
        overflow-y:hidden ;
        .jd_tab{
            height: 100px;
            width: 100%;
            display: flex;
            background: #fff;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            border-bottom: 1px solid #e5e5e5;
            white-space: nowrap;
            flex-wrap: nowrap;
            overflow-x: scroll;
            overflow-y:hidden ;
            .jd_tab_wrapper{
                width: 1000px;
                height: 100px;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                border-bottom: 1px solid #e5e5e5;
                white-space: nowrap;
                flex-wrap: nowrap;
                margin-top: -20px;
                .tab-item{
                    width: auto;
                    font-size:32px;
                    font-family:SourceHanSansCN;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height:100px;
                    margin: 0 10px;
                    &.active{
                        font-size:34px;
                        font-family:PangMenZhengDao;
                        font-weight:400;
                        color:rgba(51,51,51,1);
                        position: relative;
                        &::after{
                            content: " ";
                            position: absolute;
                            width: 102%;
                            left: 50%;
                            transform: translateX(-50%);
                            bottom:-14px;
                            height: 8px;
                            background: #12C98A;
                        }
                    }
                }
            }
        }
    }
</style>
