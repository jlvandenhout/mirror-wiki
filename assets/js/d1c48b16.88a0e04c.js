"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[61191],{3905:(t,e,r)=>{r.d(e,{Zo:()=>c,kt:()=>k});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var p=n.createContext({}),s=function(t){var e=n.useContext(p),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},c=function(t){var e=s(t.components);return n.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,p=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=s(r),k=a,d=m["".concat(p,".").concat(k)]||m[k]||u[k]||o;return r?n.createElement(d,i(i({ref:e},c),{},{components:r})):n.createElement(d,i({ref:e},c))}));function k(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},13447:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i=void 0,l={unversionedId:"reference/java_api/BrokerOptions",id:"reference/java_api/BrokerOptions",title:"BrokerOptions",description:"The MQTT broker options.",source:"@site/iota/external/wallet.rs/production/documentation/docs/reference/java_api/BrokerOptions.mdx",sourceDirName:"reference/java_api",slug:"/reference/java_api/BrokerOptions",permalink:"/wallet.rs/reference/java_api/BrokerOptions",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/production/documentation/iota/external/wallet.rs/production/documentation/docs/reference/java_api/BrokerOptions.mdx",tags:[],version:"current",frontMatter:{}},p={},s=[{value:"BrokerOptions(): BrokerOptions",id:"brokeroptions-brokeroptions",level:3},{value:"automaticDisconnect(disconnect): BrokerOptions",id:"automaticdisconnectdisconnect-brokeroptions",level:3},{value:"timeout(timeout): BrokerOptions",id:"timeouttimeout-brokeroptions",level:3},{value:"useWs(use_ws): BrokerOptions",id:"usewsuse_ws-brokeroptions",level:3},{value:"port(port): BrokerOptions",id:"portport-brokeroptions",level:3},{value:"maxReconnectionAttempts(max_reconnection_attempts): BrokerOptions",id:"maxreconnectionattemptsmax_reconnection_attempts-brokeroptions",level:3}],c={toc:s};function u(t){let{components:e,...r}=t;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The MQTT broker options."),(0,a.kt)("h3",{id:"brokeroptions-brokeroptions"},"BrokerOptions(): ",(0,a.kt)("a",{parentName:"h3",href:"#brokeroptions"},"BrokerOptions")),(0,a.kt)("h3",{id:"automaticdisconnectdisconnect-brokeroptions"},"automaticDisconnect(disconnect): ",(0,a.kt)("a",{parentName:"h3",href:"#brokeroptions"},"BrokerOptions")),(0,a.kt)("p",null,"Whether the MQTT broker should be automatically disconnected when all topics are unsubscribed or not."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"disconnect"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null})))),(0,a.kt)("h3",{id:"timeouttimeout-brokeroptions"},"timeout(timeout): ",(0,a.kt)("a",{parentName:"h3",href:"#brokeroptions"},"BrokerOptions")),(0,a.kt)("p",null,"timeout of the mqtt broker."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"The timeout in seconds")))),(0,a.kt)("h3",{id:"usewsuse_ws-brokeroptions"},"useWs(use_ws): ",(0,a.kt)("a",{parentName:"h3",href:"#brokeroptions"},"BrokerOptions")),(0,a.kt)("p",null,"Defines if websockets should be used (true) or TCP (false)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"use_ws"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"If we use web sockets or not")))),(0,a.kt)("h3",{id:"portport-brokeroptions"},"port(port): ",(0,a.kt)("a",{parentName:"h3",href:"#brokeroptions"},"BrokerOptions")),(0,a.kt)("p",null,"Defines the port to be used for the MQTT connection"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"port"),(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"The port we use to conenct")))),(0,a.kt)("h3",{id:"maxreconnectionattemptsmax_reconnection_attempts-brokeroptions"},"maxReconnectionAttempts(max_reconnection_attempts): ",(0,a.kt)("a",{parentName:"h3",href:"#brokeroptions"},"BrokerOptions")),(0,a.kt)("p",null,"Defines the maximum reconnection attempts before it returns an error"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"max_reconnection_attempts"),(0,a.kt)("td",{parentName:"tr",align:null},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"The maximum attempts")))))}u.isMDXComponent=!0}}]);