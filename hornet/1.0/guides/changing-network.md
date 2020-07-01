# Connecting to a different IOTA network

**Because each network is unique, each one has different transactions in its Tangle. This topic, discusses the process of connecting an existing node to a different IOTA network.**

## Changing any fixed neighbors

If you have fixed neighbors in the `peering.json` file, those neighbors are part of the IOTA network that you are trying to leave.

To connect to a different IOTA network, you need to either remove those fixed neighbors from the file, or replace them with neighbors in your new IOTA network. For more information about adding fixed neighbors, see [Managing fixed neighbors](../guides/managing-neighbors.md).

## Changing the network configuration

Each network may use a different Coordinator and may also accept a different minimum weight magnitude, which both affect consensus. See [IOTA networks](root://getting-started/1.0/networks/overview.md) for more information.

Therefore, to connect to a different IOTA network, you must check these configuration fields in your configuration file.

### Connecting to the Devnet

Hornet comes with a configuration file that includes the network configuration for the Devnet. This file is called `config_devnet.json`.

To connect to the Devnet, you can start Hornet with the following option `-c config-devnet`.

### Connecting to the Comnet

Because Hornet is a community project, it comes with a configuration file that includes the network configuration for the community network. This file is called `config_comnet.json`.

To connect to the Comnet, you can start Hornet with the following option `-c config_comnet`.





