# The Devnet

**The Devnet is similar to the Mainnet, except the tokens are free and it takes less time and computational power to create and send a transaction. This topic lists some practical information for connecting to the Devnet.**

## Nodes

The IOTA Foundation hosts the following nodes that you can use to connect to the Devnet:

### Load balancer node

The IOTA Foundation hosts many nodes behind the following load balancer:

**URL:** https://nodes.devnet.iota.org

Use this URL for sending transactions and requesting information about the Tangle from nodes on the Devnet.

### ZMQ node

The IOTA Foundation hosts many nodes behind the following load balancer:

Use this endpoint to poll the node for new transactions.

**URL:** tcp://zmq.devnet.iota.org:5556

## Minimum weight magnitude

Transactions on the Devnet must use a minimum weight magnitude (MWM) of at least 9 to be valid.

## Consensus rules

Nodes on the Devnet use a Coordinator that is run by the IOTA Foundation with the following address:

```
EQQFCZBIHRHWPXKMTOLMYUYPCN9XLMJPYZVFJSAY9FQHCCLWTOLLUGKKMXYFDBOOYFBLBI9WUEILGECYM
```


