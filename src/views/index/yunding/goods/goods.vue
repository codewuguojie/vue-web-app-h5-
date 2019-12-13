<template>
    <div class="goods">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="list">
                <img src="../../../../assets/img/goods.jpg">
            </div>
        </van-pull-refresh>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { PullRefresh  } from 'vant';

    Vue.use(PullRefresh);
    export default {
        name: "goods",
        data(){
            return{
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
