"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[27766],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=a.createContext({}),l=function(e){var n=a.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return a.createElement(i.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,h=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return t?a.createElement(h,s(s({ref:n},u),{},{components:t})):a.createElement(h,s({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},67012:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=t(87462),r=(t(67294),t(3905));const o={},s="Setup a Testnet Address and Receive Funds from the",c={type:"mdx",permalink:"/shimmer/tutorials/wallet-setup",source:"@site/shimmer/tutorials/single-page-tutorials/wallet-setup.md",title:"Setup a Testnet Address and Receive Funds from the",description:"Faucet",frontMatter:{}},i=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Development Environment and Libraries",id:"development-environment-and-libraries",level:3},{value:"Set Up",id:"set-up",level:2},{value:"Prepare Your Development Environment",id:"prepare-your-development-environment",level:3},{value:"Prepare the Network Configuration",id:"prepare-the-network-configuration",level:3},{value:"Prepare the Environment Variables",id:"prepare-the-environment-variables",level:3},{value:"Scripts",id:"scripts",level:2},{value:"Create Mnemonic Script",id:"create-mnemonic-script",level:3},{value:"Setup Account Script",id:"setup-account-script",level:3},{value:"1. Imports and parameters",id:"1-imports-and-parameters",level:4},{value:"2. Create an account",id:"2-create-an-account",level:4},{value:"3. Create address",id:"3-create-address",level:4},{value:"Run the script",id:"run-the-script",level:4},{value:"Check Balance Script",id:"check-balance-script",level:3},{value:"1. Imports and parameters",id:"1-imports-and-parameters-1",level:4},{value:"2. Import Stronghold account",id:"2-import-stronghold-account",level:4},{value:"3. Get balance",id:"3-get-balance",level:4},{value:"Run the script",id:"run-the-script-1",level:4},{value:"Request Tokens from the Faucet",id:"request-tokens-from-the-faucet",level:2},{value:"Request Tokens via the Faucet Website",id:"request-tokens-via-the-faucet-website",level:3},{value:"Request Tokens via the Faucet API",id:"request-tokens-via-the-faucet-api",level:3},{value:"Run the script",id:"run-the-script-2",level:4},{value:"Check Your Account Balance Again",id:"check-your-account-balance-again",level:3}],l={toc:i};function u(e){let{components:n,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"setup-a-testnet-address-and-receive-funds-from-the"},"Setup a Testnet Address and Receive Funds from the"),(0,r.kt)("p",null," Faucet"),(0,r.kt)("p",null,"In this tutorial, you will ",(0,r.kt)("a",{parentName:"p",href:"#create-mnemonic-script"},"create a new mnemonic seed phrase")," to set up a Stronghold account with the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs/tree/develop/bindings/nodejs"},"NodeJS binding of wallet.rs"),". Afterward, you will ",(0,r.kt)("a",{parentName:"p",href:"#3-create-address"},"generate a new address"),", ",(0,r.kt)("a",{parentName:"p",href:"#request-tokens-from-faucet"},"request funds from the Shimmer testnet faucet"),", and ",(0,r.kt)("a",{parentName:"p",href:"#check-balance-again"},"check your account balance"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"development-environment-and-libraries"},"Development Environment and Libraries"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"set-up"},"Set Up"),(0,r.kt)("h3",{id:"prepare-your-development-environment"},"Prepare Your Development Environment"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new folder for the tutorial in a location of your choice and navigate to it:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir wallet-setup\ncd wallet-setup\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Run the Node.js initializer to configure the project:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm init --yes\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Overwrite the ",(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," file with the following content:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:"{6-12}","{6-12}":!0},'{\n  "name": "wallet-setup",\n  "version": "1.0.0",\n  "description": "",\n  "main": "create-mnemonic.js",\n  "dependencies": {\n    "@iota/wallet": "2.0.2-alpha.21",\n    "bip39": "^3.0.4",\n    "dotenv": "^16.0.1",\n    "node-fetch": "^2.6.7"\n  },\n\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "",\n  "license": "Apache-2.0"\n}\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Install new dependencies by running the following command:\n:::note")),(0,r.kt)("p",null,"The installation might take a while if there is no prebuilt wallet NPM package for your combination of OS and NodeJS version."),(0,r.kt)("p",null,":::"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"prepare-the-network-configuration"},"Prepare the Network Configuration"),(0,r.kt)("p",null,"Create a new file ",(0,r.kt)("inlineCode",{parentName:"p"},"networkConfig.js")," and add the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"var networkConfig = {};\n\n// Shimmer Beta network configuration\nnetworkConfig.node = 'https://api.testnet.shimmer.network';\nnetworkConfig.faucetWebsite = 'https://faucet.testnet.shimmer.network';\nnetworkConfig.faucetApi = 'https://faucet.testnet.shimmer.network/api/enqueue';\nnetworkConfig.explorer = 'https://explorer.shimmer.network/testnet';\n\nmodule.exports = { networkConfig };\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"prepare-the-environment-variables"},"Prepare the Environment Variables"),(0,r.kt)("p",null,"Create a new ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file  and add the content below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'ACCOUNT_NAME = "<Enter_your_name_here>"\nSH_PASSWORD = "<Enter_your_password_here>"\nMNEMONIC = "<You_will_create_your_own_mnemonic_seed_phrase_in_the_next_step_and_paste_it_in_here>"\n')),(0,r.kt)("p",null,"Enter your desired account name as well as a secure Stronghold password. You will create your new mnemonic seed phrase in the next step and paste it here afterward."),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"scripts"},"Scripts"),(0,r.kt)("h3",{id:"create-mnemonic-script"},"Create Mnemonic Script"),(0,r.kt)("p",null,"Create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"create-mnemonic.js"),", and add the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Libraries\nconst bip39 = require('bip39')\n \n// For better readability, some console output will be printed in a different color\nconst consoleColor = '\\x1b[36m%s\\x1b[0m';\n\n\nasync function run() {\n    // A 256-bits entropy leads to a 24 word mnemonic seed phrase\n    const mnemonic = bip39.generateMnemonic(256);\n    console.log(consoleColor, 'Copy your mnemonic seed phrase and paste it into the .env file:');\n    console.log(mnemonic, '\\n');\n}\n\nrun();\n")),(0,r.kt)("p",null,"Run the script ",(0,r.kt)("inlineCode",{parentName:"p"},"create-mnemonic.js")," and check the console output for your new mnemonic seed phrase:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"node create-mnemonic.js\n")),(0,r.kt)("p",null,"You can now copy the seed phrase and paste it into the previously ",(0,r.kt)("a",{parentName:"p",href:"#prepare-environment-variables"},"created ",(0,r.kt)("inlineCode",{parentName:"a"},".env")," file"),"."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"setup-account-script"},"Setup Account Script"),(0,r.kt)("p",null,"Create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"setup-account.js")," and add the following code:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We broke the code into separate snippets to help you understand it better. To make it work, copy all code snippets one after another into the file you have just created.")),(0,r.kt)("h4",{id:"1-imports-and-parameters"},"1. Imports and parameters"),(0,r.kt)("p",null,"This part imports all necessary packages, network configuration parameters, and environment variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Libraries\n const { AccountManager, CoinType } = require('@iota/wallet');\n\n// Network configuration\nconst { networkConfig } = require(\"./networkConfig.js\");\nconst nodeURL = networkConfig.node;\n \n// Environment variables\nrequire('dotenv').config({ path: './.env' });\nconst password = process.env.SH_PASSWORD;\nconst mnemonic = process.env.MNEMONIC;\nconst accountName = process.env.ACCOUNT_NAME;\n\n// For better readability, some console output will be printed in a different color\nconst consoleColor = '\\x1b[36m%s\\x1b[0m';\n")),(0,r.kt)("h4",{id:"2-create-an-account"},"2. Create an account"),(0,r.kt)("p",null,"This part of the code will:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Create a new account manager with defined options "),(0,r.kt)("li",{parentName:"ol"},"Store your mnemonic seed phrase.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function run() {\n    // Define the account manager options with the imported network configuration and environment variables\n    const accountManagerOptions = {\n        storagePath: `./${accountName}-database`,\n        clientOptions: {\n            nodes: [nodeURL],\n            localPow: true,},\n        coinType: CoinType.Shimmer,\n        secretManager: {\n            Stronghold: {\n                snapshotPath: `./wallet.stronghold`,\n                password: `${password}`,\n            },\n        },\n    };\n\n    // Create a new account manager\n    const manager = new AccountManager(accountManagerOptions);\n\n    // Store your mnemonic seed phrase in Stronghold\n    await manager.storeMnemonic(mnemonic);\n\n    // Create a new account with your set account name\n    const account = await manager.createAccount({\n      alias: accountName,\n    });\n    console.log(consoleColor, `${accountName}'s account:`);\n    console.log(account, '\\n');\n")),(0,r.kt)("h4",{id:"3-create-address"},"3. Create address"),(0,r.kt)("p",null,"This step creates a new address in your account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    // Generate a new address for your account\n    const address = await account.generateAddress();\n    console.log(consoleColor, `${accountName}'s new address:`);\n    console.log(address.address, '\\n');\n\n    process.exit(0);\n}\n\nrun();\n")),(0,r.kt)("h4",{id:"run-the-script"},"Run the script"),(0,r.kt)("p",null,"Run the script ",(0,r.kt)("inlineCode",{parentName:"p"},"setup-account.js")," and check the console output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"node setup-account.js\n")),(0,r.kt)("p",null,"Stronghold will create a new wallet database folder, ",(0,r.kt)("inlineCode",{parentName:"p"},"<accountName>-database"),", and a snapshot file called ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet.stronghold"),", which safely stores your mnemonic seed phrase."),(0,r.kt)("p",null,"The console output should look similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"<account_name>'s account:\nAccount {\n  meta: {\n    index: 0,\n    coinType: 4219,\n    alias: '<account_name>',\n    publicAddresses: [ [Object] ],\n    internalAddresses: [],\n    addressesWithUnspentOutputs: [],\n    outputs: {},\n    lockedOutputs: [],\n    unspentOutputs: {},\n    transactions: {},\n    pendingTransactions: [],\n    incomingTransactions: {}\n  },\n  messageHandler: MessageHandler { messageHandler: [External: 277668a8e40] }\n} \n\n<account_name>'s new address:\n<your_new_address>\n")),(0,r.kt)("p",null,"You can see your new account and the generated address, which you will use to receive funds from the faucet. Before you request funds, let's check your account balance."),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"check-balance-script"},"Check Balance Script"),(0,r.kt)("p",null,"Create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"check-balance.js")," and add the following code:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We broke the code into separate snippets to help you understand it better. To make it work, copy all code snippets one after another into the file you have just created.")),(0,r.kt)("h4",{id:"1-imports-and-parameters-1"},"1. Imports and parameters"),(0,r.kt)("p",null,"This part imports all necessary packages, network configuration parameters and environment variables."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Libraries\nconst { AccountManager } = require('@iota/wallet');\n\n// Environment variables\nrequire('dotenv').config({ path: './.env' });\nconst password = process.env.SH_PASSWORD;\nconst accountName = process.env.ACCOUNT_NAME;\n\n// For better readability, some console output will be printed in a different color\nconst consoleColor = '\\x1b[36m%s\\x1b[0m';\n")),(0,r.kt)("h4",{id:"2-import-stronghold-account"},"2. Import Stronghold account"),(0,r.kt)("p",null,"The following part of the script will create a new account manager from the previously created Stronghold database path."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"async function run() {\n    // Create a new account manager from existing database path\n    const manager = new AccountManager({\n        storagePath: `./${accountName}-database`,\n    });\n\n    // Pass password to manager\n    await manager.setStrongholdPassword(password);\n\n    // Get specific account from account manager\n    const account = await manager.getAccount(accountName);\n")),(0,r.kt)("h4",{id:"3-get-balance"},"3. Get balance"),(0,r.kt)("p",null,"This script will synchronize your account and fetch the balance for the imported account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"    // Always sync before getting the account balance\n    await account.sync();\n    const balance = await account.getBalance();\n\n    console.log(consoleColor, `${accountName}'s Balance:`);\n    console.log(balance, '\\n');\n\n    process.exit(0);\n};\n\nrun();\n")),(0,r.kt)("h4",{id:"run-the-script-1"},"Run the script"),(0,r.kt)("p",null,"You can now run the ",(0,r.kt)("inlineCode",{parentName:"p"},"check-balance.js"),"  script and check the console output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"node check-balance.js\n")),(0,r.kt)("p",null,"If you ",(0,r.kt)("a",{parentName:"p",href:"#create-mnemonic-script"},"created a new mnemonic seed phrase"),"  at the beginning of this tutorial, you should see an entirely empty balance on your account."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"<Account Name>'s Balance:\n{\n  baseCoin: { total: '0', available: '0' },\n  requiredStorageDeposit: '0',\n  nativeTokens: [],\n  nfts: [],\n  aliases: [],\n  foundries: [],\n  potentiallyLockedOutputs: {}\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"request-tokens-from-the-faucet"},"Request Tokens from the Faucet"),(0,r.kt)("p",null,"Below you can find two ways to request funds from the ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network/"},"Shimmer testnet faucet"),". You can either ",(0,r.kt)("a",{parentName:"p",href:"#request-tokens-via-faucet-website"},"request funds via the Shimmer faucet website")," or programmatically by directly ",(0,r.kt)("a",{parentName:"p",href:"#request-tokens-via-faucet-api"},"calling the API of the faucet"),"."),(0,r.kt)("h3",{id:"request-tokens-via-the-faucet-website"},"Request Tokens via the Faucet Website"),(0,r.kt)("p",null,"After you have ",(0,r.kt)("a",{parentName:"p",href:"#setup-account-script"},"set up your account"),", you can go to the ",(0,r.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network/"},"Shimmer Testnet Faucet Website"),", paste in your newly created address, and request funds."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The 'Request' button will become clickable as soon as a valid Shimmer address is recognized.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Shimmer Testnet Faucet",src:t(42223).Z,width:"1276",height:"590"})),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"request-tokens-via-the-faucet-api"},"Request Tokens via the Faucet API"),(0,r.kt)("p",null,"Create a new file called ",(0,r.kt)("inlineCode",{parentName:"p"},"request-faucet.js"),", add the code below, and replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"receivingAddress")," variable."),(0,r.kt)("p",null,"Make sure to paste your previously generated address into the variable ",(0,r.kt)("inlineCode",{parentName:"p"},"receivingAddress"),". The function ",(0,r.kt)("inlineCode",{parentName:"p"},"requestFunds")," receives the URL of the faucet API and a valid Shimmer testnet address and sends a request to the faucet API for tokens."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// Libraries\nconst fetch = require(\"node-fetch\");\n\n// Network configuration\nconst { networkConfig } = require(\"./networkConfig.js\");\nconst faucetApi = networkConfig.faucetApi;\n\n// Address to receive faucet tokens\nconst receivingAddress = '<paste_your_previously_generated_address_here>';\n\n\nasync function run() {\n    const request = await requestFunds(faucetApi, receivingAddress);\n    console.log(request);\n}\n\n// Request tokens from faucet via API call\nasync function requestFunds(faucetUrl, addressBech32) {\n    const requestFunds = await fetch(faucetUrl, {\n            method: 'POST',\n            headers: {\n                'Accept': 'application/json',\n                'Content-Type': 'application/json'\n            },\n            body: JSON.stringify({ address: addressBech32 })\n        });\n\n    return await requestFunds.json();\n}\n\nrun();\n")),(0,r.kt)("h4",{id:"run-the-script-2"},"Run the script"),(0,r.kt)("p",null,"Run the script ",(0,r.kt)("inlineCode",{parentName:"p"},"request-faucet.js")," and check the console output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"node request-faucet.js\n")),(0,r.kt)("p",null,"If the request was successfull, the console output should look similar to this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"{\n  address: '<your_address>',\n  waitingRequests: 1\n}\n")),(0,r.kt)("hr",null),(0,r.kt)("h3",{id:"check-your-account-balance-again"},"Check Your Account Balance Again"),(0,r.kt)("p",null,"After a few seconds you can check your balance again by running ",(0,r.kt)("a",{parentName:"p",href:"#check-balance-script"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"check-balance.js")," script"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"node check-balance.js\n")),(0,r.kt)("p",null,"If the faucet successfully transferred testnet tokens to your address, your balance should look similar to the content below. If the total balance for the ",(0,r.kt)("inlineCode",{parentName:"p"},"baseCoin")," is still 0, repeat the process of running the ",(0,r.kt)("inlineCode",{parentName:"p"},"check-balance.js")," script since it might take a little time for the funds to be transferred."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},"<account_name>'s Balance:\n{\n  baseCoin: { total: '1000000000', available: '1000000000' },\n  requiredStorageDeposit: '42600',\n  nativeTokens: [],\n  nfts: [],\n  aliases: [],\n  foundries: [],\n  potentiallyLockedOutputs: {}\n}\n")),(0,r.kt)("p",null,"Congratulations, your account is now ready to explore other exciting features of the Shimmer network, such as native tokens and NFTs on L1."))}u.isMDXComponent=!0},42223:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/shimmer-testnet-faucet-bf01c65690038fe0f683d838db04a5c3.png"}}]);