# Hosting an autopeering entry node

**The role of an entry nodes is to send a list of neighbors to new nodes on an IOTA network so that they can connect to them. This topic explains how to use your node as an entry node to help others to autopeer with neighbors in your IOTA network.**

:::info:
By using a Hornet node as an entry node, it will no longer participate in gossiping or consensus.
:::

## Generating a seed

To allow new nodes to verify that messages came from their trusted entry node, the entry node's messages are signed with its private key.

Both the public and private keys are derived from the entry node's base64-encoded 256-bit seed.

You have two options for generating a seed for your entry node:

- Use a true random number generator (recommended for production use)

- Use Hornet's built-in [seed generator tool](https://github.com/gohornet/hornet/wiki/Tools)

When you have a seed, add it to the `network.autopeering.seed` field in your configuration file, and set the `runAsEntryNode` field to `true`.

```json
"network": {
    "autopeering": {
        "bindAddress": "0.0.0.0:14626",
        "runAsEntryNode": true,
        "seed": "7xFNTP5Fc3wnD78LarNTrvRoKiLESA9qecn3eR5HSVBj"
    }
}
```

## Getting your node's public key

When you start Hornet, the logs will contain your node's public key.

```bash
INFO    Autopeering     Autopeering started: ID=a0ba6bf62d6fe911 Address=0.0.0.0:14626/udp PublicKey=yt0URaOzv819RIIgSE/NzJBVh8Lgn+tNTekvfB0O/UE=
```

Other nodes on your local network can use this public key to connect to your entry node. See [Connecting to an autopeering entry node](../guides/connecting-to-entry.md).

## Monitoring your entry node

You can monitor your entry node with the `healthz` API endpoint `host:api-port/healthz`.

This endpoint returns an HTTP 200 status code if everything is OK.

## Hosting a public entry node

If you want to allow anyone to use your entry node to join the network, you can request to have it added to Hornet's official entry nodes by contacting the Hornet team on the #hornet channel on [Discord](https://discord.iota.org/).

By doing so, your entry node may be monitored by any other nodes through the `healthz` endpoint. Therefore, before hosting a public entry node, consider the following:

- You should be experienced with servers and server security
- You should have a domain name with both an A (IPv4) and AAAA (IPv6) record
- You must be able to update your entry node after every new Hornet release