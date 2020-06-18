# Run the permanode service

**In this tutorial, you use Chronicle's built-in permanode service to start storing transactions on a local Scylla node.**

## Prerequisites

To complete this tutorial, you need the following:

- A [Linux Ubuntu operating system](https://ubuntu.com/download#download)
- [Rust](https://www.rust-lang.org/tools/install)
- (Optional) An IDE that supports Rust autocompletion such as [Visual Studio Code](https://code.visualstudio.com/Download) with the [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer) extension

## Step 1. Set up a Scylla node

For the purposes of this tutorial, you can start a local Scylla node in a Docker container. See the [Scylla documentation](https://docs.scylladb.com/operating-scylla/procedures/tips/best_practices_scylla_on_docker/#starting-a-single-scylla-node).

:::info:
For production applications, it's best to set up many Scylla nodes so that you can recover data in the event that a node goes down.
:::

## Step 2. Install and configure the service

In this step, you download the code from GitHub and configure it to connect to your Scylla node.

To reduce the latency between Chronicle and the Scylla node, it's best to install Chronicle in the same datacenter as your Scylla node. For more information about datacenters, see the [Scylla University](https://university.scylladb.com/courses/scylla-essentials-overview/lessons/architecture/topic/datacenter/).

1. Clone the repository and change into the `chronicle.rs` directory

    ```bash
    git clone https://github.com/iotaledger/chronicle.rs.git
    cd chronicle.rs
    ```

2. Open the `examples/chronicle-alpha-v0_0_1/config.toml` file

    ```bash
    sudo nano examples/chronicle-alpha-v0_0_1/config.toml
    ```

3. Add the IP address of your Scylla node. Replace the`$IPADDRESS` placeholder with your Scylla node's IP address.

    ```bash
    [scylla_cluster]
    addresses = ["172.17.0.2:9042"]
    ```

4. Set the `replication_factor_per_data_center` to 1

    ```bash
    replication_factor_per_data_center = 2
    ```

    :::info:
    The replication factor is equivalent to the number of Scylla nodes on which you want to store the transactions.

    Because you have only one Scylla node, you can change the replication factor to 1.

    For details about this concept, see the [Scylla University](https://university.scylladb.com/courses/scylla-essentials-overview/lessons/high-availability/topic/fault-tolerance-replication-factor/).
    :::

5. If you want to load historical transactions into your Scylla node, download them from the [IOTA Foundation's archive](https://dbfiles.iota.org/?prefix=mainnet/history/), and add the file paths to the `files` field

6. If you want to get transactions from more than one IOTA node, add their URLs to the `trytes_nodes` and `sn_trytes_nodes` fields

    :::info:
    The permanode service will get all transactions that include a valid proof of work from the nodes in the `trytes_nodes` field.

    The permanode service will get all confirmed transactions from the nodes in the `sn_trytes_nodes` field.
    :::

## Step 3. Run the service

In this step, you run the permanode service, and examine the logs to make sure that it is receiving and storing transactions.

4. Open the broker `config.exs` file

    ```bash
    sudo nano apps/broker/config/config.exs
    ```

5. In the `tx_trytes` array, add the URL of one or more nodes that have ZMQ enabled

    ```bash
    {'zmq.iota.org',5556}
    ```

6. [Download the historical Tangle data](http://u204324-sub2.your-storagebox.de/) from November 2016 to July 2019

    **Username:** u204324-sub2
    **Password:** Ldtd22LiXaztAPUg

7. Move the downloaded files to the `/historical/data` directory

8. Change into the `historical` directory

    ```bash
    cd ..
    ```

9. Make sure that the `dmps.txt` file has all the names of the files that you moved to the `/historical/data` directory (without the `.dmp` file extension), then close the file

## Step 2. Compile Chronicle

1. Install the dependencies

    ```bash
    mix deps.get
    ```

2. Generate the phoenix secret and copy it to the clipboard

    ```bash
    mix phx.gen.secret
    ```

3. Compile the project

    ```bash
    mix deps.compile
    mix compile
    ```

## Step 3. Run Chronicle

To run Chronicle, execute the following command:

```
SECRET_KEY_BASE=theGenerated64-byteSecretString PORT=4000 HOST=localhost MIX_ENV=prod elixir --name app@hostname --cookie "MySecretChronicleCookie" -S mix run --no-halt
```

- `SECRET_KEY_BASE`: Your Phoenix secret from step 2.2
- `PORT`: The port that you want the API server to listen to
- `HOST`: The hostname or IP address that you want the API to listen to

:::info:
If the host is localhost, then the value of the `--name` flag can be `Chronicle@localhost`. Otherwise, replace localhost with your hostname.

Keep the value of the `--cookie` flag secret.
:::

You should see something like the following:

```bash
20:57:18.560 [info] TxFeeder is ready, topic: tx_trytes, host: zmq.iota.org
20:57:18.807 [info] Running ExtendedApiWeb.Endpoint with cowboy 2.6.3 at :::4000 (http)
20:57:18.822 [info] Access ExtendedApiWeb.Endpoint at http://localhost:4000
```

When Chronicle starts, you should see the `imported the last dmp 'milestone' file` message. When you see this message, you can check that the import was successful by opening the `dmps.txt` file and seeing that it's empty.

:::success: Congratulations :tada:
Chronicle is now saving all transaction data to your Scylla cluster.
:::

## Step 4. Test Chronicle

To make sure that Chronicle is receiving transaction data, use the API to query your Scylla cluster.

1. Go to [thetangle.org](https://thetangle.org/) and copy a transaction hash to your clipboard

2. In the command-line interface create a cURL request to the `getTrytes` endpoint of the Chronicle API. Paste your transaction hash into the `hashes` array, and replace the URL with the URL of your Chronicle node such as http://localhost:4000/api

    ```bash
    curl http://host:port/api \
    -X POST \
    -H 'Content-Type: application/json' \
    -H 'X-IOTA-API-Version: 1' \
    -d '{
    "command": "getTrytes",
    "hashes": [""]
    }'
    ```

You should see something like the following:

```json
{
"trytes": [{"address":"JPYUAV9MBDZG9ZX9BAPBBMYFEVORNBIOOZCYPZDZNRGKQYT9HFEXXXBG9TULULJIOWJWQMXSPLILOJGJG","attachmentTimestamp":1567166602904,"attachmentTimestampLowerBound":0,"attachmentTimestampUpperBound":12,"branchTransaction":"OLZDBGOWXCLNZPJZMFUVYPL9COCBSHPIJGIN9L9SNUMMYVZQNDVOCWOYYGJXKHEJGWANXWRBVELB99999","bundle":"VVCRIZWRJ9GOUJRXRBWDEULYKIBIZNKIWGCWZCWVBTVIBAHKVTWLGYQNIZ9JCZJKVEAXABBAUEIGNGWP9","currentIndex":0,"lastIndex":0,"nonce":"JVF9999999RMF99999999999999","obsoleteTag":"HUIWONTO9999999999999999999","signatureMessageFragment":"ODGAHDLDGDNCGDIDRCRCTCTCSCTCSCGADBZAABZACBCBXAABQAGAHDLDGDNCUCPCXC9DTCSCGADB9BBBABQAGAQCPCSCNCQCFDPCBDRCWCGADBVAUAVAZAQAGAQCPCSCNCHDFDIDBDZCGADBVAUAVAZAQAGAQCPCSCNCHDF...","snapshotIndex":null,"tag":"999GOPOW9ATTACHTOTANGLE9ZIG","timestamp":1567166602,"trunkTransaction":"BXZWFMSFBAYWJKJUAKWYTUCZRY9GMNETX9MLN9UKRR9ORGRRIENPERNWCLHBCE9XBMYHAMGFYRRL99999","value":0}]
}
```

:::info:
The `snapshotIndex` field is the index of the milestone that confirmed the transaction.

If this field is `null`, the transaction is pending.
:::

:::success: Congratulations :tada:
You successfully queried the data in the Chronicle database.
:::


