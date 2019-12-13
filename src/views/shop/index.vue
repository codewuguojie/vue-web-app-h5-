<template>
    <div class="shop">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="content">
                <div class="swiper">
                    <van-swipe :autoplay="3000" :height="150">
                        <van-swipe-item v-for="(image, index) in swiperList" :key="index" @click="toLink(image,index)">
                            <img v-lazy="image.img" />
                        </van-swipe-item>
                    </van-swipe>
                </div>

                <div class="nav">
                    <div class="navItem" :class="{'active':navIndex===index}" @click="navChange(item,index)" v-for="(item,index) in navList">{{item}}</div>
                </div>

                <div class="list">
                    <div class="list-item" v-for="(item,index) in goodsList[navIndex]" @click="toDetail(item,index)">
                        <div class="img">
                            <img :src="item.img">
                        </div>
                        <div class="name">{{item.name}}</div>
                        <div class="info">
                            <div class="money">
                                <div class="icon"><van-icon name="gold-coin-o" /></div>
                                <div class="num">{{item.money}}</div>
                            </div>
                            <div class="money prop" v-if="item.prop!==0">
                                <div class="icon"><van-icon name="gem-o" /></div>
                                <div class="num">{{item.prop}}</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </van-pull-refresh>
        <Footer page="index"></Footer>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Swipe, SwipeItem, Lazyload, PullRefresh } from 'vant';

    Vue.use(Swipe).use(SwipeItem).use(Lazyload).use(PullRefresh);
    import Footer from "@/components/Footer";
    export default {
        name: "shop",
        components:{
            Footer
        },
        data(){
            return{
                swiperList:[
                    {
                        img:'https://game.gtimg.cn/images/daojushop/uploads/ad/201912/20191212151634_160220.jpg',
                        link:'https://lol.qq.com/act/a20191127aphelios/index.html?ADTAG=innercop.lol.SY.advertising_new'
                    },
                    {
                        img:'https://game.gtimg.cn/images/daojushop/uploads/ad/201912/20191210172657_935644.jpg',
                        link:'https://mall.qq.com/act/a20191210wplush/index.html?ADTAG=innercop.lol.SY.advertising_new'
                    },
                    {
                        img:'https://game.gtimg.cn/images/daojushop/uploads/ad/201911/20191126111947_855302.jpg',
                        link:'https://lol.qq.com/act/a20191126pulsefire/index.html?e_code=458099&ADTAG=innercop.lol.SY.advertising_new'
                    },
                    {
                        img:'https://game.gtimg.cn/images/daojushop/uploads/ad/201912/20191202104859_711820.jpg',
                        link:'https://mall.qq.com/act/a20191128calendar/index.html?ADTAG=innercop.lol.SY.advertising_new'
                    }
                ],
                isLoading:false,
                navIndex:0,
                navList:[
                    '英雄','皮肤','海克斯及其他','礼包'
                ],
                goodsList:[
                    [
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/1-523-9.jpg?_t=1576045988',
                            name:'残月之肃 厄斐琉斯',
                            money:4500,
                            prop:7800,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9259'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/1-235-.jpg?_t=1573194102',
                            name:'涤魂圣枪 赛娜',
                            money:4500,
                            prop:6300,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9236'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/1-517-.jpg?_t=1548406888',
                            name:'解脱者 塞拉斯',
                            money:4500,
                            prop:6300,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=8887'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/1-518-9.jpg?_t=1544439282',
                            name:'万花通灵 妮蔻',
                            money:4500,
                            prop:6300,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=8842'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/1-5-9.jpg',
                            name:'德邦总管 赵信',
                            money:2500,
                            prop:3150,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=1039'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/1-3-9.jpg?_t=1498730966',
                            name:'正义巨像 加里奥',
                            money:2500,
                            prop:4800,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=1041'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/1-2-9.jpg?_t=1537344444',
                            name:'狂战士 奥拉夫',
                            money:1500,
                            prop:1350,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=1042'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/1-266-9.jpg',
                            name:'暗裔剑魔 亚托克斯',
                            money:4500,
                            prop:4800,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=931'
                        },
                    ],
                    [
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-523001-9.jpg?_t=1576046029',
                            name:'黑夜使者 厄斐琉斯',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9260'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-412014-9.jpg?_t=1574670717',
                            name:'未来战士 锤石',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9258'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-246002-.jpg?_t=1573194357',
                            name:'真实伤害 奇亚娜',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9234'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-245019-.jpg?_t=1573211068',
                            name:'真实伤害 艾克',
                            money:9900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9233'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-84015-.jpg?_t=1573194142',
                            name:'真实伤害 阿卡丽',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9232'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-267015-.jpg?_t=1569572076',
                            name:'玉剑传说 寒潭夭夭',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9170'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-92020-.jpg?_t=1569572124',
                            name:'玉剑传说 武剑仙',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9169'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-110009-.jpg?_t=1568884036',
                            name:'地狱火 韦鲁斯',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9163'
                        },
                    ],
                    [
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-523001-9.jpg?_t=1576046029',
                            name:'黑夜使者 厄斐琉斯',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9260'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-412014-9.jpg?_t=1574670717',
                            name:'未来战士 锤石',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9258'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-246002-.jpg?_t=1573194357',
                            name:'真实伤害 奇亚娜',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9234'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-245019-.jpg?_t=1573211068',
                            name:'真实伤害 艾克',
                            money:9900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9233'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-84015-.jpg?_t=1573194142',
                            name:'真实伤害 阿卡丽',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9232'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-267015-.jpg?_t=1569572076',
                            name:'玉剑传说 寒潭夭夭',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9170'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-92020-.jpg?_t=1569572124',
                            name:'玉剑传说 武剑仙',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9169'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-110009-.jpg?_t=1568884036',
                            name:'地狱火 韦鲁斯',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9163'
                        },
                    ],
                    [
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-523001-9.jpg?_t=1576046029',
                            name:'黑夜使者 厄斐琉斯',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9260'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-412014-9.jpg?_t=1574670717',
                            name:'未来战士 锤石',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9258'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-246002-.jpg?_t=1573194357',
                            name:'真实伤害 奇亚娜',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9234'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-245019-.jpg?_t=1573211068',
                            name:'真实伤害 艾克',
                            money:9900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9233'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-84015-.jpg?_t=1573194142',
                            name:'真实伤害 阿卡丽',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9232'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-267015-.jpg?_t=1569572076',
                            name:'玉剑传说 寒潭夭夭',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9170'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-92020-.jpg?_t=1569572124',
                            name:'玉剑传说 武剑仙',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9169'
                        },
                        {
                            img:'https://game.gtimg.cn/images/daoju/app/lol/medium/2-110009-.jpg?_t=1568884036',
                            name:'地狱火 韦鲁斯',
                            money:7900,
                            prop:0,
                            link:'https://qt.qq.com/php_cgi/lol_mobile/appmall/html/detail.html?id=9163'
                        },
                    ]
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
            toLink(image,index){
                window.location.href = image.link
            },
            navChange(item,index){
              this.navIndex = index
            },
            toDetail(item,index){
                window.location.href = item.link
            }
        }
    }
</script>

<style scoped lang="less">
@import "./index";
</style>
