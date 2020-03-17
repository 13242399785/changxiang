<template>
  <div class="bourn">
      <div class="bourn-top">
          <div class="search_wapper">
              <input type="search" class="iconfont" :placeholder="icon">
          </div>
      </div>
      <div class="lineb"></div>
      <div class="bournlist">
        <div class="leftban"></div>
          <ul>
              <li v-for='(item,index) in parentlist' :key="index">
                <div class="bournleft" :class="{curent:index==onshow}" @click="bournControl(index)">
                    <span>{{item.name}}</span>
                    <div class="imgbox"></div>
                </div>
                
                <div class="bournright animated" :class="{bounceInDown:index==onshow}"  v-show="index==onshow">
                    <div class="allfood">
                        <div class="foodsshow" v-for='(item1,index1) in parentlist[index].children' :key="index1">
                            <img :src="item1.img" alt="">
                            <p>{{item1.name}}</p>
                        </div>
                    </div>
                </div>  
              </li>
          </ul>
      </div>
      <routerb></routerb>
  </div>
</template>
<script>
import routerb from './routerb/routerb';
export default {
    name:'bourn',
    components:{
        routerb
    },
    data(){
        return{
            icon:'\ue616 目的地 / 关键词',
            onshow:0,   
            parentlist:[{name:'内地游',
                children:[{
                    index:1,
                    name:'三亚',
                    img:''
                },
                {
                    index:2,
                    name:'上海',
                    img:''
                },{
                    index:3,
                    name:'北京',
                    img:''
                },{
                    index:4,
                    name:'北京',
                    img:''
                },
                {
                    index:2,
                    name:'上海',
                    img:''
                },{
                    index:3,
                    name:'北京',
                    img:''
                },{
                    index:4,
                    name:'北京',
                    img:''
                },
                {
                    index:2,
                    name:'上海',
                    img:''
                },{
                    index:3,
                    name:'北京',
                    img:''
                },{
                    index:4,
                    name:'北京',
                    img:''
                },
                {
                    index:2,
                    name:'上海',
                    img:''
                },{
                    index:3,
                    name:'北京',
                    img:''
                },{
                    index:4,
                    name:'北京',
                    img:''
                },
                {
                    index:2,
                    name:'上海',
                    img:''
                },{
                    index:3,
                    name:'北京',
                    img:''
                },{
                    index:4,
                    name:'北京',
                    img:''
                },
                {
                    index:2,
                    name:'上海',
                    img:''
                },{
                    index:3,
                    name:'北京',
                    img:''
                },{
                    index:4,
                    name:'北京',
                    img:''
                }]
            },
            {
                name:'国外游',
                children:[{
                    index:5,
                    name:'三亚',
                    img:''
                },
                {
                    index:6,
                    name:'上海',
                    img:''
                },{
                    index:7,
                    name:'北京',
                    img:''
                },{
                    index:8,
                    name:'北事件京',
                    img:''
                }]
            },
            {
                name:'国外游',
                children:[{
                    index:5,
                    name:'三亚',
                    img:''
                },
                {
                    index:6,
                    name:'上海',
                    img:''
                },{
                    index:7,
                    name:'北京',
                    img:''
                },{
                    index:8,
                    name:'北事件京',
                    img:''
                }]
            },
            {
                name:'国外游',
                children:[{
                    index:5,
                    name:'三亚',
                    img:''
                },
                {
                    index:6,
                    name:'上海',
                    img:''
                },{
                    index:7,
                    name:'北京',
                    img:''
                },{
                    index:8,
                    name:'北事件京',
                    img:''
                }]
            },
            {
                name:'国外游',
                children:[{
                    index:5,
                    name:'三亚',
                    img:''
                },
                {
                    index:6,
                    name:'上海',
                    img:''
                },{
                    index:7,
                    name:'北京',
                    img:''
                },{
                    index:8,
                    name:'北事件京',
                    img:''
                }]
            },
            {
                name:'国外游',
                children:[{
                    index:5,
                    name:'三亚',
                    img:''
                },
                {
                    index:6,
                    name:'上海',
                    img:''
                },{
                    index:7,
                    name:'北京',
                    img:''
                },{
                    index:8,
                    name:'北事件京',
                    img:''
                }]
            },
            {
                name:'国外游',
                children:[{
                    index:5,
                    name:'三亚',
                    img:''
                },
                {
                    index:6,
                    name:'上海',
                    img:''
                },{
                    index:7,
                    name:'北京',
                    img:''
                },{
                    index:8,
                    name:'北事件京',
                    img:''
                }]
            },
            {
                name:'国外游',
                children:[{
                    index:5,
                    name:'三亚',
                    img:''
                },
                {
                    index:6,
                    name:'上海',
                    img:''
                },{
                    index:7,
                    name:'北京',
                    img:''
                },{
                    index:8,
                    name:'北事件京',
                    img:''
                }]
            },
            {
                name:'国外游',
                children:[{
                    index:5,
                    name:'三亚',
                    img:''
                },
                {
                    index:6,
                    name:'上海',
                    img:''
                },{
                    index:7,
                    name:'北京',
                    img:''
                },{
                    index:8,
                    name:'北事件京',
                    img:''
                }]
            },
            {
                name:'国外游',
                children:[{
                    index:5,
                    name:'三亚',
                    img:''
                },
                {
                    index:6,
                    name:'上海',
                    img:''
                },{
                    index:7,
                    name:'北京',
                    img:''
                },{
                    index:8,
                    name:'北事件京',
                    img:''
                }]
            }]
        }
    },
    methods:{
        bournControl(index){
            this.onshow=index;
        }
    }
}
</script>
<style>
    @import '../../static/css/animate.css';
