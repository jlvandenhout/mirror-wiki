"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9132],{44236:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=n(87462),o=n(63366),r=(n(67294),n(3905)),i=["components"],s={description:"The `accounts` contract keeps a consistent ledger of on-chain accounts in its state for the agents that control them. There are two types of agents who can do it, L1 addresses and smart contracts.",image:"/img/logo/WASP_logo_dark.png",keywords:["core contracts","accounts","deposit","withdraw","assets","balance","reference"]},c=void 0,d={unversionedId:"guide/core_concepts/core_contracts/accounts",id:"guide/core_concepts/core_contracts/accounts",title:"accounts",description:"The `accounts` contract keeps a consistent ledger of on-chain accounts in its state for the agents that control them. There are two types of agents who can do it, L1 addresses and smart contracts.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/core_contracts/accounts.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/accounts",permalink:"/smart-contracts/guide/core_concepts/core_contracts/accounts",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/core_contracts/accounts.md",tags:[],version:"current",frontMatter:{description:"The `accounts` contract keeps a consistent ledger of on-chain accounts in its state for the agents that control them. There are two types of agents who can do it, L1 addresses and smart contracts.",image:"/img/logo/WASP_logo_dark.png",keywords:["core contracts","accounts","deposit","withdraw","assets","balance","reference"]},sidebar:"tutorialSidebar",previous:{title:"The `root` Contract",permalink:"/smart-contracts/guide/core_concepts/core_contracts/root"},next:{title:"The `blob` Contract",permalink:"/smart-contracts/guide/core_concepts/core_contracts/blob"}},l={},u=[{value:"Entry Points",id:"entry-points",level:2},{value:"- <code>deposit()</code>",id:"--deposit",level:3},{value:"- <code>withdraw()</code>",id:"--withdraw",level:3},{value:"- <code>transferAllowanceTo(a AgentID, c ForceOpenAccount)</code>",id:"--transferallowancetoa-agentid-c-forceopenaccount",level:3},{value:"- <code>harvest()</code>",id:"--harvest",level:3},{value:"- <code>foundryCreateNew(t TokenScheme) s SerialNumber</code>",id:"--foundrycreatenewt-tokenscheme-s-serialnumber",level:3},{value:"- <code>foundryModifySupply(s SerialNumber, d SupplyDeltaAbs, y DestroyTokens)</code>",id:"--foundrymodifysupplys-serialnumber-d-supplydeltaabs-y-destroytokens",level:3},{value:"- <code>foundryDestroy(s SerialNumber)</code>",id:"--foundrydestroys-serialnumber",level:3},{value:"Views",id:"views",level:2},{value:"- <code>balance(a AgentID)</code>",id:"--balancea-agentid",level:3},{value:"- <code>balanceBaseToken(a AgentID)</code>",id:"--balancebasetokena-agentid",level:3},{value:"- <code>balanceNativeToken(a AgentID, N NativeTokenID)</code>",id:"--balancenativetokena-agentid-n-nativetokenid",level:3},{value:"- <code>totalAssets()</code>",id:"--totalassets",level:3},{value:"- <code>accounts()</code>",id:"--accounts",level:3},{value:"- <code>getNativeTokenIDRegistry()</code>",id:"--getnativetokenidregistry",level:3},{value:"- <code>foundryOutput(s FoundrySerialNumber)</code>",id:"--foundryoutputs-foundryserialnumber",level:3},{value:"- <code>nftData(z NFTID)</code>",id:"--nftdataz-nftid",level:3},{value:"- <code>getAccountNonce(a AgentID)</code>",id:"--getaccountnoncea-agentid",level:3}],p={toc:u};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"// TODO  update ",(0,r.kt)("a",{parentName:"p",href:"https://stardust.iota-community.org"},"https://stardust.iota-community.org")," links to the wiki"),(0,r.kt)("h1",{id:"the-accounts-contract"},"The ",(0,r.kt)("inlineCode",{parentName:"h1"},"accounts")," Contract"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts")," contract is one of the ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/overview"},"core contracts")," on each IOTA Smart Contracts\nchain."),(0,r.kt)("p",null,"This contract keeps a consistent ledger of on-chain accounts in its state, establishing what is owned by who.\nThere are three types of agents who can own assets on the chain: L1 addresses, ISC smart contracts and EVM smart contracts.\nAny agent can own L1 assets: tokens, NFTs and foundries"),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"entry-points"},"Entry Points"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts")," contract provides functions to deposit and withdraw tokens, information about the assets deposited on the chain, as well as functionality to create/utilize foundries.  "),(0,r.kt)("h3",{id:"--deposit"},"- ",(0,r.kt)("inlineCode",{parentName:"h3"},"deposit()")),(0,r.kt)("p",null,"Credits any transfered tokens to the sender's account."),(0,r.kt)("h3",{id:"--withdraw"},"- ",(0,r.kt)("inlineCode",{parentName:"h3"},"withdraw()")),(0,r.kt)("p",null,"Moves tokens from the caller's on-chain account to any external L1 address (can be an Agent on another chain).\nThe amount of tokens to be withdrawn must be specified via allowance in the request."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A call to withdraw means that a L1 output will be created, because of this, the withdrawn amount must be able to cover the L1 ",(0,r.kt)("a",{parentName:"p",href:"https://stardust.iota-community.org/introduction/develop/introduction/what_is_stardust#storage-deposit-system"},"storage deposit"),", otherwise it will fail."))),(0,r.kt)("h3",{id:"--transferallowancetoa-agentid-c-forceopenaccount"},"- ",(0,r.kt)("inlineCode",{parentName:"h3"},"transferAllowanceTo(a AgentID, c ForceOpenAccount)")),(0,r.kt)("p",null,"Credits the specified allowance to any AgentID (",(0,r.kt)("inlineCode",{parentName:"p"},"a"),") on the chain."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the target AgentID doesn't yet have funds on the chain, an optional boolean parameter (",(0,r.kt)("inlineCode",{parentName:"p"},"c"),') "ForceOpenAccount" must specified to signal for an account to be created.'))),(0,r.kt)("h3",{id:"--harvest"},"- ",(0,r.kt)("inlineCode",{parentName:"h3"},"harvest()")),(0,r.kt)("p",null,"Moves tokens from the common account controlled by the chain owner, to the proper owner's account on the same chain. This entry point is only authorised to whoever owns the chain."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},'The "common account" is an account where the gas fees collected for the chain owner are placed. Also if assets are sent to any of the core contracts, they will end up on this account.'))),(0,r.kt)("h3",{id:"--foundrycreatenewt-tokenscheme-s-serialnumber"},"- ",(0,r.kt)("inlineCode",{parentName:"h3"},"foundryCreateNew(t TokenScheme) s SerialNumber")),(0,r.kt)("p",null,"Creates a new foundry with the specified ",(0,r.kt)("a",{parentName:"p",href:"https://stardust.iota-community.org/introduction/develop/protocol/foundry"},"token scheme")," ",(0,r.kt)("inlineCode",{parentName:"p"},"t"),". The new foundry is created under the controller of the request sender.\nThe serial number ",(0,r.kt)("inlineCode",{parentName:"p"},"s")," of the newly created foundry will be returned."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("a",{parentName:"p",href:"https://stardust.iota-community.org/introduction/develop/introduction/what_is_stardust#storage-deposit-system"},"storage deposit")," for the new foundry must be provided via allowance (only the minimum required will be used)."))),(0,r.kt)("h3",{id:"--foundrymodifysupplys-serialnumber-d-supplydeltaabs-y-destroytokens"},"- ",(0,r.kt)("inlineCode",{parentName:"h3"},"foundryModifySupply(s SerialNumber, d SupplyDeltaAbs, y DestroyTokens)")),(0,r.kt)("p",null,"Inflates (mints) or shrinks supply of token by the foundry, controlled by the caller.\nThe following parameters must be provided:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the target foundry serial number ",(0,r.kt)("inlineCode",{parentName:"li"},"s")),(0,r.kt)("li",{parentName:"ul"},"SupplyDeltaAbs ",(0,r.kt)("inlineCode",{parentName:"li"},"d")," specifies by which amount the supply should increase or decrease (specified as a big.int), this is an absolute value"),(0,r.kt)("li",{parentName:"ul"},"DestroyTokens ",(0,r.kt)("inlineCode",{parentName:"li"},"y")," is a boolean that specifies whether to destroy tokens or not (defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),")")),(0,r.kt)("p",null,"When minting new tokens, the storage deposit for the new output must be provided via allowance."),(0,r.kt)("p",null,"When destroying tokens, the tokens to be destroyed must be provided via allowance."),(0,r.kt)("h3",{id:"--foundrydestroys-serialnumber"},"- ",(0,r.kt)("inlineCode",{parentName:"h3"},"foundryDestroy(s SerialNumber)")),(0,r.kt)("p",null,"Destroys a given foundry output on L1, reiburses the ",(0,r.kt)("a",{parentName:"p",href:"https://stardust.iota-community.org/introduction/develop/introduction/what_is_stardust#storage-deposit-system"},"storage deposit")," to the caller. (Can only succeed if the foundry is owned by the caller)"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"This operation cannot be reverted"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"views"},"Views"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"accounts")," contract provides ways to query information about chain accounts."),(0,r.kt)("h3",{id:"--balancea-agentid"},"- ",(0,r.kt)("inlineCode",{parentName:"h3"},"balance(a AgentID)")),(0,r.kt)("p",null,"Returns the fungible tokens owned by any AgentID ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," on the chain."),(0,r.kt)("h3",{id:"--balancebasetokena-agentid"},"- ",(0,r.kt)("inlineCode",{parentName:"h3"},"balanceBaseToken(a AgentID)")),(0,r.kt)("p",null,"Returns amount of base tokens owned by any AgentID ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," on the chain."),(0,r.kt)("h3",{id:"--balancenativetokena-agentid-n-nativetokenid"},"- ",(0,r.kt)("inlineCode",{parentName:"h3"},"balanceNativeToken(a AgentID, N NativeTokenID)")),(0,r.kt)("p",null,"Returns the amount of native tokens with TokenID ",(0,r.kt)("inlineCode",{parentName:"p"},"N")," owned by any AgentID ",(0,r.kt)("inlineCode",{parentName:"p"},"a"),"  on the chain."),(0,r.kt)("h3",{id:"--totalassets"},"- ",(0,r.kt)("inlineCode",{parentName:"h3"},"totalAssets()")),(0,r.kt)("p",null,"Returns a map with the sum of all assets controlled by the chain Base tokens, Native Tokens and NFTs."),(0,r.kt)("h3",{id:"--accounts"},"- ",(0,r.kt)("inlineCode",{parentName:"h3"},"accounts()")),(0,r.kt)("p",null,"Returns a list of all agent IDs that own assets on the chain."),(0,r.kt)("h3",{id:"--getnativetokenidregistry"},"- ",(0,r.kt)("inlineCode",{parentName:"h3"},"getNativeTokenIDRegistry()")),(0,r.kt)("p",null,"Returns a list of all native tokenIDs that are owned by the chain."),(0,r.kt)("h3",{id:"--foundryoutputs-foundryserialnumber"},"- ",(0,r.kt)("inlineCode",{parentName:"h3"},"foundryOutput(s FoundrySerialNumber)")),(0,r.kt)("p",null,"Returns the output corresponding to the foundry with Serial Number ",(0,r.kt)("inlineCode",{parentName:"p"},"s"),"."),(0,r.kt)("h3",{id:"--nftdataz-nftid"},"- ",(0,r.kt)("inlineCode",{parentName:"h3"},"nftData(z NFTID)")),(0,r.kt)("p",null,"Returns the data for a given NFT with ID ",(0,r.kt)("inlineCode",{parentName:"p"},"z")," that on the chain. This data includes the issuer, immutable metadata and the current on-chain owner."),(0,r.kt)("h3",{id:"--getaccountnoncea-agentid"},"- ",(0,r.kt)("inlineCode",{parentName:"h3"},"getAccountNonce(a AgentID)")),(0,r.kt)("p",null,"Returns the current account nonce for a give AgentID ",(0,r.kt)("inlineCode",{parentName:"p"},"a")," (the account nonce is used to issue off-ledger requests)."))}h.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),d=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),h=o,m=p["".concat(c,".").concat(h)]||p[h]||u[h]||r;return n?a.createElement(m,i(i({ref:t},l),{},{components:n})):a.createElement(m,i({ref:t},l))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);