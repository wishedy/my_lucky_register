<template>
    <transition name="confirm-fade">
    <div class="jd_main"  v-show="shareVisible">
        <section class="jd_register">
            <i class="closeIcon"></i>
            <h1 class="title">请输入手机号</h1>
            <figure class="jd_input_bar">
                <span class="jd_phone_label">+86</span>
                <span class="phone_input">
                    <input type="text" placeholder="请输入手机号码" v-model="form.username">
                </span>
            </figure>
            <figure class="jd_input_bar">
                <span class="code_input">
                    <input type="text" placeholder="请输入验证码" v-model="form.validCode">
                </span>
                <span class="jd_code_label" :class="{active:phoneRight}" @click="getCode">{{codeDes}}</span>
            </figure>
            <figure class="agreement">
                <span class="label"></span>
                我已阅读并同意<a href="javascript:;">《用户协议》</a>和<a href="javascript:;">《隐私政策》</a>
            </figure>
            <section class="submit" :class="{active:right}" @click="submitInfo">登录</section>
        </section>
    </div>
    </transition>
</template>
<script>
import { setHttpAuth } from '@/resource/create-api'

import { testPhoneNum } from 'libs/regularTest.js'
import { isInvalidString } from 'libs/utils.js'
import { mapActions,mapGetters } from 'vuex'
import { sendCode, userLogin } from '@/resource'
export default {
  name: 'register',
  data () {
    return {
      form: {
        username: '',
        validCode: ''
      },
      time: 60,
      residueNum:5,
      shareVisible: false,
      outerData: null
    }
  },
  watch: {
    onCoding (n) {
      const _this = this
      if (n) {
        const timer = setInterval(() => {
          _this.time > 0 ? _this.time-- : clearInterval(timer)
        }, 1000)
      }
    },
    code (n) {
      const _this = this
      _this.changeCodeNum(n)
    },
    time (n) {
      const _this = this
      if (parseInt(n, 10) === 0) {
        _this.changeCodeState(false)
        _this.time = 60
      }
    }
  },
  computed: {
    ...mapGetters(['token','onCoding']),
    right () {
      const _this = this
      const phoneOnOff = testPhoneNum(_this.form.username)
      const codeOnOff = !isInvalidString(_this.form.validCode)
      return phoneOnOff && codeOnOff
    },
    codeDes () {
      const _this = this
      if (_this.onCoding) {
        return _this.time + '秒'
      } else {
        if (_this.residueNum === 5) {
          return '获取验证码'
        } else {
          return '重新获取'
        }
      }
    },
    residueNumDes () {
      const _this = this
      return '今日还剩' + _this.residueNum + '次'
    },
    phoneRight () {
      const _this = this
      const phoneOnOff = testPhoneNum(_this.form.username)
      return phoneOnOff
    }
  },
  mounted(){
    const _this = this
    if(_this.token){
      _this.$nextTick(()=>{
        setHttpAuth(_this.token)
        _this.success&&_this.success()
      })
    }else{
      _this.shareVisible = true
    }
  },
  methods: {
    ...mapActions(['saveToken','setPhoneNum','changeCodeNum','changeCodeState']),
    async submitInfo () {
      const _this = this
      try {
        const res = await userLogin(_this.form)
        if (res) {
          setHttpAuth(res.accessToken)
          _this.saveToken(res.accessToken)
          _this.success && _this.success(res)
        }
      } catch (e) {
        _this.Toast(e.message || '登录失败')
        _this.fail && _this.fail(e)

      }
      //_this.$emit('userBehavior', 'clickConfirm', _this.outerData)
      _this.hidden()
    },
    async getCode () {
      const _this = this
      if (parseInt(_this.residueNum, 10) > 0) {
        if ((!isInvalidString(_this.form.username)) && testPhoneNum(_this.form.username)) {
          _this.changeCodeState(true)
          try {
            const param = {
              codeType: 1,
              mobile: _this.form.username
            }
            const res = await sendCode(param)
            if (res) {
              console.log(res)
            }
          } catch (e) {
            _this.Toast(e.msg || '获取验证码失败')
          }
        } else {
          if (!isInvalidString(_this.form.username)) {
            _this.Toast('请输入您的手机号')
          } else {
            _this.Toast('请输入正确的手机号')
          }
        }
      } else {
        _this.Toast('对不起，今日验证码次数已用完')
      }
    },
    show () {
      this.shareVisible = true
    },
    hidden () {
      this.shareVisible = false
    }
  }
}
</script>
<style lang="scss" scoped>
    /* 进入和出去的动画 */
    .confirm-fade-enter-active {
        animation: opacity 0.3s;
    }
    .confirm-fade-enter-active .confirm-content-wrap {
        animation: scale 0.3s;
    }
    .confirm-fade-leave-active {
        animation: outOpacity 0.2s;
    }
    .jd_main{
        width: 100vw;
        height: 100vh;
        background: rgba(0,0,0,.5);
        position: absolute;
        top:0;
        left: 0;
        right: 0;
        z-index: 1;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .jd_register{
            width: 618px;
            height: 570px;
            background: #FFFFFF;
            border-radius: 20px;
            position: relative;
            .closeIcon{
                position: absolute;
                width: 28px;
                height: 28px;
                top:28px;
                right: 41px;
                background: url('~img/shopping/cc-close.png') no-repeat center/cover;

            }
            .title{
                width: 209px;
                height: 122px;
                margin: 0 auto;
                font-size: 34px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #000000;
                line-height: 122px;
                padding-top: 7px;
                text-align: center;
            }
            .jd_input_bar{
                width: 520px;
                height: 88px;
                border-radius: 44px;
                border: 1px solid #CCCCCC;
                margin: 0 auto 32px auto;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                .jd_phone_label{
                    width: 103px;
                    height: 46px;
                    line-height: 46px;
                    font-size: 32px;
                    text-align: center;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #000000;
                    border-right:1px solid #E7E7E7;
                }
                .jd_code_label{
                    width: 180px;
                    height: 46px;
                    line-height: 46px;
                    font-size: 32px;
                    text-align: center;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #ddd;
                    border-left:1px solid #E7E7E7;
                    &.active{
                        color: rgb(18, 201, 138);
                    }
                }
                .phone_input{
                    width: 415px;
                    height: 100%;
                    line-height: 88px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    input{
                        outline: none;
                        border: none;
                        line-height: 88px;
                        font-size: 32px;
                        background: none;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #333;
                        &::-webkit-input-placeholder { /* WebKit browsers */
                            line-height: 88px;
                            font-size: 32px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #DDDDDD;
                        }
                        &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                            line-height: 88px;
                            font-size: 32px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #DDDDDD;
                        }
                        &::-moz-placeholder { /* Mozilla Firefox 19+ */
                            line-height: 88px;
                            font-size: 32px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #DDDDDD;
                        }
                        &:-ms-input-placeholder { /* Internet Explorer 10+ */
                            line-height: 88px;
                            font-size: 32px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #DDDDDD;
                        }
                    }

                }
                .code_input{
                    width: 335px;
                    height: 100%;
                    line-height: 88px;
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                    input{
                        width: 60%;
                        outline: none;
                        border: none;
                        line-height: 88px;
                        font-size: 32px;
                        background: none;

                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #333;
                        &::-webkit-input-placeholder { /* WebKit browsers */
                            line-height: 88px;
                            font-size: 32px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #DDDDDD;
                        }
                        &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
                            line-height: 88px;
                            font-size: 32px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #DDDDDD;
                        }
                        &::-moz-placeholder { /* Mozilla Firefox 19+ */
                            line-height: 88px;
                            font-size: 32px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #DDDDDD;
                        }
                        &:-ms-input-placeholder { /* Internet Explorer 10+ */
                            line-height: 88px;
                            font-size: 32px;
                            font-family: PingFangSC-Regular, PingFang SC;
                            font-weight: 400;
                            color: #DDDDDD;
                        }
                    }

                }
            }
            .agreement{
                width: 100%;
                height: 24px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;

                font-size: 24px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #A3A3A3;
                margin-bottom: 35px;
                line-height: 24px;
                .label{
                    width: 24px;
                    height: 24px;
                    margin-right: 9px;
                    background: url('~img/shopping/selected.png') no-repeat center/cover;
                }
                a{
                    color:rgb(18, 201, 138);
                }
            }
            .submit{
                width: 362px;
                height: 88px;
                background: #E8E8E8;
                border-radius: 44px;

                font-size: 32px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #AAAAAA;
                line-height: 88px;
                text-align: center;
                margin: 0 auto;
                &.active{
                    color: #FFFFFF;
                    background: rgb(18, 201, 138);
                }
            }
        }
    }
</style>
