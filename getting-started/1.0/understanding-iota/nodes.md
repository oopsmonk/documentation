# Nodes

**Nodes are the core of an IOTA network. They run the node software that gives them read and write access to the Tangle. This topic covers what nodes do in an IOTA network.**

Nodes are responsible for the following:

- Attaching new transactions to the Tangle
- Synchronizing with the rest of the network
- Keeping a record of the balances on addresses
- Deciding which transactions are confirmed
- Selecting tip transactions

## Attaching new transactions to the Tangle

When nodes receive a new transaction, they attach it to the Tangle by adding it to their local database.

As a result, at any point in time, all nodes may have different transactions in their local databases. These transactions make up a node's **view of the Tangle**.

To distribute the transactions across the rest of the network, nodes synchronize their local databases with their neighbors.

## Synchronizing with the rest of the network

Like any distributed system, nodes in an IOTA network synchronize their databases with others called neighbors to form a single source of truth.

When one node, no matter where it is in the world, receives a transaction, it will try to [gossip](../references/glossary.md#gossip) it to all its neighbors. This way, all nodes eventually see all transactions and store them in their local databases.

When a node is synchronized, it then has enough information to decide which transactions it considers confirmed.

## Keeping a record of the balances on addresses

All nodes keep a record of the balances of addresses so they can do the following:

- Check that a transaction is not transferring more IOTA tokens than are available on the address
- Respond to clients' requests for their balance

Only when a transaction is confirmed, can nodes update their record of balances.

## Deciding which transactions are confirmed

All transactions remain in a pending state until the node is sure of its validity. For a definition of a valid transaction, see [Transactions](../understanding-iota/transactions.md).

However, even when a transaction is valid, nodes may not be able to make a decision like in the case of a [double spend](../references/glossary.md#double-spend).

When nodes detect double spends they must decide which transaction to consider confirmed and which one to ignore. Nodes do this by using consensus rules that are built into their node software. See [The Coordinator](../understanding-iota/the-coordinator.md) for information about the consensus rules in IOTA networks.

## Selecting tip transactions

All transactions must be attached to two existing transactions in the Tangle.

To request tip transactions from the Tangle, clients use the node's `getTransactionsToApprove` API endpoint.

All IOTA node software includes an algorithm for selecting tip transactions. These algorithms aim to select valid tip transactions with the best chance of being confirmed.

