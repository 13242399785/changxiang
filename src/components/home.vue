<template>
  <div class="homepage">
    <!--slideshow-->
    <div class="swiper-container controlswiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <router-link to="/">
                    <img src="../../static/images/slide01.png" alt="">
                </router-link>    
            </div>
            <div class="swiper-slide">Slide 2</div>
            <div class="swiper-slide">Slide 3</div>
        </div>
        <!--分页器 -->
        <div class="swiper-pagination"></div>
    </div>
    <!-- nav -->
    <div class="navlist clearfix">
        <ul>
            <li v-for="(item,index) in navlist" :key='index'>
                <router-link :to="item.name" @click.native='controlmodal(index)'>
                    <img :src="item.url" alt="">
                    <p :class='footeractive'>{{item.title}}</p>
                </router-link>
            </li>
        </ul>
    </div>
    
    <div class="trvel-list">
        <!-- ad -->
        <div class="ad">
            <router-link to='svip'>
                <img src="../../static/images/banner2.png" alt="">
            </router-link>
        </div>
        <div class="trvelnav clearfix">
            <ul>
                <li v-for="(todo,index) in trevel" @click='trvelChange(index,$event)' :key="index" :class='{trvelactive:index==curent}'>
                    {{todo.text}}
                </li>
            </ul>
        </div>
        <div class="trvelcotent animated" :class='{slideInRight:goright}'>
            <div class="trvellist" v-for="(item,index) in trvellist" :key="index" @click='golist'>
                <img :src="item.img" alt="">
                <p>{{item.title}}</p>
                <div class="clearfix">
                    <span class="trvel-member fl">会员价:￥{{item.svip}}</span>
                    <span class="trvel-original fr">原价:{{item.yj}}</span>
                </div>
            </div>
            <!-- <div class="trvellist">
                <img src="../../static/images/001.png" alt="">
                <p>普吉岛3提娜六日自由行/皇帝6天自由行</p>
                <div class="clearfix">
                    <span class="trvel-member fl">会员价:￥{{3180}}</span>
                    <span class="trvel-original fr">原价:{{5240}}</span>
                </div>
            </div> -->
        </div>
    </div>
    <!-- 二维码弹出 -->
    <div class="modal customization" v-show="custshow">
        <div class="cust-wapper">
            <span class="clone" @click="cloneCust"><img src="../../static/images/Close_icon.png" alt=""></span>
            <p class="cust-tile">定制旅游服务</p>
            <div class="cust_img">
                <img src="" alt="">
            </div>
            <p class="cust_bottom">长按识别二维码 - 添加好友 - 专属顾问服务</p>
        </div>
    </div>
    <div class="footerremote clearfix"></div>
     <!--底部导航 -->
    <footermenu></footermenu>
  </div>
