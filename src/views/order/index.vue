<template>
  <div class="order">
    <van-nav-bar title="我的订单" left-text="返回" @click-left="back" left-arrow/>
    <div class="taps">仅显示掌盟内的购买订单</div>
    <div class="list">
      <div class="list-item" v-for="(item,index) in list" @click="toDetail(item,index)">
        <div class="top">
          <div class="time">{{item.time}}</div>
          <div class="status" :class="{'status1':item.status===0,'status2':item.status===1,'status3':item.status===2}" >{{item.status===0?'已取消':item.status===1?'待支付':item.status===2?'已完成':''}}</div>
        </div>
        <div class="bottom">
          <img :src="item.img">
          <div class="name">{{item.text}}</div>
          <div class="money">{{item.money}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        list:[
          {
            time:'2019-11-29 16:46:22',
            status:0,
            img:'https://game.gtimg.cn/images/daoju/app/lol/big/2-412014-9.jpg?_t=1574670714',
            text:'未来战士 锤石',
            money:'￥79.00'
          },
          {
            time:'2019-11-29 16:46:22',
            status:2,
            img:'https://game.gtimg.cn/images/daoju/app/lol/big/2-235001-.jpg?_t=1573194190',
            text:'真实伤害 赛娜',
            money:'￥76.63'
          },
          {
            time:'2019-11-29 16:46:22',
            status:2,
            img:'https://game.gtimg.cn/images/daoju/app/lol/big/2-246002-.jpg?_t=1573194368',
            text:'真实伤害 琪亚娜',
            money:'￥76.63'
          },
          {
            time:'2019-11-29 16:46:22',
            status:1,
            img:'https://game.gtimg.cn/images/daoju/app/lol/big/2-84015-.jpg?_t=1573194137',
            text:'真实伤害 阿卡丽',
            money:'￥76.63'
          },
          {
            time:'2019-11-29 16:46:22',
            status:1,
            img:'https://game.gtimg.cn/images/daoju/app/lol/big/2-84015-.jpg?_t=1573194137',
            text:'真实伤害 阿卡丽',
            money:'￥76.63'
          },
        ]
    };
  },


  methods: {
    back() {
      this.$router.push({
        path:'my/center'
      })
    },
    toDetail(item,index){
      this.$store.state.order = item
      console.log('当前订单',this.$store.state.order)
      this.$router.push({
        path:'/detail'
      })
    }
  }
};
</script>

<style lang="less" scoped>
  @import "./index";
</style>


