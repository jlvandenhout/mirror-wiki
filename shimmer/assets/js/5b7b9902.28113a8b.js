"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[33796],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},94548:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={description:"The `wallet.rs` library is written in Rust. You can also find bindings written in Node.js and Python",image:"/img/logo/wallet_light.png",keywords:["bindings","library","rust","python","node.js","account","multiple"]},o="Getting Started",l={unversionedId:"getting_started/getting_started",id:"getting_started/getting_started",title:"Getting Started",description:"The `wallet.rs` library is written in Rust. You can also find bindings written in Node.js and Python",source:"@site/shimmer/external/wallet.rs/documentation/docs/getting_started/getting_started.md",sourceDirName:"getting_started",slug:"/getting_started/",permalink:"/shimmer/wallet.rs/getting_started/",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/shimmer/external/wallet.rs/documentation/docs/getting_started/getting_started.md",tags:[],version:"current",frontMatter:{description:"The `wallet.rs` library is written in Rust. You can also find bindings written in Node.js and Python",image:"/img/logo/wallet_light.png",keywords:["bindings","library","rust","python","node.js","account","multiple"]},sidebar:"docs",previous:{title:"Welcome",permalink:"/shimmer/wallet.rs/welcome"},next:{title:"Getting Started with Node.js",permalink:"/shimmer/wallet.rs/getting_started/nodejs"}},s={},p=[{value:"Available Languages",id:"available-languages",level:2},{value:"Connect to the Testnet API",id:"connect-to-the-testnet-api",level:2},{value:"Explore the Network",id:"explore-the-network",level:2},{value:"Get Test Tokens",id:"get-test-tokens",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"available-languages"},"Available Languages"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library is written in Rust. You can also find a bindings written in Node.js and Python."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/getting_started/rust"},"Rust")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/getting_started/nodejs"},"Node.js")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/shimmer/wallet.rs/getting_started/python"},"Python"))),(0,a.kt)("h2",{id:"connect-to-the-testnet-api"},"Connect to the Testnet API"),(0,a.kt)("p",null,"We recommended that you start your interactions with IOTA on a ",(0,a.kt)("em",{parentName:"p"},"testnet")," network. The ",(0,a.kt)("em",{parentName:"p"},"testnet")," will allow you to safely\nget acquainted with the ",(0,a.kt)("inlineCode",{parentName:"p"},"wallet.rs")," library, without the risk of losing any funds if you make a mistake along the way.\nYou can use this Shimmer Testnet API load balancer: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"https://api.testnet.shimmer.network\n")),(0,a.kt)("h2",{id:"explore-the-network"},"Explore the Network"),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("a",{parentName:"p",href:"https://explorer.shimmer.network/"},"Shimmer Tangle Explorer")," to view transactions and data stored in\nthe IOTA Tangle."),(0,a.kt)("h2",{id:"get-test-tokens"},"Get Test Tokens"),(0,a.kt)("p",null,"In order to properly test value-based transactions on testnet network, you are going to need some tokens. You can get\nsome testnet tokens through the ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network"},"Shimmer Faucet"),"."))}d.isMDXComponent=!0}}]);