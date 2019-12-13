<template>
    <div class="privacy">
        <van-nav-bar title="隐私设置" left-text="返回" left-arrow @click-left="back"></van-nav-bar>
        <div class="list">
            <div class="form">
                <p class="title">加好友</p>
                <div class="item">
                    <div class="item-one" style="border-bottom: 1px solid #ccc;padding: 5px 0;">
                        <div class="left">
                            <h5 class="label">将我推荐给QQ好友</h5>
                        </div>
                        <div class="right">
                            <van-switch v-model="checked" active-color="#07c160" inactive-color="#cccccc" />
                        </div>
                    </div>
                    <div class="item-one">
                        <div class="left">
                            <h5 class="label">允许任何人加我好友</h5>
                        </div>
                        <div class="right">
                            <van-switch v-model="checked" active-color="#07c160" inactive-color="#cccccc" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="form">
                <p class="title">动态</p>
                <div class="item">
                    <div class="item-one" style="border-bottom: 1px solid #ccc;padding: 5px 0;">
                        <div class="left">
                            <h5 class="label">显示好友动态入口</h5>
                        </div>
                        <div class="right">
                            <van-switch v-model="checked" active-color="#07c160" inactive-color="#cccccc" />
                        </div>
                    </div>
                    <div class="item-one" style="border-bottom: 1px solid #ccc;padding: 5px 0;">
                        <div class="left">
                            <h5 class="label">不看Ta的动态</h5>
                        </div>
                        <div class="right" style="line-height: 30px">
                            <van-icon name="arrow" />
                        </div>
                    </div>
                    <div class="item-one" style="border-bottom: 1px solid #ccc;padding: 5px 0;">
                        <div class="left">
                            <h5 class="label">不让Ta看我的动态</h5>
                        </div>
                        <div class="right" style="line-height: 30px">
                            <van-icon name="arrow" />
                        </div>
                    </div>
                    <div class="item-one" style="border-bottom: 1px solid #ccc;padding: 5px 0;">
                        <div class="left">
                            <h5 class="label">特别关注</h5>
                        </div>
                        <div class="right" style="line-height: 30px">
                            <van-icon name="arrow" />
                        </div>
                    </div>
                    <div class="item-one">
                        <div class="left">
                            <h5 class="label">允许系统发的动态类型</h5>
                        </div>
                        <div class="right" style="line-height: 30px">
                            <van-icon name="arrow" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="form">
                <p class="title">玩家印象</p>
                <div class="item">
                    <div class="item-one" style="border-bottom: 1px solid #ccc;padding: 5px 0;">
                        <div class="left">
                            <h5 class="label">允许任何人给我添加印象</h5>
                        </div>
                        <div class="right">
                            <van-switch v-model="checked" active-color="#07c160" inactive-color="#cccccc" />
                        </div>
                    </div>
                    <div class="item-one">
                        <div class="left">
                            <h5 class="label">黑名单</h5>
                        </div>
                        <div class="right" style="line-height: 30px">
                            <van-icon name="arrow" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Switch, Picker } from 'vant';
    Vue.use(Switch).use(Picker);
    export default {
        name: "privacy",
        data(){
          return{
              checked:true
          }
        },
        methods:{
            back(){
                history.back()
            },
        }
    }
</script>

<style scoped lang="less">
@import "./index";
</style>
