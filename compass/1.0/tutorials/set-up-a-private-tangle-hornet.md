# Set up a private Tangle as a Hornet plugin

**In this tutorial, you install a private Tangle, which consists of a Hornet node and Compass on the same server or virtual machine.**

![Single-node private Tangle](../images/single-node-tangle.svg)

## Prerequisites

A Linux server with the following minimum requirements. If you are on a Windows or macOS operating system, you can [create a Linux server in a virtual machine](root://general/0.1/how-to-guides/set-up-virtual-machine.md).

- A new installation of an Ubuntu 18.04 server
- 1 GB RAM
- 4+ CPU cores, the more cores the faster the Merkle tree will be generated
- 10 GB of disk space

## Step 1. Install Hornet

Hornet is node software that comes with a default plugin for running Compass.

You can find [instructions for running Hornet](https://github.com/gohornet/hornet/wiki/Tutorials%3A-Linux%3A-Install-HORNET) on the GitHub wiki.

:::warning:You must not start Hornet yet
In the Installation section, ignore the steps that say to start Hornet.
:::

## Step 2. Compute the Merkle tree

In this step, you generate a [Merkle tree](root://getting-started/0.1/network/the-tangle.md#milestones) for Compass to use to sign milestones.

Hornet includes a tool for computing a Merkle tree signature scheme for Compass to use.

1. Open your Hornet configuration file

	```bash
	sudo nano /var/lib/hornet/config.json
	```

2. Enable the Compass (Coordinator) plugin

	```bash
	"node":{
    "alias": "Coordinator",
    "showAliasInGetNodeInfo": false,
    "disablePlugins": [],
    "enablePlugins": ["Coordinator"]
	},
	```

3. Configure the `snapshots` object to make sure the node doesn't load any default transactions from another network

	```bash
	"snapshots": {
    "loadType": "global",
    "global": {
        "path": "snapshot.csv",
        "spentAddressesPaths": [],
        "index": 0
    	}
	},
	```

3. Configure the `coordinator` object to customize Compass

	```
	"coordinator":{
    "merkleTreeDepth":16,
    "mwm":5,
    "stateFilePath":"coordinator.state",
    "merkleTreeFilePath":"coordinator.tree",
    "intervalSeconds":60,
    "checkpointTransactions":5
	},
	```

	A depth of 16 and an interval of 60 seconds allows Compass to send milestones for around 45 days.

	A low minimum weight magnitude (`mwm`), makes it faster to create transactions because of the reduced proof of work.

	:::info:
    See the [Hornet configuration documentation](https://github.com/gohornet/hornet/wiki/Configuration#Coordinator) for more information.
	:::

4. Create a seed for Compass. Compass will use this seed to derive public/private keys for the Merkle tree signature scheme.

	```bash
	cat /dev/urandom |LC_ALL=C tr -dc 'A-Z9' | fold -w 81 | head -n 1 
	```

	If you're just testing the setup, you can use this example seed. But, make sure to change this before exposing your private Tangle to the Internet.

	```bash
	PUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX
	```

5. Create a backup of the seed

	:::danger:Keep your seed safe
	An attacker with the seed could send fraudulent milestones and disrupt the operation of the network.
	:::

6. Generate the Merkle tree. Replace the `$YOURSEED` placeholder with your seed.

	```bash
	sudo -u hornet COO_SEED="$YOURSEED" hornet -d /var/lib/hornet tool merkle
	```

	You should see something like the following:

	```
	calculating 65536 addresses...
	calculated 5000/65536 (7.63%) addresses. 2m31s left...
	calculated 10000/65536 (15.26%) addresses. 2m15s left...
	calculated 15000/65536 (22.89%) addresses. 2m1s left...
	calculated 20000/65536 (30.52%) addresses. 1m49s left...
	calculated 25000/65536 (38.15%) addresses. 1m37s left...
	calculated 30000/65536 (45.78%) addresses. 1m25s left...
	calculated 35000/65536 (53.41%) addresses. 1m12s left...
	calculated 40000/65536 (61.04%) addresses. 1m0s left...
	calculated 45000/65536 (68.66%) addresses. 48s left...
	calculated 50000/65536 (76.29%) addresses. 37s left...
	calculated 55000/65536 (83.92%) addresses. 25s left...
	calculated 60000/65536 (91.55%) addresses. 13s left...
	calculated 65000/65536 (99.18%) addresses. 1s left...
	calculated 65536/65536 (100.00%) addresses (took 2m35s).
	calculating nodes for layer 15
	calculating nodes for layer 14
	calculating nodes for layer 13
	calculating nodes for layer 12
	calculating nodes for layer 11
	calculating nodes for layer 10
	calculating nodes for layer 9
	calculating nodes for layer 8
	calculating nodes for layer 7
	calculating nodes for layer 6
	calculating nodes for layer 5
	calculating nodes for layer 4
	calculating nodes for layer 3
	calculating nodes for layer 2
	calculating nodes for layer 1
	calculating nodes for layer 0
	merkle tree root: JVYYBXNZMGVLPYMPGAWQTZTNOPWKVEY9MWBVGNRSDLY9BLCCLIEHTEHSVVPQKFAEDOFTWLZQKEPGBUHSB
	successfully created merkle tree (took 2m35s).
	```

7. Copy the Merkle tree root from the output of the previous command

8. Open your Hornet configuration file

	```bash
	sudo nano /var/lib/hornet/config.json
	```

9. Paste the Merkle root into the `address` field of the `coordinator` object

	```bash
	"coordinator": {
    "address": "JVYYBXNZMGVLPYMPGAWQTZTNOPWKVEY9MWBVGNRSDLY9BLCCLIEHTEHSVVPQKFAEDOFTWLZQKEPGBUHSB",
    "securityLevel": 2,
    "merkleTreeDepth": 16,
    "mwm": 5,
    "stateFilePath": "coordinator.state",
    "merkleTreeFilePath": "coordinator.tree",
    "intervalSeconds": 60,
    "checkpointTransactions": 5
	},
	```

## Step 3. Distribute some IOTA tokens in your network

In this step, you configure your private Tangle so that one of your own addresses contains the total supply of IOTA tokens.

1. Create a new seed and generate an address for it

	If you're just testing the setup, you can use this example seed. But, make sure to change this before exposing your private Tangle to the Internet.

	```bash
	GUEOTSEITFEVEWCWBTSIZM9NKRGJEIMXTULBACGFRQK9IMGICLBKW9TTEVSDQMGWKBXPVCBMMCXWMNPDX
	```

	This is the first address for this seed.

	```
	HYHSSNWMLOSRLV9ULBYTAFVQUPZLBKAGSRJOVD9X9MBELPKNMX9SWKFNYGBHQVCHLXKRIRNOAUD9MPNCW
	```

2. Create a backup of the seed

	:::danger:Keep your seed safe
	An attacker with the seed could steal all the IOTA tokens from your address.
	:::

3. Change into the `hornet` directory

	```bash
	cd /var/lib/hornet
	```
	
4. Create a new file called `snapshot.csv` and assign the total supply of IOTA tokens to your address. Replace the `$YOURADDRESS` placeholder with your own address

	```bash
	$YOURADDRESS;2779530283277761
	```

## Step 4. Start Compass

In this step, you run Hornet with the Coordinator plugin so that it can start confirming transactions on your private Tangle.

1. Change into the `hornet` directory

	```bash
	cd /var/lib/hornet
	```

2. Run Hornet. Replace the `$YOURSEED` placeholder with your seed.

	```bash
	sudo COO_SEED="$YOURSEED" -u hornet hornet --cooBootstrap
	```

	Wait until Hornet has sent at least one milestone to your node.

	You should see something like the following for each new milestone:

	```	
	2020-05-28T17:50:42+02:00       INFO    Coordinator     milestone issued (1): HTORGVDVMJSUHNDZGOTOHLRQVAISGPRTHGDZOIFWBAOKC9YSZSLQ9SXE9BXWACITIGQHCJLLXBHSJPXZ9
	2020-05-28T17:50:42+02:00       INFO    Tangle  Run solidity check for Milestone (1)...
	2020-05-28T17:50:42+02:00       INFO    Tangle  Valid milestone detected! Index: 1, Hash: HTORGVDVMJSUHNDZGOTOHLRQVAISGPRTHGDZOIFWBAOKC9YSZSLQ9SXE9BXWACITIGQHCJLLXBHSJPXZ9
	```

3. Stop Hornet (**CTRL+C**) and start it again as a service

	```bash
	sudo systemctl enable hornet.service
	sudo service hornet start
	```

:::success:Congratulations :tada:
You have a private Tangle in which you own the total supply of IOTA tokens.
:::

## Step 5. Test your network

In this step, you interact with the network through the node's API port at the following address: http://localhost:14265.

For a list of API endpoints see the [node API reference](root://iri/1.0/references/iri-api-reference.md).

--------------------
### getBalances
Call the [`getBalances`](root://iri/1.0/references/iri-api-reference.md#getbalances) endpoint to get the total balance of your seed.

 ```js
 var request = require('request');

 const iota = require('@iota/core');

 Iota = iota.composeAPI({
     provider: 'http://localhost:14265'
 });

 const address = "HYHSSNWMLOSRLV9ULBYTAFVQUPZLBKAGSRJOVD9X9MBELPKNMX9SWKFNYGBHQVCHLXKRIRNOAUD9MPNCW";

 getBalance(address);

 function getBalance(address) {

     var command = {
     'command': 'getBalances',
     'addresses': [
     address
     ],
     'threshold':100
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
### Example response

This example response shows that you have a balance of 2.7Pi.

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
 
## Step 6. Add more Hornet nodes to your private Tangle

In this step, you add more nodes to your network. The more nodes you have, the more nodes are validating transactions, making your network more distributed.

1. Install another Hornet node

2. Copy the `config.json` and `snapshot.csv` files from your Compass node and add them to the `/var/lib/hornet` directory of your new node

3. In the `config.json` file of your new node, disable the Coordinator plugin

	```bash
	"node":{
    "alias": "node1",
    "showAliasInGetNodeInfo": false,
    "disablePlugins": [],
    "enablePlugins": [""]
	},
	```

4. Start your new node

## Next steps

See the [Hornet FAQ](https://github.com/gohornet/hornet/wiki/FAQ) for more information.
