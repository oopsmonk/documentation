# Seeds

**A seed is a unique master key that gives you the ability to prove your ownership of either messages and/or any IOTA tokens that are held on your addresses.**

![Seed](../images/seed.png)

## Mnemonic seeds

To make seeds easier to manage and more secure, IOTA uses mnonemic sentences derived from the seed; a group of easily comprehensible words. This mnemonic seed is a list of 24 words that stores all the information needed to recover funds.

### How mnemonic seeds work

IOTA uses a combination of Ed25519, BIP-39, and SLIP-10 methodologies as the standardized way of producing derivation:

- [Ed25519](https://github.com/iotaledger/protocol-rfcs/pull/9) – a signature algorithm key generation where a given random sequence of bytes (or seed) the length of 32 bytes is a valid private key
- [SLIP-10](https://github.com/satoshilabs/slips/blob/master/slip-0010.md) – describes how to derive private keys on a coin/account/index basis from a single master seed 
- [BIP-39](https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki) – describes how a seed can be represented as human readable mnemonic words 

## Checksums

Checksums are often appended to seeds and addresses in user interfaces such as [wallets](../accounts/wallets.md) to help you to detect typos.

BIP-39 and Bech32 already contain a checksum for seeds and addresses, respectively, so there is no need to implement any further.

## Next steps

Learn about the [addresses](../accounts/addresses.md) that belong to seeds.



