# The Tangle

**The Tangle is the distributed ledger in IOTA that contains an up-to-date history of transactions. This topic describes the structure of the Tangle and what makes it immutable.**

The Tangle is a single source of truth. Any client, anywhere in the world, is able to send valid transactions to any node, and that transaction will be replicated across the rest of the network to form one version of truth: The Tangle.

## Immutability in the Tangle

To make the Tangle immutable, each transaction in it is attached to two previous transactions by their transaction hashes. See the `branchTransaction` and `trunkTransaction` fields in [Transactions](../understanding-iota/transactions.md).

If any of the values in a transaction's fields were to change, the transaction hash would be invalid, which would also invalidate the transactions that are attached to it. Therefore, a transaction is said to approve the ones in its `branchTransaction` and `trunkTransaction` fields.

For example, if transaction 6 instructs a node to withdraw 10 Mi from an address, the past cone of that transaction's parents must lead to a point where that address is sent at least 10 Mi.

![A directed acyclic graph](../images/dag.png)

These attachments form a data structure called a directed acyclic graph (DAG). Transactions on the left come first in the sequence. The arrows (also called edges) represent the attachments among transactions.
The numbered boxes (also called a vertices) represent transactions. For more information about DAGs, see [Directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph) on Wikipedia.

For an in-depth explanation of how the Tangle works, see the blog post series: [The Tangle: an Illustrated Introduction](https://blog.iota.org/the-tangle-an-illustrated-introduction-4d5eae6fe8d4).
