"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[46819],{3905:(e,a,t)=>{t.d(a,{Zo:()=>d,kt:()=>u});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),p=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},d=function(e){var a=p(e.components);return r.createElement(s.Provider,{value:a},e.children)},y={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},c=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(t),u=n,m=c["".concat(s,".").concat(u)]||c[u]||y[u]||i;return t?r.createElement(m,o(o({ref:a},d),{},{components:t})):r.createElement(m,o({ref:a},d))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},65232:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=t(87462),n=(t(67294),t(3905));const i={},o=void 0,l={unversionedId:"libraries/java/api/MessagePayload",id:"libraries/java/api/MessagePayload",title:"MessagePayload",description:"Message payload wrapper",source:"@site/iota/external/iota.rs/production/documentation/docs/libraries/java/api/MessagePayload.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/MessagePayload",permalink:"/iota.rs/libraries/java/api/MessagePayload",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/iota/external/iota.rs/production/documentation/docs/libraries/java/api/MessagePayload.mdx",tags:[],version:"current",frontMatter:{}},s={},p=[{value:"deserialize(serialised_data): MessagePayload",id:"deserializeserialised_data-messagepayload",level:3},{value:"payloadType(): MessagePayloadType",id:"payloadtype-messagepayloadtype",level:3},{value:"asIndexation(): IndexationPayload",id:"asindexation-indexationpayload",level:3},{value:"asMilestone(): MilestonePayload",id:"asmilestone-milestonepayload",level:3},{value:"asTransaction(): TransactionPayload",id:"astransaction-transactionpayload",level:3},{value:"asReceipt(): ReceiptPayload",id:"asreceipt-receiptpayload",level:3},{value:"asTreasury(): TreasuryPayload",id:"astreasury-treasurypayload",level:3},{value:"serialize(): String",id:"serialize-string",level:3}],d={toc:p};function y(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Message payload wrapper"),(0,n.kt)("h3",{id:"deserializeserialised_data-messagepayload"},"deserialize(serialised_data): ",(0,n.kt)("a",{parentName:"h3",href:"#messagepayload"},"MessagePayload")),(0,n.kt)("p",null,"Turns a serialized message payload string back into its class"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"serialised_data"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"payloadtype-messagepayloadtype"},"payloadType(): ",(0,n.kt)("a",{parentName:"h3",href:"#messagepayloadtype"},"MessagePayloadType")),(0,n.kt)("p",null,"Get the type of message this contains (used to select the correct getter)"),(0,n.kt)("h3",{id:"asindexation-indexationpayload"},"asIndexation(): ",(0,n.kt)("a",{parentName:"h3",href:"#indexationpayload"},"IndexationPayload")),(0,n.kt)("h3",{id:"asmilestone-milestonepayload"},"asMilestone(): ",(0,n.kt)("a",{parentName:"h3",href:"#milestonepayload"},"MilestonePayload")),(0,n.kt)("h3",{id:"astransaction-transactionpayload"},"asTransaction(): ",(0,n.kt)("a",{parentName:"h3",href:"#transactionpayload"},"TransactionPayload")),(0,n.kt)("h3",{id:"asreceipt-receiptpayload"},"asReceipt(): ",(0,n.kt)("a",{parentName:"h3",href:"#receiptpayload"},"ReceiptPayload")),(0,n.kt)("h3",{id:"astreasury-treasurypayload"},"asTreasury(): ",(0,n.kt)("a",{parentName:"h3",href:"#treasurypayload"},"TreasuryPayload")),(0,n.kt)("h3",{id:"serialize-string"},"serialize(): String"),(0,n.kt)("p",null,"Serializes the message payload into a json string"))}y.isMDXComponent=!0}}]);