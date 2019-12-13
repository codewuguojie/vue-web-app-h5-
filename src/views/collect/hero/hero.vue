<template>
    <div class="hero">
        <div class="list">
            <div class="list-item" v-for="(item,index) in list">
                <div class="left">
                    <img :src="item.img">
                </div>
                <div class="right">
                    <div class="name">{{item.name}}</div>
                    <div class="nickName">{{item.nickName}}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "hero",
        data(){
            return{
                list:[
                    {
                        name:'涤魂圣枪',
                        nickName:'赛娜',
                        img:'//game.gtimg.cn/images/lol/act/img/champion/Senna.png'
                    },
                    {
                        name:'战争女神',
                        nickName:'希维尔',
                        img:'//game.gtimg.cn/images/lol/act/img/champion/Sivir.png'
                    },
                    {
                        name:'盲僧',
                        nickName:'李青',
                        img:'//game.gtimg.cn/images/lol/act/img/champion/LeeSin.png'
                    },
                    {
                        name:'虚空之女',
                        nickName:'卡莎',
                        img:'//game.gtimg.cn/images/lol/act/img/champion/Kaisa.png'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
@import "../index";
</style>
