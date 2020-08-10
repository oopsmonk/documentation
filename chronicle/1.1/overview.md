# Chronicle

**Chronicle is a framework for building efficient and reliable permanodes in Rust.**

By using Chronicle, you can take advantage of the built-in permanode CLI that allows you to do the following:

- Store transactions in real time from the MQTT events of one or more IOTA nodes
- Configure the storage settings to meet your needs
- Search for all stored transactions, using an HTTP API

## Limitations

This alpha version of Chronicle includes the following limitations:

- Chronicle must be connected to [Hornet nodes](root://hornet/1.1/overview.md)

- It's not possible to filter transactions before storing them

- If Chronicle loses power, it will stop receiving transactions and will have no way of knowing which ones it missed. Therefore, devices that run Chronicle should have a backup power supply and a stable Internet connection.

- Chronicle stores transactions outside of the Tangle, therefore the immutablity of transactions is dependent on the security of your database and the trustworthiness of your administrators. See the [Scylla Security Checklist](https://docs.scylladb.com/operating-scylla/security/security_checklist/) in the Scylla documentation to secure your Scylla cluster.

## Roadmap

In a future release, Chronicle will include an option to [solidify](root://getting-started/1.0/references/glossary.md#solidify) transactions as well as a dashboard for managing applications.

See the [roadmap](https://roadmap.iota.org/permanode) for more information.

## Blog posts

Read the following blog posts about Chronicle:

---------------
#### **Chronicle: Our Full Permanode Framework for Decentralized Storage on the IOTA Network** ####
[Chronicle: Our Full Permanode Framework for Decentralized Storage On the IOTA Network](https://blog.iota.org/chronicle-our-full-permanode-framework-for-decentralized-storage-on-the-iota-network-18cf5062a016)

An update on what changed in the current alpha release of Chronicle.
---

#### **Introducing Chronicle - A Permanode Solution** ####
[Introducing Chronicle - A Permanode Solution](https://blog.iota.org/introducing-chronicle-a-permanode-solution-8e506a2e0813)

An overview of the first release of Chronicle.
---------------

## Source code

The source code for this project is hosted on [Github](https://github.com/iotaledger/chronicle.rs).

## Next steps

[Run the permanode service](tutorials/run-a-permanode.md) to start storing your own transactions.
