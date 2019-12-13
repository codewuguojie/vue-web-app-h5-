<template>
  <div class="center">
    <div class="content">
      <div class="header">
        <div class="info">
          <div class="set">
            <div class="set-box" @click="toSet()">
              <van-icon name="setting" />
            </div>
          </div>
          <div class="user-info">
            <div class="user-img">
              <img src="../../../assets/img/user.jpg">
            </div>
            <div class="user-info-msg">
              <span class="user-name">自导自演</span>
              <span class="level">Lv1</span>
              <span class="sex">男</span>
            </div>
          </div>
          <div class="bottom">
            <div class="info-item" v-for="(item,index) in info" @click="toItem(item,index)">
              <div class="number">{{item.number}}</div>
              <div class="text">{{item.text}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="form">
        <div class="form-item" @click="toActive()">
          <van-cell title="活动中心" icon="shop-collect-o" is-link></van-cell>
        </div>
        <div class="form-item"  @click="toOrder()">
          <van-cell title="我的订单" icon="bill-o" is-link></van-cell>
        </div>
        <div class="form-item">
          <van-cell title="我的任务" icon="notes-o" is-link></van-cell>
        </div>
        <div class="form-item" @click="toCollect()">
          <van-cell title="我的收藏" icon="star-o" is-link></van-cell>
        </div>
      </div>
      <Footer page="my" />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
import { mapGetters } from "vuex";
export default {
  components: {
    Footer
  },
  data(){
    return{
      info:[
        {
          text:'关注',
          number:3
        },{
          text:'粉丝',
          number:3
        },{
          text:'好友',
          number:5
        },{
          text:'发表',
          number:5
        },
      ]
    }
  },
  methods:{
    toItem(item,index){
      console.log('当前',item,index)
      if(index===0){
        this.$router.push({
          path:'/attention',
          query:{
            num:item.number
          }
        })
      } else if(index===1){
        this.$router.push({
          path:'/fans',
          query:{
            num:item.number
          }
        })
      } else if(index===2){
        this.$router.push({
          path:'/friends',
          query:{
            num:item.number
          }
        })
      } else if(index===3){
        this.$router.push({
          path:'/announce',
          query:{
            num:item.number
          }
        })
      }
    },
    toActive(){
      this.$router.push({
        path:'/activity/activiting'
      })
    },
    toCollect(){
      this.$router.push({
        path:'/collect'
      })
    },
    toOrder(){
      this.$router.push({
        path:'/order'
      })
    },
    toSet(){
      this.$router.push({
        path:'set'
      })
    }
  },

  computed: {
    ...mapGetters(["username", "isLogin"])
  }
};
</script>

<style lang="less" scoped>
@import "./center.less";
</style>
