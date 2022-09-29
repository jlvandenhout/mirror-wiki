"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[31534],{47228:(e,n,t)=>{t.d(n,{ZP:()=>i});var a=t(87462),s=(t(67294),t(3905));const o={toc:[]};function i(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Though it is possible to send transactions with iota.rs, we strongly recommend that you use the official\n",(0,s.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wallet.rs/welcome"},(0,s.kt)("inlineCode",{parentName:"a"},"wallet.rs"))," library together with the\n",(0,s.kt)("a",{parentName:"p",href:"https://wiki.iota.org/stronghold.rs/welcome"},(0,s.kt)("inlineCode",{parentName:"a"},"stronghold.rs"))," enclave for value-based transfers. This combination\nincorporates the best security practices while dealing with seeds, related addresses, and ",(0,s.kt)("inlineCode",{parentName:"p"},"UTXO"),".")))}i.isMDXComponent=!0},90812:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>O,contentTitle:()=>M,default:()=>I,frontMatter:()=>N,metadata:()=>C,toc:()=>A});var a=t(87462),s=(t(67294),t(3905)),o=t(34259),i=t(18679);const r={toc:[]};function d(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},r,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"EXPLANATION: Seeds",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"You can learn more about seeds in the ",(0,s.kt)("a",{parentName:"p",href:"/iota.rs/explanations/seeds"},"Explanations Section"),".")))}d.isMDXComponent=!0;const l={toc:[]};function p(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("admonition",{title:"Avoid Seed Generators",type:"info"},(0,s.kt)("p",{parentName:"admonition"},"Please note, it is highly recommended that you avoid using online seed generators. The seed is the only key to the given\naddresses. So, anyone who owns the seed also owns all the funds related to respective IOTA addresses.")))}p.isMDXComponent=!0;var c=t(47228),u=t(69319),m=t(49962);const g=m.Z.indexOf("public static void generateSeed() {"),h=m.Z.indexOf("public static void generateAddresses() {"),y=m.Z.substring(g,h),f={toc:[]};function S(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can generate a seed, for example, using the SHA256 algorithm on some random input generated by a cryptographically\nsecure pseudo-random generator, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"SecretKey.generate()"),":"),(0,s.kt)(u.Z,{className:"language-java",mdxType:"CodeBlock"},y))}S.isMDXComponent=!0;const b={toc:[]};function x(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},b,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can generate a seed, for example, using the SHA256 algorithm on some random input generated by a cryptographically\nsecure pseudo-random generator, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"crypto.randomBytes()"),":"),(0,s.kt)(u.Z,{className:"language-javascript",mdxType:"CodeBlock"},"function run() {\n    const crypto = require('crypto');\n    const seed = crypto.createHash('sha256').update(crypto.randomBytes(256)).digest('hex');\n    console.log(seed);\n\n    const { ClientBuilder } = require('@iota/client');\n    const client = new ClientBuilder().build();\n\n    const mnemonic = client.generateMnemonic();\n    console.log(mnemonic);\n\n    const hexEncodedSeed = client.mnemonicToHexSeed(mnemonic);\n    console.log(hexEncodedSeed);\n}\n\nrun()\n"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Output example"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"39bccf7b88a8017e6a96e6f31e34f138829c574dc6061523e84c5f2e53f5ca36\npass phrase weapon yellow diary scissors gift drive strategy antique scheme make surround aerobic mystery coral hope lock walnut become exclude only glove syrup\neff5c97c96ddab55d6fe78f914508750152eaab1b9692236bc79268895ecfd168e91eedd2489ed6c51fc44156b9a2e6c967e4edcfb649ff33d41581be4627347\n")))}x.isMDXComponent=!0;const _={toc:[]};function v(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can generate a seed, for example, using SHA256 algorithm on some random input generated by cryptographically secure\npseudo-random generator, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"os.urandom()"),":"),(0,s.kt)(u.Z,{className:"language-javascript",mdxType:"CodeBlock"},"import os\nimport hashlib\n\nrnd_seed = hashlib.sha256(os.urandom(256)).hexdigest()\nprint(rnd_seed)"))}v.isMDXComponent=!0;const E={toc:[]};function w(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},E,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can generate a seed, for example, using the SHA256 algorithm on some random input generated by a cryptographically\nsecure pseudo-random generator, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"SecretKey::generate()"),":"),(0,s.kt)(u.Z,{className:"language-javascript",mdxType:"CodeBlock"},'// Copyright 2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example 02_generate_seed --release\n\nuse iota_client::crypto::signatures::ed25519::SecretKey;\n\n/// In this example we will generate a seed\n\n#[tokio::main]\nasync fn main() {\n    let secret_key = SecretKey::generate().unwrap();\n    println!("{}", hex::encode(&secret_key.to_bytes()));\n}\n'))}w.isMDXComponent=!0;const k={toc:[]};function T(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can generate a seed, for example, using the SHA256 algorithm on some random input generated by a cryptographically\nsecure pseudo-random generator, such as ",(0,s.kt)("inlineCode",{parentName:"p"},"crypto.randomBytes()"),":"),(0,s.kt)(u.Z,{className:"language-javascript",mdxType:"CodeBlock"},"async function run() {\n    const crypto = require('crypto');\n    const seed = crypto.createHash('sha256').update(crypto.randomBytes(256)).digest('hex');\n    console.log(seed);\n\n    const { ClientBuilder } = require('../node')\n    const client = await new ClientBuilder().build();\n\n    const mnemonic = client.generateMnemonic();\n    console.log(mnemonic);\n\n    const hexEncodedSeed = client.mnemonicToHexSeed(mnemonic);\n    console.log(hexEncodedSeed);\n}\n\nrun()\n"))}T.isMDXComponent=!0;const N={title:"Generate a Seed",description:"You can generate a seed, for example, using the SHA256 algorithm on some random input generated by a cryptographically secure pseudo-random generator, such as crypto.randomBytes().",image:"/img/logo/iota_mark_light.png",keywords:["how to","seed","private key","address","online seed generator","ed25519 signature scheme","java","nodejs","python","rust","wasm"]},M=void 0,C={unversionedId:"examples/generate_seed",id:"examples/generate_seed",title:"Generate a Seed",description:"You can generate a seed, for example, using the SHA256 algorithm on some random input generated by a cryptographically secure pseudo-random generator, such as crypto.randomBytes().",source:"@site/iota/external/iota.rs/production/documentation/docs/examples/generate_seed.mdx",sourceDirName:"examples",slug:"/examples/generate_seed",permalink:"/iota.rs/examples/generate_seed",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/iota/external/iota.rs/production/documentation/docs/examples/generate_seed.mdx",tags:[],version:"current",frontMatter:{title:"Generate a Seed",description:"You can generate a seed, for example, using the SHA256 algorithm on some random input generated by a cryptographically secure pseudo-random generator, such as crypto.randomBytes().",image:"/img/logo/iota_mark_light.png",keywords:["how to","seed","private key","address","online seed generator","ed25519 signature scheme","java","nodejs","python","rust","wasm"]},sidebar:"docs",previous:{title:"Get Node Information",permalink:"/iota.rs/examples/get_info"},next:{title:"Generate Addresses",permalink:"/iota.rs/examples/generate_addresses"}},O={},A=[],D={toc:A};function I(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,a.Z)({},D,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)(d,{mdxType:"KeyConceptSeeds"}),(0,s.kt)(p,{mdxType:"AvoidSeedGenerators"}),(0,s.kt)(o.Z,{groupId:"language",mdxType:"Tabs"},(0,s.kt)(i.Z,{value:"java",label:"Java",mdxType:"TabItem"},(0,s.kt)(S,{mdxType:"JavaGenerateSeed"})),(0,s.kt)(i.Z,{value:"nodejs",label:"Nodejs",mdxType:"TabItem"},(0,s.kt)(x,{mdxType:"NodejsGenerateSeed"})),(0,s.kt)(i.Z,{value:"python",label:"Python",mdxType:"TabItem"},(0,s.kt)(v,{mdxType:"PythonGenerateSeed"})),(0,s.kt)(i.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,s.kt)(w,{mdxType:"RustGenerateSeed"})),(0,s.kt)(i.Z,{value:"wasm",label:"Wasm",mdxType:"TabItem"},(0,s.kt)(T,{mdxType:"WasmGenerateSeed"}))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Output example"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-plaintext"},"39bccf7b88a8017e6a96e6f31e34f138829c574dc6061523e84c5f2e53f5ca36\npass phrase weapon yellow diary scissors gift drive strategy antique scheme make surround aerobic mystery coral hope lock walnut become exclude only glove syrup\neff5c97c96ddab55d6fe78f914508750152eaab1b9692236bc79268895ecfd168e91eedd2489ed6c51fc44156b9a2e6c967e4edcfb649ff33d41581be4627347\n")),(0,s.kt)(c.ZP,{mdxType:"WalletRecommendation"}))}I.isMDXComponent=!0},18679:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(67294),s=t(86010);const o="tabItem_Ymn6";function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,s.Z)(o,i),hidden:t},n)}},34259:(e,n,t)=>{t.d(n,{Z:()=>m});var a=t(87462),s=t(67294),o=t(86010),i=t(51048),r=t(33609),d=t(1943),l=t(72957);const p="tabList__CuJ",c="tabItem_LNqP";function u(e){var n;const{lazy:t,block:i,defaultValue:u,values:m,groupId:g,className:h}=e,y=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=m??y.map((e=>{let{props:{value:n,label:t,attributes:a}}=e;return{value:n,label:t,attributes:a}})),S=(0,r.l)(f,((e,n)=>e.value===n.value));if(S.length>0)throw new Error(`Docusaurus error: Duplicate values "${S.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const b=null===u?u:u??(null==(n=y.find((e=>e.props.default)))?void 0:n.props.value)??y[0].props.value;if(null!==b&&!f.some((e=>e.value===b)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${b}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:_}=(0,d.U)(),[v,E]=(0,s.useState)(b),w=[],{blockElementScrollPositionUntilNextRender:k}=(0,l.o5)();if(null!=g){const e=x[g];null!=e&&e!==v&&f.some((n=>n.value===e))&&E(e)}const T=e=>{const n=e.currentTarget,t=w.indexOf(n),a=f[t].value;a!==v&&(k(n),E(a),null!=g&&_(g,String(a)))},N=e=>{var n;let t=null;switch(e.key){case"ArrowRight":{const n=w.indexOf(e.currentTarget)+1;t=w[n]??w[0];break}case"ArrowLeft":{const n=w.indexOf(e.currentTarget)-1;t=w[n]??w[w.length-1];break}}null==(n=t)||n.focus()};return s.createElement("div",{className:(0,o.Z)("tabs-container",p)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":i},h)},f.map((e=>{let{value:n,label:t,attributes:i}=e;return s.createElement("li",(0,a.Z)({role:"tab",tabIndex:v===n?0:-1,"aria-selected":v===n,key:n,ref:e=>w.push(e),onKeyDown:N,onFocus:T,onClick:T},i,{className:(0,o.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":v===n})}),t??n)}))),t?(0,s.cloneElement)(y.filter((e=>e.props.value===v))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},y.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==v})))))}function m(e){const n=(0,i.Z)();return s.createElement(u,(0,a.Z)({key:String(n)},e))}},49962:(e,n,t)=>{t.d(n,{Z:()=>a});const a='package org.iota.client.example;\n\nimport java.util.ArrayList;\nimport java.util.Arrays;\nimport java.util.List;\nimport java.util.Map;\nimport java.util.Optional;\n\nimport org.iota.client.*;\nimport org.iota.client.local.*;\n\npublic class ExampleApp {\n\n    protected static final String MAINNET = "https://chrysalis-nodes.iota.cafe";\n\n    // Faucet: https://faucet.chrysalis-devnet.iota.cafe/\n    // Explorer: https://explorer.iota.org/devnet\n    protected static final String TESTNET = "https://api.lb-0.h.chrysalis-devnet.iota.cafe";\n    protected static final String TESTNET_LB = "api.lb-0.h.chrysalis-devnet.iota.cafe";\n\n    protected static final String NODE = TESTNET;\n\n    static {\n        NativeAPI.verifyLink();\n    }\n\n    public static void main(String[] args) {\n\n        try {\n            new ExampleApp();\n        } catch (Exception e) {\n            e.printStackTrace();\n        }\n    }\n\n    public ExampleApp() {\n\n    }\n\n    private static Client node() {\n        Client iota = Client.Builder().withNode(NODE) // Insert your node URL here\n                // .withNodeAuth("https://somechrysalisiotanode.com", "jwt_or_null",\n                // "name_or_null", "password_or_null") //\n                // Optional authentication\n                .finish();\n        return iota;\n    }\n\n    public static void nodeInfo() {\n        try {\n            Client iota = node();\n\n            System.out.println("Node healthy: " + iota.getHealth());\n\n            NodeInfoWrapper info = iota.getInfo();\n            System.out.println("Node url: " + info.url());\n            System.out.println("Node Info: " + info.nodeInfo());\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void generateSeed() {\n        try {\n            SecretKey secret_key = SecretKey.generate();\n            System.out.println(RustHex.encode(secret_key.toBytes()));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void generateAddresses() {\n        try {\n            Client iota = node();\n\n            String seed = RustHex.encode("NONSECURE_USE_OF_DEVELOPMENT_SEED_1");\n            String[] addresses = GetAddressesBuilder.from(seed).withClient(iota).withRange(0, 10).finish();\n            System.out.println(Arrays.toString(addresses));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getBalance() {\n        try {\n            Client iota = node();\n\n            String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n\n            long seed_balance = iota.getBalance(seed).finish();\n            System.out.println("Account balance: " + seed_balance);\n\n            String address = "atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r";\n\n            BalanceAddressResponse response = iota.getAddress().balance(address);\n            System.out.println("The balance of " + address + " is " + response.balance());\n\n            UtxoInput[] outputs = iota.getAddress().outputs(address, new OutputsOptions());\n            System.out.println("The outputs of address " + address + " are: " + Arrays.toString(outputs));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getOutputs() {\n        try {\n            Client iota = node();\n\n            String address = "atoi1qzt0nhsf38nh6rs4p6zs5knqp6psgha9wsv74uajqgjmwc75ugupx3y7x0r";\n\n            UtxoInput[] outputs = iota.getAddress().outputs(address, new OutputsOptions());\n            System.out.println("The outputs of address " + address + " are: " + Arrays.toString(outputs));\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void simpleMessage() {\n        try {\n            Client iota = node();\n            Message message = iota.message().finish();\n\n            System.out.println(\n                    "Empty message sent: https://explorer.iota.org/mainnet/message/" + message.id().toString());\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getMessageMetadata() {\n        try {\n            Client iota = node();\n            Message message = iota.message().finish();\n\n            MessageMetadata metadata = iota.getMessage().metadata(message.id());\n\n            System.out.println("Message metadata: " + metadata);\n        } catch (ClientException e) {\n            System.out.println("Error: " + e.getMessage());\n        }\n    }\n\n    public static void getDataMessage() {\n        Client iota = node();\n\n        Message message = iota.message().withIndexString("Hello").withDataString("Tangle").finish();\n\n        System.out.println("Message sent https://explorer.iota.org/devnet/message/" + message.id());\n\n        MessageId[] fetched_message_ids = iota.getMessage().indexString("Hello");\n        System.out.println("Messages with Hello index: " + Arrays.toString(fetched_message_ids));\n    }\n\n    public static void transaction() {\n        Client iota = node();\n\n        String seed_1 = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n\n        Message message = iota\n            .message()\n            .withSeed(seed_1)\n            // Insert the output address and amount to spent. The amount cannot be zero.\n            .withOutput(\n                // We generate an address from our seed so that we send the funds to ourselves\n                        iota.getAddresses(seed_1).withRange(0, 1).finish()[0], 1000000\n            ).finish();\n\n        System.out.println("Transaction sent: https://explorer.iota.org/devnet/message/" +  message.id());\n    }\n\n    public static void mqtt() {\n        Client iota = node();\n\n        MqttListener listener = new MqttListener() {\n            @Override\n            public void onEvent(TopicEvent event) {\n                System.out.println(event);\n            }\n        };\n\n        // TODO: Make listeners with the Sync trait\n        // iota.subscriber().withTopic(Topic.from("messages")).subscribe(listener);\n    }\n\n    public static void consolidate() {\n        Client iota = node();\n\n        String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n\n        // Here all funds will be send to the address with the lowest index in the range\n        String address = Util.consolidateFunds(iota, seed, 0, 0, 150);\n\n        System.out.println("Funds consolidated to" + address);\n    }\n\n    public static void createMaxDust(){\n        Client iota = node();\n        String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n        String seed_2 = "NONSECURE_USE_OF_DEVELOPMENT_SEED_2";\n\n        String[] new_addresses = iota.getAddresses(seed_2).withRange(0, 1).finish();\n\n        Message dustAllowanceMessage = iota\n            .message()\n            .withSeed(seed)\n            .withDustAllowanceOutput(new_addresses[0], 10_000_000)\n            .finish();\n\n        MessageWrap[] msgs = iota.retryUntilIncluded(dustAllowanceMessage.id(), -1, -1);\n\n        // Split funds to own addresses\n        String[] addresses = iota\n            .getAddresses(seed)\n            // We start from index 1 so we can send remaining balance to the address with index 0\n            .withRange(1, 101)\n            .finish();\n\n        ClientMessageBuilder message_builder = iota.message().withSeed(seed);\n        for (String address : addresses) {\n            // Make sure to re-set the builder as the instance is a clone of the old one due to JNI limits\n            message_builder = message_builder.withOutput(address, 1_000_001);\n        }\n        Message message = message_builder.finish();\n\n        System.out.println(\n            "First transaction sent: https://explorer.iota.org/devnet/message/" + message.id()\n        );\n\n        msgs = iota.retryUntilIncluded(message.id(), -1, -1);\n\n        // At this point we have 100 Mi on 100 addresses and we will just send it to the final address\n        // We use the outputs directly so we don\'t double spend them\n        \n        List<UtxoInput> initial_outputs = new ArrayList<>();\n        Optional<MessagePayload> payload = message.payload();\n        if (payload.isPresent() && payload.get().payloadType().equals(MessagePayloadType.TRANSACTION)) {\n            TransactionPayload tx = payload.get().asTransaction();\n            RegularEssence essence = tx.essence().asRegular();\n            Output[] outputs = essence.outputs();\n            for (int index = 0; index < outputs.length; index++) {\n                Output output = outputs[index];\n                if (output.asSignatureLockedSingleOutput().amount() == 1_000_001) {\n                    initial_outputs.add(UtxoInput.from(tx.id(), index));\n                } \n            }\n        }\n\n        String[] first_address_old_seed = iota.getAddresses(seed).withRange(0, 1).finish();\n        List<MessageId> sent_messages = new ArrayList<>();\n        for (UtxoInput input : initial_outputs) {\n            MessageId message_id = iota\n                .message()\n                    .withSeed(seed).withInput(input).withInputRange(1, 101).withOutput(new_addresses[0], 1)\n                // send remaining iotas back\n                    .withOutput(first_address_old_seed[0], 1_000_000)\n                .finish()\n                    .id();\n            System.out.printf("Transaction %i sent: https://explorer.iota.org/devnet/message/%s" + input.index(),\n                    message_id\n            );\n            sent_messages.add(message_id);\n        }\n        // only check last message, if this gets confirmed all other messages should also be confirmed\n        msgs = iota.retryUntilIncluded(sent_messages.get(sent_messages.size() - 1), -1, -1);\n        // Send all funds back to first address\n        long total_balance = iota.getBalance(seed).finish();\n\n        System.out.println("Total balance: " + total_balance);\n\n        message = iota\n            .message()\n            .withSeed(seed)\n            .withOutput(first_address_old_seed[0], total_balance)\n            .finish();\n\n        System.out.println("Final tx sent: https://explorer.iota.org/devnet/message/" + message.id());\n\n        msgs = iota.retryUntilIncluded(message.id(), -1, -1);\n    }\n\n    public static void customPayload() {\n        // Create a client instance\n        Client iota = node();\n\n        IndexationPayload indexation_payload = IndexationPayload.fromStrings("Your Index", "Your Data");\n\n        Message message = iota.message().finishIndex(indexation_payload);\n\n        System.out.printf("Message ID: %s", message.id());\n    }\n\n    public static void offlineExample() {\n        String seed = "NONSECURE_USE_OF_DEVELOPMENT_SEED_1";\n        String toAddress = "atoi1qruzprxum2934lr3p77t96pzlecxv8pjzvtjrzdcgh2f5exa22n6gek0qdq";\n        long amount = 1_000_000;\n\n        Offline offlineExample = new Offline(NODE, seed);\n        String[] inputAddresses = offlineExample.generateAddresses();\n        String preparedData = offlineExample.prepareTransaction(inputAddresses, toAddress, amount);\n        System.out.println("Prepared data: " + preparedData);\n        String signedData = offlineExample.signTransaction(preparedData);\n        System.out.println("Signed data: " + signedData);\n\n        Message message = offlineExample.sendMessage(signedData);\n\n        System.out.printf("Message ID: %s", message.id());\n    }\n}\n'}}]);