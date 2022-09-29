"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[61547],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},18092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const a={toc:[{value:"Accessing the Client",id:"accessing-the-client",level:2},{value:"Persisting State via Snapshots",id:"persisting-state-via-snapshots",level:2},{value:"Working with Remote Strongholds",id:"working-with-remote-strongholds",level:2},{value:"Procedures",id:"procedures",level:2},{value:"<strong>Requests</strong>:",id:"requests",level:3},{value:"<strong>Responses</strong>:",id:"responses",level:3}]};function o(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stronghold-client-interface"},"Stronghold Client Interface"),(0,i.kt)("p",null,"The client gives access to all Stronghold features and holds all state like secrets or insecure custom data. The interface is type based and separates between local Stronghold operations and remote Stronghold operations. "),(0,i.kt)("h2",{id:"accessing-the-client"},"Accessing the Client"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Load Clients"),(0,i.kt)("li",{parentName:"ul"},"Create Clients"),(0,i.kt)("li",{parentName:"ul"},"Writing Secrets"),(0,i.kt)("li",{parentName:"ul"},"Reading / Writing from/into Store"),(0,i.kt)("li",{parentName:"ul"},"Executing Procedures")),(0,i.kt)("h2",{id:"persisting-state-via-snapshots"},"Persisting State via Snapshots"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Writing Client State into Snapshots")),(0,i.kt)("h2",{id:"working-with-remote-strongholds"},"Working with Remote Strongholds"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"place a reference to the examples here")),(0,i.kt)("h2",{id:"procedures"},"Procedures"),(0,i.kt)("h3",{id:"requests"},(0,i.kt)("strong",{parentName:"h3"},"Requests"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SLIP10Generate"),": Generate a raw SLIP10 seed of the specified size (in bytes, defaults to 64 bytes/512 bits) and store it in the ",(0,i.kt)("inlineCode",{parentName:"li"},"Location"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SLIP10Derive"),": Derive a Slip10 child key from a seed or parent key. Store the output in a specified ",(0,i.kt)("inlineCode",{parentName:"li"},"Location")," and return the corresponding ",(0,i.kt)("inlineCode",{parentName:"li"},"ChainCode"),". "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIP39Recover"),": Use a BIP39 mnemonic sentence (optionally protected by a passphrase) to create or recover a BIP39 seed and store it in the output ",(0,i.kt)("inlineCode",{parentName:"li"},"Location"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIP39Generate"),": Generate a BIP39 seed and its corresponding mnemonic sentence (optionally protected by a passphrase) and store them in the output ",(0,i.kt)("inlineCode",{parentName:"li"},"Location"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIP39MnemonicSentence"),": Read a BIP39 seed and its corresponding mnemonic sentence (optionally protected by a passphrase) and store them in the output ",(0,i.kt)("inlineCode",{parentName:"li"},"Location"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ed25519PublicKey"),": Derive an Ed25519 public key from the corresponding private key stored at the specified ",(0,i.kt)("inlineCode",{parentName:"li"},"Location"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ed25519Sign"),": Use the specified Ed25519 compatible key to sign the given message. Compatible keys are any record that contain the desired key material in the first 32 bytes, in particular SLIP10 keys are compatible.")),(0,i.kt)("h3",{id:"responses"},(0,i.kt)("strong",{parentName:"h3"},"Responses"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SLIP10Generate"),": Returns a ",(0,i.kt)("inlineCode",{parentName:"li"},"StatusMessage")," indicating the result of the request. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"SLIP10Derive"),": Returns a ",(0,i.kt)("inlineCode",{parentName:"li"},"ResultMessage")," with the ",(0,i.kt)("inlineCode",{parentName:"li"},"ChainCode")," inside of it. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIP39Recover"),": Returns a ",(0,i.kt)("inlineCode",{parentName:"li"},"StatusMessage")," indicating the result of the request. ."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIP39Generate"),": Returns a ",(0,i.kt)("inlineCode",{parentName:"li"},"StatusMessage")," indicating the result of the request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"BIP39MnemonicSentence"),": Returns the mnemonic sentence for the corresponding seed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ed25519PublicKey"),": Returns an Ed25519 public key inside of a ",(0,i.kt)("inlineCode",{parentName:"li"},"ResultMessage"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Ed25519Sign"),": Returns an Ed25519 signature inside of a ",(0,i.kt)("inlineCode",{parentName:"li"},"ResultMessage"),".")))}o.isMDXComponent=!0;const s={description:"The official client layer of Stronghold provides an Actix actor model system for easy Interface as well as functional pass-through to Stronghold's internal actor system.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","interface","procedures","requests","responses"]},l="Structure: Client",c={unversionedId:"reference/structure/client",id:"reference/structure/client",title:"Structure: Client",description:"The official client layer of Stronghold provides an Actix actor model system for easy Interface as well as functional pass-through to Stronghold's internal actor system.",source:"@site/next/external/stronghold.rs/develop/documentation/docs/reference/structure/client.md",sourceDirName:"reference/structure",slug:"/reference/structure/client",permalink:"/next/stronghold.rs/reference/structure/client",draft:!1,editUrl:"https://github.com/iotaledger/stronghold/edit/dev/documentation/next/external/stronghold.rs/develop/documentation/docs/reference/structure/client.md",tags:[],version:"current",frontMatter:{description:"The official client layer of Stronghold provides an Actix actor model system for easy Interface as well as functional pass-through to Stronghold's internal actor system.",image:"/img/logo/Stronghold_icon.png",keywords:["reference","rust","interface","procedures","requests","responses"]},sidebar:"mySidebar",previous:{title:"IOTA Stronghold Structure",permalink:"/next/stronghold.rs/reference/structure/overview"},next:{title:"Structure: Engine",permalink:"/next/stronghold.rs/reference/structure/engine/overview"}},p={},u=[],d={toc:u};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"structure-client"},"Structure: Client"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/stronghold.rs/tree/dev/client"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/github-source-blue.svg",alt:"github"})),"  ",(0,i.kt)("a",{parentName:"p",href:"https://docs.rs/iota_stronghold"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/rust-docs-green.svg",alt:"github"}))," ",(0,i.kt)("a",{parentName:"p",href:"https://crates.io/crates/iota_stronghold"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/crates/v/iota_stronghold.svg",alt:null}))),(0,i.kt)(o,{mdxType:"Client"}))}m.isMDXComponent=!0}}]);