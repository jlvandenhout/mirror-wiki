"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[78059],{23777:(e,t,n)=>{n.d(t,{ZP:()=>s});var o=n(87462),a=(n(67294),n(3905));const i={toc:[]};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{title:"Dotenv",type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe to use in production environments.")))}s.isMDXComponent=!0},36416:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>M,contentTitle:()=>N,default:()=>D,frontMatter:()=>T,metadata:()=>E,toc:()=>O});var o=n(87462),a=(n(67294),n(3905)),i=n(34259),s=n(18679),r=n(69319);const u={toc:[{value:"How To Build A Basic Output",id:"how-to-build-a-basic-output",level:2}]};function l(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-build-a-basic-output"},"How To Build A Basic Output"),(0,a.kt)(r.Z,{className:"language-java",mdxType:"CodeBlock"},'package output_builder;\n\nimport org.iota.Client;\nimport org.iota.types.ClientConfig;\nimport org.iota.types.expections.ClientException;\nimport org.iota.types.Output;\nimport org.iota.types.UnlockCondition;\nimport org.iota.types.expections.InitializeClientException;\nimport org.iota.types.output_builder.BasicOutputBuilderParams;\nimport org.iota.types.secret.GenerateAddressesOptions;\nimport org.iota.types.secret.MnemonicSecretManager;\nimport org.iota.types.secret.Range;\n\npublic class BuildBasicOutput {\n    public static void main(String[] args) throws ClientException, InitializeClientException {\n        // Build the client.\n        Client client = new Client(new ClientConfig().withNodes(new String[]{"https://api.testnet.shimmer.network"}));\n\n        // Configure a simple Basic output.\n        MnemonicSecretManager secretManager = new MnemonicSecretManager("endorse answer radar about source reunion marriage tag sausage weekend frost daring base attack because joke dream slender leisure group reason prepare broken river");\n        String hexAddress = client.bech32ToHex(client.generateAddresses(secretManager, new GenerateAddressesOptions().withRange(new Range(0, 1)))[0]);\n        String amount = "1000000";\n        UnlockCondition[] unlockConditions = new UnlockCondition[]{new UnlockCondition("{ type: 0, address: { type: 0, pubKeyHash: \\"" + hexAddress + "\\"} }")};\n        BasicOutputBuilderParams params = new BasicOutputBuilderParams().withAmount(amount).withUnlockConditions(unlockConditions);\n\n        // Build the output.\n        Output output = client.buildBasicOutput(params);\n\n        // Print the output.\n        System.out.println(output.toString());\n\n    }\n}'))}l.isMDXComponent=!0;const p={toc:[]};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": 3,\n  "amount": "1000000",\n  "unlockConditions": [\n    {\n      "type": 0,\n      "address": {\n        "type": 0,\n        "pubKeyHash": "0x7ffec9e1233204d9c6dce6812b1539ee96af691ca2e4d9065daa85907d33e5d3"\n      }\n    }\n  ]\n}\n')))}c.isMDXComponent=!0;var d=n(23777);const m={toc:[]};function k(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d.ZP,{mdxType:"DotEnvWarning"}),(0,a.kt)(r.Z,{className:"language-typescript",mdxType:"CodeBlock"},"// Copyright 2021-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport { Client, initLogger } from '@iota/client';\nrequire('dotenv').config({ path: '../.env' });\n\n// Run with command:\n// node ./dist/11_build_output.js\n\n// Build a basic output\nasync function run() {\n    initLogger();\n    if (!process.env.NODE_URL) {\n        throw new Error('.env NODE_URL is undefined, see .env.example');\n    }\n\n    const client = new Client({\n        nodes: [process.env.NODE_URL],\n    });\n\n    try {\n        if (!process.env.NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1) {\n            throw new Error('.env mnemonic is undefined, see .env.example');\n        }\n        const secretManager = {\n            mnemonic: process.env.NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1,\n        };\n\n        const addresses = await client.generateAddresses(secretManager, {\n            range: {\n                start: 0,\n                end: 1,\n            },\n        });\n\n        const hexAddress = await client.bech32ToHex(addresses[0]);\n\n        // most simple basic output\n        const basicOutput = await client.buildBasicOutput({\n            amount: '1000000',\n            unlockConditions: [\n                {\n                    type: 0,\n                    address: {\n                        type: 0,\n                        pubKeyHash: hexAddress,\n                    },\n                },\n            ],\n        });\n\n        console.log(basicOutput);\n    } catch (error) {\n        console.error('Error: ', error);\n    }\n}\n\nrun();\n"),(0,a.kt)("p",null,"You can run the example by running the following command from the ",(0,a.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,a.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"node dist/11_build_output.js"))}k.isMDXComponent=!0;const h={toc:[]};function b(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{\n  type: 3,\n  amount: '1000000',\n  unlockConditions: [ { type: 0, address: [Object] } ]\n}\n")))}b.isMDXComponent=!0;const _={toc:[]};function g(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(r.Z,{className:"language-python",mdxType:"CodeBlock"},'from iota_client import IotaClient, MnemonicSecretManager\n\n# Create an IotaClient instance\nclient = IotaClient({\'nodes\': [\'https://api.testnet.shimmer.network\']})\n\nbasic_output = client.build_basic_output(\n    unlock_conditions=[\n        {\n            "type": 0,\n            "address": {\n                "type": 0,\n                "pubKeyHash": client.bech32_to_hex("rms1qzpf0tzpf8yqej5zyhjl9k3km7y6j0xjnxxh7m2g3jtj2z5grej67sl6l46"),\n            },\n        },\n    ],\n    amount=\'1000000\',\n)\nprint(f\'{basic_output}\')\n'),(0,a.kt)("p",null,"You can run the example by running the following command from the ",(0,a.kt)("inlineCode",{parentName:"p"},"binding/python/examples")," folder:"),(0,a.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"python3 11_build_output.py"))}g.isMDXComponent=!0;const y={toc:[]};function f(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},"{\n  'type': 3,\n  'amount': '1000000',\n  'unlockConditions': [\n    {\n      'type': 0,\n      'address': {\n        'type': 0,\n        'pubKeyHash': '0x8297ac4149c80cca8225e5f2da36df89a93cd2998d7f6d488c97250a881e65af'\n      }\n    }\n  ]\n}\n")))}f.isMDXComponent=!0;const w={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(d.ZP,{mdxType:"DotEnvWarning"}),(0,a.kt)(r.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example basic --release\n\nuse iota_client::{\n    block::output::{\n        feature::MetadataFeature,\n        unlock_condition::{\n            AddressUnlockCondition, ExpirationUnlockCondition, StorageDepositReturnUnlockCondition,\n            TimelockUnlockCondition, UnlockCondition,\n        },\n        BasicOutputBuilder, Feature,\n    },\n    secret::{mnemonic::MnemonicSecretManager, SecretManager},\n    utils::request_funds_from_faucet,\n    Client, Result,\n};\n\n/// In this example we will send basic outputs with different feature blocks\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production!\n    // Configure your own mnemonic in the ".env" file. Since the output amount cannot be zero, the seed must contain\n    // non-zero balance.\n    dotenv::dotenv().ok();\n\n    let node_url = std::env::var("NODE_URL").unwrap();\n    let faucet_url = std::env::var("FAUCET_URL").unwrap();\n\n    // Create a client instance.\n    let client = Client::builder().with_node(&node_url)?.finish()?;\n\n    let secret_manager = SecretManager::Mnemonic(MnemonicSecretManager::try_from_mnemonic(\n        &std::env::var("NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1").unwrap(),\n    )?);\n\n    let token_supply = client.get_token_supply().await?;\n\n    let address = client.get_addresses(&secret_manager).with_range(0..1).get_raw().await?[0];\n    println!(\n        "{}",\n        request_funds_from_faucet(&faucet_url, &address.to_bech32(client.get_bech32_hrp().await?)).await?\n    );\n\n    let basic_output_builder = BasicOutputBuilder::new_with_amount(1_000_000)?\n        .add_unlock_condition(UnlockCondition::Address(AddressUnlockCondition::new(address)));\n\n    let outputs = vec![\n        // most simple output\n        basic_output_builder.clone().finish_output(token_supply)?,\n        // with metadata feature block\n        basic_output_builder\n            .clone()\n            .add_feature(Feature::Metadata(MetadataFeature::new(vec![13, 37])?))\n            .finish_output(token_supply)?,\n        // with storage deposit return\n        basic_output_builder\n            .clone()\n            .with_amount(234_100)?\n            .add_unlock_condition(UnlockCondition::StorageDepositReturn(\n                StorageDepositReturnUnlockCondition::new(address, 234_000, token_supply)?,\n            ))\n            .finish_output(token_supply)?,\n        // with expiration\n        basic_output_builder\n            .clone()\n            .add_unlock_condition(UnlockCondition::Expiration(ExpirationUnlockCondition::new(address, 1)?))\n            .finish_output(token_supply)?,\n        // with timelock\n        basic_output_builder\n            .clone()\n            .add_unlock_condition(UnlockCondition::Timelock(TimelockUnlockCondition::new(1)?))\n            .finish_output(token_supply)?,\n    ];\n\n    let block = client\n        .block()\n        .with_secret_manager(&secret_manager)\n        .with_outputs(outputs)?\n        .finish()\n        .await?;\n\n    println!("Transaction sent: {node_url}/api/core/v2/blocks/{}", block.id());\n    println!("Block metadata: {node_url}/api/core/v2/blocks/{}/metadata", block.id());\n    let _ = client.retry_until_included(&block.id(), None, None).await?;\n    Ok(())\n}\n'),(0,a.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,a.kt)("p",null,"Run the example by running the following command:"),(0,a.kt)(r.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example basic --release"))}v.isMDXComponent=!0;const x={toc:[]};function C(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},x,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-plaintext"},"Transaction sent: https://api.testnet.shimmer.network/api/core/v2/blocks/0x7e85b3a62beeedafadbb3dc89a6f5813c34417dfe44fc7a679f3b42b0df3210e\nBlock metadata: https://api.testnet.shimmer.network/api/core/v2/blocks/0x7e85b3a62beeedafadbb3dc89a6f5813c34417dfe44fc7a679f3b42b0df3210e/metadata\n")))}C.isMDXComponent=!0;const T={title:"Build a Basic Output",description:"Build a simple output using the Client.buildBasicOutput(options) function.",image:"/img/logo/iota_mark_light.png",keywords:["how to","address","iota address","addressgetter","environment variable","java","nodejs","python","rust"]},N=void 0,E={unversionedId:"how_tos/build_output",id:"how_tos/build_output",title:"Build a Basic Output",description:"Build a simple output using the Client.buildBasicOutput(options) function.",source:"@site/next/external/iota.rs/documentation/docs/how_tos/05_build_output.mdx",sourceDirName:"how_tos",slug:"/how_tos/build_output",permalink:"/next/iota.rs/how_tos/build_output",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/next/external/iota.rs/documentation/docs/how_tos/05_build_output.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Build a Basic Output",description:"Build a simple output using the Client.buildBasicOutput(options) function.",image:"/img/logo/iota_mark_light.png",keywords:["how to","address","iota address","addressgetter","environment variable","java","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Get Outputs",permalink:"/next/iota.rs/how_tos/get_output"},next:{title:"Get Address Balance",permalink:"/next/iota.rs/how_tos/get_address_balances"}},M={},O=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],B={toc:O};function D(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},B,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"You can build a simple output using the ",(0,a.kt)("inlineCode",{parentName:"p"},"Client.buildBasicOutput(options)")," function."),(0,a.kt)("p",null,"The following code example will:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"Client")," which will connect to the ",(0,a.kt)("a",{parentName:"li",href:"https://api.testnet.shimmer.network"},"Shimmer Testnet"),"."),(0,a.kt)("li",{parentName:"ol"},"Create a ",(0,a.kt)("inlineCode",{parentName:"li"},"SecretManager")," from a ",(0,a.kt)("a",{parentName:"li",href:"/next/iota.rs/how_tos/generate_mnemonic"},"mnemonic"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"/next/iota.rs/how_tos/generate_addresses"},"Generate a public address"),"."),(0,a.kt)("li",{parentName:"ol"},"Build a simple output.")),(0,a.kt)("h2",{id:"code-example"},"Code Example"),(0,a.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,a.kt)(v,{mdxType:"RustCode"})),(0,a.kt)(s.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,a.kt)(k,{mdxType:"NodejsCode"})),(0,a.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(g,{mdxType:"PythonCode"})),(0,a.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(l,{mdxType:"JavaCode"}))),(0,a.kt)("h2",{id:"expected-output"},"Expected Output"),(0,a.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,a.kt)(C,{mdxType:"RustOutput"})),(0,a.kt)(s.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,a.kt)(b,{mdxType:"NodejsOutput"})),(0,a.kt)(s.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,a.kt)(f,{mdxType:"PythonOutput"})),(0,a.kt)(s.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,a.kt)(c,{mdxType:"JavaOutput"}))))}D.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>s});var o=n(67294),a=n(86010);const i="tabItem_Ymn6";function s(e){let{children:t,hidden:n,className:s}=e;return o.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,s),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var o=n(87462),a=n(67294),i=n(86010),s=n(51048),r=n(33609),u=n(1943),l=n(72957);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:n,block:s,defaultValue:d,values:m,groupId:k,className:h}=e,b=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),_=m??b.map((e=>{let{props:{value:t,label:n,attributes:o}}=e;return{value:t,label:n,attributes:o}})),g=(0,r.l)(_,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==y&&!_.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${_.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:w}=(0,u.U)(),[v,x]=(0,a.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:T}=(0,l.o5)();if(null!=k){const e=f[k];null!=e&&e!==v&&_.some((t=>t.value===e))&&x(e)}const N=e=>{const t=e.currentTarget,n=C.indexOf(t),o=_[n].value;o!==v&&(T(t),x(o),null!=k&&w(k,String(o)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=C.indexOf(e.currentTarget)+1;n=C[t]??C[0];break}case"ArrowLeft":{const t=C.indexOf(e.currentTarget)-1;n=C[t]??C[C.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":s},h)},_.map((e=>{let{value:t,label:n,attributes:s}=e;return a.createElement("li",(0,o.Z)({role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,key:t,ref:e=>C.push(e),onKeyDown:E,onFocus:N,onClick:N},s,{className:(0,i.Z)("tabs__item",c,null==s?void 0:s.className,{"tabs__item--active":v===t})}),n??t)}))),n?(0,a.cloneElement)(b.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==v})))))}function m(e){const t=(0,s.Z)();return a.createElement(d,(0,o.Z)({key:String(t)},e))}}}]);