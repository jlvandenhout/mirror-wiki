"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[82093],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),p=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},s=function(t){var e=p(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=p(r),m=n,b=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?a.createElement(b,o(o({ref:e},s),{},{components:r})):a.createElement(b,o({ref:e},s))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},82339:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={},o=void 0,l={unversionedId:"libraries/java/api/MqttManager",id:"libraries/java/api/MqttManager",title:"MqttManager",description:"withTopic(topic): MqttTopicManager",source:"@site/iota/external/iota.rs/production/documentation/docs/libraries/java/api/MqttManager.mdx",sourceDirName:"libraries/java/api",slug:"/libraries/java/api/MqttManager",permalink:"/iota.rs/libraries/java/api/MqttManager",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/iota/external/iota.rs/production/documentation/docs/libraries/java/api/MqttManager.mdx",tags:[],version:"current",frontMatter:{}},c={},p=[{value:"withTopic(topic): MqttTopicManager",id:"withtopictopic-mqtttopicmanager",level:3},{value:"withTopics(topics): MqttTopicManager",id:"withtopicstopics-mqtttopicmanager",level:3},{value:"unsubscribe(): void",id:"unsubscribe-void",level:3},{value:"disconnect(): void",id:"disconnect-void",level:3}],s={toc:p};function u(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h3",{id:"withtopictopic-mqtttopicmanager"},"withTopic(topic): ",(0,n.kt)("a",{parentName:"h3",href:"#mqtttopicmanager"},"MqttTopicManager")),(0,n.kt)("p",null,"Add a new topic to the list."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"topic"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#topic"},"Topic")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"withtopicstopics-mqtttopicmanager"},"withTopics(topics): ",(0,n.kt)("a",{parentName:"h3",href:"#mqtttopicmanager"},"MqttTopicManager")),(0,n.kt)("p",null,"Add a collection of topics to the list."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"topics"),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"#topic"},"Topic[]")),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("h3",{id:"unsubscribe-void"},"unsubscribe(): void"),(0,n.kt)("p",null,"Unsubscribes from all subscriptions."),(0,n.kt)("h3",{id:"disconnect-void"},"disconnect(): void"),(0,n.kt)("p",null,"Disconnects the broker.\nThis will clear the stored topic handlers and close the MQTT connection."))}u.isMDXComponent=!0}}]);