"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[14690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>k,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},k=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,k=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,d=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return n?r.createElement(d,l(l({ref:t},k),{},{components:n})):r.createElement(d,l({ref:t},k))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},16481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={},l=void 0,c={unversionedId:"libraries/java/api/UnlockBlocks",id:"libraries/java/api/UnlockBlocks",title:"UnlockBlocks",description:"from(unlock_blocks): UnlockBlocks",source:"@site/iota/external/iota.rs/production/documentation/docs/libraries/java/api/UnlockBlocks.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/UnlockBlocks",permalink:"/iota.rs/libraries/java/api/UnlockBlocks",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/iota/external/iota.rs/production/documentation/docs/libraries/java/api/UnlockBlocks.mdx",tags:[],version:"current",frontMatter:{}},i={},p=[{value:"from(unlock_blocks): UnlockBlocks",id:"fromunlock_blocks-unlockblocks",level:3},{value:"get(index): Optional&lt;UnlockBlock&gt;",id:"getindex-optionalunlockblock",level:3}],k={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"fromunlock_blocks-unlockblocks"},"from(unlock_blocks): ",(0,a.kt)("a",{parentName:"h3",href:"#unlockblocks"},"UnlockBlocks")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"unlock_blocks"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"#unlockblock"},"UnlockBlock[]")),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"getindex-optionalunlockblock"},"get(index): Optional","<",(0,a.kt)("a",{parentName:"h3",href:"#unlockblock"},"UnlockBlock"),">"),(0,a.kt)("p",null,"Gets a clone of an ",(0,a.kt)("inlineCode",{parentName:"p"},"UnlockBlock")," from ",(0,a.kt)("inlineCode",{parentName:"p"},"UnlockBlocks"),".\nReturns the referenced unlock block if the requested unlock block was a reference."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"index"),(0,a.kt)("td",{parentName:"tr",align:null},"long"),(0,a.kt)("td",{parentName:"tr",align:null})))))}u.isMDXComponent=!0}}]);