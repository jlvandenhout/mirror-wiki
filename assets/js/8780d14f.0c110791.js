"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[76411],{86656:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return p}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],s={image:"/img/integration-services/logo/integration_services.png",description:"The example-6 script creates 2 identities, and later uses them to demonstrate how to authorize channel subscriptions, subscribe to a channel and read from channels.",keywords:["channels","authorize channel","subscribe channel","read channel"]},l="Authorize Channel",c={unversionedId:"examples/authorize-to-channel",id:"examples/authorize-to-channel",title:"Authorize Channel",description:"The example-6 script creates 2 identities, and later uses them to demonstrate how to authorize channel subscriptions, subscribe to a channel and read from channels.",source:"@site/content/build/integration-services/production/documentation/docs/examples/authorize-to-channel.md",sourceDirName:"examples",slug:"/examples/authorize-to-channel",permalink:"/integration-services/examples/authorize-to-channel",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/examples/authorize-to-channel.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"The example-6 script creates 2 identities, and later uses them to demonstrate how to authorize channel subscriptions, subscribe to a channel and read from channels.",keywords:["channels","authorize channel","subscribe channel","read channel"]},sidebar:"docs",previous:{title:"Create Channel",permalink:"/integration-services/examples/create-channel"},next:{title:"Search Channel and Validate Data",permalink:"/integration-services/examples/search-channel-and-validate-data"}},u={},p=[{value:"Subscribe to a Channel",id:"subscribe-to-a-channel",level:2},{value:"Authorize a Subscription",id:"authorize-a-subscription",level:2},{value:"Write to a Channel",id:"write-to-a-channel",level:2},{value:"Read from a Channel",id:"read-from-a-channel",level:2}],h={toc:p};function d(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"authorize-channel"},"Authorize Channel"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/integration-services/blob/master/clients/node/examples/6-AuthorizeToChannel.ts"},"example-6"),"\nscript performs the following tasks:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create two identities: ",(0,i.kt)("inlineCode",{parentName:"li"},"Owner")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"User"),"."),(0,i.kt)("li",{parentName:"ol"},"Authorize each identity against Integration Services API using different clients."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Owner")," creates a channel and writes data on it."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"User")," tries to read from said channel, but fails because ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," does not have access."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"User")," requests to subscribe to the channel."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Owner")," finds an unapproved subscription, and approves it."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"User")," sends data to the channel."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Owner")," is able to read the second message sent by ",(0,i.kt)("inlineCode",{parentName:"li"},"User")," from that channel.")),(0,i.kt)("p",null,"You can run the example with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm run example-6\n")),(0,i.kt)("h2",{id:"subscribe-to-a-channel"},"Subscribe to a Channel"),(0,i.kt)("p",null,"In the example the ",(0,i.kt)("inlineCode",{parentName:"p"},"userClient")," tries to read from a channel while it did not have read/write permissions. This will raise an exception. The correct way is to first request subscription as shown in the following script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Request subscription to the channel as the user. The returned subscriptionLink can be used to authorize the user to the channel.\nconst { subscriptionLink } = await userClient.requestSubscription(channelAddress, {\n    accessRights: AccessRights.ReadAndWrite\n});\n")),(0,i.kt)("h2",{id:"authorize-a-subscription"},"Authorize a Subscription"),(0,i.kt)("p",null,"In order to allow ",(0,i.kt)("inlineCode",{parentName:"p"},"userClient")," to read and write on that channel, its subscription needs to be authorized as shown in the following script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'// Find subscriptions to the channel that are not already authorized.\nconst subscriptions = await ownerClient.findAllSubscriptions(channelAddress, false);\n\nconst unauthorizedSubscriptions = subscriptions.filter(subscription => !subscription.isAuthorized)\n\nfor (const subscription of unauthorizedSubscriptions) {\n    // Authorize the user to the channel. \n    // Authorization can happen via the id of the user or the generated subscription link.\n    const keyloadLink = await ownerClient.authorizeSubscription(channelAddress, {\n        id: channelUser.doc.id\n    });\n    console.log("Subscription Keyload Link:", keyloadLink)\n}\n')),(0,i.kt)("h2",{id:"write-to-a-channel"},"Write to a Channel"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"userClient")," can now write on a channel any JSON payload as using the following script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// Writing data to the channel as the channel owner.\nawait ownerClient.write(channelAddress, {\n    payload: { log: `This is log file 1` }\n});\n")),(0,i.kt)("h2",{id:"read-from-a-channel"},"Read from a Channel"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"userClient")," can now read from the channel successfully using the following script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const channelData = await userClient.read(channelAddress);\n")))}d.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),c=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(t),d=r,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return t?a.createElement(m,o(o({ref:n},u),{},{components:t})):a.createElement(m,o({ref:n},u))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=h;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"}}]);