<template>
  <div class="friends">
    <div class="content">
      <div class="one">
        <div class="title">正在热议</div>
        <div class="icon"><van-icon name="arrow" /></div>
      </div>
      <div class="topic">
        <div class="theme">斗图·“有年份”的表情包</div>
        <div class="status">活动进行中</div>
        <div class="num">157人已参与</div>
      </div>
      <div class="discuss">
        <div class="theme">
          <span class="icon">#</span>
          <span class="word">重装战士即将登场</span>
        </div>
        <div class="theme">
          <span class="icon">#</span>
          <span class="word">新系列三国皮肤</span>
        </div>
        <div class="theme">
          <span class="icon">#</span>
          <span class="word">英雄比惨神对话</span>
        </div>
        <div class="theme">
          <span class="icon">#</span>
          <span class="word">查看更多话题</span>
        </div>
      </div>
      <div class="sort">
        <div class="sort-list">
          <div class="sort-item" v-for="(item,index) in topicList">
            <div class="sort-img">
              <img :src="item.img">
            </div>
            <div class="sort-word">
              <div class="sort-text">{{item.title}}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="one">
        <div class="title">热议英雄</div>
        <div class="icon"><van-icon name="arrow" /></div>
      </div>
      <div class="hero">
        <div class="hero-list">
          <div class="hero-item" v-for="(item,index) in heroList">
            <div class="hero-left">
              <img :src="item.img">
            </div>
            <div class="hero-right">
              <div class="name">{{item.name}}</div>
              <div class="num"><span>最近玩</span>{{item.num}}帖子</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer page="cart"></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  components: {
    Footer
  },
  data(){
    return{
      topicList:[
        {
          img:'https://f10.baidu.com/it/u=944039706,1872953177&fm=72',
          title:'英雄攻略',
        },
        {
          img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3796485731,2998155301&fm=26&gp=0.jpg',
          title:'大区talk',
        },
        {
          img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1477955406,3342861453&fm=26&gp=0.jpg',
          title:'萌次元',
        },
        {
          img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1315471897,2928740506&fm=26&gp=0.jpg',
          title:'俱乐部',
        },
        {
          img:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2466359779,1810925603&fm=26&gp=0.jpg',
          title:'全部分类',
        }
      ],
      heroList:[
        {
          img:'//game.gtimg.cn/images/lol/act/img/champion/Mordekaiser.png',
          name:'莫德凯撒',
          num:3
        },
        {
          img:'//game.gtimg.cn/images/lol/act/img/champion/Qiyana.png',
          name:'奇亚娜',
          num:10
        },
        {
          img:'//game.gtimg.cn/images/lol/act/img/champion/Nautilus.png',
          name:'深海泰坦',
          num:19
        },
        {
          img:'//game.gtimg.cn/images/lol/act/img/champion/Varus.png',
          name:'韦鲁斯',
          num:7
        },
      ]
    }
  }
};
</script>

<style scoped lang="less">
@import "./index";
</style>
