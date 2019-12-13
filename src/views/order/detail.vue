<template>
    <div class="detail">
        <van-nav-bar title="订单详情" left-text="返回" @click-left="back" left-arrow/>
        <div class="content">
            <div class="top">
                <img :src="this.$store.state.order.img">
                <div class="text">{{this.$store.state.order.text}}</div>
                <div class="status" :class="{'status1':this.$store.state.order.status===0,'status2':this.$store.state.order.status===1,'status3':this.$store.state.order.status===2}">{{this.$store.state.order.status===0?'已取消':this.$store.state.order.status===1?'待支付':this.$store.state.order.status===2?'已完成':''}}</div>
            </div>
            <div class="middle">
                <div class="label">商品价格</div>
                <div class="money">{{this.$store.state.order.money}}</div>
            </div>
        </div>
        <div class="title">订单详情</div>
        <div class="info">
            <div class="form">
                <div class="label">订单编号：</div>
                <div class="num">LOL-{{randomn(10)}}-991</div>
            </div>
            <div class="form">
                <div class="label">订单时间：</div>
                <div class="num">{{this.$store.state.order.time}}</div>
            </div>
            <div class="form">
                <div class="label">购买账号：</div>
                <div class="num">不管多远一起走（扭曲丛林）</div>
            </div>
            <div class="form">
                <div class="label">支付方式：</div>
                <div class="num">人民币</div>
            </div>
            <div class="form">
                <div class="label">礼券优惠：</div>
                <div class="num">无</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detail",
        methods: {
            back() {
                this.$router.push({
                    path:'/order'
                })
            },
            randomn(n) {
                if (n > 21) return null
                let re =new RegExp("(\\d{" + n + "})(\\.|$)")
                let num = (Array(n-1).join(0) + Math.pow(10,n) * Math.random()).match(re)[1]
                return num
            }
        },
        mounted() {
            console.log('当前订单',this.$store.state.order)
        }
    }
</script>

<style scoped lang="less">
@import "./index";
</style>
