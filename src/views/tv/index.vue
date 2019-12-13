<template>
    <div class="TV">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="title">今日推荐<span>{{swiperList.length}}个</span></div>
            <div class="swiper">
                    <van-swipe :autoplay="3000" :height="150">
                        <van-swipe-item v-for="(image, index) in swiperList" :key="index" @click="toLink(image,index)">
                            <img v-lazy="image.img" />
                        </van-swipe-item>
                    </van-swipe>
                </div>
            <div class="title">热门主播</div>
            <div class="hot">
                <div class="hot-item" v-for="(item,index) in hotList" @click="toDetail(item,index)">
                    <div class="hot-top">
                        <div class="num">{{item.num}}</div>
                        <img :src="item.img">
                        <div class="name">{{item.name}}</div>
                    </div>
                    <div class="hot-bottom">{{item.text}}</div>
                </div>
            </div>
            <div class="title">精品栏目</div>
            <div class="show">
                <div class="show-item" v-for="(item,index) in showList">
                    <img :src="item.img">
                    <div class="name">{{item.name}}</div>
                    <div class="time">{{item.time}}</div>
                </div>
            </div>
        </van-pull-refresh>
        <Footer page="index"></Footer>
    </div>
</template>

<script>
    import Footer from "@/components/Footer";
    import Vue from 'vue';
    import { Swipe, SwipeItem, Lazyload, PullRefresh } from 'vant';

    Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(PullRefresh);
    export default {
        name: "tv",
        components:{
            Footer
        },
        data(){
            return{
                isLoading:false,
                swiperList:[
                    {
                        img:'//shp.qpic.cn/cfwebcap/0/8416e35f1f10ba62c2fa22d32789f30e/0/?width=686&height=368',
                        link:'https://lol.qq.com/act/a20191125preseason/index.html?e_code=497822&idataid=292432'
                    },
                    {
                        img:'//shp.qpic.cn/cfwebcap/0/41619c68acf2f9eb383bec46e625af30/0/?width=686&height=368',
                        link:'https://lol.qq.com/act/a20191108champion/index.html?e_code=498201&idataid=292771&v=0'
                    },
                    {
                        img:'//puui.qpic.cn/vpic/0/i3033gzv6zb.png/0',
                        link:'https://lol.qq.com/act/a20191106truedamage/index.html?e_code=497154&idataid=284389'
                    },
                    {
                        img:'//shp.qpic.cn/cfwebcap/0/887b519a94b3bb59fb08c7914abd0d5d/0/?width=686&height=368',
                        link:'https://lol.qq.com/act/a20191127aphelios/index.html?e_code=498278&idataid=292813'
                    },
                    {
                        img:'//shp.qpic.cn/cfwebcap/0/5c329141d4de869819b4518f83554f5e/0/?width=686&height=368',
                        link:'https://101.qq.com/tft/index.shtml?e_code=498068&idataid=292586&ADTAG=cooperation.glzx.tft'
                    }
                ],
                hotList:[
                    {
                        img:'//live-cover.msstatic.com/huyalive/1447988558-1447988558-6219063501592199168-2862068398-10057-A-0-1/20191211184347.jpg?x-oss-process=image/resize,limit_0,m_fill,w_338,h_190/sharpen,80/format,jpg/interlace,1/quality,q_90',
                        num:9062,
                        name:'LetMe',
                        text:'海南人回来了',
                        link:'https://qt.qq.com/php_cgi/lol_mobile/lol_tv/html/anchor/index.html?anchor_id=89'
                    },
                    {
                        img:'//live-cover.msstatic.com/huyalive/64277750-64277750-276070834110464000-1801766090-10057-A-0-1/20191211184352.jpg?x-oss-process=image/resize,limit_0,m_fill,w_338,h_190/sharpen,80/format,jpg/interlace,1/quality,q_90',
                        num:9062,
                        name:'骚男',
                        text:'来一手大师晋级赛',
                        link:'https://qt.qq.com/php_cgi/lol_mobile/lol_tv/html/anchor/index.html?anchor_id=197'
                    },
                    {
                        img:'//live-cover.msstatic.com/huyalive/96188431-2692759886-11565315646350688256-2607602842-10057-A-0-1/20191211184341.jpg?x-oss-process=image/resize,limit_0,m_fill,w_338,h_190/sharpen,80/format,jpg/interlace,1/quality,q_90',
                        num:9062,
                        name:'青蛙',
                        text:'回来了，给你们带了礼物',
                        link:'https://qt.qq.com/php_cgi/lol_mobile/lol_tv/html/anchor/index.html?anchor_id=235'
                    },
                    {
                        img:'//live-cover.msstatic.com/huyalive/15038320-15038320-64589092586782720-609288168-10057-A-0-1/20191211184341.jpg?x-oss-process=image/resize,limit_0,m_fill,w_338,h_190/sharpen,80/format,jpg/interlace,1/quality,q_90',
                        num:9062,
                        name:'虎神',
                        text:'欢迎来到虎宝的直播间',
                        link:'https://qt.qq.com/php_cgi/lol_mobile/lol_tv/html/anchor/index.html?anchor_id=175'
                    },
                    {
                        img:'//live-cover.msstatic.com/huyalive/96575138-96575138-414787059316686848-8038684-10057-A-0-1/20191211184346.jpg?x-oss-process=image/resize,limit_0,m_fill,w_338,h_190/sharpen,80/format,jpg/interlace,1/quality,q_90',
                        num:9062,
                        name:'小青彤',
                        text:'欢迎来到小青彤的直播间',
                        link:'https://qt.qq.com/php_cgi/lol_mobile/lol_tv/html/anchor/index.html?anchor_id=105'
                    },
                    {
                        img:'//live-cover.msstatic.com/huyalive/77259038-2622305892-11262718046248108032-1923774860-10057-A-0-1/20191211184338.jpg?x-oss-process=image/resize,limit_0,m_fill,w_338,h_190/sharpen,80/format,jpg/interlace,1/quality,q_90',
                        num:9062,
                        name:'董月月',
                        text:'董月月 上单一霸',
                        link:'https://qt.qq.com/php_cgi/lol_mobile/lol_tv/html/anchor/index.html?anchor_id=120'
                    },
                ],
                showList:[
                    {
                        img:'https://shp.qpic.cn/cfwebcap/0/f1af1518b590f1aa9014466a2d235ae8/0?width=273&height=375',
                        name:'小鱼TOP5',
                        time:'2019-12更新',
                        link:'https://qt.qq.com/php_cgi/lol_mobile/lol_tv/html/anchor/index.html?anchor_id=89'
                    },
                    {
                        img:'https://shp.qpic.cn/cfwebcap/0/305af37f4c3cc2a17720c70e457bec40/0?width=273&height=375',
                        name:'主播炸了系列',
                        time:'2019-12更新'
                    },
                    {
                        img:'https://shp.qpic.cn/cfwebcap/0/8a148ce2f60629b8fb75546a1502b3b9/0?width=273&height=375',
                        name:'神探苍联盟必修课',
                        time:'2019-12更新'
                    },
                    {
                        img:'https://shp.qpic.cn/cfwebcap/0/0c1c68776ee057550ba8201eb3089771/0?width=273&height=375',
                        name:'起小点TOP10',
                        time:'2019-12更新'
                    },
                ]
            }
        },
        methods:{
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                }, 500);
            },
            toDetail(item,index){
                window.location.href = item.link
            }
        }
    }
</script>

<style scoped lang="less">
@import "index";
</style>
