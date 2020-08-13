# Troubleshooting

**This topic contains known issues that you may find while using IRI and some suggested steps to resolve them.**

:::danger:
This software is now **deprecated**. See [Hornet](root://hornet/1.1/overview.md) for an up-to-date node software.
:::

## The IOTA node won't synchronize with its neighbors

It may take some time for the IOTA node to synchronize, so we recommend that you wait a while to see if it synchronizes by itself.

If the IOTA node still doesn't synchronize, see the following steps:

- [Make sure that you have 6 or 7 neighbors](../tutorials/find-neighbors.md)

- Make sure that you're running the [latest version of the IRI](https://github.com/iotaledger/iri/releases)

- Make sure that your node's neighbors are sending data among each other. Call the `getNeighbors` endpoint to see both the incoming transactions (`numberOfAllTransactions`) and the number of outgoing transactions (`numberOfSentTransactions`). If your neighbors aren't sending you data, find new neighbors to connect to.

    ```bash
    curl http://localhost:14265 -X POST -H 'Content-Type: application/json' -H 'X-IOTA-API-Version: 1' -d '{"command": "getNeighbors"}'
    ```

- Ask for more support on [Discord](https://discord.iota.org) either in our #help or #fullnodes channel