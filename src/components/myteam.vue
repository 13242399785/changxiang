<template>
  <div class="myteam">
      <div class="earnings_wapper">
          <p class="keti">我的团队</p>
          <h2>{{teams}}
              <!-- <span class="tixian">去提现</span> -->
          </h2>
          <div v-show="teamlist.length>0">
                <p class="team_bt team_margin">推荐人：海阔天空</p>
                <p class="team_bt"><span>微信号：{{copys}} </span><span class="teamcopy" v-clipboard:copy="copys" v-clipboard:success="copy">复制</span></p>
          </div>      
      </div>
      <div class="myteam_body">
            <div class="trvelnav clearfix">
                <ul>
                    <li v-for="(todo,index) in trevel" @click='trvelChange(index,$event)' :key="index" :class='{trvelactive:index==curent}'>
                        {{todo.text}}
                    </li>
                </ul>
            </div>
            <!-- 有数据 -->
            <ul class="clearfix teamlist animated" :class='{fadeInUp:fadeshow}'>
                <li v-for="(item,index) in teamlist" :key="index">
                    <div class="fl touxiang">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="fl detial">
                        <p class="teamname">{{item.name}}</p>
                        <span class="teamshow">{{item.huiyuan}}</span>
                    </div>
                </li>
            </ul>
            <!-- 没有数据 -->
            <div class="teamnone animated" v-show="teamlist.length==0">
                <p class="none">暂无成员</p>
                <p class="teamyao">马上去邀请</p>
            </div>
      </div>
      <routerb></routerb>
  </div>
</template>
<script>
import routerb from './routerb/routerb'
export default {
    name:'myteam',
    data(){
        return{
            teams:8,
            curent:0,
            trevel:[
                {text:'全部'},{text:'直属粉丝'},{text:'直属粉丝下级'}
            ],
            copys:'13245785965',
            teamlist:[
                {name:'可惜不是你',img:'',huiyuan:'超级会员'},
                {name:'可惜不是你',img:'',huiyuan:'超级会员'},
                {name:'可惜不是你',img:'',huiyuan:'超级会员'},
                {name:'可惜不是你',img:'',huiyuan:'超级会员'},
                {name:'可惜不是你',img:'',huiyuan:'超级会员'},
                {name:'可惜不是你',img:'',huiyuan:'超级会员'},
                {name:'可惜不是你',img:'',huiyuan:'超级会员'},
                {name:'可惜不是你',img:'',huiyuan:'超级会员'},
                {name:'可惜不是你',img:'',huiyuan:'超级会员'},
                {name:'可惜不是你',img:'',huiyuan:'超级会员'},
            ],
            fadeshow:false
        }
    },
    methods:{
        trvelChange(i,e){
            var that=this;
            if(this.fadeshow==false){
                this.fadeshow=true;
            }else{
                // setTimeout(function(){
                    this.fadeshow=false;
                // },200)
                setTimeout(function(){
                    that.fadeshow=true;
                },20)
            }
            this.curent=i;  
           var el = event.currentTarget;
        },
        copy(){

            alert('成功复制到粘贴板！')

        }
    },
    mounted(){
        this.teams=this.teamlist.length;
    },
    components:{
        routerb
    },
}
</script>
<style>
    @import '../../static/css/animate.css';
</style>
<style lang="scss">
    @import '../../static/scss/common.scss';
    .myteam{
        .myteam_body{ 
            .teamlist{
                overflow: hidden;
                padding: 0 pxt(15px);
                padding-bottom:pxt(44px);
                li{
                    overflow: hidden;
                    font-size: 0;
                    margin-bottom: pxt(30px);
                    .touxiang{
                        width: pxt(50px);
                        height:pxt(50px);
                        background:#F2F2F2;
                        border-radius: 50%;
                        img{
                            width: 100%;height: 100%;
                        }
                    }
                    .detial{
                        margin-left: pxt(10px);
                        .teamname{
                            font-weight: bold;
                            font-size: pxt(13px);
                            color: #333;
                            line-height: pxt(19px);
                            margin-bottom: pxt(5px);
                        }
                    }
                    .teamshow{
                        background: #FBDC95;
                        border-radius: 100px;
                        width: pxt(66px);
                        height: pxt(20px);
                        line-height: pxt(20px);
                        text-align: center;
                        font-size: pxt(11px);
                        color:#262727;
                        display: inline-block;
                    }
                }
            }
            .teamnone{
                text-align: center;
                // margin-bottom: pxt(44px);
                position: absolute;
                bottom: pxt(74px); 
                left: 50%;
                transform: translateX(-50%);
                .none{
                    font-size: pxt(15px);
                    color: #999;
                    line-height: pxt(21px);
                    margin-bottom: pxt(5px);
                }
                .teamyao{
                    background-image: linear-gradient(-180deg, #2F3334 0%, #222222 100%);
                    border-radius: 100px;
                    width: pxt(250px);
                    height: pxt(35px);
                    color: #FBDC95;
                    font-size: pxt(18px);
                    line-height: pxt(35px);
                    margin: auto;
                }
            }
        }
    }
</style>
