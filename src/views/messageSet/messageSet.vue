<template>
    <div class="set">
        <van-nav-bar title="消息推送设置" left-text="返回" left-arrow @click-left="back"></van-nav-bar>
        <div class="list">
            <div class="set-group">
                <div class="set-item set-item-one">
                    <div class="left">
                        <h5 class="label">接收消息提醒</h5>
                    </div>
                    <div class="right">
                        <van-switch v-model="checked" active-color="#07c160" inactive-color="#cccccc" />
                    </div>
                </div>
            </div>
            <div class="set-group">
                <div class="set-item">
                    <div class="left">
                        <h5 class="label">夜间防骚扰模式</h5>
                        <p class="taps">开启后，将自动屏蔽23::00-08::00间，不包含好友消息在内的其他提醒</p>
                    </div>
                    <div class="right">
                        <van-switch v-model="checked" active-color="#07c160" inactive-color="#cccccc" />
                    </div>
                </div>
            </div>
            <div class="set-group">
                <div style="border-bottom: 1px solid #ccc;padding:5px 0" class="set-item">
                    <div class="left">
                        <h5 class="label">游戏相关提醒</h5>
                        <p class="taps">MVP、对战助手、段位衰减、游戏任务提醒</p>
                    </div>
                    <div class="right">
                        <van-switch v-model="checked" active-color="#07c160" inactive-color="#cccccc" />
                    </div>
                </div>
                <div style="border-bottom: 1px solid #ccc;padding:5px 0" class="set-item">
                    <div class="left">
                        <h5 class="label">专栏订阅提醒</h5>
                        <p class="taps">订阅专栏更新时的提醒</p>
                    </div>
                    <div class="right">
                        <van-switch v-model="checked" active-color="#07c160" inactive-color="#cccccc" />
                    </div>
                </div>
                <div class="set-item">
                    <div class="left">
                        <h5 class="label">好友消息提醒</h5>
                        <p class="taps">对好友消息的收取进行提醒</p>
                    </div>
                    <div class="right">
                        <van-switch v-model="checked" active-color="#07c160" inactive-color="#cccccc" />
                    </div>
                </div>
            </div>
            <div class="set-group">
                <div style="border-bottom: 1px solid #ccc;padding:5px 0" class="set-item">
                    <div class="left">
                        <h5 class="label">回复提醒</h5>
                        <p class="taps">帖子、评论、动态被回复提醒</p>
                    </div>
                    <div class="right">
                        <van-switch v-model="checked" active-color="#07c160" inactive-color="#cccccc" />
                    </div>
                </div>
                <div style="border-bottom: 1px solid #ccc;padding:5px 0" class="set-item">
                    <div class="left">
                        <h5 class="label">点赞提醒</h5>
                        <p class="taps">帖子、评论、动态被点赞提醒</p>
                    </div>
                    <div class="right">
                        <van-switch v-model="checked" active-color="#07c160" inactive-color="#cccccc" />
                    </div>
                </div>
                <div style="border-bottom: 1px solid #ccc;padding:5px 0" class="set-item">
                    <div class="left">
                        <h5 class="label">被关注提醒</h5>
                        <p class="taps">被掌盟用户关注了</p>
                    </div>
                    <div class="right">
                        <van-switch v-model="checked" active-color="#07c160" inactive-color="#cccccc" />
                    </div>
                </div>
                <div class="set-item" style="padding: 5px 0" @click="showPicker=true">
                    <div class="left" style="width: 65%;">
                        <h5>通知频率</h5>
                    </div>
                    <div class="right" style="display: flex; width: 25%;">
                        <span class="times" style="font-size: 12px; color: #ccc; line-height: 12px">{{times}}</span>
                        <span><van-icon name="arrow" /></span>
                    </div>
                </div>
            </div>
            <div class="set-group">
                <div style="border-bottom: 1px solid #ccc; padding: 5px 0" class="set-item set-item-one">
                    <div class="left">
                        <h5 class="label">声音</h5>
                        <p class="taps"></p>
                    </div>
                    <div class="right">
                        <van-switch v-model="checked" active-color="#07c160" inactive-color="#cccccc" />
                    </div>
                </div>
                <div class="set-item set-item-one">
                    <div class="left">
                        <h5 class="label">震动</h5>
                        <p class="taps"></p>
                    </div>
                    <div class="right">
                        <van-switch v-model="checked" active-color="#07c160" inactive-color="#cccccc" />
                    </div>
                </div>
            </div>
        </div>
        <van-popup v-model="showPicker" position="bottom">
            <van-picker
                    show-toolbar
                    :columns="columns"
                    @cancel="showPicker = false"
                    @confirm="onConfirm"
            />
        </van-popup>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Switch, Picker } from 'vant';

    Vue.use(Switch).use(Picker);
    export default {
        name: "messageSet",
        data(){
            return{
                checked:true,
                times:'间隔2分钟',
                showPicker: false,
                columns: ['间隔0.5分钟', '间隔2分钟', '间隔10分钟', '间隔30分钟']
            }
        },
        methods:{
            back(){
              history.back()
            },
            onConfirm(value) {
                this.times = value;
                this.showPicker = false;
            }
        }
    }
</script>

<style scoped lang="less">
@import "./index";
</style>
