# Connecting to a custom autopeering entry node

**If you don't trust the default entry nodes to give your node honest neighbors, you can configure Hornet to use your own custom entry nodes. This topic explains how to connect to a custom entry node.**

## Configuring a custom entry node

By default, Hornet connects to entry nodes that are run by both the IOTA community and the IOTA Foundation.

To connect to a custom entry node, add its address to the `autopeering.entryNodes` field in your configuration file.

```json
"entryNodes": [
        "LehlDBPJ6kfcfLOK6kAU4nD7B/BdR7SJhai7yFCbCCM=@enter.hornet.zone:14626",
        "zEiNuQMDfZ6F8QDisa1ndX32ykBTyYCxbtkO0vkaWd0=@enter.manapotion.io:18626",
        "npLI53UCxBvOJaV0xv/mzWuV+f+pduc6GzE83jM/5uo=@entrynode.tanglebay.org:14626"
],
```

Entry nodes' addresses are defined in the following format: `public-key@host:autopeering-port`.