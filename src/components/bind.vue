<template>
  <div class="bindphone">
      <div class="bindall">
          <div class="bindinput clearfix">
              <span>绑定手机号码：</span><input type="text" maxlength="11" v-model="phone" placeholder="请输入绑定手机号码">
          </div>
          <div class="bindinput mg24 clearfix">
              <span>验证码：</span><input type="text" maxlength="6" v-model="code" placeholder="请输入验证码">
              <span class="fr yanzheng">获取验证码</span>
          </div>
          <div class="bindinput bingbtn  clearfix" :class="{onbind:ison}" @click="count">
              确认绑定手机
          </div>
      </div>
      <routerb></routerb>
  </div>
</template>
<script>
import routerb from './routerb/routerb';
export default {
    name:'bind',
    data(){
        return{
            ison:false,
            phone:'',
            code:''
        }
    },
    components:{
        routerb
    },
    mounted(){
        if(this.phone.length==11&&this.code.length==6){
            this.ison=true;
        }
    },
    methods:{
        count(){
            if((/^1(3|4|5|6|7|8|9)\d{9}$/.test(this.phone))==false){
              alert('手机号有误')      
            }else if(this.code.length!=6){
                alert('验证码有误')
            }else{
                //成功或者错误
            }
        }
    },
    watch:{
        'phone':function(){
            if(this.phone.length==11&&this.code.length==6){
                this.ison=true;
            }else{
                this.ison=false;
            }
        },
        'code':function(){
            if(this.phone.length==11&&this.code.length==6){
                this.ison=true;
            }else{
                this.ison=false;
            }
        }
    }
}
</script>
<style lang="scss">
     @import '../../static/scss/common.scss';
     .bindphone{
         background:#eee;
         height: 100%;
         width: 100%;
         z-index: 9;
         .bindall{
             font-weight: bold;
             font-size: pxt(14px);
             padding: pxt(15px);
             .bindinput{
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
                    line-height: pxt(45px);
                    border: none;
                }
                .yanzheng{
                    color: #F81616;
                    padding-right: pxt(10px);
                }

             }
             .mg24{margin-bottom: pxt(24px);} 
             .bingbtn{
                 background:#CCCCCC;
                 text-align: center;
                 margin-top: pxt(10px);
             }
             .onbind{
                 background:#292B2C;
                 color: #FBDC95;
             }
         }
     }
</style>

