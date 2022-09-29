"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[10428],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},43081:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={description:"The ISC Magic Contract allows EVM contracts to access ISC functionality.",image:"/img/logo/WASP_logo_dark.png",keywords:["configure","using","EVM","magic","Ethereum","Solidity","metamask","JSON","RPC"]},i="The ISC Magic Contract",c={unversionedId:"guide/evm/magic",id:"guide/evm/magic",title:"The ISC Magic Contract",description:"The ISC Magic Contract allows EVM contracts to access ISC functionality.",source:"@site/next/external/wasp/documentation/docs/guide/evm/magic.md",sourceDirName:"guide/evm",slug:"/guide/evm/magic",permalink:"/next/smart-contracts/guide/evm/magic",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/evm/magic.md",tags:[],version:"current",frontMatter:{description:"The ISC Magic Contract allows EVM contracts to access ISC functionality.",image:"/img/logo/WASP_logo_dark.png",keywords:["configure","using","EVM","magic","Ethereum","Solidity","metamask","JSON","RPC"]},sidebar:"tutorialSidebar",previous:{title:"How to use EVM in IOTA Smart Contracts",permalink:"/next/smart-contracts/guide/evm/using"},next:{title:"EVM Tooling",permalink:"/next/smart-contracts/guide/evm/tooling"}},l={},s=[],p={toc:s};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"the-isc-magic-contract"},"The ISC Magic Contract"),(0,r.kt)("p",null,"As previously ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/evm/compatibility"},"noted"),", EVM and ISC are inherently very different platforms.\nAs such, some EVM-specific actions (e.g. manipulating Ethereum tokens) is disabled, and ISC-specific functionality can be accessed by EVM contracts through the ",(0,r.kt)("em",{parentName:"p"},"ISC Magic Contract"),"."),(0,r.kt)("p",null,"The Magic contract is an EVM contract that is deployed by default on every ISC chain, in the EVM genesis block, at address ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1074"),".\nThe implementation of the Magic contract is baked-in in the ",(0,r.kt)("inlineCode",{parentName:"p"},"evm")," core contract; i.e. it is not a pure-Solidity contract."),(0,r.kt)("p",null,"The Magic contract can be accessed from any Solidity contract by importing its ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISC.sol"},"interface"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-solidity"},'pragma solidity >=0.8.5;\n\nimport "@iscmagic/ISC.sol";\n\ncontract MyEVMContract {\n    event EntropyEvent(bytes32 entropy);\n\n    // this will emit a "random" value, taken from the ISC entropy value\n    function emitEntropy() public {\n        bytes32 e = isc.getEntropy();\n        emit EntropyEvent(e);\n    }\n}\n')),(0,r.kt)("p",null,"After ",(0,r.kt)("inlineCode",{parentName:"p"},'import "@iscmagic/ISC.sol"'),", the global variable ",(0,r.kt)("inlineCode",{parentName:"p"},"isc")," points to the\nMagic contract at ",(0,r.kt)("inlineCode",{parentName:"p"},"0x1074"),", which can be called like a regular EVM contract.\nFor example, with ",(0,r.kt)("inlineCode",{parentName:"p"},"isc.getEntropy()")," we are calling the ",(0,r.kt)("inlineCode",{parentName:"p"},"getEntropy")," function which, in turn, calls ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/core_concepts/sandbox"},"ISC Sandbox's")," ",(0,r.kt)("inlineCode",{parentName:"p"},"GetEntropy"),"."),(0,r.kt)("p",null,"The Magic Contract's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/packages/vm/core/evm/iscmagic/ISC.sol"},"interface")," is well documented, so it doubles as an API reference."),(0,r.kt)("p",null,"There are some usage examples in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/develop/packages/evm/evmtest/ISCTest.sol"},"ISCTest.sol")," contract (used internally in unit tests)."))}m.isMDXComponent=!0}}]);