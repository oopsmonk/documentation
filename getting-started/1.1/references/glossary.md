# Terminology

**This termbase contains definitions of terms that are used in IOTA.**

In the interests of efficient and accurate translations, we do not use synonyms. Instead, terms have one of the following statuses:

- **Preferred:** This term is used in our documentation
- **Deprecated:** This term is banned, out-of-date, or obsolete

## Clients

The terms in this category are related to clients on an IOTA network

### address

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|A public key that belongs to a seed and that has a balance of IOTA tokens on IOTA networks|noun|preferred|

![address](../images/addresses.png)

### faucet

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|A tool that transfers IOTA tokens to a given address|noun|preferred|

### private key

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|A secret key that is derived from a seed and can be used to prove ownership of an address|noun|preferred|

### spent address

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|An address that has already been withdrawn from in a signed input transaction in the Tangle and that is unsafe to withdraw from again|noun|preferred|

### security level

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Parameter that affects the security of one-time signatures|noun|preferred|

### seed

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Unique password that is used to generate addresses, private keys, and signatures|noun|preferred|

![seed](../images/seed.png)

### wallet

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Application for managing private keys and addresses|noun|preferred|

## Cryptography

The terms in this category are related to cryptography

### Curl

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Hashing function, designed for the Internet of things, that uses the SHA-3 sponge-based construction|noun|preferred|

### Kerl

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Ternary version of the Keccek-384 hashing function that takes a 48 byte input and produces a 243 trit output, using two's complement|noun|preferred|

### Troika

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Ternary hash function|noun|preferred|

## Network

The terms in this category are related to IOTA networks

### blowball

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Subtangle where a large group of tip transactions reference one central transaction|noun|preferred|

![blowball](../images/blowballs.png)

### Coordinator

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Client that sends milestones that nodes trust to use as a consensus rule|noun|preferred|

### GoShimmer node

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Node that runs the GoShimmer node software|noun|preferred|

### gossip

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Forward a transaction onto another node for validation|verb|preferred|

### Hornet node

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Node that runs the Hornet node software|noun|preferred|

### IOTA token

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Unit of value that belongs to addresses and that can be transferred over an IOTA network in transactions|noun|preferred|

### IRI node

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Node that runs the IRI node software|noun|preferred|

### local snapshot

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Process in which a node saves the current state of the Tangle in local files|noun|preferred|

### neighbor

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Relationship between nodes that gossip transaction among each other|noun|preferred|

### node

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Device that has read and write access to the Tangle|noun|preferred|

### node quorum

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|A group of nodes to which clients send the same API requests and compare the responses for consistency|noun|preferred|

### permanode

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|A node that never prunes transactions from its database and enables applications to search the full history of the Tangle|noun|preferred|

### solidify

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Request the past cone of all milestones in the Tangle from neighbors, starting from an entry point milestone and ending at the latest one|verb|preferred|

### subgraph

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|See subtangle|noun|deprecated|

### subtangle

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Section of the Tangle that contains transactions between a milestone and tip transactions|noun|preferred|

### Tangle

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Immutable data structure that contains an up-to-date history of transactions, each of which references two others|noun|preferred|

## Transactions

The terms in this category are related to transactions

### bundle

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Chain of transactions that are ordered by their `currentIndex` field and that are considered atomic by nodes|noun|preferred|

![bundle](../images/bundle.png)

### bundle essence

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|The `address`, `value`, `obsoleteTag`, `currentIndex`, `lastIndex`, and `timestamp` fields of transactions in a bundle|noun|preferred|

### child

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|A transaction that is directly attached to others in the Tangle|noun|preferred|

### confirmed

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|State of a transaction when it fulfills the consensus rules of the nodes in the network|adjective|preferred|

### depth

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|The milestone offset from which nodes start tip selection in the Tangle|noun|preferred|

### double spend

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|A state in the Tangle when two or more transactions try to transfer the same IOTA tokens from an address|noun|preferred|

### entry point milestone

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|The first milestone in a node's database|noun|preferred|

### future cone

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|A group of decendant transactions in the Tangle, starting from and including a child transaction|noun|preferred|

### head transaction

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Last transaction in a bundle|noun|preferred|

### input transaction

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Transaction with a negative value that withdraws IOTA tokens from an address|noun|preferred|

### local proof of work

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Proof of work that is done on the same device as the one that creates the transaction|noun|preferred|

### minimum weight magnitude

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|A setting for proof of work that defines the number of trailing zeros that a transaction hash must have to be accepted by nodes in an IOTA network|noun|preferred|

### milestone

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Signed transaction that is sent by the Coordinator|noun|preferred|

### output transaction

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Transaction with a positive value that deposits IOTA tokens into an address|noun|preferred|

### outsourced proof of work

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Proof of work that is done on a device that is neither a node nor the device that creates the transaction|noun|preferred|

### parent

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|A transaction that has others directly attached to it|noun|preferred|

### past cone

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|A group of ancestor transactions in the Tangle, starting from and including a child transaction|noun|preferred|

### pending

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|State of a transaction when it's attached to the Tangle, but not yet confirmed|noun|preferred|

### promote

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Send a zero-value transaction that references the tail transaction of a pending bundle and the latest milestone to increase its chances of being chosen during tip selection|verb|preferred|

### proof of work

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Cryptographic proof that energy has been spent in computing power to solve a puzzle|noun|preferred|

### reattach

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Recreate and resend a transaction that is too old to be confirmed|verb|preferred|

### rebroadcast

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Send the same transaction to a node again|verb|preferred|

### remote proof of work

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Proof of work that is done by a node|noun|preferred|

### solid

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|State of a transaction when a node has its past cone|noun|preferred|

### tail transaction

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|First transaction in a bundle|noun|preferred|

### tip selection

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Process whereby a node selects two tip transactions from the Tangle|noun|preferred|

### tip transaction

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Transaction that has no children in the Tangle|noun|preferred|

### transaction

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|An object that is stored in the Tangle and that nodes in an IOTA network can process|noun|preferred|

### zero-value transaction

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Transaction with no value that may contain any arbitrary data such as messages or signatures|noun|preferred|