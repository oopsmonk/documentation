# Set up a one-command private Tangle

**In this tutorial, you set up your own IOTA network by using a single Docker command. When you run this command, you'll have your own IOTA test network and 2.7Pi (the maximum amount) of test IOTA tokens. You can use this application to test your ideas and applications without risking any monetary value.**

:::info:Go to GitHub
For quickstart instructions or to read the source code, [see the GitHub repository](https://github.com/iota-community/one-command-tangle).
:::

The test network runs one IRI node and an instance of [Compass](root://compass/1.0/overview.md) on your localhost (not connected to the Internet).

The total supply of tokens are stored on the first address of this seed: `SEED99999999999999999999999999999999999999999999999999999999999999999999999999999`.

## Prerequisites

To use this application, you need the following:

- 4 GB of RAM
- [Docker and Docker Compose](https://docs.docker.com/compose/install/)
- [Git](https://git-scm.com/downloads)

## Step 1. Run the application

1. Clone this repository

    ```bash
    git clone https://github.com/iota-community/one-command-tangle.git
    ```
 
2. In the `one-command-tangle` directory, execute the `docker-compose up` command

    :::info:
    If you're using a Debian-based operating system, you may need to add `sudo` before this command.
    :::

 In the console, you should see that the IRI node is running and receiving milestones from Compass.
 
 ![Compass and IRI node logs](../images/cli.gif)

 :::info:
 Compass uses a pre-built Merkle tree (in the `layers` directory) with a depth of 20. This Merkle tree is large enough for Compass to send milestones for over a year at 30-second intervals.
 :::
 
## Step 2. Interact with the network

When the application is running, you can interact with the network through the IRI node's API port at the following address `http://localhost:14265`.

See a list of [API endpoints](root://iri/1.0/references/iri-api-reference.md).

--------------------
### GetBalances
Using the [core JavaScript client library](root://core/1.0/overview.md) with Node.js, you can call the [`getBalances`](root://iri/1.0/references/iri-api-reference.md#getbalances) endpoint to get the total balance of the seed.


 ```js
 var request = require('request');

 const iota = require('@iota/core');

 Iota = iota.composeAPI({
     provider: 'http://localhost:14265'
 });

 var address = iota.generateAddress('SEED99999999999999999999999999999999999999999999999999999999999999999999999999999',0);

 getBalance(address);

 function getBalance(address) {

     var command = {
     'command': 'getBalances',
     'addresses': [
     address
     ]
     }

     var options = {
     url: 'http://localhost:14265',
     method: 'POST',
     headers: {
     'Content-Type': 'application/json',
     'X-IOTA-API-Version': '1'
     },
     json: command
     };

     request(options, function (error, response, data) {
         if (!error && response.statusCode == 200) {
         console.log(JSON.stringify(data,null,1));
         }
     });
 }
 ```
---
### Response
```json
{
 "balances": [
  "2779530283277761"
 ],
 "references": [
  "BDZPAONKWQTVCXFFO9GBTJ9GGWPRLITXZ9BMYALTCVWNOLFYPNHFJHPDWICRPGCZWUNDQHV9UDEXGW999"
 ],
 "milestoneIndex": 7,
 "duration": 1
}
```
--------------------

## Step 3. Connect to your private Tangle through a wallet

If you want to send and receive transactions through a user interface, you can connect to your private Tangle through one of the IOTA wallets.

We have two wallets that you can use:

- [**Light wallet:**](../tutorials/connect-to-light.md) You can connect to your private Tangle without exposing your IRI node to the Internet
- [**Trinity:**](../tutorials/connect-to-trinity.md) You must expose your IRI node to the Internet through an HTTPS connection

## Restarting the network

If you want to restart the network, press **Ctrl + C**. Then, in the `.env` file, remove the `-bootstrap` flag from the `EXTRA_COMPASS_FLAGS` variable before running the command again.

## Next steps

See the [client libraries](root://client-libraries/1.0/overview.md) for help building applications on your new private Tangle.
