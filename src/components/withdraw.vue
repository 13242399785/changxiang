<template>
  <div class="withdraw  animated slideInRight">
      <div class="earnings_wapper">
          <p class="keti">可提现&nbsp;(元)</p>
          <h2>{{teams}}
              <router-link to="bind">
                  <span class="tixian bang">绑定手机</span>
              </router-link>
          </h2>    
      </div>
      <div class="nation">
          <div class="ctitle clearfix">提现金额</div>
          <div class="bindinput clearfix">
              <span>提现金额：</span><input type="number" maxlength="12" v-model="mony" placeholder="请输入提现金额">
          </div>
          <div class="bindinput bingbtn onbind clearfix"  @click="counts">
              确认提现 
          </div>  
      </div>
      <!-- 提现失败 -->
      <transition name="fadein">
        <div class="popshow" v-if="tinone">
            请先绑定手机号码，即可提现
        </div>
      </transition>
      <routerb></routerb>
  </div>
</template>
<script>
import routerb from './routerb/routerb';
export default {
    name:'withdraw',
    data(){
        return{
            teams:'0',
            tinone:false,
            mony:''
        }
    },
    components:{
        routerb
    },
    methods:{
        counts(){
            // alert('提现')
            if(this.teams=='0'){
                this.tinone=true;
            }
        }
    },
    watch:{
        'tinone':function(){
            var that=this;
            if(this.tinone==true){
                setTimeout(function(){
                        that.tinone=false;
                },3000)
            }else{
                return false
            }
        }
    }
}
</script>
<style lang="scss">
    @import '../../static/scss/common.scss';
    .withdraw{
        background:#EEEEEE;
       height: 100%; 
       .nation{
           padding:pxt(5px) pxt(15px) pxt(5px) pxt(15px);
           .bingbtn{
                text-align: center;
                margin-top: pxt(10px);
            }
            .onbind{
                background:#292B2C;
                color: #FBDC95;
            }
       }
       .bindinput{
           font-size: pxt(14px);
            color: #000;
            overflow: hidden;
            padding: 0 pxt(15px);
            height: pxt(45px);
            background: #FFFFFF;
            border-radius: 100px;
            margin-bottom: pxt(15px);
            line-height: pxt(45px);
            span{
                display: inline-block;
                padding-right: pxt(5px);
            }
            input{
                font-size: pxt(14px);
                line-height: pxt(45px);
                border: none;
                width:68%;
            } 
        }
    }
</style>
