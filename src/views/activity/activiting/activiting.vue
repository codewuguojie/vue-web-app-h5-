<template>
    <div class="activiting">
        <div class="num">共{{activity.length}}个</div>
        <div class="list">
            <div class="list-item" v-for="(item,index) in activity" @click="toDetail(item,index)">
                <div class="title">{{item.title}}</div>
                <div class="info">
                    <img :src="item.img">
                    <div class="right">
                        <div class="content">
                            <span class="div-icon">奖励</span> {{item.award}}
                        </div>
                        <div class="time">
                            <div class="div-icon"></div>
                            <div class="div-time">{{item.time}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "activiting",
        data(){
            return{
                activity:[
                    {
                        title:'德玛西亚杯售票',
                        img:'//ossweb-img.qq.com/images/clientpop/act/lol_1575267218_uploadnewsImg.jpg',
                        award:'德玛西亚杯淘汰赛（重庆）',
                        time:'17天后结束',
                        link:'https://lpl.qq.com/es/ticket.shtml?e_code=452420'
                    },
                    {
                        title:'夺冠庆典',
                        img:'//ossweb-img.qq.com/images/clientpop/act/lol_1573786334_uploadnewsImg.jpg',
                        award:'FPX冠军庆典',
                        time:'12天后结束',
                        link:'https://lol.qq.com/act/a20191108champion/index.html?e_code=495985'
                    },
                    {
                        title:'十周年活动',
                        img:'//ossweb-img.qq.com/images/clientpop/act/lol_1571884210_uploadnewsImg.jpg',
                        award:'十周年活动',
                        time:'长期活动',
                        link:'https://lol.qq.com/act/a2019100110th/rewards.html?e_code=492752#anchor1'
                    },
                    {
                        title:'未来战士 锤石',
                        img:'//ossweb-img.qq.com/images/clientpop/act/lol_1574737678_uploadnewsImg.jpg',
                        award:'新皮肤',
                        time:'7天后结束',
                        link:'https://lol.qq.com/act/a20191126pulsefire/index.html?e_code=497035'
                    },
                    {
                        title:'校园解说大赛',
                        img:'//ossweb-img.qq.com/images/clientpop/act/lol_1554279028_uploadnewsImg.jpg',
                        award:'校园解说大赛',
                        time:'长期活动',
                        link:'https://www.ccel.org.cn/loljs'
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
