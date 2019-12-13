<template>
    <div class="rank">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="list">
                <div class="header">
                    <div class="one">排名</div>
                    <div class="two">玩家</div>
                    <div class="one">段位</div>
                    <div class="one">胜点</div>
                </div>
                <div class="list-item" v-for="(item,index) in list">
                    <div class="index">{{index+1}}</div>
                    <div class="name">
                        <div class="user-img">
                            <img :src="item.img">
                        </div>
                        <div class="user-name">{{item.name}}</div>
                    </div>
                    <div class="level">{{item.level}}</div>
                    <div class="point">{{item.point}}</div>
                </div>
            </div>
        </van-pull-refresh>
    </div>
</template>

<script>
    import user from '../../../../assets/img/user.jpg'
    import Vue from 'vue';
    import { PullRefresh  } from 'vant';

    Vue.use(PullRefresh);
    export default {
        name: "rank",
        data(){
            return{
                isLoading: false,
                list:[
                    {
                        img:user,
                        name:'可时间万般苦',
                        level:'傲视宗师',
                        point:'319'
                    },
                    {
                        img:user,
                        name:'佳人世无双',
                        level:'傲视宗师',
                        point:'305'
                    },
                    {
                        img:user,
                        name:'请别用嘴打游戏',
                        level:'傲视宗师',
                        point:'282'
                    },
                    {
                        img:user,
                        name:'7丶Alroy|kuku',
                        level:'傲视宗师',
                        point:'233'
                    },
                    {
                        img:user,
                        name:'猖狂丶爷的资本',
                        level:'傲视宗师',
                        point:'199'
                    },
                    {
                        img:user,
                        name:'天霸动霸tua',
                        level:'傲视宗师',
                        point:'182'
                    },
                    {
                        img:user,
                        name:'我不会输的3',
                        level:'傲视宗师',
                        point:'180'
                    },
                    {
                        img:user,
                        name:'像清风',
                        level:'傲视宗师',
                        point:'176'
                    },
                    {
                        img:user,
                        name:'丿黑丶百丿',
                        level:'傲视宗师',
                        point:'157'
                    },
                    {
                        img:user,
                        name:'丿皓月当空',
                        level:'傲视宗师',
                        point:'134'
                    },
                ]
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
