"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[89837],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=l(a),h=r,p=u["".concat(c,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(p,i(i({ref:t},m),{},{components:a})):n.createElement(p,i({ref:t},m))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},81984:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const o={keywords:["code generation","schema tool","automatic","repetitive code fragments","robust","schema definition file"],description:"To facilitate code generation, we decided to use a _schema definition file_ for smart contracts. All aspects of a smart contract that should be known by someone who wants to use the contract are clearly defined in a schema definition file.",image:"/img/logo/WASP_logo_dark.png"},i="Smart Contract Schema Tool",s={unversionedId:"guide/wasm_vm/schema",id:"guide/wasm_vm/schema",title:"Smart Contract Schema Tool",description:"To facilitate code generation, we decided to use a _schema definition file_ for smart contracts. All aspects of a smart contract that should be known by someone who wants to use the contract are clearly defined in a schema definition file.",source:"@site/next/external/wasp/documentation/docs/guide/wasm_vm/schema.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/schema",permalink:"/next/smart-contracts/guide/wasm_vm/schema",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/next/external/wasp/documentation/docs/guide/wasm_vm/schema.mdx",tags:[],version:"current",frontMatter:{keywords:["code generation","schema tool","automatic","repetitive code fragments","robust","schema definition file"],description:"To facilitate code generation, we decided to use a _schema definition file_ for smart contracts. All aspects of a smart contract that should be known by someone who wants to use the contract are clearly defined in a schema definition file.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Call Context",permalink:"/next/smart-contracts/guide/wasm_vm/context"},next:{title:"Using the Schema Tool",permalink:"/next/smart-contracts/guide/wasm_vm/usage"}},c={},l=[],m={toc:l};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"smart-contract-schema-tool"},"Smart Contract Schema Tool"),(0,r.kt)("p",null,"Smart contracts need to be very robust. The generic nature of WasmLib allows for a lot of\nflexibility, but it also provides a lot of opportunities to make mistakes. In addition,\nthere is a lot of repetitive coding involved in creating smart contracts. The setup code\nthat is needed for every smart contract must follow strict rules. You also want to assure\nthat certain functions can only be called by specific entities. You need to verify that\nmandatory function parameter values are present. And function parameter values and return\nvalues need to be converted between their binary representation and their actual data\ntype in a consistent way."),(0,r.kt)("p",null,"The best way to increase robustness is by using a code generator that will take care of\nmost repetitive coding tasks. A code generator only needs to be debugged once, after which\nthe generated code is 100% accurate and trustworthy. Another advantage of code generation\nis that you can regenerate code to correctly reflect any changes to the smart contract\ninterface. A code generator can also help you by generating wrapper code that limits what\nyou can do to mirror the intent behind it. This enables compile-time enforcing of some\naspects of the defined smart contract behavior. A code generator can also support multiple\ndifferent programming languages."),(0,r.kt)("p",null,"During the initial experiences with creating demo smart contracts for WasmLib, we quickly\nidentified a number of areas where there was a lot of repetitive coding going on. Some\nexamples of repetition were:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Setting up the ",(0,r.kt)("inlineCode",{parentName:"li"},"on_load")," function and keeping it up to date"),(0,r.kt)("li",{parentName:"ul"},"Checking function access rights"),(0,r.kt)("li",{parentName:"ul"},"Verifying function parameter types"),(0,r.kt)("li",{parentName:"ul"},"Verifying the presence of mandatory function parameters"),(0,r.kt)("li",{parentName:"ul"},"Setting up access to ",(0,r.kt)("a",{parentName:"li",href:"/next/smart-contracts/guide/wasm_vm/state"},"State"),", ",(0,r.kt)("a",{parentName:"li",href:"/next/smart-contracts/guide/wasm_vm/params"},"Params"),", and ",(0,r.kt)("a",{parentName:"li",href:"/next/smart-contracts/guide/wasm_vm/results"},"Results")," maps"),(0,r.kt)("li",{parentName:"ul"},"Defining common strings as constants")),(0,r.kt)("p",null,"To facilitate the code generation, it was decided to use a ",(0,r.kt)("em",{parentName:"p"},"schema definition file")," for\nsmart contracts. The aspects of a smart contract that should be known by someone who wants\nto use the contract are all clearly defined in a schema definition file. This schema\ndefinition file then becomes the single source of truth for the interface to the smart\ncontract. This schema definition file is then used by our ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/usage"},"Schema Tool")," to\nautomatically generate a complete smart contract skeleton that reflects the schema\ndefinition and only needs to be augmented by providing the actual function\nimplementations."),(0,r.kt)("p",null,"The schema definition file defines things like the ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/state"},"state storage")," variables\nthat the smart contract uses, the ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/funcs"},"Funcs")," and ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/views"},"Views")," that the\ncontract implements, the ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/access"},"access rights")," for each function, the\n",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/params"},"input parameters")," and ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/results"},"output results")," for each function, and\nadditional data structures that the contract uses."),(0,r.kt)("p",null,"With detailed schema information readily available in a single location, it becomes\npossible to do a lot more than just generating repetitive code fragments. You can use the\nschema information to generate the interfaces to functions, and have parameters, results,\nand state variables that use strict compile-time type-checking. That removes a common\nsource of accidental errors. The generated interface can also be used by client side code\nso that there is a single, consistent way of calling smart contract functions."),(0,r.kt)("p",null,"Another advantage of knowing everything about important smart contract aspects is that it\nis possible to generate constants to prevent repeating of typo-prone key strings, and\nprecalculate necessary values like Hnames and encode them as constants instead of having\nthe code recalculate them every time they are needed."),(0,r.kt)("p",null,"Similarly, since you know all static keys that are going to be used by the smart contract\nin advance, you can now generate code that will inform the host correctly about all Funcs\nand Views that are available in the smart contract."),(0,r.kt)("p",null,"Because of all this the code becomes both simpler and more efficient. Note that all the\nimprovements described above are independent of the actual programming language that is\nbeing generated."),(0,r.kt)("p",null,"The schema definition file can also provide a starting point for other tooling, for\nexample a tool that automatically audits a smart contract."),(0,r.kt)("p",null,"In the next section we will look at how the ",(0,r.kt)("a",{parentName:"p",href:"/next/smart-contracts/guide/wasm_vm/usage"},"Schema Tool")," works."))}d.isMDXComponent=!0}}]);