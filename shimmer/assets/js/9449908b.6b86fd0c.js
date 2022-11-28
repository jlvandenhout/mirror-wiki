"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[93029],{3905:(t,e,a)=>{a.d(e,{Zo:()=>u,kt:()=>k});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),m=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=m(t.components);return n.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),s=m(a),k=l,g=s["".concat(o,".").concat(k)]||s[k]||d[k]||r;return a?n.createElement(g,i(i({ref:e},u),{},{components:a})):n.createElement(g,i({ref:e},u))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=s;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var m=2;m<r;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},42875:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>p,toc:()=>m});var n=a(87462),l=(a(67294),a(3905));const r={description:"This section describes the configuration parameters and their types for INX-Spammer.",keywords:["IOTA Node","Hornet Node","Spammer","Configuration","JSON","Customize","Config","reference"]},i="Core Configuration",p={unversionedId:"configuration",id:"configuration",title:"Core Configuration",description:"This section describes the configuration parameters and their types for INX-Spammer.",source:"@site/shimmer/external/inx-spammer/documentation/docs/configuration.md",sourceDirName:".",slug:"/configuration",permalink:"/shimmer/inx-spammer/configuration",draft:!1,editUrl:"https://github.com/iotaledger/inx-spammer/edit/develop/documentation/shimmer/external/inx-spammer/documentation/docs/configuration.md",tags:[],version:"current",frontMatter:{description:"This section describes the configuration parameters and their types for INX-Spammer.",keywords:["IOTA Node","Hornet Node","Spammer","Configuration","JSON","Customize","Config","reference"]},sidebar:"mySidebar",previous:{title:"Welcome to INX-Spammer",permalink:"/shimmer/inx-spammer/welcome"}},o={},m=[{value:'<a id="app"></a> 1. Application',id:"-1-application",level:2},{value:'<a id="app_shutdown"></a> Shutdown',id:"-shutdown",level:3},{value:'<a id="app_shutdown_log"></a> Log',id:"-log",level:3},{value:'<a id="logger"></a> 2. Logger',id:"-2-logger",level:2},{value:'<a id="inx"></a> 3. INX',id:"-3-inx",level:2},{value:'<a id="pow"></a> 4. Pow',id:"-4-pow",level:2},{value:'<a id="restapi"></a> 5. RestAPI',id:"-5-restapi",level:2},{value:'<a id="spammer"></a> 6. Spammer',id:"-6-spammer",level:2},{value:'<a id="spammer_valuespam"></a> Value Spam',id:"-value-spam",level:3},{value:'<a id="spammer_tipselection"></a> Tipselection',id:"-tipselection",level:3},{value:'<a id="profiling"></a> 7. Profiling',id:"-7-profiling",level:2},{value:'<a id="prometheus"></a> 8. Prometheus',id:"-8-prometheus",level:2}],u={toc:m};function d(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"core-configuration"},"Core Configuration"),(0,l.kt)("p",null,"INX-Spammer uses a JSON standard format as a config file. If you are unsure about JSON syntax, you can find more information in the ",(0,l.kt)("a",{parentName:"p",href:"https://www.json.org"},"official JSON specs"),"."),(0,l.kt)("p",null,"You can change the path of the config file by using the ",(0,l.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"--config")," argument while executing ",(0,l.kt)("inlineCode",{parentName:"p"},"inx-spammer")," executable."),(0,l.kt)("p",null,"For example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"inx-spammer -c config_defaults.json\n")),(0,l.kt)("p",null,"You can always get the most up-to-date description of the config parameters by running:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"inx-spammer -h --full\n")),(0,l.kt)("h2",{id:"-1-application"},(0,l.kt)("a",{id:"app"})," 1. Application"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"checkForUpdates"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to check for updates of the application or not"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#app_shutdown"},"shutdown")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for shutdown"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"-shutdown"},(0,l.kt)("a",{id:"app_shutdown"})," Shutdown"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stopGracePeriod"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum time to wait for background processes to finish during shutdown before terminating the app"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"5m"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#app_shutdown_log"},"log")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for log"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"-log"},(0,l.kt)("a",{id:"app_shutdown_log"})," Log"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to store self-shutdown events to a log file"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"filePath"),(0,l.kt)("td",{parentName:"tr",align:null},"The file path to the self-shutdown log"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"shutdown.log"')))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "app": {\n      "checkForUpdates": true,\n      "shutdown": {\n        "stopGracePeriod": "5m",\n        "log": {\n          "enabled": true,\n          "filePath": "shutdown.log"\n        }\n      }\n    }\n  }\n')),(0,l.kt)("h2",{id:"-2-logger"},(0,l.kt)("a",{id:"logger"})," 2. Logger"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"level"),(0,l.kt)("td",{parentName:"tr",align:null},"The minimum enabled logging level"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"info"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableCaller"),(0,l.kt)("td",{parentName:"tr",align:null},"Stops annotating logs with the calling function's file name and line number"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableStacktrace"),(0,l.kt)("td",{parentName:"tr",align:null},"Disables automatic stacktrace capturing"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stacktraceLevel"),(0,l.kt)("td",{parentName:"tr",align:null},"The level stacktraces are captured and above"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"panic"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"encoding"),(0,l.kt)("td",{parentName:"tr",align:null},'The logger\'s encoding (options: "json", "console")'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"console"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"outputPaths"),(0,l.kt)("td",{parentName:"tr",align:null},"A list of URLs, file paths or stdout/stderr to write logging output to"),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"stdout")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"disableEvents"),(0,l.kt)("td",{parentName:"tr",align:null},"Prevents log messages from being raced as events"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "logger": {\n      "level": "info",\n      "disableCaller": true,\n      "disableStacktrace": false,\n      "stacktraceLevel": "panic",\n      "encoding": "console",\n      "outputPaths": [\n        "stdout"\n      ],\n      "disableEvents": true\n    }\n  }\n')),(0,l.kt)("h2",{id:"-3-inx"},(0,l.kt)("a",{id:"inx"})," 3. INX"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"address"),(0,l.kt)("td",{parentName:"tr",align:null},"The INX address to which to connect to"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:9029"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"maxConnectionAttempts"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of times the connection to INX will be attempted before it fails (1 attempt per second)"),(0,l.kt)("td",{parentName:"tr",align:null},"uint"),(0,l.kt)("td",{parentName:"tr",align:null},"30")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "inx": {\n      "address": "localhost:9029",\n      "maxConnectionAttempts": 30\n    }\n  }\n')),(0,l.kt)("h2",{id:"-4-pow"},(0,l.kt)("a",{id:"pow"})," 4. Pow"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"refreshTipsInterval"),(0,l.kt)("td",{parentName:"tr",align:null},"Interval for refreshing tips during PoW"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"5s"')))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "pow": {\n      "refreshTipsInterval": "5s"\n    }\n  }\n')),(0,l.kt)("h2",{id:"-5-restapi"},(0,l.kt)("a",{id:"restapi"})," 5. RestAPI"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bindAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"The bind address on which the Spammer HTTP server listens"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:9092"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"advertiseAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"The address of the Spammer HTTP server which is advertised to the INX Server (optional)"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'""')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"debugRequestLoggerEnabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the debug logging for requests should be enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "restAPI": {\n      "bindAddress": "localhost:9092",\n      "advertiseAddress": "",\n      "debugRequestLoggerEnabled": false\n    }\n  }\n')),(0,l.kt)("h2",{id:"-6-spammer"},(0,l.kt)("a",{id:"spammer"})," 6. Spammer"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autostart"),(0,l.kt)("td",{parentName:"tr",align:null},"Automatically start the spammer on startup"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bpsRateLimit"),(0,l.kt)("td",{parentName:"tr",align:null},"The blocks per second rate limit for the spammer (0 = no limit)"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cpuMaxUsage"),(0,l.kt)("td",{parentName:"tr",align:null},"Workers remains idle for a while when cpu usage gets over this limit (0 = disable)"),(0,l.kt)("td",{parentName:"tr",align:null},"float"),(0,l.kt)("td",{parentName:"tr",align:null},"0.8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"workers"),(0,l.kt)("td",{parentName:"tr",align:null},"The amount of parallel running spammers"),(0,l.kt)("td",{parentName:"tr",align:null},"int"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"message"),(0,l.kt)("td",{parentName:"tr",align:null},"The message to embed within the spam blocks"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"We are all made of stardust."')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tag"),(0,l.kt)("td",{parentName:"tr",align:null},"The tag of the block"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"HORNET Spammer"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tagSemiLazy"),(0,l.kt)("td",{parentName:"tr",align:null},'The tag of the block if the semi-lazy pool is used (uses "tag" if empty)'),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"HORNET Spammer Semi-Lazy"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#spammer_valuespam"},"valueSpam")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for Value Spam"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"#spammer_tipselection"},"tipselection")),(0,l.kt)("td",{parentName:"tr",align:null},"Configuration for tipselection"),(0,l.kt)("td",{parentName:"tr",align:null},"object"),(0,l.kt)("td",{parentName:"tr",align:null})))),(0,l.kt)("h3",{id:"-value-spam"},(0,l.kt)("a",{id:"spammer_valuespam"})," Value Spam"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to spam with transaction payloads instead of data payloads"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"sendBasicOutput"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to send basic outputs"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"collectBasicOutput"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to collect basic outputs"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createAlias"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to create aliases"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destroyAlias"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to destroy aliases"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createFoundry"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to create foundries"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destroyFoundry"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to destroy foundries"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mintNativeToken"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to mint native tokens"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"meltNativeToken"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to melt native tokens"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"createNFT"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to create NFTs"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"destroyNFT"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to destroy NFTs"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("h3",{id:"-tipselection"},(0,l.kt)("a",{id:"spammer_tipselection"})," Tipselection"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"nonLazyTipsThreshold"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum amount of tips in the non-lazy tip-pool before the spammer tries to reduce these (0 = always)"),(0,l.kt)("td",{parentName:"tr",align:null},"uint"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"semiLazyTipsThreshold"),(0,l.kt)("td",{parentName:"tr",align:null},"The maximum amount of tips in the semi-lazy tip-pool before the spammer tries to reduce these (0 = disable)"),(0,l.kt)("td",{parentName:"tr",align:null},"uint"),(0,l.kt)("td",{parentName:"tr",align:null},"30")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "spammer": {\n      "autostart": false,\n      "bpsRateLimit": 0,\n      "cpuMaxUsage": 0.8,\n      "workers": 0,\n      "message": "We are all made of stardust.",\n      "tag": "HORNET Spammer",\n      "tagSemiLazy": "HORNET Spammer Semi-Lazy",\n      "valueSpam": {\n        "enabled": false,\n        "sendBasicOutput": true,\n        "collectBasicOutput": true,\n        "createAlias": true,\n        "destroyAlias": true,\n        "createFoundry": true,\n        "destroyFoundry": true,\n        "mintNativeToken": true,\n        "meltNativeToken": true,\n        "createNFT": true,\n        "destroyNFT": true\n      },\n      "tipselection": {\n        "nonLazyTipsThreshold": 0,\n        "semiLazyTipsThreshold": 30\n      }\n    }\n  }\n')),(0,l.kt)("h2",{id:"-7-profiling"},(0,l.kt)("a",{id:"profiling"})," 7. Profiling"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the profiling plugin is enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bindAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"The bind address on which the profiler listens on"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:6060"')))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "profiling": {\n      "enabled": false,\n      "bindAddress": "localhost:6060"\n    }\n  }\n')),(0,l.kt)("h2",{id:"-8-prometheus"},(0,l.kt)("a",{id:"prometheus"})," 8. Prometheus"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether the prometheus plugin is enabled"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"bindAddress"),(0,l.kt)("td",{parentName:"tr",align:null},"The bind address on which the Prometheus HTTP server listens on"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},'"localhost:9312"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"spammerMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include the spammer metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"goMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include go metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"processMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include process metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"promhttpMetrics"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether to include promhttp metrics"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'  {\n    "prometheus": {\n      "enabled": false,\n      "bindAddress": "localhost:9312",\n      "spammerMetrics": true,\n      "goMetrics": false,\n      "processMetrics": false,\n      "promhttpMetrics": false\n    }\n  }\n')))}d.isMDXComponent=!0}}]);