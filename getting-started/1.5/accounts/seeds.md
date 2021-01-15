# Seeds

**A seed is a unique master key that gives you the ability to prove your ownership of either messages and/or any IOTA tokens that are held on your addresses.**

![Seed](../images/seed.png)

## Seed format

An IOTA seed consists of a Bech32 string:

```
PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX
```

### Mnemonic seeds

To make seeds easier to manage and more secure, IOTA uses mnonemic sentences derived from the seed, a group of easily comprehensible words.

The used seed is a 384-bit or 243-trit random string and there are several ways to represent this in a human-readable form, but a mnemonic sentence is superior to raw binary or ternary strings.

#### How mnemonic seeds work

IOTA uses a combination of Ed25519, BIP-39, and SLIP-10 methodologies as the standardized way of producing derivation:

- [Ed25519](https://github.com/iotaledger/protocol-rfcs/pull/9) – a signature algorithm key generation where a given random sequence of bytes (or seed) the length of 32 bytes is a valid private key
- [SLIP-10](https://github.com/satoshilabs/slips/blob/master/slip-0010.md) – describes how to derive private keys on a coin/account/index basis from a single master seed 
- [BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) – describes how a seed can be represented as human readable mnemonic words 

## Checksums

Checksums are often appended to addresses and seeds in user interfaces such as wallets to help you to detect typos.

BIP-39 and Bech32 already contain a checksum for seeds and addresses, respectively.

## Maximum number of seeds

The total number of possible seeds is almost unlimited (8.7 x 10<sup>115</sup>). As a result, the chances of two seeds being the same is very unlikely.

## Next steps

Learn about the [addresses](../accounts/addresses.md) that belong to seeds.

To simplify the process of securing your seed, sending messages, and managing your account, you can use a [wallet](../accounts/wallets.md).



