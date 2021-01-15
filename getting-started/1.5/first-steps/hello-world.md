# Send a "hello world" message

**In this tutorial, you send your first message to an IOTA node. At the end of this tutorial, you'll have your own message in the Tangle that everyone can see.**

## Prerequisites

To complete this tutorial, you need a [developer environment for Node.js](../first-steps/set-up-env.md).

In this tutorial, you'll connect to a node that's run in the IOTA Foundation Devnet: A development network.

## Send a message to the node

In this step, you create a zero-value message that contains a "Hello world" message and send it to your connected node to attach to the Tangle.

1. Require the library and connect to a node

    ```js
    // Require the client library packages
    const Iota = require('@iota/core');

    // Create a new instance of the IOTA API object
    // Use the `provider` field to specify which node to connect to
    const iota = Iota.composeAPI({
    provider: 'https://nodes.devnet.iota.org:443'
    });
    ```

1. Define a depth and a minimum weight magnitude

    ```js
    const depth = 3;
    const minimumWeightMagnitude = 9;
    ```

    You'll find out more about what these are in the next topic.

2. Define an address to which you want to send a message

    ```js
    const address =
    'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D';
    ```

    
    
3. Define a seed

    ```js
    const seed =
    'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';
    ```

    :::info:
    The seed is not used in this code. However, the library expects a valid seed.
    :::

4. Create your "hello world" message and serialize it into JSON.

    ```js
    const message = JSON.stringify({"message": "Hello world"});
    const messageInTrytes = Converter.asciiToTrytes(message);
    ```

5. Define a message that sends the message to the address

    ```js
    const transfers = [
    {
        value: 0,
        address: address,
        message: messageInTrytes
    }
    ];
    ```

6. Send your message to the node

    ```js
   Iota.prepareTransfers(seed, transfers)
        .then(trytes => {
            return iota.sendTrytes(trytes, depth, minimumWeightMagnitude);
        })
        .then(bundle => {
            console.log(bundle[0].hash)
        })
        .catch(err => {
            console.error(err)
        });
   ```

7. Execute the file

    ```bash
    node index.js
    ```

    In the console, you should see your message hash, which looks something like the following:

    ```
    MAXPIKYYYNPRXXVIKNPZ9TSAVYTDEDAJOJHJVXGKLJADWDNHYNNNJJYSO9LYNVTXLJ9URVGMAEDPA9999
    ```

8. To see your message in the Tangle, search for your message hash in a Tangle explorer such as [explorer.iota.org](https://explorer.iota.org/mainnet)

    Make sure to select the Devnet network.
    
    You should see your transaction and the message that you sent.
    
    ![JSON message](../images/json-message.png)

:::success: Congratulations :tada:
You've just sent your first message. Your message is attached to the Tangle, and will be gossiped around the rest of the network.
:::

## Run the code

We use the [REPL.it tool](https://repl.it) to allow you to run sample code in the browser.

Click the green button to run the sample code in this tutorial and see the results in the window.

<iframe height="600px" width="100%" src="https://repl.it/@jake91/Send-a-hello-world-transaction?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

## Next steps

Take an in-depth look at how your transaction made it to the Tangle by [examining the steps that were involved](../first-steps/sending-messages.md).

You can also use the client library to [search for your message in the Tangle](root://core/1.0/tutorials/js/read-transactions.md).

Examples of this tutorial are also available in the following languages:

- [C](root://core/1.0/tutorials/c/send-your-first-bundle.md)
- [Go](root://core/1.0/tutorials/go/send-your-first-bundle.md)
- [Python](root://core/1.0/tutorials/python/send-your-first-bundle.md)
- [Java](root://core/1.0/tutorials/java/send-your-first-bundle.md)
