# GoShimmer

**GoShimmer is a work-in-progress prototype of a node software that allows nodes to reach a consensus without the Coordinator, allowing IOTA networks to be decentralized.**

:::warning: This documentation is not up to date
The GoShimmer documentation has moved to a [GitHub wiki](https://github.com/iotaledger/goshimmer/wiki).
:::

GoShimmer nodes run the prototype software that includes the following Coordicide modules:

- **Autopeering:** Each new node on the network tries to connect to four neighbors and accepts connections from a further four neighbors
- **Node identities:** Each node creates a unique public/private key pair. The public key is used to identify nodes during autopeering. In the future, these identities will allow nodes to receive mana.

By running a GoShimmer node, you can test the cutting-edge developments in the next stage of the IOTA protocol.

## Roadmap

GoShimmer is a prototype node software that the Research Department are developing to test a [Coordicide](https://coordicide.iota.org) alphanet.

When all the modules become available, the GoShimmer nodes will become the Coordicide testnet: A release candidate for the next IOTA protocol.

See the [roadmap](https://roadmap.iota.org/goshimmer-alphanet) for more information.

## Blog posts

Read the following blog posts about GoShimmer:

---------------
#### **Open Sourcing the GoShimmer Prototype** ####
[Open Sourcing the GoShimmer Prototype](https://blog.iota.org/open-sourcing-of-the-goshimmer-prototype-891c0a8eafcb)

An overview of the alpha release of Chronicle.
---------------

## Source code

The source code for this project is hosted on [Github](https://github.com/iotaledger/goshimmer).

## Next steps

[Choose an option to install and run GoShimmer](tutorials/install-goshimmer.md).



