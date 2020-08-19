# Checking if your transaction is confirmed

**In this topic, you learn how to check whether your transactions are confirmed.**

All transactions have an inclusion state, which is how nodes knows whether it is confirmed.

A positive inclusion state means that a transaction is confirmed, and a negative inclusion state means that it is still pending.

To check whether a transaction is confirmed, you can use the [`getInclusionStates()`](https://github.com/iotaledger/iota.js/tree/next/packages/core#module_core.getInclusionStates) method.

This method checks if the IOTA node's latest solid milestone approves it a given transaction.

```js
iota.getInclusionStates(['TRANSACTION HASH'])
.then(states => console.log(states));
```

This method returns `true` if your transaction is confirmed or `false` if your transaction is still pending.

## Next steps

Learn about [reattaching, rebroadcasting, and promoting](../transfer-tokens/helping-a-transaction-confirm.md) pending transactions.
