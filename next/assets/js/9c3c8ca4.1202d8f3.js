"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[6738],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},h=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=d(a),p=o,y=u["".concat(l,".").concat(p)]||u[p]||c[p]||i;return a?r.createElement(y,n(n({ref:t},h),{},{components:a})):r.createElement(y,n({ref:t},h))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,n=new Array(i);n[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var d=2;d<i;d++)n[d]=a[d];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},12906:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=a(87462),o=(a(67294),a(3905));const i={title:"Firefly FAQ",description:"Frequently asked questions and helpful troubleshooting information for users of the Firefly wallet."},n=void 0,s={unversionedId:"wallets/firefly/faq-and-troubleshooting",id:"wallets/firefly/faq-and-troubleshooting",title:"Firefly FAQ",description:"Frequently asked questions and helpful troubleshooting information for users of the Firefly wallet.",source:"@site/next/use/wallets/firefly/faq-and-troubleshooting.md",sourceDirName:"wallets/firefly",slug:"/wallets/firefly/faq-and-troubleshooting",permalink:"/next/use/wallets/firefly/faq-and-troubleshooting",draft:!1,editUrl:"https://github.com/iota-wiki/iota-wiki/edit/main/next/use/wallets/firefly/faq-and-troubleshooting.md",tags:[],version:"current",lastUpdatedAt:1664326631,formattedLastUpdatedAt:"Sep 28, 2022",frontMatter:{title:"Firefly FAQ",description:"Frequently asked questions and helpful troubleshooting information for users of the Firefly wallet."},sidebar:"use",previous:{title:"Firefly Ledger user guide",permalink:"/next/use/wallets/firefly/user-guide-ledger"}},l={},d=[{value:"Setup and installation",id:"setup-and-installation",level:2},{value:"I&#39;m worried I might make a mistake when setting up Firefly.",id:"im-worried-i-might-make-a-mistake-when-setting-up-firefly",level:4},{value:"How do I back up my seed?",id:"how-do-i-back-up-my-seed",level:4},{value:"What is Stronghold?",id:"what-is-stronghold",level:4},{value:"I have lost access to my device. How do I recover my wallet?",id:"i-have-lost-access-to-my-device-how-do-i-recover-my-wallet",level:4},{value:"Do you plan to support Trezor or other hardware wallets?",id:"do-you-plan-to-support-trezor-or-other-hardware-wallets",level:4},{value:"Which Ledger hardware do you support?",id:"which-ledger-hardware-do-you-support",level:4},{value:"Do I need to install the Ledger app on my computer? Where do I download this?",id:"do-i-need-to-install-the-ledger-app-on-my-computer-where-do-i-download-this",level:4},{value:"I don&#39;t have my original Ledger USB cable anymore. Will this be a problem?",id:"i-dont-have-my-original-ledger-usb-cable-anymore-will-this-be-a-problem",level:4},{value:"Do I need to update my Ledger firmware before using it with Firefly?",id:"do-i-need-to-update-my-ledger-firmware-before-using-it-with-firefly",level:4},{value:"I don&#39;t have the original Ledger device that I used when I first set up Firefly. Will this be a problem?",id:"i-dont-have-the-original-ledger-device-that-i-used-when-i-first-set-up-firefly-will-this-be-a-problem",level:4},{value:"I have run out of space to install more applications on the Ledger. What should I do?",id:"i-have-run-out-of-space-to-install-more-applications-on-the-ledger-what-should-i-do",level:4},{value:"Backups and recovery",id:"backups-and-recovery",level:2},{value:"I have the seed words (recovery phrase) but don&#39;t remember the password; what can I do?",id:"i-have-the-seed-words-recovery-phrase-but-dont-remember-the-password-what-can-i-do",level:4},{value:"Why should I do regular Stronghold backups?",id:"why-should-i-do-regular-stronghold-backups",level:4},{value:"What is an internal transfer? Is it different from a standard transaction?",id:"what-is-an-internal-transfer-is-it-different-from-a-standard-transaction",level:4},{value:"I have forgotten my device pin. How do I recover my Ledger?",id:"i-have-forgotten-my-device-pin-how-do-i-recover-my-ledger",level:4},{value:"How do I backup my Ledger transaction history?",id:"how-do-i-backup-my-ledger-transaction-history",level:4},{value:"Are the 24 words previously found in the Ledger and are now in Firefly for the same seed?",id:"are-the-24-words-previously-found-in-the-ledger-and-are-now-in-firefly-for-the-same-seed",level:4},{value:"Can I save a Stronghold backup in Firefly for a Ledger Profile? If yes, does this contain my Ledger Seed?",id:"can-i-save-a-stronghold-backup-in-firefly-for-a-ledger-profile-if-yes-does-this-contain-my-ledger-seed",level:4},{value:"Can I put my 24 words from the Ledger into Firefly to see/use my funds with Firefly?",id:"can-i-put-my-24-words-from-the-ledger-into-firefly-to-seeuse-my-funds-with-firefly",level:4},{value:"Profiles and wallets",id:"profiles-and-wallets",level:2},{value:"What are profiles in Firefly?",id:"what-are-profiles-in-firefly",level:4},{value:"What are wallets in Firefly?",id:"what-are-wallets-in-firefly",level:4},{value:"Can I change profile names after I create the profile?",id:"can-i-change-profile-names-after-i-create-the-profile",level:4},{value:"Can I change wallet names after I create the account?",id:"can-i-change-wallet-names-after-i-create-the-account",level:4},{value:"What is <code>resync wallet</code>? Why do I need it, and what happens when I resync my wallet?",id:"what-is-resync-wallet-why-do-i-need-it-and-what-happens-when-i-resync-my-wallet",level:4},{value:"I want to delete a wallet; what happens to the funds in that wallet?",id:"i-want-to-delete-a-wallet-what-happens-to-the-funds-in-that-wallet",level:4},{value:"I want to delete a profile; what happens to the funds in that profile?",id:"i-want-to-delete-a-profile-what-happens-to-the-funds-in-that-profile",level:4},{value:"Why do I need to confirm the receiving address against one displayed on my Ledger device?",id:"why-do-i-need-to-confirm-the-receiving-address-against-one-displayed-on-my-ledger-device",level:4},{value:"Can I have a Ledger wallet under my standard Firefly profile, or do I need to set up an entirely new profile for Ledger?",id:"can-i-have-a-ledger-wallet-under-my-standard-firefly-profile-or-do-i-need-to-set-up-an-entirely-new-profile-for-ledger",level:4},{value:"How can I easily switch from one profile to another? Do I need to sign out each time?",id:"how-can-i-easily-switch-from-one-profile-to-another-do-i-need-to-sign-out-each-time",level:4},{value:"Is it a bad idea to use the same PIN for Firefly as I do for my Ledger device?",id:"is-it-a-bad-idea-to-use-the-same-pin-for-firefly-as-i-do-for-my-ledger-device",level:4},{value:"Where are my tokens located exactly if they are not on my Ledger device nor on my computer?",id:"where-are-my-tokens-located-exactly-if-they-are-not-on-my-ledger-device-nor-on-my-computer",level:4},{value:"Transactions",id:"transactions",level:2},{value:"Can I use my own node to process my transaction?",id:"can-i-use-my-own-node-to-process-my-transaction",level:4},{value:"I accidentally sent funds to the wrong address. Can I get them back?",id:"i-accidentally-sent-funds-to-the-wrong-address-can-i-get-them-back",level:4},{value:"How can I send data transactions with Firefly?",id:"how-can-i-send-data-transactions-with-firefly",level:4},{value:"Where can I see my transaction history?",id:"where-can-i-see-my-transaction-history",level:4},{value:"How do I find a specific transaction that I did send/receive; I only know the day when it happened. Is there a search function?",id:"how-do-i-find-a-specific-transaction-that-i-did-sendreceive-i-only-know-the-day-when-it-happened-is-there-a-search-function",level:4},{value:"What is a deep link, and how do I use it?",id:"what-is-a-deep-link-and-how-do-i-use-it",level:4},{value:"Can I have a fixed receive address?",id:"can-i-have-a-fixed-receive-address",level:4},{value:"Why do I need to confirm my transaction on the Ledger device against the one displayed in Firefly?",id:"why-do-i-need-to-confirm-my-transaction-on-the-ledger-device-against-the-one-displayed-in-firefly",level:4},{value:"Settings",id:"settings",level:2},{value:"Where can I change my PIN and password?",id:"where-can-i-change-my-pin-and-password",level:4},{value:"Can I reuse an address? I know that this was always a problem in Trinity.",id:"can-i-reuse-an-address-i-know-that-this-was-always-a-problem-in-trinity",level:4},{value:"Can I create NFTs or other digital assets in Firefly?",id:"can-i-create-nfts-or-other-digital-assets-in-firefly",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"How do I recover a PIN code?",id:"how-do-i-recover-a-pin-code",level:4},{value:"I have my backup file but don&#39;t remember the password. How can I recover my funds?",id:"i-have-my-backup-file-but-dont-remember-the-password-how-can-i-recover-my-funds",level:4},{value:"I received an error: what can I do?",id:"i-received-an-error-what-can-i-do",level:4},{value:"I received an error: <code>client error: { }</code>. What does it mean, and what can I do?",id:"i-received-an-error-client-error---what-does-it-mean-and-what-can-i-do",level:4},{value:"I received the <code>operation timed out</code> error message. What does it mean, and how can I solve it?",id:"i-received-the-operation-timed-out-error-message-what-does-it-mean-and-how-can-i-solve-it",level:4},{value:"For those with more than one seed, can we replicate this process with every seed we have? Or do we need to transfer all tokens to one seed to migrate to the new network?",id:"for-those-with-more-than-one-seed-can-we-replicate-this-process-with-every-seed-we-have-or-do-we-need-to-transfer-all-tokens-to-one-seed-to-migrate-to-the-new-network",level:4},{value:"Can I buy Shimmer directly in Firefly?",id:"can-i-buy-shimmer-directly-in-firefly",level:4},{value:"Why won&#39;t Firefly connect with my Ledger? Also, My Shimmer application always closes after a couple of seconds after opening it. Why is this?",id:"why-wont-firefly-connect-with-my-ledger-also-my-shimmer-application-always-closes-after-a-couple-of-seconds-after-opening-it-why-is-this",level:4},{value:"Finding balances keeps stalling. Why is this?",id:"finding-balances-keeps-stalling-why-is-this",level:4},{value:"Why does my balance keep showing zero?",id:"why-does-my-balance-keep-showing-zero",level:4},{value:"What happens if my computer falls asleep or restarts during the migration process?",id:"what-happens-if-my-computer-falls-asleep-or-restarts-during-the-migration-process",level:4}],h={toc:d};function c(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://firefly.iota.org/"},"Official website")," | ",(0,o.kt)("a",{parentName:"p",href:"/use/wallets/firefly/user-guide"},"User guide")," | ",(0,o.kt)("a",{parentName:"p",href:"/use/wallets/firefly/user-guide-ledger"},"Ledger user guide")," | ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/firefly"},"Github")),(0,o.kt)("h2",{id:"setup-and-installation"},"Setup and installation"),(0,o.kt)("h4",{id:"im-worried-i-might-make-a-mistake-when-setting-up-firefly"},"I'm worried I might make a mistake when setting up Firefly."),(0,o.kt)("p",null,"Don't worry! All you need to do is download Firefly only from the ",(0,o.kt)("a",{parentName:"p",href:"https://firefly.iota.org/"},"official website")," for your preferred OS and start the setup. The application has been designed to guide you through setting up your profile, securing it, and migrating your tokens successfully."),(0,o.kt)("h4",{id:"how-do-i-back-up-my-seed"},"How do I back up my seed?"),(0,o.kt)("p",null,"Shimmer Firefly now uses a 24-word mnemonic or a recovery phrase. Like with other cryptocurrencies, all you will need are 24 words to recover access to your tokens on the Tangle. You will be able to back up your recovery phrase using the recovery kit you create when you set up your wallet. You will have captured the 24-word recovery phrase in a safe location by saving a so-called ",(0,o.kt)("inlineCode",{parentName:"p"},"stronghold")," file and writing the 24 words down."),(0,o.kt)("p",null,"This physical paper backup is recommended as computers can fail."),(0,o.kt)("p",null,"Hardware wallets such as the Ledger Nano X and S are also supported. In case you use a Ledger Nano device, all relevant security measures are taken by using your ledger device together with the Firefly Wallet. Ledger Seeds are only stored on the Ledger device and never revealed to you."),(0,o.kt)("h4",{id:"what-is-stronghold"},"What is Stronghold?"),(0,o.kt)("p",null,"Stronghold is a secure software implementation developed by the IOTA Foundation with the sole purpose of isolating digital secrets from exposure to hackers and accidental leaks. It uses versioned, file-based backups (with the file extension .stronghold) with double encryption that can be easily backed up and securely shared between devices. You can read more about Stronghold ",(0,o.kt)("a",{parentName:"p",href:"https://blog.iota.org/iota-stronghold-beta-release/"},"here!")),(0,o.kt)("h4",{id:"i-have-lost-access-to-my-device-how-do-i-recover-my-wallet"},"I have lost access to my device. How do I recover my wallet?"),(0,o.kt)("p",null,"There are several ways to recover your wallet, and both can be found in the backups you performed in the wallet setup. One way would be using your 24-word recovery phrase, while the other would be using the Stronghold file you backed up."),(0,o.kt)("h4",{id:"do-you-plan-to-support-trezor-or-other-hardware-wallets"},"Do you plan to support Trezor or other hardware wallets?"),(0,o.kt)("p",null,"We do not currently have any plans to support Trezor, but if a community member would like to work on the integration, please get in touch with Charlie#0123 on our ",(0,o.kt)("a",{parentName:"p",href:"/community/the-community/discord"},"Discord"),"."),(0,o.kt)("h4",{id:"which-ledger-hardware-do-you-support"},"Which Ledger hardware do you support?"),(0,o.kt)("p",null,"The Shimmer app is supported on Ledger Nano S/X via a USB connection."),(0,o.kt)("h4",{id:"do-i-need-to-install-the-ledger-app-on-my-computer-where-do-i-download-this"},"Do I need to install the Ledger app on my computer? Where do I download this?"),(0,o.kt)("p",null,"You can install the new Shimmer applications by downloading and installing Ledger Live. After ensuring your firmware is up-to-date, the Shimmer app can be installed to your Ledger device directly from Ledger Live in the Manager tab."),(0,o.kt)("h4",{id:"i-dont-have-my-original-ledger-usb-cable-anymore-will-this-be-a-problem"},"I don't have my original Ledger USB cable anymore. Will this be a problem?"),(0,o.kt)("p",null,"Most Micro-USB (for Nano S) and USB-C (for Nano X) cables should work. We do recommend using the original cable, though."),(0,o.kt)("h4",{id:"do-i-need-to-update-my-ledger-firmware-before-using-it-with-firefly"},"Do I need to update my Ledger firmware before using it with Firefly?"),(0,o.kt)("p",null,"Yes, the new application may not be visible in Ledger Live without the current firmware. Make sure you have the latest version of the app on your device."),(0,o.kt)("h4",{id:"i-dont-have-the-original-ledger-device-that-i-used-when-i-first-set-up-firefly-will-this-be-a-problem"},"I don't have the original Ledger device that I used when I first set up Firefly. Will this be a problem?"),(0,o.kt)("p",null,"The 24 words mnemonic (also known as the recovery phrase) and your Firefly account index (default 0) are all you need to regain access to your tokens on the Shimmer Tangle. The tokens are in no way connected to the hardware itself. You can set up a new device with the same recovery phrase to access your tokens."),(0,o.kt)("h4",{id:"i-have-run-out-of-space-to-install-more-applications-on-the-ledger-what-should-i-do"},"I have run out of space to install more applications on the Ledger. What should I do?"),(0,o.kt)("p",null,"If you're short on space, you may need to remove other cryptocurrency applications from your Ledger device temporarily. This will have no impact on the related cryptocurrencies. After reinstalling the apps, they will be available again. You should refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://support.ledger.com/hc/en-us/categories/4404369571601-Support?support=true"},"official Ledger support site")," if you need more help."),(0,o.kt)("h2",{id:"backups-and-recovery"},"Backups and recovery"),(0,o.kt)("h4",{id:"i-have-the-seed-words-recovery-phrase-but-dont-remember-the-password-what-can-i-do"},"I have the seed words (recovery phrase) but don't remember the password; what can I do?"),(0,o.kt)("p",null,"The recovery phrase works without a password or PIN. Just input the words at the wallet set up, using the ",(0,o.kt)("inlineCode",{parentName:"p"},"I have a text backup")," option."),(0,o.kt)("h4",{id:"why-should-i-do-regular-stronghold-backups"},"Why should I do regular Stronghold backups?"),(0,o.kt)("p",null,"Performing regular Stronghold backups will allow you to keep convenient, up-to-date digital backups should something happen, where you would then have a complete recovery of your funds."),(0,o.kt)("h4",{id:"what-is-an-internal-transfer-is-it-different-from-a-standard-transaction"},"What is an internal transfer? Is it different from a standard transaction?"),(0,o.kt)("p",null,"An internal transfer is the same as a standard transaction. It is just made between your own wallets; it is also handled entirely on the Tangle. It is easier to perform because you don't need to input the address."),(0,o.kt)("h4",{id:"i-have-forgotten-my-device-pin-how-do-i-recover-my-ledger"},"I have forgotten my device pin. How do I recover my Ledger?"),(0,o.kt)("p",null,"Should you forget the Ledger PIN, you can reset and restore the Ledger using the 24-word recovery phrase."),(0,o.kt)("h4",{id:"how-do-i-backup-my-ledger-transaction-history"},"How do I backup my Ledger transaction history?"),(0,o.kt)("p",null,"Backups of your transaction history for Ledger Nano users are not currently supported but will be added in a later version. Firefly will sync your available transaction history when a Ledger profile is restored. It may not find all transactions, but it will always find your balance. In a future version, we will add support for retrieving your full transaction history from a node that stores the complete history of the IOTA Tangle."),(0,o.kt)("h4",{id:"are-the-24-words-previously-found-in-the-ledger-and-are-now-in-firefly-for-the-same-seed"},"Are the 24 words previously found in the Ledger and are now in Firefly for the same seed?"),(0,o.kt)("p",null,"The 24 words mnemonic, also known as the recovery passphrase, work in Firefly as both reflect the BIP39 standard. Never enter your recovery phrase anywhere other than your Ledger is strongly recommended. This defeats the security benefits of having a Ledger."),(0,o.kt)("h4",{id:"can-i-save-a-stronghold-backup-in-firefly-for-a-ledger-profile-if-yes-does-this-contain-my-ledger-seed"},"Can I save a Stronghold backup in Firefly for a Ledger Profile? If yes, does this contain my Ledger Seed?"),(0,o.kt)("p",null,"Strongholds are not used for Ledger profiles in Firefly."),(0,o.kt)("h4",{id:"can-i-put-my-24-words-from-the-ledger-into-firefly-to-seeuse-my-funds-with-firefly"},"Can I put my 24 words from the Ledger into Firefly to see/use my funds with Firefly?"),(0,o.kt)("p",null,"You can, but it is not recommended because it circumvents the hardware wallet security model entirely and is therefore strongly advised against it!"),(0,o.kt)("h2",{id:"profiles-and-wallets"},"Profiles and wallets"),(0,o.kt)("h4",{id:"what-are-profiles-in-firefly"},"What are profiles in Firefly?"),(0,o.kt)("p",null,"Profiles in Firefly are representations of your Shimmer seed and contain all of your balances on different wallets. They also include general information such as your language and currency preferences and system notifications."),(0,o.kt)("h4",{id:"what-are-wallets-in-firefly"},"What are wallets in Firefly?"),(0,o.kt)("p",null,"Wallets in Firefly are like a bank account and a personalized stock portfolio all in one. And in that sense, wallets always belong to a specific profile of your Firefly application. You can view your wallet balance and transactions, send and receive funds instantly, measure your wallet and token value over time, and check your wallet activity by month."),(0,o.kt)("h4",{id:"can-i-change-profile-names-after-i-create-the-profile"},"Can I change profile names after I create the profile?"),(0,o.kt)("p",null,"No, you cannot change a profile name after creating a profile just yet. But you can add a profile with your preferred name and populate it near-instantly with your preferred wallet(s), security, and other such information."),(0,o.kt)("h4",{id:"can-i-change-wallet-names-after-i-create-the-account"},"Can I change wallet names after I create the account?"),(0,o.kt)("p",null,"Yes. You can change your wallet name by clicking on the ellipses (three dots in a row) next to your wallet balance, giving you the ",(0,o.kt)("inlineCode",{parentName:"p"},"Customise wallet")," option. There, you can change the name of the wallet you are currently in."),(0,o.kt)("h4",{id:"what-is-resync-wallet-why-do-i-need-it-and-what-happens-when-i-resync-my-wallet"},"What is ",(0,o.kt)("inlineCode",{parentName:"h4"},"resync wallet"),"? Why do I need it, and what happens when I resync my wallet?"),(0,o.kt)("p",null,"Resyncing your wallet starts a background task that makes sure all of your wallets are up to date; you would need it to ensure your wallet is correct so you can conduct the everyday functions of Firefly without issues."),(0,o.kt)("h4",{id:"i-want-to-delete-a-wallet-what-happens-to-the-funds-in-that-wallet"},"I want to delete a wallet; what happens to the funds in that wallet?"),(0,o.kt)("p",null,"Wallets can only be deleted after your funds have been moved out of your wallet. So, you would need to send your funds from that wallet to another address."),(0,o.kt)("p",null,"However, an empty 0 balance profile can be deleted."),(0,o.kt)("h4",{id:"i-want-to-delete-a-profile-what-happens-to-the-funds-in-that-profile"},"I want to delete a profile; what happens to the funds in that profile?"),(0,o.kt)("p",null,"If you want to delete a profile, it is recommended that you first transfer your funds to a different profile. You need to make sure you have a backup for all of your wallets. If you delete a profile without a backup or recovery phrase, you will lose access to your Shimmer!"),(0,o.kt)("h4",{id:"why-do-i-need-to-confirm-the-receiving-address-against-one-displayed-on-my-ledger-device"},"Why do I need to confirm the receiving address against one displayed on my Ledger device?"),(0,o.kt)("p",null,"This function is in place to confirm that the receiving address hasn't been manipulated by malicious software or by a man-in-the-middle attack. Make sure you always double-check it matches what is displayed on your device."),(0,o.kt)("h4",{id:"can-i-have-a-ledger-wallet-under-my-standard-firefly-profile-or-do-i-need-to-set-up-an-entirely-new-profile-for-ledger"},"Can I have a Ledger wallet under my standard Firefly profile, or do I need to set up an entirely new profile for Ledger?"),(0,o.kt)("p",null,"Every seed and Ledger has its own profile in Firefly. You need to create a new Firefly profile for every Ledger device you own."),(0,o.kt)("h4",{id:"how-can-i-easily-switch-from-one-profile-to-another-do-i-need-to-sign-out-each-time"},"How can I easily switch from one profile to another? Do I need to sign out each time?"),(0,o.kt)("p",null,"It is possible to change profiles. And yes, it is necessary to log out from one profile and log in to another with your PIN."),(0,o.kt)("h4",{id:"is-it-a-bad-idea-to-use-the-same-pin-for-firefly-as-i-do-for-my-ledger-device"},"Is it a bad idea to use the same PIN for Firefly as I do for my Ledger device?"),(0,o.kt)("p",null,"Yes! As with websites, where security experts generally recommend that you use strong and unique passwords for each of your accounts, it is recommended to use unique PINs for Firefly and the Ledger device."),(0,o.kt)("h4",{id:"where-are-my-tokens-located-exactly-if-they-are-not-on-my-ledger-device-nor-on-my-computer"},"Where are my tokens located exactly if they are not on my Ledger device nor on my computer?"),(0,o.kt)("p",null,'Since the Tangle is a distributed ledger, no one actually "holds" Shimmer tokens in their wallet. The wallet controls the private keys.'),(0,o.kt)("p",null,"A private key is like a secret passcode needed to transfer ownership of Shimmer tokens on the Tangle. The private keys give the power to alter the Tangle record by authorizing an ownership transfer from one address to another. That transaction gets recorded in the Tangle."),(0,o.kt)("p",null,"To go deeper, Shimmer tokens are, at their root, numbers: amounts assigned to Shimmer addresses. For every private key, there are one or more public keys (which are translated into Shimmer addresses)."),(0,o.kt)("p",null,'The private key belonging to that corresponding public key is the secret code needed to "spend" Shimmer tokens.'),(0,o.kt)("p",null,"You can think of the Firefly wallet as a password manager. Password managers store and secure the secret passwords you need to access websites, rather than the content of the websites themselves."),(0,o.kt)("p",null,"In this way, your Firefly wallet is essentially a key manager!"),(0,o.kt)("p",null,"Your private keys are stored on the Ledger device for and can never be extracted."),(0,o.kt)("h2",{id:"transactions"},"Transactions"),(0,o.kt)("h4",{id:"can-i-use-my-own-node-to-process-my-transaction"},"Can I use my own node to process my transaction?"),(0,o.kt)("p",null,"Yes. You can use your own node to process your transaction if it is accessible over HTTPS."),(0,o.kt)("h4",{id:"i-accidentally-sent-funds-to-the-wrong-address-can-i-get-them-back"},"I accidentally sent funds to the wrong address. Can I get them back?"),(0,o.kt)("p",null,"There is no way to recover funds accidentally sent to the wrong address."),(0,o.kt)("h4",{id:"how-can-i-send-data-transactions-with-firefly"},"How can I send data transactions with Firefly?"),(0,o.kt)("p",null,"You cannot send data transactions with Firefly at this point in time."),(0,o.kt)("h4",{id:"where-can-i-see-my-transaction-history"},"Where can I see my transaction history?"),(0,o.kt)("p",null,"Your transaction history is broken down within your wallets. When you select ",(0,o.kt)("inlineCode",{parentName:"p"},"Wallets")," from your dashboard, you will see a column with all of the transactions you made within the respective wallet."),(0,o.kt)("p",null,"Additionally, there is an extra function, ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet history"),", found in the ellipses (three dots) next to the ",(0,o.kt)("inlineCode",{parentName:"p"},"wallet balance")," of your wallet page."),(0,o.kt)("h4",{id:"how-do-i-find-a-specific-transaction-that-i-did-sendreceive-i-only-know-the-day-when-it-happened-is-there-a-search-function"},"How do I find a specific transaction that I did send/receive; I only know the day when it happened. Is there a search function?"),(0,o.kt)("p",null,"There is no search function in Firefly."),(0,o.kt)("h4",{id:"what-is-a-deep-link-and-how-do-i-use-it"},"What is a deep link, and how do I use it?"),(0,o.kt)("p",null,"Deep links automatically fill transaction data in Firefly when you click on an ",(0,o.kt)("inlineCode",{parentName:"p"},"shimmer://")," link."),(0,o.kt)("h4",{id:"can-i-have-a-fixed-receive-address"},"Can I have a fixed receive address?"),(0,o.kt)("p",null,"Yes, you can have a fixed receive address. Simply copy an address from Firefly and store it somewhere. You can safely receive to an address as much as you like, but it is recommended to use new addresses for better privacy."),(0,o.kt)("h4",{id:"why-do-i-need-to-confirm-my-transaction-on-the-ledger-device-against-the-one-displayed-in-firefly"},"Why do I need to confirm my transaction on the Ledger device against the one displayed in Firefly?"),(0,o.kt)("p",null,"The Ledger Nano S/X shows you the transaction details before asking you to confirm. It then signs the transaction."),(0,o.kt)("p",null,"The addresses and values must exactly match those displayed by Firefly. This is to prevent man-in-the-middle attacks."),(0,o.kt)("p",null,"You should thoroughly verify them before confirming the transaction."),(0,o.kt)("h2",{id:"settings"},"Settings"),(0,o.kt)("h4",{id:"where-can-i-change-my-pin-and-password"},"Where can I change my PIN and password?"),(0,o.kt)("p",null,"You can change both your PIN and password under ",(0,o.kt)("inlineCode",{parentName:"p"},"Security")," found in the settings of your dashboard."),(0,o.kt)("h4",{id:"can-i-reuse-an-address-i-know-that-this-was-always-a-problem-in-trinity"},"Can I reuse an address? I know that this was always a problem in Trinity."),(0,o.kt)("p",null,"You can reuse an address in Firefly due to the EdDSA reusable address format."),(0,o.kt)("h4",{id:"can-i-create-nfts-or-other-digital-assets-in-firefly"},"Can I create NFTs or other digital assets in Firefly?"),(0,o.kt)("p",null,"You cannot create NFTs or other digital assets in Firefly at this time."),(0,o.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,o.kt)("h4",{id:"how-do-i-recover-a-pin-code"},"How do I recover a PIN code?"),(0,o.kt)("p",null,"If you have lost your PIN, you need to create the profile again from a backup (recovery phrase or a Stronghold file) to re-access the profile. Later, you will create a new profile with a new PIN."),(0,o.kt)("h4",{id:"i-have-my-backup-file-but-dont-remember-the-password-how-can-i-recover-my-funds"},"I have my backup file but don't remember the password. How can I recover my funds?"),(0,o.kt)("p",null,"Without the password, you will not be able to recover your funds using the backup file. It is possible to access your funds using the recovery phrase and to set up a new profile in Firefly. However, your Firefly settings and history are lost by doing so."),(0,o.kt)("h4",{id:"i-received-an-error-what-can-i-do"},"I received an error: what can I do?"),(0,o.kt)("p",null,"You can report to this GitHub page for any issues or errors: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/firefly/issues"},"https://github.com/iotaledger/firefly/issues"),"."),(0,o.kt)("h4",{id:"i-received-an-error-client-error---what-does-it-mean-and-what-can-i-do"},"I received an error: ",(0,o.kt)("inlineCode",{parentName:"h4"},"client error: { }"),". What does it mean, and what can I do?"),(0,o.kt)("p",null,"You can report to this GitHub page with any issues or errors: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/firefly/issues"},"https://github.com/iotaledger/firefly/issues"),"."),(0,o.kt)("h4",{id:"i-received-the-operation-timed-out-error-message-what-does-it-mean-and-how-can-i-solve-it"},"I received the ",(0,o.kt)("inlineCode",{parentName:"h4"},"operation timed out")," error message. What does it mean, and how can I solve it?"),(0,o.kt)("p",null,"You can report any issues or errors to this GitHub page: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/firefly/issues"},"https://github.com/iotaledger/firefly/issues"),"."),(0,o.kt)("h4",{id:"for-those-with-more-than-one-seed-can-we-replicate-this-process-with-every-seed-we-have-or-do-we-need-to-transfer-all-tokens-to-one-seed-to-migrate-to-the-new-network"},"For those with more than one seed, can we replicate this process with every seed we have? Or do we need to transfer all tokens to one seed to migrate to the new network?"),(0,o.kt)("p",null,"You can import multiple seeds in Firefly. But this process must be replicated for every seed you own. Each seed will be imported into a new profile."),(0,o.kt)("h4",{id:"can-i-buy-shimmer-directly-in-firefly"},"Can I buy Shimmer directly in Firefly?"),(0,o.kt)("p",null,"You cannot buy Shimmer directly in Firefly at this time. You can visit the Shimmer website for more information about buying Shimmer from an exchange."),(0,o.kt)("h4",{id:"why-wont-firefly-connect-with-my-ledger-also-my-shimmer-application-always-closes-after-a-couple-of-seconds-after-opening-it-why-is-this"},"Why won't Firefly connect with my Ledger? Also, My Shimmer application always closes after a couple of seconds after opening it. Why is this?"),(0,o.kt)("p",null,"If your Ledger is already connected and unlocked, ensure that you have closed the official Ledger Live application or browser plug-ins that might use the Ledger (e.g. MetaMask). Then make sure Ledger Live is not running silently in the background. Firefly cannot communicate with Ledger hardware if the Ledger Live software is open simultaneously. Firefly also provides a guide during setup to help with connection issues, and you can read the official Ledger guide here."),(0,o.kt)("h4",{id:"finding-balances-keeps-stalling-why-is-this"},"Finding balances keeps stalling. Why is this?"),(0,o.kt)("p",null,"If your Ledger device does not show ",(0,o.kt)("inlineCode",{parentName:"p"},"Generating address\u2026")," while finding balances, then try disconnecting and reconnecting the device in rare cases where you used an old version of the legacy app. You may need to uninstall and reinstall the legacy app. Return to Ledger Live, reinstall this application on your Ledger device and try again."),(0,o.kt)("h4",{id:"why-does-my-balance-keep-showing-zero"},"Why does my balance keep showing zero?"),(0,o.kt)("p",null,"Firstly, you can try ",(0,o.kt)("inlineCode",{parentName:"p"},"Check Again")," to search for more addresses with balance."),(0,o.kt)("p",null,"If your balance continues to display 0, you may have selected the wrong account index number. The default account index number is 0, but it is possible to change this from 0-2147483647. If this was changed during your Trinity Ledger setup, you might wish to try alternative account indexes to reveal your funds."),(0,o.kt)("h4",{id:"what-happens-if-my-computer-falls-asleep-or-restarts-during-the-migration-process"},"What happens if my computer falls asleep or restarts during the migration process?"),(0,o.kt)("p",null,"First, check if the migration is still in progress. If it is, then it should be complete on its own. Alternatively, you can check if you have a profile for that migration as it may have already been completed. If there are no profiles associated with the migration, you can simply create a new profile to start the migration again. If there is a profile, but the full set of migration transactions are not there, go to Advanced Settings and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Migrate Another Index.")," You can continue where you left off by choosing the same account index and searching for more balance."))}c.isMDXComponent=!0}}]);