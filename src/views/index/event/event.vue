<template>
    <div class="event">
        <div class="event-list">
            <div class="event-item" v-for="(item,index) in list" @click="toDetail(item,index)">
                <div class="event-top">
                    <div class="event-left">
                        <img :src="item.img">
                    </div>
                    <div class="event-right">
                        <div class="title">{{item.title}}</div>
                        <div class="cont">{{item.content}}</div>
                    </div>
                </div>
                <div class="event-bottom">
                    <div class="icon">
                        <van-icon name="clock-o" />
                    </div>
                    <div class="time">
                        {{item.time}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "event",
        data(){
            return{
                list:[
                    {
                        img:'https://game.gtimg.cn/images/lol/act/a20191111okami/share.jpg',
                        title:'寻找身边峡谷大神',
                        content:'扫一扫身边S8赛季峡谷大神，赶快与TA联系开启新赛季征程！',
                        time:'距结束 还有9天',
                        link:'http://lol.qq.com/act/a20191111okami/index.html'
                    },
                    {
                        img:'https://dss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=2808275559,2147241995&fm=85&app=2&f=JPG?w=121&h=75&s=E694528DC61217D49E25799A03008080',
                        title:'S9赛季结算奖励',
                        content:'S9赛季结束，达到对应段位的玩家可以获取相应赛季奖励',
                        time:'长期活动',
                        link:'https://lol.qq.com/act/a20191202app/index.html'
                    },
                    {
                        img:'https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=330338432,41621568&fm=74&app=80&f=JPEG&size=f121,90?sec=1880279984&t=cf1574eae0665aa9e137cae9cf82795c',
                        title:'德玛西亚杯售票',
                        content:'2019德玛西亚杯将于12约1号开始，分别做客苏州、杭州',
                        time:'距结束 还有9天',
                        link:'https://lpl.qq.com/es/m/ticket.html'
                    },
                    {
                        img:'http://img.kuai8.com/attaches/news/image/20190319/201903190932451197.png',
                        title:'掌盟福来DAY',
                        content:'8月锦鲤，2019原计划周边一套',
                        time:'长期活动',
                        link:'https://lol.qq.com/act/a20190225koifish/index.html'
                    },
                    {
                        img:'https://dss0.baidu.com/73t1bjeh1BF3odCf/it/u=1227022277,422198467&fm=85&s=B2A060A40A302582D42424580300C0F2',
                        title:'7月锦鲤开启',
                        content:'每周一个锦鲤奖励，来试试自己的运气吧',
                        time:'长期活动',
                        link:'https://lol.qq.com/act/a20190225koifish/index.html'
                    },
                ]
            }
        },
        methods:{
            toDetail(item,index){
                window.location.href = item.link
            }
        }
    }
</script>

<style scoped lang="less">
@import "../index";
</style>
