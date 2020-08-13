# Best practices

**This topic describes some best practices for setting up a reliable architecture for production applications.**

## Preventing single points of failure

A single point of failure is a part of a system that, if it fails, will stop the entire system from working. 

Connecting Chronicle to only one Scylla node or IOTA node presents a single point of failure. If either node goes down, no transactions will be stored.

When setting up your architecture, you should consider the following:

- How many Scylla nodes will store transactions
- How many IOTA nodes will Chronicle use to request transactions

### Choosing a number of Scylla nodes

In general, it's best to have at least three Scylla nodes (a cluster) in the same private network (datacenter) as Chronicle. This way, Chronicle can read and write transactions to your nodes much faster and you can create backup replicas of your data across two or more of your nodes.

:::info:
You can define how many nodes should store the same transactions in the [`replication_factor_per_data_center` setting](../references/cli-reference.md#replication_factor_per_data_center).
:::

For redundancy, you may also want Chronicle to store transactions in more than one datacenter.

:::info:
You can define which datacenters Chronicle should store transactions on in the [`data_centers` setting](../references/cli-reference.md#data_centers).
:::

Depending on the geographical location of your datacenters, you need to make sure that you have enough bandwidth to allow Chronicle to access them.

:::warning:
A single Chronicle node for many datacenters presents a single point of failure. If the Chronicle node goes down, your Scylla nodes will not store any transactions.

Therefore, you may want to set up a separate instance of Chronicle on each datacenter.
:::

### Choosing a number of IOTA nodes

It's best to connect to at least two IOTA nodes so that you have a backup in case one goes down.

:::info:
You can define which IOTA nodes to connect to in the [`trytes_nodes` and `sn_trytes_nodes` settings](../references/cli-reference.md#trytes_nodes).
:::

## Provisioning Scylla nodes with enough disk space

The Tangle is a permissionless ledger, meaning that anyone can attach transactions to it at any time. Therefore, you must provision your Scylla nodes with enough memory to be able to store those transactions.

As a guide, it's best to have at least 1 TB of disk space available, depending on your replication factor.

## Controlling access to transactions on your Scylla nodes

To secure access to your Scylla nodes, you should follow the security guidelines in the [Scylla documentation](https://docs.scylladb.com/operating-scylla/security/).

You should also consider who has access to [Chronicle's API](../references/chronicle-api-reference.md).

## Monitoring your Scylla nodes

When running Scylla, your CPU constantly polls for incoming traffic, which may result in a constant CPU usage of 90%. This is normal. Instead of monitoring CPU usage, it's best practice to use [Scylla Monitoring](https://docs.scylladb.com/operating-scylla/monitoring/).

## Managing your Scylla nodes

To manage your Scylla node, you can use the Scylla `nodetool` utility, which comes with useful features such as the ability of add and remove Scylla nodes from a cluster. For more information about how to use this tool, see the [Scylla documentation](https://docs.scylladb.com/operating-scylla/nodetool/).
