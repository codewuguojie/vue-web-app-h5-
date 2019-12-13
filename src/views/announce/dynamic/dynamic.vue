<template>
    <div class="dynamic">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="list">
            <div class="list-item" v-for="(item,index) in dynamic">
                <div class="time">{{item.time}}</div>
                <div class="line">
                    <div class="img">
                        <van-icon name="share" />
                    </div>
                    <div class="border"></div>
                </div>
                <div class="content">
                    <p class="word">获得了mvp</p>
                    <img :src="item.img">
                </div>
            </div>
        </div>
        </van-pull-refresh>
    </div>
</template>

<script>
    import mvp1 from '../../../assets/img/mvp1.jpg'
    import mvp2 from '../../../assets/img/mvp2.jpg'
    import mvp3 from '../../../assets/img/mvp3.jpg'
    import mvp4 from '../../../assets/img/mvp4.jpg'
    import Vue from 'vue';
    import { PullRefresh } from 'vant';

    Vue.use(PullRefresh);
    export default {
        name: "dynamic",
        data(){
            return{
                dynamic:[
                    {
                        time:'12-3',
                        img:mvp1
                    },
                    {
                        time:'10-13',
                        img:mvp2
                    },
                    {
                        time:'9-26',
                        img:mvp3
                    },
                    {
                        time:'8-9',
                        img:mvp4
                    },
                ],
                isLoading: false
            }
        },
        methods:{
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.dynamic.unshift(this.dynamic[Math.round(Math.random()*4)])
                }, 500);
            }
        }
    }
</script>

<style scoped lang="less">
@import "../index";
</style>