</template>
<script src='../../static/js/swiper/swiper.js'></script>
<script>
import Swiper from 'swiper';
import footermenu from './menu/menub'
export default {
    name:'home',
    components:{
        footermenu
    },
    data(){
        return{
            footeractive:'footeractive',
            navlist: [{title: '会员中心',name:'svip', url: '../../static/images/vip_icon.png'},
                {title: '我要推广 ',name:'popularize', url: '../../static/images/share_icon.png'},
                {title: '目的地 ',name:'bourn', url: '../../static/images/Destination_icon.png'},
                {title: '定制旅游', name:'/',url: '../../static/images/Customized_icon.png'},
            ],
            curent:0,
            trevel:[
                {text:'会员推荐'},{text:'国内'},{text:'境外'}
            ],
            custshow:false,
            trvellist:[
                {
                    img:'../../static/images/001.png',
                    title:'普吉岛3提娜六日自由行/皇帝6天自由行',
                    yj:'5240',
                    svip:'3180'
                },
                {
                    img:'../../static/images/001.png',
                    title:'普吉岛3提娜六日自由行/皇帝6天自由行',
                    yj:'5240',
                    svip:'3180'
                },
            ],
            goright:false,
        }
    },
    mounted(){
        this.$nextTick(() => {
             new Swiper('.swiper-container', {
                loop: true, // 循环模式选项
                autoplay: true,// 自动滑动
                pagination: {
                    el: '.swiper-pagination',
                },
            }) 
        })
        

    },
    methods:{
        golist(){
            this.$router.push('detail/1')
        },
        swiperone(){       
           new Swiper('.swiper-container', {
                loop: true,
                // 如果需要分页器
                pagination: '.swiper-pagination',
                // 如果需要前进后退按钮
                // nextButton: '.swiper-button-next',
                // prevButton: '.swiper-button-prev',
                // 如果需要滚动条
                // scrollbar: '.swiper-scrollbar',
            }) 
        },
        trvelChange(i,e){
            var that=this;
            if(this.goright==false){
                this.goright=true;
            }else{
                // setTimeout(function(){
                    this.goright=false;
                // },200)
                setTimeout(function(){
                    that.goright=true;
                },20)
            }
            // this.goright=true;
            // this.goright=false;
            console.log(this.goright)
            this.curent=i;
             
　　　　　　 //获取点击对象     
           var el = event.currentTarget;
        },
        controlmodal(i){
            // console.log(i)
            if(i==3){
                this.custshow=true;
            }
        },
        cloneCust(){
            this.custshow=false;
        }
    }
}
</script>
<style>
    @import '../../static/css/animate.css';
</style>
<style lang="scss">
    @import '../../static/scss/common.scss';
    @import '../../static/css/swiper.min.css';
    .homepage{
        overflow: hidden;
        // max-width: 750px;
        margin: auto; 
        .controlswiper{
            a{
                img{width: 100%;}
            }
        }
        .swiper-container {
            background:red;
        } 
        .swiper-pagination-bullet{background:rgba(255,255,255,.5);opacity:1;}
        .swiper-pagination-bullet-active{background:#fff;}
        .swiper-pagination-bullet{height: pxt(14px);width:pxt(14px);}
        .trvel-list{
            margin:0 pxt(15px);
            .trvelnav{
                overflow: hidden;
                height: pxt(34px);
                margin:pxt(24px) 0 pxt(18px) 0;
                ul{
                    li{
                        float: left;
                        width: 33.33%;
                        font-size: pxt(18px);
                        color:#999;
                        text-align: center;  
                        position: relative;
                        padding-bottom: pxt(8px);
                        transition: all ease .1s;
                    }
                    .trvelactive{
                        color: #333;
                        font-size: pxt(22px);
                        font-weight: bold;
                        
                    }
                    .trvelactive::after{
                        content:' ';
                        display: block;
                        width: pxt(28px);
                        height:pxt(2px);
                        background:#4EA0FE;
                        // box-shadow: 0 pxt(4px) pxt(2px) #5292FF; 
                        position: absolute;
                        left: 50%;
                        bottom: pxt(-1px);
                        transform: translateX(-50%);
                    }
                }
            }
            .trvelcotent{overflow: hidden;}
            .trvellist{
                margin-bottom: pxt(20px);
                background:#fff;
                box-shadow: pxt(1px) pxt(1px) pxt(2px) #ccc;
                width: 49%;
                float:left;
                img{
                    height: pxt(160px);
                    width: 100%;
                }
                .clearfix{overflow: hidden;padding:0 pxt(7px) pxt(20px) pxt(10px);}
                p{color: #333;font-size: pxt(20px);font-weight: bold;text-align: left;line-height: pxt(24px);margin:pxt(12px) pxt(10px) pxt(10px) pxt(10px);
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    overflow: hidden;
                }
                .trvel-member{color:#E90F0F;font-size:pxt(18px);font-weight: bold;}
                .trvel-original{text-decoration:line-through;text-align: right;display: inline-block; font-size: pxt(14px);vertical-align: bottom}
            }
            .trvellist:nth-child(2n){
                float: right;
            }
        }
    }
    
</style>
