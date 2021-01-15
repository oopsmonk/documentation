# The Mainnet

**The Mainnet is the IOTA network that uses the IOTA tokens that are traded on cryptocurrency exchanges. This topic lists some practical information for connecting to the Mainnet.**

## Nodes

It is best practice to run your own node to have direct access to the Tangle, instead of relying on third-party nodes to receive your messages. For reference, see the [Hornet node software](root://hornet/1.1/overview.md) documentation.

However, if you want to test the Mainnet, you can find a list of nodes on the following IOTA community websites:

- [iota.dance](https://iota.dance/)

- [thetangle.org](https://thetangle.org/nodes)

## Faucets

Currently, no Mainnet [faucets](../references/glossary.md#faucet) are available. If you know of any community members who offer such a faucet, please get in touch with us in the #documentation-discussion channel on [Discord](https://discord.iota.org/).

## Coordinator public key

Nodes on the Mainnet use a Coordinator that relies on a public key to validate the singatures within a milestone payload. For reference, see [RFC-19](https://github.com/jakubcech/protocol-rfcs/blob/jakubcech-milestonepayload/text/0019-milestone-payload/0019-milestone-payload.md).

:::info:
The Coordinator is temporary. After Chrysalis is completed, we will transition into removing the Coordinator: [Coordicide](https://coordicide.iota.org/post-coordinator).
:::

## Next steps

See an overview of the [Devnet](../networks/devnet.md).

