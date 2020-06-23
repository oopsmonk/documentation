# Run the permanode CLI

**In this tutorial, you use Chronicle's built-in permanode CLI to start storing transactions on a local Scylla node.**

## Prerequisites

To complete this tutorial, you need the following:

- A [Linux Ubuntu operating system](https://ubuntu.com/download#download)
- [Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html)
- (Optional) An IDE that supports Rust autocompletion such as [Visual Studio Code](https://code.visualstudio.com/Download) with the [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=matklad.rust-analyzer) extension

## Step 1. Set up a Scylla node

You must be connected to at least one Scylla node to start storing transactions.

For the purposes of this tutorial, you can start a local Scylla node in a Docker container. See the [Scylla documentation](https://www.scylladb.com/download/?platform=docker).

:::info:
Running Scylla in a Docker container is recommended only testing purposes.

For production applications, it's best to do the following:
- Install Scylla on a native operating system
- Set up many Scylla nodes so that you can recover data if a node goes down.
:::

## Step 2. Install and configure Chronicle

In this step, you download the code from GitHub and configure it to connect to your local Scylla node.

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

3. If you want to load historical transactions into your Scylla node, download them from the [IOTA Foundation's archive](https://dbfiles.iota.org/?prefix=mainnet/history/), and add the file paths to the `files` field

6. If you want to get transactions from more than one IOTA node, add their URLs to the `trytes_nodes` and `sn_trytes_nodes` fields

    The permanode service will get all transactions that include a valid proof of work from the nodes in the `trytes_nodes` field. See the `trytes`

    The permanode service will get all confirmed transactions from the nodes in the `sn_trytes_nodes` field.
    :::

## Step 3. Run the service

In this step, you run the permanode service, and examine the logs to make sure that it is receiving and storing transactions.


## Step 4. Test the API

In this step, you use the API to query your Scylla node for the transactions that it has stored.

1. Go to [thetangle.org](https://thetangle.org/) and copy the transaction hash of a recent transaction to your clipboard

2. Paste your transaction hash into the `hashes` array and send the request to the `getTrytes` endpoint

    ```bash
    curl http://localhost:4000/api \
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

:::success: Congratulations :tada:
Chronicle is now saving all transaction data to your Scylla node.
:::