</style>
<style lang="scss">
    @import '../../static/scss/common.scss';
    //huazai在线icon
    @font-face {
        font-family: 'iconfont';  /* project id 349444 */
        src: url('//at.alicdn.com/t/font_349444_8g4tqwztuho.eot');
        src: url('//at.alicdn.com/t/font_349444_8g4tqwztuho.eot?#iefix') format('embedded-opentype'),
        url('//at.alicdn.com/t/font_349444_8g4tqwztuho.woff2') format('woff2'),
        url('//at.alicdn.com/t/font_349444_8g4tqwztuho.woff') format('woff'),
        url('//at.alicdn.com/t/font_349444_8g4tqwztuho.ttf') format('truetype'),
        url('//at.alicdn.com/t/font_349444_8g4tqwztuho.svg#iconfont') format('svg');
    }
    .bourn{
        // background: #eee;
        height: 100%;
        .bourn-top{
            background: #fff;
            padding: pxt(10px) pxt(18px);
            .search_wapper{
                height: 100%;
                width: 100%;
                background: #F0F0F0;
                border-radius: 87px;
            }
            input{
                display: block;
                height:pxt(35px);
                width:100%;
                text-align: center;
                background: none;
                border: none;
                padding: 0 pxt(10px);
                
            }
            .iconfont{
                font-family: 'iconfont';
            }
        }
        .lineb{
            background: #eee;
            height: pxt(5px);
            width: 100%;
        }
        .bournlist{
            height: 90.2%;
            position: relative;
            // width: pxt(80px);
            background: #fff;
            // height: 100%;
            padding-bottom: pxt(44px);
            // overflow: hidden;
            .leftban{
                height: 100%;
                width: 20%;
                background: #eee;
                position: fixed;
                left: 0;
                top:pxt(68px);
                z-index: -1;
            }
            ul{
                z-index: 22;
                height: 100%;
                z-index: 88;
                // width: 20%;
                // height: 300px;
                overflow: auto;
                // background: #eee;
                li{
                    .bournleft{
                        width: 20%;
                        // height: pxt(80px);
                        text-align: center;
                        // line-height: pxt(80px);
                        font-size: pxt(16px);
                        line-height: 100%;
                        background:#EEE;
                        position: relative;                 
                        color:#A5A5A5;
                        span{
                            position: absolute;
                            white-space:nowrap;
                            // width: 100%;
                            left: 50%;
                            top:50%;
                            transform: translate(-50%, -50%);
                            text-align: center;
                            z-index: 99;
                        }
                        .imgbox{
                            z-index: 92;
                             position: relative;
                            overflow: hidden;
                            padding-bottom: 100%;/*重要属性*/
                        }
                    }
                    .curent{
                        background:#fff;
                    }
                    .bournright{
                        // background: #fff;
                        font-size: 0;
                        padding:pxt(10px); 
                        padding-bottom: pxt(50px);
                        position: absolute; 
                        left: 20%;
                        top:0;
                        // display: none;
                        text-align: justify;
                        // text-align-last:justify;
                        width: 80%;
                        // overflow-y:auto;
                        overflow-y:scroll;
                        height: 100%; 
                        .allfood{

                        }
                        .foodsshow{
                            display: inline-block;
                            position: relative;
                            background: #CCCCCC;
                            border-radius: 10px;
                            // width: pxt(85px);
                            // height: pxt(85px);
                            width: 31.33%; 
                            overflow: hidden;
                            margin-right: 3%;
                            margin-bottom: 3%;
                            img{
                                width: 100%;
                                padding-bottom: 100%;//占满整个高度使宽度和高度一致
                            }
                            p{
                                position: absolute;
                                font-size: pxt(14px);
                                color: #fff;
                                line-height: pxt(20px);
                                text-align: center;
                                width: 100%;
                                bottom: pxt(10px);
                                text-align: center;
                            }
                        }
                        .foodsshow:nth-child(3n){
                            margin-right: 0;
                        }
                        @media screen and (max-width: 320px){/* 兼容iphone5 */
                        　　.foodsshow{
                                width: pxt(80px);
                                height: pxt(80px);
                            }
                        }
                    }
                    .showhide{
                        display: block;
                    }
                    
                }
            }
        }
    }
</style>
