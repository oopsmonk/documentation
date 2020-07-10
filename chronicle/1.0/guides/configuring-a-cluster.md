# Configuring a Scylla cluster

**Before you run Chronicle, you should consider how your Scylla cluster will be configured. This topic gives you some advice about what to consider.**

## Data transmission

We recommend jumboframes with an MTU (maximum transmission unit) of at least 9000 bytes for communications between ScyllaDB and Chronicle.  

## Power outage

Devices running Chronicle and ScyllaDB should have a backup power supply and Internet connection. A power outage for a number of nodes will not affect data consistency if you have at least one active node writing the same queries.

## Data security

IOTA transactions provide a trustworthy record of data and value, so securing this data in Chronicle is important. Because Chronicle data is stored in a Scylla database, you can follow the [official instructions](https://docs.scylladb.com/operating-scylla/security/security_checklist/) for setting up authorization, authentication, encryption, and security audits.