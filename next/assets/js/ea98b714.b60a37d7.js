"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[6528],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,m=d["".concat(c,".").concat(h)]||d[h]||u[h]||r;return n?i.createElement(m,o(o({ref:t},p),{},{components:n})):i.createElement(m,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<r;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},55437:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var i=n(87462),a=(n(67294),n(3905));const r={keywords:["documentation","api","reference","jwt","authentication"]},o="Authentication",l={unversionedId:"reference/authentication",id:"reference/authentication",title:"Authentication",description:"Usage of the Chronicle API can be protected using JWT, by setting the following configuration settings under the api] table in [config.toml.",source:"@site/next/external/chronicle/documentation/docs/reference/authentication.md",sourceDirName:"reference",slug:"/reference/authentication",permalink:"/next/chronicle/reference/authentication",draft:!1,editUrl:"https://github.com/iotaledger/inx-chronicle/edit/main/documentation/next/external/chronicle/documentation/docs/reference/authentication.md",tags:[],version:"current",frontMatter:{keywords:["documentation","api","reference","jwt","authentication"]},sidebar:"docs",previous:{title:"Docker",permalink:"/next/chronicle/getting_started/docker"},next:{title:"API",permalink:"/next/chronicle/reference/api"}},c={},s=[{value:"Public Routes",id:"public-routes",level:2},{value:"Keys",id:"keys",level:2},{value:"Generating a Token",id:"generating-a-token",level:2},{value:"Providing a Token",id:"providing-a-token",level:2}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"authentication"},"Authentication"),(0,a.kt)("p",null,"Usage of the Chronicle API can be protected using ",(0,a.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JWT"),", by setting the following configuration settings under the ",(0,a.kt)("inlineCode",{parentName:"p"},"[api]")," table in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/inx-chronicle/blob/main/config.template.toml"},"config.toml"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"password_hash")," - The ",(0,a.kt)("a",{parentName:"li",href:"https://argon2.online/"},"argon2")," hash of your chosen password."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"password_salt")," - The salt used to hash the above password."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"identity_path")," - The path to an ",(0,a.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/EdDSA"},"EdDSA")," secret key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"jwt_expiration")," - The duration for which the JWT token is valid."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public_routes")," - A list of routes that can be accessed without providing a token. These can include the wildcard (*) symbol to allow any sequence of characters to match.")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"[api.argon_config]")," sub-table can be used to configure the argon2 hash generation, using the following settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hash_length")," - The length of the resulting hash in bytes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"parallelism")," - The number of threads used."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"mem_cost")," - The memory used."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iterations")," - The number of iterations to perform."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"variant")," - One of three variants: ",(0,a.kt)("a",{parentName:"li",href:"https://www.argon2d.com/"},"argon2d"),", ",(0,a.kt)("a",{parentName:"li",href:"https://www.argon2i.com/"},"argon2i"),", or ",(0,a.kt)("a",{parentName:"li",href:"https://www.argon2id.com/"},"argon2id"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"version")," - The argon version (currently 0x13).")),(0,a.kt)("p",null,"All JWT interactions should be performed via HTTPS."),(0,a.kt)("h2",{id:"public-routes"},"Public Routes"),(0,a.kt)("p",null,"When a route is configured to be public, it can be accessed freely without providing a JWT. Thus, you should take care when specifying these routes, as a mis-configured route can open the application up to attacks. The only accepted special character is the wildcard (",(0,a.kt)("inlineCode",{parentName:"p"},"*"),"), which will be converted to a regex ",(0,a.kt)("inlineCode",{parentName:"p"},".*")," and match against the original URI."),(0,a.kt)("p",null,"For instance, a request ",(0,a.kt)("inlineCode",{parentName:"p"},"GET https://localhost:XXXX/api/core/v2/milestones/by-index/10000")," will check the set of public routes against the segment ",(0,a.kt)("inlineCode",{parentName:"p"},"/api/core/v2/milestones/by-index/10000"),". "),(0,a.kt)("p",null,"Matching strings include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/*")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/core/*/milestones/by-index/*")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"*10000"))),(0,a.kt)("p",null,"Non-matching strings include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/core/v2/milestones/by-index/*")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/core/v2/milestones/by-index")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"/api/core/v1/*"))),(0,a.kt)("p",null,"If JWT is used, these routes should be as specific as possible to avoid accidentally exposing unintended routes."),(0,a.kt)("h2",{id:"keys"},"Keys"),(0,a.kt)("p",null,"Chronicle uses an EdDSA secret key to create tokens, which can be generated by the application at startup or provided as an identity file using the ",(0,a.kt)("inlineCode",{parentName:"p"},"identity_path")," config. Currently, this file must be a PKCS8 secret key (",(0,a.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc5208"},"RFC 5208"),") PEM file. The location of this file can also optionally be specified using the ",(0,a.kt)("inlineCode",{parentName:"p"},"IDENTITY_PATH")," env variable, which will be overridden by the config file value. If no such file is provided, a secret key is randomly generated for use while the application is running."),(0,a.kt)("h2",{id:"generating-a-token"},"Generating a Token"),(0,a.kt)("p",null,"A special route at the root (",(0,a.kt)("inlineCode",{parentName:"p"},"/login"),") is provided for generating a new token. This token will use the password config as well as the ",(0,a.kt)("inlineCode",{parentName:"p"},"jwt_expiration")," and the secret key. This token can be manually generated by the client, if desired, by using the same identity and claims."),(0,a.kt)("p",null,"Static claims used by Chronicle are:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iss"),": ",(0,a.kt)("inlineCode",{parentName:"li"},'"chronicle"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"aud"),": ",(0,a.kt)("inlineCode",{parentName:"li"},'"api"'))),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sub")," (subject) claim is filled using a unique UUID, however it is not currently stored or validated by Chronicle."),(0,a.kt)("h2",{id:"providing-a-token"},"Providing a Token"),(0,a.kt)("p",null,"To provide a token when making a request, include it in an ",(0,a.kt)("inlineCode",{parentName:"p"},"Authorization")," header using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Bearer")," authentication scheme."))}u.isMDXComponent=!0}}]);