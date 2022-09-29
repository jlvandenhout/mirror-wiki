"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[11640],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>y});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=p(a),y=o,u=h["".concat(s,".").concat(y)]||h[y]||c[y]||r;return a?n.createElement(u,i(i({ref:t},d),{},{components:a})):n.createElement(u,i({ref:t},d))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},49202:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const r={description:"Learn how to write simple dApps as GoShimmer plugins such as a chat dApp and a network delay dApp.",image:"/img/logo/goshimmer_light.png",keywords:["chat","payload","block","bytes layout","web api endpoint"]},i="How to Create dApps",l={unversionedId:"tutorials/dApp",id:"tutorials/dApp",title:"How to Create dApps",description:"Learn how to write simple dApps as GoShimmer plugins such as a chat dApp and a network delay dApp.",source:"@site/shimmer/external/goshimmer/documentation/docs/tutorials/dApp.md",sourceDirName:"tutorials",slug:"/tutorials/dApp",permalink:"/shimmer/goshimmer/tutorials/dApp",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/shimmer/external/goshimmer/documentation/docs/tutorials/dApp.md",tags:[],version:"current",frontMatter:{description:"Learn how to write simple dApps as GoShimmer plugins such as a chat dApp and a network delay dApp.",image:"/img/logo/goshimmer_light.png",keywords:["chat","payload","block","bytes layout","web api endpoint"]},sidebar:"docs",previous:{title:"Command Line Wallet",permalink:"/shimmer/goshimmer/tutorials/wallet_library"},next:{title:"Manual Peering",permalink:"/shimmer/goshimmer/tutorials/manual_peering"}},s={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Chat dApp",id:"chat-dapp",level:2},{value:"Overview",id:"overview",level:3},{value:"Define &amp; Register The Chat Payload",id:"define--register-the-chat-payload",level:3},{value:"Create The Web API Endpoints",id:"create-the-web-api-endpoints",level:3},{value:"Listen for Chat Payloads",id:"listen-for-chat-payloads",level:3},{value:"Network Delay dApp",id:"network-delay-dapp",level:2},{value:"Overview",id:"overview-1",level:3},{value:"Define &amp; Register The Network Delay Object",id:"define--register-the-network-delay-object",level:3},{value:"Create The Web API Endpoints",id:"create-the-web-api-endpoints-1",level:3},{value:"Listen for Network Delay Payloads",id:"listen-for-network-delay-payloads",level:3}],d={toc:p};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-create-dapps"},"How to Create dApps"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This guide is meant for developers familiar with the Go programming language.")),(0,o.kt)("admonition",{title:"DISCLAIMER",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"GoShimmer is a rapidly evolving prototype software. As such, the described steps here will likely change in the future. Specifically, we are envisioning to ease the process of dApp creation and installation for node owners. Furthermore, the current approach is in no way hardened and should be seen as purely experimental. Do not write any software for actual production use.")),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Throughout this tutorial we will learn how to write simple dApps as GoShimmer plugins. We provide two different examples: a chat dApp and a network delay dApp. Hope you enjoy the reading!"),(0,o.kt)("h2",{id:"chat-dapp"},"Chat dApp"),(0,o.kt)("p",null,"In this guide we are going to explain how to write a very simple chat dApp so that anyone, connected to a GoShimmer node, could write a short block and read what is being written into the Tangle."),(0,o.kt)("p",null,"The complete source code of the application can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/tree/develop/plugins/chat"},"in the repository"),". "),(0,o.kt)("h3",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Our chat dApp can be implemented in a few simple steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A node sends a special block containing a chat payload via the Tangle."),(0,o.kt)("li",{parentName:"ol"},"Upon receipt, every other node in the network processes this block and - if the chat dApp/plugin is enabled - triggers an event that a chat block has been received.")),(0,o.kt)("p",null,"Within GoShimmer we need 3 components to realize this undertaking. First, we need to ",(0,o.kt)("strong",{parentName:"p"},"define and register a chat payload type"),". Second, we need a way to ",(0,o.kt)("strong",{parentName:"p"},"initiate a block")," with a chat payload via the web API. And lastly, we need to ",(0,o.kt)("strong",{parentName:"p"},"listen")," for chat payloads and take appropriate action."),(0,o.kt)("p",null,"If a node does not have our chat dApp installed and activated, the chat block will be simply treated as a raw data block without any particular meaning. In general that means that in order for a dApp to be useful, node owners need to explicitly install it. In our case we simply ship it with GoShimmer as a ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/goshimmer/implementation_design/plugin"},"plugin"),"."),(0,o.kt)("h3",{id:"define--register-the-chat-payload"},"Define & Register The Chat Payload"),(0,o.kt)("p",null,"First, we need to decide what data our chat payload should contain and define the byte layout accordingly.\nIn our case we need a ",(0,o.kt)("inlineCode",{parentName:"p"},"From")," field to identify the sender of the block (e.g., a nickname, the ID of the node); a ",(0,o.kt)("inlineCode",{parentName:"p"},"To")," field to identify an optional recipient of the block (e.g., a chat room ID, a nickname); a ",(0,o.kt)("inlineCode",{parentName:"p"},"Block")," field containing the actual chat block.\nTherefore, we can define the byte layout as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"length<uint32-4bytes> // every payload has to have this\ntype<uint32-4bytes> // every payload has to have this\nFrom<string>\nTo<string>\nBlock<string>\n")),(0,o.kt)("p",null,"Next, we need to fulfill the ",(0,o.kt)("inlineCode",{parentName:"p"},"Payload")," interface and provide the functionality to read/write a payload from/to bytes. The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/hive.go/tree/master/marshalutil"},(0,o.kt)("inlineCode",{parentName:"a"},"hive.go/marshalutil"))," package simplifies this step tremendously."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Go"},"// Payload represents the generic interface for a payload that can be embedded in Blocks of the Tangle.\ntype Payload interface {\n    // Type returns the Type of the Payload.\n    Type() Type\n    \n    // Bytes returns a marshaled version of the Payload.\n    Bytes() []byte\n    \n    // String returns a human readable version of the Payload.\n    String() string\n}\n")),(0,o.kt)("p",null,"Finally, we need to create and register our chat payload type so that it can be properly unmarshalled. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Go"},'// Type represents the identifier which addresses the chat payload type.\nvar Type = payload.NewType(payloadType, PayloadName, func(data []byte) (payload payload.Payload, err error) {\n    var consumedBytes int\n    payload, consumedBytes, err = FromBytes(data)\n    if err != nil {\n        return nil, err\n    }\n    if consumedBytes != len(data) {\n        return nil, errors.New("not all payload bytes were consumed")\n    }\n    return\n})\n')),(0,o.kt)("h3",{id:"create-the-web-api-endpoints"},"Create The Web API Endpoints"),(0,o.kt)("p",null,"In order to issue a block with our newly created chat payload, we need to create a web API endpoint. Here we simply bind a json request containing the necessary fields: ",(0,o.kt)("inlineCode",{parentName:"p"},"from"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"to")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"block")," and then issue it into the Tangle with ",(0,o.kt)("inlineCode",{parentName:"p"},"blocklayer.Tangle().IssuePayload(chatPayload)"),". This plugin takes care of all the specifics and employs the ",(0,o.kt)("inlineCode",{parentName:"p"},"BlockFactory")," to, i.a., select tips and sign the block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Go"},'webapi.Server().POST("chat", SendChatBlock)\n\n// SendChatBlock sends a chat block.\nfunc SendChatBlock(c echo.Context) error {\n    req := &Request{}\n    if err := c.Bind(req); err != nil {\n        return c.JSON(http.StatusBadRequest, jsonmodels.NewErrorResponse(err))\n    }\n    chatPayload := NewPayload(req.From, req.To, req.Block)\n\n    blk, err := blocklayer.Tangle().IssuePayload(chatPayload)\n    if err != nil {\n        return c.JSON(http.StatusBadRequest, Response{Error: err.Error()})\n    }\n\n    return c.JSON(http.StatusOK, Response{BlockID: blk.ID().Base58()})\n}\n')),(0,o.kt)("h3",{id:"listen-for-chat-payloads"},"Listen for Chat Payloads"),(0,o.kt)("p",null,"Every dApp listens for blocks from the ",(0,o.kt)("em",{parentName:"p"},"communication layer")," and when its payload type is detected, takes appropriate action. For us that means listening for chat payload type and triggering an event if we encounter any. In this case the event will contain information about the chat block and also the ",(0,o.kt)("inlineCode",{parentName:"p"},"BlockID")," in terms of a Tangle block as well as its issuance timestamp."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Go"},"func onReceiveBlockFromBlockLayer(blockID tangle.BlockID) {\n    var chatEvent *ChatEvent\n    blocklayer.Tangle().Storage.Block(blockID).Consume(func(block *tangle.Block) {\n        if block.Payload().Type() != Type {\n            return\n        }\n\n        chatPayload, _, err := FromBytes(block.Payload().Bytes())\n        if err != nil {\n            app.LogError(err)\n            return\n        }\n\n        chatEvent = &ChatEvent{\n            From:      chatPayload.From,\n            To:        chatPayload.To,\n            Block:   chatPayload.Block,\n            Timestamp: block.IssuingTime(),\n            BlockID: block.ID().Base58(),\n        }\n    })\n\n    if chatEvent == nil {\n        return\n    }\n\n    app.LogInfo(chatEvent)\n    Events.BlockReceived.Trigger(chatEvent)\n}\n")),(0,o.kt)("h2",{id:"network-delay-dapp"},"Network Delay dApp"),(0,o.kt)("p",null,"In this guide we are going to explain how to write a very simple dApp based on an actual dApp we are using in GoShimmer to help us measure the network delay, i.e., how long it takes for every active node in the network to receive a block."),(0,o.kt)("p",null,"The complete source code of the application can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/tree/develop/plugins/networkdelay"},"in the repository"),". "),(0,o.kt)("h3",{id:"overview-1"},"Overview"),(0,o.kt)("p",null,"Our network delay dApp should help us to identify the time it takes for every active node to receive and process a block. That can be done in a few simple steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"A (known) node sends a special block containing a network delay payload."),(0,o.kt)("li",{parentName:"ol"},"Upon receipt, every other node in the network answers to the special block by posting its current time to our remote logger."),(0,o.kt)("li",{parentName:"ol"},"For simplicity, we gather the information in an ",(0,o.kt)("a",{parentName:"li",href:"https://www.elastic.co/what-is/elk-stack"},"ELK stack"),". This helps us to easily interpret and analyze the data.")),(0,o.kt)("p",null,"Within GoShimmer we need 3 components to realize this undertaking. First, we need to ",(0,o.kt)("strong",{parentName:"p"},"define and register a network delay payload type"),". Second, we need a way to ",(0,o.kt)("strong",{parentName:"p"},"initiate a block")," with a network delay payload via the web API. And lastly, we need to ",(0,o.kt)("strong",{parentName:"p"},"listen")," for network delay payloads and take appropriate action."),(0,o.kt)("p",null,"If a node does not have our dApp installed and activated, the block will be simply treated as a raw data block without any particular meaning. In general that means that in order for a dApp to be useful, node owners need to explicitly install it. In our case we simply ship it with GoShimmer as a ",(0,o.kt)("a",{parentName:"p",href:"/shimmer/goshimmer/implementation_design/plugin"},"plugin"),"."),(0,o.kt)("h3",{id:"define--register-the-network-delay-object"},"Define & Register The Network Delay Object"),(0,o.kt)("p",null,"First, we need to decide what data our network delay payload should contain and define the byte layout accordingly.\nIn our case we need an ",(0,o.kt)("inlineCode",{parentName:"p"},"ID")," to identify a network delay block and the ",(0,o.kt)("inlineCode",{parentName:"p"},"sent time")," of the initiator.\nTherefore, we can define the byte layout as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"length<uint32-4bytes> // every payload has to have this\ntype<uint32-4bytes> // every payload has to have this\nid<32bytes>\nsentTime<int64-8bytes>\n")),(0,o.kt)("p",null,"Next, we need to fulfill the ",(0,o.kt)("inlineCode",{parentName:"p"},"Payload")," interface and provide the functionality to read/write a payload from/to bytes. The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/hive.go/tree/master/marshalutil"},(0,o.kt)("inlineCode",{parentName:"a"},"hive.go/marshalutil"))," package simplifies this step tremendously."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Go"},"// Payload represents the generic interface for a payload that can be embedded in Blocks of the Tangle.\ntype Payload interface {\n    // Type returns the Type of the Payload.\n    Type() Type\n    \n    // Bytes returns a marshaled version of the Payload.\n    Bytes() []byte\n    \n    // String returns a human readable version of the Payload.\n    String() string\n}\n")),(0,o.kt)("p",null,"Finally, we need to create and register our network delay payload type so that it can be properly unmarshalled. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Go"},'// Type represents the identifier which addresses the network delay Object type.\nvar Type = payload.NewType(189, ObjectName, func(data []byte) (payload payload.Payload, err error) {\n    var consumedBytes int\n    payload, consumedBytes, err = FromBytes(data)\n    if err != nil {\n        return nil, err\n    }\n    if consumedBytes != len(data) {\n        return nil, errors.New("not all payload bytes were consumed")\n    }\n    return\n})\n')),(0,o.kt)("h3",{id:"create-the-web-api-endpoints-1"},"Create The Web API Endpoints"),(0,o.kt)("p",null,"In order to issue a block with our newly created network delay payload, we need to create a web API endpoint. Here we simply create a random ",(0,o.kt)("inlineCode",{parentName:"p"},"ID")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"sentTime")," and then issue a block with ",(0,o.kt)("inlineCode",{parentName:"p"},"issuer.IssuePayload()"),". This plugin takes care of all the specifics and employs the ",(0,o.kt)("inlineCode",{parentName:"p"},"BlockFactory")," to, i.a., select tips and sign the block."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Go"},'webapi.Server.POST("networkdelay", broadcastNetworkDelayObject)\n\nfunc broadcastNetworkDelayObject(c echo.Context) error {\n    // generate random id\n    rand.Seed(time.Now().UnixNano())\n    var id [32]byte\n    if _, err := rand.Read(id[:]); err != nil {\n        return c.JSON(http.StatusInternalServerError, Response{Error: err.Error()})\n    }\n\n    blk, err := issuer.IssuePayload(NewObject(id, time.Now().UnixNano()))\n    if err != nil {\n        return c.JSON(http.StatusBadRequest, Response{Error: err.Error()})\n    }\n    return c.JSON(http.StatusOK, Response{ID: blk.Id().String()})\n}\n')),(0,o.kt)("h3",{id:"listen-for-network-delay-payloads"},"Listen for Network Delay Payloads"),(0,o.kt)("p",null,"Every dApp listens for blocks from the ",(0,o.kt)("em",{parentName:"p"},"communication layer")," and when its data type is detected, takes appropriate action. For us that means listening for network delay payloads and sending blocks to our remote logger if we encounter any. Of course in this context, we only want to react to network delay payloads which were issued by our analysis/entry node server. Therefore, matching the block signer's public key with a configured public key lets us only react to the appropriate network delay payloads."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Go"},'func onReceiveBlockFromBlockLayer(blockID tangle.BlockID) {\n    blocklayer.Tangle().Storage.Block(blockID).Consume(func(solidBlock *tangle.Block) {\n        blockPayload := solidBlock.Payload()\n        if blockPayload.Type() != Type {\n            return\n        }\n    \n        // check for node identity\n        issuerPubKey := solidBlock.IssuerPublicKey()\n        if issuerPubKey != originPublicKey || issuerPubKey == myPublicKey {\n            return\n        }\n        \n        networkDelayObject, ok := blockPayload.(*Object)\n        if !ok {\n            app.LogInfo("could not cast payload to network delay payload")\n            return\n        }\n        \n        now := clock.SyncedTime().UnixNano()\n        \n        // abort if block was sent more than 1min ago\n        // this should only happen due to a node resyncing\n        if time.Duration(now-networkDelayObject.sentTime) > time.Minute {\n            app.LogDebugf("Received network delay block with >1min delay\\n%s", networkDelayObject)\n        return\n        }\n    \n        sendToRemoteLog(networkDelayObject, now)\n    })\n}\n')))}c.isMDXComponent=!0}}]);