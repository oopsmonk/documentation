# The Coordinator

**The Coordinator is a client that sends signed transactions called milestones that nodes trust and use to confirm transactions. This topic describes the role of the Coordinator.**

All nodes use the following simple rule to determine if a transaction is confirmed:

_A transaction is confirmed if it is directly or indirectly referenced by a milestone._

Using this rule, nodes can easily agree on which transactions are confirmed by monitoring the Tangle for milestones. When a node receives a valid milestone, it validates the signature and marks its history as confirmed.

##  Sending milestones

To send these milestones, the Coordinator connects to a node, which does tip selection to select two valid tip transactions from the Tangle. After nodes verify the milestone, these tip transactions and their history are then confirmed.

To make sure that nodes can continue confirming transactions, the Coordinator sends milestones at regular intervals. Each milestone that the Coordinator sends has an index. This index is incremented for each new milestone so that nodes are aware of whether they are synchonized with the rest of the network.

![Milestones being attached to the Tangle](../images/milestones.gif) 

### How nodes verify milestones

Every node in the same IOTA network is hard-coded with the address of a Coordinator. So, whenever nodes see a milestone, they validate it by doing a number of checks, including:

* The milestone came from the Coordinator's address
* The milestone isn't attached to an invalid subtangle

As a result, if the Coordinator were to ever send an invalid milestone such as one that references double spends, the rest of nodes would not accept it.

To allow the Coordinator to sign many bundles whose signatures can still be verified against one address, that address is a [Merkle root address](../cryptography/merkle-tree-address.md).

## Next steps

[Learn about IOTA accounts](../accounts/overview.md) and how you can create one to prove your ownership of transactions.

