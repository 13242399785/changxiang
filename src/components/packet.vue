<template>
  <div class="packet">
      <div class="packet-wapper">
          <img src="../../static/images/hb_bg.png" alt="">
          <span class="headi">
              <img src="" alt="">
          </span>
          <p class="packet_person">畅游给你发红包啦</p>
          <span class="open_p">
              <img src="../../static/images/icon@1x.png" alt="" @click='kaih'>
          </span>
          <p class="lingqu">已领取:{{already}}元</p>
          <p class="lingqu residue">今日剩余红包余额:{{residue}}元</p>
      </div>
      <div class="ctitle">分享领红包</div>
      <div class="packet_share clearfix">
          <div class="fl" @click='fenx'>
              <img class="fl share-img" src="../../static/images/share_icon_me.png" alt="">
              <div class="fl">
                  <p class="share-p">分享好友关注公众号</p>
                <p class="share-y">邀请1人关注即可多领一次红包</p>
              </div>
          </div>
          <div class="fr" @click='fenx'>
              <span class="share_btn">分享</span>
          </div>
      </div> 
      <!-- 领取成功 -->
      <div class="modal" v-show="getsucceed">
          <div class="getsucceed">
              <img class="bg" src="../../static/images/gx_bg.png" alt="">
              <p class="lingqu">成功领取到现金红包</p>
              <p class="getmony">{{getmony}}元</p>
              <div class="getjin">
                <el-progress :percentage="50" class='jingdu' :show-text='false' :text-inside="true" :stroke-width="18"></el-progress>
              </div>
              <span class="continueget" @click='comming'>继续领取现金红包</span>
          </div>
          <!-- <el-progress :percentage="50" status="exception"></el-progress> -->
      </div>
      <!-- 领取失败提示-->
      <div class="modal" v-show="getfailure">
          <div class="getfailure">        
              <span class="clone" @click="failureClone"><img src="../../static/images/Close_icon.png" alt=""></span>
              <p class="modal_title">分享继续领取红包</p>
              <div class="guanzhu marguan">分享好友关注公众号</div>
              <div  class="guanzhu">邀请1人关注即可多领取一次红包</div>
              <span class="continueget continueget1" @click='fenx'>继续领取现金红包</span>
          </div>
      </div>  
      <!-- 不是会员 -->
      <div class="modal" v-show="issvip">
          <div class="getfailure">        
              <span class="clone" @click="issvipClone"><img src="../../static/images/Close_icon.png" alt=""></span>
              <p class="modal_title">您还不是会员</p>
              <div class="guanzhu marguan">成为超级会员</div>
              <div  class="guanzhu">才能领取现金红包哦</div>
              <span class="continueget continueget1">立即开通超级会员</span>
          </div>
      </div>
      <!-- 分享领取红包 -->
      <div class="modal" v-show="shareget">
          <div class="shareto"> 
              推广海报       
              <!-- <img src="" alt=""> -->
              <span class="clone" @click="shareClone"><img src="../../static/images/Close_icon.png" alt=""></span>
              <p class="sharebottom">长按图片分享给好友</p>
          </div>
      </div>
      <div class="footerremote clearfix"></div>
      <footermenu></footermenu>
  </div>
</template>
<script>
import footermenu from './menu/menub'
export default {
    name:'packet',
    components:{
        footermenu
    },
    data(){
        return{
            already:3,
            residue:9,
            getmony:3,
            getsucceed:false,//领取成功
            getfailure:false,//领取失败
            issvip:false,
            shareget:false,
        }
    },
    methods:{
        failureClone(){
            this.getfailure=false;
        },
        issvipClone(){
            this.issvip=false;
        },
        shareClone(){
            this.shareget=false;
        },
        kaih(){
          this.getsucceed=true;
        },
        comming(){
          this.getsucceed=false;
          this.getfailure=true;
        },
        fenx(){
          this.getfailure=false;
          this.shareget=true;
        }
    }
}
</script>

<style lang="scss">
    @import '../../static/scss/common.scss';
    .packet{
        padding: pxt(15px);
        overflow: hidden;
        .jingdu{
          height: pxt(13px);
          // width:pxt(250px);
          width: 70%;
          position: absolute;
          left: 50%;
          bottom:26%;
          transform: translateX(-50%);
          .el-progress-bar__inner{
            background: #FFBF4B ;
          }
        }
        .packet-wapper{
            position: relative;
            img{
                width:100%;
            }
            .headi{
                display: inline-block;
                position: absolute;
                // width: pxt(60px);
                // height: pxt(60px);
                width: 17.4%;
                border-radius: 50%;
                overflow: hidden;
                background:#EBCD97;
                left: 50%;
                top:7.5%;
                transform: translateX(-50%);
                img{
                  padding-bottom: 100%;
                }
            }
            .open_p{
                display: inline-block;
                position: absolute;
                width: 27%;
                // width: pxt(130px);
                // height: pxt(130px);
                border-radius: 50%;
                overflow: hidden;
                background:#EBCD97;
                left: 50%;
                top:52%;
                transform: translateX(-50%);
            }
            .packet_person{
                position: absolute;
                font-size: pxt(13px);
                color: #fff;
                left: 50%;
                top:22%;
                transform: translateX(-50%);
            }
            .lingqu{
                font-family: 'PingFangSC-Regular';
               position: absolute;
                font-size: pxt(13px);
                color: #EBCD97;
                left: 50%;
                bottom:pxt(34px);
                transform: translateX(-50%); 
            }
            .residue{bottom: pxt(10px);}
        }
        .packet_share{
            color:#333;
            overflow: hidden;
            .share-img{
                height: pxt(40px);
                width: pxt(40px);
                margin-right: pxt(5px);
            }
            .share-p{
                font-size: pxt(14px);
                line-height: pxt(20px);
            }
            .share-y{
                font-size: pxt(12px);
                color: #999;
                line-height: pxt(17px);
            }
            .share_btn{
                display: inline-block;
                padding-top: pxt(8px);
                border: pxt(1px) solid #979797;
                font-size: pxt(12px);
                border-radius: 20px;
                padding: pxt(8px) pxt(18px);
            }
        }
    }
</style>
