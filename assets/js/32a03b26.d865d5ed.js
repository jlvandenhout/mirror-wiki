"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[93126],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),g=i,m=u["".concat(s,".").concat(g)]||u[g]||p[g]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8324:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var r=n(87462),i=(n(67294),n(3905));const a={description:"Getting started with the official IOTA Client Library Node.js binding.",image:"/img/logo/iota_mark_light.png",keywords:["Node.js","dotenv","install","npm","yarn","security","how to"]},o="Getting Started With Node.js",l={unversionedId:"getting_started/nodejs",id:"getting_started/nodejs",title:"Getting Started With Node.js",description:"Getting started with the official IOTA Client Library Node.js binding.",source:"@site/iota/external/iota.rs/production/documentation/docs/getting_started/nodejs.md",sourceDirName:"getting_started",slug:"/getting_started/nodejs",permalink:"/iota.rs/getting_started/nodejs",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/iota/external/iota.rs/production/documentation/docs/getting_started/nodejs.md",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Client Library Node.js binding.",image:"/img/logo/iota_mark_light.png",keywords:["Node.js","dotenv","install","npm","yarn","security","how to"]},sidebar:"docs",previous:{title:"Android Development",permalink:"/iota.rs/getting_started/java/android_development"},next:{title:"Getting Started with IOTA Client Python Binding",permalink:"/iota.rs/getting_started/python"}},s={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Installing the Library",id:"installing-the-library",level:2},{value:"NPM",id:"npm",level:3},{value:"Yarn",id:"yarn",level:3},{value:"Using the Library",id:"using-the-library",level:2}],c={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started-with-nodejs"},"Getting Started With Node.js"),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"Before you can get started with the Node.js binding for the iota.rs client library, please make sure that you have\ninstalled ",(0,i.kt)("a",{parentName:"p",href:"https://nodejs.org/en/"},"Node"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/cargo/getting-started/installation.html"},"Rust and Cargo"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"NPM"),"\nor ",(0,i.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn"),"."),(0,i.kt)("h2",{id:"installing-the-library"},"Installing the Library"),(0,i.kt)("h3",{id:"npm"},"NPM"),(0,i.kt)("p",null,"If you are using NPM, you can install the binding in your project by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @iota/client\n")),(0,i.kt)("h3",{id:"yarn"},"Yarn"),(0,i.kt)("p",null,"If you are using Yarn, you can install the binding in your project by running the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @iota/client\n")),(0,i.kt)("h2",{id:"using-the-library"},"Using the Library"),(0,i.kt)("p",null,"The following example shows you how to include the library and connect to a devnet node. "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"const { ClientBuilder } = require('@iota/client')\nconst client = new ClientBuilder()\n    .node('https://api.lb-0.h.chrysalis-devnet.iota.cafe')\n    .build()\nclient.getInfo().then(console.log).catch(console.error)\n")))}p.isMDXComponent=!0}}]);