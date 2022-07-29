"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[8605],{13712:function(e,t,n){n.d(t,{ZP:function(){return l}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=["components"],s={toc:[]};function l(e){var t=e.components,n=(0,i.Z)(e,a);return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"More advanced examples can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/examples"},"examples")," folder."))}l.isMDXComponent=!0},77966:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return _},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return f}});var o=n(87462),i=n(63366),r=(n(67294),n(3905)),a=n(87308),s=n(13712),l=["components"],u={title:"How To Get Node Info"},d=void 0,c={unversionedId:"libraries/rust/how_to/get_node_info",id:"libraries/rust/how_to/get_node_info",title:"How To Get Node Info",description:"Run it with",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/rust/how_to/get_node_info.mdx",sourceDirName:"libraries/rust/how_to",slug:"/libraries/rust/how_to/get_node_info",permalink:"/iota.rs/develop/libraries/rust/how_to/get_node_info",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/rust/how_to/get_node_info.mdx",tags:[],version:"current",frontMatter:{title:"How To Get Node Info"},sidebar:"docs",previous:{title:"Getting Started With Rust",permalink:"/iota.rs/develop/libraries/rust/getting_started"},next:{title:"How To Get A Block",permalink:"/iota.rs/develop/libraries/rust/how_to/get_block"}},p={},f=[],m={toc:f};function _(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(a.Z,{className:"language-rust",mdxType:"CodeBlock"},'// Copyright 2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! Calls `GET /api/core/v2/info`.\n//! Returns general information about the node.\n//! Run: `cargo run --example node_api_core_get_info --release -- [NODE URL]`.\n\nuse iota_client::{Client, Result};\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    // Take the node URL from command line argument or use one from env as default.\n    let node_url = std::env::args().nth(1).unwrap_or_else(|| {\n        // This example uses dotenv, which is not safe for use in production.\n        dotenv::dotenv().ok();\n        std::env::var("NODE_URL").unwrap()\n    });\n\n    // Create a client with that node.\n    let client = Client::builder()\n        .with_node(&node_url)?\n        .with_node_sync_disabled()\n        .finish()?;\n\n    // Get node info.\n    let info = client.get_info().await?;\n\n    println!("{info:#?}");\n\n    Ok(())\n}\n'),(0,r.kt)("p",null,"Run it with"),(0,r.kt)(a.Z,{className:"language-bash",mdxType:"CodeBlock"},"cargo run --example node_api_core_get_info --release -- [NODE URL]"),(0,r.kt)(s.ZP,{mdxType:"MoreExamples"}))}_.isMDXComponent=!0}}]);