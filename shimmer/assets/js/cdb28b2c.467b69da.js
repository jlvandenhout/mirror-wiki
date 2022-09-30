"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[18456],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(n),h=i,u=m["".concat(s,".").concat(h)]||m[h]||p[h]||o;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const o={description:"The `governance` contract defines the set of identities that constitute the state controller, access nodes, who is the chain owner, and the fees for request execution.",image:"/img/logo/WASP_logo_dark.png",keywords:["core contracts","governance","state controller","identities","chain owner","rotate","remove","claim","add","chain info","fee info","reference"]},r="The `governance` Contract",l={unversionedId:"guide/core_concepts/core_contracts/governance",id:"guide/core_concepts/core_contracts/governance",title:"The `governance` Contract",description:"The `governance` contract defines the set of identities that constitute the state controller, access nodes, who is the chain owner, and the fees for request execution.",source:"@site/shimmer/external/wasp/documentation/docs/guide/core_concepts/core_contracts/governance.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/governance",permalink:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/governance",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/shimmer/external/wasp/documentation/docs/guide/core_concepts/core_contracts/governance.md",tags:[],version:"current",frontMatter:{description:"The `governance` contract defines the set of identities that constitute the state controller, access nodes, who is the chain owner, and the fees for request execution.",image:"/img/logo/WASP_logo_dark.png",keywords:["core contracts","governance","state controller","identities","chain owner","rotate","remove","claim","add","chain info","fee info","reference"]},sidebar:"tutorialSidebar",previous:{title:"The `blocklog` Contract",permalink:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/blocklog"},next:{title:"The `errors` Contract",permalink:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/errors"}},s={},c=[{value:"Fee Policy",id:"fee-policy",level:2},{value:"Entry Points",id:"entry-points",level:2},{value:"<code>rotateStateController(S StateControllerAddress)</code>",id:"rotatestatecontrollers-statecontrolleraddress",level:3},{value:"Parameters",id:"parameters",level:4},{value:"<code>addAllowedStateControllerAddress(S StateControllerAddress)</code>",id:"addallowedstatecontrolleraddresss-statecontrolleraddress",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>removeAllowedStateControllerAddress(S StateControllerAddress)</code>",id:"removeallowedstatecontrolleraddresss-statecontrolleraddress",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>delegateChainOwnership(o AgentID)</code>",id:"delegatechainownershipo-agentid",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"<code>claimChainOwnership()</code>",id:"claimchainownership",level:3},{value:"<code>setChainInfo(mb MaxBlobSize, me MaxEventSize, mr MaxEventsPerRequest)</code>",id:"setchaininfomb-maxblobsize-me-maxeventsize-mr-maxeventsperrequest",level:3},{value:"<code>setFeePolicy(g FeePolicy)</code>",id:"setfeepolicyg-feepolicy",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"<code>addCandidateNode(ip PubKey, ic Certificate, ia API, i ForCommittee)</code>",id:"addcandidatenodeip-pubkey-ic-certificate-ia-api-i-forcommittee",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"<code>revokeAccessNode(ip PubKey, ic Certificate, ia API, i ForCommittee)</code>",id:"revokeaccessnodeip-pubkey-ic-certificate-ia-api-i-forcommittee",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"<code>changeAccessNodes(n actions)</code>",id:"changeaccessnodesn-actions",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"<code>startMaintenance()</code>",id:"startmaintenance",level:3},{value:"<code>stopMaintenance()</code>",id:"stopmaintenance",level:3},{value:"Views",id:"views",level:2},{value:"<code>getAllowedStateControllerAddresses()</code>",id:"getallowedstatecontrolleraddresses",level:3},{value:"Returns",id:"returns",level:4},{value:"<code>getChainOwner()</code>",id:"getchainowner",level:3},{value:"Returns",id:"returns-1",level:4},{value:"<code>getChainInfo()</code>",id:"getchaininfo",level:3},{value:"Returns:",id:"returns-2",level:4},{value:"<code>getFeePolicy()</code>",id:"getfeepolicy",level:3},{value:"Returns",id:"returns-3",level:4},{value:"<code>getChainNodes()</code>",id:"getchainnodes",level:3},{value:"Returns",id:"returns-4",level:4},{value:"<code>getMaintenanceStatus()</code>",id:"getmaintenancestatus",level:3},{value:"Schemas",id:"schemas",level:2},{value:"<code>FeePolicy</code>",id:"feepolicy",level:3},{value:"<code>AccessNodeInfo</code>",id:"accessnodeinfo",level:3}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"the-governance-contract"},"The ",(0,i.kt)("inlineCode",{parentName:"h1"},"governance")," Contract"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"governance")," contract is one of the ",(0,i.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/overview"},"core contracts")," on each IOTA Smart Contracts\nchain."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"governance")," contract provides the following functionalities:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It defines the identity set that constitutes the state controller (the entity that owns the state output via the chain\nAlias Address). It is possible to add/remove addresses from the state controller (thus rotating the committee of\nvalidators)."),(0,i.kt)("li",{parentName:"ul"},"It defines the chain owner (the L1 entity that owns the chain - initially whoever deployed it). The chain owner can\ncollect special fees and customize some chain-specific parameters."),(0,i.kt)("li",{parentName:"ul"},"It defines the entities allowed to have an access node."),(0,i.kt)("li",{parentName:"ul"},"It defines the fee policy for the chain (gas price, what token is used to pay for gas, and the validator fee share).")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"fee-policy"},"Fee Policy"),(0,i.kt)("p",null,"The Fee Policy looks like the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},"{\n  TokenID []byte // id of the token used to pay for gas (nil if the base token should be used (iota/shimmer)) \n  \n  GasPerToken uint64 // how many gas units are paid for each token\n  \n  ValidatorFeeShare uint8 // percentage of the fees that are credited to the validators (0 - 100)\n}\n")),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"entry-points"},"Entry Points"),(0,i.kt)("h3",{id:"rotatestatecontrollers-statecontrolleraddress"},(0,i.kt)("inlineCode",{parentName:"h3"},"rotateStateController(S StateControllerAddress)")),(0,i.kt)("p",null,"Called when the committee is about to be rotated to the new address ",(0,i.kt)("inlineCode",{parentName:"p"},"S"),"."),(0,i.kt)("p",null,"If it succeeds, the next state transition will become a governance transition, thus updating the state controller in the\nchain's Alias Output. If it fails, nothing happens."),(0,i.kt)("p",null,"It can only be invoked by the chain owner."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"S")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.go/blob/develop/address.go"},(0,i.kt)("inlineCode",{parentName:"a"},"iotago::Address")),"): The address of the next\nstate controller. Must be an\n",(0,i.kt)("a",{parentName:"li",href:"#addallowedstatecontrolleraddresss-statecontrolleraddress"},"allowed")," state controller address.")),(0,i.kt)("h3",{id:"addallowedstatecontrolleraddresss-statecontrolleraddress"},(0,i.kt)("inlineCode",{parentName:"h3"},"addAllowedStateControllerAddress(S StateControllerAddress)")),(0,i.kt)("p",null,"Adds the address ",(0,i.kt)("inlineCode",{parentName:"p"},"S")," to the list of identities that constitute the state controller."),(0,i.kt)("p",null,"It can only be invoked by the chain owner."),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"S")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.go/blob/develop/address.go"},(0,i.kt)("inlineCode",{parentName:"a"},"iotago::Address")),"): The address to add to the\nset of allowed state controllers.")),(0,i.kt)("h3",{id:"removeallowedstatecontrolleraddresss-statecontrolleraddress"},(0,i.kt)("inlineCode",{parentName:"h3"},"removeAllowedStateControllerAddress(S StateControllerAddress)")),(0,i.kt)("p",null,"Removes the address ",(0,i.kt)("inlineCode",{parentName:"p"},"S")," from the list of identities that constitute the state controller."),(0,i.kt)("p",null,"It can only be invoked by the chain owner."),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"S")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.go/blob/develop/address.go"},(0,i.kt)("inlineCode",{parentName:"a"},"iotago::Address")),"): The address to remove from\nthe set of allowed state controllers.")),(0,i.kt)("h3",{id:"delegatechainownershipo-agentid"},(0,i.kt)("inlineCode",{parentName:"h3"},"delegateChainOwnership(o AgentID)")),(0,i.kt)("p",null,"Sets the Agent ID ",(0,i.kt)("inlineCode",{parentName:"p"},"o")," as the new owner for the chain. This change will only be effective\nonce ",(0,i.kt)("a",{parentName:"p",href:"#claimchainownership"},(0,i.kt)("inlineCode",{parentName:"a"},"claimChainOwnership"))," is called by ",(0,i.kt)("inlineCode",{parentName:"p"},"o"),"."),(0,i.kt)("p",null,"It can only be invoked by the chain owner."),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"o")," (",(0,i.kt)("inlineCode",{parentName:"li"},"AgentID"),"): The Agent ID of the next chain owner.")),(0,i.kt)("h3",{id:"claimchainownership"},(0,i.kt)("inlineCode",{parentName:"h3"},"claimChainOwnership()")),(0,i.kt)("p",null,"Claims the ownership of the chain if the caller matches the identity set\nin ",(0,i.kt)("a",{parentName:"p",href:"#delegatechainownershipo-agentid"},(0,i.kt)("inlineCode",{parentName:"a"},"delegateChainOwnership")),"."),(0,i.kt)("h3",{id:"setchaininfomb-maxblobsize-me-maxeventsize-mr-maxeventsperrequest"},(0,i.kt)("inlineCode",{parentName:"h3"},"setChainInfo(mb MaxBlobSize, me MaxEventSize, mr MaxEventsPerRequest)")),(0,i.kt)("p",null,"Allows some chain parameters to be set by the chain owner."),(0,i.kt)("p",null,"Parameters:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mb")," (optional ",(0,i.kt)("inlineCode",{parentName:"li"},"uint32")," - default: don't change): Maximum ",(0,i.kt)("a",{parentName:"li",href:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/blob"},"blob")," size."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"me")," (optional ",(0,i.kt)("inlineCode",{parentName:"li"},"uint16")," - default: don't change): Maximum ",(0,i.kt)("a",{parentName:"li",href:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/blocklog"},"event")," size."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mr")," (optional ",(0,i.kt)("inlineCode",{parentName:"li"},"uint16")," - default: don't change): Maximum amount of ",(0,i.kt)("a",{parentName:"li",href:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/blocklog"},"events")," per request.")),(0,i.kt)("p",null,"It can only be invoked by the chain owner."),(0,i.kt)("h3",{id:"setfeepolicyg-feepolicy"},(0,i.kt)("inlineCode",{parentName:"h3"},"setFeePolicy(g FeePolicy)")),(0,i.kt)("p",null,"Sets the fee policy for the chain."),(0,i.kt)("h4",{id:"parameters-4"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"g"),": (",(0,i.kt)("a",{parentName:"li",href:"#feepolicy"},(0,i.kt)("inlineCode",{parentName:"a"},"FeePolicy")),").")),(0,i.kt)("p",null,"It can only be invoked by the chain owner."),(0,i.kt)("h3",{id:"addcandidatenodeip-pubkey-ic-certificate-ia-api-i-forcommittee"},(0,i.kt)("inlineCode",{parentName:"h3"},"addCandidateNode(ip PubKey, ic Certificate, ia API, i ForCommittee)")),(0,i.kt)("p",null,"Adds a node to the list of candidates."),(0,i.kt)("h4",{id:"parameters-5"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ip")," (",(0,i.kt)("inlineCode",{parentName:"li"},"[]byte"),"): The public key of the node to be added."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ic")," (",(0,i.kt)("inlineCode",{parentName:"li"},"[]byte"),"): The certificate is a signed binary containing both the node public key and their L1 address."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ia")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"): The API base URL for the node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"i")," (optional ",(0,i.kt)("inlineCode",{parentName:"li"},"bool")," - default: ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),"): Whether the candidate node is being added to be part of the committee or\njust an access node.")),(0,i.kt)("p",null,"It can only be invoked by the access node owner (verified via the Certificate field)."),(0,i.kt)("h3",{id:"revokeaccessnodeip-pubkey-ic-certificate-ia-api-i-forcommittee"},(0,i.kt)("inlineCode",{parentName:"h3"},"revokeAccessNode(ip PubKey, ic Certificate, ia API, i ForCommittee)")),(0,i.kt)("p",null,"Removes a node from the list of candidates."),(0,i.kt)("h4",{id:"parameters-6"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ip")," (",(0,i.kt)("inlineCode",{parentName:"li"},"[]byte"),"): The public key of the node to be removed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ic")," (",(0,i.kt)("inlineCode",{parentName:"li"},"[]byte"),"): The certificate of the node to be removed.")),(0,i.kt)("p",null,"It can only be invoked by the access node owner (verified via the Certificate field)."),(0,i.kt)("h3",{id:"changeaccessnodesn-actions"},(0,i.kt)("inlineCode",{parentName:"h3"},"changeAccessNodes(n actions)")),(0,i.kt)("p",null,"Iterates through the given map of actions and applies them."),(0,i.kt)("h4",{id:"parameters-7"},"Parameters"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"n")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/map.go"},(0,i.kt)("inlineCode",{parentName:"a"},"Map"))," of ",(0,i.kt)("inlineCode",{parentName:"li"},"public key")," => ",(0,i.kt)("inlineCode",{parentName:"li"},"byte"),"):\nThe list of actions to perform. Each byte value can be one of the following:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"0"),": Remove the access node from the access nodes list."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"1"),": Accept a candidate node and add it to the list of access nodes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"2"),": Drop an access node from the access node and candidate lists.")))),(0,i.kt)("p",null,"It can only be invoked by the chain owner."),(0,i.kt)("h3",{id:"startmaintenance"},(0,i.kt)("inlineCode",{parentName:"h3"},"startMaintenance()")),(0,i.kt)("p",null,"Starts the chain maintenance mode, meaning no further requests will be processed except calls to the governance\ncontract."),(0,i.kt)("p",null,"It can only be invoked by the chain owner."),(0,i.kt)("h3",{id:"stopmaintenance"},(0,i.kt)("inlineCode",{parentName:"h3"},"stopMaintenance()")),(0,i.kt)("p",null,"Stops the maintenance mode."),(0,i.kt)("p",null,"It can only be invoked by the chain owner."),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"views"},"Views"),(0,i.kt)("h3",{id:"getallowedstatecontrolleraddresses"},(0,i.kt)("inlineCode",{parentName:"h3"},"getAllowedStateControllerAddresses()")),(0,i.kt)("p",null,"Returns the list of allowed state controllers."),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"a")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/array16.go"},(0,i.kt)("inlineCode",{parentName:"a"},"Array16")),"\nof ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/iota.go/blob/develop/address.go"},(0,i.kt)("inlineCode",{parentName:"a"},"iotago::Address")),"): The list of allowed state\ncontrollers.")),(0,i.kt)("h3",{id:"getchainowner"},(0,i.kt)("inlineCode",{parentName:"h3"},"getChainOwner()")),(0,i.kt)("p",null,"Returns the AgentID of the chain owner."),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"o")," (",(0,i.kt)("inlineCode",{parentName:"li"},"AgentID"),"): The chain owner.")),(0,i.kt)("h3",{id:"getchaininfo"},(0,i.kt)("inlineCode",{parentName:"h3"},"getChainInfo()")),(0,i.kt)("h4",{id:"returns-2"},"Returns:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"c")," (",(0,i.kt)("inlineCode",{parentName:"li"},"ChainID"),"): The chain ID"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"o")," (",(0,i.kt)("inlineCode",{parentName:"li"},"AgentID"),"): The chain owner"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"d")," (",(0,i.kt)("inlineCode",{parentName:"li"},"string"),"): The chain description"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"g")," (",(0,i.kt)("a",{parentName:"li",href:"#feepolicy"},(0,i.kt)("inlineCode",{parentName:"a"},"FeePolicy")),"): The gas fee policy"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mb")," (",(0,i.kt)("inlineCode",{parentName:"li"},"uint32"),"): Maximum ",(0,i.kt)("a",{parentName:"li",href:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/blob"},"blob")," size"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"me")," (",(0,i.kt)("inlineCode",{parentName:"li"},"uint16"),"): Maximum ",(0,i.kt)("a",{parentName:"li",href:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/blocklog"},"event")," size"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mr")," (",(0,i.kt)("inlineCode",{parentName:"li"},"uint16"),"): Maximum amount of ",(0,i.kt)("a",{parentName:"li",href:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/blocklog"},"events")," per request")),(0,i.kt)("h3",{id:"getfeepolicy"},(0,i.kt)("inlineCode",{parentName:"h3"},"getFeePolicy()")),(0,i.kt)("p",null,"Returns the gas fee policy."),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"g")," (",(0,i.kt)("a",{parentName:"li",href:"#feepolicy"},(0,i.kt)("inlineCode",{parentName:"a"},"FeePolicy")),"): The gas fee policy.")),(0,i.kt)("h3",{id:"getchainnodes"},(0,i.kt)("inlineCode",{parentName:"h3"},"getChainNodes()")),(0,i.kt)("p",null,"Returns the current access nodes and candidates."),(0,i.kt)("h4",{id:"returns-4"},"Returns"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ac")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/map.go"},(0,i.kt)("inlineCode",{parentName:"a"},"Map"))," of public key => empty\nvalue): The access nodes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"an")," (",(0,i.kt)("a",{parentName:"li",href:"https://github.com/dessaya/wasp/blob/develop/packages/kv/collections/map.go"},(0,i.kt)("inlineCode",{parentName:"a"},"Map"))," of public key\n=> ",(0,i.kt)("a",{parentName:"li",href:"#accessnodeinfo"},(0,i.kt)("inlineCode",{parentName:"a"},"AccessNodeInfo")),"): The candidate nodes.")),(0,i.kt)("h3",{id:"getmaintenancestatus"},(0,i.kt)("inlineCode",{parentName:"h3"},"getMaintenanceStatus()")),(0,i.kt)("p",null,"Returns whether the chain is ongoing maintenance."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"m")," (",(0,i.kt)("inlineCode",{parentName:"li"},"bool"),"): ",(0,i.kt)("inlineCode",{parentName:"li"},"true")," if the chain is in maintenance mode")),(0,i.kt)("h2",{id:"schemas"},"Schemas"),(0,i.kt)("h3",{id:"feepolicy"},(0,i.kt)("inlineCode",{parentName:"h3"},"FeePolicy")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"FeePolicy")," is encoded as the concatenation of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Whether the gas fee token ID is set."),(0,i.kt)("li",{parentName:"ul"},"If this value is ",(0,i.kt)("inlineCode",{parentName:"li"},"false, the gas fee token is the base token.("),"bool`)."),(0,i.kt)("li",{parentName:"ul"},"(If gas fee token ID is ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),") The Token ID of the token used to charge for gas\nfee. (",(0,i.kt)("a",{parentName:"li",href:"/shimmer/smart-contracts/guide/core_concepts/core_contracts/accounts#tokenid"},(0,i.kt)("inlineCode",{parentName:"a"},"TokenID")),")"),(0,i.kt)("li",{parentName:"ul"},"Gas per token, i.e. how many units of gas a token pays for.(",(0,i.kt)("inlineCode",{parentName:"li"},"uint64"),")"),(0,i.kt)("li",{parentName:"ul"},"Validator fee share. Must be between 0 and 100, meaning the percentage of the gas fees distributed to the\nvalidators. (",(0,i.kt)("inlineCode",{parentName:"li"},"uint16"),")")),(0,i.kt)("h3",{id:"accessnodeinfo"},(0,i.kt)("inlineCode",{parentName:"h3"},"AccessNodeInfo")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"AccessNodeInfo")," is encoded as the concatenation of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The validator address. (",(0,i.kt)("inlineCode",{parentName:"li"},"[]byte")," prefixed by ",(0,i.kt)("inlineCode",{parentName:"li"},"uint16")," size)"),(0,i.kt)("li",{parentName:"ul"},"The certificate. (",(0,i.kt)("inlineCode",{parentName:"li"},"[]byte")," prefixed by ",(0,i.kt)("inlineCode",{parentName:"li"},"uint16")," size)"),(0,i.kt)("li",{parentName:"ul"},"Whether the access node is part of the committee of validators. (",(0,i.kt)("inlineCode",{parentName:"li"},"bool"),")"),(0,i.kt)("li",{parentName:"ul"},"The API base URL. (",(0,i.kt)("inlineCode",{parentName:"li"},"string")," prefixed by ",(0,i.kt)("inlineCode",{parentName:"li"},"uint16")," size)")))}p.isMDXComponent=!0}}]);