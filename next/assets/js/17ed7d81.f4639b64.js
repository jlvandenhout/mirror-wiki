"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[38954],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>u});var i=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,i,o=function(t,e){if(null==t)return{};var r,i,o={},n=Object.keys(t);for(i=0;i<n.length;i++)r=n[i],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(i=0;i<n.length;i++)r=n[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=i.createContext({}),c=function(t){var e=i.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},m=function(t){var e=c(t.components);return i.createElement(l.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},p=i.forwardRef((function(t,e){var r=t.components,o=t.mdxType,n=t.originalType,l=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),p=c(r),u=o,h=p["".concat(l,".").concat(u)]||p[u]||d[u]||n;return r?i.createElement(h,a(a({ref:e},m),{},{components:r})):i.createElement(h,a({ref:e},m))}));function u(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var n=r.length,a=new Array(n);a[0]=p;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:o,a[1]=s;for(var c=2;c<n;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}p.displayName="MDXCreateElement"},41148:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var i=r(87462),o=(r(67294),r(3905));const n={description:"The current release of IOTA Smart Contracts also has experimental support for EVM/Solidity, providing limited compatibility with existing smart contracts and tooling from other EVM based chains like Ethereum.",image:"/img/logo/WASP_logo_dark.png",keywords:["EVM","Solidity","smart contracts","Ethereum","explanation"]},a="EVM/Solidity Based Smart Contracts",s={unversionedId:"guide/evm/introduction",id:"guide/evm/introduction",title:"EVM/Solidity Based Smart Contracts",description:"The current release of IOTA Smart Contracts also has experimental support for EVM/Solidity, providing limited compatibility with existing smart contracts and tooling from other EVM based chains like Ethereum.",source:"@site/next/external/wasp/documentation/docs/guide/evm/introduction.md",sourceDirName:"guide/evm",slug:"/guide/evm/introduction",permalink:"/next/smart-contracts/guide/evm/introduction",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/evm/introduction.md",tags:[],version:"current",frontMatter:{description:"The current release of IOTA Smart Contracts also has experimental support for EVM/Solidity, providing limited compatibility with existing smart contracts and tooling from other EVM based chains like Ethereum.",image:"/img/logo/WASP_logo_dark.png",keywords:["EVM","Solidity","smart contracts","Ethereum","explanation"]},sidebar:"tutorialSidebar",previous:{title:"Colored Tokens and Time Locks",permalink:"/next/smart-contracts/guide/wasm_vm/timelock"},next:{title:"EVM compatibility in IOTA Smart Contracts",permalink:"/next/smart-contracts/guide/evm/compatibility"}},l={},c=[{value:"What is EVM/Solidity",id:"what-is-evmsolidity",level:3},{value:"How IOTA Smart Contracts Work With EVM",id:"how-iota-smart-contracts-work-with-evm",level:3}],m={toc:c};function d(t){let{components:e,...r}=t;return(0,o.kt)("wrapper",(0,i.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"evmsolidity-based-smart-contracts"},"EVM/Solidity Based Smart Contracts"),(0,o.kt)("p",null,"The current release of IOTA Smart Contracts has experimental support for\nEVM/Solidity smart contracts as well as Wasm based smart contracts, providing\nlimited compatibility with existing smart contracts and tooling from other EVM\nbased chains like Ethereum. This allows us to offer the existing ecosystem\naround EVM/Solidity a familiar alternative."),(0,o.kt)("h3",{id:"what-is-evmsolidity"},"What is EVM/Solidity"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/evm/"},"EVM"),' stands for "Ethereum Virtual Machine", and is currently the tried and proven virtual machine running most smart contract implementations.\n',(0,o.kt)("a",{parentName:"p",href:"https://soliditylang.org/"},"Solidity")," is the programming language of choice with EVM, being created for this specific purpose."),(0,o.kt)("p",null,"The main benefit of using EVM/Solidity right now is the sheer amount of resources available from it from years of development and experimentation on Ethereum. There are many articles, tutorials, examples and tools available for EVM/Solidity, and the IOTA Smart Contracts implementation is fully compatible with them. If you have experience developing on other EVM based chains you will feel right at home, and any existing contracts you've written will probably need no (or very minimal) changes to function on IOTA Smart Contracts as well."),(0,o.kt)("h3",{id:"how-iota-smart-contracts-work-with-evm"},"How IOTA Smart Contracts Work With EVM"),(0,o.kt)("p",null,"Every deployed IOTA Smart Contracts chain automatically includes a core contract called ",(0,o.kt)("inlineCode",{parentName:"p"},"evm"),". This core contract is responsible for running EVM code and storing the EVM state. The Wasp node also provides a standard JSON-RPC service, which allows you to interact with the EVM layer using existing tooling like ",(0,o.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),", ",(0,o.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix")," or ",(0,o.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat"),". Deploying EVM contracts is as easy as pointing your tools to the JSON-RPC endpoint."))}d.isMDXComponent=!0}}]);