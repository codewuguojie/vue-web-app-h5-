<template>
  <div class="index">
    <div class="content">
        <div class="nav">
          <router-link :to="item.link" class="nav-item" active-class="active" :key="index" v-for="(item,index) in navList" @click="navChange(item,index)">{{item.name}}</router-link>
        </div>
        <router-view></router-view>
      </div>
    <Footer page="index"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  data() {
    return {
      list: [],
      navList:[
        {
          id:0,
          name:'推荐',
          link:'/index/recommend'
        },
        {
          id:1,
          name:'云顶',
          link:'/index/yunding'
        },
        {
          id:2,
          name:'赛事',
          link:'/index/competition'
        },
        {
          id:3,
          name:'攻略',
          link:'/index/strategy'
        },
        {
          id:4,
          name:'活动',
          link:'/index/event'
        }
      ]
    };
  },
  created() {

  },
  components: {
    Footer
  },
  methods: {

  }
};
</script>

<style scoped lang="less">
@import "./index";
</style>
