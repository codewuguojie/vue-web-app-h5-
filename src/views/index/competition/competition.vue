<template>
    <div class="competition">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="list">
                <div class="list-item" v-for="(item,index) in list" @click="
toVideoList(item,index)">
                    <div class="left">
                        <img :src="item.img">
                    </div>
                    <div class="middle">
                        <div class="word">
                            <div class="title">{{item.title}}</div>
                            <div class="info">2019{{item.title}}({{item.num}}个)</div>
                        </div>
                        <div class="time">{{item.time}}</div>
                    </div>
                    <div class="right">
                        <van-icon name="arrow" />
                    </div>
                </div>
            </div>
        </van-pull-refresh>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { PullRefresh  } from 'vant';

    Vue.use(PullRefresh);
    export default {
        name: "competition",
        data(){
            return{
                list:[
                    {
                        img:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2697168191,4290719754&fm=11&gp=0.jpg',
                        title:'全明星赛',
                        num:65,
                        time:'12.6-12.8'
                    },
                    {
                        img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3284048269,1975851971&fm=11&gp=0.jpg',
                        title:'全球总决赛',
                        num:354,
                        time:'10.2-11.10'
                    },
                    {
                        img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3387737957,1768974627&fm=26&gp=0.jpg',
                        title:'LPL职业联赛',
                        num:2710,
                        time:'6.1-9.6'
                    },
                    {
                        img:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=4085296534,2545771544&fm=26&gp=0.jpg',
                        title:'洲际系列赛',
                        num:72,
                        time:'7.4-7.7'
                    },
                    {
                        img:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3056279581,2685756900&fm=26&gp=0.jpg',
                        title:'季中冠军赛',
                        num:193,
                        time:'5.1-5.19'
                    },
                    {
                        img:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=559575641,3747344986&fm=26&gp=0.jpg',
                        title:'韩国职业联赛',
                        num:440,
                        time:'6.5-8.13'
                    },
                    {
                        img:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=722018448,900106390&fm=26&gp=0.jpg',
                        title:'发展联赛',
                        num:1553,
                        time:'6.19-9.22'
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
            toVideoList(item,index){
                console.log(item.title)
                this.$store.state.videoTitle = item.title
                this.$router.push({
                    path:'/videoList'
                })
            }
        }
    }
</script>

<style scoped lang="less">
@import "../index";
</style>
