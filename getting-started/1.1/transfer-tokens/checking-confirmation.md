# Checking if your transaction is confirmed

**In this topic, you learn how to check whether your transactions are confirmed.**

All transactions have an inclusion state, which is how nodes knows whether it is confirmed.

A positive inclusion state means that a transaction is confirmed, and a negative inclusion state means that it is still pending.

To check whether a transaction is confirmed, you can use the [`getLatestInclusion()`](https://github.com/iotaledger/iota.js/blob/next/api_reference.md#module_core.getLatestInclusion) method.

This method checks if the IOTA node's latest solid milestone approves it a given transaction.

```js
iota.getLatestInclusion(['TRANSACTION HASH'])
.then(states => console.log(states));
```

This method returns `true` if your transaction is confirmed or `false` if your transaction is still pending.

## Next steps

Learn about [reattaching, rebroadcasting, and promoting](../transfer-tokens/helping-a-transaction-confirm.md) pending transactions.
