"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[69709],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),c=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(u.Provider,{value:e},t.children)},l={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,p=s(t,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(h,i(i({ref:e},p),{},{components:n})):r.createElement(h,i({ref:e},p))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var u in e)hasOwnProperty.call(e,u)&&(s[u]=e[u]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3641:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={description:"Get acquainted with the structure and functionality of transactions in IOTA's Stardust protocol in the Shimmer network using iota.js primitives to issue value transactions.",image:"/img/client_banner.png",keywords:["tutorial","UTXO","transactions","shimmer","ledger","outputs","inputs"]},i="Stardust for iota.js: Value Transactions",s={unversionedId:"tutorials/value-transactions/introduction",id:"tutorials/value-transactions/introduction",title:"Stardust for iota.js: Value Transactions",description:"Get acquainted with the structure and functionality of transactions in IOTA's Stardust protocol in the Shimmer network using iota.js primitives to issue value transactions.",source:"@site/shimmer/external/iota.js/documentation/docs/tutorials/value-transactions/01-introduction.md",sourceDirName:"tutorials/value-transactions",slug:"/tutorials/value-transactions/introduction",permalink:"/shimmer/iotajs/tutorials/value-transactions/introduction",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/shimmer/external/iota.js/documentation/docs/tutorials/value-transactions/01-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Get acquainted with the structure and functionality of transactions in IOTA's Stardust protocol in the Shimmer network using iota.js primitives to issue value transactions.",image:"/img/client_banner.png",keywords:["tutorial","UTXO","transactions","shimmer","ledger","outputs","inputs"]},sidebar:"docs",previous:{title:"Mint an NFT",permalink:"/shimmer/iotajs/how_tos/mint_nft"},next:{title:"Prepare Your Development Environment",permalink:"/shimmer/iotajs/tutorials/value-transactions/prepare-the-dev-env"}},u={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Storage Costs and Deposits",id:"storage-costs-and-deposits",level:2}],p={toc:c};function l(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stardust-for-iotajs-value-transactions"},"Stardust for iota.js: Value Transactions"),(0,a.kt)("p",null,"This tutorial will get you acquainted with the structure and functionality of transactions in\nIOTA's ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/welcome"},"Stardust protocol")," in\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://shimmer.network"},"Shimmer network")," using ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.js"},"iota.js")," primitives to\nissue value transactions."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"Starting from ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/welcome"},"Chrysalis"),", IOTA is\na ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/reference/details#unspent-transaction-output-utxo"},"UTXO-based (Unspent Transaction Output)"),"\nLedger. Each UTXO, also known as  ",(0,a.kt)("strong",{parentName:"p"},"output"),", has an associated number of tokens that determines its value.\nThus, the permanent data on the ledger is composed of a set of records (",(0,a.kt)("em",{parentName:"p"},"outputs"),") that can be unlocked by the owner of\nits associated address, i.e., the one who knows the address' private key."),(0,a.kt)("p",null,"There are different ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/learn/outputs"},"output types"),". This tutorial series will only focus on\nvalue outputs known as ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/references/client/interfaces/IBasicOutput"},(0,a.kt)("inlineCode",{parentName:"a"},"IBasicOutput")),". Outputs are\ngenerated by transactions that unlock and consume already existing outputs. When a transaction consumes them, these\noutputs turn into inputs and generate new outputs. At pruning time, ",(0,a.kt)("em",{parentName:"p"},"consumed outputs")," will be removed by Nodes.\nHowever, they might be stored permanently by Nodes that have enabled\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/chronicle/welcome"},"INX Chronicle")," plugin.\nEach output in the Ledger has a unique identifier as it has each transaction that mutates the Ledger state by\nmanipulating other outputs."),(0,a.kt)("h2",{id:"storage-costs-and-deposits"},"Storage Costs and Deposits"),(0,a.kt)("p",null,"UTXOs need to be stored by ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/hornet/welcome"},"Hornet Nodes"),", so there is a storage cost.\nThe Stardust protocol defines a parameter, named ",(0,a.kt)("a",{parentName:"p",href:"../../references/client/interfaces/IRent#vbytecost"},'"vByte cost"'),',\nthat establishes the cost of storage of each "virtual byte" in ',(0,a.kt)("em",{parentName:"p"},"Glow")," (one Glow corresponds to 0.000001 Shimmer).\nAs each output consumes a number of vBytes in the Ledger, it is a necessary condition for an output\nto cover the vByte cost with its value in the Ledger. This means that Nodes will reject transactions\nwhose outputs do not meet this condition. For instance, in the current Shimmer network, you cannot\nsend ",(0,a.kt)("inlineCode",{parentName:"p"},"1 Glow")," to a new output because the ",(0,a.kt)("a",{parentName:"p",href:"/shimmer/iotajs/tutorials/value-transactions/understanding-deposits"},"storage deposit cost")," of such an output will be\nhigher. The size of a UTXO and its cost depends structurally on the type and any additional data it may carry."))}l.isMDXComponent=!0}}]);