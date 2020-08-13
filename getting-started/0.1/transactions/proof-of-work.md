# Proof of work

**A proof of work (PoW) is a piece of data that is calculated using trial and error to meet certain requirements. As a spam prevention measure such as [hashcash](https://en.wikipedia.org/wiki/Hashcash), each [transaction](../transactions/transactions.md) must include a PoW to be valid. This PoW is difficult to do, but easy for [nodes](../network/nodes.md) to validate.**

## How proof of work is calculated

To calculate the PoW for a [transaction](../transactions/transactions.md), the values of all the transaction fields are converted to [trits](../introduction/ternary.md) and hashed, using the [Curl](https://github.com/iotaledger?utf8=%E2%9C%93&q=curl&type=&language=) [hash function](https://en.wikipedia.org/wiki/Hash_function).

This process continues until the transaction hash ends in the same number of 0 trits as the ([minimum weight magnitude](root://getting-started/1.1/first-steps/sending-transactions.md#doing-proof-of-work)).

Whenever the transaction hash doesn't end in the correct number of 0 trits, the value of the transaction's `nonce` field is incremented and the transaction hash is hashed again.

## Options for doing proof of work

You have the following options for doing PoW.

### Remote proof of work

Remote PoW is when you ask a node to do PoW for a transaction. You do this by calling the [`attachToTangle` endpoint](root://iri/1.0/references/iri-api-reference.md#attachToTangle).

### Local proof of work

Local PoW is when your local device does PoW for each transaction before sending it to a node. 

### Outsourced proof of work

Outsourced PoW comes in two forms:

- A paid PoW service such as [powsrv.io](https://powsrv.io/#quickstart) that accepts IOTA transactions, completes PoW and returns it to you for a fee

- [A PoW proxy server](root://proof-of-work-proxy/1.0/overview.md)

## Advantages and disadvantages

Each option for proof of work has its advantages and disadvantages.

|**Option**|**Advantages**|**Disadvantages**|
|:-------|:---------|:------------|
|Remote PoW| You can avoid using the computational power needed to do PoW.|Depending on how powerful the IOTA node is and how many requests it receives, it may time out and not complete the PoW. |
|Do local PoW|You aren't reliant on nodes to do PoW.|Your device may not be powerful enough to complete PoW in a satisfactory amount of time.|
|Outsource PoW to a paid service|PoW is usually done faster more more reliably than remote or local PoW.|It costs money to use the service and you don't have control over it|
|Outsource PoW to a proxy server|PoW is usually done faster and more reliably than remote or local PoW|You need to maintain the PoW proxy server|
