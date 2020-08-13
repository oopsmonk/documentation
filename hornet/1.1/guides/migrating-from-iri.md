# Migrating from IRI to Hornet

**This topic explains how to migrate to a Hornet node from IRI. It introduces the different options that you have, depending on whether you want to keep the existing transactions in your ledger.**

If you run an IRI node, we recommend migrating to Hornet because IRI will be updated only with bug fixes rather than future changes to the IOTA protocol.

You have the following options for migrating:

- Start a new Hornet node from the latest local snapshot
- Migrate your IRI node's ledger

## Starting a new Hornet node from the latest local snapshot

If you don't need to keep the transactions in your IRI node's ledger, you can simply install a new Hornet node. See [Choose an installation method](../tutorials/install-hornet.md).

By default, Hornet runs on the Mainnet, uses autopeering to connect to neighbors, and downloads the latest local snapshot from https://dbfiles.iota.org.

## Migrating your IRI node's ledger

If you want to keep all your current transactions, you need to use the [migration tool](https://github.com/acha-bill/iri-db-migration).

This tool reads all transactions from the IRI node and broadcasts them to your connected neighbors.

Before using this tool, you must do the following:

- Configure Hornet to start from a global snapshot
- Prepare IRI for migration

### Configuring Hornet to start from a global snapshot

Hornet will not accept transactions if their timestamps are older than the first milestone in its ledger. Therefore, unless you know that your transactions are younger than the [oldest recorded local snapshot](https://dbfiles.iota.org/?prefix=mainnet/hornet/) (31 May 2020), you should start Hornet from the last global snapshot (July 2019).

1. Install Hornet. See [Choose an installation method](../tutorials/install-hornet.md).

    :::warning:
    Don't start Hornet yet. You still need to configure it.
    :::

2. In your `hornet` directory, add the latest global snapshot data

    You can find this data in the [IRI GitHub repository](https://github.com/iotaledger/iri/tree/dev/src/main/resources).

3. In your Hornet configuration file, make sure that your node is loading the global snapshot data by setting the `loadType` field to `global` in your configuration file

    ```json
    "snapshots": {
        "loadType": "global",
    ```

    Now, you're node will use the settings in the `snapshots.global` object.

    You can use the default settings for this object because the file names match those that you got from the IRI GitHub repository.

    ```json
    "snapshots": {
        "global": {
        "path": "snapshotMainnet.txt",
        "spentAddressesPaths": [
            "previousEpochsSpentAddresses1.txt",
            "previousEpochsSpentAddresses2.txt",
            "previousEpochsSpentAddresses3.txt"
        ],
        "index": 1050000
        },
    ```

4. To make sure that Hornet does not delete old transactions, disable pruning by setting the `pruning.enabled` field to `false`.

    ```json
    "pruning": {
        "enabled": false,
        "delay": 40000
    }
    ```

5. To make sure that Hornet accepts your IRI node as a neighbor, add it to the `peering.json` file.

    ```json
    "peers": [
        {
        "identity": "your.iri-node.com:15600",
        "alias": "IRI",
        "preferIPv6": false
        }
    ```

6. Restart Hornet

After restarting Hornet, you're ready to prepare IRI for the migration.

### Preparing IRI for migration

If your IRI node is connected to more than one neighbor, the migration tool will broadcast transactions only to the first node. Therefore, to prepare IRI for migration, do the following:

- Remove all your neighbors
- Add your Hornet node as a neighbor

After completing these tasks, you can follow the instructions in the [migration tool GitHub repository](https://github.com/acha-bill/iri-db-migration) to migrate your transactions from IRI to your Hornet.

## Configuring your Hornet node

For more information about configuring Hornet, see the following guides:

- [Securing your API](../guides/securing-your-api.md)
- [Enabling remote proof of work](../guides/allowing-remote-pow.md)
- [Configuring local snapshots](../guides/configuring-snapshots.md)
- [Managing fixed neighbors](../guides/managing-neighbors.md)
- [Setting up your dashboard](../guides/setting-up-dashboard.md)
