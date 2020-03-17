import Vue from 'vue'
import Router from 'vue-router'

// import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',name: 'home',component: ()=>import('@/components/home'),meta:{title:'畅象旅游'}},
    {path: '/home',name: 'home',component: ()=>import('@/components/home'),meta:{title:'畅象旅游'}},
    {path: '/packet',name: 'packet',component: ()=>import('@/components/packet'),meta:{title:'现金红包'}},
    {path: '/svip',name: 'svip',component: ()=>import('@/components/svip'),meta:{title:'超级会员'}},
    {path: '/svipt',name: 'svipt',component: ()=>import('@/components/svipt'),meta:{title:'超级会员'}},
    {path: '/popularize',name: 'popularize',component: ()=>import('@/components/popularize'),meta:{title:'我要推广'}},
    {path: '/bourn',name: 'bourn',component: ()=>import('@/components/bourn'),meta:{title:'畅象旅游'}}, 
    {path: '/personal',name: 'personal',component: ()=>import('@/components/personal'),meta:{title:'个人中心'}},
    {path: '/myteam',name: 'myteam',component: ()=>import('@/components/myteam'),meta:{title:'个人中心'}},
    {path: '/earnings',name: 'earnings',component: ()=>import('@/components/earnings'),meta:{title:'个人中心'}},
    {path: '/bind',name: 'bind',component: ()=>import('@/components/bind'),meta:{title:'绑定手机号码'}},
    {path: '/withdraw',name: 'withdraw',component: ()=>import('@/components/withdraw'),meta:{title:'提现'}},
    {path: '/detail/:num',name: 'detail',component: ()=>import('@/components/detail'),meta:{title:'畅象旅游'}},

    {path: '/index',name: 'Index',component: ()=>import('@/components/index')},
    {path: '/hello',name: 'HelloWorld',component: ()=>import('@/components/HelloWorld')}
  ]
})
