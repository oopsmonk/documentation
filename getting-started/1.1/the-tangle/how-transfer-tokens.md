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

Therefore, the Tangle now includes a value transaction that transferred those 10 i to Bob.

## Choosing where to attach the transaction

To transfer 10 i to Bob, Charlie must attach a value transaction to the Tangle. To do so, he [needs two tip transactions](../first-steps/sending-transactions.md#getting-tip-transactions) to which he can attach his own transaction.

To get these tip transactions, Charlie requests them from a node.

The node selects two transactions by using an algorithm called tip selection. This algorithm selects two valid tip transactions that lead to a valid ledger state.

The ledger state is a record of all the value transactions that have transferred IOTA tokens in the Tangle, including the state of all balances on addresses. This state must always be balanced: The total number of IOTA tokens must always add up to the [total supply](../the-tangle/genesis.md).

During tip selection, the node finds a conflicting transaction in the Tangle: A double spend.

## Reaching a consensus on double spends

Anyone is free to send transactions to a node at any time. As a result, it is not always a simple matter of selecting valid tip transactions. Sometimes a node must make a decision on which of two valid transactions to prefer.

Alice actually attached two transactions to the Tangle: One that transferred 10 i to Bob, and one that transferred 10 i to Charlie. These transactions are called a double spend because they try to transfer the same IOTA tokens to different addresses.

Charlie's transaction cannot be attached to both of Alice's because the ledger state would have a negative balance for Alice’s address: - 10 i.

Therefore, the node chooses one to prefer during tip selection. In this case, the one that transferred 10 i to Bob.

Eventually, all nodes will also choose one to prefer, and one of the subtangles will grow larger than the other. When this happens, the smaller subtangle will be abandoned as an invalid subtangle. This way, nodes reach a consensus on which transaction is valid.

## Approving the tip transactions

By using the tip transactions that the node gave him, Charlie lets the network know that he is also approving them and their history, including Alice's transactions. If any of those transactions turn out to be invalid, Charlie's transaction will also be treated as invalid and will not be selected by other nodes during tip selection.

:::info:
Nodes ignore invalid parts of the Tangle during tip selection. These parts are called an invalid subtangle.
:::

## Confirming the transactions

Because consensus is reached over time through tip selection, a transaction cannot be considered confirmed immediately. Nodes must wait for a transaction to be confirmed before they update the balances of any addresses.

Transactions in the Tangle are confirmed by a client called the Coordinator.

Bob waits for Charlie's transaction to be confirmed before he can spend his IOTA tokens.

## Updating balances

After Charlie's transaction is confirmed, the nodes update his and Bob's balances to reflect the transfer of 10 i to Bob's address.

Bob can now spend his new IOTA tokens.

## Next steps

[Learn about the Coordinator](../the-tangle/the-coordinator.md) and how its milestones are used in an IOTA network.