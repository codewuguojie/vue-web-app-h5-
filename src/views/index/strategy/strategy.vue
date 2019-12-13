<template>
    <div class="strategy">
        <div class="navList">
            <div class="nav-item" v-for="(item,index) in navList" :class="{'active':navIndex===index}" @click="navChange(item,index)">
                {{item}}
            </div>
        </div>
        <div class="typeList">
            <div class="type-item" v-for="(item,index) in typeList" :class="{'active':typeIndex===index}" @click="typeChange(item,index)">
                {{item}}
            </div>
        </div>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <div class="hero">
                <div class="hero-list">
                    <div class="hero-item" v-for="(item,index) in list[this.typeIndex]">
                        <div class="num">{{index+1}}</div>
                        <div class="hero-img">
                            <img :src="item.img">
                        </div>
                        <div class="info">
                            <div class="name">{{item.name}}</div>
                            <div class="type">{{item.type}}</div>
                        </div>
                        <div class="win">
                            <div class="win-point">{{item.win}}</div>
                            <div class="word">胜率</div>
                        </div>
                        <div  class="pick">
                            <div class="pick-point">{{item.pick}}</div>
                            <div class="word">登场率</div>
                        </div>
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
        name: "strategy",
        data(){
            return{
                isLoading: false,
                navList:[
                    '综合排名','胜率','登场率','禁用率'
                ],
                navIndex:0,
                typeList:[
                    '上单','打野','中单','下路','辅助'
                ],
                typeIndex:0,
                list:[
                    [
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Darius.png',
                            name:'诺克萨斯之手',
                            win:'51.2%',
                            pick:'24%',
                            type:'上单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Mordekaiser.png',
                            name:'铁铠冥魂',
                            win:'51.69%',
                            pick:'10.55%',
                            type:'上单 中单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Malphite.png',
                            name:'熔岩巨兽',
                            win:'51.23%',
                            pick:'8.9%',
                            type:'上单 中单 辅助 打野'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Garen.png',
                            name:'德玛西亚之力',
                            win:'49.94%',
                            pick:'9.76%',
                            type:'上单 中单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Fiora.png',
                            name:'无双剑姬',
                            win:'48.46%',
                            pick:'12.99%',
                            type:'上单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Riven.png',
                            name:'放逐之刃',
                            win:'49.42%',
                            pick:'9.43%',
                            type:'上单 中单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Gangplank.png',
                            name:'海洋之灾',
                            win:'50%',
                            pick:'7.12%',
                            type:'上单 中单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Singed.png',
                            name:'炼金术士',
                            win:'52.39%',
                            pick:'2.16%',
                            type:'上单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Camille.png',
                            name:'青钢影',
                            win:'49.83%',
                            pick:'5.56%',
                            type:'上单 中单 打野'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Jax.png',
                            name:'武器大师',
                            win:'48.46%',
                            pick:'8.88%',
                            type:'上单 打野'
                        }
                    ],
                    [
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/LeeSin.png',
                            name:'盲僧',
                            win:'48.72%',
                            pick:'36.26%',
                            type:'打野'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Ekko.png',
                            name:'时间刺客',
                            win:'53.36%',
                            pick:'10.37%',
                            type:'打野 中单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/JarvanIV.png',
                            name:'德玛西亚皇子',
                            win:'50.29%',
                            pick:'15.39%',
                            type:'打野 辅助'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Khazix.png',
                            name:'虚空掠夺者',
                            win:'50.77%',
                            pick:'13.51%',
                            type:'打野'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Elise.png',
                            name:'蜘蛛女皇',
                            win:'51.13%',
                            pick:'9%',
                            type:'打野'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Graves.png',
                            name:'法外狂徒',
                            win:'50.16%',
                            pick:'11.38%',
                            type:'打野 上单 中单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Karthus.png',
                            name:'死亡颂唱者',
                            win:'54.02%',
                            pick:'2.7%',
                            type:'打野'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Shaco.png',
                            name:'恶魔小丑',
                            win:'53.36%',
                            pick:'3.32%',
                            type:'打野 辅助'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/MasterYi.png',
                            name:'无极剑圣',
                            win:'51.35%',
                            pick:'6.84%',
                            type:'打野'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Taliyah.png',
                            name:'岩雀',
                            win:'53.51%',
                            pick:'2.51%',
                            type:'上单 打野'
                        }
                    ],
                    [
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Kassadin.png',
                            name:'虚空行者',
                            win:'52.6%',
                            pick:'13.43%',
                            type:'中单 上单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Ryze.png',
                            name:'符文法师',
                            win:'48.77%',
                            pick:'18.33%',
                            type:'中单 上单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Fizz.png',
                            name:'潮汐海灵',
                            win:'51.94%',
                            pick:'7.28%',
                            type:'中单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/AurelionSol.png',
                            name:'铸星龙王',
                            win:'55.05%',
                            pick:'7.28%',
                            type:'中单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Ekko.png',
                            name:'时间刺客',
                            win:'51.49%',
                            pick:'6.33%',
                            type:'打野 中单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Katarina.png',
                            name:'不祥之刃',
                            win:'51.99%',
                            pick:'5%',
                            type:'中单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Mordekaiser.png',
                            name:'铁铠冥魂',
                            win:'54.03%',
                            pick:'1.83%',
                            type:'上单 中单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Vladimir.png',
                            name:'猩红收割者',
                            win:'50.27%',
                            pick:'8.14%',
                            type:'中单 上单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Talon.png',
                            name:'刀锋之影',
                            win:'51.08%',
                            pick:'6.24%',
                            type:'中单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Annie.png',
                            name:'黑暗之女',
                            win:'53.01%',
                            pick:'2%',
                            type:'中单'
                        }
                    ],
                    [
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/MissFortune.png',
                            name:'赏金猎人',
                            win:'53.03%',
                            pick:'14.08%',
                            type:'下路 辅助'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Ashe.png',
                            name:'寒冰射手',
                            win:'52.55%',
                            pick:'14.76%',
                            type:'下路'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Kaisa.png',
                            name:'虚空之女',
                            win:'49.12%',
                            pick:'34.19%',
                            type:'下路'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Vayne.png',
                            name:'暗夜猎手',
                            win:'51.05%',
                            pick:'18.16%',
                            type:'上单 下路'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Senna.png',
                            name:'涤魂圣枪',
                            win:'55.24%',
                            pick:'1.62%',
                            type:'辅助 下路'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Twitch.png',
                            name:'瘟疫之源',
                            win:'53.66%',
                            pick:'4.7%',
                            type:'下路 打野'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Caitlyn.png',
                            name:'皮城女警',
                            win:'49.79%',
                            pick:'13.81%',
                            type:'下路'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Swain.png',
                            name:'诺克萨斯统领',
                            win:'53.58%',
                            pick:'0.72%',
                            type:'辅助 下路 中单 上单'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Jinx.png',
                            name:'暴走萝莉',
                            win:'51.25%',
                            pick:'6.09%',
                            type:'下路'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Lucian.png',
                            name:'圣枪游侠',
                            win:'48.18%',
                            pick:'20%',
                            type:'上单 中路 下路'
                        }
                    ],
                    [
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Janna.png',
                            name:'风暴之怒',
                            win:'53.39%',
                            pick:'11.67%',
                            type:'辅助'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Thresh.png',
                            name:'魂锁典狱长',
                            win:'49.12%',
                            pick:'28.7%',
                            type:'辅助'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Senna.png',
                            name:'涤魂圣枪',
                            win:'52.75%',
                            pick:'11.58%',
                            type:'下路 辅助'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Nautilus.png',
                            name:'深海泰坦',
                            win:'50.56%',
                            pick:'20.28%',
                            type:'上单 中单 辅助'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Leona.png',
                            name:'曙光女神',
                            win:'50.99%',
                            pick:'12.8%',
                            type:'辅助'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Blitzcrank.png',
                            name:'蒸汽机器人',
                            win:'50.65%',
                            pick:'13.19%',
                            type:'辅助'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Taric.png',
                            name:'瓦洛兰之盾',
                            win:'54.23%',
                            pick:'2.4%',
                            type:'辅助'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Shaco.png',
                            name:'恶魔小丑',
                            win:'54.68%',
                            pick:'0.89%',
                            type:'打野 辅助'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Soraka.png',
                            name:'众星之子',
                            win:'50.95%',
                            pick:'6.52%',
                            type:'辅助'
                        },
                        {
                            img:'//game.gtimg.cn/images/lol/act/img/champion/Lulu.png',
                            name:'仙灵女巫',
                            win:'49.91%',
                            pick:'8.05%',
                            type:'辅助 中单'
                        }
                    ]
                ],
            }
        },
        methods:{
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                }, 500);
            },
            navChange(item,index){
                this.navIndex = index
                this.typeIndex = 0
            },
            typeChange(item,index){
                this.typeIndex = index
            },
        },
        mounted() {

        }
    }
</script>

<style scoped lang="less">
@import "../index";
</style>
