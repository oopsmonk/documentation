# Enabling remote proof of work

**Nodes can do remote proof of work for new transactions, but this feature is disabled by default. This topic discusses how to enable remote proof of work.**

Remote proof of work is the practice of doing proof of work on your node.

This operation is resource-intensive and uses computational power on the device that's running the node.

Allowing your node to do remote PoW, means that anyone who sends a request to the `attachToTangle` endpoint can ask your node to do proof of work for their transactions.

Therefore, if you plan on exposing your API to the Internet, see [Securing your API](../guides/securing-your-api.md).

You can enable remote proof of work, using the `httpAPI` object in your configuration file.

```json
"httpAPI": {
    "permitRemoteAccess": [
      "attachToTangle"
    ],
}
```

Now, your node will do proof of work for all transactions sent to this endpoint.

