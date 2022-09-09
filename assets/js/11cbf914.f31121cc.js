"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[54367],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(n),h=o,d=b["".concat(c,".").concat(h)]||b[h]||p[h]||a;return n?r.createElement(d,i(i({ref:t},u),{},{components:n})):r.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={description:"A channel subscriber is any user within a channel that is not the author.  It can be generated independently without verification by an author.",image:"/img/overview/layered_overview.svg",keywords:["explanation","subscribers","share keys","authorization"]},i="Subscribers",s={unversionedId:"explanations/channels_protocol/subscribers",id:"explanations/channels_protocol/subscribers",title:"Subscribers",description:"A channel subscriber is any user within a channel that is not the author.  It can be generated independently without verification by an author.",source:"@site/content/build/streams/develop/documentation/docs/explanations/channels_protocol/subscribers.md",sourceDirName:"explanations/channels_protocol",slug:"/explanations/channels_protocol/subscribers",permalink:"/streams/explanations/channels_protocol/subscribers",draft:!1,editUrl:"https://github.com/iotaledger/streams/edit/develop/documentation/content/build/streams/develop/documentation/docs/explanations/channels_protocol/subscribers.md",tags:[],version:"current",frontMatter:{description:"A channel subscriber is any user within a channel that is not the author.  It can be generated independently without verification by an author.",image:"/img/overview/layered_overview.svg",keywords:["explanation","subscribers","share keys","authorization"]},sidebar:"docs",previous:{title:"Authors",permalink:"/streams/explanations/channels_protocol/authors"},next:{title:"Branching",permalink:"/streams/explanations/channels_protocol/branching"}},c={},l=[],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"subscribers"},"Subscribers"),(0,o.kt)("p",null,"A channel subscriber is any user within a channel that is not the author. A subscriber can be generated\nindependently without verification by an author, but in order to write to a branch, or to process any\nprivate streams, they will be required to subscribe to the channel, and have the author accept and process\nthat subscription. A subscriber may also use pre-shared keys instead of subscription as a method of\ninteracting with a stream without conducting a subscription process."))}p.isMDXComponent=!0}}]);