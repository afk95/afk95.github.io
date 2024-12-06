import{G as W,b as l,H as L,J as z,K as D,_ as T,k as V,g as F,m as G,w as H,f as w}from"./index-s-0WH2ku.js";var J=["class","component","viewBox","spin","rotate","tabindex","onClick"];function b(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),n.forEach(function(o){_(e,o,r[o])})}return e}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function U(e,t){if(e==null)return{};var r=q(e,t),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function q(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var h=function(t,r){var n,o=r.attrs,a=r.slots,i=b({},t,o),f=i.class,m=i.component,s=i.viewBox,v=i.spin,u=i.rotate,x=i.tabindex,p=i.onClick,d=U(i,J),g=W(),P=g.prefixCls,C=g.rootClassName,c=a.default&&a.default(),k=c&&c.length,S=a.component,$=(n={},_(n,C.value,!!C.value),_(n,P.value,!0),n),N=_({},"".concat(P.value,"-spin"),v===""||!!v),E=u?{msTransform:"rotate(".concat(u,"deg)"),transform:"rotate(".concat(u,"deg)")}:void 0,y=b({},z,{viewBox:s,class:N,style:E});s||delete y.viewBox;var A=function(){return m?l(m,y,{default:function(){return[c]}}):S?S(y):k?(D(!!s||c.length===1&&c[0]&&c[0].type==="use"),l("svg",b({},y,{viewBox:s}),[c])):null},j=x;return j===void 0&&p&&(j=-1,d.tabindex=j),l("span",b({role:"img"},d,{onClick:p,class:[$,f]}),[A(),l(L,null,null)])};h.props={spin:Boolean,rotate:Number,viewBox:String,ariaLabel:String};h.inheritAttrs=!1;h.displayName="Icon";var M=["type"];function I(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(o){return Object.getOwnPropertyDescriptor(r,o).enumerable}))),n.forEach(function(o){Q(e,o,r[o])})}return e}function Q(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e,t){if(e==null)return{};var r=X(e,t),n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function X(e,t){if(e==null)return{};var r={},n=Object.keys(e),o,a;for(a=0;a<n.length;a++)o=n[a],!(t.indexOf(o)>=0)&&(r[o]=e[o]);return r}var B=new Set;function Y(e){return typeof e=="string"&&e.length&&!B.has(e)}function O(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,r=e[t];if(Y(r)){var n=document.createElement("script");n.setAttribute("src",r),n.setAttribute("data-namespace",r),e.length>t+1&&(n.onload=function(){O(e,t+1)},n.onerror=function(){O(e,t+1)}),B.add(r),document.body.appendChild(n)}}function Z(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},t=e.scriptUrl,r=e.extraCommonProps,n=r===void 0?{}:r;typeof document<"u"&&typeof window<"u"&&typeof document.createElement=="function"&&(Array.isArray(t)?O(t.reverse()):O([t]));var o=function(i,f){var m=f.attrs,s=f.slots,v=I({},i,m),u=v.type,x=R(v,M),p=s.default&&s.default(),d=null;u&&(d=l("use",{"xlink:href":"#".concat(u)},null)),p&&p.length&&(d=p);var g=I({},n,x);return l(h,g,{default:function(){return[d]}})};return o.props={spin:Boolean,rotate:Number,type:String},o.inheritAttrs=!1,o.displayName="Iconfont",o}const K=Z({scriptUrl:"//at.alicdn.com/t/c/font_4729444_ili4k845fz.js"}),ee={name:"Iconfont",components:{IconFont:K},props:{type:{default:"",type:String}},setup(e){return{type:V(e.type)}}};function te(e,t,r,n,o,a){const i=w("icon-font"),f=w("a-space");return F(),G(f,null,{default:H(()=>[l(i,{type:n.type,class:"iconfont",style:{"font-size":"18px"}},null,8,["type"])]),_:1})}const ae=T(ee,[["render",te],["__scopeId","data-v-790f7456"]]);export{ae as I};
//# sourceMappingURL=Iconfont-D3apMN4H.js.map