# How IOTA tokens are transferred

**This topic explains how IOTA tokens are transferred in the Tangle.**

To explain how IOTA tokens are transferred from one address to another, this topic follows three characters:

- Alice

- Bob

- Charlie 

## The goal

Charlie wants to transfer 10 i to Bob.

## What is in the Tangle

In this example, Alice had 10 i that she transferred to Bob.

Therefore, the Tangle now includes a [value transaction](../the-tangle/transaction-types.md) that transferred those 10 i to Bob.

## Choosing where to attach transactions

To transfer 10 i to Bob, Charlie must attach a value transaction to the Tangle. To do so, he [needs two tip transactions](../first-steps/sending-transactions.md#getting-tip-transactions) to which he can attach his own transaction.

To get these tip transactions, Charlie requests them from a node.

The node selects two transactions by using an algorithm called [tip selection](../the-tangle/tip-selection.md). This algorithm selects two valid tip transactions that lead to a valid ledger state.

:::info:
The ledger state is a record of all the value transactions that have transferred IOTA tokens in the Tangle, including the state of all balances on addresses. This state must always be balanced: The total number of IOTA tokens must always add up to the [total supply](../the-tangle/genesis.md).
:::

By using the tip transactions that the node gave him, Charlie lets the network know that he is also approving them and their history. If any of those transactions turn out to be invalid, Charlie's transaction will also be treated as invalid and will not be selected by other nodes during tip selection.

:::info:
Nodes ignore invalid parts of the Tangle during tip selection. These parts are called an invalid subtangle.
:::

## Signing the transactions

To prove to nodes that he is indeed the owner of the IOTA tokens in his address, Charlie signs an input transaction with his private key. This input transaction withdraws 10 i from his address.

Charlie then creates an output transaction to deposit that 10 i into Bob's address. This transaction does not need a signature because it is not withdrawing IOTA tokens.

Then Charlie puts all the transactions in a bundle and sends them to a node on an IOTA network.

## Waiting for the transactions to be confirmed

Anyone is free to send transactions to a node at any time. As a result, it is not always a simple matter of selecting valid tip transactions. Sometimes a node must make a decision on which of two valid transactions to prefer.

For example, what if Alice actually attached two transactions to the Tangle: One that transferred 10 i to Bob, and one that transferred 10 i to Charlie?  Together, these transactions would be called a double spend because they try to transfer the same IOTA tokens to different addresses.

Both of Alice's transactions could not be part of the ledger state because it would result in a negative balance for Alice’s address: - 10 i.

Transactions in the Tangle are confirmed by special transactions called milestones that are sent by a client called the Coordinator.

After Charlie's transaction is confirmed by a milestone, the nodes update his and Bob's balances to reflect the transfer of 10 i to Bob's address.

Bob can now spend his new IOTA tokens.

## Next steps

[Learn about the Coordinator](../the-tangle/the-coordinator.md) and how its milestones are used in an IOTA network.