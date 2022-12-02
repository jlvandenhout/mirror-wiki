"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[71118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,s(s({ref:t},l),{},{components:n})):r.createElement(m,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},64477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},s="Request Funds from the Testnet Faucet",i={unversionedId:"tutorials/value-transactions/request-funds-from-the-faucet",id:"tutorials/value-transactions/request-funds-from-the-faucet",title:"Request Funds from the Testnet Faucet",description:"Once you have generated a set of addresses, you will need some funds to experiment with",source:"@site/next/external/iota.js/documentation/docs/tutorials/value-transactions/06-request-funds-from-the-faucet.md",sourceDirName:"tutorials/value-transactions",slug:"/tutorials/value-transactions/request-funds-from-the-faucet",permalink:"/next/iotajs/tutorials/value-transactions/request-funds-from-the-faucet",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/next/external/iota.js/documentation/docs/tutorials/value-transactions/06-request-funds-from-the-faucet.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"docs",previous:{title:"Public Addresses",permalink:"/next/iotajs/tutorials/value-transactions/public-addresses"},next:{title:"Query Output Details",permalink:"/next/iotajs/tutorials/value-transactions/query-output-details"}},u={},c=[],l={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"request-funds-from-the-testnet-faucet"},"Request Funds from the Testnet Faucet"),(0,a.kt)("p",null,"Once you have ",(0,a.kt)("a",{parentName:"p",href:"/next/iotajs/tutorials/value-transactions/generate-addresses"},"generated a set of addresses"),", you will need some funds to experiment with\nvalue\ntransactions."),(0,a.kt)("p",null,"Since this tutorial uses the ",(0,a.kt)("a",{parentName:"p",href:"https://explorer.shimmer.network/testnet"},"testnet"),", you can request funds from\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network/"},"Shimmer testnet faucet"),"."),(0,a.kt)("p",null,"In this example we are going to use ",(0,a.kt)("inlineCode",{parentName:"p"},"rms1qp5kej93urfvrc5lhuay7jgupjwuwvxxunzwp59tvqg7nufqntcpxp26uj8"),"\nor ",(0,a.kt)("inlineCode",{parentName:"p"},"0x696cc8b1e0d2c1e29fbf3a4f491c0c9dc730c6e4c4e0d0ab6011e9f1209af013")," in Ed25519 format."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shimmer testnet faucet",src:n(88243).Z,width:"678",height:"444"})),(0,a.kt)("p",null,"Once you have entered your address and clicked ",(0,a.kt)("inlineCode",{parentName:"p"},"Request"),", you can use\nthe ",(0,a.kt)("a",{parentName:"p",href:"https://explorer.shimmer.network/testnet"},"Shimmer Network Explorer")," to verify that the balance on your address is\nnow ",(0,a.kt)("inlineCode",{parentName:"p"},"1000 SMR")," (the default quantity transferred by the Faucet). You can also analyze the information provided by the\nExplorer:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"1000 SMR")," corresponds to an output with a certain ID and timestamp.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The output has been generated by a transaction signed by the faucet and which has a particular ID.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"A storage deposit is reported. It corresponds to ",(0,a.kt)("inlineCode",{parentName:"p"},"42600 Glow")," which it is the vByte cost for the output associated\nwith our initial address."))))}p.isMDXComponent=!0},88243:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/shimmer-testnet-faucet-15877971b113fc65095e9f6353edf005.png"}}]);