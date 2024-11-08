import{_ as h,r as v,o as b,t as k,c as y,a as o,b as n,w as l,d as C,e as c,f as g,g as B,u as I,p as S,h as T,i as p}from"./index-5TXyK_ez.js";import{a as w}from"./axios-DWa7EUUt.js";const f={login:s=>w("postjson","/login",s),register:s=>w("postjson","/register",s)},x={name:"Login",setup(){const s=I(),e=v({username:"",password:"",buildTime:""});b(()=>{u()});const u=()=>{e.buildTime="2024_11_08__11_23_43"},t=async()=>{if(e.username===""||e.password===""){c.error("请输入用户名和密码！");return}let a=await f.login({username:e.username,password:e.password});sessionStorage.setItem("uid",a.data.uid),sessionStorage.setItem("token",a.data.token),c.success("登录成功！"),await s.push("/center")},_=async()=>{await f.register({username:e.username,password:e.password}),c.success("注册成功！")},m=()=>{};return{...k(e),loginFn:t,register:_,forget:m}}},i=s=>(S("data-v-2d35d51c"),s=s(),T(),s),N={class:"loginWrap"},V={class:"loginBox"},j=i(()=>o("h2",null,"登录",-1)),F=i(()=>o("p",{class:"username"},"用户名",-1)),L=i(()=>o("p",{class:"password"},"密码",-1)),R={class:"loginBtn"},U=p("登录"),$={class:"viceBtn"},A=p(" 注册账号 "),D=p(" 忘记密码？ "),E={class:"powerby"},M=i(()=>o("p",null,"Powered by Amy",-1));function P(s,e,u,t,_,m){const a=g("a-input"),r=g("a-button");return B(),y("div",N,[o("div",V,[j,F,n(a,{value:s.username,"onUpdate:value":e[0]||(e[0]=d=>s.username=d),placeholder:"请输入"},null,8,["value"]),L,n(a,{type:"password",value:s.password,"onUpdate:value":e[1]||(e[1]=d=>s.password=d),placeholder:"请输入",visible:"false"},null,8,["value"]),o("div",R,[n(r,{type:"primary",block:"",onClick:t.loginFn},{default:l(()=>[U]),_:1},8,["onClick"]),o("div",$,[n(r,{type:"text",class:"register",onClick:t.register},{default:l(()=>[A]),_:1},8,["onClick"]),n(r,{type:"text",class:"forget",onClick:t.forget,disabled:""},{default:l(()=>[D]),_:1},8,["onClick"])])])]),o("div",E,[M,o("p",null,"Build Time "+C(s.buildTime),1)])])}const z=h(x,[["render",P],["__scopeId","data-v-2d35d51c"]]);export{z as default};
//# sourceMappingURL=Login-EbOe5HAW.js.map