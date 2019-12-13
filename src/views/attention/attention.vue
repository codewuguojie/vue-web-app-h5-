<template>
    <div class="attention">
        <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="back"></van-nav-bar>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="form">
            <div class="item" v-for="(item,index) in list">
                <div class="left">
                    <img :src="item.img">
                </div>
                <div class="middle">
                    <div class="nickname">{{item.nickName}}</div>
                    <div class="info">
                        <div class="level">{{item.level}}</div>
                        <div class="sex">{{item.sex}}</div>
                        <div class="fans">{{item.fans}}</div>
                        <div class="time">{{item.time}}</div>
                    </div>
                    <div class="type">官方认证：{{item.type}}</div>
                </div>
                <div :class="{'right':!item.attention,'active':item.attention}" @click="aTogger(item,index)" >{{!item.attention?'未关注':'已关注'}}</div>
            </div>
        </div>
        </van-pull-refresh>
    </div>
</template>

<script>
    import img from '../../assets/img/user.jpg'
    import Vue from 'vue';
    import { PullRefresh } from 'vant';

    Vue.use(PullRefresh);
    export default {
        name: "attention",
        data(){
            return{
                title:`关注(${this.$route.query.num})`,
                list:[
                    {
                        img:img,
                        nickName:'虎牙丶阿驴OB',
                        level:'Lv3',
                        sex:'男',
                        fans:'40w+粉丝',
                        time:'20小时前开播',
                        type:'官方认证主播',
                        attention:true
                    },
                    {
                        img:img,
                        nickName:'LOL徐老师',
                        level:'Lv1',
                        sex:'男',
                        fans:'99w+粉丝',
                        time:'',
                        type:'认证作者',
                        attention:true
                    },
                    {
                        img:img,
                        nickName:'马叉虫',
                        level:'Lv3',
                        sex:'男',
                        fans:'99w+粉丝',
                        time:'20小时前开播',
                        type:'官方认证主播',
                        attention:true
                    },
                ],
                isLoading:false
            }
        },
        methods:{
            back(){
                this.$router.push({
                    path:'/my/center'
                })
            },
            aTogger(item,index){
                console.log('当前',item,item.attention,index)
                this.list.forEach((subItem,subIndex)=>{
                    if(index===subIndex){
                        subItem.attention = !item.attention
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
