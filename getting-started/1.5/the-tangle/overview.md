# About the Tangle

**The Tangle is the distributed ledger in IOTA that contains an up-to-date history of messages. This section introduces you to the Tangle.**

The Tangle is a single source of truth. Any user, anywhere in the world, is able to send valid messages, formerly known as transactions, to any node, and that message will be replicated across the rest of the network to form one version of truth: The Tangle.

All messages in the Tangle are attached to two others to form a [directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph) (DAG).

![A directed acyclic graph](../images/dag.png)

Each message in the graph is represented by a box, and each attachment is represented by a line.

When a new message is attached to the Tangle, it is attached to two previous messages, adding two new lines to the graph.

## References

Messages are attached to the Tangle by referencing other messages in their [`branchMessage` and `trunkMessage` fields](../references/transaction-fields.md).

References in the Tangle can be one of two types:

- **Direct:** connects a message with those in its `branchMessage` and `trunkMessage` fields. For example, message 5 **directly** references messages 2 and 3.

- **Indirect:** message with those that come before the ones in its `branchMessage` and `trunkMessage` fields. For example, message 6 **indirectly** references message 3 (through message 5).

These references form a message's history, whereby if a message is a **child**, its direct references are its **parents** and its indirect references are its **grandparents**, and so on.

In Tangle explorers, you can usually see links to the parents of a message to allow you to follow its history.

![Parents](../images/parents.png)

## Next steps

[Get an overview of the differences between the Tangle and blockchains](../the-tangle/tangle-vs-blockchain.md).