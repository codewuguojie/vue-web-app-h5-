<template>
    <div class="announce">
        <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="back"></van-nav-bar>
        <div class="nav">
            <router-link :to="item.link" class="nav-item" active-class="active" v-for="(item,index) in navList" @click="navChange(item,index)">{{item.name}}</router-link>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "announce",
        data(){
            return{
                title:`发表(${this.$route.query.num})`,
                navIndex:0,
                navList:[
                    {
                        id:0,
                        name:'动态',
                        link:'/announce/dynamic'
                    },
                    {
                        id:1,
                        name:'帖子',
                        link:'/announce/topic'
                    },
                    {
                        id:2,
                        name:'评论',
                        link:'/announce/discuss'
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
            navChange(item,index){
                this.navIndex = index
                if(index===0){
                    this.$router.push({
                        path:'/announce/dynamic'
                    })
                } else if(index===1){
                    this.$router.push({
                        path:'/announce/topic'
                    })
                } else {
                    this.$router.push({
                        path:'/announce/discuss'
                    })
                }
            }
        }
    }
</script>

<style scoped lang="less">
@import "./index";
</style>
