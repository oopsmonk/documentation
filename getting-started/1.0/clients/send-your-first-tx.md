# Send a "hello world" transaction in Node.js

**In this tutorial, you send a "hello world" message in a zero-value transaction. These transactions are useful for storing messages in the Tangle without having to send any IOTA tokens.**

## Step 1. Set up a developer environment

To use the JavaScript client library, you need a set of programming tools, which make up a development environment.

In this step, you install all the tools you need to follow this tutorial.

1. Install the [latest long-term support (LTS) version of Node.js](https://nodejs.org/en/download/)

2. Install a code editor. We recommend [Visual Studio Code](https://code.visualstudio.com/Download), but many more are available.

3. Open a command-line interface

    Depending on your operating system, a command-line interface could be [PowerShell in Windows](https://docs.microsoft.com/en-us/powershell/scripting/getting-started/getting-started-with-windows-powershell?view=powershell-6), the [Linux Terminal](https://www.howtogeek.com/140679/beginner-geek-how-to-start-using-the-linux-terminal/) or [Terminal for macOS](https://macpaw.com/how-to/use-terminal-on-mac).

4. Create a new directory to use for your project and change into it

    ```bash
    mkdir myNewProject
    cd myNewProject
    ```

5. Initialize a new project

    ```bash
    npm init
    ```

Now you have a `package.json` file, which includes the packages and applications your project depends on, and specific metadata like the project's name, description, and author. Whenever you install packages, those packages will be added to this file as a dependency. For more information, see this excellent [package.json guide](https://flaviocopes.com/package-json/).

## Step 2. Install packages

The JavaScript client library is organized in packages, which contain related methods. For example, the `core` package contains methods for requesting information from nodes, creating transactions, and sending them to nodes.

All the packages are listed on the [iota.js GitHub repository](https://github.com/iotaledger/iota.js/tree/next/packages).

To install the library packages, you can use one of the following package managers:

- [npm](https://www.npmjs.com/) (included in Node.js downloads)
- [Yarn](https://yarnpkg.com/)

In a command-line interface, change into the directory where you initialized your project, and install the packages

--------------------
### npm
This command installs the `core` and `converter` packages

```bash
npm install @iota/core
```
---
### Yarn
This command installs the `core` and `converter` packages

```bash
yarn add @iota/core
```
--------------------

If everything went well, you should see something like the following in the output. You can ignore any 'npm WARN' messages.

```shell
+ @iota/core@1.0.0-beta.8
added 19 packages from 10 contributors and audited 68 packages in 5.307s
found 0 vulnerabilities
```

After installing a package, you'll have a `node_modules` directory, which contains the packages' code and any dependencies.

Now you can start coding.

## Step 3. Connect to a node

It's best practice to make sure that you're connected to a synchronized node before you start sending transactions to it. This way, you know that it has an up-to-date view of the Tangle. For more information, see [Nodes](../understanding-iota/nodes.md).

Whenever you connect to a node, you need to know which IOTA network it's in. 

In this step, you connect to a node on the Devnet.

1. Go to the IOTA Foundation [Discord](https://discord.iota.org) and enter **!milestone** in the `botbox` channel

    ![Entering !milestone on Discord](../images/discord-milestone-check.PNG)

    The Discord bot should return the current `latestMilestoneIndex` field from a [node quorum](../references/glossary.md#node-quorum).

2. In the directory where you initialized your project, create a new file called `index.js`

3. To check if your node is synchronized, copy and paste the following code into the `index.js` file

    ```js
    // Require the client libraries
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

4. Execute the file

    ```bash
    node index.js
    ```

The node returns something like the following:

```json
{
    "appName": "IRI Testnet",
    "appVersion": "1.5.6-RELEASE",
    "jreAvailableProcessors": 8,
    "jreFreeMemory": 12052395632,
    "jreVersion": "1.8.0_181",
    "jreMaxMemory": 22906667008,
    "jreTotalMemory": 16952328192,
    "latestMilestone": "FPRSBTMKOP9JTTQSHWRGMPT9PBKYWFCCFLZLNWQDFRCXDDHZEFIEDXRIJYIMVGCXYQRHSZQYCTWXJM999",
    "latestMilestoneIndex": 1102841,
    "latestSolidSubtangleMilestone": "FPRSBTMKOP9JTTQSHWRGMPT9PBKYWFCCFLZLNWQDFRCXDDHZEFIEDXRIJYIMVGCXYQRHSZQYCTWXJM999",
    "latestSolidSubtangleMilestoneIndex": 1102841,
    "milestoneStartIndex": 434525,
    "neighbors": 3,
    "packetsQueueSize": 0,
    "time": 1549482118137,
    "tips": 153,
    "transactionsToRequest": 0,
    "features": ["snapshotPruning", "dnsRefresher", "testnet", "zeroMessageQueue", "tipSolidification", "RemotePOW"],
    "coordinatorAddress": "EQQFCZBIHRHWPXKMTOLMYUYPCN9XLMJPYZVFJSAY9FQHCCLWTOLLUGKKMXYFDBOOYFBLBI9WUEILGECYM",
    "duration": 0
}
```

### Run the code

We use the [REPL.it tool](https://repl.it) to allow you to run sample code in the browser.

Click the green button to run the code and see the results in the window.

<iframe height="600px" width="100%" src="https://repl.it/@jake91/Connect-to-a-node?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

### Reading the response object

If the `latestMilestoneIndex` field is equal to the one you got from Discord and the `latestSolidSubtangleMilestoneIndex` field, the node is synchronized.

If not, try connecting to a different node.

:::success: Congratulations :tada:
You've confirmed your connection to a synchronized node.
:::

## Step 4. Send a transaction to the node

In this step, you create a transaction that contains a "Hello world" message and send it to your connected node to attach it to the Tangle.

1. Define a depth and a minimum weight magnitude

    ```js
    const depth = 3;
    const minimumWeightMagnitude = 9;
    ```

2. Define an address to which you want to send a message

    ```js
    const address =
    'HEQLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWORLDHELLOWOR99D';
    ```

    :::info:
    This address does not have to belong to anyone. To be valid, the address just needs to consist of 81 trytes.
    :::

3. Define a seed

    ```js
    const seed =
    'PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX';
    ```

    :::info:
    Because this is a zero-value transaction, the seed is not used. However, the library expects a valid seed, so we use a random string of 81 characters.
    :::

4. Create a JSON message that you want to send to the address and convert it to trytes

    ```js
    const message = JSON.stringify({"message": "Hello world"});
    const messageInTrytes = Converter.asciiToTrytes(message);
    ```

    :::info:
    The `asciiToTrytes()` method supports only [basic ASCII characters](https://en.wikipedia.org/wiki/ASCII#Printable_characters). As a result, diacritical marks such as accents and umlauts aren't supported.
    :::

5. Define a zero-value transaction that sends the message to the address

    ```js
    const transfers = [
    {
        value: 0,
        address: address,
        message: messageInTrytes
    }
    ];
    ```

6. Get tip transactions, do remote proof of work, and send your transaction to the node

    ```js
   IOTA.prepareTransfers(seed, transfers)
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

    In the console, you should see your transaction's hash, which looks something like the following:

    ```
    MAXPIKYYYNPRXXVIKNPZ9TSAVYTDEDAJOJHJVXGKLJADWDNHYNNNJJYSO9LYNVTXLJ9URVGMAEDPA9999
    ```

### Run the code

We use the [REPL.it tool](https://repl.it) to allow you to run sample code in the browser.

Click the green button to run the sample code in this tutorial and see the results in the window.

<iframe height="600px" width="100%" src="https://repl.it/@jake91/Send-a-hello-world-transaction?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>

:::success:Congratulations :tada:
You've just sent your first zero-value transaction. Your transaction is attached to the Tangle, and will be gossiped around the rest of the network.
:::

## Next steps

For a list of available tools for working with the Tangle, see [Developer tools](../clients/tools.md).

To continue learning how to use IOTA or for tutorials for different programming languages, see the [Client library](root://client-libraries/1.0/overview.md) documentation.
