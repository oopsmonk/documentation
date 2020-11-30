# Sending transactions

**This topic gives you a high-level overview of the steps involved in sending a transaction. At the end of this tutorial, you'll understand what's involved in sending a transaction and why.**

Sending a transaction includes the following steps:

- Choosing an IOTA network
- Getting tip transactions
- Doing proof of work
- Sending the transaction to a node

![Sending a transaction](../images/sending-transaction.png)

## Choosing an IOTA network

The first step in sending a transaction is to choose a node to send it to. This node is your entry point to the Tangle of an IOTA network. See [IOTA networks](../networks/overview.md) for an overview of the different networks.

:::info:
In the previous [tutorial](../first-steps/hello-world.md), you connected to a node in the Devnet.
:::

## Getting tip transactions

To attach your transaction to the Tangle, you need to reference the transaction hashes of two tip transactions in the Tangle. These transactions are the ones that your transaction will be attached to in the Tangle.

To request tip transactions from the Tangle, clients ask nodes to traverse the Tangle in a process called tip selection.

:::info:
In the previous [tutorial](../first-steps/hello-world.md), the `prepareTransfers()` method took care of requesting tip transactions by calling the node's [`getTransactionsToApprove`](root://hornet/1.1/references/api-reference.md#getTransactionsToApprove) endpoint.
:::

All IOTA node software includes an algorithm for [selecting tip transactions](../the-tangle/how-transfer-tokens.md#choosing-where-to-attach-transactions). These algorithms aim to select valid tip transactions with the best chance of being confirmed.

:::info:
For further reference into IOTA's updates into tip transactions / transactions to come, see the Request for Changes (RFC):

- [RFC - 0008](https://github.com/iotaledger/protocol-rfcs/pull/26)
- [RFC - 0017](https://github.com/iotaledger/protocol-rfcs/pull/17)
- [RFC - 0018](https://github.com/iotaledger/protocol-rfcs/pull/18), and
- [RFC - 0024]([iotaledger/protocol-rfcs#0024](https://github.com/iotaledger/protocol-rfcs/pull/0024))

:::

## Doing proof of work

Proof of work (PoW) is cryptographic proof that energy has been spent in computing power to solve a puzzle.

IOTA transactions must contain a proof of work to discourage clients from sending lots of spam transactions, which may put an extra load on nodes. See [Hashcash](https://en.wikipedia.org/wiki/Hashcash) for more examples of proof of work as a spam prevention measure.

An important attribute of any PoW algorithm is that it's difficult to do, but easy to validate. See [Calculating proof of work](../cryptography/proof-of-work.md). The exact difficulty of proof of work is defined by the nodes in an IOTA network in a setting called **minimum weight magnitude** (MWM).

:::info:
In the previous [tutorial](../first-steps/hello-world.md), the `sendTrytes()` method took care of doing remote proof of work by calling the node's [`attachToTangle`](root://hornet/1.1/references/api-reference.md#attachToTangle) endpoint.
:::

You have the following options for doing PoW:

- Remote PoW: When a node does PoW for your transaction
- Local PoW: When your local device does PoW for your transaction
- Outsourced PoW: When a device that is neither a node nor your local device does PoW

Each option for PoW has its advantages and disadvantages.

|**Option**|**Advantages**|**Disadvantages**|
|:-------|:---------|:------------|
|Remote PoW| You can avoid using the computational power needed to do PoW on your own device|Depending on how powerful the node is and how many requests it receives, it may time out and not complete the PoW |
|Local PoW|You aren't reliant on nodes to do PoW|Your device may not be powerful enough to complete PoW in a satisfactory amount of time|
|Outsourced PoW|PoW is usually done faster more more reliably than remote or local PoW|It costs money to set up or use the service|

## Sending the transactions to a node

The last step is sending the transactions to the node so that it can attach the transaction to the Tangle.

:::info:
In the previous [tutorial](../first-steps/hello-world.md), the `sendTrytes()` method took care of sending your transaction by calling the node's [`broadcastTransactions`](root://hornet/1.1/references/api-reference.md#broadcastTransactions) endpoint.
:::

## Next steps

[Learn about the Tangle](../the-tangle/overview.md) and what makes it so powerful.