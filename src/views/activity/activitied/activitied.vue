<template>
    <div class="activiting">
        <div class="num">共{{activity.length}}个</div>
        <div class="list">
            <div class="list-item" v-for="(item,index) in activity"  @click="toDetail(item,index)">
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
                        title:'LPL全明星周末售票',
                        img:'//ossweb-img.qq.com/images/clientpop/act/lol_1574324984_uploadnewsImg.jpg',
                        award:'LPL全明星周末售票',
                        time:'已结束',
                        link:'https://lpl.qq.com/act/a20191025allstar/index.html?e_code=495711'
                    },
                    {
                        title:'10周年周边福袋',
                        img:'//ossweb-img.qq.com/images/clientpop/act/lol_1571283787_uploadnewsImg.jpg',
                        award:'10周年周边福袋',
                        time:'已结束',
                        link:'https://lolriotmall.qq.com/act/a20191015th10/index.html?ADTAG=lolriotmall.pc.lolhdzx.ad&e_code=492732'
                    },
                    {
                        title:'总决赛2019通行证',
                        img:'//ossweb-img.qq.com/images/clientpop/act/lol_1570193009_uploadnewsImg.jpg',
                        award:'总决赛2019通行证',
                        time:'已结束',
                        link:'https://lol.qq.com/act/a20190923worldsbattle/index.html?e_code=491204'
                    }
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
