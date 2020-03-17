<template>
  <div class="myearnings">
      <div class="earnings_wapper">
          <p class="keti">可提现&nbsp;(元)</p>
          <h2>{{ernmony}}
              <router-link to="withdraw"><span class="tixian">去提现</span></router-link>
          </h2>
          <ul class="clearfix">
              <li>
                  <p>累计到账&nbsp;(元)</p>
                  <p class="earnum">10000</p>
              </li>
              <li>
                  <p>已提现&nbsp;(元)</p>
                  <p class="earnum">2500</p>
              </li>
              <li>
                  <p>未结算&nbsp;(元)</p>
                  <p class="earnum">400</p>
              </li>
          </ul>
      </div>
      <div class="tongji">
          <div class="yesterdy">
              <div class="ctitle clearfix">昨日日报<span class="fr">&gt;</span></div>
              <ul class="clearfix">
                  <li v-for="(item,index) in yesterday" :key="index">
                      <p class="yestitle">{{item.title}}</p>
                      <p class="yesnum">{{item.text}}</p>
                  </li>
              </ul>
          </div>
          <div class="yesterdy">
              <div class="ctitle clearfix">本月月报<span class="fr">&gt;</span></div>
              <ul class="clearfix">
                  <li v-for="(item,index) in nowmonth" :key="index">
                      <p class="yestitle">{{item.title}}</p>
                      <p class="yesnum">{{item.text}}</p>
                  </li>
              </ul>
          </div>
      </div>
      <routerb></routerb>
  </div>
</template>
<script>
import routerb from './routerb/routerb'
export default {
    name:'earnings',
    data(){
        return{
            ernmony:'100',
            yesterday:[
                {title:'预估收益 (元)',text:'130'},
                {title:'预估普通订单佣金',text:'100'},
                {title:'预估培训佣金',text:'30'},
                {title:'预估红包佣金',text:'0'},
            ],
            nowmonth:[
                {title:'预估收益 (元)',text:'130'},
                {title:'预估普通订单佣金',text:'100'},
                {title:'预估培训佣金',text:'30'},
                {title:'预估红包佣金',text:'0'},
            ],
        }
    },
    components:{
        routerb
    },
}
</script>
<style lang="scss">
    @import '../../static/scss/common.scss';
    .myearnings{
        height: 100%;
        .tongji{
            margin: pxt(5px)  pxt(15px);
            .yesterdy{}
            ul{
                    overflow: hidden;
                    li{
                        float: left;
                        width:50%;
                        .yestitle{
                            color: #999999;
                            font-size: pxt(13px);
                            line-height: pxt(19px);
                        }
                        .yesnum{
                            color: #282A2B;
                            font-size: pxt(18px);
                            line-height: pxt(25px);
                            padding: pxt(5px) 0 pxt(10px);
                            font-weight: bold;
                        }
                    }
                }
        }
    }
</style>
