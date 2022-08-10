"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[31968],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return k}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=p(r),k=n,f=m["".concat(s,".").concat(k)]||m[k]||u[k]||i;return r?a.createElement(f,l(l({ref:t},d),{},{components:r})):a.createElement(f,l({ref:t},d))}));function k(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},67454:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return k},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=r(87462),n=r(63366),i=(r(67294),r(3905)),l=["components"],o={},s="@iota/client",p={unversionedId:"libraries/nodejs/references/api_ref",id:"libraries/nodejs/references/api_ref",title:"@iota/client",description:"Table of contents",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/references/api_ref.md",sourceDirName:"libraries/nodejs/references",slug:"/libraries/nodejs/references/api_ref",permalink:"/iota.rs/develop/libraries/nodejs/references/api_ref",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/references/api_ref.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"How To Prepare And Sign A Transaction",permalink:"/iota.rs/develop/libraries/nodejs/how_to/prepare_sign_transaction"},next:{title:"Class: Client",permalink:"/iota.rs/develop/libraries/nodejs/references/classes/Client"}},d={},u=[{value:"Table of contents",id:"table-of-contents",level:2},{value:"Classes",id:"classes",level:3},{value:"Enumerations",id:"enumerations",level:3},{value:"Functions",id:"functions",level:3},{value:"Type Aliases",id:"type-aliases",level:3},{value:"Interfaces",id:"interfaces",level:3},{value:"Functions",id:"functions-1",level:2},{value:"initLogger",id:"initlogger",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"utf8ToBytes",id:"utf8tobytes",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"hexToUtf8",id:"hextoutf8",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"utf8ToHex",id:"utf8tohex",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Type Aliases",id:"type-aliases-1",level:2},{value:"BlockId",id:"blockid",level:3},{value:"QueryParameter",id:"queryparameter",level:3},{value:"AliasQueryParameter",id:"aliasqueryparameter",level:3},{value:"FoundryQueryParameter",id:"foundryqueryparameter",level:3},{value:"NftQueryParameter",id:"nftqueryparameter",level:3},{value:"SecretManager",id:"secretmanager",level:3}],m={toc:u};function k(e){var t=e.components,r=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"iotaclient"},"@iota/client"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"classes"},"Classes"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/classes/Client"},"Client")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/classes/MessageHandler"},"MessageHandler"))),(0,i.kt)("h3",{id:"enumerations"},"Enumerations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/enums/CoinType"},"CoinType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/enums/LedgerDeviceType"},"LedgerDeviceType")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/enums/Network"},"Network"))),(0,i.kt)("h3",{id:"functions"},"Functions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/api_ref#initlogger"},"initLogger")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/api_ref#utf8tobytes"},"utf8ToBytes")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/api_ref#hextoutf8"},"hexToUtf8")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/api_ref#utf8tohex"},"utf8ToHex"))),(0,i.kt)("h3",{id:"type-aliases"},"Type Aliases"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/api_ref#blockid"},"BlockId")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/api_ref#queryparameter"},"QueryParameter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/api_ref#aliasqueryparameter"},"AliasQueryParameter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/api_ref#foundryqueryparameter"},"FoundryQueryParameter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/api_ref#nftqueryparameter"},"NftQueryParameter")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/api_ref#secretmanager"},"SecretManager"))),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IBuildBlockOptions"},"IBuildBlockOptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IClientBlockBuilderOutputAddress"},"IClientBlockBuilderOutputAddress")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IClientOptions"},"IClientOptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IDuration"},"IDuration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IGenerateAddressesOptions"},"IGenerateAddressesOptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IGenerateAddressMetadata"},"IGenerateAddressMetadata")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/LedgerNanoStatus"},"LedgerNanoStatus")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/LedgerApp"},"LedgerApp")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IAuth"},"IAuth")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IMqttBrokerOptions"},"IMqttBrokerOptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/INode"},"INode")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/INetworkInfo"},"INetworkInfo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IRentStructureResponse"},"IRentStructureResponse")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/INodeInfoWrapper"},"INodeInfoWrapper")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IAliasOutputBuilderOptions"},"IAliasOutputBuilderOptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IBasicOutputBuilderOptions"},"IBasicOutputBuilderOptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IFoundryOutputBuilderOptions"},"IFoundryOutputBuilderOptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/INftOutputBuilderOptions"},"INftOutputBuilderOptions")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IPreparedTransactionData"},"IPreparedTransactionData")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IInputSigningData"},"IInputSigningData")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/IRange"},"IRange")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/LedgerNanoSecretManager"},"LedgerNanoSecretManager")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/MnemonicSecretManager"},"MnemonicSecretManager")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/StrongholdSecretManager"},"StrongholdSecretManager"))),(0,i.kt)("h2",{id:"functions-1"},"Functions"),(0,i.kt)("h3",{id:"initlogger"},"initLogger"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"initLogger"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"config?"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("p",null,"Initialize logger, if no arguments are provided a default config will be used."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"config")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"ILoggerConfig")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"defaultLoggerConfig"))))),(0,i.kt)("h4",{id:"returns"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"any")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"utf8tobytes"},"utf8ToBytes"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"utf8ToBytes"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"utf8"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,i.kt)("p",null,"Convert UTF8 string to an array of bytes"),(0,i.kt)("h4",{id:"parameters-1"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"utf8")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-1"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"number"),"[]"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"hextoutf8"},"hexToUtf8"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"hexToUtf8"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"hex"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Convert hex encoded string to UTF8 string"),(0,i.kt)("h4",{id:"parameters-2"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"hex")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-2"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"utf8tohex"},"utf8ToHex"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"utf8ToHex"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"utf8"),"): ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"Convert UTF8 string to hex encoded string"),(0,i.kt)("h4",{id:"parameters-3"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"utf8")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"string"))))),(0,i.kt)("h4",{id:"returns-3"},"Returns"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("h2",{id:"type-aliases-1"},"Type Aliases"),(0,i.kt)("h3",{id:"blockid"},"BlockId"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"BlockId"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"string")),(0,i.kt)("p",null,"A block identifier, the BLAKE2b-256 hash of the block bytes.\nSee ",(0,i.kt)("a",{parentName:"p",href:"https://www.blake2.net/"},"https://www.blake2.net/")," for more information."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"queryparameter"},"QueryParameter"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"QueryParameter"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Address")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"AliasAddress")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"HasStorageDepositReturn")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageDepositReturnAddress")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"HasTimelock")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"TimelockedBefore")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"TimelockedAfter")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"HasExpiration")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpiresBefore")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpiresAfter")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpirationReturnAddress")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Sender")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Issuer")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"StateController")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Governor")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"CommonQueryParameters")),(0,i.kt)("p",null,"Query parameter for filtering output requests"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"aliasqueryparameter"},"AliasQueryParameter"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"AliasQueryParameter"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"StateController")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Governor")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Issuer")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Sender")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"CommonQueryParameters")),(0,i.kt)("p",null,"Query parameters for filtering Alias Outputs"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"foundryqueryparameter"},"FoundryQueryParameter"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"FoundryQueryParameter"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"AliasAddress")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"CommonQueryParameters")),(0,i.kt)("p",null,"Query parameters for filtering Foundry Outputs"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"nftqueryparameter"},"NftQueryParameter"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"NftQueryParameter"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Address")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"AliasAddress")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"HasStorageDepositReturn")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageDepositReturnAddress")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"HasTimelock")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"TimelockedBefore")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"TimelockedAfter")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"HasExpiration")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpiresBefore")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpiresAfter")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"ExpirationReturnAddress")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Sender")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"Tag")," ","|"," ",(0,i.kt)("inlineCode",{parentName:"p"},"CommonQueryParameters")),(0,i.kt)("p",null,"Query parameters for filtering Nft Outputs"),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"secretmanager"},"SecretManager"),(0,i.kt)("p",null,"\u01ac ",(0,i.kt)("strong",{parentName:"p"},"SecretManager"),": ",(0,i.kt)("a",{parentName:"p",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/LedgerNanoSecretManager"},(0,i.kt)("inlineCode",{parentName:"a"},"LedgerNanoSecretManager"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/MnemonicSecretManager"},(0,i.kt)("inlineCode",{parentName:"a"},"MnemonicSecretManager"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/iota.rs/develop/libraries/nodejs/references/interfaces/StrongholdSecretManager"},(0,i.kt)("inlineCode",{parentName:"a"},"StrongholdSecretManager"))),(0,i.kt)("p",null,"Supported secret managers"))}k.isMDXComponent=!0}}]);