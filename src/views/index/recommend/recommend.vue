<template>
    <div class="recommend">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="swiper">
                <van-swipe :autoplay="3000" :height="150">
                    <van-swipe-item v-for="(image, index) in swiperList" :key="index" @click="toLink(image,index)">
                        <img v-lazy="image.img" />
                    </van-swipe-item>
                </van-swipe>
            </div>
            <div class="list">
                <div class="list-item" v-for="(item,index) in newsList" @click="toDetail(item,index)">
                    <div class="left">
                        <div class="top">
                            <div v-if="item.top===1" class="zhiding">置顶</div>
                            <div class="title">{{item.title}}</div>
                        </div>
                        <div class="bottom">英雄联盟官方 {{item.num}}评论</div>
                    </div>
                    <div class="right">
                        <img v-if="item.type===2" class="play" src="../../../assets/img/bofang.svg">
                        <img class="img" :src="item.img">
                    </div>
                </div>
            </div>
        </van-pull-refresh>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem, Lazyload, PullRefresh } from 'vant';

    Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(PullRefresh);
    export default {
        name: "recommend",
        data(){
            return{
                isLoading:false,
                swiperList:[
                    {
                        img:'//ossweb-img.qq.com/upload/adw/image/20191202/8bd456d23cbfaecec54e604dc4432c74.jpeg',
                        link:'https://lol.qq.com/act/a20191125preseason/index.html?e_code=497822&idataid=292432'
                    },
                    {
                        img:'//ossweb-img.qq.com/upload/adw/image/20191205/dbf77f60688a97e981e88170a6250be6.jpeg',
                        link:'https://lol.qq.com/act/a20191108champion/index.html?e_code=498201&idataid=292771&v=0'
                    },
                    {
                        img:'//ossweb-img.qq.com/upload/adw/image/20191126/8db79c73d28b468ea13c065973534c18.jpeg',
                        link:'https://lol.qq.com/act/a20191106truedamage/index.html?e_code=497154&idataid=284389'
                    },
                    {
                        img:'//ossweb-img.qq.com/upload/adw/image/20191205/6d6d9bc08d0cb99931ca942d0362b3c4.jpeg',
                        link:'https://lol.qq.com/act/a20191127aphelios/index.html?e_code=498278&idataid=292813'
                    },
                    {
                        img:'//ossweb-img.qq.com/upload/adw/image/20191203/e0d39dffd620edf01a416326834437f3.jpeg',
                        link:'https://101.qq.com/tft/index.shtml?e_code=498068&idataid=292586&ADTAG=cooperation.glzx.tft'
                    }
                ],
                newsList:[
                    {
                        top:1,
                        title:'12月6日晚8点明星嘉宾邀你《进击！季前赛》',
                        num:'1231',
                        img:'https://shp.qpic.cn/cfwebcap/0/26ee44ae40021ca266c350213f811698/0?width=600&height=372',
                        link:'https://qt.qq.com/php_cgi/news/php/varcache_mcnarticle.php?id=&doc_type=0&docid=8641130454121494583&areaid=20&version=$PROTO_VERSION$',
                        type:1
                    },
                    {
                        top:0,
                        title:'12月6日部分大区组队功能升级维护公告',
                        num:'554',
                        img:'https://dss0.baidu.com/73F1bjeh1BF3odCf/it/u=1775387721,2455395381&fm=85&s=56FC31C4001221D6C0A68C9303001089',
                        link:'https://qt.qq.com/php_cgi/news/php/varcache_mcnarticle.php?id=&doc_type=0&docid=415572738978039652&areaid=20&version=$PROTO_VERSION$',
                        type:1
                    },
                    {
                        top:0,
                        title:'赛季奖励发放完成公告',
                        num:'1231',
                        img:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2808275559,2147241995&fm=85&app=2&f=JPG?w=121&h=75&s=E694528DC61217D49E25799A03008080',
                        link:'https://qt.qq.com/php_cgi/news/php/varcache_mcnarticle.php?id=&doc_type=0&docid=10991887205405798013&areaid=20&version=$PROTO_VERSION$',
                        type:1
                    },
                    {
                        top:0,
                        title:'2020季前赛速看：元素崛起',
                        num:'123213',
                        img:'https://inews.gtimg.com/newsapp_bt/0/10582205902/1000',
                        link:'http://lol.qq.com/m/act/a20150319lolapp/exp_3.htm?iVideoId=9049262496127113093',
                        type:2
                    },
                    {
                        top:0,
                        title:'巴西女辅助成为“国民女神”，看到照片后，网友：我的青春结束了',
                        num:'1231',
                        img:'https://shp.qpic.cn/cfwebcap/0/9714290b52a170634e9549f15ceee457/0?width=800&height=600',
                        link:'https://qt.qq.com/php_cgi/news/php/varcache_recommendarticle.php?id=&doc_type=0&docid=4175901667230044053&areaid=20&version=$PROTO_VERSION$',
                        type:1
                    },
                    {
                        top:0,
                        title:'主播疯人院云顶篇：蚂蚱生蟑螂之生生不息“蟑螂海”',
                        num:'1231',
                        img:'https://shp.qpic.cn/cfwebcap/0/fbb46fe7c37410160b9f1adea8496b31/0?width=600&height=354',
                        link:'http://lol.qq.com/m/act/a20150319lolapp/exp_3.htm?iVideoId=7455904265249833948',
                        type:2
                    },
                    {
                        top:0,
                        title:'exceL官宣：前OG下路选手Patrik加入队伍',
                        num:'1231',
                        img:'https://shp.qpic.cn/cfwebcap/0/963f68a5e1fad61327edaac9435aa752/0',
                        link:'https://qt.qq.com/php_cgi/news/php/varcache_mcnarticle.php?id=&doc_type=0&docid=12883763673257656507&areaid=20&version=$PROTO_VERSION$',
                        type:1
                    },
                ]
            }
        },
        methods:{
            toLink(image,index){
                window.location.href = image.link
            },
            toDetail(item,index){
                window.location.href = item.link
            },
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                }, 500);
            }
        }
    }
</script>

<style scoped lang="less">
@import "../index";
</style>
