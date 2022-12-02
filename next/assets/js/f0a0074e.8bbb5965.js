"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[31300],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,h=d["".concat(l,".").concat(f)]||d[f]||p[f]||r;return n?o.createElement(h,i(i({ref:t},c),{},{components:n})):o.createElement(h,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},38837:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(87462),a=(n(67294),n(3905));const r={description:"Query for any output details by ID using the Node API through the iota.js library.",image:"/img/client_banner.png",keywords:["tutorial","query output details","output details","metadata","output type","unlock conditions","public key hash"]},i="Query Output Details",s={unversionedId:"tutorials/value-transactions/query-output-details",id:"tutorials/value-transactions/query-output-details",title:"Query Output Details",description:"Query for any output details by ID using the Node API through the iota.js library.",source:"@site/next/external/iota.js/documentation/docs/tutorials/value-transactions/07-query-output-details.md",sourceDirName:"tutorials/value-transactions",slug:"/tutorials/value-transactions/query-output-details",permalink:"/next/iotajs/tutorials/value-transactions/query-output-details",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/next/external/iota.js/documentation/docs/tutorials/value-transactions/07-query-output-details.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{description:"Query for any output details by ID using the Node API through the iota.js library.",image:"/img/client_banner.png",keywords:["tutorial","query output details","output details","metadata","output type","unlock conditions","public key hash"]},sidebar:"docs",previous:{title:"Request Funds from the Testnet Faucet",permalink:"/next/iotajs/tutorials/value-transactions/request-funds-from-the-faucet"},next:{title:"Transfer Funds",permalink:"/next/iotajs/tutorials/value-transactions/transfer-funds"}},l={},u=[{value:"Connect to a Node",id:"connect-to-a-node",level:2},{value:"Putting It All Together",id:"putting-it-all-together",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"query-output-details"},"Query Output Details"),(0,a.kt)("p",null,"If you know an ",(0,a.kt)("inlineCode",{parentName:"p"},"output Id"),", you can query the details of using the Node API through the ",(0,a.kt)("inlineCode",{parentName:"p"},"iota.js")," library."),(0,a.kt)("h2",{id:"connect-to-a-node"},"Connect to a Node"),(0,a.kt)("p",null,"The first thing you will need to do is to connect to a node by instantiating a ",(0,a.kt)("inlineCode",{parentName:"p"},"client")," using\nthe ",(0,a.kt)("a",{parentName:"p",href:"../../references/client/classes/SingleNodeClient"},(0,a.kt)("inlineCode",{parentName:"a"},"SingleNodeClient()")),"\nclass."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const API_ENDPOINT = "https://api.testnet.shimmer.network";\nconst client = new SingleNodeClient(API_ENDPOINT, {powProvider: new NeonPowProvider()});\nconst protocolInfo = await client.protocolInfo();\n\nconsole.log(protocolInfo);\n')),(0,a.kt)("p",null,"The code above uses the ",(0,a.kt)("a",{parentName:"p",href:"../../references/pow-neon/classes/NeonPowProvider"},(0,a.kt)("inlineCode",{parentName:"a"},"NeonPowProvider"))," to calculate the PoW when\nsubmitting blocks.\nThe ",(0,a.kt)("inlineCode",{parentName:"p"},"NeonPowProvider")," executes native code and calculates the PoW faster."),(0,a.kt)("p",null,"The code above uses the the ",(0,a.kt)("a",{parentName:"p",href:"../../references/client/classes/SingleNodeClient#protocolinfo"},(0,a.kt)("inlineCode",{parentName:"a"},"client.protocolInfo()")),"\nfunction to retrieve metadata about the network, including the HRP for the BECH32 addresses, as mentioned when\nyou ",(0,a.kt)("a",{parentName:"p",href:"/next/iotajs/tutorials/value-transactions/public-addresses"},"generated the public address"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "networkName": "testnet",\n  "networkId": "8342982141227064571",\n  "bech32Hrp": "rms",\n  "minPowScore": 1500\n}\n')),(0,a.kt)("p",null,"Through the interface exposed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"iota.js")," ",(0,a.kt)("inlineCode",{parentName:"p"},"SingleNodeClient"),", you can get the details of your output, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const outputID = "0xcba9a6616df8e8e323d8203ea5d1a42e2e7c64dc9ead6b59f5d26bdc301efa540000";\nconst outputDetails = await client.output(outputID);\nconsole.log(outputDetails);\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "metadata": {\n    "blockId": "0x2b6a3301572f19e3596c2832e55c913ef9d3acc1ba345600ad76a8e4068b9f47",\n    "transactionId": "0xcba9a6616df8e8e323d8203ea5d1a42e2e7c64dc9ead6b59f5d26bdc301efa54",\n    "outputIndex": 0,\n    "isSpent": false,\n    "milestoneIndexBooked": 1692812,\n    "milestoneTimestampBooked": 1666599405,\n    "ledgerIndex": 1693193\n  },\n  "output": {\n    "type": 3,\n    "amount": "1000000000",\n    "unlockConditions": [\n      {\n        "type": 0,\n        "address": {\n          "type": 0,\n          "pubKeyHash": "0x696cc8b1e0d2c1e29fbf3a4f491c0c9dc730c6e4c4e0d0ab6011e9f1209af013"\n        }\n      }\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"The output details contain two different groups of information:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"metadata")," that conveys the status of the output on the Ledger.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The ",(0,a.kt)("strong",{parentName:"p"},"output details")," include the type of output (",(0,a.kt)("inlineCode",{parentName:"p"},"3")," for value, i.e., basic outputs), the amount (in Glows), and the\nunlock conditions. You can observe that the unlock conditions contain\nthe ",(0,a.kt)("a",{parentName:"p",href:"../../references/client/interfaces/IEd25519Address#pubkeyhash"},"Ed22519 public key hash")," of your initial\naddress. That means that only the one who controls the private key corresponding to that public key hash can\nunlock this output and use the corresponding funds. The protocol defines other\npossible ",(0,a.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/what_is_stardust/unlock_conditions"},"unlock conditions"),"\nthat will be when you ",(0,a.kt)("a",{parentName:"p",href:"/next/iotajs/tutorials/value-transactions/transfer-funds#Preparing-outputs"},"prepare the transaction"),"."))),(0,a.kt)("h2",{id:"putting-it-all-together"},"Putting It All Together"),(0,a.kt)("p",null,"By this point in the tutorial, your ",(0,a.kt)("inlineCode",{parentName:"p"},"send-value-transactions.ts"),"file should look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'import {Bip32Path, Bip39} from "@iota/crypto.js";\nimport {\n    Bech32Helper,\n    ED25519_ADDRESS_TYPE,\n    Ed25519Address,\n    Ed25519Seed,\n    generateBip44Address,\n    IKeyPair, SingleNodeClient\n} from "@iota/iota.js";\nimport {Converter} from "@iota/util.js";\nimport {NeonPowProvider} from "@iota/pow-neon.js";\n\nconst API_ENDPOINT = "https://api.testnet.shimmer.network";\nconst client = new SingleNodeClient(API_ENDPOINT, {powProvider: new NeonPowProvider()});\nconst protocolInfo = await client.protocolInfo();\n\nconsole.log(protocolInfo);\n\nconst outputID = "0xcba9a6616df8e8e323d8203ea5d1a42e2e7c64dc9ead6b59f5d26bdc301efa540000";\nconst outputDetails = await client.output(outputID);\nconsole.log(outputDetails);\n')))}p.isMDXComponent=!0}}]);