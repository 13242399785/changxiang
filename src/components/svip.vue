<template>
  <div class="svipwapper">
      <div class="svipbody">
        <div class="suppertop">
            <div class="swiper-wrapper">
                <div class="swiper-slide supperlist">
                    <h3>超级会员</h3>
                    <p class="margin-sup">开通终生享受权益</p> 
                    <div class="svipbtn">限时免费开通超级会员</div>
                </div>

                <div class="swiper-slide supperlist">
                    <h3>超级团长</h3>
                    <p class="margin-sup">开通终生享受权益</p> 
                    <div class="svipbtn">限时免费开通超级团长</div>
                </div>
            </div>
        </div>
        <div class="supperlist1">
            <ul>
                <li v-for="(item,index) in supperlist" :key="index">
                   <div class="supperlist-img">
                       <img :src="item.url" alt="">
                   </div>
                   <div class="supperlist-title">{{item.title}}</div>
                   <p class="supperlist-text">{{item.text}}</p>
                </li>
            </ul>
        </div>
        <div class="freesupper" @click='upsucceed=!upsucceed'>
            <p>免费开通超级会员<span>限时</span></p>
        </div>
      </div>
      <div class="equity-wapper">
            <div class="vipequity clearfix" id="quanyi">
                <div class="ctitle clearfix">会员权益-推广奖励</div>
                <p class="margin10"><span class="fl">推广1个超级会员</span><span class="fr">￥30</span></p>
                <p class="margin10"><span class="fl">推广10个超级会员</span><span class="fr">￥300</span></p>
                <p class="margin13"><span class="fl">推广50个超级会员</span><span class="fr">￥150</span></p>
                <p class="margin13"><span class="fl">现金奖励</span><span class="fr onred">现金奖励秒到账-可立即提现</span></p>
                <p class="margin13"><span class="fl">超级会员奖励</span><span class="fr onred">￥1830+晋升超级团长资格</span></p>
            </div>
            <div class="nation">
                <div class="ctitle clearfix">会员权益-每日领取红包</div>
                <!-- ad -->
                <div class="ad">
                    <router-link to='svip'>
                        <img src="../../static/images/banner3.png" alt="">
                    </router-link>
                </div>
            </div>
            <div class="nation">
                <div class="ctitle clearfix">会员权益-全国旅游卡</div>
                <div class="memberbg">
                    <h2>点击领取全国旅游卡</h2>
                    <p>2000+旅游景点免费旅游</p>
                </div>
            </div>
            <div class="nation">
                <div class="ctitle clearfix">会员权益-超级会员价</div>
                <div class="memberbg">
                    <h2>会员精选推荐旅游产品</h2>
                    <p>超低折扣价，旅游就选最实惠的平台</p>
                </div>
            </div>
            <div class="vipequity clearfix">
                <div class="ctitle clearfix">超级会员到底有多划算</div>
                <p class="margin15"><span class="fl">推广奖励</span><span class="fr">￥1830</span></p>
                <p class="margin15"><span class="fl">现金红包</span><span class="fr">每天可领</span></p>
                <p class="margin15"><span class="fl">全国旅游卡</span><span class="fr">￥500</span></p>
                <p class="margin15"><span class="fl">自购省钱</span><span class="fr">60%返利</span></p>
                <p class="margin15"><span class="fl">下级返利</span><span class="fr">60%返利</span></p>
                <p class="margin15"><span class="fl">超级会员价</span><span class="fr">最低1折旅游</span></p>
                <p class="margin15"><span class="fl">总价值</span><span class="fr onred">￥价值2330+会员权益</span></p>
            </div>
            <div class="super_b" >
                <h3>成为超级会员、享受以上特权</h3>
                <div class="freesupper"  @click='upsucceed=!upsucceed'>  
                    <p>免费开通超级会员
                        <span>限时</span>
                    </p>
                </div>
            </div>
      </div>
      <!-- 升级成功 -->
      <div class="modal" v-show="upsucceed">
          <div class="getsucceed">
              <img class="bg" src="../../static/images/gx_bg.png" alt="">
              <p class="upsucceed">升级为超级会员</p>
              <p class="succeed-text">终生享受权益</p>
              <span class="continueget" @click="lookQ">查看会员权益</span>
          </div>
      </div>
      <div class="footerremote clearfix"></div>
      <footermenu></footermenu>
  </div>
