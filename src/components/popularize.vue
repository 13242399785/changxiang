<template>
  <div class="slide-wapper">
     <div class="slide">
			<div class="swiper-container1">
			    <div class="swiper-wrapper">
			      <div class="swiper-slide">Slide 1</div>
			      <div class="swiper-slide">Slide 2</div>
			      <div class="swiper-slide">Slide 3</div>
			      <div class="swiper-slide">Slide 4</div>
			      <div class="swiper-slide">Slide 5</div>
			    </div>
			</div>
		</div>
		<div class="changan">长按保存专属推广图片</div>
		<routerb></routerb>
  </div>
</template>
<script>
import Swiper from 'swiper';
import routerb from './routerb/routerb'
export default {
    name:'popularize',
    components:{
        routerb
    },
    mounted(){
    	this.$nextTick(() => {
            var swiper=new Swiper('.swiper-container1', {
                slidesPerView :'auto',
			    spaceBetween: 5,
				centeredSlides: true,
				slidesOffsetBefore : 60,
				loop: true,
			    pagination: {
			        el: '.swiper-pagination',
			        clickable: true,
			    },
            }) 
        })
    },
    methods:{
        gohistory(){
            if(window.history.length<=1){
                this.$router.push({path:'/'});
                return false; 
            }else{
                this.$router.go(-1)
            }
        },
    }
}
</script>
<style>
    @import '../../static/css/animate.css';
</style>
<style lang="scss">
     @import '../../static/scss/common.scss';
	.slide-wapper{height: 100%;position: relative;overflow: hidden;}  
	.slide{
		height: 100%;
		background: -webkit-linear-gradient(#FFDE10, #FFA900); /* Safari 5.1 - 6.0 */
		background: -o-linear-gradient(#FFDE10, #FFA900); /* Opera 11.1 - 12.0 */
		background: -moz-linear-gradient(#FFDE10, #FFA900); /* Firefox 3.6 - 15 */
		background: linear-gradient(#FFDE10, #FFA900); /* 标准的语法 */
		padding-top: pxt(83px) !important;
		.swiper-container1{
	      // width: pxt(250px);
	      // height: pxt(400px);
	      width: 250px !important;
	      height: 400px;
	    }
	    .swiper-slide {
	    	width:100% !important;
	    	height:100% !important;
	    	// -webkit-transform-style:preserve-3d;-moz-transform-style:preserve-3d;-ms-transform-style:preserve-3d;transform-style:preserve-3d;
	      text-align: center;
	      font-size: 18px;
	      background: #fff;
	      /* Center slide text vertically */
	      display: -webkit-box;
	      display: -ms-flexbox;
	      display: -webkit-flex;
	      display: flex;
	      -webkit-box-pack: center;
	      -ms-flex-pack: center;
	      -webkit-justify-content: center;
	      justify-content: center;
	      -webkit-box-align: center;
	      -ms-flex-align: center;
	      -webkit-align-items: center;
	      align-items: center;
		  transition: 300ms;
		  transform: scale(0.8) !important;
	    }
		.swiper-slide-active,.swiper-slide-duplicate-active{
	      transform: scale(1)  !important;
		}
		img{
			width:100%;
		}
	}
	.changan{
		font-size: pxt(16px);
		color:#333;
		font-weight: bold;
		line-height: pxt(16px);
		position: fixed;
		width: 100%;
		text-align: center;
		bottom:pxt(75px);
	}

</style>
