"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[36898],{47228:(e,t,n)=>{n.d(t,{ZP:()=>o});var a=n(87462),s=(n(67294),n(3905));const i={toc:[]};function o(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Though it is possible to send transactions with iota.rs, we strongly recommend that you use the official\n",(0,s.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet.rs"))," library together with the\n",(0,s.kt)("a",{parentName:"p",href:"https://wiki.iota.org/stronghold.rs/welcome"},(0,s.kt)("inlineCode",{parentName:"a"},"stronghold.rs"))," enclave for value-based transfers. This combination\nincorporates the best security practices while dealing with seeds, related addresses, and ",(0,s.kt)("inlineCode",{parentName:"p"},"UTXO"),".")))}o.isMDXComponent=!0},83254:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>C,contentTitle:()=>k,default:()=>D,frontMatter:()=>T,metadata:()=>N,toc:()=>M});var a=n(87462),s=(n(67294),n(3905)),i=n(34259),o=n(18679),r=n(47228);const d={toc:[]};function l(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Dust Protection",type:"note"},(0,s.kt)("p",{parentName:"admonition"},"Due to the ",(0,s.kt)("a",{parentName:"p",href:"https://wiki.iota.org/chrysalis-docs/faq#what-is-dust-protection-and-how-does-it-work"},"dust protection"),"\nmechanism implemented in the network protocol, microtransactions below 1Mi of IOTA tokens can only be sent to another\naddress if there is already at least 1Mi on that address"),(0,s.kt)("p",{parentName:"admonition"},"That's why the code in the example sent 1Mi, to comply with the protection.")))}l.isMDXComponent=!0;var u=n(69319),p=n(49962);const c=p.Z.indexOf("public static void transaction"),m=p.Z.indexOf("public static void mqtt"),g=p.Z.substring(c,m),h={toc:[]};function f(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Sending value-based messages is a very straightforward process if you use the\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/java/api_reference#clientmessagebuilder"},(0,s.kt)("inlineCode",{parentName:"a"},"ClientMessageBuilder")," ")," helper class. You will only need to\nprovide a valid seed by chaining a call to\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/java/api_reference#withseedseed-clientmessagebuilder"},(0,s.kt)("inlineCode",{parentName:"a"},".withSeed(seed: String)")),", and output addresses\nand amount by chaining a call to\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/java/api_reference#withoutputaddress-amount-clientmessagebuilder"},(0,s.kt)("inlineCode",{parentName:"a"},"withOutput(address: String, amount: long):")),".\nThe method will find valid output(s) that can be used to fund the given amount(s) and the unspent amount will be sent to\nthe same address."),(0,s.kt)(u.Z,{className:"language-java",mdxType:"CodeBlock"},g))}f.isMDXComponent=!0;const y={toc:[]};function _(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Sending value-based messages is a very straightforward process if you use the\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/nodejs/api_reference#messagesender"},(0,s.kt)("inlineCode",{parentName:"a"},"MessageSender"))," helper class. You will only need to provide a valid\nseed by chaining a call to ",(0,s.kt)("a",{parentName:"p",href:"./../libraries/nodejs/api_reference#seedseed-messagesender"},(0,s.kt)("inlineCode",{parentName:"a"},".seed(seed: string)")),", and an\noutput address and amount by chaining a call to\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/nodejs/api_reference#outputaddress-amount-messagesender"},(0,s.kt)("inlineCode",{parentName:"a"},".output(address: string, amount: string)")),". The\nmethod will find valid output(s) that can be used to fund the given amount(s) and the unspent amount will be sent to the\nsame address."),(0,s.kt)(u.Z,{className:"language-javascript",mdxType:"CodeBlock"},"async function run() {\n    const {\n        ClientBuilder\n    } = require('@iota/client');\n\n    // Get the seed from environment variable\n    const IOTA_SEED_SECRET = process.env.IOTA_SEED_SECRET;\n\n    // client will connect to testnet by default\n    const client = new ClientBuilder().build();\n\n    const message = await client.message()\n        .seed(IOTA_SEED_SECRET)\n        .output('atoi1qqydc70mpjdvl8l2wyseaseqwzhmedzzxrn4l9g2c8wdcsmhldz0ulwjxpz', 1000000)\n        .submit();\n\n    console.log(message);\n}\n\nrun()\n"))}_.isMDXComponent=!0;const v={toc:[]};function w(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Sending value-based messages is a very straightforward process. You will only need to provide a valid ",(0,s.kt)("inlineCode",{parentName:"p"},"seed"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"outputs"),"\n(addresses and amounts) parameters to the\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/python/api_reference#messageseed-optional-account_index-optional-initial_address_index-optional-inputs-optional-input_range_begin-optional-input_range_end-optional-outputs-optional-dust_allowance_outputs-optional-index-optional-index_raw-optional-data-optional-data_str-optional-parents-optional-message"},"Client.message()"),"\nfunction. The method will find valid output(s) that can be used to fund the given amount(s) and the remaining amount will\nbe sent back the input address."),(0,s.kt)(u.Z,{className:"language-python",mdxType:"CodeBlock"},"import os\nimport iota_client\n\n# Get the seed from environment variable\nIOTA_SEED_SECRET = os.getenv('IOTA_SEED_SECRET')\nif not IOTA_SEED_SECRET:\n    raise Exception(\"Please define environment variable called `IOTA_SEED_SECRET`\")\n\nclient = iota_client.Client()\n\nmessage = client.message(\n    seed=IOTA_SEED_SECRET,\n    outputs=[\n        {\n            'address': 'atoi1qqydc70mpjdvl8l2wyseaseqwzhmedzzxrn4l9g2c8wdcsmhldz0ulwjxpz',\n            'amount': 1_000_000\n        }\n    ]\n)\nprint(message)"))}w.isMDXComponent=!0;const b={toc:[]};function E(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Sending value-based messages is a very straightforward process if you use the\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/iota-client/latest/iota_client/api/struct.ClientMessageBuilder.html"},(0,s.kt)("inlineCode",{parentName:"a"},"ClientMessageBuilder"))," helper\nclass. You will only need to provide a valid seed by chaining a call to\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/iota-client/latest/iota_client/api/struct.ClientMessageBuilder.html#method.with_seed"},(0,s.kt)("inlineCode",{parentName:"a"},".with_seed(seed: &'a Seed)")),", and\noutput address and amount by chaining a call to\n",(0,s.kt)("a",{parentName:"p",href:"https://docs.rs/iota-client/latest/iota_client/api/struct.ClientMessageBuilder.html#method.with_output"},(0,s.kt)("inlineCode",{parentName:"a"},".with_output(address: &str, amount: u64)")),".\nThe method will find valid output(s) that can be used to fund the given amount(s) and the unspent amount will be sent to\nthe same address."),(0,s.kt)(u.Z,{className:"language-javascript",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example 09_transaction --release\n\nuse iota_client::{Client, Result, Seed};\nextern crate dotenv;\nuse dotenv::dotenv;\nuse std::env;\n\n/// In this example we will send a transaction\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let iota = Client::builder()\n        .with_node("https://api.lb-0.h.chrysalis-devnet.iota.cafe")?\n        .finish()\n        .await?;\n\n    // This example uses dotenv, which is not safe for use in production\n    // Configure your own seed in ".env". Since the output amount cannot be zero, the seed must contain non-zero balance\n    dotenv().ok();\n    let seed_1 = Seed::from_bytes(&hex::decode(env::var("NONSECURE_USE_OF_DEVELOPMENT_SEED_1").unwrap())?);\n\n    let message = iota\n        .message()\n        .with_seed(&seed_1)\n        // Insert the output address and amount to spent. The amount cannot be zero.\n        .with_output(\n            // We generate an address from our seed so that we send the funds to ourselves\n            &iota.get_addresses(&seed_1).with_range(1..2).finish().await?[0],\n            1_000_000,\n        )?\n        .finish()\n        .await?;\n\n    println!(\n        "Transaction sent: https://explorer.iota.org/devnet/message/{}",\n        message.id().0\n    );\n    Ok(())\n}\n'))}E.isMDXComponent=!0;const S={toc:[]};function x(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},S,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Sending value-based messages is a very straightforward process if you use the\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/wasm/api_reference#messagebuilder"},(0,s.kt)("inlineCode",{parentName:"a"},"MessageBuilder"))," helper class. You will only need to provide a valid seed by chaining a call to\n",(0,s.kt)("a",{parentName:"p",href:"./../libraries/wasm/api_reference#messagebuilderseedseed--codemessagebuildercode"},(0,s.kt)("inlineCode",{parentName:"a"},".seed(seed: string)"))," and\nan output address and amount by chaining a call to ",(0,s.kt)("a",{parentName:"p",href:"./../libraries/wasm/api_reference#messagebuilderoutputaddress-amount--codemessagebuildercode"},(0,s.kt)("inlineCode",{parentName:"a"},".output(address: string, amount: BigInt)")),". The method will find valid\noutput(s) that can be used to fund the given amount(s) and the unspent amount will be sent to the same address."),(0,s.kt)(u.Z,{className:"language-javascript",mdxType:"CodeBlock"},"async function run() {\n    const { ClientBuilder } = require('../node')\n\n    // Get the seed from environment variable\n    const IOTA_SEED_SECRET = process.env.IOTA_SEED_SECRET;\n\n    // client will connect to testnet by default\n    const client = await new ClientBuilder().build();\n\n    const message = await client.message()\n        .seed(IOTA_SEED_SECRET)\n        .output('atoi1qqydc70mpjdvl8l2wyseaseqwzhmedzzxrn4l9g2c8wdcsmhldz0ulwjxpz', BigInt(1000000))\n        .submit();\n\n    console.log(message);\n}\n\nrun()\n"))}x.isMDXComponent=!0;const T={title:"Send a Signed Transaction",description:"Sending value-based messages is a very straightforward process. You will only need to provide a valid seed, output addresses, and amount.",image:"/img/logo/iota_mark_light.png",keywords:["how to","value","utxo","ouputs","core payload type","unspent transactions output","java","nodejs","python","wasm","rust"]},k=void 0,N={unversionedId:"examples/transaction",id:"examples/transaction",title:"Send a Signed Transaction",description:"Sending value-based messages is a very straightforward process. You will only need to provide a valid seed, output addresses, and amount.",source:"@site/iota/external/iota.rs/production/documentation/docs/examples/transaction.mdx",sourceDirName:"examples",slug:"/examples/transaction",permalink:"/iota.rs/examples/transaction",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/iota/external/iota.rs/production/documentation/docs/examples/transaction.mdx",tags:[],version:"current",frontMatter:{title:"Send a Signed Transaction",description:"Sending value-based messages is a very straightforward process. You will only need to provide a valid seed, output addresses, and amount.",image:"/img/logo/iota_mark_light.png",keywords:["how to","value","utxo","ouputs","core payload type","unspent transactions output","java","nodejs","python","wasm","rust"]},sidebar:"docs",previous:{title:"Send a Data Message",permalink:"/iota.rs/examples/data_message"},next:{title:"Listen to MQTT",permalink:"/iota.rs/examples/mqtt"}},C={},M=[],O={toc:M};function D(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},O,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"A ",(0,s.kt)("a",{parentName:"p",href:"/iota.rs/explanations/messages_payloads_and_transactions#signedtransaction"},"SignedTransaction")," is a core payload type\nthat is used to send value-based messages as\n",(0,s.kt)("a",{parentName:"p",href:"./../explanations/messages_payloads_and_transactions#unspent-transaction-output-utxo"},"Unspent Transaction Output (UTXO)"),'.\nThis core payload changes the ledger state as it spends "old" outputs and replaces them with new outputs.'),(0,s.kt)(r.ZP,{mdxType:"WalletRecommendation"}),(0,s.kt)(i.Z,{groupId:"language",mdxType:"Tabs"},(0,s.kt)(o.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(f,{mdxType:"JavaTransaction"})),(0,s.kt)(o.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,s.kt)(_,{mdxType:"NodejsGetTransaction"})),(0,s.kt)(o.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(w,{mdxType:"PythonGetTransaction"})),(0,s.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,s.kt)(E,{mdxType:"RustGetTransaction"})),(0,s.kt)(o.Z,{value:"wasm",label:"Wasm",mdxType:"TabItem"},(0,s.kt)(x,{mdxType:"WasmGetTransaction"}))),(0,s.kt)(l,{mdxType:"DustProtection"}))}D.isMDXComponent=!0},18679:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),s=n(86010);const i="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(i,o),hidden:n},t)}},34259:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),s=n(67294),i=n(86010),o=n(51048),r=n(33609),d=n(1943),l=n(72957);const u="tabList__CuJ",p="tabItem_LNqP";function c(e){var t;const{lazy:n,block:o,defaultValue:c,values:m,groupId:g,className:h}=e,f=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),y=m??f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),_=(0,r.l)(y,((e,t)=>e.value===t.value));if(_.length>0)throw new Error(`Docusaurus error: Duplicate values "${_.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===c?c:c??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${y.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:b}=(0,d.U)(),[E,S]=(0,s.useState)(v),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,l.o5)();if(null!=g){const e=w[g];null!=e&&e!==E&&y.some((t=>t.value===e))&&S(e)}const k=e=>{const t=e.currentTarget,n=x.indexOf(t),a=y[n].value;a!==E&&(T(t),S(a),null!=g&&b(g,String(a)))},N=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;n=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;n=x[t]??x[x.length-1];break}}null==(t=n)||t.focus()};return s.createElement("div",{className:(0,i.Z)("tabs-container",u)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":o},h)},y.map((e=>{let{value:t,label:n,attributes:o}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>x.push(e),onKeyDown:N,onFocus:k,onClick:k},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":E===t})}),n??t)}))),n?(0,s.cloneElement)(f.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,o.Z)();return s.createElement(c,(0,a.Z)({key:String(t)},e))}},49962:(e,t,n)=>{n.d(t,{Z:()=>a});const a='package org.iota.client.example;\n\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.Optional;\n\nimport org.iota.client.*;\nimport org.iota.client.local.*;\n\npublic class ExampleApp {\n\n    protected static final String MAINNET = "https://chrysalis-nodes.iota.cafe";\n\n    // Faucet: https://faucet.chrysalis-devnet.iota.cafe/\n    // Explorer: https://explorer.iota.org/devnet\n    protected static final String TESTNET = "https://api.lb-0.h.chrysalis-devnet.iota.cafe";\n    protected static final String TESTNET_LB = "api.lb-0.h.chrysalis-devnet.iota.cafe";\n\n    protected static final String NODE = TESTNET;\n\n    static {\n        NativeAPI.verifyLink();\n    }\n\n    public static void main(String[] args) {\n\n        try {\n            new ExampleApp();\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n\n    public ExampleApp() {\n\n    }\n\n    private static Client node() {\n        Client iota = Client.Builder().withNode(NODE) // Insert your node URL here\n                // .withNodeAuth("https://somechrysalisiotanode.com", "jwt_or_null",\n                // "name_or_null", "password_or_null") //\n                // Optional authentication\n                .finish();\n        return iota;\n    }\n\n    public static void nodeInfo() {\n        try {\n            Client iota = node();\n\n            System.out.println("Node healthy: " + iota.getHealth());\n\n            NodeInfoWrapper info = iota.getInfo();\n            System.out.println("Node url: " + info.url());\n            System.out.println("Node Info: " + info.nodeInfo());\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void generateSeed() {\n        try {\n            SecretKey secret_key = SecretKey.generate();\n            System.out.println(RustHex.encode(secret_key.toBytes()));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void generateAddresses() {\n        try {\n            Client iota = node();\n\n            String seed = RustHex.encode("NONSECURE_USE_OF_DEVELOPMENT_SEED_1");\n            String[] addresses = GetAddressesBuilder.from(seed).withClient(iota).withRange(0, 10).finish();\n            System.out.println(Arrays.toString(addresses));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getBalance() {\n        try {\n            Client iota = node();\n\n            String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n\n            long seed_balance = iota.getBalance(seed).finish();\n            System.out.println("Account balance: " + seed_balance);\n\n            String address = "atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r";\n\n            BalanceAddressResponse response = iota.getAddress().balance(address);\n            System.out.println("The balance of " + address + " is " + response.balance());\n\n            UtxoInput[] outputs = iota.getAddress().outputs(address, new OutputsOptions());\n            System.out.println("The outputs of address " + address + " are: " + Arrays.toString(outputs));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getOutputs() {\n        try {\n            Client iota = node();\n\n            String address = "atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r";\n\n            UtxoInput[] outputs = iota.getAddress().outputs(address, new OutputsOptions());\n            System.out.println("The outputs of address " + address + " are: " + Arrays.toString(outputs));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void simpleMessage() {\n        try {\n            Client iota = node();\n            Message message = iota.message().finish();\n\n            System.out.println(\n                    "Empty message sent: https://explorer.iota.org/mainnet/message/" + message.id().toString());\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getMessageMetadata() {\n        try {\n            Client iota = node();\n            Message message = iota.message().finish();\n\n            MessageMetadata metadata = iota.getMessage().metadata(message.id());\n\n            System.out.println("Message metadata: " + metadata);\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getDataMessage() {\n        Client iota = node();\n\n        Message message = iota.message().withIndexString("Hello").withDataString("Tangle").finish();\n\n        System.out.println("Message sent https://explorer.iota.org/devnet/message/" + message.id());\n\n        MessageId[] fetched_message_ids = iota.getMessage().indexString("Hello");\n        System.out.println("Messages with Hello index: " + Arrays.toString(fetched_message_ids));\n    }\n\n    public static void transaction() {\n        Client iota = node();\n\n        String seed_1 = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n\n        Message message = iota\n            .message()\n            .withSeed(seed_1)\n            // Insert the output address and amount to spent. The amount cannot be zero.\n            .withOutput(\n                // We generate an address from our seed so that we send the funds to ourselves\n                        iota.getAddresses(seed_1).withRange(0, 1).finish()[0], 1000000\n            ).finish();\n\n        System.out.println("Transaction sent: https://explorer.iota.org/devnet/message/" +  message.id());\n    }\n\n    public static void mqtt() {\n        Client iota = node();\n\n        MqttListener listener = new MqttListener() {\n            @Override\n            public void onEvent(TopicEvent event) {\n                System.out.println(event);\n            }\n        };\n\n        // TODO: Make listeners with the Sync trait\n        // iota.subscriber().withTopic(Topic.from("messages")).subscribe(listener);\n    }\n\n    public static void consolidate() {\n        Client iota = node();\n\n        String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n\n        // Here all funds will be send to the address with the lowest index in the range\n        String address = Util.consolidateFunds(iota, seed, 0, 0, 150);\n\n        System.out.println("Funds consolidated to" + address);\n    }\n\n    public static void createMaxDust(){\n        Client iota = node();\n        String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n        String seed_2 = "NONSECURE_USE_OF_DEVELOPMENT_SEED_2";\n\n        String[] new_addresses = iota.getAddresses(seed_2).withRange(0, 1).finish();\n\n        Message dustAllowanceMessage = iota\n            .message()\n            .withSeed(seed)\n            .withDustAllowanceOutput(new_addresses[0], 10_000_000)\n            .finish();\n\n        MessageWrap[] msgs = iota.retryUntilIncluded(dustAllowanceMessage.id(), -1, -1);\n\n        // Split funds to own addresses\n        String[] addresses = iota\n            .getAddresses(seed)\n            // We start from index 1 so we can send remaining balance to the address with index 0\n            .withRange(1, 101)\n            .finish();\n\n        ClientMessageBuilder message_builder = iota.message().withSeed(seed);\n        for (String address : addresses) {\n            // Make sure to re-set the builder as the instance is a clone of the old one due to JNI limits\n            message_builder = message_builder.withOutput(address, 1_000_001);\n        }\n        Message message = message_builder.finish();\n\n        System.out.println(\n            "First transaction sent: https://explorer.iota.org/devnet/message/" + message.id()\n        );\n\n        msgs = iota.retryUntilIncluded(message.id(), -1, -1);\n\n        // At this point we have 100 Mi on 100 addresses and we will just send it to the final address\n        // We use the outputs directly so we don\'t double spend them\n        \n        List<UtxoInput> initial_outputs = new ArrayList<>();\n        Optional<MessagePayload> payload = message.payload();\n        if (payload.isPresent() && payload.get().payloadType().equals(MessagePayloadType.TRANSACTION)) {\n            TransactionPayload tx = payload.get().asTransaction();\n            RegularEssence essence = tx.essence().asRegular();\n            Output[] outputs = essence.outputs();\n            for (int index = 0; index < outputs.length; index++) {\n                Output output = outputs[index];\n                if (output.asSignatureLockedSingleOutput().amount() == 1_000_001) {\n                    initial_outputs.add(UtxoInput.from(tx.id(), index));\n                } \n            }\n        }\n\n        String[] first_address_old_seed = iota.getAddresses(seed).withRange(0, 1).finish();\n        List<MessageId> sent_messages = new ArrayList<>();\n        for (UtxoInput input : initial_outputs) {\n            MessageId message_id = iota\n                .message()\n                    .withSeed(seed).withInput(input).withInputRange(1, 101).withOutput(new_addresses[0], 1)\n                // send remaining iotas back\n                    .withOutput(first_address_old_seed[0], 1_000_000)\n                .finish()\n                    .id();\n            System.out.printf("Transaction %i sent: https://explorer.iota.org/devnet/message/%s" + input.index(),\n                    message_id\n            );\n            sent_messages.add(message_id);\n        }\n        // only check last message, if this gets confirmed all other messages should also be confirmed\n        msgs = iota.retryUntilIncluded(sent_messages.get(sent_messages.size() - 1), -1, -1);\n        // Send all funds back to first address\n        long total_balance = iota.getBalance(seed).finish();\n\n        System.out.println("Total balance: " + total_balance);\n\n        message = iota\n            .message()\n            .withSeed(seed)\n            .withOutput(first_address_old_seed[0], total_balance)\n            .finish();\n\n        System.out.println("Final tx sent: https://explorer.iota.org/devnet/message/" + message.id());\n\n        msgs = iota.retryUntilIncluded(message.id(), -1, -1);\n    }\n\n    public static void customPayload() {\n        // Create a client instance\n        Client iota = node();\n\n        IndexationPayload indexation_payload = IndexationPayload.fromStrings("Your Index", "Your Data");\n\n        Message message = iota.message().finishIndex(indexation_payload);\n\n        System.out.printf("Message ID: %s", message.id());\n    }\n\n    public static void offlineExample() {\n        String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n        String toAddress = "atoi1qruzprxum2934lr3p77t96pzlecxv8pjzvtjrzdcgh2f5exa22n6gek0qdq";\n        long amount = 1_000_000;\n\n        Offline offlineExample = new Offline(NODE, seed);\n        String[] inputAddresses = offlineExample.generateAddresses();\n        String preparedData = offlineExample.prepareTransaction(inputAddresses, toAddress, amount);\n        System.out.println("Prepared data: " + preparedData);\n        String signedData = offlineExample.signTransaction(preparedData);\n        System.out.println("Signed data: " + signedData);\n\n        Message message = offlineExample.sendMessage(signedData);\n\n        System.out.printf("Message ID: %s", message.id());\n    }\n}\n'}}]);