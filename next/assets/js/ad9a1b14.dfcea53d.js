"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[29939],{50247:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(87462),o=(t(67294),t(3905));const l={toc:[]};function r(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}r.isMDXComponent=!0},78514:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(87462),o=(t(67294),t(3905));const l={toc:[]};function r(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Replace the native token ID",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Before you run the code example, make sure to update the token ID with one which is available in your account. If you\nhaven't done so already, you can follow the ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/native_tokens/mint_native_token"},"how to mint a native token guide"),". If you\ndon't know the token ID you can ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/accounts_and_addresses/check_balance"},"check your accounts balance")," to retrieve\nthe available native tokens in your account.")))}r.isMDXComponent=!0},56019:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(87462),o=(t(67294),t(3905));const l={toc:[]};function r(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}r.isMDXComponent=!0},9189:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>y,default:()=>N,frontMatter:()=>w,metadata:()=>_,toc:()=>x});var a=t(87462),o=(t(67294),t(3905)),l=t(34259),r=t(18679),s=t(69319);const i={toc:[]};function u(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},i,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(s.Z,{className:"language-typescript",mdxType:"CodeBlock"},"/**\n * This example will burn an NFT\n */\nconst getUnlockedManager = require('./account-manager');\n\nasync function run() {\n    try {\n        const { initLogger } = require('@iota/wallet');\n    initLogger({\n        name: './wallet.log',\n        levelFilter: 'debug',\n        targetExclusions: [\"h2\", \"hyper\", \"rustls\"]\n    });\n        const manager = await getUnlockedManager();\n\n        const account = await manager.getAccount('0');\n\n        await account.sync();\n\n        //TODO: Replace with an NFT id from your account, you can mint one with `25-mint-nft.js`.\n        const response = await account.burnNft('0xeb7a7f6b4b8f932ed0d60d5a6018cb51dfa53af1173f9ca8944d1ab49772dd2b');\n\n        console.log(response);\n\n        console.log(\n            `Check your block on http://localhost:14265/api/core/v2/blocks/${response.blockId}`,\n        );\n    } catch (error) {\n        console.log('Error: ', error);\n    }\n    process.exit(0);\n}\n\nrun();\n"),(0,o.kt)("p",null,"You can run the example by running the following command from the ",(0,o.kt)("inlineCode",{parentName:"p"},"bindings/node/examples/")," folder:"),(0,o.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"node 27-burn-nft.js"))}u.isMDXComponent=!0;const c={toc:[]};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"{\n  payload: {\n    type: 6,\n    essence: {\n      type: 1,\n      networkId: '8342982141227064571',\n      inputs: [Array],\n      inputsCommitment: '0x8ed6de2d3570269b4cfe2eb7ad29ee324c1b6ff78ad1f608db2b4e40c03db366',\n      outputs: [Array]\n    },\n    unlocks: [ [Object] ]\n  },\n  blockId: '0x2ea37ddeeaad7e6546e22cb92821ada3a213760b6a799c49b68d57a287d68a3b',\n  inclusionState: 'Pending',\n  timestamp: '1663000414059',\n  transactionId: '0x8e178dddc6c65be31ebe9fc980add3a62573d972a15deee03ac2434fc91812c5',\n  networkId: '8342982141227064571',\n  incoming: false,\n  note: null\n}\nCheck your block on http://localhost:14265/api/core/v2/blocks/0x2ea37ddeeaad7e6546e22cb92821ada3a213760b6a799c49b68d57a287d68a3b\n\n")))}d.isMDXComponent=!0;var p=t(50247);var m=t(56019);const b={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function h(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(m.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(s.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example burn_nft --release\n// In this example we will burn an existing nft output\n// Rename `.env.example` to `.env` first\n\nuse std::{env, str::FromStr};\n\nuse dotenv::dotenv;\nuse iota_client::block::output::NftId;\nuse iota_wallet::{account_manager::AccountManager, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    let balance = account.balance().await?;\n    println!("Balance before burning:\\n{balance:?}",);\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n\n    // Replace with an NftId that is available in the account\n    let nft_id = NftId::from_str("0xe192461b30098a5da889ef6abc9e8130bf3b2d980450fa9201e5df404121b932")?;\n    let transaction = account.burn_nft(nft_id, None).await?;\n\n    let _ = match transaction.block_id {\n        Some(block_id) => account.retry_until_included(&block_id, None, None).await?,\n        None => {\n            return Err(iota_wallet::Error::BurningOrMeltingFailed(\n                "burn nft failed to submitted".to_string(),\n            ));\n        }\n    };\n\n    let balance = account.sync(None).await?;\n\n    println!("Balance after burning:\\n{balance:?}",);\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(s.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example burn_nft --release"))}h.isMDXComponent=!0;const f={toc:[]};function k(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Balance before burning:\nAccountBalance{\n  base_coin: BaseCoinBalance{\n    total: 209996955000,\n    available: 209996955000\n  },\n  required_storage_deposit: 902500,\n  native_tokens: [\n    \n  ],\n  nfts: [\n    NftId(0xe314d76664f0ffe8d5fbe670527f108328c14bc8dad89b234dde3ff8deb58ec9)\n  ],\n  aliases: [\n    \n  ],\n  foundries: [\n    \n  ],\n  potentially_locked_outputs: {\n    \n  }\n}\nBalance after burning:\nAccountBalance{\n  base_coin: BaseCoinBalance{\n    total: 209996955000,\n    available: 209996955000\n  },\n  required_storage_deposit: 852000,\n  native_tokens: [\n    \n  ],\n  nfts: [\n    \n  ],\n  aliases: [\n    \n  ],\n  foundries: [\n    \n  ],\n  potentially_locked_outputs: {\n    \n  }\n}\n")))}k.isMDXComponent=!0;var g=t(78514);const w={title:"Burn NFTs",sidebar_label:"Burn",description:"How to burn an NFT using wallet.rs",image:"/img/logo/iota_mark_light.png",keywords:["how to","NFT","burn","burn NFT","nodejs","python","rust"]},y=void 0,_={unversionedId:"how_tos/NFT/burn_nft",id:"how_tos/NFT/burn_nft",title:"Burn NFTs",description:"How to burn an NFT using wallet.rs",source:"@site/next/external/wallet.rs/documentation/docs/how_tos/NFT/03_burn_nft.mdx",sourceDirName:"how_tos/NFT",slug:"/how_tos/NFT/burn_nft",permalink:"/next/wallet.rs/how_tos/NFT/burn_nft",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/next/external/wallet.rs/documentation/docs/how_tos/NFT/03_burn_nft.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Burn NFTs",sidebar_label:"Burn",description:"How to burn an NFT using wallet.rs",image:"/img/logo/iota_mark_light.png",keywords:["how to","NFT","burn","burn NFT","nodejs","python","rust"]},sidebar:"docs",previous:{title:"Send",permalink:"/next/wallet.rs/how_tos/NFT/send_nft"},next:{title:"More Examples",permalink:"/next/wallet.rs/how_tos/more_examples"}},v={},x=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],T={toc:x};function N(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},T,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You may want to burn some of your circulating NFTs. To do so, you will need to call the\n",(0,o.kt)("inlineCode",{parentName:"p"},"Account.burn_nft(native_token, options)")," function."),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)(g.ZP,{mdxType:"ReplaceNFTId"}),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,o.kt)("a",{parentName:"li",href:"/next/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/next/wallet.rs/how_tos/accounts_and_addresses/check_balance"},"Get the account's balance"),"."),(0,o.kt)("li",{parentName:"ol"},"Burn an NFT of the supplied ID.")),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(h,{mdxType:"RustCode"})),(0,o.kt)(r.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(u,{mdxType:"NodejsCode"})),(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(p.ZP,{mdxType:"PythonCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(l.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(r.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(k,{mdxType:"RustOutput"})),(0,o.kt)(r.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(d,{mdxType:"NodejsOutput"})),(0,o.kt)(r.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(p.ZP,{mdxType:"PythonOutput"}))))}N.isMDXComponent=!0},18679:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(67294),o=t(86010);const l="tabItem_Ymn6";function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(l,r),hidden:t},n)}},34259:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),o=t(67294),l=t(86010),r=t(51048),s=t(33609),i=t(1943),u=t(72957);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var n;const{lazy:t,block:r,defaultValue:p,values:m,groupId:b,className:h}=e,f=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=m??f.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),g=(0,s.l)(k,((e,n)=>e.value===n.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===p?p:p??(null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)??f[0].props.value;if(null!==w&&!k.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:_}=(0,i.U)(),[v,x]=(0,o.useState)(w),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=b){const e=y[b];null!=e&&e!==v&&k.some((n=>n.value===e))&&x(e)}const Z=e=>{const n=e.currentTarget,t=T.indexOf(n),a=k[t].value;a!==v&&(N(n),x(a),null!=b&&_(b,String(a)))},C=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,l.Z)("tabs-container",c)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},h)},k.map((e=>{let{value:n,label:t,attributes:r}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,key:n,ref:e=>T.push(e),onKeyDown:C,onFocus:Z,onClick:Z},r,{className:(0,l.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":v===n})}),t??n)}))),t?(0,o.cloneElement)(f.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},f.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}function m(e){const n=(0,r.Z)();return o.createElement(p,(0,a.Z)({key:String(n)},e))}}}]);