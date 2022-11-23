"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[96337],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>y,default:()=>w,frontMatter:()=>g,metadata:()=>f,toc:()=>v});var a=n(87462),r=(n(67294),n(3905)),l=n(34259),o=n(18679);const i={toc:[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Set Up Your <code>.env</code> File",id:"set-up-your-env-file",level:2},{value:"Install Dependencies",id:"install-dependencies",level:2},{value:"Build the Library",id:"build-the-library",level:3},{value:"Run the Examples",id:"run-the-examples",level:3}]};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you can run the examples, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"./../getting_started/nodejs"},"Node.js Getting Started guide")," to install\nthe library."),(0,r.kt)("h2",{id:"set-up-your-env-file"},"Set Up Your ",(0,r.kt)("inlineCode",{parentName:"h2"},".env")," File"),(0,r.kt)("p",null,"The examples use variables from a ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file.  Though you can create your own, for the examples you can simply copy the\nexisting ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/blob/develop/bindings/nodejs/.env.example"},(0,r.kt)("inlineCode",{parentName:"a"},".env.example"))," file. You can\ndo this running the following command from the ",(0,r.kt)("inlineCode",{parentName:"p"},"bindings/nodejs")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env.example .env\n")),(0,r.kt)("h2",{id:"install-dependencies"},"Install Dependencies"),(0,r.kt)("p",null,"Before you can try out the examples, you must install the necessary dependencies using npm.  You can do this by running\nthe following command from the ",(0,r.kt)("inlineCode",{parentName:"p"},"binding/nodejs")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i\n")),(0,r.kt)("h3",{id:"build-the-library"},"Build the Library"),(0,r.kt)("p",null,"Once you have ",(0,r.kt)("a",{parentName:"p",href:"#setup-your-env-file"},"set up your ",(0,r.kt)("inlineCode",{parentName:"a"},".env")," file")," and ",(0,r.kt)("a",{parentName:"p",href:"#install-dependencies"},"installed the necessary dependencies"),"\n, you can build the library by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,r.kt)("h3",{id:"run-the-examples"},"Run the Examples"),(0,r.kt)("p",null,"The wallet.rs library has numerous examples you can run to get acquainted with the library.\nAfter you have followed the instructions to ",(0,r.kt)("a",{parentName:"p",href:"#build-the-library"},"build the library"),", you can run any Node.js example.\nYou will need to select any of the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/bindings/nodejs/examples"},"Node.js examples")," and run it with\nyour local Node.js interpreter."),(0,r.kt)("p",null,"To run examples, you will need to change to the ",(0,r.kt)("inlineCode",{parentName:"p"},"bindings/nodejs/examples")," directory, and run any example.\nThe following command will run the ",(0,r.kt)("inlineCode",{parentName:"p"},"10-node-info.js")," example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"node 10-node-info.js\n")))}s.isMDXComponent=!0;const u={toc:[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Run Code Examples",id:"run-code-examples",level:2}]};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you can run the examples, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"./../getting_started/python"},"Python Getting Started guide")," to install\nthe library."),(0,r.kt)("h2",{id:"run-code-examples"},"Run Code Examples"),(0,r.kt)("p",null,"The wallet.rs library has numerous ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/bindings/python/native/examples"},"examples"),"\nyou can run to get acquainted with the library.  After you have followed the instructions to\n",(0,r.kt)("a",{parentName:"p",href:"./../getting_started/python#install-the-library"},"install the library"),", you can run any example with the following\ncommand from the ",(0,r.kt)("inlineCode",{parentName:"p"},"bindings/python/native")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 example/[example file name]\n")),(0,r.kt)("p",null,"Where ","[example file name]"," is one of the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/bindings/python/native/examples"},"examples"),"."),(0,r.kt)("p",null,"For instance, to run\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/blob/develop/bindings/python/native/examples/00_get_info.py"},(0,r.kt)("inlineCode",{parentName:"a"},"00_get_info.py")," "),",\nyou should run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python3 examples/00_get_info.py\n")))}p.isMDXComponent=!0;const c={toc:[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Clone the Repository",id:"clone-the-repository",level:3},{value:"Set Up Your .env file",id:"set-up-your-env-file",level:3},{value:"Run Code Examples",id:"run-code-examples",level:2},{value:"Examples List",id:"examples-list",level:2}]};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Before you can run the examples, please refer to the ",(0,r.kt)("a",{parentName:"p",href:"./../getting_started/rust"},"Rust Getting Started guide")," to install\nthe library."),(0,r.kt)("h3",{id:"clone-the-repository"},"Clone the Repository"),(0,r.kt)("p",null,"To run the rust examples, you will first need to clone the repository.  You can do so by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:iotaledger/wallet.rs.git\n")),(0,r.kt)("h3",{id:"set-up-your-env-file"},"Set Up Your .env file"),(0,r.kt)("p",null,"After you have ",(0,r.kt)("a",{parentName:"p",href:"#clone-the-repository"},"cloned the project"),", you should:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Move into the project directory by running the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd wallet.rs\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Create your ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file by making a copy of the ",(0,r.kt)("inlineCode",{parentName:"li"},".env.example")," file by running the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cp .env.example .env\n")),(0,r.kt)("p",null,"You should update the ",(0,r.kt)("inlineCode",{parentName:"p"},"NODE_URL")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"FAUCET_URL")," values to match the ",(0,r.kt)("a",{parentName:"p",href:"#hornet-node"},"Hornet node")," you want to use."),(0,r.kt)("h2",{id:"run-code-examples"},"Run Code Examples"),(0,r.kt)("p",null,"The wallet.rs library has numerous ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/examples"},"examples"),"\nyou can run to get acquainted with the library.  After you have followed the instructions to\n",(0,r.kt)("a",{parentName:"p",href:"./../getting_started/rust#install-the-library"},"install the library"),", you can run any example with the following\ncommand from the ",(0,r.kt)("inlineCode",{parentName:"p"},"examples")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example 0_generate_addresses --release\n")),(0,r.kt)("h2",{id:"examples-list"},"Examples List"),(0,r.kt)("p",null,"You can replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"0_generate_addresses")," by any other example from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/examples"},"Rust examples directory"),"."),(0,r.kt)("p",null,"You can get a full list of examples by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo run --example\n")))}d.isMDXComponent=!0;const m={toc:[{value:"Clone the Repository",id:"clone-the-repository",level:3},{value:"Run Code Examples",id:"run-code-examples",level:2},{value:"Examples List",id:"examples-list",level:2}]};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"clone-the-repository"},"Clone the Repository"),(0,r.kt)("p",null,"To run the examples, you will first need to clone the repository. You can do so by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:iotaledger/wallet.rs.git\n")),(0,r.kt)("p",null,"Then, move into the Java code by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd wallet.rs/bindings/java/iota-wallet-java\n")),(0,r.kt)("h2",{id:"run-code-examples"},"Run Code Examples"),(0,r.kt)("p",null,"The IOTA Wallet Java library has numerous ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/bindings/java/iota-wallet-java/examples/src"},"examples"),"\nyou can run to get acquainted with the library. After you have followed the instructions to\n",(0,r.kt)("a",{parentName:"p",href:"./../getting_started/java#install-the-library"},"install the library"),", you can run any example with the following\ncommand from the ",(0,r.kt)("inlineCode",{parentName:"p"},"examples")," directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew run -Pmain=CreateAccount\n")),(0,r.kt)("h2",{id:"examples-list"},"Examples List"),(0,r.kt)("p",null,"You can replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateAccount")," by any other example from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/bindings/java/iota-wallet-java/examples/src"},"Java examples directory"),"."))}h.isMDXComponent=!0;const g={title:"Run Code Examples",description:"The wallet.rs has multiple how-to guides to get you up and running in no time. However, these require a specific set up depending on your language of choice.",image:"/img/logo/iota_mark_light.png",keywords:["how to","examples","npm","cargo","yarn","rust","nodejs","python","java"]},y=void 0,f={unversionedId:"how_tos/run_how_tos",id:"how_tos/run_how_tos",title:"Run Code Examples",description:"The wallet.rs has multiple how-to guides to get you up and running in no time. However, these require a specific set up depending on your language of choice.",source:"@site/next/external/wallet.rs/documentation/docs/how_tos/run_how_tos.mdx",sourceDirName:"how_tos",slug:"/how_tos/run_how_tos",permalink:"/next/wallet.rs/how_tos/run_how_tos",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/next/external/wallet.rs/documentation/docs/how_tos/run_how_tos.mdx",tags:[],version:"current",frontMatter:{title:"Run Code Examples",description:"The wallet.rs has multiple how-to guides to get you up and running in no time. However, these require a specific set up depending on your language of choice.",image:"/img/logo/iota_mark_light.png",keywords:["how to","examples","npm","cargo","yarn","rust","nodejs","python","java"]},sidebar:"docs",previous:{title:"Account Approaches",permalink:"/next/wallet.rs/explanations/account_approaches"},next:{title:"Create a Wallet Account",permalink:"/next/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"}},k={},v=[{value:"Hornet Node",id:"hornet-node",level:2},{value:"Public API",id:"public-api",level:3},{value:"Run Your Own Node",id:"run-your-own-node",level:3},{value:"Run a Local Private Tangle",id:"run-a-local-private-tangle",level:3},{value:"Language Specific Instructions",id:"language-specific-instructions",level:2}],b={toc:v};function w(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"hornet-node"},"Hornet Node"),(0,r.kt)("p",null,"Most of the examples require a ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/hornet/welcome"},"Hornet Node")," running the\n",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/welcome"},"Stardust")," upgrade. You can connect to a node you trust, use the\n",(0,r.kt)("a",{parentName:"p",href:"#public-api"},"public API"),", ",(0,r.kt)("a",{parentName:"p",href:"#run-your-own-node"},"run your own node")," or ",(0,r.kt)("a",{parentName:"p",href:"#run-a-local-private-tangle"},"run a local private tangle")),(0,r.kt)("h3",{id:"public-api"},"Public API"),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://api.testnet.shimmer.network"},"Shimmer Testnet")," as well as its\n",(0,r.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network/"},"Faucet")," to quickly run the examples."),(0,r.kt)("h3",{id:"run-your-own-node"},"Run Your Own Node"),(0,r.kt)("p",null,"If you want direct access to the Tangle, you can\n",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/hornet/how_tos/using_docker"},"set up a HORNET node using docker"),"."),(0,r.kt)("h3",{id:"run-a-local-private-tangle"},"Run a Local Private Tangle"),(0,r.kt)("p",null,"If you want to run the examples locally,\nyou can ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/hornet/how_tos/private_tangle"},"set up a private tangle")," in a few simple steps."),(0,r.kt)("h2",{id:"language-specific-instructions"},"Language Specific Instructions"),(0,r.kt)("p",null,"Each language has different set up instructions you need to follow to get the code examples up and running."),(0,r.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,r.kt)(d,{mdxType:"RustGetCode"})),(0,r.kt)(o.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,r.kt)(s,{mdxType:"NodejsGetCode"})),(0,r.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,r.kt)(p,{mdxType:"PythonGetCode"})),(0,r.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,r.kt)(h,{mdxType:"JavaGetCode"}))))}w.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),r=n(86010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),r=n(67294),l=n(86010),o=n(51048),i=n(33609),s=n(1943),u=n(72957);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:o,defaultValue:d,values:m,groupId:h,className:g}=e,y=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??y.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,i.l)(f,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=y.find((e=>e.props.default)))?void 0:t.props.value)??y[0].props.value;if(null!==v&&!f.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:w}=(0,s.U)(),[x,N]=(0,r.useState)(v),_=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=h){const e=b[h];null!=e&&e!==x&&f.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,n=_.indexOf(t),a=f[n].value;a!==x&&(T(t),N(a),null!=h&&w(h,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=_.indexOf(e.currentTarget)+1;n=_[t]??_[0];break}case"ArrowLeft":{const t=_.indexOf(e.currentTarget)-1;n=_[t]??_[_.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},g)},f.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>_.push(e),onKeyDown:j,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":x===t})}),n??t)}))),n?(0,r.cloneElement)(y.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},y.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}}}]);