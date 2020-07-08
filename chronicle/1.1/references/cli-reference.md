# Chronicle configuration settings

**This reference topic documents every configuration setting that is available for the Chronicle command-line interface.**

## version

The version of the CLI that you want to use.

Currently, only one version exists: `chronicle-alpha-v0.1.0`.

## service

The name of the CLI service.

Currently, only one service is available: `permanode`.

## addresses

The URLs or IP addresses of any Scylla nodes that you want to query for transactions.

The default setting is `172.17.0.2:9042`, which is usually the default address of a Scylla node in a Docker container.

If you want to store transactions on these Scylla nodes, make sure to add the name of their datacenters to the `data_centers` setting. Otherwise, your Scylla node will not have access to the transactions and will return an error.

## keyspace_name

The name of your Scylla Keyspace

The default setting is `tangle`.

You may want to change this if your Scylla node already uses a Keyspace with that name.

## replication_factor_per_data_center

The number of Scylla nodes in a datacenter on which to store the same transactions.

The default setting is `1`.

For example, a replication factor of 1 means that there is only one copy of transactions in a cluster, and there is no way to recover the data if the node is compromised or goes down.

## data_centers

The names of your Scylla nodes' datacenters.

The default setting is `datacenter1`.

## local_dc

The name of the datacenter that Chronicle queries first.

The default setting is `datacenter1`.

To reduce latency, it's best to install Chronicle in the same local network as this datacenter. For more information about datacenters, see the [Scylla University](https://university.scylladb.com/courses/scylla-essentials-overview/lessons/architecture/topic/datacenter/).

## files

Path to any `.dmp` files that you want to import into your Scylla cluster.

The default setting is `[]`, which does not import files.

If your Scylla cluster has trouble importing the files such as in the event of a timeout, it will try to import them again until it reaches the limit in the `max_retries` setting.

## import_only_confirmed_transactions

Whether to import only confirmed transactions from the `.dmp` files.

The default setting is `true`.

## max_retries

The maximum number of times to try importing the files.

The default setting is `1000`.

## core_threads

The number of threads that Chronicle may use.

The default setting is `2`.

This number should not exceed the total number of CPU cores in your device.

## dashboard_websocket

The IP address of a websocket for managing Chronicle.

The default setting is `0.0.0.0:8080`.

You can use this websocket to edit some configuration settings while Chronicle is running.

## endpoint

The IP address and port on which Chronicle listens for API requests.

The default setting is `0.0.0.0:4000`.

See the [API reference](../references/chronicle-api-reference.md) for details.

## trytes_nodes

The URLs or IP addresses of any IOTA nodes from which to get all transactions that include a valid proof of work.

If you want to get transactions from more than one IOTA node, add their URLs or IP addresses to this field.

:::info:
Make sure that the nodes are in the same IOTA network, otherwise your Scylla nodes will contain transactions from both.
:::

The default setting is `tcp://zmq.iota.org:5556`.

This IOTA node runs on the Mainnet.

## sn_trytes_nodes

The URLs or IP addresses of any IOTA nodes from which to get all confirmed transactions.

If you want to get transactions from more than one IOTA node, add their URLs or IP addresses to this field.

:::info:
Make sure that the nodes are in the same IOTA network, otherwise your Scylla nodes will contain transactions from both.
:::

The default setting is `tcp://zmq.iota.org:5556`.

This IOTA node runs on the Mainnet.