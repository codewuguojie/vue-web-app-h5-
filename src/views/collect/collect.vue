<template>
    <div class="collect">
        <van-nav-bar title="我的收藏" left-text="返回" @click-left="back" left-arrow/>
        <div class="nav">
            <router-link :to="item.link" class="nav-item" active-class="active" v-for="(item,index) in navList" @click="navChange(item,index)">{{item.name}}</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "collect",
        data(){
            return{
                navList:[
                    {
                        id:0,
                        name:'资讯',
                        link:'/collect/topic'
                    },
                    {
                        id:1,
                        name:'英雄',
                        link:'/collect/hero'
                    },
                    {
                        id:2,
                        name:'壁纸',
                        link:'/collect/wallpaper'
                    }
                ]
            }
        },
        methods:{
            back() {
                this.$router.push({
                    path:'/my/center'
                })
            },
        }
    }
</script>

<style scoped lang="less">
@import "./index";
</style>
