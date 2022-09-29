"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[91174],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(r),h=a,d=u["".concat(p,".").concat(h)]||u[h]||m[h]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},18201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const i={description:"The IOTA foundation provides load-balanced public Shimmer Beta endpoints, where MQTT and the HTTP REST API are enabled.",image:"/img/logo/preview.png",keywords:["devnet","load-balanced","HTTP REST API","MQTT","reference"]},o="Shimmer Beta",l={unversionedId:"reference/networks/betanet",id:"reference/networks/betanet",title:"Shimmer Beta",description:"The IOTA foundation provides load-balanced public Shimmer Beta endpoints, where MQTT and the HTTP REST API are enabled.",source:"@site/next/external/introduction-docs/docs/reference/networks/betanet.md",sourceDirName:"reference/networks",slug:"/reference/networks/betanet",permalink:"/next/introduction/reference/networks/betanet",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/docs/next/external/introduction-docs/docs/reference/networks/betanet.md",tags:[],version:"current",frontMatter:{description:"The IOTA foundation provides load-balanced public Shimmer Beta endpoints, where MQTT and the HTTP REST API are enabled.",image:"/img/logo/preview.png",keywords:["devnet","load-balanced","HTTP REST API","MQTT","reference"]},sidebar:"mySidebar",previous:{title:"Firefly Shimmer",permalink:"/next/introduction/how_tos/verify_download"},next:{title:"Shimmer",permalink:"/next/introduction/reference/networks/shimmer"}},p={},s=[{value:"Public Infrastructure",id:"public-infrastructure",level:2},{value:"Developer Tools",id:"developer-tools",level:2}],c={toc:s};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shimmer-beta"},"Shimmer Beta"),(0,a.kt)("p",null,"Shimmer Beta is a pre-release of the Shimmer network that is currently under development."),(0,a.kt)("h2",{id:"public-infrastructure"},"Public Infrastructure"),(0,a.kt)("p",null,"We currently provide load-balanced public Shimmer Beta endpoints:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Node API: ",(0,a.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"https://api.testnet.shimmer.network"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Example info endpoint: ",(0,a.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network/api/core/v2/info"},"https://api.testnet.shimmer.network/api/core/v2/info")),(0,a.kt)("li",{parentName:"ul"},"Available routes: ",(0,a.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network/api/routes"},"https://api.testnet.shimmer.network/api/routes")),(0,a.kt)("li",{parentName:"ul"},"Health endpoint: ",(0,a.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network/health"},"https://api.testnet.shimmer.network/health")))),(0,a.kt)("li",{parentName:"ul"},"MQTT: wss://api.testnet.shimmer.network:443/api/mqtt/v1"),(0,a.kt)("li",{parentName:"ul"},"Chronicle API: ",(0,a.kt)("a",{parentName:"li",href:"https://chronicle.testnet.shimmer.network"},"https://chronicle.testnet.shimmer.network"))),(0,a.kt)("p",null,"These endpoints have MQTT (via WebSockets and raw TCP) exposed and offer the HTTP REST API (according to this specifications ",(0,a.kt)("a",{parentName:"p",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/iotaledger/tips/stardust-api/tips/TIP-0025/core-rest-api.yaml"},"TIP-25"),", ",(0,a.kt)("a",{parentName:"p",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/iotaledger/tips/main/tips/TIP-0026/indexer-rest-api.yaml"},"TIP-26")," over TLS."),(0,a.kt)("h2",{id:"developer-tools"},"Developer Tools"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://explorer.shimmer.network"},"Explorer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://faucet.testnet.shimmer.network"},"Online Faucet")),(0,a.kt)("li",{parentName:"ul"},"Faucet Info API: ",(0,a.kt)("a",{parentName:"li",href:"https://faucet.testnet.shimmer.network/api/info"},"https://faucet.testnet.shimmer.network/api/info")),(0,a.kt)("li",{parentName:"ul"},"Faucet Enqueue API: ",(0,a.kt)("a",{parentName:"li",href:"https://faucet.testnet.shimmer.network/api/enqueue"},"https://faucet.testnet.shimmer.network/api/enqueue")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/cli-wallet/tree/develop"},"Cli-Wallet")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/chrysalis-faucet/tree/hornet"},"shimmer-faucet code (nodejs + svelte)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/inx-faucet"},"shimmer-faucet backend"))))}m.isMDXComponent=!0}}]);