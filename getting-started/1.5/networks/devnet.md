# The Devnet

**The Devnet is similar to the Mainnet, except the tokens are free and it takes less time and computational power to create and send a message. This topic lists some practical information for connecting to the Devnet.**

## Nodes

The IOTA Foundation hosts the following nodes that you can use to connect to the Devnet:

### Load balancer node

The IOTA Foundation hosts many nodes behind the following load balancer:

**URL:** https://nodes.devnet.iota.org

Use this URL for sending messages and requesting information about the Tangle from nodes in the Devnet.

### ZMQ node

Use this endpoint to poll the node for new messages:

**URL:** tcp://zmq.devnet.iota.org:5556

## Faucets

Use the following [faucets](../references/glossary.md#faucet) to transfer up to 1 Ki of IOTA tokens to one of your addresses in the Devnet:

- **[Official faucet](https://faucet.devnet.iota.org/):** Distributes tokens in batches of 1 Ki

## Coordinator public key

Nodes on the Mainnet use a Coordinator that relies on a public key to validate the singatures within a milestone payload. For reference, see [RFC-19](https://github.com/jakubcech/protocol-rfcs/blob/jakubcech-milestonepayload/text/0019-milestone-payload/0019-milestone-payload.md).

:::info:
The Coordinator is temporary. After Chrysalis is completed, we will transition into removing the Coordinator: [Coordicide](https://coordicide.iota.org/post-coordinator).
:::

## Next steps

See an overview of the [Comnet](../networks/commnet.md).
