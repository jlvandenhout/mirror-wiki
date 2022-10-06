"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[87216],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},60250:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(87462),i=(r(67294),r(3905));const a={keywords:["reference"],description:"The technical writer's guide for IOTA Wiki.",image:"/img/iota-wiki.png"},o="Structure",s={unversionedId:"contribute-to-wiki/reference/style/structure",id:"contribute-to-wiki/reference/style/structure",title:"Structure",description:"The technical writer's guide for IOTA Wiki.",source:"@site/iota/community/contribute-to-wiki/reference/style/structure.md",sourceDirName:"contribute-to-wiki/reference/style",slug:"/contribute-to-wiki/reference/style/structure",permalink:"/community/contribute-to-wiki/reference/style/structure",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/iota/community/contribute-to-wiki/reference/style/structure.md",tags:[],version:"current",lastUpdatedAt:1664326631,formattedLastUpdatedAt:"Sep 28, 2022",frontMatter:{keywords:["reference"],description:"The technical writer's guide for IOTA Wiki.",image:"/img/iota-wiki.png"},sidebar:"learn",previous:{title:"Manifesto",permalink:"/community/contribute-to-wiki/reference/style/manifesto"},next:{title:"Matter",permalink:"/community/contribute-to-wiki/reference/style/matter"}},c={},l=[{value:"The Wiki",id:"the-wiki",level:2},{value:"Spaces and Subspaces",id:"spaces-and-subspaces",level:2},{value:"Articles",id:"articles",level:2},{value:"Paragraphs",id:"paragraphs",level:2},{value:"Miscellaneous",id:"miscellaneous",level:2}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"structure"},"Structure"),(0,i.kt)("h2",{id:"the-wiki"},"The Wiki"),(0,i.kt)("p",null,"Articles for users belong either to the ",(0,i.kt)("a",{parentName:"p",href:"/learn/about-iota/an-introduction-to-iota"},"Learn")," or ",(0,i.kt)("a",{parentName:"p",href:"/develop/nodes/about-nodes"},"Participate")," spaces. "),(0,i.kt)("h2",{id:"spaces-and-subspaces"},"Spaces and Subspaces"),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For software project documentation, see ",(0,i.kt)("a",{parentName:"p",href:"/community/contribute-to-wiki/reference/structure/overview"},"additional guidelines"),".")),(0,i.kt)("p",null,"Each Wiki's space and subspace has its own table of contents. Always include a welcoming page that would also serve as the landing page of the space. Briefly explain what kind of information the reader could find there and briefly mention points of interest like getting started articles, contribution guidelines, or API reference."),(0,i.kt)("p",null,"Group related articles in categories or subcategories. Arrange the whole space in a natural order of learning. Rearrange articles if an article refers to a subject that is introduced down the table of contents."),(0,i.kt)("p",null,"Anticipate that someone could read the wiki out of order and ",(0,i.kt)("a",{parentName:"p",href:"/community/contribute-to-wiki/reference/style/formatting#links"},"link")," related subjects."),(0,i.kt)("h2",{id:"articles"},"Articles"),(0,i.kt)("p",null,"Structure an article just like you would organize a space: explain basics first and advanced topics later, and group paragraphs with sections and subsections if they share the same topic or theme."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/community/contribute-to-wiki/reference/style/formatting#headings"},"formatting")," recommendations on headings."),(0,i.kt)("h2",{id:"paragraphs"},"Paragraphs"),(0,i.kt)("p",null,"Each paragraph should convey only one thought. If a paragraph has multiple ideas, split it. If multiple paragraphs convey the exact same thought, try to remove duplicates or merge them."),(0,i.kt)("p",null,"The reader should understand what a paragraph is about from its first sentence. Sometimes readers just skim over the article to quickly find a single bit of information \u2014 and your article should respect that. It also detaches a new paragraph from a previous thought and provides you with context to naturally elaborate on."),(0,i.kt)("p",null,'The first sentence of the first paragraph convinces the reader to start reading. Never spend it on weak statements like "This is the opening article in a series on the Topic, and it explains such basics as this and that." The best introductions are concrete.'),(0,i.kt)("h2",{id:"miscellaneous"},"Miscellaneous"),(0,i.kt)("p",null,"Sometimes information is best served with supporting media \u2014 see the formatting recommendations on ",(0,i.kt)("a",{parentName:"p",href:"/community/contribute-to-wiki/reference/style/formatting#freestanding-elements"},"freestanding elements"),"."),(0,i.kt)("p",null,"Parallel structures help with reading and navigation. It works on any level from space to sentence. Install, Configure, Run sounds natural, and Install, Initial Setup, Run does not. Sometimes your prompt would do better without a parallel structure: for example, a paragraph where every sentence starts with the same phrase or word could sound repetitive."))}p.isMDXComponent=!0}}]);