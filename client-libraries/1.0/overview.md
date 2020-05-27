# Client libraries

**The IOTA client libraries make it easy for you to integrate IOTA into your own applications. Choose a client library to match your use case.**

:::warning:Beta software
The client libraries are currently in beta development, and you should not use them in production environments.
:::

# Best practice

For a client application, it's best to use an instance of a serverless architecture such as [AWS Lambda](https://aws.amazon.com/lambda/). This way, your application is not restricted by hardware and has a high availability.

### **Official support** ###

---------------
#### **Core** ####
[Link](root://core/1.0/overview.md)

Use your favourite language to send requests to a node's HTTP API, create transactions, and convert data to or from trytes and trits.
---

#### **Account module** ####
[Link](root://account-module/1.0/overview.md)

Simplify IOTA payments without the worry of withdrawing from spent addresses or the need to promote and reattach pending transactions.
---
#### **Channels** ####
[Link](root://channels/1.0/overview.md)

Build secure messaging applications where users can prove a message's integrity and authenticity.
---
#### **IOTA Area Codes** ####
[Link](root://iota-area-codes/1.0/overview.md)

Tag an IOTA transaction with a geo-location, and find others with the same tag.
---
#### **Client load balancer** ####
[Link](root://load-balancer/1.0/overview.md)

Configure the core client library with backup nodes in case of request errors
---

#### **Proof of existence** ####
[Link](root://proof-of-existence/1.0/overview.md)

Prove that a file is unchanged on the Tangle so that all parties that trust it.
---

#### **Trytes compressor** ####
[Link](root://tryte-compress/1.0/overview.md)

Store transaction trytes in a smaller memory space so you can later rebroadcast or reattach them.
---

#### **Tangle certificates** ####
[Link](root://tangle-certificate/1.0/overview.md)

Create a custom immutable certificate and control who can issue it.
---

#### **MAM (deprecated)** ####
[Link](root://mam/1.0/overview.md)

Publish public or private data streams, called channels, in transactions on the Tangle.

---------------

### __Community support__ ###

For community projects, see the [IOTA community GitHub repository](https://github.com/iota-community).

## Utilities

---------------
#### **Proof of work proxy server** ####
[Link](root://proof-of-work-proxy/1.0/overview.md)

Install a dedicated proxy server to do proof of work (PoW) for your transactions by intercepting calls to the node's API.
---------------
