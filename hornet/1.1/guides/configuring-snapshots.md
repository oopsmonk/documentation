# Configuring local snapshots

**Over time, your node's ledger accumulates many transactions, which use a lot of memory. This topic discusses how to configure local snapshots to prune old transactions from your node's database and to create backup snapshot files.**

## Enabling local snapshots

If you want your node to do local snapshots, you need to make sure that your node is using the local snapshot settings.

To do so, set the `loadType` field to `local` in your configuration file.

```json
"snapshots": {
    "loadType": "local",
```

Now, you're node will use the settings in the `snapshots.local` object.

```json
"local": {
    "depth": 20,
    "intervalSynced": 50,
    "intervalUnsynced": 1000,
    "path": "export.bin",
    "downloadURL": "https://ls.manapotion.io/export.bin"
},
```

## Configuring local snapshot backups

When local snapshots are enabled, your node will start synchronizing from the files in the directory that's specified in the `path` field. If this directory does not exist, your node will try to download it from the URL in the `downloadURL` field.

The frequency with which your node creates local snapshot backups is defined by the `intervalSynced` and `intervalUnsynced` fields. For more information about these fields see [Configuration](https://github.com/gohornet/hornet/wiki/Configuration#Snapshots) on the Hornet wiki.

The `depth` field is used for pruning.

## Enabling snapshot pruning

During a local snapshot, transactions may be deleted from the ledger if they were confirmed by an old milestone. This process is called pruning.

To enable pruning, set the `snapshot.pruning` field is set to `enabled`.

```json
"pruning": {
      "enabled": true,
    }
```

## Choosing how long to keep transactions 

An old milestone is one that has an index greater than the combined value of the `snapshots.local.depth` and `snapshots.pruning.delay` settings. This value is called the pruning timeline.

The values that you choose for these settings depend on how often the Coordinator attaches milestones to the Tangle in your IOTA network.

For example, when milestones are attached every two minutes, like in the Mainnet, you can use the following calculations:

- **Pruning timeline:** `depth` + `delay` 

- **Total time in minutes:** Pruning timeline / 120

- **Total time in days:** Total time in minutes / 24

For example, for the following example configuration, the sum of the `delay` and `depth` fields is 40,050. Therefore, the node will delete transactions that are older than approximately 14 days.

```
40,050 / 120 = 333.75 minutes
333.75 / 24 = 13.9 days
```

```json
"local": {
    "depth": 50,
    "intervalSynced": 50,
    "intervalUnsynced": 1000,
    "path": "export_comnet.bin",
    "downloadURL": "https://ls.manapotion.io/comnet/export.bin"
},
```

```json
"pruning": {
      "enabled": true,
      "delay": 40000
    }
```



