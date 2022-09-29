"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[95504],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),d=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},o=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,m=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),o=d(a),u=n,N=o["".concat(m,".").concat(u)]||o[u]||k[u]||l;return a?r.createElement(N,i(i({ref:t},s),{},{components:a})):r.createElement(N,i({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=o;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}o.displayName="MDXCreateElement"},2706:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const l={description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},i="Class: WriteStream",p={unversionedId:"references/util/classes/WriteStream",id:"references/util/classes/WriteStream",title:"Class: WriteStream",description:"iota.js API reference",source:"@site/shimmer/external/iota.js/documentation/docs/references/util/classes/WriteStream.md",sourceDirName:"references/util/classes",slug:"/references/util/classes/WriteStream",permalink:"/shimmer/iotajs/references/util/classes/WriteStream",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/shimmer/external/iota.js/documentation/docs/references/util/classes/WriteStream.md",tags:[],version:"current",frontMatter:{description:"iota.js API reference",keywords:["references","api references","typescript"],image:"/img/client_banner.png"},sidebar:"docs",previous:{title:"Class: ReadStream",permalink:"/shimmer/iotajs/references/util/classes/ReadStream"},next:{title:"Troubleshooting",permalink:"/shimmer/iotajs/troubleshooting"}},m={},d=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Methods",id:"methods-1",level:2},{value:"length",id:"length",level:3},{value:"Returns",id:"returns",level:4},{value:"unused",id:"unused",level:3},{value:"Returns",id:"returns-1",level:4},{value:"finalBytes",id:"finalbytes",level:3},{value:"Returns",id:"returns-2",level:4},{value:"finalHex",id:"finalhex",level:3},{value:"Returns",id:"returns-3",level:4},{value:"getWriteIndex",id:"getwriteindex",level:3},{value:"Returns",id:"returns-4",level:4},{value:"setWriteIndex",id:"setwriteindex",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns-5",level:4},{value:"writeFixedHex",id:"writefixedhex",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-6",level:4},{value:"writeBytes",id:"writebytes",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-7",level:4},{value:"writeUInt8",id:"writeuint8",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-8",level:4},{value:"writeUInt16",id:"writeuint16",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-9",level:4},{value:"writeUInt32",id:"writeuint32",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-10",level:4},{value:"writeUInt64",id:"writeuint64",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-11",level:4},{value:"writeUInt256",id:"writeuint256",level:3},{value:"Parameters",id:"parameters-7",level:4},{value:"Returns",id:"returns-12",level:4},{value:"writeBoolean",id:"writeboolean",level:3},{value:"Parameters",id:"parameters-8",level:4},{value:"Returns",id:"returns-13",level:4}],s={toc:d};function k(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"class-writestream"},"Class: WriteStream"),(0,n.kt)("p",null,"Keep track of the write index within a stream."),(0,n.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,n.kt)("h3",{id:"constructors"},"Constructors"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/WriteStream#constructor"},"constructor"))),(0,n.kt)("h3",{id:"methods"},"Methods"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/WriteStream#length"},"length")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/WriteStream#unused"},"unused")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/WriteStream#finalbytes"},"finalBytes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/WriteStream#finalhex"},"finalHex")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/WriteStream#getwriteindex"},"getWriteIndex")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/WriteStream#setwriteindex"},"setWriteIndex")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/WriteStream#writefixedhex"},"writeFixedHex")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/WriteStream#writebytes"},"writeBytes")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/WriteStream#writeuint8"},"writeUInt8")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/WriteStream#writeuint16"},"writeUInt16")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/WriteStream#writeuint32"},"writeUInt32")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/WriteStream#writeuint64"},"writeUInt64")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/WriteStream#writeuint256"},"writeUInt256")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/shimmer/iotajs/references/util/classes/WriteStream#writeboolean"},"writeBoolean"))),(0,n.kt)("h2",{id:"constructors-1"},"Constructors"),(0,n.kt)("h3",{id:"constructor"},"constructor"),(0,n.kt)("p",null,"\u2022 ",(0,n.kt)("strong",{parentName:"p"},"new WriteStream"),"()"),(0,n.kt)("p",null,"Create a new instance of ReadStream."),(0,n.kt)("h2",{id:"methods-1"},"Methods"),(0,n.kt)("h3",{id:"length"},"length"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"length"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"Get the length of the stream."),(0,n.kt)("h4",{id:"returns"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The stream length."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"unused"},"unused"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"unused"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"How much unused data is there."),(0,n.kt)("h4",{id:"returns-1"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The amount of unused data."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"finalbytes"},"finalBytes"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"finalBytes"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,n.kt)("p",null,"Get the final stream as bytes."),(0,n.kt)("h4",{id:"returns-2"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Uint8Array")),(0,n.kt)("p",null,"The final stream."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"finalhex"},"finalHex"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"finalHex"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"Get the final stream as hex."),(0,n.kt)("h4",{id:"returns-3"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"string")),(0,n.kt)("p",null,"The final stream as hex."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"getwriteindex"},"getWriteIndex"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"getWriteIndex"),"(): ",(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"Get the current write index."),(0,n.kt)("h4",{id:"returns-4"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"number")),(0,n.kt)("p",null,"The current write index."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"setwriteindex"},"setWriteIndex"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"setWriteIndex"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"writeIndex"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Set the current write index."),(0,n.kt)("h4",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"writeIndex")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The current write index.")))),(0,n.kt)("h4",{id:"returns-5"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"writefixedhex"},"writeFixedHex"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"writeFixedHex"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"length"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"val"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Write fixed length stream."),(0,n.kt)("h4",{id:"parameters-1"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of the data we are trying to write.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"length")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The length of the data to write.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"val")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The data to write.")))),(0,n.kt)("h4",{id:"returns-6"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"writebytes"},"writeBytes"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"writeBytes"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"length"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"val"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Write fixed length stream."),(0,n.kt)("h4",{id:"parameters-2"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of the data we are trying to write.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"length")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The length of the data to write.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"val")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"Uint8Array")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The data to write.")))),(0,n.kt)("h4",{id:"returns-7"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"writeuint8"},"writeUInt8"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"writeUInt8"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"val"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Write a byte to the stream."),(0,n.kt)("h4",{id:"parameters-3"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of the data we are trying to write.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"val")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The data to write.")))),(0,n.kt)("h4",{id:"returns-8"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"writeuint16"},"writeUInt16"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"writeUInt16"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"val"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Write a UInt16 to the stream."),(0,n.kt)("h4",{id:"parameters-4"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of the data we are trying to write.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"val")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The data to write.")))),(0,n.kt)("h4",{id:"returns-9"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"writeuint32"},"writeUInt32"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"writeUInt32"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"val"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Write a UInt32 to the stream."),(0,n.kt)("h4",{id:"parameters-5"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of the data we are trying to write.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"val")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"number")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The data to write.")))),(0,n.kt)("h4",{id:"returns-10"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"writeuint64"},"writeUInt64"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"writeUInt64"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"val"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Write a UInt64 to the stream."),(0,n.kt)("h4",{id:"parameters-6"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of the data we are trying to write.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"val")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"BigInteger")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The data to write.")))),(0,n.kt)("h4",{id:"returns-11"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"writeuint256"},"writeUInt256"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"writeUInt256"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"val"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Write a UInt256 to the stream."),(0,n.kt)("h4",{id:"parameters-7"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of the data we are trying to write.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"val")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"BigInteger")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The data to write.")))),(0,n.kt)("h4",{id:"returns-12"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"writeboolean"},"writeBoolean"),(0,n.kt)("p",null,"\u25b8 ",(0,n.kt)("strong",{parentName:"p"},"writeBoolean"),"(",(0,n.kt)("inlineCode",{parentName:"p"},"name"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"val"),"): ",(0,n.kt)("inlineCode",{parentName:"p"},"void")),(0,n.kt)("p",null,"Write a boolean to the stream."),(0,n.kt)("h4",{id:"parameters-8"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"name")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"string")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The name of the data we are trying to write.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"val")),(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"boolean")),(0,n.kt)("td",{parentName:"tr",align:"left"},"The data to write.")))),(0,n.kt)("h4",{id:"returns-13"},"Returns"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"void")))}k.isMDXComponent=!0}}]);