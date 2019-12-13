<template>
    <div class="topic">
        <div class="list">
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                <div class="list-item" v-for="(item,index) in topic">
                    <div class="top">
                        <div class="user">
                            <img :src="item.img">
                        </div>
                        <div class="info">
                            <div class="name">{{item.name}}</div>
                            <div class="other">
                                <div class="level">{{item.level}}</div>
                                <div class="sex">{{item.sex}}</div>
                                <div class="game">{{item.game}}</div>
                                <div class="time">{{item.time}}</div>
                            </div>
                        </div>
                        <div class="close" @click="closeItem(item,index)">
                            <van-icon name="delete" />
                        </div>
                    </div>
                    <div class="middle">
                        {{item.content}}
                    </div>
                    <div class="bottom">
                        <div class="fabiao" @click="topicBtn(item,index)">
                            <div class="icon-box">
                                <van-icon name="comment-o" size="16" />
                            </div>
                            <span class="num">{{item.message.length}}</span>
                        </div>
                        <div class="dianzan"  :class="{'active':item.choseNum>0}" @click="dianzan(item,index)">
                            <div class="icon-box">
                                <van-icon name="thumb-circle-o" size="16" />
                            </div>
                            <span class="num">{{item.choseNum}}</span>
                        </div>
                    </div>
                    <div class="discuss" v-if="item.message.length>0">
                        <p class="title">最新评论：</p>
                        <p class="words" v-for="(msg,index) in item.message">{{`第${index+1}条：${msg}`}}</p>
                    </div>
                </div>
            </van-pull-refresh>
        </div>
        <div v-if="topicShow" class="input">
            <van-cell-group>
                <van-field
                        v-model="message"
                        center
                        clearable
                        @input="getMessage"
                >
                    <van-button slot="button" size="small" type="primary" @click="addTopic()">{{btnText}}</van-button>
                </van-field>
            </van-cell-group>
        </div>

        <van-dialog
                v-model="deleteShow"
                title="是否要删除该条帖子？"
                show-cancel-button
                @confirm="confirm"
        >
        </van-dialog>

    </div>
</template>

<script>
    import user from '../../../assets/img/user.jpg'
    import Vue from 'vue';
    import { PullRefresh, Toast,Dialog  } from 'vant';

    Vue.use(PullRefresh).use(Toast).use(Dialog);
    export default {
        name: "topic",
        data(){
            return{
                topic:[
                    {
                        img:user,
                        name:'不管多远一起走',
                        level:'Lv5',
                        sex:'男',
                        game:'黄金IV',
                        time:'11-29',
                        content:'发表的内容',
                        choseNum:0,
                        message:[
                            '评论'
                        ]
                    },
                    {
                        img:user,
                        name:'不管多远一起走',
                        level:'Lv5',
                        sex:'男',
                        game:'黄金IV',
                        time:'11-29',
                        content:'发表的内容',
                        choseNum:0,
                        message:[

                        ]
                    },
                    {
                        img:user,
                        name:'不管多远一起走',
                        level:'Lv5',
                        sex:'男',
                        game:'黄金IV',
                        time:'11-29',
                        content:'发表的内容',
                        choseNum:0,
                        message:[
                            '新的看法'
                        ]
                    },
                    {
                        img:user,
                        name:'不管多远一起走',
                        level:'Lv5',
                        sex:'男',
                        game:'黄金IV',
                        time:'11-29',
                        content:'发表的内容',
                        choseNum:0,
                        message:[

                        ]
                    },
                    {
                        img:user,
                        name:'不管多远一起走',
                        level:'Lv5',
                        sex:'男',
                        game:'黄金IV',
                        time:'11-29',
                        content:'发表的内容',
                        choseNum:0,
                        message:[
                            '觉得不错'
                        ]
                    },
                ],
                isLoading: false,
                message:'',
                btnText:'取消',
                topicShow:false,
                topicIndex:-1,
                deleteShow:false,
                deleteIndex:0
            }
        },
        methods:{
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.topic.unshift(this.topic[Math.round(Math.random()*5)])
                }, 500);
            },
            closeItem(item,index){
                this.deleteIndex = index
                this.deleteShow = true
            },
            confirm(){
                console.log('删除')
                this.topic.splice(this.deleteIndex,1)
            },
            topicBtn(item,index){
                this.topicShow = true
                this.topicIndex = index

            },
            getMessage(value){
                if(value&&value.length>0){
                    this.btnText = '发送'
                } else {
                    this.btnText = '取消'
                }
            },
            addTopic(){
                if(this.message.length>0){
                    this.topic[this.topicIndex].message.push(this.message)
                    this.message = ''
                    this.btnText = '取消'
                    Toast('评论发表成功')
                    this.topicShow = false
                } else {
                    this.topicShow = false
                }
            },
            dianzan(item,index){
                item.choseNum+=1
            }
        }
    }
</script>

<style scoped lang="less">
@import "../index";
</style>
