<template>
    <div class="yunding">
        <div class="list-nav">
            <div class="box">
                <router-link :to="item.link" class="nav-item" active-class="active" :key="index" v-for="(item,index) in navList" @click="navChange(item,index)">
                    <div class="img">
                        <img :src="item.img">
                    </div>
                    <div class="title">{{item.name}}</div>
                </router-link>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import img1 from '../../../assets/img/yingxiong.svg'
    import img2 from '../../../assets/img/zhenrong.svg'
    import img3 from '../../../assets/img/jian.svg'
    import img4 from '../../../assets/img/paihangban.svg'
    export default {
        name: "yunding",
        data(){
            return{
                navList:[
                    {
                        id:0,
                        name:'英雄',
                        img:img1,
                        link:'/index/yunding/goast'
                    },
                    {
                        id:1,
                        name:'阵容',
                        img:img2,
                        link:'/index/yunding/zhenrong'
                    },
                    {
                        id:2,
                        name:'物品',
                        img:img3,
                        link:'/index/yunding/goods'
                    },
                    {
                        id:3,
                        name:'排行',
                        img:img4,
                        link:'/index/yunding/rank'
                    },
                ]
            }
        }
    }
</script>

<style scoped lang="less">
@import "../index";
</style>
