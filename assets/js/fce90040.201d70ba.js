"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[44925],{94476:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return m}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),o=["components"],s={image:"/img/integration-services/logo/integration_services.png",description:"The example-3 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new identity, removes it from Integration Services, and verifies that the identity still exists on the Tangle.",keywords:["how to","delete users","retrieve identity from tangle","verify identity","example","manage identity","integration services backend"]},l="Delete Users",c={unversionedId:"examples/java/delete-users",id:"examples/java/delete-users",title:"Delete Users",description:"The example-3 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new identity, removes it from Integration Services, and verifies that the identity still exists on the Tangle.",source:"@site/content/build/integration-services/production/documentation/docs/examples/java/delete-users.md",sourceDirName:"examples/java",slug:"/examples/java/delete-users",permalink:"/integration-services/examples/java/delete-users",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/examples/java/delete-users.md",tags:[],version:"current",frontMatter:{image:"/img/integration-services/logo/integration_services.png",description:"The example-3 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new identity, removes it from Integration Services, and verifies that the identity still exists on the Tangle.",keywords:["how to","delete users","retrieve identity from tangle","verify identity","example","manage identity","integration services backend"]},sidebar:"docs",previous:{title:"Update Users",permalink:"/integration-services/examples/java/update-users"},next:{title:"Trusted Authorities",permalink:"/integration-services/examples/java/trusted-authorities"}},d={},m=[{value:"Remove User from Integration Services Database",id:"remove-user-from-integration-services-database",level:2},{value:"Get an Identity Directly from the Tangle",id:"get-an-identity-directly-from-the-tangle",level:2}],p={toc:m};function u(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"delete-users"},"Delete Users"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/albydeca/iota-is-sdk/blob/main/examples/src/main/java/net/gradbase/examples/DeleteUser.java"},"example-3"),"\nscript authenticates an Integration Service client to manage Identities using the Admin identity created in ",(0,i.kt)("a",{parentName:"p",href:"how-to-run-examples"},"example-0")," and then performs the following tasks:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Creates a new identity."),(0,i.kt)("li",{parentName:"ol"},"Removes it from Integration Services."),(0,i.kt)("li",{parentName:"ol"},"Verifies that the identity still exists on the Tangle.")),(0,i.kt)("p",null,"You can run the example with the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cd /path/to/examples/folder/\nmvn exec:java -Dexec.mainClass=net.gradbase.examples.DeleteUser\n")),(0,i.kt)("h2",{id:"remove-user-from-integration-services-database"},"Remove User from Integration Services Database"),(0,i.kt)("p",null,"You can remove an identity from the Integration Services backend by running the following script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"// Remove the user and also revoke the user's credentials\nidentityClient.remove(someIdentity.getId(), true);\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"You cannot delete an identity from the Tangle. You can only remove it from the Integration Services database."))),(0,i.kt)("h2",{id:"get-an-identity-directly-from-the-tangle"},"Get an Identity Directly from the Tangle"),(0,i.kt)("p",null,"You can retrieve an Identity from the Tangle by running the following script:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"JSONObject recoveredIdentity = identityClient.latestDocument(someIdentity.getId());\n")))}u.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,v=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return n?r.createElement(v,o(o({ref:t},d),{},{components:n})):r.createElement(v,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);