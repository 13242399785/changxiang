<template>
  <div class="slide-footer">
        <div class="slide_b">
            <span class="fl" @click='gohistory'>&lt;</span>
            <span class="fr slide_none">&gt;</span>
        </div>
    </div>
</template>
<script>
export default {
    name:'routerb',
    data(){
        return{

        }
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
<style lang="scss">
    @import '../../../static/scss/common.scss';
    .slide-footer{background: #fafbfd;position: fixed;bottom: 0;left: 0;width: 100%;height:pxt(44px);line-height: pxt(44px);font-size: pxt(24px);z-index: 100;
        color:#101010;  
		.slide_b{width:50%;margin: auto;}
		.slide_none{color:#b4b4b6; }
		span{
			width:pxt(20px);
		}
	}
</style>
