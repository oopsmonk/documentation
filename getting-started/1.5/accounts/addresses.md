# Addresses

**An address is like a personal account that belongs to a [seed](../accounts/seeds.md) and that can have a balance of [IOTA tokens](../the-tangle/genesis.md). This topic explains what addresses are, their types, and how they are used.**



## Addresses and key pairs

Addresses are the public half of a [public/private key pair](https://en.wikipedia.org/wiki/Public-key_cryptography), which belongs to a seed. As a result, each address has a corresponding private key which is used to prove to nodes who owns it. You can prove that you own an address by using the private key to sign a message.

Additionally, by appending something to your seed, you can generate as many unique but predictable key pairs as you like. Using both the seed and a [BIP32](https://wiki.trezor.io/Address_path_(BIP32)) based path, we define, derive, and generate the private/public key pairs.

:::info:
It's safe to share addresses with anyone because only the seed owner knows the private key to prove ownership of them.
:::

## Address type

In the past, IOTA used two address types but, within and beyond Chrysalis, it supports one: Ed25519, where the address consists of the the BLAKE2b-256 hash of the Ed25519 public key.

Ed25519 is a modern EdDSA signature scheme using [SHA-512](https://en.wikipedia.org/wiki/SHA-512) and [Curve25519](https://en.wikipedia.org/wiki/Curve25519) and it addresses the disadvantage of statefulness, size, and speed found in previous schemes. At its core, Ed25519 support allows for smaller message sizes and to safely spend funds which were sent to an already used deposit address. 

## Address formats

To support Ed22519, IOTA also uses Bech32 as an extendable address format which is capable of encoding different types of addresses:

```
iota1q9f0mlq8yxpx2nck8a0slxnzr4ef2ek8f5gqxlzd0wasgp73utryj0w6qwt
```

A Bech32 string is at most 90 characters long and consists of:

- The human-readable part (HRP), which conveys the IOTA protocol and distinguishes between Mainnet (the IOTA token) and Testnet (testing version), as described in [BIP-0173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki):
  - iot is the human-readable part for Mainnet addresses
  - tio is the human-readable part for Testnet addresses
- The separator, which is always 1; and
- The data part, which consists of the Base32 encoded serialized address and the 6-character checksum

## Utilities

You can use the following IOTA Tangle Utilities with addresses:

- [Convert an address into a QR code](https://utils.iota.org/qr-create)

- [Read an address from a QR code](https://utils.iota.org/qr-scan)

- [Search for messages that include an address](https://utils.iota.org/)

## Next steps

Learn about [signatures](../accounts/signatures.md) and how they prove to nodes that you own an address.

