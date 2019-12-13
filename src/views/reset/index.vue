<template>
    <header class="login">
        <!--<van-icon name="point-gift-o" class="orange mt-30 logo"></van-icon>-->
        <div class="logo">
            <img src="../../assets/img/logo-2.png">
        </div>
        <div class="username">
            <van-cell-group>
                <van-field
                        v-model="username"
                        required
                        clearable
                        label="用户名"
                        placeholder="请输入用户名"
                        @click-right-icon="$toast('question')"
                />
            </van-cell-group>
        </div>
        <div class="password">
            <van-cell-group>
                <van-field
                        v-model="oldPassword"
                        type="password"
                        label="旧密码"
                        placeholder="请输入密码"
                        required
                />
            </van-cell-group>
        </div>
        <div class="password">
            <van-cell-group>
                <van-field
                        v-model="newPassword"
                        type="password"
                        label="新密码"
                        placeholder="请输入密码"
                        required
                />
            </van-cell-group>
        </div>
        <div class="password">
            <van-cell-group>
                <van-field
                        v-model="messageCode"
                        center
                        clearable
                        label="短信验证码"
                        required
                        placeholder="请输入短信验证码"
                >
                    <van-button slot="button" size="small" type="primary">发送验证码</van-button>
                </van-field>
            </van-cell-group>
        </div>

        <!-- 登录 -->
        <button class="butt ml-20 mr-20 fff">重置密码</button>
    </header>
</template>

<script>
    import { constants } from "crypto";
    export default {
        data() {
            return {
                username: '',
                oldPassword: '',
                newPassword:'',
                messageCode:''
            };
        },
        methods: {

        }
    };
</script>

<style lang="less" scoped>
    @import "./reset.less";
</style>

