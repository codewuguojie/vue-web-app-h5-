<template>
    <div class="zhenrong">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="list">
                <div class="list-item" v-for="(item,index) in list">
                    <div class="top">【{{item.name}}】</div>
                    <div class="middle">
                        <img :src="item.zimg">
                    </div>
                    <div class="bottom">
                        <div class="hot">热度:{{item.hot}}星</div>
                        <div class="person">{{item.person}}</div>
                        <div class="show" @click="toggle(item,index)">
                            <p class="show-word">{{item.show?'折叠':'展开'}}</p>
                            <van-icon name="arrow-down" v-if="!item.show" style="line-height: 34px" />
                            <van-icon name="arrow-up" v-if="item.show" style="line-height: 34px" />
                        </div>
                    </div>
                    <div class="people" v-if="item.show">
                        <img :src="item.ximg">
                    </div>
                </div>
            </div>
        </van-pull-refresh>
    </div>
</template>

<script>
    import z1 from '../../../../assets/img/z1.png'
    import z2 from '../../../../assets/img/z2.png'
    import z3 from '../../../../assets/img/z3.png'
    import z4 from '../../../../assets/img/z4.png'
    import x1 from '../../../../assets/img/x1.jpg'
    import x2 from '../../../../assets/img/x2.jpg'
    import x3 from '../../../../assets/img/x3.jpg'
    import x4 from '../../../../assets/img/x4.jpg'
    import Vue from 'vue';
    import { PullRefresh  } from 'vant';

    Vue.use(PullRefresh);
    export default {
        name: "zhenrong",
        data(){
            return{
                isLoading: false,
                list:[
                    {
                        name:'小泽全明星吃鸡剑刺',
                        zimg:z1,
                        hot:3,
                        person:'斗鱼|卑微小泽',
                        ximg:x1,
                        show:false
                    },
                    {
                        name:'极狂守护',
                        zimg:z2,
                        hot:2,
                        person:'快手|欧了',
                        ximg:x2,
                        show:false
                    },
                    {
                        name:'逆向思维梦幻四光剑',
                        zimg:z3,
                        hot:3,
                        person:'快手|欧了',
                        ximg:x3,
                        show:false
                    },
                    {
                        name:'T1最强雷霆劫',
                        zimg:z4,
                        hot:1,
                        person:'斗鱼|山东棋王弈哥',
                        ximg:x4,
                        show:false
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
            toggle(item,index){
                item.show = !item.show
            }
        }
    }
</script>

<style scoped lang="less">
@import "../index";
</style>
