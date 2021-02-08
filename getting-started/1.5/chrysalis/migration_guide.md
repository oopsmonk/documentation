# Developer Guide to Chrysalis (IOTA 1.5)

## What is new?
In the Second Part of Chrysalis, alot of things changed. Let's discover, what in detail:

- Ed25519 support— a more commonly used signature scheme and support for reusable addresses.
- UTXO— A better fund and state management approach.
- Binary transaction layout— validation, IO and other processing working on binary data without the need to have many binary-ternary conversions as in the IOTA 1.0 node software.
- Atomic transactions— Move from the current Bundle construct and use of simpler atomic transactions instead
- Autopeering
- Whiteflag
- Improved Tipselection
- New Milestone Selection
- Dust Protection
- Up to 8 Parents


## Node Software

- [hornet (branch: develop)](https://github.com/gohornet/hornet/tree/develop)
- [bee (branch: chrysalis-pt-2)](https://github.com/iotaledger/bee/tree/chrysalis-pt-2)

## Libraries
- [iota.rs](https://github.com/iotaledger/iota.rs)
    - [Node.js](https://github.com/iotaledger/iota.rs/tree/dev/bindings/node)
    - [Python](https://github.com/iotaledger/iota.rs/tree/dev/bindings/python)
- [wallet.rs](https://github.com/iotaledger/wallet.rs)
    - [Node.js](https://github.com/iotaledger/wallet.rs/tree/develop/bindings/nodejs)


## Infrastructure
Nodes deployed to the testnet can be queried using a load balancer at:

- api.lb-0.testnet.chrysalis2.com

We recommend using the load balancer for most scenarios.

Single node endpoints that expose native MQTT in case you need this are:

- api.hornet-0.testnet.chrysalis2.com
- api.hornet-1.testnet.chrysalis2.com
- api.hornet-2.testnet.chrysalis2.com
- api.hornet-3.testnet.chrysalis2.com


Node API is integrated according to the [following specification](https://editor.swagger.io/?url=https://raw.githubusercontent.com/rufsam/protocol-rfcs/master/text/0026-rest-api/rest-api.yaml)

## Developer Tools
- [Explorer](https://explorer.iota.org/chrysalis)
- [Online Faucet](https://faucet.testnet.chrysalis2.com/)
- [cli-wallet](https://github.com/iotaledger/cli-wallet)
- [chrysalis-faucet Code (nodejs + svelte)](https://github.com/iotaledger/chrysalis-faucet)


## A note about seeds and addresses

In Chrysalis all ternary conversions have been removed, which results in a better and faster developer experience.

Also the WOTS-Signarure has beed chaged to the Ed25519 Signarure scheme. That means, you can use an address now multiple times to send and recive tokens. 

So all these changes results into a complete different view of addresses and seeds: 

IOTA 1.0 Address

```bash=
UDYXTZBE9GZGPM9SSQV9LTZNDLJIZMPUVVXYXFYVBLIEUHLSEWFTKZZLXYRHHWVQV9MNNX9KZC9D9UZWZRGJMIGPDW
```

IOTA Chrysalis Address

```bash=
atoi1qykf7rrdjzhgynfkw6z7360avhaaywf5a4vtyvvk6a06gcv5y7sksu7n5cs
```

With the new wallet library, developers dont need to usa a Seed anymore. The Seed is backed up with Stronghold, which is an software security box. It's not possible to get the seed out of this box. It uses encrypted snapshots that can be easily backed up and securely shared between devices. These snapshots are secured by an password.

Read more about Stronghold on the [Stronghold docs page](https://stronghold.docs.iota.org).


## A note about Coordicide (IOTA 2.0)

- Do we expect breaking changes to client libs like iota.rs or wallet.rs for the Coordicde Update?

> todo


## Deep Dive

### Dust Protection
What is Dust? We define the spamming of low value transaction as dust. A low value transaction is a transaction with less than 1Mi value.

> In the UTXO model, each node in the network needs to keep track of all the currently unspent outputs. When the number of outputs gets too large, this can cause performance and memory issues. This RFC proposes a new protocol rule regarding the processing of outputs that transfer a very small amount of IOTA, so-called dust outputs: Dust outputs are only allowed when they are backed up by a certain deposit on the receiving address. This limits the amount of dust outputs, thus making it expensive to proliferate dust. Since a receiver must make a deposit, the protocol makes receiving dust an opt-in feature.

[protocol-rfcs#0032](https://github.com/iotaledger/protocol-rfcs/pull/32)

### Up to 8 Parents.

An message can be bind to minimal one parent and up to eight parents. This rusults in a ...

:::danger
**Question**
Which advantages has the "8 Parents" change? 
**TODO**
Link to RFC!
:::
