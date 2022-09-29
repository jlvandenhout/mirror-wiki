"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[13847],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),c=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},p=function(e){var r=c(e.components);return n.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=c(t),u=a,m=f["".concat(l,".").concat(u)]||f[u]||d[u]||i;return t?n.createElement(m,s(s({ref:r},p),{},{components:t})):n.createElement(m,s({ref:r},p))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=f;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},94252:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const i={},s="Interface: PreparedTransactionData",o={unversionedId:"references/nodejs/interfaces/PreparedTransactionData",id:"references/nodejs/interfaces/PreparedTransactionData",title:"Interface: PreparedTransactionData",description:"Prepared transaction data, useful for offline signing.",source:"@site/shimmer/external/wallet.rs/documentation/docs/references/nodejs/interfaces/PreparedTransactionData.md",sourceDirName:"references/nodejs/interfaces",slug:"/references/nodejs/interfaces/PreparedTransactionData",permalink:"/shimmer/wallet.rs/references/nodejs/interfaces/PreparedTransactionData",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/references/nodejs/interfaces/PreparedTransactionData.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Interface: OutputOptions",permalink:"/shimmer/wallet.rs/references/nodejs/interfaces/OutputOptions"},next:{title:"Interface: RemainderData",permalink:"/shimmer/wallet.rs/references/nodejs/interfaces/RemainderData"}},l={},c=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Properties",id:"properties",level:3},{value:"Properties",id:"properties-1",level:2},{value:"essence",id:"essence",level:3},{value:"inputsData",id:"inputsdata",level:3},{value:"remainder",id:"remainder",level:3}],p={toc:c};function d(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"interface-preparedtransactiondata"},"Interface: PreparedTransactionData"),(0,a.kt)("p",null,"Prepared transaction data, useful for offline signing."),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/PreparedTransactionData#essence"},"essence")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/PreparedTransactionData#inputsdata"},"inputsData")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/references/nodejs/interfaces/PreparedTransactionData#remainder"},"remainder"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"essence"},"essence"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"essence"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"ITransactionEssence")),(0,a.kt)("p",null,"Transaction essence"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"inputsdata"},"inputsData"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"inputsData"),": ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/references/nodejs/interfaces/InputSigningData"},(0,a.kt)("inlineCode",{parentName:"a"},"InputSigningData")),"[]"),(0,a.kt)("p",null,"Required address information for signing"),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"remainder"},"remainder"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"remainder"),": ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/wallet.rs/references/nodejs/interfaces/RemainderData"},(0,a.kt)("inlineCode",{parentName:"a"},"RemainderData"))),(0,a.kt)("p",null,"Optional remainder output information"))}d.isMDXComponent=!0}}]);