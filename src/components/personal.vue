<template>
  <div class="personal">
      <div class="personal-top">
            <div class="personal_content clearfix">
                <div class="fl">
                    <div class="fl personal_img">
                        <img src="" alt="">
                    </div>
                    <div class="fl">
                        <p class="personal_name hui">会员名称</p>
                        <p class="share-y">
                            <span class="huiyuan pt cj">超级会员</span>
                            <span class="tuijian">推荐人:夏日狂欢</span>
                        </p>
                    </div>
                </div>
                <div class="fr">
                    <router-link to='bind'>
                        <span class="bangp">绑定手机</span>
                    </router-link>
                </div>
            </div>
      </div>
      <!-- 超级会员佣金 -->
      <div class="person_svip">
          <div class="svip_earn">
              <p>累计预估收益</p>
              <h4>{{earnings}}</h4>
              <ul class="clearfix">
                  <li>
                      <p>预估普通订单佣金</p>
                      <p class="monynum">450</p>
                  </li>
                  <li>
                      <p>预估培训佣金</p>
                      <p class="monynum">350</p>
                  </li>
                  <li>
                      <p>预估红包佣金</p>
                      <p class="monynum">50</p>
                  </li>
              </ul>
          </div>
      </div>
      <div class="personal_body">
          <div class="person-c">
                <div class="ctitle clearfix">会员中心</div>
                <!-- 普通 -->
                <!-- <div class="navlist navlist1 mart0 clearfix">
                    <ul>
                        <li v-for="(item,index) in navlist" :key='index'>
                            <router-link :to="item.name" @click.native='controlmodal(index)'>
                                <img :src="item.url" alt="">
                                <p>{{item.title}}</p>
                            </router-link>
                        </li>
                    </ul>
                </div> -->
                <div class="navlist mart0 clearfix">
                    <ul>
                        <li v-for="(item,index) in navlist1" :key='index'>
                            <router-link :to="item.name">
                                <img :src="item.url" alt="">
                                <p>{{item.title}}</p>
                            </router-link>
                        </li>
                    </ul>
                </div>
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
      </div>
      <div class="footerremote clearfix"></div>
      <footermenu></footermenu>
  </div>
</template>
<script>
import footermenu from './menu/menub'
export default {
    name:'personal',
    components:{
        footermenu
    },
    data(){
        return{
            navlist: [{title: '超级会员',name:'svip', url: '../../static/images/cjhy_me_icon.png'},
                {title: '我要推广 ',name:'popularize', url: '../../static/images/share_icon.png'},
                {title: '现金红包 ',name:'packet', url: '../../static/images/hb_icon_me.png'},
            ],
            navlist1: [
                {title: '我的收益',name:'earnings', url: '../../static/images/sy_icon_me.png'},
                {title: '我的团队',name:'myteam', url: '../../static/images/td_icon_me.png'},
                {title: '我要推广 ',name:'popularize', url: '../../static/images/share_icon_me1.png'},
                {title: '现金红包 ',name:'packet', url: '../../static/images/hb_icon_me.png'},
            ],
            earnings:'740.00'
        }
    }
}
</script>
<style lang="scss">
    @import '../../static/scss/common.scss';
    .personal{
        .personal-top{
            width: 100%;
            height: pxt(174px);
            background-image: linear-gradient(-180deg, #2F3334 0%, #222222 100%);
            padding-top: pxt(26px);
            margin-bottom: pxt(30px);
            color: #D8D8D8;
            .personal_img{
                margin: 0 pxt(5px) 0 pxt(15px);
                width: pxt(50px);
                height: pxt(50px);
                background: #ccc;
                border-radius: 50%;
                overflow: hidden;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .personal_name{
                font-size: pxt(17px);
                line-height: pxt(24px);
                font-weight: bold;
            }
            .hui{color: #FBDC95;}
            .huiyuan{
                display: inline-block;
                border-radius: 100px;
                font-size: pxt(10px);
                color: #2B2E2E;
                height: pxt(22px);
                width: pxt(61px);
                text-align: center;
                line-height: pxt(22px);
                margin-right: pxt(4px);
            }
            .pt{background:#D8D8D8 ;}
            .cj{background:#FBDC95 ;}
            .tuijian{
                font-size: pxt(10px);
            }
            .bangp{
                background: #FBDC95;
                border-radius: 22px 0 0 22px;
                color: #2B2E2E;
                font-size: pxt(10px);
                height: pxt(22px);
                width: pxt(62px);
                display: inline-block;
                line-height: pxt(22px);
                text-align: center;
                cursor: pointer;
            }
        }
        .personal_body{
            margin: 0 pxt(15px);
        }
        .person_svip{
            height: pxt(40px);
            position: relative;
            margin:0 pxt(15px);
            .svip_earn{
                padding-top: pxt(20px);
                font-size: pxt(14px);
                color:#2B2E2E;
                text-align: center;
                overflow: hidden;
                position: absolute;
                height:pxt(135px);
                top:pxt(-95px);
                left: 0;
                width: 100%;
                line-height: pxt(12px);
                background-image: linear-gradient(-90deg, #EDD9B6 0%, #D5B783 100%);
                border-radius: 8px;
                h4{
                    font-size: pxt(28px);
                    line-height: (39px);
                }
                ul{
                    margin-top: pxt(10px);
                    overflow: hidden;
                    li{
                        float: left;
                        width: 33.33%;
                        text-align: center;
                    }
                }
                .monynum{
                    line-height: pxt(17px);
                }
            }
        }
    }
</style>
