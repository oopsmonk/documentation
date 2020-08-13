# Production checklist

**This topic lists some important considerations for deploying a production application on IOTA.** 

## Connect to the Mainnet 

When deploying your application in a production environment, you should connect to a node on the [Mainnet](../networks/mainnet.md). This network uses the IOTA token that's traded on cryptocurrency exchanges.

To connect to the Mainnet, you need the URL or IP address of a Mainnet node.

Connecting to third-party nodes is convenient, but comes at a disadvantage if you need a reliable service.

- Your transactions will compete with other transactions that the node receives and will be processed with a priority that the node decides
- You might be requested to pay for fast PoW computation or to provide a transaction that includes proof of work
- A copy of your transactions might be kept only for a limited time that's decided by the IOTA node

To overcome these disadvantages, it's best to run your own node and connect your application to it for direct access to the Tangle. Your own node gives you more control on how fast your transactions are attached to the Tangle and allows you to store them permanently. For the steps involved in setting up a node, see [Running a node](../running-nodes/running-a-node.md).