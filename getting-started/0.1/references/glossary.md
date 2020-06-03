# Terminology

**This termbase contains definitions of terms that are used in IOTA.**

In the interests of efficient and accurate translations, we do not use synonyms. Instead, terms have one of the following statuses:

- **Preferred:** This term is used in our documentation
- **Deprecated:** This term is banned, out-of-date, or obsolete

## Accounts

The terms in this category are related to account in an IOTA network

### address

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|A public key that belongs to a seed and that has a balance of IOTA tokens on IOTA networks|noun|preferred|

### IOTA token

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Unit of value that can be transferred over an IOTA network|noun|preferred|

### security level

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|An address generation parameter that affects the security of one-time signatures|noun|preferred|

### seed

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Unique password that is used to generate addresses, private keys, and signatures|noun|preferred|

## Cryptography

The terms in this category are related to cryptography

### Curl

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Hashing function, designed for the Internet of things, that uses the SHA-3 sponge-based construction|noun|preferred|

### Kerl

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Ternary version of the Keccek-384 hashing function that takes a 48 byte input and produces a 243 trit output, using [two's complement](https://en.wikipedia.org/wiki/Two%27s_complement)|noun|preferred|

### Troika

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Ternary hash function|noun|preferred|

## Network

The terms in this category are related to IOTA networks

### blowball

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|A subgraph where a majority of tip transactions reference one central transaction|noun|preferred|

### Coordinator

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|A subgraph where a majority of tip transactions reference one central transaction|noun|preferred|

### node

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|A device that is part of an IOTA network and that has read and write access to the Tangle|noun|preferred|

### subgraph

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Section of the Tangle that contains transactions between a milestone transaction and tip transactions|noun|preferred|

### Tangle

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|An immutable data structure that contains an up-to-date history of transactions, each of which references two others|noun|preferred|

## Transactions

The terms in this category are related to transactions

### bundle

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Group of transactions that rely on each other's validity|noun|preferred|

### child

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Transaction that directly references two other transactions|noun|preferred|

### confirmed

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|State of a transaction when it's been approved by a milestone|adjective|preferred|

### depth

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Entry milestone that's used to start tip selection through a subgraph|noun|preferred|

### future set

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Two or more transactions that reference the same transaction|noun|preferred|

### proof of work

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Data that is calculated using trial and error to meet certain requirements|noun|preferred|

### solid

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|State of a transaction when a node has its entire history in its ledger|noun|preferred|

### minimum weight magnitude

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|A setting for proof of work that defines the number of trailing zeros that a transaction hash must have|noun|preferred|

### milestone

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Transaction that's created by the Coordinator|noun|preferred|

### parent

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Transaction that is directly referenced by a child transaction|noun|preferred|

### pending

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|State of a transaction when it's attached to the Tangle, but not yet confirmed|noun|preferred|

### reattach

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Recreate and resend a transaction|verb|preferred|

### rebroadcast

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Send the same transaction to a node again|verb|preferred|

### tail transaction

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|The first transaction in a bundle|noun|preferred|

### tip selection

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Process whereby a node selects two tip transactions from the Tangle|noun|preferred|

### tip transaction

|**Definition**|**Part of speech**|**Status**|
|:---------|:-------------|:-----|
|Transaction with no children|noun|preferred|