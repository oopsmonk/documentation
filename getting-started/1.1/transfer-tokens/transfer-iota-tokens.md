# Transfer IOTA tokens between addresses

**In this tutorial, you transfer IOTA tokens from one of your addresses to another. At the end of this tutorial, you'll understand how to transfer IOTA tokens.**

## Prerequisites

To complete this tutorial, you need some [test IOTA tokens](../transfer-tokens/get-test-tokens.md) on one of your addresses.

## Step 1. Check if your node is synchronized

Before you send a transaction, it's best to make sure that you're connected to a synchronized node. This way, you know that it has an up-to-date view of the Tangle, making it is more likely to select tip transactions that are valid according to the rest of the network.

1. To check if your node is synchronized, copy and paste the following code into the `index.js` file

    ```js
    // Require the client library packages
    const Iota = require('@iota/core');
    const Converter = require('@iota/converter');

    // Create a new instance of the IOTA API object
    // Use the `provider` field to specify which node to connect to
    const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
    });

    // Call the `getNodeInfo()` method for information about the IOTA node and the Tangle
   IOTA.getNodeInfo()
    // Convert the returned object to JSON to make the output more readable
    .then(info => console.log(JSON.stringify(info, null, 1)))
    .catch(err => {
        // Catch any errors
        console.log(err);
    });
    ```

    This code calls the [`getNodeInfo` endpoint](root://iri/1.0/references/iri-api-reference.md), using the node's API.

2. Execute the file

    ```bash
    node index.js
    ```

The node should return a JSON object that includes the following fields:

```json
"latestMilestoneIndex": 981708,
"latestSolidSubtangleMilestoneIndex": 981708,
```

The `latestMilestoneIndex` field is the index of the latest milestone that the node has received.

The `latestSolidSubtangleMilestoneIndex` field is the index of the latest milestone for which the node has a complete history.

If the `latestMilestoneIndex` field is equal to the one you got from Discord and the `latestSolidSubtangleMilestoneIndex` field, the node is synchronized: It has all confirmed transactions for the milestones that it has seen.

## Step 2. Transfer your IOTA tokens

In this step, you transfer your IOTA tokens from one of your addresses to another. To do so, you will create a bundle of value [transactions](../the-tangle/transaction-types.md#value-transactions), including:

- One input transaction to withdraw the IOTA tokens from your address
- One output transaction to deposit 1 i into your other address
- One output transaction to deposit the remaining IOTA tokens into another one of your addresses

1. Define the [depth](../first-steps/sending-transactions.md#choosing-a-depth) for tip selection and the minimum weight magnitude for [proof of work](../first-steps/sending-transactions.md#doing-proof-of-work)

    ```js
    const depth = 3;
    const minimumWeightMagnitude = 9;
    ```

2. Define your seed

    ```js 
    const seed =
    '';
    ```

3. Define the address to which you want to send your IOTA tokens

    ```js
    const receivingAddress = ""
    ```

4. Create a `transfers` object to specify the amount of IOTA tokens you want to transfer and the address to send the tokens to

    ```js
    const transfers = [
    {
      value: 1000,
      address: receivingAddress
    }
    ]
    ```

5. To create a bundle from your `transfers` object, pass it to the [`prepareTransfers()`](https://github.com/iotaledger/iota.js/blob/next/api_reference.md#module_core.prepareTransfers) method

    ```js
    const bundle = await iota.prepareTransfers(seed, transfers);
    ```

    This method asks the node to check the balance of your seed's addresses. If your addresses have enough IOTA tokens to complete the transfer, this method creates input transactions to withdraw the full balance from enough of your addresses to fulfill the transfer. Then, the method adds the input and output transactions to the bundle and signs it with the private keys of any withdrawn addresses.

    :::info:
    Your seed never leaves your device.
    
    The library generates addresses on your local device and sends them to the IOTA node.
    :::

    If the amount you want to transfer is less than the balance of your address, this method creates another output transaction to transfer the remaining IOTA tokens to a new address that belongs to your seed.
    
6. Pass your bundle to the [`sendTrytes()`](https://github.com/iotaledger/iota.js/blob/next/api_reference.md#module_core.sendTrytes) method, which handles tip selection, remote proof of work, and sending the transactions to the node

    ```js
    const response = await iota.sendTrytes(bundle, depth, minimumWeightMagnitude);

    console.log('Bundle sent');
    response.map(tx => console.log(tx));
    ```

    In the console, you'll see your transaction objects.

:::success:Congratulations :tada:
You've just sent your first transfer bundle. Your transactions are attached to the Tangle and will be forwarded to the rest of the network. Now, you just need to wait until the transaction is confirmed for your balance to be updated.
:::

## Run the code

We use the [REPL.it tool](https://repl.it) to allow you to run sample code in the browser.

Click the green button to run the sample code in this tutorial and see the results in the window.

Before you run this sample code, replace the seed with your own.

<iframe height="600px" width="100%" src="https://repl.it/@jake91/Send-IOTA-tokens-on-the-Devnet?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Next steps

Before nodes can update your balances, your transactions must be confirmed. [Check if your transaction is confirmed](../transfer-tokens/checking-confirmation.md).

Examples of this tutorial are also available in the following languages:

- [C](root://core/1.0/tutorials/c/transfer-iota-tokens.md)
- [Go](root://core/1.0/tutorials/go/transfer-iota-tokens.md)
- [Python](root://core/1.0/tutorials/python/transfer-iota-tokens.md)
- [Java](root://core/1.0/tutorials/java/transfer-iota-tokens.md)

