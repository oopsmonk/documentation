# Sending automated spam transactions

**In some cases, you may want to send a batch of transactions, using your node. For example, in a spamming event where the community tests the throughput of the network. This topic explains how to automate spam transactions, using the `Spammer` plugin.**

## Enabling the plugin

You can enable the `Spammer` plugin by adding it to the `enablePlugins` field of the `node` object in the `config.json` file.

```json
"node": {
    "alias": "",
    "showAliasInGetNodeInfo": false,
    "disablePlugins": [],
    "enablePlugins": ["Spammer"]
  },
```

## Configuring the plugin

The `Spammer` plugin allows your node to send a number of zero-value transactions at regular intervals.

The interval is set in the `tpsratelimit` field, which is the number of transactions per second (TPS) that the plugin should try to send. See the [Hornet wiki](https://github.com/gohornet/hornet/wiki/Configuration#Spammer) for more information about configuration options.

For example, this configuration sends 1 transaction every 10 seconds.

```json
"spammer": {
    "address": "HORNET99INTEGRATED99SPAMMER999999999999999999999999999999999999999999999999999999",
    "depth": 3,
    "message": "Spamming with HORNET tipselect",
    "tag": "HORNET99INTEGRATED99SPAMMER",
    "tpsratelimit": 0.1,
    "cpuMaxUsage": 0.5,
    "workers": 1
  }
```

The `tpsratelimit` field is limited by the capabilities of your device. If your device is not powerful enough to send the specified number of transactions, it will not reach the given TPS.
