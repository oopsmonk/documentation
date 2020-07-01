# Managing fixed neighbors

**To synchronize with the rest of the network, nodes must communicate with their neighbors. Hornet has an autopeering feature that automatically adds and removes neighbors based on their health. However, you can also add fixed custom neighbors. This topic guides you through the process of finding custom neighbors, adding them to your node, and removing them from your node.**

## Finding neighbors

Anyone can run a node. If you want to connect to a particular node, you can ask the owner for the node's IP address or URL.

:::info:
Neighbors must be running a node on the same IOTA network as your node. If your neighbors are running on a different IOTA network, see [Connecting to a different IOTA network](../guides/changing-network.md).
:::

## Adding fixed neighbors

To add fixed neighbors, add their IP addresses or URLs to the `peers.identity` field in your `peering.json` file.

```json
"peers": [
    {
      "identity": "example.neighbor.com:15600",
    }
```

:::info:
These neighbors must also add you.
:::

## Removing fixed neighbors

To remove fixed neighbors, delete their IP addresses or URLs from the `peers.identity` field in your `peering.json` file.

```json
"peers": [
    {
      "identity": "",
    }
```