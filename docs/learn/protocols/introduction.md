---
description: Get an overview around IOTA's different protocol versions.
keywords: [
    IOTA,
    Stardust,
    Chrysalis,
    IOTA 2.0
    Multi-Asset Ledger,
    ISC,
    Output Features,
    Unlock Conditions,
    White Flag Consensus,
  ]
---

# Introduction

This page provides an overview around the different protocol versions within the IOTA ecosystem.

| Name                                                         | Release Date               | Description                                                                                                                                                                                                                                                                                                                                             | Consensus                                         | Features                                                                                               | Networks                                                                                                   |
| ------------------------------------------------------------ | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| Legacy Trinary                                               | 2016                       | Based on a [probabilistic consensus algorithm using random walks on a DAG](https://assets.ctfassets.net/r1dr6vzfxhev/2t4uxvsIqk0EUau6g2sw0g/45eae33637ca92f85dd9f4a3a218e1ec/iota1_4_3.pdf), the original version of the IOTA protocol                                                                                                                  | [PoA - Coordinator](/learn/protocols/coordinator) | Bundles, trinary                                                                                       | -                                                                                                          |
| [Chrysalis Phase 1](/learn/protocols/chrysalis/introduction) | August 2020 (IOTA Mainnet) | Replaced the heavy probabilistic consensus algorithm to use the [White-Flag approach](/learn/protocols/chrysalis/core-concepts/white-flag-consensus) instead                                                                                                                                                                                            | [PoA - Coordinator](/learn/protocols/coordinator) | White-Flag Confirmation                                                                                | [Legacy IOTA Mainnet](/build/networks-endpoints/#legacy)                                                   |
| [Chrysalis Phase 2](/learn/protocols/chrysalis/introduction) | April 2021 (IOTA Mainnet)  | Switched from trinary to binary for data representation, changed from an account model to UTXO, removed Winternitz One Time Signatures (WOTS) and introduced EdDSA, dust protection and a complete overhaul of all APIs                                                                                                                                 | [PoA - Coordinator](/learn/protocols/coordinator) | Binary, EdDSA, UTXO, Removal of WOTS                                                                   | [IOTA Mainnet](/build/networks-endpoints/#iota-mainnet), [DevNet](/build/networks-endpoints/#devnet)       |
| [Stardust](/learn/protocols/stardust/introduction)           | September 2022 (Shimmer)   | Upgraded the ledger to support multiple assets instead of just the base token, switched the dust protection to a more granular one based on exact byte costs, renamed vertices from "messages" to "blocks", introduced concepts such as `FoundryOutput`, `AliasOutput` and `NFTOutput`. Also added the foundation for ISC anchoring via `AliasOutput`s. | [PoA - Coordinator](/learn/protocols/coordinator) | Multi-Asset Ledger, ISC support, Byte Cost Based Dust Protection, Blocks as vertices, Bech32 addresses | [Shimmer](/build/networks-endpoints/#shimmer), [Public Testnet](/build/networks-endpoints/#public-testnet) |
| IOTA 2.0                                                     | -                          | The upcoming version of IOTA running under a PoS scheme with a leaderless consensus algorithm called On-Tangle-Voting. Introduces the concept of mana, which is a resource used to pay for network utilisation.                                                                                                                                         | PoS - OTV                                         | Mana, Staking, PoS, AccountOutput, ICCA                                                                | -                                                                                                          |