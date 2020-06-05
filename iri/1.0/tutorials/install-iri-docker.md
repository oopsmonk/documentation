# Run an IRI node in a Docker container

**In this tutorial, you download the IRI Docker image and run it in a Docker container.**

## Prerequisites

To complete this tutorial, you need the following:

- 4GB RAM
- 64-bit processor
- A [public IP address](root://general/0.1/how-to-guides/expose-your-local-device.md) that's either static or connected to a dynamic DNS service such as [duckdns.org](https://www.duckdns.org)
- Ports 15600 and 14265 must be open. One way of opening ports is by [forwarding them](root://general/0.1/how-to-guides/expose-your-local-device.md) to the device that's running the IOTA node.
- [Docker](https://docs.docker.com/install/#supported-platforms).

:::info:
If you're using a Debian-based operating system, add `sudo` before the commands in the following tasks.
:::

## Step 1. Run IRI

To run IRI, you download and run the [IRI Docker image](https://hub.docker.com/r/iotaledger/iri).
    
1\. Create a `config.ini` file in a new directory, and add your configuration options to it

These are some example configurations:

--------------------
### Mainnet

This file configures IRI to run on the Mainnet, exposes the API on port 14265, and keeps all transactions in the ledger instead of doing [local snapshots](root://getting-started/0.1/network/nodes.md#local-snapshots).

```bash
[IRI]
PORT = 14265
NEIGHBORING_SOCKET_PORT = 15600
NEIGHBORS = 
IXI_DIR = ixi
DEBUG = false
DB_PATH = mainnetdb
LOCAL_SNAPSHOTS_PRUNING_ENABLED = false
MWM = 14
```
---

### Devnet

This file configures IRI to run on the Devnet, exposes the API on port 14265, and does local snapshots.

These neighbors have autopeering enabled, so they will automatically add you as a neighbor.

```shell
[IRI]
PORT = 14265
TESTNET = true
NEIGHBORING_SOCKET_PORT = 15600
NEIGHBORS = tcp://p101.testnet.iota.cafe:14666 tcp://p102.testnet.iota.cafe:14666 tcp://p103.testnet.iota.cafe:14666 tcp://p104.testnet.iota.cafe:14666
IXI_DIR = ixi
DEBUG = false
LOCAL_SNAPSHOTS_ENABLED = true
LOCAL_SNAPSHOTS_PRUNING_ENABLED = true
```
--------------------

2\. Download the IRI Docker image and run it. Replace the `$PATH_TO_DIRECTORY` placeholder with the path to the directory where you saved the configuration file.

```bash
docker run --name iri --net=host -v $PATH_TO_DIRECTORY/config.ini:/path/to/conf/config.ini iotaledger/iri:latest -c /path/to/conf/config.ini
```

This command mounts the configuration file to the `path/to/conf` folder on the Docker container. You can change this path to mount the configuration file to a different folder.

:::info:
To have the IRI Docker container restart on every reboot, add the `--restart=always` flag to the `docker run` command.
:::

:::success:Congratulations :tada:
Now that your node is up and running, it'll start to synchronize its ledger with the network. Give your node some time to synchronize.
:::

## Step 2. Check that the IOTA node is synchronized

An IOTA node is considered synchronized when the `latestMilestoneIndex` field is equal to the `latestSolidSubtangleMilestoneIndex` field:

- `latestMilestoneIndex`: Index of the latest milestone that the IOTA node has received from its neighbors. This field is accurate only when the IOTA node is connected to synchronized neighbors.

- `latestSolidSubtangleMilestoneIndex`: Index of the latest solid milestone that's in the IOTA node's ledger

1. To check the current `latestMilestoneIndex` field, go to our [Discord](https://discord.iota.org) and enter **!milestone** in the #botbox channel

    ![Entering !milestone on Discord](../images/discord-milestone-check.PNG)

2. To check these fields for your node, call the `getNodeInfo` endpoint

    ```bash
    sudo apt install curl jq
    curl -s http://localhost:14265 -X POST -H 'X-IOTA-API-Version: 1' -H 'Content-Type: application/json' -d '{"command": "getNodeInfo"}' | jq
    ```

    You should see something like the following in the output:

    ```json
    {
    "appName": "IRI",
    "appVersion": "1.7.0-RELEASE",
    "jreAvailableProcessors": 8,
    "jreFreeMemory": 2115085674,
    "jreVersion": "1.8.0_191",
    "jreMaxMemory": 20997734400,
    "jreTotalMemory": 4860129502,
    "latestMilestone": "CUOENIPTRCNECMVOXSWKOONGZJICAPH9FIG9F9KYXF9VYXFUKTNDCCLLWRZNUHZIGLJZFWPOVCIZA9999",
    "latestMilestoneIndex": 1050373,
    "latestSolidSubtangleMilestone": "CUOENIPTRCNECMVOXSWKOONGZJICAPH9FIG9F9KYXF9VYXFUKTNDCCLLWRZNUHZIGLJZFWPOVCIZA9999",
    "latestSolidSubtangleMilestoneIndex": 1050373,
    "milestoneStartIndex": 1039138,
    "lastSnapshottedMilestoneIndex": 1039138,
    "neighbors":6,
    "packetsQueueSize":0,
    "time":1548407444641,
    "tips":0,
    "transactionsToRequest":0,
    "features":["snapshotPruning","dnsRefresher","tipSolidification"],
    "coordinatorAddress": "EQSAUZXULTTYZCLNJNTXQTQHOMOFZERHTCGTXOLTVAHKSA9OGAZDEKECURBRIXIJWNPFCQIOVFVVXJVD9",
    "dbSizeInBytes": 144800000,
    "duration": 0
    }
    ```

    Make sure that the `latestMilestoneIndex` field is equal to the `latestSolidSubtangleMilestoneIndex` field.

    If these fields aren't equal, your node is not synchronized. See [Troubleshooting](../references/troubleshooting.md) for help.

## Next steps

[Set up a reverse proxy server](../tutorials/set-up-a-reverse-proxy.md).