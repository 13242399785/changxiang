<template>
  <div class="footer clearfix">
    <!-- <div class="footerremote"></div> -->
   <ul>
    <li v-for="(item,index) in footNav" :key='index'  @click="selectMapNav(index)">
        <router-link :to="item.name">
            <img :src="item.name== nogo ? item.url1 : item.url" alt="">
            <p>{{item.title}}</p>
        </router-link>
    </li>
 </ul>
  </div>
</template>
<script>
export default { 
    name:'footermenu',
    data(){
        return{
            footeractive:'footeractive',
            isSelect: 0,
            nogo:'',
            footNav: [{title: '首页',name:'home', url: '../../../static/images/bottom_icon_home_default.png', url1: '../../../static/images/bottom_icon_home_click.png'},
                {title: '现金红包 ',name:'packet', url: '../../../static/images/bottom_icon_default.png', url1: '../../../static/images/bottom_icon_click.png'},
                {title: '超级会员 ',name:'svip', url: '../../../static/images/bottom_icon_vip_default.png', url1: '../../../static/images/bottom_icon_vip_click.png'},
                {title: '个人中心', name:'personal',url: '../../../static/images/bottom_icon_me_default.png', url1: '../../../static/images/bottom_icon_me_click.png'},
            ]
        }
    },
    // props:['isSelect'],
    mounted(){
        var that=this;
        console.log(this.isSelect)
        this.$nextTick(() => {
            this.selectMapNav(this.isSelect);
            setTimeout(function(){
                that.isSelect=that.isSelect;
            },20)
        })
        //根据
        var url=window.location.href,
            index = url.lastIndexOf("\/"); 
        this.nogo=url.substring(index + 1, url.length);//最后的地址
        
    },
    watch:{ 
        'isSelect':function(){
            var that=this;
            setTimeout(function(){
                that.isSelect=that.isSelect;
            },20)
        },
    },
    methods:{
        selectMapNav(i) {
            this.isSelect=i; 
　　　　　　 //获取点击对象     
        //    var el = $event.currentTarget; 
        },
        srcControl(){
            item.name== nogo ? item.url1 : item.url
        }
    }
}
</script>
<style lang="scss">
    @import '../../../static/scss/common.scss';
    
    .footer{
        width:100%;
        // max-width: 750px;
        height:50px;
        position:fixed;
        bottom:0;
        left: 0;
        z-index:1;
        background-color:#fff;
        border-top:pxt(1px) solid #ccc;
        // display:flex;
        color:#a5a5a5;
        overflow: hidden;
    }
    .footer ul{
        overflow: hidden;
        height: 100%;
        li{
            text-align:center;
            float:left;
            font-size:12px;
            width:25%;
            img{height:23px;width:23px;margin-top:3px;}
            p{height:15px;line-height:10px;}
        }
        a{color:#a5a5a5;display: block;}
        // .footeractive{color:#5099ff;}
        .router-link-active{color: #5099ff;}
    }
    
</style>
