# Enabling remote proof of work

**Nodes can do remote proof of work (PoW) for new transactions, but this feature is disabled by default. This topic discusses how to enable remote PoW.**

Remote PoW is the practice of doing PoW on your node.

This operation is resource-intensive and uses computational power on the device that's running the node.

Allowing your node to do remote PoW, means that anyone who sends a request to the `attachToTangle` endpoint can ask your node to do PoW for their transactions.

Therefore, if you plan on exposing your API to the Internet, see [Securing your API](../guides/securing-your-api.md).

You can enable remote PoW, using the `httpAPI` object in your configuration file.

```json
"httpAPI": {
    "permitRemoteAccess": [
      "attachToTangle"
    ],
}
```

Now, your node will do PoW for all transactions that are sent to this endpoint.

