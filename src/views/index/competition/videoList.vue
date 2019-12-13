<template>
    <div class="videoLiost">
        <van-nav-bar :title="this.$store.state.videoTitle" left-text="返回" left-arrow @click-left="back"></van-nav-bar>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="list">
            <div class="list-item" v-for="(item,index) in list" @click="toVideo(item,index)">
                <div class="img">
                    <img :src="item.img">
                </div>
                <div class="title">{{item.title}}</div>
                <div class="num">{{item.num}}播放</div>
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
        name: "videoList",
        data(){
            return{
                list:[
                    {
                        img:'//puui.qpic.cn/vpic/0/n00332asw7w.png/0',
                        title:'2019LOL全明星赛1V1单挑赛决赛 Bwipo vs Uzi_03',
                        num:'105025',
                        link:'http://lol.qq.com/m/act/a20150319lolapp/exp_3.htm?iVideoId=110987'
                    },
                    {
                        img:'//puui.qpic.cn/vpic/0/y00332r7574.png/0',
                        title:'2019LOL全明星赛1V1单挑赛决赛 Bwipo vs Uzi_02',
                        num:'68591',
                        link: 'http://lol.qq.com/m/act/a20150319lolapp/exp_3.htm?iVideoId=110986'
                    },
                    {
                        img:'//puui.qpic.cn/vpic/0/t003329bupl.png/0',
                        title:'2019LOL全明星赛1V1单挑赛决赛 Bwipo vs Uzi_01',
                        num:'51126',
                        link: 'http://lol.qq.com/m/act/a20150319lolapp/exp_3.htm?iVideoId=110985'
                    },
                    {
                        img:'//puui.qpic.cn/vpic/0/d0033lkz9mh.png/0',
                        title:'2019LOL全明星赛第三日 云顶之弈传奇英雄慈善赛',
                        num:'17077',
                        link: 'http://lol.qq.com/m/act/a20150319lolapp/exp_3.htm?iVideoId=110984'
                    },
                    {
                        img:'//puui.qpic.cn/vpic/0/z0033kp73bo.png/0',
                        title:'2019LOL全明星赛第三日 无限火力模式3',
                        num:'40336',
                        link: 'http://lol.qq.com/m/act/a20150319lolapp/exp_3.htm?iVideoId=110979'
                    },
                    {
                        img:'//puui.qpic.cn/vpic/0/h0033s7q55t.png/0',
                        title:'2019LOL全明星赛第三日 5v5表演赛',
                        num:'67928',
                        link: 'http://lol.qq.com/m/act/a20150319lolapp/exp_3.htm?iVideoId=110978'
                    },
                    {
                        img:'//puui.qpic.cn/vpic/0/z0033pc99hf.png/0',
                        title:'2019LOL全明星赛第三日 云顶之弈小小英雄慈善赛',
                        num:'16130',
                        link: 'http://lol.qq.com/m/act/a20150319lolapp/exp_3.htm?iVideoId=110977'
                    },
                    {
                        img:'//puui.qpic.cn/vpic/0/w0033ki8c60.png/0',
                        title:'2019LOL全明星赛1V1单挑赛4强 Uzi vs Levi_02',
                        num:'59701',
                        link: 'http://lol.qq.com/m/act/a20150319lolapp/exp_3.htm?iVideoId=110976'
                    },
                    {
                        img:'//puui.qpic.cn/vpic/0/v0033z6012f.png/0',
                        title:'2019LOL全明星赛1V1单挑赛4强 Uzi vs Levi_01',
                        num:'58567',
                        link: 'http://lol.qq.com/m/act/a20150319lolapp/exp_3.htm?iVideoId=110975'
                    },
                    {
                        img:'//puui.qpic.cn/vpic/0/k003344fep2.png/0',
                        title:'2019LOL全明星赛1V1单挑赛4强 Theshy vs Bwipo_03',
                        num:'51869',
                        link: 'http://lol.qq.com/m/act/a20150319lolapp/exp_3.htm?iVideoId=110974'
                    }
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
            back() {
                this.$router.push({
                    path:'index/competition'
                })
            },
            toVideo(item,index){
                window.location.href = item.link
            }
        }
    }
</script>

<style scoped lang="less">
@import "./video";
</style>
