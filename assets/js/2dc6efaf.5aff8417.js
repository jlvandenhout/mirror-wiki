"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[6353],{42534:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return h},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return k}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),s=["components"],l={description:"Markers is a tool to efficiently estimate the approval weight of a message and that reduces the portion of the Tangle that needs to be traversed, and which finally results in the grade of finality.",image:"/img/protocol_specification/example_1.png",keywords:["approval weight","marker","message","sequence","future marker","new marker","part marker","past cone"]},o="Markers",u={unversionedId:"protocol_specification/components/markers",id:"protocol_specification/components/markers",title:"Markers",description:"Markers is a tool to efficiently estimate the approval weight of a message and that reduces the portion of the Tangle that needs to be traversed, and which finally results in the grade of finality.",source:"@site/content/build/goshimmer/develop/documentation/docs/protocol_specification/components/markers.md",sourceDirName:"protocol_specification/components",slug:"/protocol_specification/components/markers",permalink:"/goshimmer/protocol_specification/components/markers",draft:!1,editUrl:"https://github.com/iotaledger/goshimmer/edit/develop/documentation/content/build/goshimmer/develop/documentation/docs/protocol_specification/components/markers.md",tags:[],version:"current",frontMatter:{description:"Markers is a tool to efficiently estimate the approval weight of a message and that reduces the portion of the Tangle that needs to be traversed, and which finally results in the grade of finality.",image:"/img/protocol_specification/example_1.png",keywords:["approval weight","marker","message","sequence","future marker","new marker","part marker","past cone"]},sidebar:"docs",previous:{title:"UTXO Output Types",permalink:"/goshimmer/protocol_specification/components/advanced_outputs"},next:{title:"Glossary",permalink:"/goshimmer/protocol_specification/glossary"}},c={},k=[{value:"Summary",id:"summary",level:2},{value:"Motivation",id:"motivation",level:2},{value:"Dependency",id:"dependency",level:2},{value:"Definitions",id:"definitions",level:2},{value:"Design",id:"design",level:2},{value:"The Markers",id:"the-markers",level:3},{value:"Marker structure",id:"marker-structure",level:4},{value:"Create markers",id:"create-markers",level:4},{value:"Markers in Messages",id:"markers-in-messages",level:3},{value:"StructureDetails structure",id:"structuredetails-structure",level:4},{value:"Past markers",id:"past-markers",level:5},{value:"Future markers",id:"future-markers",level:5},{value:"The Sequence",id:"the-sequence",level:3},{value:"Sequence structure",id:"sequence-structure",level:4},{value:"Create sequence",id:"create-sequence",level:4},{value:"Sequences",id:"sequences",level:4},{value:"Sequence rank",id:"sequence-rank",level:4},{value:"Example 1",id:"example-1",level:2},{value:"Example 2: Test for the Mapping interaction with the Booker",id:"example-2-test-for-the-mapping-interaction-with-the-booker",level:2},{value:"Implementation Details",id:"implementation-details",level:2},{value:"Normalization of the Referenced PMs and Sequences",id:"normalization-of-the-referenced-pms-and-sequences",level:3},{value:"Markers Application: Past Cone Check",id:"markers-application-past-cone-check",level:3},{value:"Markers Application: Approval Weight Estimation",id:"markers-application-approval-weight-estimation",level:3}],m={toc:k};function h(e){var t=e.components,l=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"markers"},"Markers"),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"In order to know whether a message in the Tangle is orphaned or not, we introduce ",(0,i.kt)("strong",{parentName:"p"},"grades of finality")," to interpret the status of a message. The higher grade of finality is determined by the ",(0,i.kt)("strong",{parentName:"p"},"approval weight"),", which is the proportion of active consensus mana approving a given message."),(0,i.kt)("p",null,"To compute the approval weight of a given message we need to traverse the Tangle from the message to the tips and sum up the active consensus mana of all the messages in its future cone. The ",(0,i.kt)("strong",{parentName:"p"},"marker")," tool is a tool to efficiently estimate the approval weight of a message and that reduces the portion of the Tangle that needs to be traversed, and which finally results in the grade of finality."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"NOte")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("strong",{parentName:"p"},"Markers")," is not a core module of the Coordicide project."))),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Markers")," is a tool to infer knowledge about the structure of the Tangle in terms of:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"past/future cone membership;"),(0,i.kt)("li",{parentName:"ul"},"approximate approval weight of any message;"),(0,i.kt)("li",{parentName:"ul"},"tagging sections of the Tangle (e.g., branches) without having to traverse each message individually.")),(0,i.kt)("h2",{id:"dependency"},"Dependency"),(0,i.kt)("p",null,"Active Consensus Mana"),(0,i.kt)("h2",{id:"definitions"},"Definitions"),(0,i.kt)("p",null,"Let's define the terms related to markers:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sequence:")," A Sequence is a sequence of markers. Each Sequence corresponds to a UTXO branch, which help us to track the structure independently. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Sequence Identifier (",(0,i.kt)("inlineCode",{parentName:"strong"},"SID"),"):")," A Sequence Identifier is the unique identifier of a Sequence."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Marker Index (",(0,i.kt)("inlineCode",{parentName:"strong"},"MI"),"):")," A Marker Index is the marker rank in the marker DAG. Throughout the code the marker rank will be called index. "),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"marker:")," A marker is a pair of numbers: ",(0,i.kt)("inlineCode",{parentName:"li"},"SID")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"MI")," associated to a given message. Markers carrying the same ",(0,i.kt)("inlineCode",{parentName:"li"},"SID")," belong to the same Sequence."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"future marker (",(0,i.kt)("inlineCode",{parentName:"strong"},"FM"),"):")," A future marker of a message is the first marker in its future cone from different sequences; this field in the message metadata is updated when the new marker is generated in the future, following the rules defined in ",(0,i.kt)("a",{parentName:"li",href:"#future-markers"},"Future Markers"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"past marker (",(0,i.kt)("inlineCode",{parentName:"strong"},"PM"),"):")," A past marker of a message is a marker in its past cone. For a given sequence it is set to the newest past marker of its parents, that is the one that has the largest ",(0,i.kt)("inlineCode",{parentName:"li"},"MI"),". The past marker of a marker is set to itself."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"sequence rank:")," The rank of a sequence will be simply called rank throughout this code. Bear in mind that for clarity the marker rank is called index.")),(0,i.kt)("h2",{id:"design"},"Design"),(0,i.kt)("h3",{id:"the-markers"},"The Markers"),(0,i.kt)("p",null,"Markers are messages selected from the tip set periodically and assigned unique identifiers, in the form of $","[SID, MI]","$. "),(0,i.kt)("h4",{id:"marker-structure"},"Marker structure"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"SequenceID"),(0,i.kt)("td",{parentName:"tr",align:null},"uint64"),(0,i.kt)("td",{parentName:"tr",align:null},"The Sequence identifier of the marker.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Index"),(0,i.kt)("td",{parentName:"tr",align:null},"uint64"),(0,i.kt)("td",{parentName:"tr",align:null},"The index of the marker in the sequence.")))),(0,i.kt)("h4",{id:"create-markers"},"Create markers"),(0,i.kt)("p",null,"A new marker is created when:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the default conditions are met, which will be one of these options:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"every x messsages"),";")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"every t seconds"),";"),(0,i.kt)("li",{parentName:"ul"},"a mix of the first two!",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Upperbound given by the messages"),(0,i.kt)("li",{parentName:"ul"},"Lower temporal bound given by the time"))),(0,i.kt)("li",{parentName:"ul"},"every x messages that reference (directly or indirectly) the previous marker",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Lower bound given by rank (e.g., how far you are in terms of steps) -> >= 10 or something"),(0,i.kt)("li",{parentName:"ul"},"Upper bound given by the amount of messages referencing the previous one -> ~ 200 msgs"))))),(0,i.kt)("li",{parentName:"ol"},"A new sequence is created. ",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udce3 to be confirmed here.")))),(0,i.kt)("p",null,"A new marker is selected from the strong tips set randomly, and selected from the weak tips set if there's no strong tip. A new pair of $","[SID, MI]","$ is assigned to the new marker. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\ud83d\udce3  to be confirmed here.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"SID")," is set according to the following rules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Inherit the ",(0,i.kt)("inlineCode",{parentName:"li"},"SID")," from parents if the new marker references the latest marker of a sequence and meets the requirement to set up a new marker without initiating a new MS."),(0,i.kt)("li",{parentName:"ul"},"Create a new ",(0,i.kt)("inlineCode",{parentName:"li"},"SID")," if it is the first marker of a new sequence.")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"MI")," is set to $MI = 1+ max(referencedMI)$, which complies to the rule:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Marker indexes (",(0,i.kt)("inlineCode",{parentName:"li"},"MI"),"s) are monotonically increasing such that $\\forall x \\in fc(y)$ => $MI_x > MI_y$, where $fc(y)$ is the future cone of $y$ and $x$ is any message in that future cone.")),(0,i.kt)("h3",{id:"markers-in-messages"},"Markers in Messages"),(0,i.kt)("p",null,"Each message keeps its associated marker information in two lists:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"past markers "),(0,i.kt)("li",{parentName:"ul"},"future markers ")),(0,i.kt)("p",null,"These lists for past markers and future markers are used to determine whether a message is in the past cone of the other, and the list for future markers also helps us to efficiently estimate the approval weight of a message."),(0,i.kt)("h4",{id:"structuredetails-structure"},"StructureDetails structure"),(0,i.kt)("p",null,"StructureDetails is a structure that will be in the message metadata containing marker information."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rank"),(0,i.kt)("td",{parentName:"tr",align:null},"uint64"),(0,i.kt)("td",{parentName:"tr",align:null},"The rank of the message.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"IsPastMarker"),(0,i.kt)("td",{parentName:"tr",align:null},"bool"),(0,i.kt)("td",{parentName:"tr",align:null},"A flag to indicate whether a message is a marker.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"PastMarkers"),(0,i.kt)("td",{parentName:"tr",align:null},"map","[SequenceID]","Index"),(0,i.kt)("td",{parentName:"tr",align:null},"PM list, a list of PMs from different sequences.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"FutureMarkers"),(0,i.kt)("td",{parentName:"tr",align:null},"map","[SequenceID]","Index"),(0,i.kt)("td",{parentName:"tr",align:null},"FM list, a list of FMs from different sequences.")))),(0,i.kt)("h5",{id:"past-markers"},"Past markers"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"PM")," list of a marker contains the marker itself only."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"PM")," list of non-marker messages is inherited from its ",(0,i.kt)("strong",{parentName:"li"},"strong")," parents, with 2 steps:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"for a given sequence select only the nearest marker (i.e. the markers with the highest ",(0,i.kt)("inlineCode",{parentName:"li"},"MI"),"). Thus for every sequence from the parents there will be exactly one marker."),(0,i.kt)("li",{parentName:"ol"},"remove those that have been referenced by other markers from this set. ")))),(0,i.kt)("h5",{id:"future-markers"},"Future markers"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"FM")," list of a message is empty at start and gets updated when a new marker directly or indirectly references it. The propagation of a ",(0,i.kt)("inlineCode",{parentName:"p"},"FM")," to its past cone (i.e. the update of the ",(0,i.kt)("inlineCode",{parentName:"p"},"FutureMarkers")," field in the encountered messages) does not continue beyond a message if:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"the ",(0,i.kt)("inlineCode",{parentName:"li"},"FM")," list of a message includes a previous marker of the same sequence;"),(0,i.kt)("li",{parentName:"ol"},"the message is the marker in the different sequence, we update the ",(0,i.kt)("inlineCode",{parentName:"li"},"FM")," list of that marker only.")),(0,i.kt)("h3",{id:"the-sequence"},"The Sequence"),(0,i.kt)("p",null,"Sequences are used to track the UTXO DAG branches, each branch corresponds to a sequence with a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"SID"),", and the sequences form a DAG as well."),(0,i.kt)("h4",{id:"sequence-structure"},"Sequence structure"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"id"),(0,i.kt)("td",{parentName:"tr",align:null},"uint64"),(0,i.kt)("td",{parentName:"tr",align:null},"The sequence identifier of the sequence.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"parentReferences"),(0,i.kt)("td",{parentName:"tr",align:null},"map","[uint64]","Thresholdmap"),(0,i.kt)("td",{parentName:"tr",align:null},"The marker referenced map of each parent marker.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"rank"),(0,i.kt)("td",{parentName:"tr",align:null},"uint64"),(0,i.kt)("td",{parentName:"tr",align:null},"The rank of the sequence in the marker DAG.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"highestIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"uint64"),(0,i.kt)("td",{parentName:"tr",align:null},"The highest MI of the marker sequence.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"lowestIndex"),(0,i.kt)("td",{parentName:"tr",align:null},"uint64"),(0,i.kt)("td",{parentName:"tr",align:null},"The lowest MI of the sequence.")))),(0,i.kt)("h4",{id:"create-sequence"},"Create sequence"),(0,i.kt)("p",null,"A new sequence is created when:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"there's a conflict in a UTXO branch."),(0,i.kt)("li",{parentName:"ol"},"the UTXO branches are aggregated."),(0,i.kt)("li",{parentName:"ol"},"UTXO branches are merged.")),(0,i.kt)("p",null,"Each new sequence starts from a new marker."),(0,i.kt)("h4",{id:"sequences"},"Sequences"),(0,i.kt)("p",null,"For whatever reason a sequence is created, we assign a new $SID = 1+max(referenceSequencesIdentifiers)$. To prevent assigning a new ",(0,i.kt)("inlineCode",{parentName:"p"},"SID")," when combining same sequences again, we build parents-child relation in a map if a new sequence is created. "),(0,i.kt)("h4",{id:"sequence-rank"},"Sequence rank"),(0,i.kt)("p",null,"The rank of a sequence graph is the number of sequences from the starting point to itself. The sequence ranks are shown in the figure above."),(0,i.kt)("h2",{id:"example-1"},"Example 1"),(0,i.kt)("p",null,"Here is an example of how the markers and sequences structures would look in the Tangle:\nThe purple colored messages are markers."),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:r(68508).Z},(0,i.kt)("img",{alt:"How the markers and sequences structures would look in the Tangle",src:r(80494).Z,title:"Example 1",width:"1604",height:"1678"}))),(0,i.kt)("h2",{id:"example-2-test-for-the-mapping-interaction-with-the-booker"},"Example 2: Test for the Mapping interaction with the Booker"),(0,i.kt)("p",null,"The Marker tool implementation is tested for correct Marker and Booker mapping. A transaction-by-transaction discussion of the test can be found ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/goshimmer/blob/develop/packages/tangle/images/TestBookerMarkerMappings.md"},"here")," and can be viewed by opening the file locally in a browser. Transactions arrive in the order of their transaction number. The end result and the values in the various fields is shown in the following figures:"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:r(6030).Z},(0,i.kt)("img",{alt:"Mapping interaction with the Booker",src:r(57642).Z,title:"Mapping interaction with the Booker1",width:"2542",height:"1172"}))),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:r(46891).Z},(0,i.kt)("img",{alt:"Transactions arrive in the order of their transaction number",src:r(81800).Z,title:"Transactions arrive in the order of their transaction number",width:"1292",height:"848"}))),(0,i.kt)("h2",{id:"implementation-details"},"Implementation Details"),(0,i.kt)("p",null,"In the following we describe some of the functions in more detail."),(0,i.kt)("h3",{id:"normalization-of-the-referenced-pms-and-sequences"},"Normalization of the Referenced PMs and Sequences"),(0,i.kt)("p",null,"Messages can have markers from different sequences in ",(0,i.kt)("inlineCode",{parentName:"p"},"PM")," list and ",(0,i.kt)("inlineCode",{parentName:"p"},"FM")," list, the order and referenced relationship among sequences are important for example when it comes to inheriting the ",(0,i.kt)("inlineCode",{parentName:"p"},"PM")," list from parents. Thus, we need to track these sequences."),(0,i.kt)("p",null,"When a new sequence is created we check the parent marker' sequences with the function ",(0,i.kt)("inlineCode",{parentName:"p"},"normalizeMarkers()")," in order from high to low rank. In this function, we remove those ",(0,i.kt)("inlineCode",{parentName:"p"},"PM"),"s that it's belonging sequence is referenced by others."),(0,i.kt)("p",null,"An example is ",(0,i.kt)("strong",{parentName:"p"},"msg 10")," in the figure above, $","[0,2]",", ","[1,1]",", ","[2,3]","$ are ",(0,i.kt)("inlineCode",{parentName:"p"},"PM"),"s to be considered to inherit. $","[2,3]","$ is the first marker to check, since it has the highest sequence rank. We select the parent sequences of $","[2,3]","$, which are $0$ and $1$, and the referenced ",(0,i.kt)("inlineCode",{parentName:"p"},"PM"),"s therein. Next any ",(0,i.kt)("inlineCode",{parentName:"p"},"PM"),"s that are already referenced can be removed. This results in that the PMs of ",(0,i.kt)("strong",{parentName:"p"},"msg 10")," is $","[2,3]","$ only."),(0,i.kt)("p",null,"In the following we show the implementation of  ",(0,i.kt)("inlineCode",{parentName:"p"},"normalizeMarkers()"),", which returns the markers and sequences that will be inherited from a message."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// normalizeMarkers takes a set of Markers and removes each Marker that is already referenced by another Marker in the\n// same set (the remaining Markers are the "most special" Markers that reference all Markers in the set grouped by the\n// rank of their corresponding Sequence). In addition, the method returns all SequenceIDs of the Markers that were not\n// referenced by any of the Markers (the tips of the Sequence DAG).\nfunc (m *Manager) normalizeMarkers(markers *Markers) (normalizedMarkersByRank *markersByRank, normalizedSequences SequenceIDs) {\n    rankOfSequencesCache := make(map[SequenceID]uint64)\n\n    normalizedMarkersByRank = newMarkersByRank()\n    normalizedSequences = make(SequenceIDs)\n    // group markers with same sequence rank\n    markers.ForEach(func(sequenceID SequenceID, index Index) bool {\n        normalizedSequences[sequenceID] = types.Void\n        normalizedMarkersByRank.Add(m.rankOfSequence(sequenceID, rankOfSequencesCache), sequenceID, index)\n\n        return true\n    })\n    markersToIterate := normalizedMarkersByRank.Clone()\n\n    //iterate from highest sequence rank to lowest\n    for i := markersToIterate.HighestRank() + 1; i > normalizedMarkersByRank.LowestRank(); i-- {\n        currentRank := i - 1\n        markersByRank, rankExists := markersToIterate.Markers(currentRank)\n        if !rankExists {\n            continue\n        }\n\n        // for each marker from the current sequence rank check if we can remove a marker in normalizedMarkersByRank,\n        // and add the parent markers to markersToIterate if necessary\n        if !markersByRank.ForEach(func(sequenceID SequenceID, index Index) bool {\n            if currentRank <= normalizedMarkersByRank.LowestRank() {\n                return false\n            }\n\n            if !(&CachedSequence{CachedObject: m.sequenceStore.Load(sequenceID.Bytes())}).Consume(func(sequence *Sequence) {\n                // for each of the parentMarkers of this particular index\n                sequence.HighestReferencedParentMarkers(index).ForEach(func(referencedSequenceID SequenceID, referencedIndex Index) bool {\n                    // of this marker delete the referenced sequences since they are no sequence tips anymore in the sequence DAG\n                    delete(normalizedSequences, referencedSequenceID)\n\n                    rankOfReferencedSequence := m.rankOfSequence(referencedSequenceID, rankOfSequencesCache)\n                    // check whether there is a marker in normalizedMarkersByRank that is from the same sequence\n                    if index, indexExists := normalizedMarkersByRank.Index(rankOfReferencedSequence, referencedSequenceID); indexExists {\n                        if referencedIndex >= index {\n                            // this referencedParentMarker is from the same sequence as a marker in the list but with higher index - hence remove the index from the Marker list\n                            normalizedMarkersByRank.Delete(rankOfReferencedSequence, referencedSequenceID)\n\n                            // if rankOfReferencedSequence is already the lowest rank of the original markers list,\n                            // no need to add it since parents of the referencedMarker cannot delete any further elements from the list\n                            if rankOfReferencedSequence > normalizedMarkersByRank.LowestRank() {\n                                markersToIterate.Add(rankOfReferencedSequence, referencedSequenceID, referencedIndex)\n                            }\n                        }\n\n                        return true\n                    }\n\n                    // if rankOfReferencedSequence is already the lowest rank of the original markers list,\n                    // no need to add it since parents of the referencedMarker cannot delete any further elements from the list\n                    if rankOfReferencedSequence > normalizedMarkersByRank.LowestRank() {\n                        markersToIterate.Add(rankOfReferencedSequence, referencedSequenceID, referencedIndex)\n                    }\n\n                    return true\n                })\n            }) {\n                panic(fmt.Sprintf("failed to load Sequence with %s", sequenceID))\n            }\n\n            return true\n        }) {\n            return\n        }\n    }\n\n    return\n}\n')),(0,i.kt)("h3",{id:"markers-application-past-cone-check"},"Markers Application: Past Cone Check"),(0,i.kt)("p",null,"By comparing the past and future markers of messages, we can easily tell if one is in another's past cone. The function returns a ",(0,i.kt)("inlineCode",{parentName:"p"},"TriBool")," representing the three possible statuses: ",(0,i.kt)("inlineCode",{parentName:"p"},"True"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"False")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Maybe"),". If ",(0,i.kt)("inlineCode",{parentName:"p"},"Maybe")," is returned, then we need to perform a search of the Tangle by walking by means of e.g. a Breadth-First Search."),(0,i.kt)("p",null,"In the following we show the implementation of the past cone check: "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-go"},'// IsInPastCone checks if the earlier Markers are directly or indirectly referenced by the later Markers.\nfunc (m *Manager) IsInPastCone(earlierMarkers *MarkersPair, laterMarkers *MarkersPair) (referenced TriBool) {\n    // fast check: if earlier Markers have larger highest Indexes they can\'t be in the past cone\n    if earlierMarkers.PastMarkers.HighestIndex() > laterMarkers.PastMarkers.HighestIndex() {\n        return False\n    }\n\n    // fast check: if earlier Marker is a past Marker and the later ones reference it we can return early\n    if earlierMarkers.IsPastMarker {\n        earlierMarker := earlierMarkers.PastMarkers.FirstMarker()\n        if earlierMarker == nil {\n            panic("failed to retrieve Marker")\n        }\n\n        if laterIndex, sequenceExists := laterMarkers.PastMarkers.Get(earlierMarker.sequenceID); sequenceExists {\n            if laterIndex >= earlierMarker.index {\n                return True\n            }\n\n            return False\n        }\n\n        if laterMarkers.PastMarkers.HighestIndex() <= earlierMarker.index {\n            return False\n        }\n    }\n\n    if laterMarkers.IsPastMarker {\n        laterMarker := laterMarkers.PastMarkers.FirstMarker()\n        if laterMarker == nil {\n            panic("failed to retrieve Marker")\n        }\n\n        // if the earlier Marker inherited an Index of the same Sequence that is higher than the later we return false\n        if earlierIndex, sequenceExists := earlierMarkers.PastMarkers.Get(laterMarker.sequenceID); sequenceExists && earlierIndex >= laterMarker.index {\n            return False\n        }\n\n        // if the earlier Markers are referenced by a Marker of the same Sequence that is larger, we are not in the past cone\n        if earlierFutureIndex, earlierFutureIndexExists := earlierMarkers.FutureMarkers.Get(laterMarker.sequenceID); earlierFutureIndexExists && earlierFutureIndex > laterMarker.index {\n            return False\n        }\n\n        // if the earlier Markers were referenced by the same or a higher future Marker we are not in the past cone\n        // (otherwise we would be the future marker)\n        if !laterMarkers.FutureMarkers.ForEach(func(sequenceID SequenceID, laterIndex Index) bool {\n            earlierIndex, similarSequenceExists := earlierMarkers.FutureMarkers.Get(sequenceID)\n            return !similarSequenceExists || earlierIndex < laterIndex\n        }) {\n            return False\n        }\n\n        if earlierMarkers.PastMarkers.HighestIndex() >= laterMarker.index {\n            return False\n        }\n    }\n\n    // if the highest Indexes of both past Markers are the same ...\n    if earlierMarkers.PastMarkers.HighestIndex() == laterMarkers.PastMarkers.HighestIndex() {\n        // ... then the later Markers should contain exact copies of all of the highest earlier Markers because parent\n        // Markers get inherited and if they would have been captured by a new Marker in between then the highest\n        // Indexes would no longer be the same\n        if !earlierMarkers.PastMarkers.ForEach(func(sequenceID SequenceID, earlierIndex Index) bool {\n            if earlierIndex == earlierMarkers.PastMarkers.HighestIndex() {\n                laterIndex, sequenceExists := laterMarkers.PastMarkers.Get(sequenceID)\n                return sequenceExists && laterIndex != earlierIndex\n            }\n\n            return true\n        }) {\n            return False\n        }\n    }\n\n    if earlierMarkers.FutureMarkers.HighestIndex() == laterMarkers.FutureMarkers.HighestIndex() && false {\n        // the earlier future markers need to contain all later ones because if there would be another marker in between that shadows them the later future Marker would have a higher index\n        if !laterMarkers.FutureMarkers.ForEach(func(sequenceID SequenceID, laterIndex Index) bool {\n            if laterIndex == laterMarkers.FutureMarkers.highestIndex {\n                earlierIndex, sequenceExists := earlierMarkers.FutureMarkers.Get(sequenceID)\n                return sequenceExists && earlierIndex == laterIndex\n            }\n\n            return true\n        }) {\n            return False\n        }\n    }\n\n    // detailed check: earlier marker is referenced by something that the later one references\n    if m.markersReferenceMarkers(laterMarkers.PastMarkers, earlierMarkers.FutureMarkers, false) {\n        return True\n    }\n\n    // detailed check: the\n    if m.markersReferenceMarkers(earlierMarkers.FutureMarkers, laterMarkers.PastMarkers, true) {\n        return Maybe\n    }\n\n    return False\n}\n\n')),(0,i.kt)("h3",{id:"markers-application-approval-weight-estimation"},"Markers Application: Approval Weight Estimation"),(0,i.kt)("p",null,"To approximate the approval weight of a message, we simply retrieve the approval weight of its ",(0,i.kt)("inlineCode",{parentName:"p"},"FM")," list. Since the message is in the past cone of its ",(0,i.kt)("inlineCode",{parentName:"p"},"FM"),"s, the approval weight and the finality will be at least the same as its ",(0,i.kt)("inlineCode",{parentName:"p"},"FM"),"s. This will of course be a lower bound (which is the \u201csafe\u201d bound), but if the markers are set frequently enough, it should be a good approximation."),(0,i.kt)("p",null,"For details of managing approval weight of each marker and approval weight calculation thereof please refer to ",(0,i.kt)("a",{parentName:"p",href:"/goshimmer/protocol_specification/components/consensus_mechanism#approval-weight-aw"},"Approval Weight"),"."))}h.isMDXComponent=!0},68508:function(e,t,r){t.Z=r.p+"assets/files/example_1-670c675a90452a0642316170a5abe1f5.png"},6030:function(e,t,r){t.Z=r.p+"assets/files/example_2_1-00d77f7d9f884c458a80645806106665.png"},46891:function(e,t,r){t.Z=r.p+"assets/files/example_2_2-ce4881c2d64bda5d044b32087fb0c2eb.png"},80494:function(e,t,r){t.Z=r.p+"assets/images/example_1-670c675a90452a0642316170a5abe1f5.png"},57642:function(e,t,r){t.Z=r.p+"assets/images/example_2_1-00d77f7d9f884c458a80645806106665.png"},81800:function(e,t,r){t.Z=r.p+"assets/images/example_2_2-ce4881c2d64bda5d044b32087fb0c2eb.png"},3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(r),h=a,p=m["".concat(o,".").concat(h)]||m[h]||k[h]||i;return r?n.createElement(p,s(s({ref:t},c),{},{components:r})):n.createElement(p,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);