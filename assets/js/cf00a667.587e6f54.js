"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[17501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,k=p["".concat(l,".").concat(h)]||p[h]||d[h]||s;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<s;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},11994:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const s={description:"Getting started with the official IOTA Client Rust Library.",image:"/img/logo/iota_mark_light.png",keywords:["rust","cargo","toml","how-to"]},i="Getting Started with Rust",o={unversionedId:"getting_started/rust_getting_started",id:"getting_started/rust_getting_started",title:"Getting Started with Rust",description:"Getting started with the official IOTA Client Rust Library.",source:"@site/iota/external/streams/develop/documentation/docs/getting_started/rust_getting_started.md",sourceDirName:"getting_started",slug:"/getting_started/rust_getting_started",permalink:"/streams/getting_started/rust_getting_started",draft:!1,editUrl:"https://github.com/iotaledger/streams/edit/develop/documentation/iota/external/streams/develop/documentation/docs/getting_started/rust_getting_started.md",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Client Rust Library.",image:"/img/logo/iota_mark_light.png",keywords:["rust","cargo","toml","how-to"]},sidebar:"docs",previous:{title:"Getting Started",permalink:"/streams/getting_started/overview"},next:{title:"Getting Started with Wasm",permalink:"/streams/getting_started/wasm_getting_started"}},l={},c=[{value:"Basic Usage",id:"basic-usage",level:2},{value:"Author",id:"author",level:3},{value:"Subscriber",id:"subscriber",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Subscription",id:"subscription",level:3},{value:"Subscriber",id:"subscriber-1",level:4},{value:"Author",id:"author-1",level:4},{value:"Keyloads",id:"keyloads",level:3},{value:"Pre-shared Keys",id:"pre-shared-keys",level:3}],u={toc:c};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started-with-rust"},"Getting Started with Rust"),(0,a.kt)("p",null,"Streams requires an asynchronous runtime environment to be set, we suggest using ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/tokio/latest/tokio/"},"tokio"),". Streams also uses ",(0,a.kt)("a",{parentName:"p",href:"https://docs.rs/anyhow/latest/anyhow/"},"anyhow")," for error handling, so projects can use ",(0,a.kt)("inlineCode",{parentName:"p"},"anyhow::Result")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"anyhow::Error")," for easier integration. "),(0,a.kt)("p",null,"To create a new Rust project, run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cargo new PROJECT_NAME\n")),(0,a.kt)("p",null,"Create two Rust projects: one for the author and one for the subscriber, and add the following dependencies to both their ",(0,a.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," files:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-toml"},'tokio = { version = "1.5.0", features = ["full"] }\nanyhow = { version = "1.0" }\niota-streams = { git = "https://github.com/iotaledger/streams", branch = "develop"}\n\n# Temporarily needed because Streams is a work in progress\nbee-message = "=0.1.5"\nbee-rest-api = "=0.1.2"\n')),(0,a.kt)("h2",{id:"basic-usage"},"Basic Usage"),(0,a.kt)("p",null,"After adding the necessary projects and their dependencies, you can start using the Streams library. Below are two example scripts for both the ",(0,a.kt)("a",{parentName:"p",href:"../explanations/channels_protocol/authors"},"author")," and the ",(0,a.kt)("a",{parentName:"p",href:"../explanations/channels_protocol/subscribers"},"subscriber"),". The author script will announce a channel and print the announcement link. The subscriber script handles the announcement to let subscribers know where to find the channel."),(0,a.kt)("h3",{id:"author"},"Author"),(0,a.kt)("p",null,"Replace the seed of the author with a random string and run the script to get the announcement link."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use anyhow::Result;\nuse iota_streams::app_channels::api::tangle::{Author, ChannelType};\nuse iota_streams::app::transport::tangle::client::Client;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let node = "https://chrysalis-nodes.iota.org";\n    let client = Client::new_from_url(node);\n\n    // Author implementation will set the Channel Type\n    let mut author = Author::new("AUTHOR_SEED", ChannelType::SingleBranch, client);\n    \n    // Start the channel and retrieve the announcement link\n    let ann_link = author.send_announce().await?;   \n\n    // Convert the announcement link to a string to share with others\n    println!("{}", ann_link.to_string());\n    Ok(())\n}\n')),(0,a.kt)("h3",{id:"subscriber"},"Subscriber"),(0,a.kt)("p",null,"Replace the seed of the subscriber with a random string, paste the announcement link from the author script above and run the script to let the subscriber find the channel."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'use anyhow::Result;\nuse iota_streams::app_channels::api::tangle::{Address, Subscriber};\nuse iota_streams::app::transport::tangle::client::Client;\nuse std::str::FromStr;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n    let node = "https://chrysalis-nodes.iota.org";\n    let client = Client::new_from_url(node);\n\n    // Subscriber implementation does not need to specify a channel type, it will be \n    // parsed from the announcement message\n    let mut subscriber = Subscriber::new("SUBSCRIBER_SEED", client);\n    \n    // Create Address object from announcement link string\n    let ann_link = Address::from_str("ANNOUNCEMENT_LINK")?;   \n\n    // Process the announcement message\n    subscriber.receive_announcement(&ann_link).await?;\n    Ok(())\n}\n')),(0,a.kt)("h2",{id:"next-steps"},"Next Steps"),(0,a.kt)("p",null,"Now you can start subscribing users to the channel and generating branches to specify access control for publishers and subscribers via ",(0,a.kt)("a",{parentName:"p",href:"../explanations/channels_protocol/keyloads"},"keyload")," messages.   "),(0,a.kt)("h3",{id:"subscription"},"Subscription"),(0,a.kt)("p",null,"To subscribe to a channel, subscribers create a subscribe message linked to the channel announcement message. The message link should then be provided to the author. This allows the author to handle the subscription message and use the subscriber's public key for access control and validation purposes."),(0,a.kt)("h4",{id:"subscriber-1"},"Subscriber"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// Send subscription message\nlet sub_link = subscriber.send_subscribe(&ann_link).await?;\n// Provide the link to the author\nprintln!("{}", sub_link.to_string());\n')),(0,a.kt)("h4",{id:"author-1"},"Author"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'// Process subscriber link \nlet sub_link = Address::from_str("SUBSCRIPTION_LINK")?;\nauthor.receive_subscribe(&sub_link).await?;\n')),(0,a.kt)("h3",{id:"keyloads"},"Keyloads"),(0,a.kt)("p",null,"Keyload messages are an access control mechanism for a branch. A random key is generated and masked within the message using its public keys or pre-shared keys. This allows the author to specify which subscribers have access to which branches. There are two ways to send a keyload:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Send a keyload including specific pre-shared keys or subscriber public keys."),(0,a.kt)("li",{parentName:"ul"},"Send a keyload including all pre-shared keys and subscriber public keys known to the author.")),(0,a.kt)("p",null,"Example: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'// Send keyload including pre-shared key\nlet psk = psk_from_seed("KEY_SEED".as_bytes());\nlet psk_id = pskid_from_psk(&psk);\nauthor.store_psk(psk_id, psk)?;\nauthor.send_keyload(&ann_link, &vec![psk_id.into()]).await?;\n\n// Send keyload for subscriber\nauthor.send_keyload(&ann_link, &vec![subscriber_public_key.into()]).await?;\n\n// Send keyload for everyone\nauthor.send_keyload_for_everyone(&ann_link).await?;\n')),(0,a.kt)("h3",{id:"pre-shared-keys"},"Pre-shared Keys"),(0,a.kt)("p",null,"As an alternative to subscribing via public key exchange using subscribe messages, an author may specify access control by adding a pre-shared key (PSK). A PSK is a 32-byte array containing a secret key, shared outside of the Streams instance, that can be used to specify access through a keyload message. Suppose an author issues a keyload with a PSK included, and a subscriber reads this message with the same PSK stored within itself. In that case, the subscriber can participate in the proceeding branch without being subscribed to the channel. "),(0,a.kt)("p",null,"Example: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"use iota_streams::app_channels::api::{psk_from_seed, pskid_from_psk};\nuse rand::Rng;\n\n// Create a random key\nlet key_seed = rand::thread_rng().gen::<[u8; 32]>();\nlet psk = psk_from_seed(&key);\nlet pskid = pskid_from_psk(&psk);\n\n// Store the PSK in the author\nauthor.store_psk(pskid, psk)?;\n\n// Create a keyload with the PSK included\nlet keyload_link = author.send_keyload(&ann_link, &vec![psk_id.into()]).await?;\n\n// Store the same PSK in the subscriber \nsubscriber.store_psk(pskid, psk);\n\n// Process keyload message from subscriber end\nsubscriber.receive_keyload(&keyload_link).await?;\n")))}d.isMDXComponent=!0}}]);