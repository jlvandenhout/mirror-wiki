"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[97187],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(a),c=r,g=m["".concat(o,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(g,s(s({ref:t},d),{},{components:a})):n.createElement(g,s({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var p=2;p<i;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},76298:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),r=(a(67294),a(3905));const i={title:"Signing",sidebar_label:"Signing"},s=void 0,l={unversionedId:"specs/didcomm/protocols/signing",id:"specs/didcomm/protocols/signing",title:"Signing",description:"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at GitHub #464.",source:"@site/next/external/identity.rs/0.7-alpha/documentation/docs/specs/didcomm/protocols/signing.md",sourceDirName:"specs/didcomm/protocols",slug:"/specs/didcomm/protocols/signing",permalink:"/next/identity.rs/specs/didcomm/protocols/signing",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/next/external/identity.rs/0.7-alpha/documentation/docs/specs/didcomm/protocols/signing.md",tags:[],version:"current",frontMatter:{title:"Signing",sidebar_label:"Signing"},sidebar:"docs",previous:{title:"Issuance",permalink:"/next/identity.rs/specs/didcomm/protocols/issuance"},next:{title:"Revocation",permalink:"/next/identity.rs/specs/didcomm/protocols/revocation"}},o={},p=[{value:"Overview",id:"overview",level:2},{value:"Relationships",id:"relationships",level:3},{value:"Example Use-Cases",id:"example-use-cases",level:3},{value:"Roles",id:"roles",level:3},{value:"Interaction",id:"interaction",level:3},{value:"Messages",id:"messages",level:2},{value:"1. signing-request",id:"signing-request",level:3},{value:"Structure",id:"structure",level:4},{value:"Examples",id:"examples",level:4},{value:"2. signing-response",id:"signing-response",level:3},{value:"Structure",id:"structure-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"3. signing-acknowledgement",id:"signing-acknowledgement",level:3},{value:"Structure",id:"structure-2",level:4},{value:"Examples",id:"examples-2",level:4},{value:"Problem Reports",id:"problem-reports",level:3},{value:"Unresolved Questions",id:"unresolved-questions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"Related Work",id:"related-work",level:2},{value:"Further Reading",id:"further-reading",level:2}],d={toc:p};function u(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The IOTA DIDComm Specification is in the RFC phase and may undergo changes. Suggestions are welcome at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/identity.rs/discussions/464"},"GitHub #464"),".")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Version: 0.1"),(0,r.kt)("li",{parentName:"ul"},"Status: ",(0,r.kt)("inlineCode",{parentName:"li"},"IN-PROGRESS")),(0,r.kt)("li",{parentName:"ul"},"Last Updated: 2021-10-29")),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Allows a trusted-party to request the signing of an unsigned verifiable credential by an issuer."),(0,r.kt)("h3",{id:"relationships"},"Relationships"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"./issuance"},"Issuance"),": an ",(0,r.kt)("a",{parentName:"li",href:"./issuance#roles"},"issuer")," may take on the role of ",(0,r.kt)("a",{parentName:"li",href:"#roles"},"trusted-party")," to request a different ",(0,r.kt)("a",{parentName:"li",href:"#roles"},"issuer")," to sign a new credential.")),(0,r.kt)("h3",{id:"example-use-cases"},"Example Use-Cases"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A separate department requests a signature by the legal department of a company."),(0,r.kt)("li",{parentName:"ul"},"A subsidiary requests the parent company to sign a credential."),(0,r.kt)("li",{parentName:"ul"},"An IOT device generates an unsigned credential and requests a secure server to sign it.")),(0,r.kt)("h3",{id:"roles"},"Roles"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Trusted-Party: trusted by the issuer to generate unsigned credentials asserting claims about one or more subjects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#dfn-issuers"},"Issuer"),": has the capability to cryptographically sign credentials.")),(0,r.kt)("h3",{id:"interaction"},"Interaction"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"SigningDiagram",src:a(46205).Z,width:"842",height:"842"})),(0,r.kt)("div",{style:{textAlign:"center"}},(0,r.kt)("sub",null,"For guidance on diagrams see the ",(0,r.kt)("a",{href:"../overview#diagrams"},"corresponding section in the overview"),".")),(0,r.kt)("h2",{id:"messages"},"Messages"),(0,r.kt)("h3",{id:"signing-request"},"1. signing-request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"iota/signing/0.1/signing-request")),(0,r.kt)("li",{parentName:"ul"},"Role: ",(0,r.kt)("a",{parentName:"li",href:"#roles"},"trusted-party"))),(0,r.kt)("p",null,"Request by a ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"trusted-party")," for an ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"issuer")," to sign a credential."),(0,r.kt)("p",null,"To authenticate the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"trusted-party"),", this SHOULD be sent using ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender authenticated encryption")," established in a preceding ",(0,r.kt)("a",{parentName:"p",href:"./authentication"},"authentication")," protocol. For non-repudiation or auditing, the ",(0,r.kt)("a",{parentName:"p",href:"#role"},"issuer")," MAY enforce that the ",(0,r.kt)("a",{parentName:"p",href:"#signing-request"},"signing-request")," be a ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm message"),"."),(0,r.kt)("h4",{id:"structure"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "unsignedCredential": Credential // REQUIRED\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#credentials"},(0,r.kt)("inlineCode",{parentName:"a"},"unsignedCredential"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Unsigned ",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#credentials"},"verifiable credential")," requested to be signed by the ",(0,r.kt)("a",{parentName:"td",href:"#roles"},"issuer"),".",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," The initial credential MUST NOT have a ",(0,r.kt)("inlineCode",{parentName:"p"},"proof")," section."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Request to sign a bachelors degree.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "unsignedCredential": {\n    "@context": [\n      "https://www.w3.org/2018/credentials/v1",\n      "https://www.w3.org/2018/credentials/examples/v1"\n    ],\n    "id": "6c1a1477-e452-4da7-b2db-65ad0b369d1a",\n    "type": ["VerifiableCredential", "UniversityDegreeCredential"],\n    "issuer": "did:example:76e12ec712ebc6f1c221ebfeb1f",\n    "issuanceDate": "2021-05-03T19:73:24Z",\n    "credentialSubject": {\n      "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",\n      "degree": {\n        "type": "BachelorDegree",\n        "name": "Bachelor of Science and Arts"\n      }\n    }\n  }\n}\n')),(0,r.kt)("h3",{id:"signing-response"},"2. signing-response"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"iota/signing/0.1/signing-response")),(0,r.kt)("li",{parentName:"ul"},"Role: ",(0,r.kt)("a",{parentName:"li",href:"#roles"},"issuer"))),(0,r.kt)("p",null,"Response from the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"issuer")," returning the signed credential back to the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"trusted-party"),"."),(0,r.kt)("h4",{id:"structure-1"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "signedCredential": Credential // REQUIRED\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#credentials"},(0,r.kt)("inlineCode",{parentName:"a"},"signedCredential"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Signed ",(0,r.kt)("a",{parentName:"td",href:"https://www.w3.org/TR/vc-data-model/#credentials"},"verifiable credential")," matching the ",(0,r.kt)("a",{parentName:"td",href:"#signing-request"},"signing-request"),".",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," The ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"trusted-party")," MUST validate the signature in the ",(0,r.kt)("inlineCode",{parentName:"p"},"proof")," section and issue a problem-report if invalid. The ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"trusted-party")," SHOULD also verify that the contents of the ",(0,r.kt)("inlineCode",{parentName:"p"},"signedCredential")," sent back by the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"issuer")," are complete and unaltered from the ",(0,r.kt)("a",{parentName:"p",href:"#signing-request"},"signing-request"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"issuer")," may request in turn that the credential be signed by a different issuer unknown to the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"trusted-party"),", by repeating this protocol or through alternative means. In such a case, it is up to the initial ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"trusted-party")," whether or not to accept the final signature if not signed by the initial ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"issuer")," they requested."),(0,r.kt)("h4",{id:"examples-1"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Respond with a signed a bachelors degree.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "signedCredential": {\n    "@context": [\n      "https://www.w3.org/2018/credentials/v1",\n      "https://www.w3.org/2018/credentials/examples/v1"\n    ],\n    "id": "6c1a1477-e452-4da7-b2db-65ad0b369d1a",\n    "type": ["VerifiableCredential", "UniversityDegreeCredential"],\n    "issuer": "did:example:76e12ec712ebc6f1c221ebfeb1f",\n    "issuanceDate": "2021-05-03T19:73:24Z",\n    "credentialSubject": {\n      "id": "did:example:ebfeb1f712ebc6f1c276e12ec21",\n      "degree": {\n        "type": "BachelorDegree",\n        "name": "Bachelor of Science and Arts"\n      }\n    },\n    "proof": {...}\n  }\n}\n')),(0,r.kt)("h3",{id:"signing-acknowledgement"},"3. signing-acknowledgement"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Type: ",(0,r.kt)("inlineCode",{parentName:"li"},"iota/signing/0.1/signing-acknowledgement")),(0,r.kt)("li",{parentName:"ul"},"Role: ",(0,r.kt)("a",{parentName:"li",href:"#roles"},"trusted-party"))),(0,r.kt)("p",null,"Acknowledgement by the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"trusted-party")," that the credential was received and accepted. The ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"issuer")," MAY revoke the credential if no acknowledgement is received. For auditing or non-repudiation the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"issuer")," MAY require that the ",(0,r.kt)("a",{parentName:"p",href:"#signing-acknowledgement"},"signing-acknowledgement")," be a ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/didcomm-messaging/spec/#didcomm-signed-message"},"signed DIDComm message"),"."),(0,r.kt)("h4",{id:"structure-2"},"Structure"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accepted": bool // REQUIRED\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"accepted")),(0,r.kt)("td",{parentName:"tr",align:"left"},"Indicates that the ",(0,r.kt)("inlineCode",{parentName:"td"},"signedCredential")," was received and validated by the ",(0,r.kt)("a",{parentName:"td",href:"#roles"},"trusted-party"),".",(0,r.kt)("sup",{parentName:"td",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"\u2714")))),(0,r.kt)("p",null,(0,r.kt)("sup",{parentName:"p",id:"fnref-1"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"accepted")," MUST be ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". Invalid signatures or credentials SHOULD result in problem-reports by the ",(0,r.kt)("a",{parentName:"p",href:"#roles"},"trusted-party"),"."),(0,r.kt)("h4",{id:"examples-2"},"Examples"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Accept the credential.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "accepted": true\n}\n')),(0,r.kt)("h3",{id:"problem-reports"},"Problem Reports"),(0,r.kt)("p",null,"The following problem-report codes may be raised in the course of this protocol and are expected to be recognised and handled in addition to any general problem-reports. Implementers may also introduce their own application-specific problem-reports."),(0,r.kt)("p",null,"For guidance on problem-reports and a list of general codes see ",(0,r.kt)("a",{parentName:"p",href:"../resources/problem-reports"},"problem reports"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Code"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Message"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"e.p.msg.iota.signing.reject-request")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#signing-request"},"signing-request")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("a",{parentName:"td",href:"#roles"},"issuer")," rejects a signing request for any reason, e.g. malformed credential, unrecognised credential type, or unwillingness to sign the specific credential for the ",(0,r.kt)("a",{parentName:"td",href:"#roles"},"trusted-party"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"e.p.msg.iota.signing.reject-response")),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("a",{parentName:"td",href:"#signing-response"},"signing-response")),(0,r.kt)("td",{parentName:"tr",align:"left"},"The ",(0,r.kt)("a",{parentName:"td",href:"#roles"},"trusted-party")," rejects a signing response for any reason, e.g. mismatch between request and response credentials.")))),(0,r.kt)("h2",{id:"unresolved-questions"},"Unresolved Questions"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using a signed DIDComm message for auditing requires retaining the entire message including the credential itself. While this may be desired or required for some purposes, it could complicate or violate GDPR laws. Should an explicit signature of the credential hash be used instead, similar to the ",(0,r.kt)("a",{parentName:"li",href:"./issuance"},"issuance")," protocol?")),(0,r.kt)("h2",{id:"considerations"},"Considerations"),(0,r.kt)("p",null,"This section is non-normative."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Security"),": implementors SHOULD transmit credentials over an encrypted channel to prevent leaking sensitive information on subjects. See ",(0,r.kt)("a",{parentName:"li",href:"https://identity.foundation/didcomm-messaging/spec/#sender-authenticated-encryption"},"sender-authenticated encryption"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Authentication"),": it is RECOMMENDED to use sender-authenticated encryption for continuous authentication of both parties in the DIDComm thread. Anonymous encryption and/or once-off authentication may be insufficient."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Authorisation"),": the ",(0,r.kt)("a",{parentName:"li",href:"#roles"},"issuer")," should establish whether a trusted-party is allowed to request signing of a particular credential or at all."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Validation"),": apart from verifying the proof on the signed credential returned in the ",(0,r.kt)("a",{parentName:"li",href:"#signing-response"},"signing-response"),", how the ",(0,r.kt)("a",{parentName:"li",href:"#roles"},"issuer")," validates the contents of a well-formed credential from a ",(0,r.kt)("a",{parentName:"li",href:"#roles"},"trusted-party")," and chooses whether or not to sign it is out-of-scope.")),(0,r.kt)("h2",{id:"related-work"},"Related Work"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Aries Hyperledger: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/hyperledger/aries-rfcs/tree/08653f21a489bf4717b54e4d7fd2d0bdfe6b4d1a/features/0327-crypto-service"},"https://github.com/hyperledger/aries-rfcs/tree/08653f21a489bf4717b54e4d7fd2d0bdfe6b4d1a/features/0327-crypto-service"))),(0,r.kt)("h2",{id:"further-reading"},"Further Reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model"},"Verifiable Credentials Data Model 1.0"))))}u.isMDXComponent=!0},46205:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/signing.drawio-edb7117dda468a64d9643d48f0c0c368.svg"}}]);