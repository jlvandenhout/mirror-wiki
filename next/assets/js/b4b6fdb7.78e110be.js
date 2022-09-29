"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[44758],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>u});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(t),u=a,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||o;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},36395:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(87462),a=(t(67294),t(3905));const o={description:"Code guidelines on how to contribute to the GoShimmer project.",image:"/img/logo/goshimmer_light.png",keywords:["error","function call","stack trace","assign error","explicit constant","sentinel error","3rd party libs"]},i="Code Guidelines",l={unversionedId:"teamresources/guidelines",id:"teamresources/guidelines",title:"Code Guidelines",description:"Code guidelines on how to contribute to the GoShimmer project.",source:"@site/next/external/goshimmer/documentation/docs/teamresources/guidelines.md",sourceDirName:"teamresources",slug:"/teamresources/guidelines",permalink:"/next/goshimmer/teamresources/guidelines",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/next/external/goshimmer/documentation/docs/teamresources/guidelines.md",tags:[],version:"current",frontMatter:{description:"Code guidelines on how to contribute to the GoShimmer project.",image:"/img/logo/goshimmer_light.png",keywords:["error","function call","stack trace","assign error","explicit constant","sentinel error","3rd party libs"]},sidebar:"docs",previous:{title:"How to Do a Release",permalink:"/next/goshimmer/teamresources/release"},next:{title:"golangci-lint",permalink:"/next/goshimmer/teamresources/local_development"}},s={},c=[{value:"General Guidelines",id:"general-guidelines",level:2},{value:"Error Handling",id:"error-handling",level:2}],d={toc:c};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"code-guidelines"},"Code Guidelines"),(0,a.kt)("h2",{id:"general-guidelines"},"General Guidelines"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Don\u2019t use ",(0,a.kt)("inlineCode",{parentName:"li"},"log.Fatal()")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"os.Exit()")," outside of the main. It immediately terminates the program and all defers are ignored and no graceful shutdown is possible. It can lead to inconsistencies. Propagate the error up to the main and let the main function exit instead. Avoid panics as well, almost always use errors. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer/blob/f75ce47eeaa3bf930b368754ac24b72f768a5964/plugins/autopeering/autopeering.go#L135"},"Example"),"."),(0,a.kt)("li",{parentName:"ul"},"Don\u2019t duplicate code, reuse it. In tests too. Example: ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer/blob/f75ce47eeaa3bf930b368754ac24b72f768a5964/packages/ledgerstate/conflict_dag.go#L969"},"duplicate1")," and ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer/blob/f75ce47eeaa3bf930b368754ac24b72f768a5964/packages/ledgerstate/conflict_dag.go#L1053"},"duplicate2")),(0,a.kt)("li",{parentName:"ul"},"Unhandled errors can cause bugs and make it harder to diagnose problems. Try to handle all errors: propagate them to the caller or log them. Even if the function call is used with a defer, and it\u2019s inconvenient to handle the error it returns, still handle it. Wrap the function call in an anonymous function assign error to the upper error  like that:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'    defer func() {\n        cerr := f.Close()\n        if err == nil {\n            err = errors.Wrap(cerr, "failed to close file")\n        }\n    }()\n')),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Wrap errors with ",(0,a.kt)("inlineCode",{parentName:"li"},"errors.Wrap()")," when returning them to the caller. It adds the stack trace and a custom block to the error. Without that information investigating an issue is very hard."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"errors.Is()")," instead of direct errors comparison. This function unwraps errors recursively. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer/pull/1113/files#diff-05fdc081489a8d5a61224d812f9bbd7bc77edf9769ed00d95ea024d2a44a699aL62"},"Example"),"."),(0,a.kt)("li",{parentName:"ul"},"Propagate ",(0,a.kt)("inlineCode",{parentName:"li"},"ctx")," and use APIs that accept ",(0,a.kt)("inlineCode",{parentName:"li"},"ctx"),", start exposing APIs that accept ",(0,a.kt)("inlineCode",{parentName:"li"},"ctx"),". Context is a native way for timeouts/cancellation in Go. It allows writing more resilient and fault tolerant code. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer/pull/1113/files#diff-f2820ed0d3d4d9ea05b78b1dd3978dbcf9401c8caaa8cc40cc1c0342a55379fcL35"},"Example"),"."),(0,a.kt)("li",{parentName:"ul"},"Don\u2019t shadow builtin functions like copy, len, new etc. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer/pull/1113/files#diff-f07268750a44da26386469c1b1e93574a678c3d418fce9e1f186d5f1991a92eaL14"},"Example"),"."),(0,a.kt)("li",{parentName:"ul"},"Don\u2019t shadow imported packages. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer/blob/f75ce47eeaa3bf930b368754ac24b72f768a5964/plugins/webapi/value/sendtransactionbyjson.go#L172"},"Example"),"."),(0,a.kt)("li",{parentName:"ul"},"Don\u2019t do ",(0,a.kt)("inlineCode",{parentName:"li"},"[:]")," on a slice. It has no effect. ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/goshimmer/pull/1113/files#diff-299a1ac5fa09739ea07b7c806ee2785d83eea110f8af143dbc853a25e4819116L133"},"Example"),"."),(0,a.kt)("li",{parentName:"ul"},"Avoid naked returns if the function isn\u2019t very small. It makes the code more readable."),(0,a.kt)("li",{parentName:"ul"},"Define explicit constants for strings that are used 3 times or more. It makes the code more maintainable."),(0,a.kt)("li",{parentName:"ul"},"Define explicit constants for all numbers. It makes the code more readable."),(0,a.kt)("li",{parentName:"ul"},"Don\u2019t write really long and complex functions. Split them into smaller ones."),(0,a.kt)("li",{parentName:"ul"},"Treat comments as regular text/documentation. Start with a capital letter, set space after ",(0,a.kt)("inlineCode",{parentName:"li"},"//")," and end them with a dot. It\u2019s a good habit since Go package docs are generated automatically from the comments and displayed on the godoc site.")),(0,a.kt)("h2",{id:"error-handling"},"Error Handling"),(0,a.kt)("p",null,'We use the new error wrapping API and behavior introduced with Go 1.13 but we use the "github.com/cockroachdb/errors" drop-in replacement which follows the Go 2 design draft and which enables us to have a stack trace for every "wrapping" of the error.'),(0,a.kt)("p",null,"Errors should always be wrapped and annotated with an additional block at each step. The following example shows how errors are wrapped and turned into the corresponding sentinel errors."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'package example\n\nimport (\n    "3rdPartyLibrary"\n\n    "github.com/cockroachdb/errors"\n)\n\n// define error variables to make errors identifiable (sentinel errors)\nvar ErrSentinel = errors.New("identifiable error")\n\n// turn anonymous 3rd party errors into identifiable ones\nfunc SentinelErrFrom3rdParty() (result interface{}, err error)\n    if result, err = 3rdPartyLibrary.DoSomething(); err != nil {\n        err = errors.Errorf("failed to do something (%v): %w", err, ErrSentinel)\n        return\n    }\n\n    return\n}\n\n// wrap recursive errors at each step\nfunc WrappedErrFromInternalCall() error {\n    return errors.Errorf("wrapped internal error: %w", SentinelErrFrom3rdParty())\n}\n\n// create "new" identifiable internal errors that are not originating in 3rd party libs\nfunc ErrFromInternalCall() error {\n    return errors.Errorf("internal error: %w", ErrSentinel)\n}\n\n// main function\nfunc main() {\n    err1 := WrappedErrFromInternalCall()\n    if errors.Is(err1, ErrSentinel) {\n        fmt.Printf("%v\\n", err1)\n    }\n\n    err2 := ErrFromInternalCall()\n    if errors.Is(err2 , ErrSentinel) {\n        fmt.Printf("%v\\n", err2 )\n    }\n}\n')))}m.isMDXComponent=!0}}]);