</template>
<script>
import footermenu from './menu/menub';
import Swiper from 'swiper';
export default {
    name:'svip',
    components:{
        footermenu
    },
    data(){
        return{
            //团长
            // supperlist:[
            //     {title:'团队分红',text:'无极限团队抽成',url:'',i:0},
            //     {title:'45元现金奖励',text:'推荐一个超级会员',url:'',i:1},
            //     {title:'现金红包福利',text:'每日领红包',url:'',i:2},
            //     {title:'全国旅游卡',text:'2000+景点',url:'',i:3},
            //     {title:'自购省钱',text:'60%返利',url:'',i:4},
            //     {title:'下级返利',text:'30%下级返利',url:'',i:5},
            //     {title:'超级会员价',text:'特惠折扣',url:'',i:6},
            // ],
            supperlist:[
                {title:'30元现金奖励',text:'推荐一个超级会员',url:'',i:0},
                {title:'现金红包福利',text:'每日领取红包',url:'',i:1},
                {title:'全国旅游卡',text:'2000+景点',url:'',i:2},
                {title:'自购省钱',text:'60%返利',url:'',i:3},
                {title:'下级返利',text:'30%下级返利',url:'',i:2},
                {title:'超级会员价',text:'特惠折扣',url:'',i:5},
            ],
            upsucceed:false

        }
    },
    mounted(){
        var that=this;
        this.$nextTick(() => {
            var swiper=new Swiper('.suppertop', {
                // slidesPerView :'auto',
                // spaceBetween: 5,
                centeredSlides: true,
                // slidesOffsetBefore : 60,
                loop: false,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                on: {
                    slideChangeTransitionStart: function(){
                      that.$router.push('svipt')
                    },
                },
            }) 
        })
    },
    methods:{
        lookQ(){
            this.upsucceed=false;
            document.getElementById("quanyi").scrollIntoView()
        }
    }
}
</script>
<style>
    @import '../../static/css/animate.css';
</style>
<style scoped lang="scss">
    @import '../../static/scss/common.scss';
    .svipwapper{
        // height: 100%;
        position: relative;
        .svipbody{
            padding:pxt(15px) 0 pxt(30px) 0;
            background-image: linear-gradient(-180deg, #2F3334 0%, #222222 100%);
        }
        .suppertop{
            font-size: 0;
            overflow: hidden;
            white-space: nowrap;
            padding-left: pxt(15px);
            .swiper-slide{
                height: 100% !important;
                width: 100% !important;
            }
            .supperlist{
                padding:pxt(10px) pxt(10px) pxt(6px) pxt(15px);
                display: inline-block;
                margin-right: pxt(15px); 
                width: pxt(300px) !important;
                height: pxt(120px) !important;
                overflow: hidden;
                border-radius: pxt(4px);
                background-image: url('../../static/images/vip_bg.png');
                background-size: cover;
                h3{
                    font-size: pxt(24px);
                }
                p{
                    font-size: pxt(13px);
                }
                .margin-sup{
                    margin: pxt(10px) 0 pxt(13px) 0;
                }
                .svipbtn{
                    color: #FBDC95;
                    width: pxt(243px);
                    height: pxt(33px);
                    line-height: pxt(33px);
                    padding-left: pxt(15px);
                    background-image: linear-gradient(-90deg, #2F3334 0%, #222222 100%);
                    border-radius: 100px;
                    font-size: pxt(13px);
                }
            }
        }
        .equity-wapper{
            padding: 0 pxt(15px);
            .super_b{
                text-align: center;
                padding-bottom: pxt(75px);
                h3{font-size: pxt(17px);line-height: pxt(24px);color: #333;padding:pxt(35px) 0 pxt(10px) 0; }
            }
        }
    }
</style>
