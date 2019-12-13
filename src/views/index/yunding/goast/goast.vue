<template>
    <div class="hero">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="list">
                <div class="list-item" v-for="(item,index) in list">
                    <div class="left">
                        <div class="nickName">{{item.nickName}}</div>
                        <div class="one">
                            <div class="name">{{item.name}}</div>
                            <div class="money">金币：{{item.money}}</div>
                        </div>
                        <div class="two">
                            <div class="type">类型：{{item.type}}</div>
                            <div class="solder">羁绊：{{item.solder}}</div>
                        </div>
                    </div>
                    <div class="right">
                        <img :src="item.img">
                    </div>
                    <div class="bgBox">
                        <img src="http://game.gtimg.cn/images/lol/act/a20190704tft/herolist-card-mask.png">
                    </div>
                </div>
            </div>
        </van-pull-refresh>
    </div>
</template>


<script>
    import Vue from 'vue';
    import { PullRefresh  } from 'vant';

    Vue.use(PullRefresh);
    export default {
        name: "goast",
        data(){
            return{
                list:[
                    {
                        nickName:'沙漠皇帝',
                        name:'阿兹尔',
                        money:'3',
                        type:'沙漠',
                        solder:'召唤使',
                        img:'//game.gtimg.cn/images/lol/tft/cham-icons/tft2/600x345/268.jpg'
                    },
                    {
                        nickName:'翠神',
                        name:'艾翁',
                        money:'1',
                        type:'森林',
                        solder:'德鲁伊',
                        img:'//game.gtimg.cn/images/lol/tft/cham-icons/tft2/600x345/427.jpg'
                    },
                    {
                        nickName:'寒冰射手',
                        name:'艾希',
                        money:'4',
                        type:'水晶',
                        solder:'游侠',
                        img:'//game.gtimg.cn/images/lol/tft/cham-icons/tft2/600x345/22.jpg'
                    },
                    {
                        nickName:'黑暗之女',
                        name:'安妮',
                        money:'4',
                        type:'沙漠',
                        solder:'召唤使',
                        img:'//game.gtimg.cn/images/lol/tft/cham-icons/tft2/600x345/1.jpg'
                    },
                    {
                        nickName:'山隐之焰',
                        name:'奥恩',
                        money:'1',
                        type:'雷霆',
                        solder:'守护神',
                        img:'//game.gtimg.cn/images/lol/tft/cham-icons/tft2/600x345/516.jpg'
                    },
                    {
                        nickName:'狂战士',
                        name:'奥拉夫',
                        money:'4',
                        type:'极地',
                        solder:'狂战士',
                        img:'//game.gtimg.cn/images/lol/tft/cham-icons/tft2/600x345/2.jpg'
                    },
                    {
                        nickName:'复仇焰魂',
                        name:'布兰德',
                        money:'4',
                        type:'地狱火',
                        solder:'魔法师',
                        img:'//game.gtimg.cn/images/lol/tft/cham-icons/tft2/600x345/63.jpg'
                    },
                    {
                        nickName:'弗雷尔卓德之心',
                        name:'布隆',
                        money:'2',
                        type:'极地',
                        solder:'守护神',
                        img:'//game.gtimg.cn/images/lol/tft/cham-icons/tft2/600x345/201.jpg'
                    },
                    {
                        nickName:'魂锁典狱长',
                        name:'锤石',
                        money:'2',
                        type:'海洋',
                        solder:'守护神',
                        img:'//game.gtimg.cn/images/lol/tft/cham-icons/tft2/600x345/412.jpg'
                    },
                    {
                        nickName:'皎月女神',
                        name:'戴安娜',
                        money:'1',
                        type:'地狱火',
                        solder:'刺客',
                        img:'//game.gtimg.cn/images/lol/tft/cham-icons/tft2/600x345/131.jpg'
                    },
                    {
                        nickName:'猩红收割者',
                        name:'弗拉基米尔',
                        money:'1',
                        type:'海洋',
                        solder:'魔法师',
                        img:'//game.gtimg.cn/images/lol/tft/cham-icons/tft2/600x345/8.jpg'
                    },

                ],
                isLoading: false,
            }
        },
        methods:{
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                }, 500);
            },
        }
    }
</script>

<style scoped lang="less">
@import "../index";
</style>
