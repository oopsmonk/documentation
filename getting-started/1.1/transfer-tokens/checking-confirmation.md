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

When you execute the file, you should see `true` if your transaction is confirmed or `false` if your transaction is still pending.

## Run the code

We use the [REPL.it tool](https://repl.it) to allow you to run sample code from the JavaScript client library in the browser.

Click the green button to run the sample code in this tutorial and see the results in the window.

Make sure to pass a transaction hash to the `getLatestInclusion()` method.

<iframe height="600px" width="100%" src="https://repl.it/@jake91/Check-transaction-confirmation?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Next steps

Learn about [reattaching, rebroadcasting, and promoting](../transfer-tokens/helping-a-transaction-confirm.md) pending transactions.

