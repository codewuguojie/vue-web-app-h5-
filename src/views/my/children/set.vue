<template>
  <div class="page">
    <van-nav-bar title="设置" left-text="返回" left-arrow @click-left="back"></van-nav-bar>

    <van-cell-group class="mt-10">
      <van-cell isLink title="绑定大区" :value="daqu" @click="toDaQu()"></van-cell>
      <van-cell isLink title="绑定手机号码" :value="phone"></van-cell>
    </van-cell-group>

    <van-cell-group class="mt-10">
      <van-cell isLink title="消息推送" @click="toMessage()"></van-cell>
      <van-cell isLink title="省流量" :value="liuLiang" @click="showPicker=true"></van-cell>
      <van-cell isLink title="隐私设置" @click="toPrivacy()"></van-cell>
    </van-cell-group>

    <van-cell-group class="mt-10">
      <van-cell isLink title="意见反馈" value="反馈QQ群" @click="toOperate()"></van-cell>
    </van-cell-group>

    <!-- 退出登录 -->
    <div class="logout f16 flex fcc bg-fff fixed w100pc" @click="logout">
      <p class="blue">退出登录</p>
    </div>

    <van-popup v-model="showPicker" position="bottom">
      <van-picker
              show-toolbar
              :columns="columns"
              @cancel="showPicker = false"
              @confirm="onConfirm"
      />
    </van-popup>

  </div>
</template>

<script>
  import Vue from 'vue';
  import { Picker } from 'vant';

  Vue.use(Picker);
export default {
  data(){
    return{
      daqu:this.$route.query.areaName?this.$route.query.areaName:'扭曲丛林',
      phone:'18217736624',
      showPicker: false,
      liuLiang:'资讯图片自动下载设置',
      columns: ['所有网络', '仅wifi', '关闭图片自动下载']
    }
  },
  methods: {
    toDaQu(){
      this.$router.push({
          path:'/area'
      })
    },
    toMessage(){
      this.$router.push({
        path:'/messageSet'
      })
    },
    toPrivacy(){
      this.$router.push({
        path:'/privacy'
      })
    },
    toOperate(){
      this.$router.push({
        path:'/operate'
      })
    },
    back() {
      this.$router.push({
        path:'center'
      })
    },
    onConfirm(value) {
      this.liuLiang = value;
      this.showPicker = false;
    },
    async logout() {
      let url = "/logout";
      let res = await this.$axios.post(url);
      // 修改登陆状态
      this.$store.commit("updateLogin", false);
      // 把用户名置空
      this.$store.commit("updateUsername", "");
      // 清除token
      this.$store.commit("updateToken", "");
      this.$router.push("/my");
    }
  }
};
</script>

<style lang="less" scoped>
.logout {
  bottom: 0;
  height: 50px;
  color: #ff5f16;
}
</style>

