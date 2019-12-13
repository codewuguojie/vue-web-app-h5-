<template>
    <div class="fans">
        <van-nav-bar :title="title" left-text="返回" left-arrow @click-left="back"></van-nav-bar>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="form">
            <div class="item" v-for="(item,index) in list">
                <div class="left">
                    <img :src="item.img">
                </div>
                <div class="middle">
                    <div class="top">
                        <div class="name">{{item.name}}</div>
                        <div class="sex">{{item.sex}}</div>
                    </div>
                    <div class="bottom">
                        <div class="icon-img">
                            <van-icon name="friends-o" size="16" color="gold" />
                        </div>
                        <div class="nickName">{{item.nickName}}</div>
                    </div>
                </div>
                <div class="right">
                    <div class="top">聊天</div>
                    <div class="bottom">
                        <div :class="{'color':item.type===1,'active':item.type===0}"></div>
                        <div class="type">{{item.type===0?'游戏离线':'游戏在线'}}</div>
                    </div>
                </div>
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
        name: "fans",
        data(){
            return{
                title:`粉丝(${this.$route.query.num})`,
                list:[
                    {
                        img:img,
                        name:'jayWu',
                        nickName:'不管多远一起走',
                        sex:'男',
                        type:1
                    },
                    {
                        img:img,
                        name:'超越西狂',
                        nickName:'理工花凋',
                        sex:'男',
                        type:0
                    },
                    {
                        img:img,
                        name:'风',
                        nickName:'风痕雪墨',
                        sex:'男',
                        type:1
                    }
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
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                }, 500);
            }
        }
    }
</script>

<style scoped lang="less">
@import "./index";
</style>
