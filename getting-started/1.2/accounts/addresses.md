# Addresses

**An address is like a personal account that belongs to a [seed](../accounts/seeds.md) and that can have a balance of [IOTA tokens](../the-tangle/genesis.md). This topic explains what addresses are, how many of them you can have, and how to use them.**

![Addresses](../images/addresses.png)

Addresses are the public half of a [public/private key pair](https://en.wikipedia.org/wiki/Public-key_cryptography), which belongs to a seed. As a result, each address has a corresponding private key, which is used to prove to nodes who owns it.

Using a seed, you can generate an [almost unlimited number of addresses and private keys](#maximum-number-of-addresses).

You can prove that you own an address by doing the following:

- Using the private key to sign a bundle hash
- Adding the resulting signature fragments to the `signatureMessageFragment` fields of transactions in the bundle

:::info:
It's safe to share addresses with anyone because only the seed owner knows the private key to prove ownership of them.
:::

## Address format

An address is a unique string of 81 [trytes](../the-tangle/ternary.md) (or 90 trytes with a [checksum](../accounts/checksums.md)).

```
OGMMQJUDMNNYSOAXMJWAMNAJPHWMGVAY9UWBXRGTXXVEDIEWSNYRNDQY99NDJQB9QQBPCRRNFAIUPGPLZ
```

## Address types

Addresses can be one of the following types:

- One-time address
- Merkle root address

### One-time address

One-time addresses are quantum robust, meaning that signatures are more secure against attacks from quantum computers.

These addresses are used in most applications, including client libraries and wallets.

It is safe to transfer any amount of IOTA tokens to these addresses. However, because these addresses use a [one-time signature scheme](../accounts/signatures.md), withdrawing from them reveals around half of the private key. As a result, it is safe to withdraw from these addresses only once. After IOTA tokens have been withdrawn from a one-time address, it is **spent** and must never be used again.

If more IOTA tokens are later deposited into a spent address, they are at risk of being stolen in a [brute-force attack](https://en.wikipedia.org/wiki/Brute-force_attack) on the private key.

For details of the cryptography involved in generating these addresses, see [How addresses are generated](../cryptography/addresses.md).

### Merkle root address

Merkle root addresses are also quantum robust because they are generated using the same technique as one-time addresses.

The difference between a one-time address and a Merkle root address is that Merkle root addresses use a Merkle signature scheme. This signature scheme allows you to define a number of bundle hashes that you can safely sign to prove ownership of a single address.

Merkle root addresses are used by special applications that need to be able to prove ownership of the same address in many bundles. For example, [the Coordinator](../the-tangle/the-coordinator.md) uses Merkle root addresses to sign milestones.

For details of the cryptography involved in generating these addresses, see [How Merkle root addresses are generated](../cryptography/merkle-tree-address.md).

## Maximum number of addresses

A seed can have an almost unlimited number of addresses (9<sup>57</sup>), which each have a unique index and a [security level](../transfer-tokens/generate-an-address.md):

* **Index:** Number between 0 and 9,007,199,254,740,991
* **Security level:** Number between 1 and 3

The same seed, index, and security level, will always result in the same address.

Likewise, the same seed with a different index and/or a different security level will result in a different address.

For example, when you generate addresses for index 0 and index 1 of all security levels, they are all unique:

|**Index**|**Security level**|**Address**|
|:-----|:-----|:-----|
|0|1|OGMMQJUDMNNYSOAXMJWAMNAJPHWMGVAY9UWBXRGTXXVEDIEWSNYRNDQY99NDJQB9QQBPCRRNFAIUPGPLZ|
|0|2 |BYNZSDZTNJOUMWLILVKUIWAFTCWTNYCDEI9ZNSRSAMLKURUWYANEGLVHUKWMZQCAMBTDSXKEFVOUYLDSW|
|0|3|CACHUSACNWAFFIGUAXVBUMZNSAGFPCFXVMYOBQ9IMD9ELZMOYOJAHWPFMOTRJMPISXIF9JEKNDZMQMZEY|
|1|1|CAZURLTWLREHEPODAQGFEKCVFJMUB9BFGBVWBGRSCWSKYD9UJIARRTPZJH9VUGQIQNJRBKIOATOJCSYJY|
|1|2|XIUPEDJXBADNCMWAZEGY9HPEASAMLFMIAAXIMLHVRDSADOORPPBFAQDCXGGZQQZLKCERW9J9CKVLASMTZ|
|1|3|FLXGZSXUJJLQFYYPTKYJRLWOCQSEXTTKVQMGOFPPYYZCLTAIEPKFXDNHHFGNJOASALAD9MJHNCCX9OUVZ|

## Utilities

You can use the following IOTA Tangle Utilities with addresses:

- [Convert an address into a QR code](https://utils.iota.org/qr-create)

- [Read an address from a QR code](https://utils.iota.org/qr-scan)

- [Search for transactions that include an address](https://utils.iota.org/)

## Next steps

Learn about [signatures](../accounts/signatures.md) and how they prove to nodes that you own an address.


