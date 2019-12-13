<template>
  <header class="login">
    <!--<van-icon name="point-gift-o" class="orange mt-30 logo"></van-icon>-->
    <div class="logo">
      <img src="../../assets/img/logo-2.png">
    </div>
    <div class="username">
      <van-cell-group>
        <van-field
                v-model="username"
                required
                clearable
                label="用户名"
                placeholder="请输入用户名"
                @click-right-icon="$toast('question')"
        />
      </van-cell-group>
    </div>
    <div class="password">
      <van-cell-group>
        <van-field
                v-model="password"
                type="password"
                label="密码"
                placeholder="请输入密码"
                required
        />
      </van-cell-group>
    </div>
    <div class="taps">
      <span class="forget" @click="toReset()">忘记密码？</span>
      <span class="register" @click="toRegister()">注册账号</span>
    </div>
    <!-- 登录 -->
    <button @click="login" class="butt ml-20 mr-20 fff">登录</button>
  </header>
</template>

<script>
import { constants } from "crypto";
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    login() {
      // 发送请求,用post方式
      let url = "/login";
      // 请求参数
      let data = {
        phone: this.phone,
        smsCode: this.smsCode
      };
      this.$axios.post(url, data).then(res => {
        // 修改登陆状态
        this.$store.commit("updateLogin", true);
        // 把token存入store
        this.$store.commit("updateToken", res.user.token);
        // 把用户名存入store
        this.$store.commit("updateUsername", res.user.phone);
        this.$router.push("/my");
      }).catch(err=> {
        console.log('登陆失败')
      });
    },
    toReset(){
      this.$router.push({
        path:'/reset'
      })
    },
    toRegister(){
      this.$router.push({
        path:'/register'
      })
    }
  }
};
</script>

<style lang="less" scoped>
@import "./login.less";
</style>

