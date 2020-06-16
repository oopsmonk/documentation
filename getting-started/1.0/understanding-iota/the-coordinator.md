# The Coordinator

**The Coordinator is a client that sends signed transactions called milestones that nodes trust and use to confirm transactions. This topic describes the role of the Coordinator.**

All nodes use the following simple rule to determine if a transaction is confirmed.:

_A transaction is confirmed if it is directly or indirectly referenced by a milestone._

Using this rule, nodes can easily agree on which transactions are confirmed by monitoring the Tangle for milestones. When a node receives a valid milestone, it validates the signature and marks the past cone of any referenced transactions as confirmed.

To make sure that nodes can continue confirming transactions, the Coordinator sends milestones at regular intervals.

![Milestones being attached to the Tangle](../images/milestones.gif)

## Verifying milestones

Every node in the same IOTA network is hard-coded with the address of a Coordinator. So, whenever nodes see a milestone, they validate it by doing a number of checks, including:

* The milestone came from the Coordinator's address
* The milestone doesn't reference any invalid transactions

As a result, if the Coordinator were to ever send an invalid milestone such as one that references counterfeit transactions, the rest of nodes would not accept it.

To allow the Coordinator to sign many bundles whose signatures can still be verified against one address, that address is derived from a Merkle signature scheme.

## The Coordinator's Merkle tree

To generate an address from a Merkle tree, first a number of addresses are generated from a seed, using the process described above. 

:::info:
Because these addresses don't appear in transactions, they are referred to as public keys in the rest of this section.
:::

Each public key has one corresponding private key, making it safe to sign only one transaction for each public key in the Merkle tree.

The total number of public keys that are generated depends on the depth of the Merkle tree in this formula:

2<sup>depth</sup>

In this example, the Merkle tree's depth is 2, resulting in 4 public keys. As a result, this Merkle tree could be used to sign 4 transactions that prove ownership of the address.

![Example Merkle tree](../images/merkle-tree.png) 

To allow nodes to verify a transaction's signature where the address is the Merkle root, the bundle must contain the following:

- Enough zero-value transactions to contain the fragmented signature
- One transaction whose [`signatureMessageFragment` field](../transactions/transactions.md#signatureMessageFragment) contains enough missing data from the Merkle tree to allow the node to rebuild the Merkle root

If the rebuilt Merkle root is the same as the transaction's address, the signature is valid.

For example, a node receives a transaction that was signed with the private key of public key 1.

First, the node [verifies the W-OTS](#verifying-a-w-ots) to find out public key 1.

Then, the node looks at the rest of the bundle for the following:

- Public key 2
- The hash of public key 3 and 4

Using this information, the node hashes public keys 1 and 2. Then, the node hashes that hash along with the hash of public key 3 and 4 to find the Merkle root.

If the Merkle root is the same as the transaction's address, the signature is valid.

![Example Merkle tree](../images/merkle-tree.png) 