<template>
    <div class="area">
        <van-nav-bar title="消息推送设置" left-text="返回" left-arrow @click-left="back" style="background: rgb(244,244,244); border-bottom: 1px solid #ccc"></van-nav-bar>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="list">
                <div class="area-item" v-for="(item,index) in areaList" @click="chenked(item,index)">
                    <div class="img-box">
                        <img :src="item.img">
                    </div>
                    <div class="info">
                        <h3 class="area-title">{{item.name}}</h3>
                        <div class="info-box">
                            <span class="nickname">{{item.nickName}}</span>
                            <span class="level">{{item.level}}</span>
                        </div>
                    </div>
                    <div class="radio" :class="{'active':radioIndex===index}">

                    </div>
                </div>
            </div>
        </van-pull-refresh>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { RadioGroup, Radio, PullRefresh } from 'vant';
    Vue.use(RadioGroup);
    Vue.use(Radio).use(PullRefresh);
    import nkss from '../../assets/img/nkss.png'
    import aony from '../../assets/img/aony.png'
    import bejwt from '../../assets/img/bejwt.png'
    import dmxy from '../../assets/img/dmxy.png'
    import za from '../../assets/img/za.png'
    import bdec from '../../assets/img/bdec.png'
    import zzxy from '../../assets/img/zzxy.png'
    import flezd from '../../assets/img/flezd.png'
    import jhjp from '../../assets/img/jhjp.png'
    import jsf from '../../assets/img/jsf.png'
    import hsmg from '../../assets/img/hsmg.png'
    import gtly from '../../assets/img/gtlt.png'
    import ayd from '../../assets/img/ayd.png'
    import cjzd from '../../assets/img/cjzd.png'
    import lssb from '../../assets/img/lssb.png'
    import petwf from '../../assets/img/petwf.png'
    import qzsj from '../../assets/img/qzsj.png'
    import jywzq from '../../assets/img/jywzq.png'
    import zfzh from '../../assets/img/zfzh.png'
    import yl from '../../assets/img/yl.png'
    export default {
        name: "index",
        data(){
            return{
                radioIndex : 0,
                areaList:[
                    {
                        img:nkss,
                        name:'诺克萨斯',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:aony,
                        name:'艾欧尼亚',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:bejwt,
                        name:'比尔吉沃特',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:dmxy,
                        name:'德玛西亚',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:za,
                        name:'祖安',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:bdec,
                        name:'班德尔城',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:zzxy,
                        name:'战争学院',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:flezd,
                        name:'弗雷尔卓德',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:jhjp,
                        name:'均衡教派',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:jsf,
                        name:'巨神峰',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:hsmg,
                        name:'黑色玫瑰',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:gtly,
                        name:'钢铁烈阳',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:ayd,
                        name:'暗影岛',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:cjzd,
                        name:'裁决之地',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:lssb,
                        name:'雷瑟守备',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:petwf,
                        name:'皮尔特沃夫',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:qzsj,
                        name:'强者世界',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:jywzq,
                        name:'教育网专区',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:zfzh,
                        name:'征服之海',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    },
                    {
                        img:yl,
                        name:'影流',
                        nickName:'不管多远一起走',
                        level:'Lv99',

                    }
                ],
                isLoading:false
            }
        },
        methods:{
            back(){
                history.back()
            },
            chenked(item,index){
                console.log('当前项',item)
                this.radioIndex = index
                this.$router.push({
                    path:'my/set',
                    query:{
                        areaName:item.name
                    }
                })
            },
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                }, 500);
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="less">
@import "./index";
</style>
