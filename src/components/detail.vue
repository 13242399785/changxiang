<template>
  <div class="listdetail">
        <!--slideshow-->
        <div class="swiper-container controlswiper ">
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
        <div class="detail_body">
            <h3 class="detail_title">
                {{foodtitle}}
            </h3>
            <div class="showvip clearfix" @click="gosvip">
                <span class="zhuanimg fl">
                    <img src="../../static/images/vip_icon1.png" alt="">
                </span>
                <span class="youhui fl">现在升级VIP，本商品可优惠{{youhui}}元</span>
                <span class="dredge fr">立即开通</span>
            </div>
            <div class="vipequity clearfix">
                <div class="ctitle clearfix">产品说明</div>
                <p class="margin25"><span class="fl">目的地</span><span class="fr frc">{{list.bourn}}</span></p>
                <p class="margin25"><span class="fl">行程天数</span><span class="fr frc">{{list.day}}</span></p>
                <p class="margin15"><span class="fl">行程人数</span><span class="fr frc">{{list.personal}}</span></p>
            </div> 
            <div class="present">
                <div class="ctitle clearfix">图文介绍</div>
                <div class="present-wapper">
                    <img src="../../static/images/slide01.png" alt="">
                    <img src="../../static/images/slide01.png" alt="">
                    <img src="../../static/images/slide01.png" alt="">
                    <img src="../../static/images/slide01.png" alt="">
                </div>
            </div>
        </div>
        <div class="detail_footer">
            <ul>
                <li class="fl"  @click="cloneD">
                    <p class="kefuimg"><img src="../../static/images/cs_icon.png" alt=""></p>
                    <p>客服</p>
                </li>
                <li class="fl">
                    <div class="de-btn"  @click="cloneD">
                        <p class="detitel">￥<span class="yuanjia">4900</span></p>
                        <p>原价</p>
                    </div>  
                </li>
                <li class="fr ">
                    <div class="de-btn de-vip"  @click="gosvip">
                        <p class="detitel">￥<span class="yuanjia">2450</span></p>
                        <p>超级会员价</p>
                    </div>
                </li>
            </ul>
        </div>
        <!-- 二维码弹出 -->
        <div class="modal customization" v-show="kefushow">
            <div class="cust-wapper">
                <span class="clone" @click="cloneD"><img src="../../static/images/Close_icon.png" alt=""></span>
                <p class="cust-tile">专属顾问</p>
                <div class="cust_img">
                    <img src="../../static/images/timg.jpg" alt="">
                </div>
                <p class="cust_bottom">长按识别二维码 - 添加好友 - 专属顾问服务</p>
            </div>
        </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    name:'detail',
    data(){
        return{
            foodtitle:'商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题商品标题',
            list:{
                bourn:'桂林，秀峰区，目的地',
                day:'3天2晚',
                personal:'3人',
            },
            youhui:'2450' ,
            kefushow:false
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
        if(this.foodtitle.length>36){
            this.foodtitle=this.foodtitle.substring(0,36)+'...'
        }else{
            this.foodtitle=this.foodtitle;
        }
    },
    methods:{
        gosvip(){
            this.$router.push({name:'svip'})
        },
        cloneD(){
            this.kefushow=!this.kefushow;
        }
    },
    watch:{
        'foodtitle':function(){ 
            if(this.foodtitle.length>36){
                this.foodtitle=this.foodtitle.substring(0,36)+'...'
            }else{

            }
        }
    }
}
</script>
<style lang="scss">
    @import '../../static/scss/common.scss';
    @import '../../static/css/swiper.min.css';
    .listdetail{
        overflow: hidden;
        .controlswiper{
            a{
                img{width: 100%;}
            }
        }
        .swiper-container {
            // height: pxt(300px);
            background:red;
        } 
        .swiper-pagination-bullet{background:rgba(255,255,255,.5);opacity:1;}
        .swiper-pagination-bullet-active{background:#fff;}
        .swiper-pagination-bullet{height: pxt(14px);width:pxt(14px);}
        .detail_body{
            padding: pxt(15px);
            .detail_title{
                font-family: 'PingFangSC-Medium';
                color: #2C2F30;
                font-size: pxt(19px);
                line-height: pxt(24px);
            }
            .showvip{
                background-image: linear-gradient(-180deg, #2F3334 0%, #222222 100%);
                border-radius: 8px;
                height: pxt(44px);
                line-height: pxt(44px);
                overflow: hidden;
                margin: pxt(15px) 0;
                padding: 0 pxt(10px);
                .zhuanimg{
                    height: pxt(30px);
                    width: pxt(30px);
                    padding-top:pxt(7px) ;
                    padding-right: pxt(5px);
                    img{
                        width: 100%;
                        // height: 100%;
                    }
                }
                .youhui{
                    color: #FBDC95;
                    font-weight: bold;
                    font-size: pxt(13px);
                    display: inline-block;
                }
                .dredge{
                    font-weight: bold;
                    background: #FBDC95;
                    border-radius: 100px;
                    font-size: pxt(13px);
                    color: #2C2F30;
                    line-height: pxt(13px);
                    margin-top: pxt(8px);
                    padding: pxt(7px) pxt(8px);
                }
            }
            .present{
                padding-bottom: pxt(46px);
                .present-wapper{
                    font-size: 0;
                    width: 100%;
                    img{
                        width: 100%;
                        margin-bottom: pxt(10px);
                    }
                }
            }
        }
        .detail_footer{
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: pxt(46px);
            z-index: 99;
            border-top: pxt(1px) solid #ccc;
            background: #fff;
            padding: pxt(4px) pxt(15px);
            ul{
                overflow: hidden;
                height: 100%;
                li{
                    height: 100%;
                    font-size: pxt(12px);
                    width: 33.33%;
                    float: left;
                   .kefuimg{
                       
                       img{
                            width: pxt(20px);
                            height: pxt(20px);
                       }     
                    }
                    .detitel{
                        line-height: pxt(14px);
                        padding-top: pxt(5px);
                        span{
                            font-weight: bold;
                            font-size: pxt(16px);
                        }
                    }
                }
                li:nth-child(1){
                    text-align: center;
                }
                li:nth-child(2){
                    padding-right:pxt(5px); 
                }
                .de-btn{
                    height: 100%;
                    background:#d8d8d8;
                    color:#353535;
                    border-radius: 5px;
                    text-align: center;
                }
                .de-vip{
                    background-image: linear-gradient(-180deg, #2F3334 0%, #222222 100%);
                    
                    color:#fadb95;
                }
            }
        }
    }
</style>
