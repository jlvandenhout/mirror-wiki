"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[33806],{3527:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>m});var a=n(87462),i=(n(67294),n(3905));var o=n(73756),r=n(34259),l=n(18679);const s={title:"Resolve an IOTA Identity",sidebar_label:"Resolve",description:"Explain how resolving works including arguments",image:"/img/Identity_icon.png",keywords:["Resolve"]},d=void 0,c={unversionedId:"concepts/decentralized_identifiers/resolve",id:"concepts/decentralized_identifiers/resolve",title:"Resolve an IOTA Identity",description:"Explain how resolving works including arguments",source:"@site/next/external/identity.rs/0.7-alpha/documentation/docs/concepts/decentralized_identifiers/resolve.mdx",sourceDirName:"concepts/decentralized_identifiers",slug:"/concepts/decentralized_identifiers/resolve",permalink:"/next/identity.rs/concepts/decentralized_identifiers/resolve",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/next/external/identity.rs/0.7-alpha/documentation/docs/concepts/decentralized_identifiers/resolve.mdx",tags:[],version:"current",frontMatter:{title:"Resolve an IOTA Identity",sidebar_label:"Resolve",description:"Explain how resolving works including arguments",image:"/img/Identity_icon.png",keywords:["Resolve"]},sidebar:"docs",previous:{title:"Update",permalink:"/next/identity.rs/concepts/decentralized_identifiers/update"},next:{title:"Delete",permalink:"/next/identity.rs/concepts/decentralized_identifiers/delete"}},u={},m=[{value:"Resolving a DID",id:"resolving-a-did",level:2},{value:"Resolver",id:"resolver",level:3},{value:"Client",id:"client",level:3},{value:"Resolution for Verifiable Presentations",id:"resolution-for-verifiable-presentations",level:2},{value:"Example",id:"example",level:2}],p={toc:m};function h(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"DID resolution is the process of fetching and decoding a ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-did-documents"},"DID Document")," corresponding to a given ",(0,i.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#dfn-decentralized-identifiers"},"DID"),". The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs"},"IOTA Identity framework")," supports resolving DID Documents that are stored on the IOTA and Shimmer networks."),(0,i.kt)("p",null,"This is similar to, but not to be confused with, the ",(0,i.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/did-resolution/"},"W3C DID Resolution specification"),", which defines function signatures for resolution in the context of web or REST APIs, whereas the IOTA Identity framework provides strongly-typed resolution for a better developer experience."),(0,i.kt)("p",null,"This functionality is primarily provided by the ",(0,i.kt)("inlineCode",{parentName:"p"},"Resolver"),", which can:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#resolving-a-did"},"Resolve DID Documents across multiple networks"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#resolution-for-verifiable-presentations"},"Resolve the DID Documents referenced in a verifiable presentation or credential"),".")),(0,i.kt)("h2",{id:"resolving-a-did"},"Resolving a DID"),(0,i.kt)("p",null,"The following examples demonstrate how to resolve an IOTA DID Document from its DID."),(0,i.kt)("h3",{id:"resolver"},"Resolver"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Resolver")," follows the read procedure defined in the ",(0,i.kt)("a",{parentName:"p",href:"/next/identity.rs/specs/did/iota_did_method_spec#read"},"IOTA DID Method Specification"),". It fetches the latest ",(0,i.kt)("a",{parentName:"p",href:"../../specs/did/iota_did_method_spec#alias-output"},"Alias Output")," from the network specified in the DID (see ",(0,i.kt)("a",{parentName:"p",href:"../../specs/did/iota_did_method_spec#did-format"},"DID Format"),"), then extracts and validates the DID Document from it."),(0,i.kt)("p",null,"Multiple networks can be supported by a ",(0,i.kt)("inlineCode",{parentName:"p"},"Resolver")," simply by adding multiple clients to it, each using a node endpoint for a different network."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use identity_iota::iota::IotaDID;\nuse identity_iota::iota::IotaDocument;\nuse identity_iota::resolver::Resolver;\nuse iota_client::Client;\n\n#[tokio::main]\nasync fn main() {\n  // Configure a client for the Shimmer testnet "rms".\n  let node_url = "https://api.testnet.shimmer.network/";\n  let client = Client::builder()\n    .with_primary_node(node_url, None)\n    .unwrap()\n    .finish()\n    .unwrap();\n\n  // Construct a resolver using the client.\n  let mut resolver = Resolver::<IotaDocument>::new();\n  resolver.attach_iota_handler(client);\n\n  // Parse the DID and resolve its DID Document.\n  let did = IotaDID::parse("did:iota:rms:0x7b48b06232b8a1e7a31c314cab1ceedb84e2e9dd2b1fae79b67eaa4595f15e47").unwrap();\n  let document: IotaDocument = resolver.resolve(&did).await.unwrap();\n}\n'))),(0,i.kt)(l.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const { MixedResolver, IotaDID, IotaIdentityClient } = require(\'@iota/identity-wasm/node\');\nconst { Client } = require(\'@iota/iota-client-wasm/node\');\n\n// Configure a client for the Shimmer testnet "rms".\nconst nodeUrl = "https://api.testnet.shimmer.network/";\nconst client = new Client({\n    primaryNode: nodeUrl,\n    localPow: true,\n});\nconst didClient = new IotaIdentityClient(client);\n\n// Construct a resolver using the client.\nconst resolver = new MixedResolver({\n    client: didClient,\n});\n\n// Parse the DID and resolve its DID Document.\nconst did = IotaDID.parse("did:iota:rms:0x7b48b06232b8a1e7a31c314cab1ceedb84e2e9dd2b1fae79b67eaa4595f15e47");\nconst document = await resolver.resolve(did);\n')))),(0,i.kt)("h3",{id:"client"},"Client"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"Client")," can also be used directly, to resolve individual DIDs from its configured network."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},'use identity_iota::iota::IotaDID;\nuse identity_iota::iota::IotaDocument;\nuse identity_iota::iota::IotaIdentityClientExt;\nuse iota_client::Client;\n\n#[tokio::main]\nasync fn main() {\n  // Configure a client for the Shimmer testnet "rms".\n  let node_url = "https://api.testnet.shimmer.network/";\n  let client = Client::builder()\n    .with_primary_node(node_url, None)\n    .unwrap()\n    .finish()\n    .unwrap();\n\n  // Parse the DID and resolve its DID Document.\n  let did = IotaDID::parse("did:iota:rms:0x7b48b06232b8a1e7a31c314cab1ceedb84e2e9dd2b1fae79b67eaa4595f15e47").unwrap();\n  let document: IotaDocument = client.resolve_did(&did).await.unwrap();\n}\n'))),(0,i.kt)(l.Z,{value:"node",label:"Node.js",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const { IotaDID, IotaIdentityClient } = require(\'@iota/identity-wasm/node\');\nconst { Client } = require(\'@iota/iota-client-wasm/node\');\n\n// Configure a client for the Shimmer testnet "rms".\nconst nodeUrl = "https://api.testnet.shimmer.network/";\nconst client = new Client({\n    primaryNode: nodeUrl,\n    localPow: true,\n});\nconst didClient = new IotaIdentityClient(client);\n\n// Parse the DID and resolve its DID Document.\nconst did = IotaDID.parse("did:iota:rms:0x7b48b06232b8a1e7a31c314cab1ceedb84e2e9dd2b1fae79b67eaa4595f15e47");\nconst document = await didClient.resolveDid(did);\n')))),(0,i.kt)("h2",{id:"resolution-for-verifiable-presentations"},"Resolution for Verifiable Presentations"),(0,i.kt)("p",null,"When validating ",(0,i.kt)("a",{parentName:"p",href:"/next/identity.rs/concepts/verifiable_credentials/verifiable_presentations"},"verifiable presentations"),", it is necessary to resolve the DID Documents of the ",(0,i.kt)("a",{parentName:"p",href:"/next/identity.rs/concepts/verifiable_credentials/overview"},"verifiable credential")," issuers and presentation holder to verify their signatures. Resolving the necessary DID Documents is performed automatically when verifying presentations via the ",(0,i.kt)("inlineCode",{parentName:"p"},"Resolver")," (see this ",(0,i.kt)("a",{parentName:"p",href:"/next/identity.rs/concepts/verifiable_credentials/verifiable_presentations#example"},"example"),")."),(0,i.kt)("p",null,"When direct access to these DID Documents is desired, the ",(0,i.kt)("inlineCode",{parentName:"p"},"Resolver")," also provides standalone methods to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Resolve a presentation holder's DID Document."),(0,i.kt)("li",{parentName:"ul"},"Resolve the DID Documents of the issuers of the credentials in a verifiable presentation."),(0,i.kt)("li",{parentName:"ul"},"Resolve the issuer's DID Document for a given verifiable credential.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"The following example creates a new IOTA DID, publishes it and then resolves its DID Document and Alias Output."),(0,i.kt)(o.Z,{nodeContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport { Bip39 } from "@iota/crypto.js";\nimport { Client, MnemonicSecretManager } from "@iota/iota-client-wasm/node";\nimport type { IAliasOutput } from "@iota/iota.js";\nimport { IotaDocument, IotaIdentityClient } from "../../../node";\nimport { API_ENDPOINT, createDid } from "../util";\n\n/** Demonstrates how to resolve an existing DID in an Alias Output. */\nexport async function resolveIdentity() {\n    const client = new Client({\n        primaryNode: API_ENDPOINT,\n        localPow: true,\n    });\n    const didClient = new IotaIdentityClient(client);\n\n    // Generate a random mnemonic for our wallet.\n    const secretManager: MnemonicSecretManager = {\n        Mnemonic: Bip39.randomMnemonic(),\n    };\n\n    // Creates a new wallet and identity (see "0_create_did" example).\n    const { did } = await createDid(client, secretManager);\n\n    // Resolve the associated Alias Output and extract the DID document from it.\n    const resolved: IotaDocument = await didClient.resolveDid(did);\n    console.log("Resolved DID document:", JSON.stringify(resolved, null, 2));\n\n    // We can also resolve the Alias Output directly.\n    const aliasOutput: IAliasOutput = await didClient.resolveDidOutput(did);\n    console.log("The Alias Output holds " + aliasOutput.amount + " tokens");\n}\n',rustContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nuse examples::create_did;\nuse examples::random_stronghold_path;\nuse examples::API_ENDPOINT;\nuse identity_iota::iota::block::address::Address;\nuse identity_iota::iota::IotaDID;\nuse identity_iota::iota::IotaDocument;\nuse identity_iota::iota::IotaIdentityClientExt;\nuse identity_iota::prelude::Resolver;\nuse iota_client::block::output::AliasOutput;\nuse iota_client::secret::stronghold::StrongholdSecretManager;\nuse iota_client::secret::SecretManager;\nuse iota_client::Client;\n\n/// Demonstrates how to resolve an existing DID in an Alias Output.\n#[tokio::main]\nasync fn main() -> anyhow::Result<()> {\n  // Create a new client to interact with the IOTA ledger.\n  let client: Client = Client::builder().with_primary_node(API_ENDPOINT, None)?.finish()?;\n\n  // Create a new secret manager backed by a Stronghold.\n  let mut secret_manager: SecretManager = SecretManager::Stronghold(\n    StrongholdSecretManager::builder()\n      .password("secure_password")\n      .build(random_stronghold_path())?,\n  );\n\n  // Create a new DID in an Alias Output for us to resolve.\n  let (_, did): (Address, IotaDID) = create_did(&client, &mut secret_manager).await?;\n\n  // We can resolve a `IotaDID` with the client itself.\n  // Resolve the associated Alias Output and extract the DID document from it.\n  let client_document: IotaDocument = client.resolve_did(&did).await?;\n  println!("Client resolved DID Document: {:#}", client_document);\n\n  // We can also create a `Resolver` that has additional convenience methods,\n  // for example to resolve presentation issuers or to verify presentations.\n  let mut resolver = Resolver::<IotaDocument>::new();\n\n  // We need to register a handler that can resolve IOTA DIDs.\n  // This convenience method only requires us to provide a client.\n  resolver.attach_iota_handler(client.clone());\n\n  let resolver_document: IotaDocument = resolver.resolve(&did).await.unwrap();\n\n  // Client and Resolver resolve to the same document in this case.\n  assert_eq!(client_document, resolver_document);\n\n  // We can also resolve the Alias Output directly.\n  let alias_output: AliasOutput = client.resolve_did_output(&did).await?;\n\n  println!("The Alias Output holds {} tokens", alias_output.amount());\n\n  Ok(())\n}\n',nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/dev/bindings/wasm/examples/src/0_basic/2_resolve_did.ts",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/dev/examples/0_basic/2_resolve_did.rs",mdxType:"CodeSnippet"}))}h.isMDXComponent=!0},73756:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(86010),i=n(67294),o=n(69319);function r(e){let{nodeReplitLink:t,nodeContent:n,rustContent:r,nodeGithubLink:l,rustGithubLink:s}=e;const[d,c]=i.useState("node"),u=i.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},i.createElement("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),i.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}));return(0,i.useEffect)((()=>{let e=localStorage.getItem("lang"),a=e||"node";"node"!==a||t||n||(a="rust"),"rust"!==a||r||(a="node"),c(a)})),i.createElement("div",null,i.createElement("div",{className:(0,a.Z)("langSelector")},r&&i.createElement("button",{className:(0,a.Z)("button","languageButton",{activeButton:"rust"==d,inactiveButton:"rust"!==d}),onClick:()=>{localStorage.setItem("lang","rust"),c("rust")}},"Rust"),(t||n)&&i.createElement("button",{className:(0,a.Z)("button","languageButton","mr-sm",{activeButton:"node"===d,inactiveButton:"node"!==d}),onClick:()=>{localStorage.setItem("lang","node"),c("node")}},"Node.js")),i.createElement("div",{className:(0,a.Z)("codeSnippetContainer")},"node"===d&&t?i.createElement(i.Fragment,null,i.createElement("iframe",{frameborder:"0",width:"100%",height:"700px",src:t})):"node"===d&&n?i.createElement("div",{className:(0,a.Z)("nodeContainer")},i.createElement(o.Z,{className:(0,a.Z)("noMarginBottom"),language:"typescript"},n)):i.createElement("div",{className:(0,a.Z)("rustContainer")},i.createElement(o.Z,{className:(0,a.Z)("noMarginBottom"),language:"rust"},r))),i.createElement("div",{className:(0,a.Z)("githubLink")},l&&"node"===d&&i.createElement("a",{href:l,target:"_blank"},"GitHub\xa0",u),s&&"rust"===d&&i.createElement("a",{href:s,target:"_blank"},"GitHub\xa0",u)))}},18679:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(67294),i=n(86010);const o="tabItem_Ymn6";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,i.Z)(o,r),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(87462),i=n(67294),o=n(86010),r=n(51048),l=n(33609),s=n(1943),d=n(72957);const c="tabList__CuJ",u="tabItem_LNqP";function m(e){var t;const{lazy:n,block:r,defaultValue:m,values:p,groupId:h,className:v}=e,f=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),D=p??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),b=(0,l.l)(D,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const I=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==I&&!D.some((e=>e.value===I)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${I}" but none of its children has the corresponding value. Available values are: ${D.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:g,setTabGroupChoices:w}=(0,s.U)(),[k,_]=(0,i.useState)(I),y=[],{blockElementScrollPositionUntilNextRender:C}=(0,d.o5)();if(null!=h){const e=g[h];null!=e&&e!==k&&D.some((t=>t.value===e))&&_(e)}const N=e=>{const t=e.currentTarget,n=y.indexOf(t),a=D[n].value;a!==k&&(C(t),_(a),null!=h&&w(h,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;n=y[t]??y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;n=y[t]??y[y.length-1];break}}null==(t=n)||t.focus()};return i.createElement("div",{className:(0,o.Z)("tabs-container",c)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},v)},D.map((e=>{let{value:t,label:n,attributes:r}=e;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,key:t,ref:e=>y.push(e),onKeyDown:x,onFocus:N,onClick:N},r,{className:(0,o.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":k===t})}),n??t)}))),n?(0,i.cloneElement)(f.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==k})))))}function p(e){const t=(0,r.Z)();return i.createElement(m,(0,a.Z)({key:String(t)},e))}}}]);