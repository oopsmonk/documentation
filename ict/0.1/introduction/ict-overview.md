# Ict overview

**The Ict (IOTA Controlled agenT) is open-source Java software that defines an IOTA protocol, which is a lightweight alternative to the IRI. Computers that run the Ict are called nodes.**

:::info:
At the moment, the IRI and Ict protocols aren't compatible, and the Ict doesn't have a Mainnet. The purpose of the Ict is to develop an IOTA protocol that devices can run on the Internet of Things.
 :::

To reduce the storage overhead of nodes, the Ict doesn't store transactions persistently in a database, instead transactions are streamed and forgetten after runtime.

The main components of the Ict are the following:

* Gossip protocol
* IOTA eXtension Interface (IXI)
* Swarm intelligence
* Economic clustering

## Gossip protocol

Nodes communicate with their neighbors through a gossip protocol.

<dl><dt>gossip protocol</dt><dd>A peer-to-peer communication protocol that allows computers in the same network to share data.</dd></dl>

To allow small IoT (Internet of Things) devices to run the Ict, it does not store a persistent database of transactions. Instead, Ict exchanges transactions with its neighbors and stores them only during runtime. 

## IOTA eXtension Interface

The IOTA eXtension Interface (IXI) is an API that allows you to build modules which extend the functionality of the core Ict.

IXI modules can filter through the transaction stream. For example, to build a permanode (a node that permanently stores all transactions), one could write the entire stream into a database.

## Swarm intelligence

[Swarm intelligence](https://en.wikipedia.org/wiki/Swarm_intelligence) allows nodes to cooperate and achieve shared goals.

## Economic clustering

An economic cluster is a collection of economic actors that reach consensus on the same transactions. When a transaction is referenced by a sufficient amount of economic actors in the cluster, that transaction is considered confirmed in that economic cluster. Each node can follow one economic cluster.