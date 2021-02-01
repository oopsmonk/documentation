# Messages

**This topic explores messages, models, and payloads that encompass the transfer of data within the Tangle.**

## Messages

A message is the object nodes gossip around in the network. It always references two other messages that are known as parents. It is stored as a vertex on the tangle data structure that the nodes maintain.

Messages can contain payloads. Some of them are core payloads that are processed by all nodes as part of the core protocol. Others are community payloads that enable the building of new functionalities on top of the Tangle. And some payloads have other nested payloads embedded inside. So upon parsing, it is done layer by layer.

For further reference, see our [Messages](https://github.com/GalRogozinski/protocol-rfcs/blob/message/text/0017-message/0017-message.md#message-structure) RFC.

## UTXO

Previously, IOTA protocol used transactions (which were vertices in the Tangle), where each transaction defined either an input or output. A grouping of those input/output transaction vertices made up a bundle which transferred the given values as an atomic unit. But this approach was seen as too time consuming. So, we adopted a new transaction structure called the unspent transaction outputs (UTXO). 

The UTXO model defines a ledger state where balances are not directly associated to addresses but to the outputs of transactions. In this model, transactions specify the outputs of previous transactions as inputs, which are consumed to create new outputs. A transaction must consume the entirety of the specified inputs.

![UTXO flow](https://camo.githubusercontent.com/718a66923f2c437fb814e8bd77ec52cb5e0d550254f641281479d6c8480e0149/68747470733a2f2f692e696d6775722e636f6d2f6833757866364e2e706e67)

So, the UTXO is a part of a larger, self-contained, and flexible message structure known as a [payload](#message-payloads). This approach is meant to enable a self-contained message structure defining the data of the entire transfer as a payload to be imbedded into a message.

Overall, these payload structures are simple:

| Name         | Type      | Description                                          |
| ------------ | --------- | ---------------------------------------------------- |
| Payload Type | uint32    | Must be set to **2**                                 |
| Index        | string    | The index key of the message, a UTF-8 encoded string |
| Data         | ByteArray | Data we are attaching                                |



Additionally, there can be three types of message payloads

- **A transaction payload**
- **An indexation payload**
- **A milestone payload**

## Message payloads

### Transaction payload

A transaction payload is made up of two parts:

1. The *Transaction Essence* part which contains the inputs, outputs, and an optional embedded payload.
2. The *Unlock Blocks* which unlock the *Transaction Essence*'s inputs. In case the unlock block contains a signature, it signs the entire *Transaction Essence* part.

In general, all parts of a transaction payload begin with a byte describing the type of the given part to keep the flexibility to introduce new types/versions of the given part in the future.

And, as mentioned above, the payload part of a *Transaction Essence* can hold an optional payload. This payload does not affect the validity of the *Transaction Essence*. If the transaction is not valid, then the payload must also be discarded.

### Indexation payload

The concept of the payload allows for the addition of an index to the encapsulating message, as well as some arbitrary data. Nodes expose an API that enable the querying of messages by the index. Index payloads may also be contained within a transaction payload.

### Milestone payload

A milestone payload contains the *Milestone Essence*, which consists of the actual milestone information (like its index number or position in the tangle), which is signed using the Ed25519 signature scheme. It uses keys of 32 bytes, while the generated signatures are 64 bytes.

To increase the security of the design, a milestone can (optionally) be independently signed by multiple keys at once. These keys should be operated by detached signature provider services running on independent infrastructure elements. This assist in mitigating the risk of an attacker having access to all the key material necessary for forging milestones.

In addition, a key rotation policy can also be enforced by limiting key validity to certain milestone intervals.

### Conflict

Additionally, if messages are conflicting, milestones can confirm them by enforcing deterministic ordering by applying only the first message that will not violate the ledger state; this is accomplished by using the White Flag feature. For further reference, see [RFC-0005](https://github.com/thibault-martinez/protocol-rfcs/blob/white-flag-chrysalis-pt-2/text/0005-white-flag/0005-white-flag.md).

## Validation

Finally, a message is considered valid if the following syntactic rules are met:

1. The message size must not exceed 32 KiB (32 * 1024 bytes).
2. When parsing the message is complete, there should not be any trailing bytes left that were not parsed.
3. If the `payload type` is in the core payload range (0-127) and the node is familiar with it, or if it is above this range.
4. If the [Message PoW Hash](https://github.com/Wollac/protocol-rfcs/blob/message-pow/text/0024-message-pow/0024-message-pow.md) will contain at least the number of trailing 0 trits the node defines as required.
5. `Parents' length` must be 2

## Next steps

[Learn what makes messages immutable in the Tangle](../the-tangle/immutability.md).