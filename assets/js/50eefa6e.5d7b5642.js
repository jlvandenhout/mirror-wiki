"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[10315],{4685:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>C,contentTitle:()=>x,default:()=>T,frontMatter:()=>v,metadata:()=>w,toc:()=>S});var n=t(87462),s=(t(67294),t(3905)),i=t(34259),d=t(18679),o=t(69319),r=t(49962);const l=r.Z.indexOf("public static void getMessageMetadata"),c=r.Z.indexOf("public static void getDataMessage"),p=r.Z.substring(l,c),m={toc:[]};function g(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Once a ",(0,s.kt)("a",{parentName:"p",href:"/iota.rs/explanations/messages_payloads_and_transactions"},"message")," is broadcast, you can use the\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/java/api_reference#getmessagebuilder"},(0,s.kt)("inlineCode",{parentName:"a"},"GetMessageBuilder"))," helper class that you can instantiate using\nthe ",(0,s.kt)("a",{parentName:"p",href:"./../libraries/java/api_reference#getmessage-getmessagebuilder"},(0,s.kt)("inlineCode",{parentName:"a"},"Client.getMessage()"))," function to retrieve it from\nthe network. The ",(0,s.kt)("inlineCode",{parentName:"p"},"GetMessageBuilder")," provides helper functions related to the message, such as\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/java/api_reference#datamessage_id-message"},(0,s.kt)("inlineCode",{parentName:"a"},"Client.getMessage().data(str)"))," and\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/java/api_reference#metadatamessage_id-messagemetadata"},(0,s.kt)("inlineCode",{parentName:"a"},"Client.getMessage().metadata(str)")),":"),(0,s.kt)(o.Z,{className:"language-java",mdxType:"CodeBlock"},p),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Output example"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'Message meta data:\n{\n   "messageId":"e52b631bc7500366b90c6e11eb7fd6abaa7527f9bb5b4b512b0b9112bb9e7be8",\n   "parentMessageIds": [\n      "26d72339ed262c1ec29d6c91de6be26d067b3327191f5e47606df53cc40e334e",\n      "6289ea0aecf3830e5e8d9925959bb6e804e324bb6db23c5701f7a538d12831f6",\n      "fdbf2d02603235fdff99f0ceb57705ead95041d62de386387f2922e5d9f6c502",\n      "ffa26139ca7f9d4849e118ff369fb3a387c8fefd8d15232b8353d4acf334324c"\n   ],\n   "isSolid":true,\n   "shouldPromote":false,\n   "shouldReattach":false\n}\n\nMessage data:\n{\n   "message": {\n      "networkId":"14379272398717627559",\n      "parentMessageIds": [\n         "27782707e4cbf84ca26b3db881bbf39b6429f9ee736a0cbe5a1c177d7a52b05d",\n         "61cdf92c64a3304bbbabaf9fbfb0ea7ef9624e1eedea68efbe08595ccdf853e1",\n         "a222d13e3ee51b56b0b0e38140a5f7f813b6d9e29b752d7e1e2424099455080d",\n         "ab6bca20091b58dcbb0906438a7e47bfb11621c4a37b8d118b565f7f138a40d6"\n      ],\n      "payload": {\n         "type":2,\n         "index":"484f524e4554205370616d6d6572",\n         "data":"42696e61727920697320746865206675747572652e0a436f756e743a2031333936393530390a54696d657374616d703a20323032312d30352d33315431353a33363a30392b30323a30300a54697073656c656374696f6e3a203337c2b573"\n         },\n      "nonce":"246736"\n   },\n   "messageId":"30d87fa9917602e5685638e37802bde11b260bd2379f6c850704d7babd365b44"\n}\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Client.getMessage().metadata()")," provides information on how the given message fits to network structures, such as\n",(0,s.kt)("inlineCode",{parentName:"li"},"ledger_inclusion_state"),", etc."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Client.getMessage().data()")," provides all the data that relates to the given message and its payload(s).")))}g.isMDXComponent=!0;const u="async function run() {\n    const { ClientBuilder } = require('@iota/client');\n\n    // client will connect to testnet by default\n    const client = new ClientBuilder().build();\n\n    // get message data by message id (get a random message id with getTips)\n    const tips = await client.getTips();\n    const message_data = await client.getMessage().data(tips[0]);\n    const message_metadata = await client.getMessage().metadata(tips[0]);\n    console.log(message_metadata);\n    console.log(message_data);\n\n    // get indexation data by index\n    const message_ids = await client.getMessage().index(\"IOTA.RS BINDING - NODE.JS\")\n    for (message_id of message_ids) {\n        const message_wrapper = await client.getMessage().data(message_id)\n        console.log(Buffer.from(message_wrapper.message.payload.data, 'hex').toString('utf8'));\n    }\n}\n\nrun()\n",b={toc:[]};function f(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Once a ",(0,s.kt)("a",{parentName:"p",href:"/iota.rs/explanations/messages_payloads_and_transactions"},"message")," is broadcast, you can use the\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/nodejs/api_reference#messagefinder"},(0,s.kt)("inlineCode",{parentName:"a"},"MessageFinder"))," helper class that you can instantiate using the\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/nodejs/api_reference#getmessage-messagefinder"},(0,s.kt)("inlineCode",{parentName:"a"},"Client.getMessage()"))," function to retrieve it from the\nnetwork. The ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageFinder")," provides helper functions related to the message, such as ",(0,s.kt)("a",{parentName:"p",href:"./../libraries/nodejs/api_reference#dataid-promise"},(0,s.kt)("inlineCode",{parentName:"a"},"Client.getMessage().data(id: str)")),"\nand ",(0,s.kt)("a",{parentName:"p",href:"./../libraries/nodejs/api_reference#metadataid-promise"},(0,s.kt)("inlineCode",{parentName:"a"},"Client.getMessage().metadata(str)")),":"),(0,s.kt)(o.Z,{className:"language-javascript",mdxType:"CodeBlock"},u),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Output example"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'Message meta data:\n{\n   "messageId":"e52b631bc7500366b90c6e11eb7fd6abaa7527f9bb5b4b512b0b9112bb9e7be8",\n   "parentMessageIds": [\n      "26d72339ed262c1ec29d6c91de6be26d067b3327191f5e47606df53cc40e334e",\n      "6289ea0aecf3830e5e8d9925959bb6e804e324bb6db23c5701f7a538d12831f6",\n      "fdbf2d02603235fdff99f0ceb57705ead95041d62de386387f2922e5d9f6c502",\n      "ffa26139ca7f9d4849e118ff369fb3a387c8fefd8d15232b8353d4acf334324c"\n   ],\n   "isSolid":true,\n   "shouldPromote":false,\n   "shouldReattach":false\n}\n\nMessage data:\n{\n   "message": {\n      "networkId":"14379272398717627559",\n      "parentMessageIds": [\n         "27782707e4cbf84ca26b3db881bbf39b6429f9ee736a0cbe5a1c177d7a52b05d",\n         "61cdf92c64a3304bbbabaf9fbfb0ea7ef9624e1eedea68efbe08595ccdf853e1",\n         "a222d13e3ee51b56b0b0e38140a5f7f813b6d9e29b752d7e1e2424099455080d",\n         "ab6bca20091b58dcbb0906438a7e47bfb11621c4a37b8d118b565f7f138a40d6"\n      ],\n      "payload": {\n         "type":2,\n         "index":"484f524e4554205370616d6d6572",\n         "data":"42696e61727920697320746865206675747572652e0a436f756e743a2031333936393530390a54696d657374616d703a20323032312d30352d33315431353a33363a30392b30323a30300a54697073656c656374696f6e3a203337c2b573"\n         },\n      "nonce":"246736"\n   },\n   "messageId":"30d87fa9917602e5685638e37802bde11b260bd2379f6c850704d7babd365b44"\n}\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Client.getMessage().metadata()")," provides information on how the given message fits to network structures, such as\n",(0,s.kt)("inlineCode",{parentName:"li"},"ledger_inclusion_state"),", etc."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Client.getMessage().data()")," provides all the data that relates to the given message and its payload(s).")))}f.isMDXComponent=!0;const h={toc:[]};function _(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},h,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Once a ",(0,s.kt)("a",{parentName:"p",href:"/iota.rs/explanations/messages_payloads_and_transactions"},"message")," is broadcast, you can use the\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/python/api_reference#get_message_datamessage_id-message"},(0,s.kt)("inlineCode",{parentName:"a"},"Client.get_message_data(message_id: str)"))," and\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/python/api_reference#get_message_metadatamessage_id-messagemetadataresponse"},(0,s.kt)("inlineCode",{parentName:"a"},"Client.get_message_metadata()")),"\nfunctions used to get all the information about the message from the Tangle."),(0,s.kt)(o.Z,{className:"language-python",mdxType:"CodeBlock"},'import iota_client\nclient = iota_client.Client()\n\nmessage = client.get_message_data("e2daa4c6b012b615becd6c12189b2c9e701ba0d53b31a15425b21af5105fc086")\nmessage_meta = client.get_message_metadata("e2daa4c6b012b615becd6c12189b2c9e701ba0d53b31a15425b21af5105fc086")\n\nprint("Message meta data:")\nprint(message_meta)\nprint("Message data:")\nprint(message)'),(0,s.kt)("p",null,"Output example:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'Message meta data:\n{\n   "message_id":"e2daa4c6b012b615becd6c12189b2c9e701ba0d53b31a15425b21af5105fc086",\n   "parent_message_ids":[\n      "0e2705ce50fec88f896663d4b7d562e74cbcfdd951ac482b1f03cfa5f27396d7",\n      "0f5a0b2041766127c3f3bff2dd653b450b72e364765fcc805a40423c59ed01f9",\n      "20635b30aee437575d7e6abdf6629eec80543bee30848b0abdda2200fc11a977",\n      "da97cd6cfcbb854b8fd3f064c8459c5c9eae80dbd5ef594a3e1a26dcb8fc078c"\n   ],\n   "is_solid":true,\n   "referenced_by_milestone_index":284866,\n   "milestone_index":"None",\n   "ledger_inclusion_state":{\n      "state":"NoTransaction"\n   },\n   "conflict_reason":"None",\n   "should_promote":"None",\n   "should_reattach":"None"\n}\n\nMessage data:\n{\n   "message_id":"e2daa4c6b012b615becd6c12189b2c9e701ba0d53b31a15425b21af5105fc086",\n   "network_id":7712883261355838377,\n   "parents":[\n      "0e2705ce50fec88f896663d4b7d562e74cbcfdd951ac482b1f03cfa5f27396d7",\n      "0f5a0b2041766127c3f3bff2dd653b450b72e364765fcc805a40423c59ed01f9",\n      "20635b30aee437575d7e6abdf6629eec80543bee30848b0abdda2200fc11a977",\n      "da97cd6cfcbb854b8fd3f064c8459c5c9eae80dbd5ef594a3e1a26dcb8fc078c"\n   ],\n   "payload":"None",\n   "nonce":2305843009213869242\n}\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Client.get_message_metadata")," provides information on how the given message fits to network structures such as\n",(0,s.kt)("inlineCode",{parentName:"li"},"ledger_inclusion_state"),"."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Client.get_message_data")," provides all the data that relates to the message and its payload(s)")))}_.isMDXComponent=!0;const k={toc:[]};function y(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},k,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Once a ",(0,s.kt)("a",{parentName:"p",href:"/iota.rs/explanations/messages_payloads_and_transactions"},"message")," is broadcast, you can use the\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/iota-client/latest/iota_client/node/struct.GetMessageBuilder.html"},(0,s.kt)("inlineCode",{parentName:"a"},"GetMessageBuilder"))," helper class\nthat you can instantiate using the\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/iota-client/latest/iota_client/client/struct.Client.html#method.get_message"},(0,s.kt)("inlineCode",{parentName:"a"},"Client.get_message()")),"\nfunction to retrieve it from the network. The ",(0,s.kt)("inlineCode",{parentName:"p"},"GetMessageBuilder")," provides helper functions related to the message, such\nas\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/iota-client/latest/iota_client/node/struct.GetMessageBuilder.html#method.data"},(0,s.kt)("inlineCode",{parentName:"a"},"Client.get_message().data(message_id: &MessageId)")),"\nand\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/iota-client/latest/iota_client/node/struct.GetMessageBuilder.html#method.metadata"},(0,s.kt)("inlineCode",{parentName:"a"},"Client.get_message().metadata(message_id: &MessageId)")),":"),(0,s.kt)(o.Z,{className:"language-javascript",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example 07_get_message_metadata --release\n\nuse iota_client::{Client, Result};\n\n/// In this example we will send a message and get the metadata for it\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let iota = Client::builder()\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")?\n        .finish()\n        .await?;\n\n    let message = iota.message().finish().await?;\n\n    let metadata = iota.get_message().metadata(&message.id().0).await?;\n    println!("Message metadata: {:?}", metadata);\n    Ok(())\n}\n'),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Output example"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'Message meta data:\n{\n   "messageId":"e52b631bc7500366b90c6e11eb7fd6abaa7527f9bb5b4b512b0b9112bb9e7be8",\n   "parentMessageIds": [\n      "26d72339ed262c1ec29d6c91de6be26d067b3327191f5e47606df53cc40e334e",\n      "6289ea0aecf3830e5e8d9925959bb6e804e324bb6db23c5701f7a538d12831f6",\n      "fdbf2d02603235fdff99f0ceb57705ead95041d62de386387f2922e5d9f6c502",\n      "ffa26139ca7f9d4849e118ff369fb3a387c8fefd8d15232b8353d4acf334324c"\n   ],\n   "isSolid":true,\n   "shouldPromote":false,\n   "shouldReattach":false\n}\n\nMessage data:\n{\n   "message": {\n      "networkId":"14379272398717627559",\n      "parentMessageIds": [\n         "27782707e4cbf84ca26b3db881bbf39b6429f9ee736a0cbe5a1c177d7a52b05d",\n         "61cdf92c64a3304bbbabaf9fbfb0ea7ef9624e1eedea68efbe08595ccdf853e1",\n         "a222d13e3ee51b56b0b0e38140a5f7f813b6d9e29b752d7e1e2424099455080d",\n         "ab6bca20091b58dcbb0906438a7e47bfb11621c4a37b8d118b565f7f138a40d6"\n      ],\n      "payload": {\n         "type":2,\n         "index":"484f524e4554205370616d6d6572",\n         "data":"42696e61727920697320746865206675747572652e0a436f756e743a2031333936393530390a54696d657374616d703a20323032312d30352d33315431353a33363a30392b30323a30300a54697073656c656374696f6e3a203337c2b573"\n         },\n      "nonce":"246736"\n   },\n   "messageId":"30d87fa9917602e5685638e37802bde11b260bd2379f6c850704d7babd365b44"\n}\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Client.getMessage().metadata()")," provides information on how the given message fits to network structures, such as\n",(0,s.kt)("inlineCode",{parentName:"li"},"ledger_inclusion_state"),", etc."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Client.getMessage().data()")," provides all the data that relates to the given message and its payload(s).")))}y.isMDXComponent=!0;const N={toc:[]};function M(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Once a ",(0,s.kt)("a",{parentName:"p",href:"/iota.rs/explanations/messages_payloads_and_transactions#messages"},"message")," is broadcast, you can use the\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/wasm/api_reference#messagegetter"},(0,s.kt)("inlineCode",{parentName:"a"},"MessageGetter"))," helper class that you can instantiate using the\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/wasm/api_reference#clientgetmessage--codemessagegettercode"},(0,s.kt)("inlineCode",{parentName:"a"},"Client.getMessage()"))," function to retrieve\nit from the network. The ",(0,s.kt)("inlineCode",{parentName:"p"},"MessageGetter")," provides helper functions related to the message, such as\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/wasm/api_reference#messagegetterdatamessage_id--promiseany"},(0,s.kt)("inlineCode",{parentName:"a"},"Client.getMessage().data(message_id: String)")),"\nand\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/wasm/api_reference#messagegettermetadatamessage_id--promiseany"},(0,s.kt)("inlineCode",{parentName:"a"},"Client.getMessage().metadata(message_id: String)")),":"),(0,s.kt)(o.Z,{className:"language-javascript",mdxType:"CodeBlock"},u),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Output example"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'Message meta data:\n{\n   "messageId":"e52b631bc7500366b90c6e11eb7fd6abaa7527f9bb5b4b512b0b9112bb9e7be8",\n   "parentMessageIds": [\n      "26d72339ed262c1ec29d6c91de6be26d067b3327191f5e47606df53cc40e334e",\n      "6289ea0aecf3830e5e8d9925959bb6e804e324bb6db23c5701f7a538d12831f6",\n      "fdbf2d02603235fdff99f0ceb57705ead95041d62de386387f2922e5d9f6c502",\n      "ffa26139ca7f9d4849e118ff369fb3a387c8fefd8d15232b8353d4acf334324c"\n   ],\n   "isSolid":true,\n   "shouldPromote":false,\n   "shouldReattach":false\n}\n\nMessage data:\n{\n   "message": {\n      "networkId":"14379272398717627559",\n      "parentMessageIds": [\n         "27782707e4cbf84ca26b3db881bbf39b6429f9ee736a0cbe5a1c177d7a52b05d",\n         "61cdf92c64a3304bbbabaf9fbfb0ea7ef9624e1eedea68efbe08595ccdf853e1",\n         "a222d13e3ee51b56b0b0e38140a5f7f813b6d9e29b752d7e1e2424099455080d",\n         "ab6bca20091b58dcbb0906438a7e47bfb11621c4a37b8d118b565f7f138a40d6"\n      ],\n      "payload": {\n         "type":2,\n         "index":"484f524e4554205370616d6d6572",\n         "data":"42696e61727920697320746865206675747572652e0a436f756e743a2031333936393530390a54696d657374616d703a20323032312d30352d33315431353a33363a30392b30323a30300a54697073656c656374696f6e3a203337c2b573"\n         },\n      "nonce":"246736"\n   },\n   "messageId":"30d87fa9917602e5685638e37802bde11b260bd2379f6c850704d7babd365b44"\n}\n')),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Client.getMessage().metadata()")," provides information on how the given message fits to network structures, such as\n",(0,s.kt)("inlineCode",{parentName:"li"},"ledger_inclusion_state"),", etc."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"Client.getMessage().data()")," provides all the data that relates to the given message and its payload(s).")))}M.isMDXComponent=!0;const v={title:"Get Message Data",description:"Once a message is broadcast, you can use the MessageFinder helper class that can be instantiated using the Client.getMessage() function to retrieve it from the network.",image:"/img/logo/iota_mark_light.png",keywords:["message data","messagefinder","client","message metadata","java","nodejs","python","wasm","rust"]},x=void 0,w={unversionedId:"examples/get_message_data",id:"examples/get_message_data",title:"Get Message Data",description:"Once a message is broadcast, you can use the MessageFinder helper class that can be instantiated using the Client.getMessage() function to retrieve it from the network.",source:"@site/iota/external/iota.rs/production/documentation/docs/examples/get_message_data.mdx",sourceDirName:"examples",slug:"/examples/get_message_data",permalink:"/iota.rs/examples/get_message_data",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/iota/external/iota.rs/production/documentation/docs/examples/get_message_data.mdx",tags:[],version:"current",frontMatter:{title:"Get Message Data",description:"Once a message is broadcast, you can use the MessageFinder helper class that can be instantiated using the Client.getMessage() function to retrieve it from the network.",image:"/img/logo/iota_mark_light.png",keywords:["message data","messagefinder","client","message metadata","java","nodejs","python","wasm","rust"]},sidebar:"docs",previous:{title:"Post a Message",permalink:"/iota.rs/examples/simple_message"},next:{title:"Send a Data Message",permalink:"/iota.rs/examples/data_message"}},C={},S=[],E={toc:S};function T(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,n.Z)({},E,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,s.kt)(d.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(g,{mdxType:"JavaGetMessageData"})),(0,s.kt)(d.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,s.kt)(f,{mdxType:"NodejsGetMessageData"})),(0,s.kt)(d.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(_,{mdxType:"PythonGetMessageData"})),(0,s.kt)(d.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,s.kt)(y,{mdxType:"RustGetMessageData"})),(0,s.kt)(d.Z,{value:"wasm",label:"Wasm",mdxType:"TabItem"},(0,s.kt)(M,{mdxType:"WasmGetMessageData"}))))}T.isMDXComponent=!0},18679:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(67294),s=t(86010);const i="tabItem_Ymn6";function d(e){let{children:a,hidden:t,className:d}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(i,d),hidden:t},a)}},34259:(e,a,t)=>{t.d(a,{Z:()=>g});var n=t(87462),s=t(67294),i=t(86010),d=t(51048),o=t(33609),r=t(1943),l=t(72957);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var a;const{lazy:t,block:d,defaultValue:m,values:g,groupId:u,className:b}=e,f=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=g??f.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),_=(0,o.l)(h,((e,a)=>e.value===a.value));if(_.length>0)throw new Error(`Docusaurus error: Duplicate values "${_.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)??f[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,r.U)(),[M,v]=(0,s.useState)(k),x=[],{blockElementScrollPositionUntilNextRender:w}=(0,l.o5)();if(null!=u){const e=y[u];null!=e&&e!==M&&h.some((a=>a.value===e))&&v(e)}const C=e=>{const a=e.currentTarget,t=x.indexOf(a),n=h[t].value;n!==M&&(w(a),v(n),null!=u&&N(u,String(n)))},S=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]??x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]??x[x.length-1];break}}null==(a=t)||a.focus()};return s.createElement("div",{className:(0,i.Z)("tabs-container",c)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},b)},h.map((e=>{let{value:a,label:t,attributes:d}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:M===a?0:-1,"aria-selected":M===a,key:a,ref:e=>x.push(e),onKeyDown:S,onFocus:C,onClick:C},d,{className:(0,i.Z)("tabs__item",p,null==d?void 0:d.className,{"tabs__item--active":M===a})}),t??a)}))),t?(0,s.cloneElement)(f.filter((e=>e.props.value===M))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},f.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==M})))))}function g(e){const a=(0,d.Z)();return s.createElement(m,(0,n.Z)({key:String(a)},e))}},49962:(e,a,t)=>{t.d(a,{Z:()=>n});const n='package org.iota.client.example;\n\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.Optional;\n\nimport org.iota.client.*;\nimport org.iota.client.local.*;\n\npublic class ExampleApp {\n\n    protected static final String MAINNET = "https://chrysalis-nodes.iota.cafe";\n\n    // Faucet: https://faucet.chrysalis-devnet.iota.cafe/\n    // Explorer: https://explorer.iota.org/devnet\n    protected static final String TESTNET = "https://api.lb-0.h.chrysalis-devnet.iota.cafe";\n    protected static final String TESTNET_LB = "api.lb-0.h.chrysalis-devnet.iota.cafe";\n\n    protected static final String NODE = TESTNET;\n\n    static {\n        NativeAPI.verifyLink();\n    }\n\n    public static void main(String[] args) {\n\n        try {\n            new ExampleApp();\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n\n    public ExampleApp() {\n\n    }\n\n    private static Client node() {\n        Client iota = Client.Builder().withNode(NODE) // Insert your node URL here\n                // .withNodeAuth("https://somechrysalisiotanode.com", "jwt_or_null",\n                // "name_or_null", "password_or_null") //\n                // Optional authentication\n                .finish();\n        return iota;\n    }\n\n    public static void nodeInfo() {\n        try {\n            Client iota = node();\n\n            System.out.println("Node healthy: " + iota.getHealth());\n\n            NodeInfoWrapper info = iota.getInfo();\n            System.out.println("Node url: " + info.url());\n            System.out.println("Node Info: " + info.nodeInfo());\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void generateSeed() {\n        try {\n            SecretKey secret_key = SecretKey.generate();\n            System.out.println(RustHex.encode(secret_key.toBytes()));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void generateAddresses() {\n        try {\n            Client iota = node();\n\n            String seed = RustHex.encode("NONSECURE_USE_OF_DEVELOPMENT_SEED_1");\n            String[] addresses = GetAddressesBuilder.from(seed).withClient(iota).withRange(0, 10).finish();\n            System.out.println(Arrays.toString(addresses));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getBalance() {\n        try {\n            Client iota = node();\n\n            String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n\n            long seed_balance = iota.getBalance(seed).finish();\n            System.out.println("Account balance: " + seed_balance);\n\n            String address = "atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r";\n\n            BalanceAddressResponse response = iota.getAddress().balance(address);\n            System.out.println("The balance of " + address + " is " + response.balance());\n\n            UtxoInput[] outputs = iota.getAddress().outputs(address, new OutputsOptions());\n            System.out.println("The outputs of address " + address + " are: " + Arrays.toString(outputs));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getOutputs() {\n        try {\n            Client iota = node();\n\n            String address = "atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r";\n\n            UtxoInput[] outputs = iota.getAddress().outputs(address, new OutputsOptions());\n            System.out.println("The outputs of address " + address + " are: " + Arrays.toString(outputs));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void simpleMessage() {\n        try {\n            Client iota = node();\n            Message message = iota.message().finish();\n\n            System.out.println(\n                    "Empty message sent: https://explorer.iota.org/mainnet/message/" + message.id().toString());\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getMessageMetadata() {\n        try {\n            Client iota = node();\n            Message message = iota.message().finish();\n\n            MessageMetadata metadata = iota.getMessage().metadata(message.id());\n\n            System.out.println("Message metadata: " + metadata);\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getDataMessage() {\n        Client iota = node();\n\n        Message message = iota.message().withIndexString("Hello").withDataString("Tangle").finish();\n\n        System.out.println("Message sent https://explorer.iota.org/devnet/message/" + message.id());\n\n        MessageId[] fetched_message_ids = iota.getMessage().indexString("Hello");\n        System.out.println("Messages with Hello index: " + Arrays.toString(fetched_message_ids));\n    }\n\n    public static void transaction() {\n        Client iota = node();\n\n        String seed_1 = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n\n        Message message = iota\n            .message()\n            .withSeed(seed_1)\n            // Insert the output address and amount to spent. The amount cannot be zero.\n            .withOutput(\n                // We generate an address from our seed so that we send the funds to ourselves\n                        iota.getAddresses(seed_1).withRange(0, 1).finish()[0], 1000000\n            ).finish();\n\n        System.out.println("Transaction sent: https://explorer.iota.org/devnet/message/" +  message.id());\n    }\n\n    public static void mqtt() {\n        Client iota = node();\n\n        MqttListener listener = new MqttListener() {\n            @Override\n            public void onEvent(TopicEvent event) {\n                System.out.println(event);\n            }\n        };\n\n        // TODO: Make listeners with the Sync trait\n        // iota.subscriber().withTopic(Topic.from("messages")).subscribe(listener);\n    }\n\n    public static void consolidate() {\n        Client iota = node();\n\n        String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n\n        // Here all funds will be send to the address with the lowest index in the range\n        String address = Util.consolidateFunds(iota, seed, 0, 0, 150);\n\n        System.out.println("Funds consolidated to" + address);\n    }\n\n    public static void createMaxDust(){\n        Client iota = node();\n        String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n        String seed_2 = "NONSECURE_USE_OF_DEVELOPMENT_SEED_2";\n\n        String[] new_addresses = iota.getAddresses(seed_2).withRange(0, 1).finish();\n\n        Message dustAllowanceMessage = iota\n            .message()\n            .withSeed(seed)\n            .withDustAllowanceOutput(new_addresses[0], 10_000_000)\n            .finish();\n\n        MessageWrap[] msgs = iota.retryUntilIncluded(dustAllowanceMessage.id(), -1, -1);\n\n        // Split funds to own addresses\n        String[] addresses = iota\n            .getAddresses(seed)\n            // We start from index 1 so we can send remaining balance to the address with index 0\n            .withRange(1, 101)\n            .finish();\n\n        ClientMessageBuilder message_builder = iota.message().withSeed(seed);\n        for (String address : addresses) {\n            // Make sure to re-set the builder as the instance is a clone of the old one due to JNI limits\n            message_builder = message_builder.withOutput(address, 1_000_001);\n        }\n        Message message = message_builder.finish();\n\n        System.out.println(\n            "First transaction sent: https://explorer.iota.org/devnet/message/" + message.id()\n        );\n\n        msgs = iota.retryUntilIncluded(message.id(), -1, -1);\n\n        // At this point we have 100 Mi on 100 addresses and we will just send it to the final address\n        // We use the outputs directly so we don\'t double spend them\n        \n        List<UtxoInput> initial_outputs = new ArrayList<>();\n        Optional<MessagePayload> payload = message.payload();\n        if (payload.isPresent() && payload.get().payloadType().equals(MessagePayloadType.TRANSACTION)) {\n            TransactionPayload tx = payload.get().asTransaction();\n            RegularEssence essence = tx.essence().asRegular();\n            Output[] outputs = essence.outputs();\n            for (int index = 0; index < outputs.length; index++) {\n                Output output = outputs[index];\n                if (output.asSignatureLockedSingleOutput().amount() == 1_000_001) {\n                    initial_outputs.add(UtxoInput.from(tx.id(), index));\n                } \n            }\n        }\n\n        String[] first_address_old_seed = iota.getAddresses(seed).withRange(0, 1).finish();\n        List<MessageId> sent_messages = new ArrayList<>();\n        for (UtxoInput input : initial_outputs) {\n            MessageId message_id = iota\n                .message()\n                    .withSeed(seed).withInput(input).withInputRange(1, 101).withOutput(new_addresses[0], 1)\n                // send remaining iotas back\n                    .withOutput(first_address_old_seed[0], 1_000_000)\n                .finish()\n                    .id();\n            System.out.printf("Transaction %i sent: https://explorer.iota.org/devnet/message/%s" + input.index(),\n                    message_id\n            );\n            sent_messages.add(message_id);\n        }\n        // only check last message, if this gets confirmed all other messages should also be confirmed\n        msgs = iota.retryUntilIncluded(sent_messages.get(sent_messages.size() - 1), -1, -1);\n        // Send all funds back to first address\n        long total_balance = iota.getBalance(seed).finish();\n\n        System.out.println("Total balance: " + total_balance);\n\n        message = iota\n            .message()\n            .withSeed(seed)\n            .withOutput(first_address_old_seed[0], total_balance)\n            .finish();\n\n        System.out.println("Final tx sent: https://explorer.iota.org/devnet/message/" + message.id());\n\n        msgs = iota.retryUntilIncluded(message.id(), -1, -1);\n    }\n\n    public static void customPayload() {\n        // Create a client instance\n        Client iota = node();\n\n        IndexationPayload indexation_payload = IndexationPayload.fromStrings("Your Index", "Your Data");\n\n        Message message = iota.message().finishIndex(indexation_payload);\n\n        System.out.printf("Message ID: %s", message.id());\n    }\n\n    public static void offlineExample() {\n        String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n        String toAddress = "atoi1qruzprxum2934lr3p77t96pzlecxv8pjzvtjrzdcgh2f5exa22n6gek0qdq";\n        long amount = 1_000_000;\n\n        Offline offlineExample = new Offline(NODE, seed);\n        String[] inputAddresses = offlineExample.generateAddresses();\n        String preparedData = offlineExample.prepareTransaction(inputAddresses, toAddress, amount);\n        System.out.println("Prepared data: " + preparedData);\n        String signedData = offlineExample.signTransaction(preparedData);\n        System.out.println("Signed data: " + signedData);\n\n        Message message = offlineExample.sendMessage(signedData);\n\n        System.out.printf("Message ID: %s", message.id());\n    }\n}\n'}}]);