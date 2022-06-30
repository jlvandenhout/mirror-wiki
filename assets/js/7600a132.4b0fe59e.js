"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[39796],{90862:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={description:'This page explains how nodes find their neighbors and connect to them, a process that we call "peering".',image:"/img/logo/Coordicide_Logo_Black.png",slug:"3.4NeighborSelection",keywords:["neighbors","eclipse","mana","public salt","hash chain","attacker"]},s="3.4 Neighbor Selection",p={unversionedId:"3.4 Neighbor Selection",id:"3.4 Neighbor Selection",title:"3.4 Neighbor Selection",description:'This page explains how nodes find their neighbors and connect to them, a process that we call "peering".',source:"@site/content/build/iota-2.0-research-specifications/3.4 Neighbor Selection.md",sourceDirName:".",slug:"/3.4NeighborSelection",permalink:"/IOTA-2.0-Research-Specifications/3.4NeighborSelection",draft:!1,editUrl:"https://github.com/iotaledger/IOTA-2.0-Research-Specifications/edit/main/content/build/iota-2.0-research-specifications/3.4 Neighbor Selection.md",tags:[],version:"current",frontMatter:{description:'This page explains how nodes find their neighbors and connect to them, a process that we call "peering".',image:"/img/logo/Coordicide_Logo_Black.png",slug:"3.4NeighborSelection",keywords:["neighbors","eclipse","mana","public salt","hash chain","attacker"]},sidebar:"tutorialSidebar",previous:{title:"3.3 Peer Discovery",permalink:"/IOTA-2.0-Research-Specifications/3.3PeerDiscovery"},next:{title:"3.5 Manual Peering",permalink:"/IOTA-2.0-Research-Specifications/3.5ManualPeering"}},h={},d=[{value:"3.4.1 Introduction",id:"341-introduction",level:2},{value:"3.4.2 Detailed design",id:"342-detailed-design",level:2},{value:"3.4.2.1 Local variables",id:"3421-local-variables",level:3},{value:"3.4.2.2 Node identities",id:"3422-node-identities",level:3},{value:"3.4.2.3 Salt generation",id:"3423-salt-generation",level:3},{value:"3.4.2.4 Mana rank interval",id:"3424-mana-rank-interval",level:3},{value:"3.4.2.5 Selection",id:"3425-selection",level:3},{value:"3.4.2.6 Neighbor Removal",id:"3426-neighbor-removal",level:3},{value:"3.4.2.7 Requests and responses",id:"3427-requests-and-responses",level:3},{value:"Request and Response Layout",id:"request-and-response-layout",level:4},{value:"Peering Request",id:"peering-request",level:4},{value:"Peering Response",id:"peering-response",level:4},{value:"Peering Drop",id:"peering-drop",level:4}],u={toc:d};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"34-neighbor-selection"},"3.4 Neighbor Selection"),(0,i.kt)("h2",{id:"341-introduction"},"3.4.1 Introduction"),(0,i.kt)("p",null,"This section defines the ",(0,i.kt)("em",{parentName:"p"},"Neighbor Selection")," protocol, its logic and the different requests and responses exchanged between nodes."),(0,i.kt)("p",null,"In order for the network to work efficiently and for the nodes to be kept up-to-date about the ledger state, nodes exchange information with each other. Each node establishes a communication channel with a small subset of nodes (i.e., neighbors) via a process called ",(0,i.kt)("inlineCode",{parentName:"p"},"peering"),". Such a process must be resilient against eclipse attacks: if all of a node\u2019s neighbors are controlled by an attacker, then the attacker has complete control over the node\u2019s view of the Tangle. Moreover, to prevent or limitate sybil-based attacks, the neighbor selection protocol makes use of a scarce resource dubbed Consensus Mana: arbitrary nodes can be created, but it is difficult to produce high mana nodes."),(0,i.kt)("p",null,"Throughout this section, the terms ",(0,i.kt)("inlineCode",{parentName:"p"},"Node")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Peer")," are used interchangeably to refer to a ",(0,i.kt)("inlineCode",{parentName:"p"},"Node")," device. The term ",(0,i.kt)("inlineCode",{parentName:"p"},"neighbors")," implies a mutual relationship between two nodes put in place as a direct connection established and used by the gossip layer."),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"Neighbor Selection")," specification depends on the following specifications:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./3.3PeerDiscovery"},"3.3 - Peer discovery"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"./5.3Mana"},"5.3 - Mana"),".")),(0,i.kt)("h2",{id:"342-detailed-design"},"3.4.2 Detailed design"),(0,i.kt)("p",null,"The goal of the neighbor selection is to build a node's neighborhood (to be used by the gossip protocol) while preventing attackers from \u201ctricking\u201d other nodes into becoming neighbors. Neighbors are established when one node sends a peering request to another node, which in turn accepts or rejects the request with a peering response. "),(0,i.kt)("p",null,"To prevent attacks, the protocol makes the peering request ",(0,i.kt)("em",{parentName:"p"},"verifiably random")," such that attackers cannot create nodes to which the target node will send requests. At its core, the neighbor selection protocol uses both a screening process called ",(0,i.kt)("em",{parentName:"p"},"Consensus Mana rank")," and a ",(0,i.kt)("em",{parentName:"p"},"score function")," that takes into account some randomness dubbed ",(0,i.kt)("em",{parentName:"p"},"private salt")," and ",(0,i.kt)("em",{parentName:"p"},"public salt"),".\nHalf of the neighbors will be constituted from nodes that accepted the peering request, while half will be constituted of nodes that will request for the peering. The two distinct groups of neighbors are consequently called:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Chosen neighbors (outbound). The peers that the node proactively selected through the neighbor selection mechanism."),(0,i.kt)("li",{parentName:"ul"},"Accepted neighbors (inbound). The peers that sent the peering request to the node and were accepted as a neighbor.")),(0,i.kt)("h3",{id:"3421-local-variables"},"3.4.2.1 Local variables"),(0,i.kt)("p",null,"Local variables defined here are included to help in understanding the protocol described in this section. The node application shall handle those variables in some form."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"saltUpdateInterval")),(0,i.kt)("td",{parentName:"tr",align:null},"duration"),(0,i.kt)("td",{parentName:"tr",align:null},"The time interval at which nodes shall update their salts.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"responseTimeout")),(0,i.kt)("td",{parentName:"tr",align:null},"duration"),(0,i.kt)("td",{parentName:"tr",align:null},"The time that node waits for a response during one peering attempt.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"requestExpirationTime")),(0,i.kt)("td",{parentName:"tr",align:null},"duration"),(0,i.kt)("td",{parentName:"tr",align:null},"The time used for the request timestamp validation, if the timestamp is older than this threshold the request is dropped.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"maxPeeringAttempts")),(0,i.kt)("td",{parentName:"tr",align:null},"integer"),(0,i.kt)("td",{parentName:"tr",align:null},"The maximum number of peering requests retries sent to the selected node before the next salt update.")))),(0,i.kt)("h3",{id:"3422-node-identities"},"3.4.2.2 Node identities"),(0,i.kt)("p",null,"As for the ",(0,i.kt)("em",{parentName:"p"},"peer discovery")," protocol, every node has a cryptographic identity, a key on the Ed25519 elliptic curve. The ",(0,i.kt)("inlineCode",{parentName:"p"},"blake2b")," hash of the public key of the peer node serves as its identifier or ",(0,i.kt)("inlineCode",{parentName:"p"},"node ID"),"."),(0,i.kt)("h3",{id:"3423-salt-generation"},"3.4.2.3 Salt generation"),(0,i.kt)("p",null,"Nodes ",(0,i.kt)("em",{parentName:"p"},"shall")," have a public and private salt both defined as array bytes of size 20. Nodes ",(0,i.kt)("em",{parentName:"p"},"shall")," update both their public and private salt at a common fixed time interval ",(0,i.kt)("inlineCode",{parentName:"p"},"saltUpdateInterval")," (e.g. 3 hours).\nThe public salt is used for outbound peering requests, while the private salt is used during inbound peering requests."),(0,i.kt)("p",null,"The public salt must satisfy the following requirements:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Future salts must be unguessable: mining node ids to reduce the request score ",(0,i.kt)("em",{parentName:"li"},"shall")," be prohibitive. This offers protection for the requesting nodes."),(0,i.kt)("li",{parentName:"ol"},"Salts ",(0,i.kt)("em",{parentName:"li"},"must")," be chosen in a non-arbitrary way: if adversaries may choose their salt, they could manufacture malicious requests to any node.")),(0,i.kt)("p",null,"This section proposes to set the public salts using hash chains, while private salts can be randomly generated on the fly.\nThe nodes shall create a hash chain ",(0,i.kt)("em",{parentName:"p"},"\u03b6 = {\u03b6_0, \u03b6_1, ..., \u03b6_m}"),"  where next chain element is created by hashing the previous one: ",(0,i.kt)("em",{parentName:"p"},"\u03b6_{i+1} = hash(\u03b6_i)"),".\nThen nodes shall make public the last element ",(0,i.kt)("em",{parentName:"p"},"\u03b6_m")," of their hash chain as their initial salt. Every future salt is the next element of the hash chain. Under this proposal, property 1 above holds because cryptographic hash functions are virtually irreversible.\nProperty 2 holds fairly well: an adversary can only choose one element of their hash chain. Indeed, an adversary can pick a number to be their 300th salt, hash it 300 times, and post that as their initial salt. However, an adversary can only do this for one round since hash functions have effectively random outputs. Thus an adversary is limited in their ability to choose their own salt."),(0,i.kt)("h3",{id:"3424-mana-rank-interval"},"3.4.2.4 Mana rank interval"),(0,i.kt)("p",null,"Each peer discovered and verified via the ",(0,i.kt)("em",{parentName:"p"},"Peer Discovery")," protocol ",(0,i.kt)("em",{parentName:"p"},"shall")," have a consensus mana value associated with it. The peer running the ",(0,i.kt)("em",{parentName:"p"},"Neighbor Selection")," protocol ",(0,i.kt)("em",{parentName:"p"},"shall")," keep this information up-to-date and use it to update a data structure called ",(0,i.kt)("inlineCode",{parentName:"p"},"manaRank")," containing the list of the nodes' identities for each mana value. The aim of this ranking is to select a subset of peers having similar mana to the node preparing the ranking. More specifically, let's define ",(0,i.kt)("inlineCode",{parentName:"p"},"potentialNeighbors")," to be such a subset, that is divided into a ",(0,i.kt)("inlineCode",{parentName:"p"},"lower")," and an ",(0,i.kt)("inlineCode",{parentName:"p"},"upper")," set with respect to a ",(0,i.kt)("inlineCode",{parentName:"p"},"targetMana")," value (i.e., the mana value of the node performing the ranking). By iterating over the ",(0,i.kt)("inlineCode",{parentName:"p"},"manaRank"),", each node ",(0,i.kt)("em",{parentName:"p"},"shall")," fill both the ",(0,i.kt)("inlineCode",{parentName:"p"},"lower")," and  ",(0,i.kt)("inlineCode",{parentName:"p"},"upper")," sets with nodes' identities having a similar rank to itself, not less/greater than a given threshold ",(0,i.kt)("inlineCode",{parentName:"p"},"rho")," respectively, except when each subset does not reach the minimal size ",(0,i.kt)("inlineCode",{parentName:"p"},"r"),"."),(0,i.kt)("p",null,"The following pseudocode describes a reference implementation of this process:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Inputs: \n    manaRank: mapping between mana values and the list of nodes' identities with that mana; \n    targetMana: the mana value of the node performing the ranking;\n    rho: the ratio determining the length of the rank to consider;\n    r: the minimum number of nodes' identities to return for both lower and upper sets;\n    Largest(r, targetMana): the set of r largest cMana holders less than targetMana;\n    Smallest(r, targetMana): the set of r smallest cMana holders greater than targetMana;\n\nOutputs:\n    potentialNeighbors: the set of nodes' identities to consider for neighbor selection;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vbnet"},"FOR mana IN manaRank\n    nodeID = manaRank[mana]\n    IF mana > targetMana\n        IF mana / targetMana < rho\n            Append(upperSet, nodeID)\n    ELSE IF mana == 0 || mana == targetMana\n        BREAK\n    ELSE IF targetMana / mana < rho\n        Append(lowerSet, nodeID)\n\nIF Len(lowerSet) < r\n    // set lowerSet with the r largest mana holders less than targetMana\n    lowerSet = Largest(r, targetMana)\n    \nIF Len(upperSet) < r\n    // set upperSet with the r smallest mana holders greater than targetMana\n    upperSet = Smallest(r, targetMana)\n\npotentialNeighbors = Append(upperSet, lowerSet)\nRETURN potentialNeighbors\n\n")),(0,i.kt)("h3",{id:"3425-selection"},"3.4.2.5 Selection"),(0,i.kt)("p",null,"The maximum number of neighbors is a parameter of the gossip protocol. This section proposes to use a size of 8 equally divided into 4 chosen (outbound) and 4 accepted (inbound) neighbors. It is crucial to decide on a fixed number of neighbors, as the constant number decreases an eclipse probability exponentially. The chosen ",(0,i.kt)("em",{parentName:"p"},"k")," is a compromise between having more connections resulting in lower performance and increased protection from an eclipse attack."),(0,i.kt)("p",null,"The operations involved during neighbor selection are listed in the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Get an up-to-date list of verified and known peers from the ",(0,i.kt)("em",{parentName:"li"},"Peer Discovery")," protocol. "),(0,i.kt)("li",{parentName:"ol"},"Use ",(0,i.kt)("a",{parentName:"li",href:"#Mana_rank"},"mana rank")," to filter the previous list to obtain a list of peers to be potential neighbors."),(0,i.kt)("li",{parentName:"ol"},"Use the score function to request/accept neighbors.")),(0,i.kt)("p",null,"The score between two nodes is measured through the score function ",(0,i.kt)("em",{parentName:"p"},"s"),", defined by:"),(0,i.kt)("p",null,"s(nodeID1, nodeID2, salt) = hash(nodeID1 || nodeID2 || salt), where:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nodeID1")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"nodeID2")," are the identities of the considered nodes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"salt")," is the salt value that can be private or public depending on the peering direction (inbound/outbound)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hash")," is the ",(0,i.kt)("inlineCode",{parentName:"li"},"blake2b")," hash function."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"||")," is the concatanation operation.")),(0,i.kt)("p",null,"Note that the value used as the score is an unsigned integer derived from the first 4 bytes of the byte array after the ",(0,i.kt)("inlineCode",{parentName:"p"},"hash")," function."),(0,i.kt)("p",null,"In order to connect to new neighbors, each node with ID ",(0,i.kt)("inlineCode",{parentName:"p"},"ownID")," and public salt ",(0,i.kt)("inlineCode",{parentName:"p"},"pubSalt")," keeps a list of potential neighbors derived via ",(0,i.kt)("a",{parentName:"p",href:"#Mana_rank"},"Mana rank")," that is sorted by their score ",(0,i.kt)("inlineCode",{parentName:"p"},"d(ownID, \xb7, pubSalt)"),". Then, the node shall send peering requests in ",(0,i.kt)("em",{parentName:"p"},"ascending order"),", containing its own current public salt and a timestamp representing the issuance time of the request.\nThe connecting node shall repeat this process until it has established connections to enough neighbors or it finds closer peers. Those neighbors make up its list of chosen neighbors. This entire process is also illustrated in the following pseudocode:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Inputs: \n    k: desired amount of neighbors; \n    c: current list of chosen neighbors; \n    p: list of potential peers;\n    localID: local nodeID \n    pubSalt: local public salt;\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-vbnet"},"pSorted = SortByScoreAsc(P, localID, pubSalt)\nFOR p IN pSorted\n    peeringRequest = SendPeeringRequest(p)\n    IF peeringRequest.accepted \n        Append(c, p)\n        IF Len(c) == Ceil(k/2) \n            RETURN\n")),(0,i.kt)("p",null,"More specifically, after sending a peering request a node ",(0,i.kt)("em",{parentName:"p"},"shall"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"wait to get a ",(0,i.kt)("a",{parentName:"li",href:"#Peering_Response"},"Peering Response")," that could be positive or negative. ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"If positive, add the peer to its chosen neighbor list"),(0,i.kt)("li",{parentName:"ul"},"If negative, filter out the peer from future requests until the next salt update or the end of the list of potential neighbors is reached."),(0,i.kt)("li",{parentName:"ul"},"If after ",(0,i.kt)("inlineCode",{parentName:"li"},"responseTimeout")," no response is received, try again for a fixed ",(0,i.kt)("inlineCode",{parentName:"li"},"maxPeeringAttempts"),". If not successful, filter out the peer from future requests until the next salt update or the end of the list of potential neighbors is reached.")))),(0,i.kt)("p",null,"Similar to the previous case, in order to accept neighbors, every node with ID ownID ",(0,i.kt)("em",{parentName:"p"},"shall")," generate a private salt ",(0,i.kt)("inlineCode",{parentName:"p"},"privSalt"),"."),(0,i.kt)("p",null,"Upon reception of a ",(0,i.kt)("a",{parentName:"p",href:"#Peering_Request"},"Peering Request"),", a peer ",(0,i.kt)("em",{parentName:"p"},"shall")," make a decision to accept, reject or discard the request by:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"verifying that the signature of the ",(0,i.kt)("a",{parentName:"li",href:"#Peering_Request"},"Peering Request")," is valid and discard the request otherwise;"),(0,i.kt)("li",{parentName:"ul"},"checking that the ",(0,i.kt)("inlineCode",{parentName:"li"},"timestamp")," field is valid (i.e., not older than a given threshold ",(0,i.kt)("inlineCode",{parentName:"li"},"requestExpirationTime")," specified by the node) and discard the request otherwise;"),(0,i.kt)("li",{parentName:"ul"},"checking that the ",(0,i.kt)("em",{parentName:"li"},"mana")," of the requester peer is within the own ",(0,i.kt)("a",{parentName:"li",href:"#Mana_rank"},"Mana rank")," and send back a ",(0,i.kt)("em",{parentName:"li"},"negative")," ",(0,i.kt)("a",{parentName:"li",href:"#Peering_Response"},"Peering Response")," otherwise;"),(0,i.kt)("li",{parentName:"ul"},"checking that the requestor salt matches its hash chain by:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"taking the difference between the timestamp of the peering request and the time the initial salt was set, and then dividing this number by ",(0,i.kt)("inlineCode",{parentName:"li"},"saltUpdateInterval"),", rounding down;"),(0,i.kt)("li",{parentName:"ul"},"hashing the requester public salt as many times as the number of salt changes;"),(0,i.kt)("li",{parentName:"ul"},"finally, if the result does not match the initial salt, discard the peering request;"))),(0,i.kt)("li",{parentName:"ul"},"applying a statistical test to the request defined as ",(0,i.kt)("em",{parentName:"li"},"s(remoteID, ownID, \u03b6_remote) < \u03b8")," for a fixed threshold \u03b8, and discard it otherwise; ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"this test determines the effectiveness of the brute force attack when an attacker tries to establish a connection with a desired peer;"),(0,i.kt)("li",{parentName:"ul"},"with \u03b8 set to 0.01 an attacker has only 1% of chance of being successful;"))),(0,i.kt)("li",{parentName:"ul"},"accept the peering request by sending back a ",(0,i.kt)("em",{parentName:"li"},"positive")," ",(0,i.kt)("a",{parentName:"li",href:"#Peering_Response"},"Peering Response")," if either one of the following conditions is satisfied, and send back a ",(0,i.kt)("em",{parentName:"li"},"negative")," ",(0,i.kt)("a",{parentName:"li",href:"#Peering_Response"},"Peering Response")," otherwise:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"the current size of the accepted neighbors list is smaller than ",(0,i.kt)("em",{parentName:"li"},"Floor(k/2)"),"; "),(0,i.kt)("li",{parentName:"ul"},"the score defined as ",(0,i.kt)("em",{parentName:"li"},"s(ownID, remoteID, privSalt)")," is lower than the current highest score among accepted neighbors. In this case, send a ",(0,i.kt)("a",{parentName:"li",href:"#Peering_Drop"},"Peering Drop")," to drop the accepted neighbor with the highest score replaced by the requester peer. ")))),(0,i.kt)("h3",{id:"3426-neighbor-removal"},"3.4.2.6 Neighbor Removal"),(0,i.kt)("p",null,"Neighbor removal can occur for several reasons:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A node is replacing a neighbor with a better (in terms of score function) one;"),(0,i.kt)("li",{parentName:"ul"},"From the gossip layer, the connection with a neighbor is lost;"),(0,i.kt)("li",{parentName:"ul"},"If some form of reputation or bad behavior is being monitored, a neighbor could be dropped in case of misbehavior. For example, a node could respond to the peering request but choose not to gossip received messages.")),(0,i.kt)("p",null,"Independently from the reason, when a peer drops a neighbor ",(0,i.kt)("em",{parentName:"p"},"shall")," send a ",(0,i.kt)("a",{parentName:"p",href:"#Peering_Drop"},"Peering Drop")," and remove the neighbor from its requested/accepted neighbor list. Upon reception of a ",(0,i.kt)("a",{parentName:"p",href:"#Peering_Drop"},"Peering Drop"),", the peer ",(0,i.kt)("em",{parentName:"p"},"shall")," remove the dropping neighbor from its requested/accepted neighbor list."),(0,i.kt)("h3",{id:"3427-requests-and-responses"},"3.4.2.7 Requests and responses"),(0,i.kt)("p",null,"Each ",(0,i.kt)("em",{parentName:"p"},"peering request, response, drop")," ",(0,i.kt)("em",{parentName:"p"},"shall")," be encapsulated into a ",(0,i.kt)("inlineCode",{parentName:"p"},"data")," field of a generic ",(0,i.kt)("inlineCode",{parentName:"p"},"Request")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Response"),". Its ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," ",(0,i.kt)("em",{parentName:"p"},"shall")," be specified in the ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," field and signed with the ed25519 private key of the sender's ",(0,i.kt)("a",{parentName:"p",href:"#Node_identities"},"identity")," and contain the related public key to allow the receiver to verify the signature. All the received ",(0,i.kt)("em",{parentName:"p"},"peering request, response, drop")," ",(0,i.kt)("em",{parentName:"p"},"shall")," be verified and those with invalid signatures be discarded."),(0,i.kt)("h4",{id:"request-and-response-layout"},"Request and Response Layout"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Name"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"type"),(0,i.kt)("td",null,"uint8"),(0,i.kt)("td",null,"Defines the type of the request or response.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"data"),(0,i.kt)("td",null,"ByteArray"),(0,i.kt)("td",null,"Contains the payload of the request or response (e.g., a PeeringRequest).")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"public_key"),(0,i.kt)("td",null,"ByteArray[32]"),(0,i.kt)("td",null,"The ed25519 public key of the peer's identity used to verify its signatures.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"signature"),(0,i.kt)("td",null,"ByteArray[32]"),(0,i.kt)("td",null,"The ed25519 signature of the `data` field, signed by using the private key of the peer's identity."))),(0,i.kt)("h4",{id:"peering-request"},"Peering Request"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Name"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"timestamp"),(0,i.kt)("td",null,"time"),(0,i.kt)("td",null,"The unix timestamp of the PeeringRequest.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"salt"),(0,i.kt)("td",null,"ByteArray[20]"),(0,i.kt)("td",null,"The public salt of the requester."))),(0,i.kt)("h4",{id:"peering-response"},"Peering Response"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Name"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"req_hash"),(0,i.kt)("td",null,"ByteArray[32]"),(0,i.kt)("td",null,"The blake2b digest of the corresponding received PeeringRequest.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"status"),(0,i.kt)("td",null,"bool"),(0,i.kt)("td",null,"The response (true or false) of the PeeringRequest."))),(0,i.kt)("h4",{id:"peering-drop"},"Peering Drop"),(0,i.kt)("table",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Name"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"timestamp"),(0,i.kt)("td",null,"time"),(0,i.kt)("td",null,"The unix timestamp of the drop."))))}c.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,m=u["".concat(s,".").concat(c)]||u[c]||d[c]||i;return n?a.createElement(m,o(o({ref:t},h),{},{components:n})):a.createElement(m,o({ref:t},h))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);