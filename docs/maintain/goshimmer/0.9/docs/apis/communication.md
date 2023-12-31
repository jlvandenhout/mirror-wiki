---
description: The communication layer represents the base Tangle layer where so called `Blocks` are gossiped around. A `Block` contains payloads, and it is up to upper layers to interpret and derive functionality out of them.
image: /img/logo/goshimmer_light.png
keywords:
  - client library
  - HTTP API
  - block
  - encoded block id
  - consensus
  - payload
---

# Communication Layer APIs

The communication layer represents the base Tangle layer where so called `Blocks` are gossiped around. A `Block` contains payloads and it is up to upper layers to interpret and derive functionality out of them.

The API provides the following functions to interact with this primitive layer:

- [/blocks/:blockID](#blocksblockid)
- [/blocks/:blockID/metadata](#blocksblockidmetadata)
- [/data](#data)
- [/blocks/payload](#blockspayload)

Client lib APIs:

- [GetBlock()](#client-lib---getblock)
- [GetBlockMetadata()](#client-lib---getblockmetadata)
- [Data()](#client-lib---data)
- [SendPayload()](#client-lib---sendpayload)

## `/blocks/:blockID`

Return block from the tangle.

### Parameters

| **Parameter**            | `blockID`                 |
| ------------------------ | ------------------------- |
| **Required or Optional** | required                  |
| **Description**          | ID of a block to retrieve |
| **Type**                 | string                    |

### Examples

#### cURL

```shell
curl --location --request GET 'http://localhost:8080/blocks/:blockID'
```

where `:blockID` is the base58 encoded block ID, e.g. 4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc.

#### Client lib - `GetBlock`

Blocks can be retrieved via `GetBlock(base58EncodedID string) (*jsonmodels.Block, error) `

```go
block, err := goshimAPI.GetBlock(base58EncodedBlockID)
if err != nil {
    // return error
}

// will print "Hello GoShimmer World"
fmt.Println(string(block.Payload))
```

Note that we're getting actual `Block` objects from this call which represent a vertex in the communication layer Tangle. It does not matter what type of payload the block contains, meaning that this will also return blocks which contain a transactions or DRNG payloads.

### Response Examples

```json
{
  "id": "4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc",
  "strongParents": [
    "6LrXyDCorw8bTWKFaEmm3CZG6Nb6Ga8Bmosi1GPypGc1",
    "B89koPthm9zDx1p1fbkHwoyC1Buq896Spu3Mx1SmSete"
  ],
  "weakParents": [],
  "strongChildren": [
    "4E4ucAA9UTTd1UC6ri4GYaS4dpzEnHPjs5gMEYhpUK8p",
    "669BRH69afQ7VfZGmNTMTeh2wnwXGKdBxtUCcRQ9CPzq"
  ],
  "weakChildren": [],
  "issuerPublicKey": "9DB3j9cWYSuEEtkvanrzqkzCQMdH1FGv3TawJdVbDxkd",
  "issuingTime": 1621873309,
  "sequenceNumber": 4354,
  "payloadType": "GenericDataPayloadType(0)",
  "payload": "BAAAAAAAAAA=",
  "signature": "2J5XuVnmaHo54WipirWo7drJeXG3iRsnLYfzaPPuy6TXKiVBqv6ZYg2NjYP75xvgvut1SKNm8oYTchGi5t2SjyWJ"
}
```

### Results

| Return field      | Type       | Description                         |
| :---------------- | :--------- | :---------------------------------- |
| `id`              | `string`   | Block ID.                           |
| `strongParents`   | `[]string` | List of strong parents' block IDs.  |
| `weakParents`     | `[]string` | List of weak parents' block IDs.    |
| `strongChildren`  | `[]string` | List of strong children' block IDs. |
| `weakChildren`    | `[]string` | List of weak children' block IDs.   |
| `issuerPublicKey` | `[]string` | Public key of issuing node.         |
| `issuingTime`     | `int64`    | Time this block was issued          |
| `sequenceNumber`  | `uint64`   | Block sequence number.              |
| `payloadType`     | `string`   | Payload type.                       |
| `payload`         | `[]byte`   | The contents of the block.          |
| `signature`       | `string`   | Block signature.                    |
| `error`           | `string`   | Error block. Omitted if success.    |

## `/blocks/:blockID/metadata`

Return block metadata.

### Parameters

| **Parameter**            | `blockID`                 |
| ------------------------ | ------------------------- |
| **Required or Optional** | required                  |
| **Description**          | ID of a block to retrieve |
| **Type**                 | string                    |

### Examples

#### cURL

```shell
curl --location --request GET 'http://localhost:8080/blocks/:blockID/metadata'
```

where `:blockID` is the base58 encoded block ID, e.g. 4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc.

#### Client lib - `GetBlockMetadata`

Block metadata can be retrieved via `GetBlockMetadata(base58EncodedID string) (*jsonmodels.BlockMetadata, error)`

```go
block, err := goshimAPI.GetBlockMetadata(base58EncodedBlockID)
if err != nil {
    // return error
}

// will print whether block is finalized
fmt.Println(string(block.Finalized))
```

### Response Examples

```json
{
  "id": "4MSkwAPzGwnjCJmTfbpW4z4GRC7HZHZNS33c2JikKXJc",
  "receivedTime": 1621873309,
  "solid": true,
  "solidificationTime": 1621873309,
  "structureDetails": {
    "rank": 23323,
    "pastMarkerGap": 0,
    "isPastMarker": true,
    "pastMarkers": {
      "markers": {
        "1": 21904
      },
      "highestIndex": 21904,
      "lowestIndex": 21904
    }
  },
  "conflictID": "ConflictID(MasterConflictID)",
  "scheduled": false,
  "booked": true,
  "invalid": false,
  "confirmationState": 3,
  "confirmationStateTime": 1621873310
}
```

### Results

| Return field         | Type               | Description                                     |
| :------------------- | :----------------- | :---------------------------------------------- |
| `id`                 | `string`           | Block ID.                                       |
| `receivedTime`       | `int64`            | Time when block was received by the node.       |
| `solid`              | `bool`             | Flag indicating whether the block is solid.     |
| `solidificationTime` | `int64`            | Time when block was solidified by the node.     |
| `structureDetails`   | `StructureDetails` | List of weak children' block IDs.               |
| `conflictID`         | `string`           | Name of conflict that the block is part of.     |
| `scheduled`          | `bool`             | Flag indicating whether the block is scheduled. |
| `booked`             | `bool`             | Flag indicating whether the block is booked.    |
| `eligible`           | `bool`             | Flag indicating whether the block is eligible.  |
| `invalid`            | `bool`             | Flag indicating whether the block is invalid.   |
| `finalized`          | `bool`             | Flag indicating whether the block is finalized. |
| `finalizedTime`      | `string`           | Time when block was finalized.                  |
| `error`              | `string`           | Error block. Omitted if success.                |

## `/data`

Method: `POST`

A data block is simply a `Block` containing some raw data (literally bytes). This type of block has therefore no real functionality other than that it is retrievable via `GetBlock`.

### Parameters

| **Parameter**            | `data`                  |
| ------------------------ | ----------------------- |
| **Required or Optional** | required                |
| **Description**          | data bytes              |
| **Type**                 | base64 serialized bytes |

#### Body

```json
{
  "data": "dataBytes"
}
```

### Examples

#### cURL

```shell
curl --location --request POST 'http://localhost:8080/data' \
--header 'Content-Type: application/json' \
--data-raw '{"data": "dataBytes"}'
```

#### Client lib - `Data`

##### `Data(data []byte) (string, error)`

```go
blockID, err := goshimAPI.Data([]byte("Hello GoShimmer World"))
if err != nil {
    // return error
}
```

Note that there is no need to do any additional work, since things like tip-selection, PoW and other tasks are done by the node itself.

### Response Examples

```json
{
  "id": "blockID"
}
```

### Results

| Return field | Type     | Description                              |
| :----------- | :------- | :--------------------------------------- |
| `id`         | `string` | Block ID of the block. Omitted if error. |
| `error`      | `string` | Error block. Omitted if success.         |

## `/blocks/payload`

Method: `POST`

`SendPayload()` takes a `payload` object of any type (data, transaction, drng, etc.) as a byte slice, issues a block with the given payload and returns its `blockID`. Note that the payload must be valid, otherwise an error is returned.

### Parameters

| **Parameter**            | `payload`               |
| ------------------------ | ----------------------- |
| **Required or Optional** | required                |
| **Description**          | payload bytes           |
| **Type**                 | base64 serialized bytes |

#### Body

```json
{
  "payload": "payloadBytes"
}
```

### Examples

#### cURL

```shell
curl --location --request POST 'http://localhost:8080/blocks/payload' \
--header 'Content-Type: application/json' \
--data-raw '{"payload": "payloadBytes"}'
```

#### Client lib - `SendPayload`

##### `SendPayload(payload []byte) (string, error)`

```go
helloPayload := payload.NewData([]byte{"Hello GoShimmer World!"})
blockID, err := goshimAPI.SendPayload(helloPayload.Bytes())
```

### Response Examples

```shell
{
  "id": "blockID"
}
```

### Results

| Return field | Type     | Description                              |
| :----------- | :------- | :--------------------------------------- |
| `id`         | `string` | Block ID of the block. Omitted if error. |
| `error`      | `string` | Error block. Omitted if success.         |

Note that there is no need to do any additional work, since things like tip-selection, PoW and other tasks are done by the node itself.
