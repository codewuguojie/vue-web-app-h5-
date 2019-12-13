<template>
    <div class="activity">
        <van-nav-bar title="活动中心" left-text="返回" left-arrow @click-left="back"></van-nav-bar>
        <div class="nav">
            <router-link :to="item.link" class="nav-item" active-class="active" v-for="(item,index) in navList" @click="navChange(item,index)">{{item.name}}</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "activity",
        data(){
            return{
                navList:[
                    {
                        id:0,
                        name:'正在进行',
                        link:'/activity/activiting'
                    },
                    {
                        id:1,
                        name:'已结束',
                        link:'/activity/activitied'
                    }
                ]
            }
        },
        methods:{
            back(){
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
