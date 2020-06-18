# How addresses are generated

**This topic describes the process involved in generating an address from a seed.**

All addresses are generated using the [Kerl](../references/glossary.md#kerl) hash function, which starts by generating a private key from a seed, an index, and a security level. For details about Kerl, see the [Kerl GitHub repository](https://github.com/iotaledger/kerl).

:::info:
A seed can be used to generate an almost unlimited number of addresses (9<sup>57</sup>), which each have a unique index and a security level.
:::

First, the seed and index are converted to trits, then they're combined and hashed to generate a 243-trit subseed.

```
Kerl(seed + index)
```

The subseed is then absorbed and squeezed in a sponge function 27 times for each [security level](../references/glossary.md#security-levels).

The result of the sponge function is a private key whose length varies, depending on the security level. See [Generating an address](../clients/generating-an-address.md) for more information about how security levels affect the length of private keys and signatures.

To generate an address, the private key is split into 81-tryte segments. Then, each segment is hashed 26 times. 

:::info:
A group of 27 hashed segments is called a key fragment, and a private key has one key fragment for each security level. For example, a private key with security level 1 consists of 2,187 trytes, which is 27 x 81-tryte segments or one key fragment.
:::

Each key fragment is hashed once to generate one key digest for each security level. Then, the key digests are combined and hashed once to generate an 81-tryte address.

![Address creation](../images/address-generation.png)


