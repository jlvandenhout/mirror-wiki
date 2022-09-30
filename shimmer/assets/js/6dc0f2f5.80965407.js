"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[19266],{68385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(87462),o=(n(67294),n(3905)),s=n(69319);const r={description:"Learn how to mint NFTs with the iota.js client library.",image:"/img/client_banner.png",keywords:["how to","example","nft","min"]},i="Mint an NFT",l={unversionedId:"how_tos/mint_nft",id:"how_tos/mint_nft",title:"Mint an NFT",description:"Learn how to mint NFTs with the iota.js client library.",source:"@site/shimmer/external/iota.js/documentation/docs/how_tos/mint_nft.mdx",sourceDirName:"how_tos",slug:"/how_tos/mint_nft",permalink:"/shimmer/iotajs/how_tos/mint_nft",draft:!1,editUrl:"https://github.com/iotaledger/iota.js/tree/dev/packages/iota/documentation/shimmer/external/iota.js/documentation/docs/how_tos/mint_nft.mdx",tags:[],version:"current",frontMatter:{description:"Learn how to mint NFTs with the iota.js client library.",image:"/img/client_banner.png",keywords:["how to","example","nft","min"]},sidebar:"docs",previous:{title:"Display Client Data in a Browser",permalink:"/shimmer/iotajs/how_tos/browser"},next:{title:"@iota/iota.js",permalink:"/shimmer/iotajs/references/client/api_ref"}},d={},c=[{value:"Pre-requirements",id:"pre-requirements",level:2},{value:"Mint an NFT",id:"mint-an-nft-1",level:2},{value:"Create a Hot Wallet",id:"create-a-hot-wallet",level:3},{value:"Create the Output",id:"create-the-output",level:3},{value:"Create the Transaction Essence",id:"create-the-transaction-essence",level:3},{value:"Create the Transaction Payload",id:"create-the-transaction-payload",level:3},{value:"Submit the Block",id:"submit-the-block",level:3},{value:"Example Code",id:"example-code",level:2},{value:"Expected Output",id:"expected-output",level:3},{value:"Related How Tos",id:"related-how-tos",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mint-an-nft"},"Mint an NFT"),(0,o.kt)("h2",{id:"pre-requirements"},"Pre-requirements"),(0,o.kt)("p",null,"Before you can mint an NFT, you will need to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/shimmer/iotajs/how_tos/simple"},"Connect to a Node"),".")),(0,o.kt)("h2",{id:"mint-an-nft-1"},"Mint an NFT"),(0,o.kt)("p",null,"This ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.js/tree/feat/stardust/packages/iota/examples/mint-nft"},"example")," will connect to\na node you defined as the ",(0,o.kt)("inlineCode",{parentName:"p"},"API_ENDPOINT")," constant. Afterwards, the example will request a Bech32 address, if you don't\nhave one the example will take care of generating it."),(0,o.kt)("h3",{id:"create-a-hot-wallet"},"Create a Hot Wallet"),(0,o.kt)("p",null,"The example will later create a hot wallet and request funds from the\n",(0,o.kt)("a",{parentName:"p",href:"https://faucet.alphanet.iotaledger.net/api/enqueue"},"faucet")," defined as the ",(0,o.kt)("inlineCode",{parentName:"p"},"FAUCET")," constant."),(0,o.kt)("h3",{id:"create-the-output"},"Create the Output"),(0,o.kt)("p",null,"Once the generated wallet has outputs to mint the NFT, it will define an\n",(0,o.kt)("a",{parentName:"p",href:"../references/client/interfaces/INftOutput"},"INftOutput")," object.  The ",(0,o.kt)("inlineCode",{parentName:"p"},"amount")," property is set to ",(0,o.kt)("inlineCode",{parentName:"p"},"0"),", as you need to\ncalculate the required storage deposit using the\n",(0,o.kt)("a",{parentName:"p",href:"../references/client/classes/TransactionHelper#getstoragedeposit"},"TransactionHelper.getStorageDeposit(output, rentStructure)"),"\nfunction, which takes any of the allowed ",(0,o.kt)("a",{parentName:"p",href:"../references/client/api_ref#outputtypes"},"OutputTypes"),"."),(0,o.kt)("h3",{id:"create-the-transaction-essence"},"Create the Transaction Essence"),(0,o.kt)("p",null,"Once you have created the ",(0,o.kt)("a",{parentName:"p",href:"#create-the-output"},"output"),", you should create the\n",(0,o.kt)("a",{parentName:"p",href:"../references/client/interfaces/ITransactionEssence"},"ITransactionEssence"),", which will include the ",(0,o.kt)("inlineCode",{parentName:"p"},"output"),". The example will then use the\n",(0,o.kt)("inlineCode",{parentName:"p"},"ITransactionEssence")," to generate the ",(0,o.kt)("inlineCode",{parentName:"p"},"essenceHash")," using the\n",(0,o.kt)("a",{parentName:"p",href:"../references/client/classes/TransactionHelper#gettransactionessencehash"},"TransactionHelper.getTransactionEssenceHash(essence)"),"\nfunction."),(0,o.kt)("h3",{id:"create-the-transaction-payload"},"Create the Transaction Payload"),(0,o.kt)("p",null,"With the ",(0,o.kt)("a",{parentName:"p",href:"#create-the-transaction-essence"},"created the transaction essence"),", you are now able to create the\n",(0,o.kt)("a",{parentName:"p",href:"../references/client/interfaces/ISignatureUnlock"},"ISignatureUnlock")," which will be used to create the\n",(0,o.kt)("a",{parentName:"p",href:"../references/client/interfaces/ITransactionPayload"},"ITransactionPayload"),"."),(0,o.kt)("h3",{id:"submit-the-block"},"Submit the Block"),(0,o.kt)("p",null,"Once you have ",(0,o.kt)("a",{parentName:"p",href:"#create-the-transaction-payload"},"created the transaction payload"),", you can create the\n",(0,o.kt)("a",{parentName:"p",href:"../references/client/interfaces/IBlock"},"IBlock")," and submit it using the\n",(0,o.kt)("a",{parentName:"p",href:"../references/client/classes/SingleNodeClient#blocksubmit"},"SingleNodeClient.blockSubmit(blockPartial)")," function."),(0,o.kt)("h2",{id:"example-code"},"Example Code"),(0,o.kt)(s.Z,{className:"language-javascript",mdxType:"CodeBlock"},'import {\n    Bech32Helper,\n    Ed25519Address,\n    Ed25519Seed,\n    ED25519_ADDRESS_TYPE,\n    IndexerPluginClient, IUTXOInput,\n    SingleNodeClient,\n    IOutputsResponse,\n    INftOutput,\n    NFT_OUTPUT_TYPE,\n    ITransactionEssence,\n    serializeOutput,\n    ISignatureUnlock,\n    SIGNATURE_UNLOCK_TYPE,\n    ED25519_SIGNATURE_TYPE,\n    TRANSACTION_ESSENCE_TYPE,\n    ITransactionPayload,\n    TRANSACTION_PAYLOAD_TYPE,\n    IBlock,\n    DEFAULT_PROTOCOL_VERSION,\n    TransactionHelper,\n    AddressTypes\n} from "@iota/iota.js";\nimport { Converter, WriteStream } from "@iota/util.js";\nimport { NeonPowProvider } from "@iota/pow-neon.js";\nimport { Bip32Path, Blake2b, Ed25519 } from "@iota/crypto.js";\nimport * as readline from \'node:readline\';\nimport { randomBytes } from "node:crypto";\nimport Prom from "bluebird";\nimport fetch from "node-fetch";\n\nconst EXPLORER = "https://explorer.alphanet.iotaledger.net/alphanet";\nconst API_ENDPOINT = "https://api.alphanet.iotaledger.net/";\nconst FAUCET = "https://faucet.alphanet.iotaledger.net/api/enqueue" \n\n// If running the node locally\n// const API_ENDPOINT = "http://localhost:14265/";\n// const FAUCET = "http://localhost:8091/api/enqueue"; \n\n// In this example we set up a hot wallet, fund it with tokens from the faucet and let it mint an NFT to our address.\nasync function run() {\n    // LocalPoW is extremely slow and only runs in 1 thread...\n    // const client = new SingleNodeClient(API_ENDPOINT, {powProvider: new LocalPowProvider()});\n    // Neon localPoW is blazingly fast, but you need rust toolchain to build\n    const client = new SingleNodeClient(API_ENDPOINT, {powProvider: new NeonPowProvider()});\n\n    // Fetch basic info from node\n    const nodeInfo = await client.info();\n\n    // Ask for the target address\n    const targetAddressBech32 = await askQuestion("Target address (Bech32 encoded) where to mint the NFT or leave empty and we will generate an address for you: ");\n\n    // Parse bech32 encoded address into iota address\n    let targetAddress: AddressTypes = {} as AddressTypes;\n    try {\n        const tmp = Bech32Helper.fromBech32(targetAddressBech32, nodeInfo.protocol.bech32Hrp);\n        if (!tmp){\n            throw new Error("Can\'t decode target address.");\n        }\n        targetAddress = Bech32Helper.addressFromBech32(targetAddressBech32, nodeInfo.protocol.bech32Hrp);\n    } catch (error) {\n        \n        // If target address is not provided we are goping to set up an account for this demo.\n        console.log("Target Address:");\n        const [addressHex, addressBech32, addressKeyPair] = await setUpHotWallet(nodeInfo.protocol.bech32Hrp);\n        targetAddress = Bech32Helper.addressFromBech32(addressBech32, nodeInfo.protocol.bech32Hrp);\n    }\n\n    // Now it\'s time to set up an account for this demo which we are going to use to mint nft and send it to the target address.\n    console.log("Sender Address:")\n    const [walletAddressHex, walletAddressBech32, walletKeyPair] = await setUpHotWallet(nodeInfo.protocol.bech32Hrp, true);\n   \n    // Fetch outputId with funds to be used as input\n    const indexerPluginClient = new IndexerPluginClient(client);\n\n    // Indexer returns outputIds of matching outputs. We are only interested in the first one coming from the faucet.\n    const outputId = await fetchAndWaitForBasicOutput(walletAddressBech32, indexerPluginClient);\n    console.log("OutputId: ", outputId);\n\n    // Fetch the output itself\n    const resp = await client.output(outputId);\n    const consumedOutput = resp.output;\n    console.log("To be consumed output: ", consumedOutput);\n\n    // Prepare inputs to the tx\n    const input:IUTXOInput = TransactionHelper.inputFromOutputId(outputId);\n    console.log("Input: ", input);\n\n    // Create the outputs, that is an NFT output\n    let nftOutput: INftOutput = {\n        type: NFT_OUTPUT_TYPE,\n        amount: "0", // for now zero as we don\'t know the byte cost yet\n        // when minting, this has to be set to zero. It will be set in nodes as the hash of the outputId when the tx confirms.\n        // Note, that from the first spend of the NFT you have to use the actual hash of outputId\n        nftId: "0x0000000000000000000000000000000000000000000000000000000000000000",\n        immutableFeatures: [\n            {\n                type: 1, // Issuer feature\n                address: {\n                    type: 0,\n                    pubKeyHash: walletAddressHex\n                },\n            },\n            {\n                type: 2, // Metadata Feature\n                data: Converter.utf8ToHex("This is where the immutable NFT metadata goes", true)\n            }\n        ],\n        unlockConditions: [\n            {\n                type: 0,\n                address: targetAddress // minting it directly onto target addy\n            }\n        ]\n    };\n\n    // Calculate required storage\n    let requiredStorageDeposit = TransactionHelper.getStorageDeposit(nftOutput, nodeInfo.protocol.rentStructure);\n    console.log("Required Storage Deposit of the NFT output: ", requiredStorageDeposit);\n\n    // Prepare Tx essence\n    // We are going to mint the NFT to an address the user defined in the beginning\n    // We could put only requiredStorageDepoist into the nft output, but hey, we have free tokens so top it up with all we have.\n    // nftOutput.amount = requiredStorageDeposit.toString()\n    nftOutput.amount = consumedOutput.amount;\n\n    // InputsCommitment calculation\n    const inputsCommitmentHasher = new Blake2b(Blake2b.SIZE_256); // blake2b hasher\n    // Step 1: sort inputs lexicographically basedon serialized bytes\n    //       -> we have only 1 input, no need to\n    // Step 2: Loop over list of inputs (the actual output objects they reference).\n    //   SubStep 2a: Calculate hash of serialized output\n    const outputHasher = new Blake2b(Blake2b.SIZE_256);\n    const w = new WriteStream();\n    serializeOutput(w, consumedOutput);\n    const consumedOutputBytes = w.finalBytes();\n    outputHasher.update(consumedOutputBytes);\n    const outputHash = outputHasher.final();\n\n    //   SubStep 2b: add each output hash to buffer\n    inputsCommitmentHasher.update(outputHash);\n\n    // Step 3: Calculate Sum from buffer\n    const inputsCommitment = Converter.bytesToHex(inputsCommitmentHasher.final(), true);\n\n    // Figure out networkId from networkName\n    const currentNetworkId = TransactionHelper.networkIdFromNetworkName(nodeInfo.protocol.networkName);\n\n    // Creating Transaction Essence\n    const txEssence: ITransactionEssence = {\n        type: TRANSACTION_ESSENCE_TYPE,\n        networkId: currentNetworkId,\n        inputs: [ input],\n        outputs: [nftOutput], // outputs don\'t have to be sorted anymore!!!\n        inputsCommitment:  inputsCommitment,\n    };\n\n    // Calculating Transaction Essence Hash (to be signed in signature unlocks)\n    const essenceHash = TransactionHelper.getTransactionEssenceHash(txEssence);\n\n    // We unlock only one output, so there will be one unlock with signature\n    let unlock: ISignatureUnlock = {\n        type: SIGNATURE_UNLOCK_TYPE,\n        signature: {\n            type: ED25519_SIGNATURE_TYPE,\n            publicKey: Converter.bytesToHex(walletKeyPair.publicKey, true),\n            signature: Converter.bytesToHex(Ed25519.sign(walletKeyPair.privateKey, essenceHash), true)\n        }\n    };\n\n    // Constructing Transaction Payload\n    const txPayload : ITransactionPayload = {\n        type: TRANSACTION_PAYLOAD_TYPE,\n        essence: txEssence,\n        unlocks: [unlock]\n    };\n\n    // Getting parents for the block\n    let parentsResponse = await client.tips();\n    let parents = parentsResponse.tips;\n\n    // Constructing block that holds the transaction\n    let block: IBlock = {\n        protocolVersion: DEFAULT_PROTOCOL_VERSION,\n        parents: parents,\n        payload: txPayload,\n        nonce: "0"\n    };\n\n    // LocalPoW is so slow and simpe threaded that it may happen that by the time you push the msg to the node,\n    // it is alsready below max depth (parents), or will need to be promoted...\n    // alternatively, connect to a node with remotePoW enabled\n    const blockId = await client.blockSubmit(block);\n\n    console.log("Submitted blockId is: ", blockId);\n    console.log("Check out the transaction at ", EXPLORER+"/block/"+blockId);\n}\n\nrun()\n    .then(() => console.log("Done"))\n    .catch(err => console.error(err));\n\nasync function setUpHotWallet(hrp: string, fund: boolean = false) {\n    // Generate a random seed\n    const walletEd25519Seed = new Ed25519Seed(randomBytes(32));\n\n    // For Shimmer we use Coin Type 4219\n    const path = new Bip32Path("m/44\'/4219\'/0\'/0\'/0\'");\n\n    // Construct wallet from seed\n    const walletSeed = walletEd25519Seed.generateSeedFromPath(path);\n    let walletKeyPair = walletSeed.keyPair();\n\n    console.log("\\tSeed", Converter.bytesToHex(walletSeed.toBytes()));\n\n    // Get the address for the path seed which is actually the Blake2b.sum256 of the public key\n    // display it in both Ed25519 and Bech 32 format\n    const walletEd25519Address = new Ed25519Address(walletKeyPair.publicKey);\n    const walletAddress = walletEd25519Address.toAddress();\n    const walletAddressHex = Converter.bytesToHex(walletAddress, true);\n\n    let walletAddressBech32 = Bech32Helper.toBech32(ED25519_ADDRESS_TYPE, walletAddress, hrp);\n    console.log("\\tAddress Ed25519", walletAddressHex);\n    console.log("\\tAddress Bech32", walletAddressBech32);\n\n    // We also top up the address by asking funds from the faucet.\n    if (fund) {\n        await requestFundsFromFaucet(walletAddressBech32);\n    }\n\n    return [walletAddressHex, walletAddressBech32, walletKeyPair] as const;\n}\n\n// Requests frunds from the faucet via API\nasync function requestFundsFromFaucet(addressBech32: string) {\n    const requestObj = JSON.stringify({ address: addressBech32 });\n    let errorMessage, data;\n    try {\n        const response = await fetch(FAUCET, {\n            method: "POST",\n            headers: {\n                Accept: "application/json",\n                "Content-Type": "application/json",\n            },\n            body: requestObj,\n        });\n        if (response.status === 202) {\n            errorMessage = "OK";\n        } else if (response.status === 429) {\n            errorMessage = "Too many requests. Please, try again later.";\n        } else {\n            data = await response.json();\n            errorMessage = data.error.message;\n        }\n    } catch (error) {\n        errorMessage = error;\n    }\n\n    if (errorMessage != "OK") {\n        throw new Error(`Didn\'t manage to get funds from faucet: ${errorMessage}`);\n    }\n}\n\nasync function fetchAndWaitForBasicOutput(addressBech32: string, client: IndexerPluginClient): Promise<string> {\n    let outputsResponse: IOutputsResponse = { ledgerIndex: 0, cursor: "", pageSize: "", items: [] };\n    let maxTries = 10;\n    let tries = 0;\n    while (outputsResponse.items.length == 0) {\n        if (tries > maxTries){ break; }\n        tries++;\n        console.log("\\tTry #",tries,": fetching basic output for address ", addressBech32);\n        outputsResponse = await client.basicOutputs({\n            addressBech32: addressBech32,\n            hasStorageDepositReturn: false,\n            hasExpiration: false,\n            hasTimelock: false,\n            hasNativeTokens: false,\n        });\n        if (outputsResponse.items.length == 0) {\n            console.log("\\tDidn\'t find any, retrying soon...");\n            await new Promise(f => setTimeout(f, 1000));\n        }\n    }\n    if (tries > maxTries) {\n        throw new Error("Didn\'t find any outputs for address");\n    }\n    return outputsResponse.items[0];\n}\n\n// Just some helpers to ask for user input in terminal\nlet rl = readline.createInterface({\n    input: process.stdin,\n    output: process.stdout\n});\n\nconst questionAsync = Prom.promisify<string, string>((question: string, callback: Function) => {\n    rl.question(question,\n        callback.bind(null, null) // Ugh, signature mismatch.\n    );\n});\n\nasync function askQuestion(question: string ): Promise<string> {\n    const result: string = await questionAsync(question);\n\n    return result;\n}\n'),(0,o.kt)("h3",{id:"expected-output"},"Expected Output"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-plaintext"},"Target address (Bech32 encoded) where to mint the NFT or leave empty and we will generate an address for you:\nTarget Address:\n        Seed cacc64919fd9b8b7990c8e8c579ed3e0269a101b3fa9186ae6b65edf865791ee\n        Address Ed25519 0xd6135c19e0f364ce3a6fe8e943a1c7ee921acb1d6a1226000e4a0345b61f5407\n        Address Bech32 rms1qrtpxhqeurekfn36dl5wjsapclhfyxktr44pyfsqpe9qx3dkra2qwq3y5z4\nSender Address:\n        Seed d4c0da7c0990e28036cba5807894aee23daa2ffabbfadcbfbc9ac639b2bf49c0\n        Address Ed25519 0xea5b53136d6d423ed4679bfb7eb7e517d853992162b139d7eb5f69a61c6344af\n        Address Bech32 rms1qr49k5cnd4k5y0k5v7dlkl4hu5tas5uey93tzwwhad0knfsuvdz27rvts06\n        Try # 1 : fetching basic output for address  rms1qr49k5cnd4k5y0k5v7dlkl4hu5tas5uey93tzwwhad0knfsuvdz27rvts06\n        Didn't find any, retrying soon...\n        Try # 2 : fetching basic output for address  rms1qr49k5cnd4k5y0k5v7dlkl4hu5tas5uey93tzwwhad0knfsuvdz27rvts06\nOutputId:  0x5334dd8c3c3096285424bbd7ff7e5d4897bbf0cb110ecbba0f1315400384f7860000\nTo be consumed output:  {\n  type: 3,\n  amount: '1000000000',\n  unlockConditions: [ { type: 0, address: [Object] } ]\n}\nInput:  {\n  type: 0,\n  transactionId: '0x5334dd8c3c3096285424bbd7ff7e5d4897bbf0cb110ecbba0f1315400384f786',\n  transactionOutputIndex: 0\n}\nRequired Storage Deposit of the NFT output:  270500\nSubmitted blockId is:  0x510e56623975f19290445856f0c852b6504524741de58a50e77dd9cb2e9e09c5\nCheck out the transaction at  https://explorer.alphanet.iotaledger.net/alphanet/block/0x510e56623975f19290445856f0c852b6504524741de58a50e77dd9cb2e9e09c5\nDone\n")),(0,o.kt)("h2",{id:"related-how-tos"},"Related How Tos"),(0,o.kt)("p",null,"You can explore the libraries NFT minting functionalities with the\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.js/tree/feat/stardust/packages/iota/examples/nft-collection"},"NFT collection code example"),"."))}p.isMDXComponent=!0}}]);