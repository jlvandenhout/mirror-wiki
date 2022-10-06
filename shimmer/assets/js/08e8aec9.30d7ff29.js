"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[12190],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=c(r),p=o,u=h["".concat(l,".").concat(p)]||h[p]||m[p]||i;return r?n.createElement(u,a(a({ref:t},d),{},{components:r})):n.createElement(u,a({ref:t},d))}));function p(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},67911:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const i={id:"coordinator",title:"The Coordinator",description:"What is the Coordinator in the Shimmer network.",image:"/img/iota-wiki.png",keywords:["explanation","shimmer"]},a="The Coordinator",s={unversionedId:"coordinator",id:"coordinator",title:"The Coordinator",description:"What is the Coordinator in the Shimmer network.",source:"@site/shimmer/learn/coordinator.md",sourceDirName:".",slug:"/coordinator",permalink:"/shimmer/learn/coordinator",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/shimmer/learn/coordinator.md",tags:[],version:"current",lastUpdatedAt:1664455336,formattedLastUpdatedAt:"Sep 29, 2022",frontMatter:{id:"coordinator",title:"The Coordinator",description:"What is the Coordinator in the Shimmer network.",image:"/img/iota-wiki.png",keywords:["explanation","shimmer"]},sidebar:"about",previous:{title:"The Tangle",permalink:"/shimmer/learn/tangle"},next:{title:"Data and Value Transfer",permalink:"/shimmer/learn/data-and-value-transfer"}},l={},c=[],d={toc:c};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-coordinator"},"The Coordinator"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"The Coordinator is a temporary feature and will be removed with the upcoming IOTA 2.0 update.")),(0,o.kt)("p",null,"The Coordinator is the central node that sends signed blocks called milestones that nodes trust and use to confirm blocks. Blocks in the Tangle are considered for confirmation only when they are directly or indirectly referenced by a milestone that nodes have validated."),(0,o.kt)("p",null,"To allow the nodes to recognize valid milestones, all Shimmer nodes on the same network are configured with the signatures of a coordinator node which they trust. By knowing those signatures, nodes can validate the signatures in issued milestones to verify whether the trusted Coordinator did sign them."),(0,o.kt)("p",null,"To ensure that new blocks always have a chance of being confirmed fast, the Coordinator regularly sends milestones (every 5 seconds). And for the nodes to check if they are synchronized with the rest of the network, they can compare the milestones they know.\n",(0,o.kt)("img",{alt:"An artist&#39;s depiction of Coordinator.",src:r(6733).Z,title:"Click to see the full-sized image.",width:"743",height:"500"})),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The Coordinator")))}m.isMDXComponent=!0},6733:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/milestones-ca3479a44644b9ab2414b07e1e62d6ac.gif"}}]);