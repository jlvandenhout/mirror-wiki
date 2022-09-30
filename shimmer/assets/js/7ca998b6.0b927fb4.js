"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[93141],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=c(n),p=o,d=u["".concat(l,".").concat(p)]||u[p]||m[p]||i;return n?a.createElement(d,r(r({ref:t},h),{},{components:n})):a.createElement(d,r({ref:t},h))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45078:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>h,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=n(87462),o=(n(67294),n(3905)),i=n(34259),r=n(18679);const s={keywords:["init","initialization","owner","initial state","smart contract creator","one-time","contract deployment"],description:"The init function will automatically be called immediately after the first time the contract has been deployed to the VM. This is a one-time initialization call, meant to be performed by the contract deployment mechanism.",image:"/img/logo/WASP_logo_dark.png"},l="Smart Contract Initialization",c={unversionedId:"guide/wasm_vm/init",id:"guide/wasm_vm/init",title:"Smart Contract Initialization",description:"The init function will automatically be called immediately after the first time the contract has been deployed to the VM. This is a one-time initialization call, meant to be performed by the contract deployment mechanism.",source:"@site/shimmer/external/wasp/documentation/docs/guide/wasm_vm/init.mdx",sourceDirName:"guide/wasm_vm",slug:"/guide/wasm_vm/init",permalink:"/shimmer/smart-contracts/guide/wasm_vm/init",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/shimmer/external/wasp/documentation/docs/guide/wasm_vm/init.mdx",tags:[],version:"current",frontMatter:{keywords:["init","initialization","owner","initial state","smart contract creator","one-time","contract deployment"],description:"The init function will automatically be called immediately after the first time the contract has been deployed to the VM. This is a one-time initialization call, meant to be performed by the contract deployment mechanism.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"View-Only Functions",permalink:"/shimmer/smart-contracts/guide/wasm_vm/views"},next:{title:"Token Transfers",permalink:"/shimmer/smart-contracts/guide/wasm_vm/transfers"}},h={},m=[],u={toc:m};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"smart-contract-initialization"},"Smart Contract Initialization"),(0,o.kt)("p",null,"Smart contracts start out with a completely blank state. Sometimes you may want to be able\nto define initial state, for example if your contract is configurable. You may want to be\nable to pass this configuration to the contract upon deployment, so that its state\nreflects that configuration once the first request comes in. Such initialization can be\nprovided through an optional function named ",(0,o.kt)("inlineCode",{parentName:"p"},"init()"),"."),(0,o.kt)("p",null,"When provided, the ",(0,o.kt)("inlineCode",{parentName:"p"},"init()")," function will automatically be called immediately after the\nfirst time the contract has been deployed to the VM. Note that this is a one-time\ninitialization call, meant to be performed by the contract deployment mechanism. ISC will\nprevent anyone else from calling this function ever again. So if you need to be able to\nreconfigure the contract later on, you will need to provide a separate configuration\nfunction, and guard it from being accessed by anyone else than properly authorized\nentities."),(0,o.kt)("p",null,"To show how creating a smart contract with WasmLib works, we will slowly start fleshing\nout the smart contract functions of the ",(0,o.kt)("inlineCode",{parentName:"p"},"dividend")," example in this tutorial. Here is the\nfirst part of the Rust code that implements it, which contains the ",(0,o.kt)("inlineCode",{parentName:"p"},"init()")," function:"),(0,o.kt)(i.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// This example implements 'dividend', a simple smart contract that will\n// automatically disperse iota tokens which are sent to the contract to a group\n// of member accounts according to predefined division factors. The intent is\n// to showcase basic functionality of WasmLib through a minimal implementation\n// and not to come up with a complete robust real-world solution.\n// Note that we have drawn sometimes out constructs that could have been done\n// in a single line over multiple statements to be able to properly document\n// step by step what is happening in the code. We also unnecessarily annotate\n// all 'var' statements with their assignment type to improve understanding.\n\n//nolint:revive,goimports\npackage dividend\n\nimport (\n    \"github.com/iotaledger/wasp/packages/wasmvm/wasmlib/go/wasmlib\"\n    \"github.com/iotaledger/wasp/packages/wasmvm/wasmlib/go/wasmlib/wasmtypes\"\n)\n\n// 'init' is used as a way to initialize a smart contract. It is an optional\n// function that will automatically be called upon contract deployment. In this\n// case we use it to initialize the 'owner' state variable so that we can later\n// use this information to prevent non-owners from calling certain functions.\n// The 'init' function takes a single optional parameter:\n// - 'owner', which is the agent id of the entity owning the contract.\n// When this parameter is omitted the owner will default to the contract creator.\nfunc funcInit(ctx wasmlib.ScFuncContext, f *InitContext) {\n    // The schema tool has already created a proper InitContext for this function that\n    // allows us to access call parameters and state storage in a type-safe manner.\n\n    // First we set up a default value for the owner in case the optional 'owner'\n    // parameter was omitted. We use the agent that sent the deploy request.\n    var owner wasmtypes.ScAgentID = ctx.RequestSender()\n\n    // Now we check if the optional 'owner' parameter is present in the params map.\n    if f.Params.Owner().Exists() {\n        // Yes, it was present, so now we overwrite the default owner with\n        // the one specified by the 'owner' parameter.\n        owner = f.Params.Owner().Value()\n    }\n\n    // Now that we have sorted out which agent will be the owner of this contract\n    // we will save this value in the 'owner' variable in state storage on the host.\n    // Read the documentation on schema.yaml to understand why this state variable is\n    // supported at compile-time by code generated from schema.yaml by the schema tool.\n    f.State.Owner().SetValue(owner)\n}\n"))),(0,o.kt)(r.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// This example implements 'dividend', a simple smart contract that will\n// automatically disperse iota tokens which are sent to the contract to a group\n// of member accounts according to predefined division factors. The intent is\n// to showcase basic functionality of WasmLib through a minimal implementation\n// and not to come up with a complete robust real-world solution.\n// Note that we have drawn sometimes out constructs that could have been done\n// in a single line over multiple statements to be able to properly document\n// step by step what is happening in the code. We also unnecessarily annotate\n// all 'let' statements with their assignment type to improve understanding.\n\nuse wasmlib::*;\n\nuse crate::*;\n\n// 'init' is used as a way to initialize a smart contract. It is an optional\n// function that will automatically be called upon contract deployment. In this\n// case we use it to initialize the 'owner' state variable so that we can later\n// use this information to prevent non-owners from calling certain functions.\n// The 'init' function takes a single optional parameter:\n// - 'owner', which is the agent id of the entity owning the contract.\n// When this parameter is omitted the owner will default to the contract creator.\npub fn func_init(ctx: &ScFuncContext, f: &InitContext) {\n    // The schema tool has already created a proper InitContext for this function that\n    // allows us to access call parameters and state storage in a type-safe manner.\n\n    // First we set up a default value for the owner in case the optional 'owner'\n    // parameter was omitted. We use the agent that sent the deploy request.\n    let mut owner: ScAgentID = ctx.request_sender();\n\n    // Now we check if the optional 'owner' parameter is present in the params map.\n    if f.params.owner().exists() {\n        // Yes, it was present, so now we overwrite the default owner with\n        // the one specified by the 'owner' parameter.\n        owner = f.params.owner().value();\n    }\n\n    // Now that we have sorted out which agent will be the owner of this contract\n    // we will save this value in the 'owner' variable in state storage on the host.\n    // Read the documentation on schema.yaml to understand why this state variable is\n    // supported at compile-time by code generated from schema.yaml by the schema tool.\n    f.state.owner().set_value(&owner);\n}\n"))),(0,o.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// This example implements 'dividend', a simple smart contract that will\n// automatically disperse iota tokens which are sent to the contract to a group\n// of member accounts according to predefined division factors. The intent is\n// to showcase basic functionality of WasmLib through a minimal implementation\n// and not to come up with a complete robust real-world solution.\n// Note that we have drawn sometimes out constructs that could have been done\n// in a single line over multiple statements to be able to properly document\n// step by step what is happening in the code. We also unnecessarily annotate\n// all 'let' statements with their assignment type to improve understanding.\n\nimport * as wasmlib from \"wasmlib\"\nimport * as sc from \"./index\";\n\n// 'init' is used as a way to initialize a smart contract. It is an optional\n// function that will automatically be called upon contract deployment. In this\n// case we use it to initialize the 'owner' state variable so that we can later\n// use this information to prevent non-owners from calling certain functions.\n// The 'init' function takes a single optional parameter:\n// - 'owner', which is the agent id of the entity owning the contract.\n// When this parameter is omitted the owner will default to the contract creator.\nexport function funcInit(ctx: wasmlib.ScFuncContext, f: sc.InitContext): void {\n    // The schema tool has already created a proper InitContext for this function that\n    // allows us to access call parameters and state storage in a type-safe manner.\n\n    // First we set up a default value for the owner in case the optional 'owner'\n    // parameter was omitted. We use the agent that sent the deploy request.\n    let owner: wasmlib.ScAgentID = ctx.requestSender();\n\n    // Now we check if the optional 'owner' parameter is present in the params map.\n    if (f.params.owner().exists()) {\n        // Yes, it was present, so now we overwrite the default owner with\n        // the one specified by the 'owner' parameter.\n        owner = f.params.owner().value();\n    }\n\n    // Now that we have sorted out which agent will be the owner of this contract\n    // we will save this value in the 'owner' variable in state storage on the host.\n    // Read the documentation on schema.yaml to understand why this state variable is\n    // supported at compile-time by code generated from schema.yaml by the schema tool.\n    f.state.owner().setValue(owner);\n}\n")))),(0,o.kt)("p",null,"We define an owner variable and allow it to be something other than the default value of\ncontract creator. It is always a good idea to be flexible enough to be able to transfer\nownership to another entity if necessary. Remember that once a smart contract has been\ndeployed it is no longer possible to change it. Therefore, it is good practice thinking\nthrough situations that could require change in advance, and allow the contract itself to\nhandle such changes through its state by providing a proper function interface:"),(0,o.kt)(i.Z,{defaultValue:"go",groupId:"language",values:[{label:"Go",value:"go"},{label:"Rust",value:"rust"},{label:"TypeScript",value:"ts"}],mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"go",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-go"},"// 'setOwner' is used to change the owner of the smart contract.\n// It updates the 'owner' state variable with the provided agent id.\n// The 'setOwner' function takes a single mandatory parameter:\n// - 'owner', which is the agent id of the entity that will own the contract.\n// Only the current owner can change the owner.\nfunc funcSetOwner(_ wasmlib.ScFuncContext, f *SetOwnerContext) {\n    // Note that the schema tool has already dealt with making sure that this function\n    // can only be called by the owner and that the required parameter is present.\n    // So once we get to this point in the code we can take that as a given.\n\n    // Save the new owner parameter value in the 'owner' variable in state storage.\n    f.State.Owner().SetValue(f.Params.Owner().Value())\n}\n"))),(0,o.kt)(r.Z,{value:"rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"// 'setOwner' is used to change the owner of the smart contract.\n// It updates the 'owner' state variable with the provided agent id.\n// The 'setOwner' function takes a single mandatory parameter:\n// - 'owner', which is the agent id of the entity that will own the contract.\n// Only the current owner can change the owner.\npub fn func_set_owner(_ctx: &ScFuncContext, f: &SetOwnerContext) {\n    // Note that the schema tool has already dealt with making sure that this function\n    // can only be called by the owner and that the required parameter is present.\n    // So once we get to this point in the code we can take that as a given.\n\n    // Save the new owner parameter value in the 'owner' variable in state storage.\n    f.state.owner().set_value(&f.params.owner().value());\n}\n"))),(0,o.kt)(r.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"// 'setOwner' is used to change the owner of the smart contract.\n// It updates the 'owner' state variable with the provided agent id.\n// The 'setOwner' function takes a single mandatory parameter:\n// - 'owner', which is the agent id of the entity that will own the contract.\n// Only the current owner can change the owner.\nexport function funcSetOwner(ctx: wasmlib.ScFuncContext, f: sc.SetOwnerContext): void {\n    // Note that the schema tool has already dealt with making sure that this function\n    // can only be called by the owner and that the required parameter is present.\n    // So once we get to this point in the code we can take that as a given.\n\n    // Save the new owner parameter value in the 'owner' variable in state storage.\n    f.state.owner().setValue(f.params.owner().value());\n}\n")))),(0,o.kt)("p",null,"Note that we only define a single owner here. Proper fall-back could require multiple\nowners in case the owner entity could disappear, which would allow others to take over\ninstead of the contract becoming immutable with regard to owner functionality. Again, we\ncannot stress enough how important it is to ",(0,o.kt)("strong",{parentName:"p"},"think through every aspect of a smart\ncontract before deployment"),"."),(0,o.kt)("p",null,"In the next section we will look at how a smart contract can\n",(0,o.kt)("a",{parentName:"p",href:"/shimmer/smart-contracts/guide/wasm_vm/transfers"},"transfer tokens"),"."))}p.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),o=n(86010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(i,r),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),o=n(67294),i=n(86010),r=n(51048),s=n(33609),l=n(1943),c=n(72957);const h="tabList__CuJ",m="tabItem_LNqP";function u(e){var t;const{lazy:n,block:r,defaultValue:u,values:p,groupId:d,className:w}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,s.l)(g,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===u?u:u??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:k}=(0,l.U)(),[x,T]=(0,o.useState)(y),O=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=d){const e=v[d];null!=e&&e!==x&&g.some((t=>t.value===e))&&T(e)}const S=e=>{const t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==x&&(N(t),T(a),null!=d&&k(d,String(a)))},I=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,i.Z)("tabs-container",h)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},w)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>O.push(e),onKeyDown:I,onFocus:S,onClick:S},r,{className:(0,i.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function p(e){const t=(0,r.Z)();return o.createElement(u,(0,a.Z)({key:String(t)},e))}}}]);