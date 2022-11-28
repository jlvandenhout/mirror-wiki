"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[59692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,p=d["".concat(c,".").concat(m)]||d[m]||h[m]||s;return n?a.createElement(p,r(r({ref:t},u),{},{components:n})):a.createElement(p,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,r=new Array(s);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var l=2;l<s;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},84029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=n(87462),o=(n(67294),n(3905));const s={keywords:["concepts","smart contracts","allowance"],description:"First let's talk about some important concepts about smart contracts in general and then about ISC smart contract concepts in particular.",image:"/img/logo/WASP_logo_dark.png"},r="Smart Contract Concepts",i={unversionedId:"guide/wasm_vm/concepts",id:"guide/wasm_vm/concepts",title:"Smart Contract Concepts",description:"First let's talk about some important concepts about smart contracts in general and then about ISC smart contract concepts in particular.",source:"@site/shimmer/external/wasp/documentation/docs/guide/wasm_vm/concepts.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/concepts",permalink:"/shimmer/smart-contracts/guide/wasm_vm/concepts",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/shimmer/external/wasp/documentation/docs/guide/wasm_vm/concepts.mdx",tags:[],version:"current",frontMatter:{keywords:["concepts","smart contracts","allowance"],description:"First let's talk about some important concepts about smart contracts in general and then about ISC smart contract concepts in particular.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Introduction to the Wasm VM for ISC",permalink:"/shimmer/smart-contracts/guide/wasm_vm/intro"},next:{title:"Function Call Context",permalink:"/shimmer/smart-contracts/guide/wasm_vm/context"}},c={},l=[{value:"General Concepts",id:"general-concepts",level:2},{value:"ISC-specific Concepts",id:"isc-specific-concepts",level:2}],u={toc:l};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"smart-contract-concepts"},"Smart Contract Concepts"),(0,o.kt)("p",null,"First let's talk about some important concepts about smart contracts in general and then\nabout ISC smart contract concepts in particular."),(0,o.kt)("h2",{id:"general-concepts"},"General Concepts"),(0,o.kt)("p",null,"Smart contracts consist of a number of functions that operate on their state storage.\nThese functions are guaranteed to run deterministically. That means that given certain\ninput data and input storage state they will always produce the same output data and\noutput storage state. Determinism is key because it is the only way to be able to\nvalidate their execution results independently."),(0,o.kt)("p",null,"The consequence of this is that it is impossible for a smart contract to go out and fetch\ndata from external sources, because these sources cannot be guaranteed to be the same\nat every invocation. Smart contract function calls are therefore always following\nthe data push model. They need to receive a complete, atomic set of input data. This is\nimportant to remember, because in most other programming applications it is very common\nto pull external data into running code whenever required. This changes the mental\nmodel necessary for building smart contract solutions considerably."),(0,o.kt)("p",null,"Smart contract functions have no access to a file system, nor can they use timing or\nrandomness sources. Any time or randomness data must be provided as part of the\ninput data. Changes to global static data in the smart contract code itself will not\npersist between separate smart contract function calls. Multi-threading is also highly\nnon-deterministic and its usage is therefore not allowed."),(0,o.kt)("p",null,"To make sure that timing differences between processors do not influence the consensus\noutcome of long-running processes, and to prevent endless loops, smart contracts use a\nsystem where the maximum running time of a function is bounded by an amount of ",(0,o.kt)("strong",{parentName:"p"},"gas"),"\nthat is provided at the moment of invocation. Each Wasm instruction and each ISC API call\nburns a certain amount of gas, and therefore any function that runs out of gas will do so\nat the exact same point, no matter who runs it. This is the only way to be able to have\nTuring-complete computing that is bounded in a deterministic way. Gas is not just used to\nlimit the amount of (finite) processing resources that can be used, but it can also be\nused to assign a monetary cost to the actual amount of processing resources used when\nrunning a smart contract function by associating a fee per unit of gas used."),(0,o.kt)("h2",{id:"isc-specific-concepts"},"ISC-specific Concepts"),(0,o.kt)("p",null,"A unique feature of ISC is its ability to run multiple blockchains in parallel securely.\nRequests can arrive asynchronously, but each separate blockchain is guaranteed to handle\nits requests synchronously, ordered by consensus between the chain's nodes. Each chain\nruns its own set of smart contracts. Some are built-in (core) contracts, others are\nuser-defined, dynamically loaded contracts."),(0,o.kt)("p",null,"Within a blockchain contracts can call each other's functionality either synchronously or\nasynchronously. Synchronous calls are akin to a subroutine call. Asynchronous\ncalls are wrapped in a request transaction and posted on the Tangle, to be executed\nsometime after the current set of requests has been processed."),(0,o.kt)("p",null,"This same asynchronous request mechanism can be used to post calls to smart contracts in\nother blockchains. Delivery of such request transactions is guaranteed, but processing of\nthese requests is only guaranteed as long as the target blockchain is active."),(0,o.kt)("p",null,"Although smart contracts will always post asynchronous requests on the Tangle, and it\nis possible to do this from a user application as well, there is a price to be paid in\nthe form of having to wait for confirmation on the Tangle before a request can be\nprocessed. Therefore, ISC also allows user applications to send requests directly to a\nblockchain through a node API. We call such requests ",(0,o.kt)("em",{parentName:"p"},"off-ledger")," requests, as opposed\nto the ",(0,o.kt)("em",{parentName:"p"},"on-ledger")," requests that are posted directly on the Tangle ledger. Off-ledger\nrequests can be sent at a much higher frequency than off-ledger requests, but on-ledger\nrequests offer a few additional features that are not available to off-ledger requests."),(0,o.kt)("p",null,"In both cases requests are initiated by a so-called ",(0,o.kt)("em",{parentName:"p"},"sender"),". The sender signs the\nrequest with its private key and can therefore be uniquely and securely identified. We\nalso identify a ",(0,o.kt)("em",{parentName:"p"},"caller")," to a smart contract function. While a request is being\nprocessed the sender will stay the same, but the caller will change with every\nsynchronous call that is being made. This will allow the transfer of assets between calls\nto different contracts within the chain, and allows the called function to easily identify\nthe origin of these assets. Note that a function can only access assets that were provided\nby the caller of the function. So even though the original sender of the request is known\nat any call depth, only the top level function can access the assets that the sender\nprovided to the request."),(0,o.kt)("p",null,"The way assets are provided to a smart contract function is by specifying a so-called\n",(0,o.kt)("em",{parentName:"p"},"allowance"),". The function is allowed (but not required) to transfer ownership of the\nassets indicated in the allowance to itself, depending on the requirements of the\nfunction. The allowance is taken out of the on-chain account of the caller. This means\nthat the caller needs to make sure that these assets are available in the account when\nthe call is executed. For off-ledger requests this means that prior to sending the request\nsufficient assets need to be deposited in the sender's on-chain account. For on-ledger\nrequests the assets may also have been deposited prior to sending the request, or they may\nbe sent along as part of the request."),(0,o.kt)("p",null,"Any assets that are sent to a chain as part of an on-ledger request will end up in the\nsender's on-chain account. The allowance mechanism makes it impossible for assets to\ninadvertently be sent to a wrong or non-existing contract and become lost forever. Any\nassets that are not handled by any contract will safely stay in the sender's on-chain\naccount and can be withdrawn by the sender at any time."),(0,o.kt)("p",null,"In the next section we will explore how smart contracts use the WasmLib\n",(0,o.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/guide/wasm_vm/context"},(0,o.kt)("inlineCode",{parentName:"a"},"Function Call Context")),"."))}h.isMDXComponent=!0}}]);