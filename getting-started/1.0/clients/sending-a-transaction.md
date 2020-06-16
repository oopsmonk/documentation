# Sending a transaction

**This topic gives you a high-level overview of the steps involved in sending a valid transaction.**

:::info:
If you're looking for hands-on coding tutorials, see the [Core client library](root://core/1.0/overview.md) documentation.
:::

Sending a transaction includes the following steps:

- Choosing an IOTA network
- Defining the transaction fields
- Getting tip transactions
- Doing proof of work
- Sending the transaction to a node

image

## Choosing an IOTA network

The first step in sending a transaction is to choose a node to send it to. This node is your entry point to the Tangle of an IOTA network. See [IOTA networks](../networks/overview.md) for an overview of the different networks.

In the client libraries, you can usually connect to a node, using the `provider` field.

```js
const iota = Iota.composeAPI({
provider: 'https://nodes.devnet.iota.org:443'
});
```

### Testing IOTA

When testing IOTA in a development environment, you should consider connecting to a node on the Devnet, Comnet, or your own private Tangle. These IOTA network require less proof of work (PoW), which reduces the time it takes to create transactions.

### Using the valuable IOTA token

When deploying your application in a production environment, you should connect to a node on the Mainnet. This network uses the IOTA token that's traded on cryptocurrency exchanges.

### Using third-party nodes

Connecting to third-party nodes is convenient, but comes at a disadvantage if you need a reliable service.

- Your transactions will compete with other transactions that the node receives and will be processed with a priority that the node decides
- You might be requested to pay for fast PoW computation or to provide a transaction that includes PoW
- A copy of your transactions might be kept only for a limited time that's decided by the IOTA node

To overcome these disadvantages, it's best to run your own node and connect your application to it for direct access to the Tangle. Your own node gives you more control on how fast your transactions are attached to the Tangle and allows you to store them permanently. For the steps involved in setting up a node, see [Running a node](../nodes/overview.md).

## Defining the transaction fields

The way that you define the transaction fields, depends on whether you're storing data or transferring IOTA tokens.

### Storing data

When storing data in the Tangle, you need to send one or more zero-value transactions. For more information about transaction types, see [Transactions](../understanding-iota/transactions.md).

### Tranferring IOTA tokens

When transferring IOTA tokens, you need a bundle that contains enough input, and output transactions to complete the transfer.

## Getting tip transactions

To attach your transaction to the Tangle, you need to reference the transaction hashes of two existing transactions in the Tangle. See [The Tangle](../understanding-iota/the-tangle.md) for more information about references.

These transaction hashes are added to the `branchTransaction` and `trunkTransaction` fields of your transactions.

All transactions in a [bundle](../references/glossary.md#bundle), except the head, are connected to each other through their `trunkTransaction` fields. These connections allow nodes to find all transactions in the same bundle and validate them.

The other `branchTransaction` and `trunkTransaction` fields reference the tail transactions of two existing bundles in the Tangle.

![Connections in a bundle](../images/bundle-structure.png)

### Choosing a depth

When sending a transaction to a node, you can specify a depth argument, which defines how many milestones in the past the node starts the tip selection algorithm. The greater the depth, the farther back in the Tangle the node starts. A greater depth increases the time that nodes take to complete tip selection, making them use more computational power.

To restrict the depth, nodes can define a maximum value for it. Therefore, if you aren't connected to your own node, you should consider doing so. This way, you can make sure that you're using a valid depth.

If you want to use a third-party node, you can check the value of the node's maximum depth by calling the `getNodeAPIConfiguration` endpoint.

## Doing proof of work

Transactions require a [proof of work](../references/glossary.md#proof-of-work) to discourage clients from sending lots of spam transactions, which may put an extra load on nodes. See [Hashcash](https://en.wikipedia.org/wiki/Hashcash) for more examples of proof of work as a spam prevention measure.

An important attribute of any PoW algorithm is that it's difficult to do, but easy to validate. See [Calculating proof of work](../cryptography/proof-of-work.md).

In transactions PoW is stored in the `hash` and `nonce` fields.

You have the following options for doing PoW:

- [Remote PoW](../references/glossary.md#remote-proof-of-work)
- [Local PoW](../references/glossary.md#local-proof-of-work)
- [Outsourced PoW](../references/glossary.md#outsourced-proof-of-work)

Each option for PoW has its advantages and disadvantages.

|**Option**|**Advantages**|**Disadvantages**|
|:-------|:---------|:------------|
|Remote PoW| You can avoid using the computational power needed to do PoW|Depending on how powerful the node is and how many requests it receives, it may time out and not complete the PoW |
|Local PoW|You aren't reliant on nodes to do PoW|Your device may not be powerful enough to complete PoW in a satisfactory amount of time|
|Outsourced PoW|PoW is usually done faster more more reliably than remote or local PoW|It costs money to set up or use the service|

## Sending the transactions to a node

The last step is sending the transactions to the node so that it can attach the transaction to the Tangle and decide whether it is confirmed.