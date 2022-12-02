"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[80205],{57166:(e,n,t)=>{t.d(n,{ZP:()=>i});var a=t(87462),o=(t(67294),t(3905));const r={toc:[]};function i(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Guide Coming Soon",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"This how to guide is not available in your language of choice at the moment.\nPlease feel free to browse ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/more_examples"},"more examples")," which may suit your requirements.")))}i.isMDXComponent=!0},83383:(e,n,t)=>{t.d(n,{ZP:()=>i});var a=t(87462),o=(t(67294),t(3905));const r={toc:[]};function i(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Dotenv",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This example uses dotenv, which is not safe for use in production environments.")))}i.isMDXComponent=!0},98172:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>g,default:()=>T,frontMatter:()=>k,metadata:()=>w,toc:()=>_});var a=t(87462),o=(t(67294),t(3905)),r=t(34259),i=t(18679),l=t(57166);const s={toc:[]};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "payload":{\n    "type":6,\n    "essence":{\n      "type":1,\n      "networkId":"8342982141227064571",\n      "inputs":[\n        {\n          "type":0,\n          "transactionId":"0x27df04eac1408b4ec758f6aa222d616b21d9b237789e601d9d0b81aa6466fa97",\n          "transactionOutputIndex":0\n        },\n        {\n          "type":0,\n          "transactionId":"0x27df04eac1408b4ec758f6aa222d616b21d9b237789e601d9d0b81aa6466fa97",\n          "transactionOutputIndex":1\n        }\n      ],\n      "inputsCommitment":"0x06e8bdc8ddf5dac739e620f815aade7f73d06a33a911e1e6956d1f8d087ad6e3",\n      "outputs":[\n        {\n          "type":4,\n          "amount":"103100",\n          "aliasId":"0x429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef",\n          "stateIndex":9,\n          "stateMetadata":"0x",\n          "foundriesCounter":0,\n          "unlockConditions":[\n            {\n              "type":4,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            },\n            {\n              "type":5,\n              "address":{\n                "type":0,\n                "pubKeyHash":"0x4cfde0600797ae07d19d67d78910e70950bfdaf716f0035e9a30b97828aaf6a2"\n              }\n            }\n          ]\n        }\n      ]\n    },\n    "unlocks":[\n      {\n        "type":0,\n        "signature":{\n          "type":0,\n          "publicKey":"0xde3152ce9d67415b9c5a042ea01caccc3f73ff1c0c77036874cb8badf9798d56",\n          "signature":"0xb0a0473eb7dc09231707b11a04ad3a2fee9d67dd83f00e27ddbdc11f4473080ff8ac9a78d5dfb83da8bf1e8e77dc5c6cd867a28dc7520dc0f01dd49ce7815a02"\n        }\n      },\n      {\n        "type":2,\n        "reference":0\n      }\n    ]\n  },\n  "blockId":"0xf76fc85a74e1ac5381ff25777fef8a1c9ffb98bdad83157151bc8804bf496861",\n  "inclusionState":"Pending",\n  "timestamp":"1664886716685",\n  "transactionId":"0xce5504e02bf0796e48143d5daa1753500e798dbab673e14bb671512750f7d03a",\n  "networkId":"8342982141227064571",\n  "incoming":false\n}\n')))}d.isMDXComponent=!0;var u=t(69319);const c={toc:[]};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(u.Z,{className:"java",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nimport org.iota.Wallet;\nimport org.iota.types.*;\nimport org.iota.types.account_methods.SyncAccount;\nimport org.iota.types.exceptions.InitializeWalletException;\nimport org.iota.types.exceptions.WalletException;\nimport org.iota.types.ids.FoundryId;\nimport org.iota.types.ids.account.AccountAlias;\nimport org.iota.types.secret.StrongholdSecretManager;\n\npublic class DestroyFoundry {\n    public static void main(String[] args) throws WalletException, InterruptedException, InitializeWalletException {\n        // This example assumes that a wallet has already been created using the \xb4CreateWallet.java\xb4 example.\n        // If you have not run the \xb4CreateAccount.java\xb4 example yet, run it first to ensure that the wallet can be loaded correctly.\n        Wallet wallet = new Wallet(new WalletConfig()\n                .withClientOptions(new ClientConfig().withNodes(Env.NODE))\n                .withSecretManager(\n                        new StrongholdSecretManager(Env.STRONGHOLD_PASSWORD, null, Env.STRONGHOLD_SNAPSHOT_PATH))\n                .withCoinType(CoinType.Shimmer)\n        );\n\n        // Get account and sync it with the registered node to ensure that its balances are up-to-date.\n        AccountHandle a = wallet.getAccount(new AccountAlias(Env.ACCOUNT_NAME));\n        a.syncAccount(new SyncAccount().withOptions(new SyncOptions()));\n\n        // TODO: replace with your own values.\n        FoundryId foundryId = new FoundryId("0x08429fe5864378ce70699fc2d22bb144cb86a3c4833d136e3b95c5dadfd6ba0cef0500000000");\n\n        // Send transaction.\n        Transaction t = a.destroyFoundry(new org.iota.types.account_methods.DestroyFoundry().withFoundryId(\n                foundryId\n        ));\n\n        // Print transaction.\n        System.out.println(t);\n    }\n}'))}p.isMDXComponent=!0;var m=t(83383);const y={toc:[{value:"Run the Example",id:"run-the-example",level:3}]};function f(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},y,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)(m.ZP,{mdxType:"DotEnvWarning"}),(0,o.kt)(u.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example destroy_foundry --release\n// In this example we will destroy an existing foundry output. This is only possible if its circulating supply is 0.\n// Rename `.env.example` to `.env` first\n\nuse std::{env, str::FromStr};\n\nuse dotenv::dotenv;\nuse iota_client::block::output::FoundryId;\nuse iota_wallet::{account_manager::AccountManager, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // This example uses dotenv, which is not safe for use in production\n    dotenv().ok();\n\n    // Create the account manager\n    let manager = AccountManager::builder().finish().await?;\n\n    // Get the account we generated with `01_create_wallet`\n    let account = manager.get_account("Alice").await?;\n\n    let balance = account.balance().await?;\n    println!("Balance before destroying:\\n{balance:?}",);\n\n    // Set the stronghold password\n    manager\n        .set_stronghold_password(&env::var("STRONGHOLD_PASSWORD").unwrap())\n        .await?;\n\n    // Replace with an FoundryId that is available in the account\n    let foundry_id =\n        FoundryId::from_str("0x0857f1bafae0ef43190597a0dfe72ef1477b769560203c1854c6fb427c486e65300100000000")?;\n    let transaction = account.destroy_foundry(foundry_id, None).await?;\n\n    let _ = match transaction.block_id {\n        Some(block_id) => account.retry_until_included(&block_id, None, None).await?,\n        None => {\n            return Err(iota_wallet::Error::BurningOrMeltingFailed(\n                "burn nft failed to submitted".to_string(),\n            ));\n        }\n    };\n\n    let balance = account.sync(None).await?;\n\n    println!("Balance after destroying:\\n{balance:?}",);\n\n    Ok(())\n}\n'),(0,o.kt)("h3",{id:"run-the-example"},"Run the Example"),(0,o.kt)("p",null,"Run the example by running the following command:"),(0,o.kt)(u.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example destroy_foundry --release"))}f.isMDXComponent=!0;const h={toc:[]};function b(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext",metastring:"{16-18,37-38}","{16-18,37-38}":!0},"Balancebeforedestroying: AccountBalance{\n  base_coin: BaseCoinBalance{\n    total: 109999491000,\n    available: 109999491000\n  },\n  required_storage_deposit: 3046500,\n  native_tokens: [\n    ...\n  ],\n  nfts: [\n    ...\n  ]\n  aliases: [\n    ...\n  ],\n  foundries: [\n    FoundryId(0x086d7755dc84a6757ea28285990ddac2eb53f558f8345507ac76d0c33caacaf8970100000000),\n  ],\n  potentially_locked_outputs: {\n    ...\n  }\n}Balanceafterdestroying: AccountBalance{\n  base_coin: BaseCoinBalance{\n    total: 109999491000,\n    available: 109999491000\n  },\n  required_storage_deposit: 3046500,\n  native_tokens: [\n    ...\n  ],\n  nfts: [\n    ...\n  ]\n  aliases: [\n    ...\n  ],\n  foundries: [\n  ],\n  potentially_locked_outputs: {\n    ...\n  }\n}\n")))}b.isMDXComponent=!0;const k={title:"Destroy a Foundry",sidebar_label:"Destroy a Foundry",description:"How to destroy a foundry using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","destroy","destroy foundry","foundry","nodejs","python","java","rust"]},g=void 0,w={unversionedId:"how_tos/native_tokens/destroy_foundry",id:"how_tos/native_tokens/destroy_foundry",title:"Destroy a Foundry",description:"How to destroy a foundry using wallet.rs.",source:"@site/next/external/wallet.rs/documentation/docs/how_tos/native_tokens/05_destroy_foundry.mdx",sourceDirName:"how_tos/native_tokens",slug:"/how_tos/native_tokens/destroy_foundry",permalink:"/next/wallet.rs/how_tos/native_tokens/destroy_foundry",draft:!1,editUrl:"https://github.com/iotaledger/wallet.rs/edit/develop/documentation/next/external/wallet.rs/documentation/docs/how_tos/native_tokens/05_destroy_foundry.mdx",tags:[],version:"current",sidebarPosition:5,frontMatter:{title:"Destroy a Foundry",sidebar_label:"Destroy a Foundry",description:"How to destroy a foundry using wallet.rs.",image:"/img/logo/iota_mark_light.png",keywords:["how to","destroy","destroy foundry","foundry","nodejs","python","java","rust"]},sidebar:"docs",previous:{title:"Burn",permalink:"/next/wallet.rs/how_tos/native_tokens/burn_native_token"},next:{title:"Mint",permalink:"/next/wallet.rs/how_tos/NFT/mint_nft"}},v={},_=[{value:"Code Example",id:"code-example",level:2},{value:"Expected Output",id:"expected-output",level:2}],x={toc:_};function T(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},x,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"You can destroy a foundry by calling the ",(0,o.kt)("inlineCode",{parentName:"p"},"Account.destroy_foundry(foundry_id, options)")," function. The function will\ndestroy a foundry output as long as its circulating\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/ledger/foundry"},"native token")," supply is zero. Any native tokens\nwhich were minted by other foundries will be sent to the controlling\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/ledger/alias"},"alias"),"."),(0,o.kt)("h2",{id:"code-example"},"Code Example"),(0,o.kt)("p",null,"Before you run the example you should update the ",(0,o.kt)("inlineCode",{parentName:"p"},"foundry_id")," to one available in your account that has no available\n",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/shimmer/introduction/explanations/ledger/foundry"},"native tokens"),". If you have no available\nfoundries, you can create one by ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/native_tokens/mint_native_token"},"minting a native token"),". If you've already minted your\ntokens but need to empty the foundry, you can decrease your native token supply by ",(0,o.kt)("a",{parentName:"p",href:"/next/wallet.rs/how_tos/native_tokens/melt_native_token"},"melting them"),"."),(0,o.kt)("p",null,"The following example will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create an account manager."),(0,o.kt)("li",{parentName:"ol"},"Get Alice's account which was ",(0,o.kt)("a",{parentName:"li",href:"/next/wallet.rs/how_tos/accounts_and_addresses/create_a_wallet_account"},"created in the first guide"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/next/wallet.rs/how_tos/accounts_and_addresses/check_balance"},"Get the account's balance"),"."),(0,o.kt)("li",{parentName:"ol"},"Destroy a ",(0,o.kt)("a",{parentName:"li",href:"https://wiki.iota.org/shimmer/introduction/explanations/ledger/foundry"},"foundry")," output by id."),(0,o.kt)("li",{parentName:"ol"},"Get the account's balance again to show the difference after step 4.")),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(f,{mdxType:"RustCode"})),(0,o.kt)(i.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(l.ZP,{mdxType:"NodejsCode"})),(0,o.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(l.ZP,{mdxType:"PythonCode"})),(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(d,{mdxType:"JavaCode"}))),(0,o.kt)("h2",{id:"expected-output"},"Expected Output"),(0,o.kt)(r.Z,{groupId:"language",mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)(b,{mdxType:"RustOutput"})),(0,o.kt)(i.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,o.kt)(l.ZP,{mdxType:"NodejsOutput"})),(0,o.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,o.kt)(l.ZP,{mdxType:"PythonOutput"})),(0,o.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,o.kt)(p,{mdxType:"JavaOutput"}))))}T.isMDXComponent=!0},18679:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),o=t(86010);const r="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r,i),hidden:t},n)}},34259:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),o=t(67294),r=t(86010),i=t(51048),l=t(33609),s=t(1943),d=t(72957);const u="tabList__CuJ",c="tabItem_LNqP";function p(e){var n;const{lazy:t,block:i,defaultValue:p,values:m,groupId:y,className:f}=e,h=o.Children.map(e.children,(e=>{if((0,o.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=m??h.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),k=(0,l.l)(b,((e,n)=>e.value===n.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const g=null===p?p:p??(null==(n=h.find((e=>e.props.default)))?void 0:n.props.value)??h[0].props.value;if(null!==g&&!b.some((e=>e.value===g)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${g}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:v}=(0,s.U)(),[_,x]=(0,o.useState)(g),T=[],{blockElementScrollPositionUntilNextRender:N}=(0,d.o5)();if(null!=y){const e=w[y];null!=e&&e!==_&&b.some((n=>n.value===e))&&x(e)}const I=e=>{const n=e.currentTarget,t=T.indexOf(n),a=b[t].value;a!==_&&(N(n),x(a),null!=y&&v(y,String(a)))},C=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=T.indexOf(e.currentTarget)+1;t=T[n]??T[0];break}case"ArrowLeft":{const n=T.indexOf(e.currentTarget)-1;t=T[n]??T[T.length-1];break}}null==(n=t)||n.focus()};return o.createElement("div",{className:(0,r.Z)("tabs-container",u)},o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},f)},b.map((e=>{let{value:n,label:t,attributes:i}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:_===n?0:-1,"aria-selected":_===n,key:n,ref:e=>T.push(e),onKeyDown:C,onFocus:I,onClick:I},i,{className:(0,r.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":_===n})}),t??n)}))),t?(0,o.cloneElement)(h.filter((e=>e.props.value===_))[0],{className:"margin-top--md"}):o.createElement("div",{className:"margin-top--md"},h.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==_})))))}function m(e){const n=(0,i.Z)();return o.createElement(p,(0,a.Z)({key:String(n)},e))}}}]);