# How checksums are generated

**This topic explains the cryptography involved in generating checksums for addresses and seeds.**

To generate a checksum, first, the address or the seed is converted to trits and hashed, using the [Kerl](../references/glossary.md#kerl) hash function.

Then, the last 9 or 3 trytes of the resulting hash are appended to the end of the address or seed.

The length of a checksum depends on whether it's for an address or a seed: Address checksums are 9 trytes long, whereas seed checksums are 3 trytes long. The reason for this difference is that mistyping an address can lead to transferring IOTA tokens to the wrong address, so the checksum must be more resistant to collisions. On the other hand, if you mistype a seed, you will quickly realize that your balance is incorrect. For more information about collisions and their effects, see [Collisions](https://en.wikipedia.org/wiki/Collision_(computer_science)) on Wikipedia.

||**Without checksum**|**With checksum**|
|:--|:---|:---|
|**Seed**|PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX|PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX**XTY**|
|**Address**|GWQQYWCUFLDR9LIWDITVHTPYYO9BAMOADFLNBIHYLIFDTORUCFCOGRQFK9IXEHVEMDVZH9RYOXAFIVUOA|GWQQYWCUFLDR9LIWDITVHTPYYO9BAMOADFLNBIHYLIFDTORUCFCOGRQFK9IXEHVEMDVZH9RYOXAFIVUOA**DAYDSMFZW**| 

:::info:
As a security precaution, some applications allow you to enter addresses only if they include a checksum.
:::
