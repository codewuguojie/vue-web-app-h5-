<template>
    <div class="topic">
        <div class="list">
            <div class="list-item" v-for="(item,index) in list" @click="toDetail(item,index)">
                <div class="left">
                    <div class="text">{{item.text}}</div>
                    <div class="title">{{item.title}}</div>
                </div>
                <div class="right">
                    <img :src="item.img">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "topic",
        data(){
            return{
                list:[
                    {
                        text:'每日一笑：疾风之墙可以抵挡一切',
                        title:'每日一笑',
                        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575382648047&di=949e9878db49c7afea15ab99f31f46f9&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Frushidao%2Fpics%2Fhv1%2F209%2F11%2F1725%2F112171139.jpg',
                        link:'http://qt.qq.com/php_cgi/news/php/varcache_recommendarticle.php?id=&doc_type=0&docid=1574721596358821521&areaid=20&version=$PROTO_VERSION$'
                    },
                    {
                        text:'每日一笑：疾风之墙可以抵挡一切',
                        title:'每日一笑',
                        img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1575382648047&di=949e9878db49c7afea15ab99f31f46f9&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Frushidao%2Fpics%2Fhv1%2F209%2F11%2F1725%2F112171139.jpg',
                        link:'http://qt.qq.com/php_cgi/news/php/varcache_recommendarticle.php?id=&doc_type=0&docid=1574721596358821521&areaid=20&version=$PROTO_VERSION$'
                    },
                ]
            }
        },
        methods:{
            toDetail(item,index){
                window.location.href = item.link
            }
        }
    }
</script>

<style scoped lang="less">
@import "../index";
</style>
