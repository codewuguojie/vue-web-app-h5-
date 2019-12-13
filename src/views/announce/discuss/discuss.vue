<template>
    <div class="option">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="list">
            <div class="list-item" v-for="(item,index) in discuss">
                <div class="left">
                    <img :src="item.cImg">
                </div>
                <div class="right">
                    <div class="cName">{{item.cName}}</div>
                    <div class="cTime">{{item.cTime}}</div>
                    <div class="cContent">{{item.cContent}}</div>
                    <div class="father">
                        <img :src="item.fImg">
                        <div class="info">
                            <div class="fName">{{item.fName}}</div>
                            <div class="fContent">{{item.fContent}}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </van-pull-refresh>
    </div>
</template>

<script>
    import user from '../../../assets/img/user.jpg'
    import Vue from 'vue';
    import { PullRefresh  } from 'vant';

    Vue.use(PullRefresh);
    export default {
        name: "discuss",
        data(){
            return{
                discuss:[
                    {
                        cImg:user,
                        cName:'自导自演',
                        cTime:'1小时前',
                        cContent:'评论内容',
                        fImg:user,
                        fName:'不管多远一起走',
                        fContent:'帖子内容'
                    },
                    {
                        cImg:user,
                        cName:'自导自演',
                        cTime:'1小时前',
                        cContent:'评论内容',
                        fImg:user,
                        fName:'不管多远一起走',
                        fContent:'帖子内容'
                    }
                ],
                isLoading: false,
            }
        },
        methods:{
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                }, 500);
            },
        }
    }
</script>

<style scoped lang="less">
@import "../index";
</style>
