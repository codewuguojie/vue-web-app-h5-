<template>
    <div class="operate">
        <van-nav-bar title="感谢您的宝贵意见" left-text="返回" left-arrow @click-left="back"></van-nav-bar>
        <div class="form">
            <van-cell-group>
                <van-field
                        v-model="message"
                        rows="5"
                        autosize
                        type="textarea"
                        maxlength="200"
                        placeholder="请输入留言"
                        show-word-limit
                />
            </van-cell-group>
        </div>
        <div class="btn" @click="submit()">
            提交
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Field,Toast } from 'vant';

    Vue.use(Field).use(Toast);
    export default {
        name: "operate",
        data(){
            return{
                checked:true,
                message:''
            }
        },
        methods:{
            back(){
                history.back()
            },
            submit(){
                if(this.message===''){
                    Toast('请输入您的意见')
                } else {
                    Toast('提交成功，感谢您的宝贵意见')
                }
            }
        }
    }
</script>

<style scoped lang="less">
@import "./index";
</style>
