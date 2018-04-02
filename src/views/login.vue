<template>
  <div class='page-login'>
    <div class='login-header'>
      <div class="login-container">
        <div class='fn-left'>
          <h1><!-- <img src='~/assets/images/logo-b.png' class='logo-icon mr-20' /> -->
          云点通信管理系统</h1>
        </div>
        <div class='fn-right'>
          客服热线:400-111-1212 
        </div>
      </div>
    </div>
    <div class='login-main'>
      <div class="login-container">
        <div class='login-banner'>
          <div class='clearfix' style='padding-left:80px;'>
            <div class="fn-left" style='margin-left:-80px;padding-top:10px;'>
              <i style='font-size:50px;' class="iconfont icon-process"></i>
            </div>
            <div>
              <p style='font-size:18px;line-height:60px;'>云产品新购特惠</p>
              <p style='font-size:14px;line-height:30px;'>购买坐席低至10元一席</p>
              <p style='font-size:14px;line-height:30px;'>购满3年送1年</p>
              <p style='font-size:14px;line-height:30px;'>五折语音外呼产品</p>
              <div class="mt-20">
                <a class="btn btn-ghost" style='padding:10px 70px;'>了解产品</a>
              </div>
              <div class="mt-20">
                关注云点公众号
              </div>
              <div>
                <img style='border:1px solid #eee;padding:10px;width:70px;' src='https://qr.api.cli.im/qr?data=%25E4%25BD%25A0%25E5%25A5%25BD&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=280&kid=cliim&key=0e1e36d594069025eba2e3d89619f431'>
              </div>
            </div>
          </div>
          
        </div>
        <div class='login-box'>
          <div class='login-box-padd'>
            <h1 class='login-box-title'>用户登录</h1>
            <el-form ref="form" :model="form">
              <el-form-item>
                <el-input v-model="form.user_name" auto-complete="false" size="medium" placeholder="企业ID"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input v-model="form.user_name" auto-complete="false" size="medium" placeholder="用户ID"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input type='password' auto-complete="false" size="medium" v-model="form.password" placeholder="密码"></el-input>
              </el-form-item>
              <el-form-item>
                <el-input style='width:120px;' v-model="form.code" size="medium" placeholder="验证码"></el-input>
                <img class="v-center" src='http://iph.href.lu/100x34'>
              </el-form-item>
              <!-- <el-form-item>
                <el-checkbox label="记住密码" v-model='remember'></el-checkbox>
              </el-form-item> -->
              <el-form-item>
                <el-button type="primary" style='width:100%;' size="medium" @click="onSubmit">登 录</el-button>
              </el-form-item>
              <div>
                还没有账号？立即<a class="a-link">申请试用</a>
              </div>
            </el-form>
          </div>
        </div>
      </div>
    </div>
    <div class='login-footer'>
      <div class="login-container">
        <p v-html='copyright'></p>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
// const { copyright } = require("~/config/config.json");
export default {
  data() {
    return {
      copyright:
        "Copyright © 2018 Yundian Inc. All Rights Reserved. 云点科技 版权所有",
      remember: false,
      form: {
        user_name: "",
        password: ""
      }
    };
  },
  methods: {
    onSubmit(){
      this.$router.push('./center/index');
    }
  },
  mounted() {}
};
</script>


