/*!
 *  build: vue-admin-better 
 *  vue-admin-better.com 
 *  https://gitee.com/chu1204505056/vue-admin-better 
 *  time: 2024-10-10 10:58:48
 */
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-86406400"],{"0bb4":function(e,t,a){"use strict";a.r(t),a.d(t,"getNoticeList",(function(){return i}));var n=a("b775");function i(){return Object(n["default"])({url:"https://api.vuejs-core.cn/getNotice",method:"get"})}},1714:function(e,t,a){},"37f9":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e._self._c;return t("div",{staticClass:"index-container"},[t("el-row",{attrs:{gutter:20}})],1)},i=[],o=(a("14d9"),a("7fc4")),l=a("9224"),r=a("0bb4"),s={name:"Index",components:{VabChart:o["default"]},data(){return{timer:0,updateTime:"2024-10-10 10:58:48",nodeEnv:"production",dependencies:l["a"],devDependencies:l["b"],config1:{startVal:0,endVal:this.$baseLodash.random(2e4,6e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3},config2:{startVal:0,endVal:this.$baseLodash.random(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3},config3:{startVal:0,endVal:this.$baseLodash.random(1e3,2e4),decimals:0,prefix:"",suffix:"",separator:",",duration:8e3},fwl:{color:["#1890FF","#36CBCB","#4ECB73","#FBD437","#F2637B","#975FE5"],backgroundColor:"rgba(252,252,252,0)",grid:{top:"4%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",boundaryGap:!1,data:[],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"访问量",type:"line",data:[],smooth:!0,areaStyle:{}}]},sqs:{color:["#1890FF","#36CBCB","#4ECB73","#FBD437","#F2637B","#975FE5"],backgroundColor:"rgba(252,252,252,0)",grid:{top:"4%",left:"2%",right:"4%",bottom:"0%",containLabel:!0},xAxis:[{type:"category",data:["0时","4时","8时","12时","16时","20时","24时"],axisTick:{alignWithLabel:!0}}],yAxis:[{type:"value"}],series:[{name:"授权数",type:"bar",barWidth:"60%",data:[10,52,20,33,39,33,22]}]},cy:{grid:{top:"4%",left:"2%",right:"4%",bottom:"0%"},series:[{type:"wordCloud",gridSize:15,sizeRange:[12,40],rotationRange:[0,0],width:"100%",height:"100%",textStyle:{normal:{color(){const e=["#5470c6","#91cc75","#fac858","#ee6666","#73c0de","#975FE5"];let t=Math.floor(Math.random()*e.length);return e[t]}}},data:[{name:"vue-admin-better",value:15e3},{name:"element",value:10081},{name:"beautiful",value:9386},{name:"vue",value:6500},{name:"zxwk1998",value:6e3},{name:"good",value:4500},{name:"success",value:3800},{name:"never",value:3e3},{name:"boy",value:2500},{name:"girl",value:2300},{name:"github",value:2e3},{name:"hbuilder",value:1900},{name:"dcloud",value:1800},{name:"china",value:1700},{name:"1204505056",value:1600},{name:"972435319",value:1500},{name:"young",value:1200},{name:"old",value:1100},{name:"vuex",value:900},{name:"router",value:800},{name:"money",value:700},{name:"qingdao",value:800},{name:"yantai",value:9e3},{name:"author is very cool",value:9200}]}]},reverse:!0,activities:[],noticeList:[],userAgent:navigator.userAgent,iconList:[{icon:"video",title:"视频播放器",link:"/vab/player",color:"#ffc069"},{icon:"table",title:"表格",link:"/vab/table/comprehensiveTable",color:"#5cdbd3"},{icon:"laptop-code",title:"源码",link:"https://github.com/zxwk1998/vue-admin-better",color:"#b37feb"},{icon:"book",title:"书籍",link:"",color:"#69c0ff"},{icon:"bullhorn",title:"公告",link:"",color:"#ff85c0"},{icon:"gift",title:"礼物",link:"",color:"#ffd666"},{icon:"balance-scale-left",title:"公平的世界",link:"",color:"#ff9c6e"},{icon:"coffee",title:"休息一下",link:"",color:"#95de64"}]}},created(){this.fetchData()},beforeDestroy(){clearInterval(this.timer)},mounted(){let e=+new Date(2020,1,1),t=864e5,a=[],n=[1500*Math.random()],i=new Date(e);const o=e=>{i=[i.getFullYear(),i.getMonth()+1,i.getDate()].join("/"),a.push(i),n.push(this.$baseLodash.random(2e4,6e4)),e&&(a.shift(),n.shift()),i=new Date(+new Date(i)+t)};for(let l=1;l<6;l++)o();o(!0),this.fwl.xAxis[0].data=a,this.fwl.series[0].data=n,this.timer=setInterval(()=>{o(!0),this.fwl.xAxis[0].data=a,this.fwl.series[0].data=n},3e3)},methods:{handleClick(e){this.$baseMessage(`点击了${e.name},这里可以写跳转`)},handleZrClick(){},handleChangeTheme(){this.$baseEventBus.$emit("theme")},async fetchData(){const e=await Object(r["getNoticeList"])();this.noticeList=e.data}}},c=s,u=(a("cced"),a("2877")),d=Object(u["a"])(c,n,i,!1,null,"1ca739f2",null);t["default"]=d.exports},"7fc4":function(e,t,a){"use strict";a.r(t);a("313e");var n=a("5c7f");t["default"]=n["a"]},cced:function(e,t,a){"use strict";a("1714")}}]);