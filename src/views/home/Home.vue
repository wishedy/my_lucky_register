<template>
    <section class="lucky_main">
        <section class="lucky_form">
          <h1 class="lucky_title">欢迎注册</h1>
          <h1 class="lucky_sub_title">从此刻开始，为自己奋斗</h1>
          <el-form ref="form" :model="form" label-width="80px" :rules="rules">
            <el-form-item label="姓名" class="form-item" prop="realName">
              <el-input v-model="form.realName"></el-input>
            </el-form-item>
            <el-form-item label="手机号" class="form-item" prop="phoneNum">
              <el-input v-model="form.phoneNum"></el-input>
            </el-form-item>
            <el-form-item label="邮箱" class="form-item" prop="email">
              <el-input v-model="form.email"></el-input>
            </el-form-item>
            <el-form-item label="身份证号" class="form-item" prop="identityNum">
              <el-input v-model="form.identityNum"></el-input>
            </el-form-item>
            <el-form-item label="密码" class="form-item" prop="oriPassWord">
              <el-input v-model="form.oriPassWord" type="password"></el-input>
            </el-form-item>
            <el-form-item class="form-item submit-button">
              <el-button type="primary" class="save-button" @click="submit">立即创建</el-button>
            </el-form-item>
          </el-form>
        </section>
    </section>
</template>
<script>
import md5 from 'blueimp-md5'
import { register } from 'api'
export default {
  name: 'home',
  methods: {
    submit () {
      const _this = this
      _this.$refs.form.validate(async valid => {
        _this.form.passWord = md5(_this.form.oriPassWord)
        try {
          if (valid) {
            await register(_this.form)
          }
        } catch (e) {
          this.$message.error(e.message || '注册失败')
        }
      })
    }
  },
  data () {
    const checkPhone = async (rule, value, callback) => {
      if (!/^[1][3,4,5,7,8,9][0-9]{9}$/.test(value)) {
        return callback(new Error('请输入正确的手机号'))
      } else {
        return callback()
      }
    }
    const checkPassword = async (rule, value, callback) => {
      if (!/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(value)) {
        return callback(new Error('请输入最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符'))
      } else {
        return callback()
      }
    }
    const checkId = async (rule, value, callback) => {
      if (!/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
        return callback(new Error('请输入正确的身份证号'))
      } else {
        return callback()
      }
    }
    const checkEmail = async (rule, value, callback) => {
      if (!/^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/.test(value)) {
        return callback(new Error('请输入正确的手机号'))
      } else {
        return callback()
      }
    }
    return {
      rules: {
        realName: {
          required: true,
          message: '请输入您的姓名',
          trigger: 'blur'
        },
        oriPassWord: [{
          required: true,
          message: '请输入最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符',
          trigger: 'blur'
        }, {
          validator: checkPassword,
          trigger: 'blur'
        }],
        identityNum: [{
          required: true,
          message: '请输入您的身份证号',
          trigger: 'blur'
        }, {
          validator: checkId,
          trigger: 'blur'
        }],
        email: [{
          required: true,
          message: '请输入您的电子信箱地址',
          trigger: 'blur'
        }, {
          validator: checkEmail,
          trigger: 'blur'
        }],
        phoneNum: [{
          validator: checkPhone,
          trigger: 'blur'
        }, {
          required: true,
          message: '请输入您的手机号',
          trigger: 'blur'
        }]
      },
      form: {
        realName: '', // 管理员姓名
        email: '', // 管理员邮箱
        phoneNum: '', // 管理员电话号
        identityNum: '', // 管理员身份证号
        oriPassWord: '', // 管理员身份证号
        passWord: '' //
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.lucky_main{
  .lucky_title{
    font-size: 36px;
    color: #000;
    padding-bottom: 12px;
  }
  .lucky_sub_title{
    font-size:14px;
    color: #9B9B9B;
    padding-bottom: 60px;
    font-weight: normal;
  }
.lucky_form{
  position: absolute;
  right: 139px;
  top: 50%;
  margin-top: -340px;
  width: 480px;
  padding: 40px 40px 40px 30px;
  height: 600px;
  *background: #fff;
  background: #fff\9;
  background: rgba(255,255,255,.9);
  border-radius: 12px;
  border-radius: 12px;
  overflow: hidden;
  .form-item{
    margin-bottom: 30px;
  }
  .submit-button{
    margin-top: 43px;
    .save-button{
      background: #3f89ec;
      border-radius: 25px;
      width: 399px;
      display: block;
      height: 50px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      color: #fff;
      border: none;
      outline: none;
      margin-left: -60px;
    }
  }
}
}
</style>
