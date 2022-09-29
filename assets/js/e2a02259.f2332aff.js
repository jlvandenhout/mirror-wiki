"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[38254],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var i=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},o=Object.keys(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),c=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),v=n,f=d["".concat(s,".").concat(v)]||d[v]||p[v]||o;return r?i.createElement(f,a(a({ref:t},u),{},{components:r})):i.createElement(f,a({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<o;c++)a[c]=r[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}d.displayName="MDXCreateElement"},78186:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=r(87462),n=(r(67294),r(3905));const o={title:"Tutorials Overview",sidebar_label:"Overview",description:"Provide overview of the tutorials",image:"/img/Identity_icon.png",keywords:["tutorials"]},a=void 0,l={unversionedId:"tutorials/overview",id:"tutorials/overview",title:"Tutorials Overview",description:"Provide overview of the tutorials",source:"@site/iota/external/identity.rs/v0.5.0/documentation/docs/tutorials/overview.md",sourceDirName:"tutorials",slug:"/tutorials/overview",permalink:"/identity.rs/0.5/tutorials/overview",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.5/documentation/iota/external/identity.rs/v0.5.0/documentation/docs/tutorials/overview.md",tags:[],version:"current",frontMatter:{title:"Tutorials Overview",sidebar_label:"Overview",description:"Provide overview of the tutorials",image:"/img/Identity_icon.png",keywords:["tutorials"]},sidebar:"docs",previous:{title:"API Reference",permalink:"/identity.rs/0.5/libraries/wasm/api_reference"},next:{title:"validate_university_degree",permalink:"/identity.rs/0.5/tutorials/validate_university_degree"}},s={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this section you will find end-to-end examples using the library to achieve common use-cases."),(0,n.kt)("p",null,"List of tutorials:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"./validate_university_degree"},"validate_university_degree"),": Use the Wasm bindings to digitally prove the existence and validity of a degree.")))}p.isMDXComponent=!0}}]);