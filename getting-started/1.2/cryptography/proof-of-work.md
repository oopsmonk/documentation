# How proof of work is calculated

**Proof of work is cryptographic proof that energy has been spent in computing power to solve a puzzle**

To calculate the PoW for a transaction, the values of all the transaction fields are converted to trits and hashed, using the [Curl hash function](../references/glossary.md#Curl).

This process continues until the transaction hash ends in the same number of 0 trits as the ([minimum weight magnitude](../references/glossary.md#minimum-weight-magnitude). See [IOTA networks](../networks/overview.md) for information about the minimum weight magnitudes on permissionless IOTA networks.

Whenever the transaction hash doesn't end in the correct number of 0 trits, the value of the transaction's `nonce` field is incremented and the transaction hash is hashed again.

To verify that proof of work was done, nodes can then simply hash all the transaction fields and check how many 0 trits the hash ends in.

## Next steps

[Learn how signatures are created and verified](../cryptography/signatures.md).