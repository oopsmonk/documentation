# Immutablity in the Tangle

**This topic explains what makes transactions immutable when they are attached to the Tangle.**

One of the most fundamental properties of the Tangle is that it is immutable. After a transaction is attached to the Tangle, it cannot be changed.

To understand what makes the Tangle immutable, you need to know what a hashing algorithm is.

A hashing algorithm is a mathematical function that converts an input value into another compressed value. The input to the hashing algorithm can be of any length, but the output is always a fixed length.

Values returned by a hashing algorithm are called message digests or simply hashes. For an explanation of hashing algorithms, see [Hashing Algorithms and Security](https://youtu.be/b4b8ktEV4Bg) on YouTube.

## Transaction hash

A transaction's hash is a hash of all the values in its [transaction fields](../references/transaction-fields.md). If any of the values in a transaction's fields were to change, the transaction hash would also change.

To make the Tangle immutable, each transaction in it is attached to two previous transactions by referencing their transaction hashes in the `branchTransaction` and `trunkTransaction` fields.

Therefore, a change to any transaction would also invalidate any transactions that are [directly or indirectly attached to it](../the-tangle/overview.md#references).

## Bundle hash

All transactions in the same [bundle](../the-tangle/transaction-types.md#bundles) have the same bundle hash in their `bundle` field to tie them all together.

This hash is derived from the **bundle essence**, which is a hash of the values of the following transaction fields:

- `address`
- `value`
- `obsoleteTag`
- `currentIndex`
- `lastIndex`
- `timestamp`

As a result, if any values of the bundle essence were to change, the bundle hash would change, invalidating all transactions in the bundle.

:::info:
You could change any other transaction fields in a bundle and keep the same bundle hash.

As a result, only a transaction hash should be used to look up a unique transaction.

For an example of changing a transaction's fields and keeping the same bundle hash, see [Change the messages in a bundle](root://core/1.0/tutorials/js/change-message-in-bundle.md).
:::

## Next steps

Find out what [type of data you should store in the Tangle](../the-tangle/storing-data.md).