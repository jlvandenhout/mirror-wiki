"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[80205],{50247:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={toc:[]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}l.isMDXComponent=!0},56019:(e,t,n)=>{n.d(t,{ZP:()=>l});var a=n(87462),o=(n(67294),n(3905));const r={toc:[]};function l(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}l.isMDXComponent=!0},63122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>b,frontMatter:()=>y,metadata:()=>f,toc:()=>v});var a=n(87462),o=(n(67294),n(3905)),r=n(34259),l=n(18679),s=n(50247),i=n(69319);var u=n(56019);const d={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(u.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(i.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example destroy_foundry --release\n// In this example we will destroy an existing foundry output. This is only possible if its circulating supply is 0.\n// Rename `.env.example` to `.env` first\n\nuse std::{env, str::FromStr};\n\nuse dotenv::dotenv;\nuse iota_client::block::output::FoundryId;\nuse iota_wallet::{account_manager::AccountManager, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    let balance = account.balance().await?;\n    println!("Balance before destroying:\\n{balance:?}",);\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n\n    // Replace with an FoundryId that is available in the account\n    let foundry_id =\n        FoundryId::from_str("0x0857f1bafae0ef43190597a0dfe72ef1477b769560203c1854c6fb427c486e65300100000000")?;\n    let transaction = account.destroy_foundry(foundry_id, None).await?;\n\n    let _ = match transaction.block_id {\n        Some(block_id) => account.retry_until_included(&block_id, None, None).await?,\n        None => {\n            return Err(iota_wallet::Error::BurningOrMeltingFailed(\n                "burn nft failed to submitted".to_string(),\n            ));\n        }\n    };\n\n    let balance = account.sync(None).await?;\n\n    println!("Balance after destroying:\\n{balance:?}",);\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(i.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example destroy_foundry --release"))}c.isMDXComponent=!0;const p={toc:[]};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"{16-18,37-38}","{16-18,37-38}":!0},"Balancebeforedestroying: AccountBalance{\n  base_coin: BaseCoinBalance{\n    total: 109999491000,\n    available: 109999491000\n  },\n  required_storage_deposit: 3046500,\n  native_tokens: [\n    ...\n  ],\n  nfts: [\n    ...\n  ]\n  aliases: [\n    ...\n  ],\n  foundries: [\n    FoundryId(0x086d7755dc84a6757ea28285990ddac2eb53f558f8345507ac76d0c33caacaf8970100000000),\n  ],\n  potentially_locked_outputs: {\n    ...\n  }\n}Balanceafterdestroying: AccountBalance{\n  base_coin: BaseCoinBalance{\n    total: 109999491000,\n    available: 109999491000\n  },\n  required_storage_deposit: 3046500,\n  native_tokens: [\n    ...\n  ],\n  nfts: [\n    ...\n  ]\n  aliases: [\n    ...\n  ],\n  foundries: [\n  ],\n  potentially_locked_outputs: {\n    ...\n  }\n}\n")))}m.isMDXComponent=!0;const y={title:"Destroy a Foundry",sidebar_label:"Destroy a Foundry",description:"How to destroy a foundry using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","destroy","destroy foundry","foundry","nodejs","python","rust"]},h=void 0,f={unversionedId:"how_tos/native_tokens/destroy_foundry",id:"how_tos/native_tokens/destroy_foundry",title:"Destroy a Foundry",description:"How to destroy a foundry using wallet.rs.",source:"@site/next/external/wallet.rs/documentation/docs/how_tos/native_tokens/05_destroy_foundry.mdx",sourceDirName:"how_tos/native_tokens",slug:"/how_tos/native_tokens/destroy_foundry",permalink:"/next/wallet.rs/how_tos/native_tokens/destroy_foundry",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/next/external/wallet.rs/documentation/docs/how_tos/native_tokens/05_destroy_foundry.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Destroy a Foundry",sidebar_label:"Destroy a Foundry",description:"How to destroy a foundry using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","destroy","destroy foundry","foundry","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Burn",permalink:"/next/wallet.rs/how_tos/native_tokens/burn_native_token"},next:{title:"Mint",permalink:"/next/wallet.rs/how_tos/NFT/mint_nft"}},k={},v=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],_={toc:v};function b(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},_,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can destroy a foundry by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account.destroy_foundry(foundry_id, options)")," function. The function will\ndestroy a foundry output as long as its circulating\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/develop/explanations/ledger/foundry"},"native token")," supply is zero. Any native tokens\nwhich were minted by other foundries will be sent to the controlling\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/develop/explanations/ledger/alias"},"alias"),"."),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"Before you run the example you should update the ",(0,o.kt)("inlineCode",{parentName:"p"},"foundry_id")," to one available in your account that has no available\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/introduction/develop/explanations/ledger/foundry"},"native tokens"),". If you have no available\nfoundries, you can create one by ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/native_tokens/mint_native_token"},"minting a native token"),". If you've already minted your\ntokens but need to empty the foundry, you can decrease your native token supply by ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/native_tokens/melt_native_token"},"melting them"),"."),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,o.kt)("a",{parentName:"li",href:"/next/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/next/wallet.rs/how_tos/accounts_and_addresses/check_balance"},"Get the account's balance"),"."),(0,o.kt)("li",{parentName:"ol"},"Destroy a ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.iota.org/introduction/develop/explanations/ledger/foundry"},"foundry")," output by id."),(0,o.kt)("li",{parentName:"ol"},"Get the account's balance again to show the difference after step 4.")),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(c,{mdxType:"RustCode"})),(0,o.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(s.ZP,{mdxType:"NodejsCode"})),(0,o.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(s.ZP,{mdxType:"PythonCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(m,{mdxType:"RustOutput"})),(0,o.kt)(l.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(s.ZP,{mdxType:"NodejsOutput"})),(0,o.kt)(l.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(s.ZP,{mdxType:"PythonOutput"}))))}b.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),o=n(86010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,l),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),o=n(67294),r=n(86010),l=n(51048),s=n(33609),i=n(1943),u=n(72957);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t;const{lazy:n,block:l,defaultValue:p,values:m,groupId:y,className:h}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,s.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const _=null===p?p:p??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==_&&!k.some((e=>e.value===_)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${_}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:b,setTabGroupChoices:g}=(0,i.U)(),[w,x]=(0,o.useState)(_),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=y){const e=b[y];null!=e&&e!==w&&k.some((t=>t.value===e))&&x(e)}const Z=e=>{const t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==w&&(N(t),x(a),null!=y&&g(y,String(a)))},C=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;n=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;n=T[t]??T[T.length-1];break}}null==(t=n)||t.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",d)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},h)},k.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>T.push(e),onKeyDown:C,onFocus:Z,onClick:Z},l,{className:(0,r.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":w===t})}),n??t)}))),n?(0,o.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,l.Z)();return o.createElement(p,(0,a.Z)({key:String(t)},e))}}}]);